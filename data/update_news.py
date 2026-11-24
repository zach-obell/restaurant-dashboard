"""News updater, run by GitHub Actions.

TradingView's free news widget only carries stories for some tickers, so this
script pulls headlines for every company in data/companies.json from three free
sources (no API keys needed) and writes data/news.json for the site:

  1. Google News RSS   - searches news sites for the company's name
  2. Yahoo Finance RSS - ticker-specific finance headlines
  3. SEC EDGAR         - the company's own 8-K filings (earnings, CEO changes, deals)

Duplicates are removed, stories older than MAX_AGE_DAYS are dropped, and each
company keeps its newest MAX_PER_COMPANY stories. If every source fails for a
company, its previous headlines are kept, so the site never goes blank.

To tune a company's Google News search, add "news_query" to its entry in
companies.json, e.g. "news_query": "\"Brinker International\" OR \"Chili's\"".
Uses only the Python standard library.
"""
import html
import json
import re
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COMPANIES = ROOT / "data" / "companies.json"
OUTPUT = ROOT / "data" / "news.json"

MAX_AGE_DAYS = 30
MAX_PER_COMPANY = 20
BROWSER_HEADERS = {"User-Agent": "Mozilla/5.0 (restaurant-dashboard news updater)"}
# The SEC asks automated tools to identify themselves with a contact address.
SEC_HEADERS = {"User-Agent": "restaurant-dashboard zach-obell@users.noreply.github.com"}

# What each common 8-K item means, in plain words, for the headline.
SEC_ITEMS = {
    "1.01": "Entered a material agreement",
    "1.02": "Ended a material agreement",
    "2.01": "Completed an acquisition or sale of assets",
    "2.02": "Reported quarterly results",
    "2.03": "Took on new debt",
    "2.05": "Announced restructuring or exit costs",
    "2.06": "Recorded an impairment",
    "3.01": "Exchange listing notice",
    "5.02": "Executive or board change",
    "5.03": "Amended bylaws or charter",
    "5.07": "Shareholder vote results",
    "7.01": "Regulation FD disclosure",
    "8.01": "Other material event",
}
SKIP_ITEMS = {"9.01"}  # "financial statements and exhibits" just accompanies other items


def fetch(url, headers=BROWSER_HEADERS):
    request = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read()


def parse_date(text):
    if not text:
        return None
    text = text.strip()
    try:
        moment = parsedate_to_datetime(text)  # RSS style: "Tue, 24 Nov 2026 14:05:00 GMT"
    except (TypeError, ValueError):
        try:
            moment = datetime.fromisoformat(text.replace("Z", "+00:00"))  # Atom style
        except ValueError:
            return None
    if moment.tzinfo is None:
        moment = moment.replace(tzinfo=timezone.utc)
    return moment.astimezone(timezone.utc)


def clean(text):
    return re.sub(r"\s+", " ", html.unescape(text or "")).strip()


def plain_name(company):
    """'McDonald’s' -> McDonald's, 'Yum! Brands' -> Yum Brands, 'Restaurant Brands Intl.' -> full name."""
    name = company["name"].replace("’", "'").replace("!", "")
    return name.replace("Intl.", "International")


def google_news(company):
    query = company.get("news_query") or f'"{plain_name(company)}"'
    params = urllib.parse.urlencode({"q": f"{query} when:{MAX_AGE_DAYS}d", "hl": "en-US", "gl": "US", "ceid": "US:en"})
    root = ET.fromstring(fetch(f"https://news.google.com/rss/search?{params}"))
    stories = []
    for item in root.iter("item"):
        title = clean(item.findtext("title"))
        publisher = clean(item.findtext("source")) or "Google News"
        if title.endswith(f" - {publisher}"):  # Google appends " - Publisher" to every title
            title = title[: -len(publisher) - 3]
        stories.append({"title": title, "url": item.findtext("link"), "publisher": publisher,
                        "published": parse_date(item.findtext("pubDate")), "source": "Google News"})
    return stories


def yahoo_finance(company):
    params = urllib.parse.urlencode({"s": company["ticker"], "region": "US", "lang": "en-US"})
    root = ET.fromstring(fetch(f"https://feeds.finance.yahoo.com/rss/2.0/headline?{params}"))
    return [{"title": clean(item.findtext("title")), "url": item.findtext("link"), "publisher": "Yahoo Finance",
             "published": parse_date(item.findtext("pubDate")), "source": "Yahoo Finance"}
            for item in root.iter("item")]


def sec_filings(company):
    params = urllib.parse.urlencode({"action": "getcompany", "CIK": company["ticker"], "type": "8-K",
                                     "dateb": "", "owner": "include", "count": "10", "output": "atom"})
    root = ET.fromstring(fetch(f"https://www.sec.gov/cgi-bin/browse-edgar?{params}", SEC_HEADERS))
    ns = {"a": "http://www.w3.org/2005/Atom"}
    stories = []
    for entry in root.findall("a:entry", ns):
        summary = clean(re.sub(r"<[^>]+>", " ", entry.findtext("a:summary", "", ns)))
        items = [code for code in re.findall(r"Item (\d\.\d\d)", summary) if code not in SKIP_ITEMS]
        described = [SEC_ITEMS.get(code, f"Item {code}") for code in dict.fromkeys(items)]
        form = entry.find("a:category", ns)
        form = form.get("term") if form is not None else "8-K"
        link = entry.find("a:link", ns)
        stories.append({
            "title": f"{form}: " + ("; ".join(described) if described else "Current report"),
            "url": link.get("href") if link is not None else None,
            "publisher": "SEC EDGAR",
            "published": parse_date(entry.findtext("a:updated", "", ns)),
            "source": "SEC filing",
        })
    return stories


SOURCES = (google_news, yahoo_finance, sec_filings)


def dedupe_key(title):
    return re.sub(r"[^a-z0-9]+", " ", title.lower()).strip()[:80]


def collect(company, cutoff):
    stories, worked = [], False
    for source in SOURCES:
        try:
            found = source(company)
            worked = True
            print(f"  {source.__name__}: {len(found)}")
            stories.extend(found)
        except Exception as error:  # one broken source shouldn't stop the others
            print(f"  {source.__name__} failed: {error}")
        time.sleep(0.5)
    if not worked:
        return None

    # Google News comes first in `stories`, so when the same headline shows up twice,
    # the copy that names the original publisher (Reuters, CNBC...) is the one kept.
    seen, kept = set(), []
    for story in stories:
        if not story["title"] or not story["url"] or not story["published"] or story["published"] < cutoff:
            continue
        key = dedupe_key(story["title"])
        if key in seen:
            continue
        seen.add(key)
        kept.append(story)
    kept.sort(key=lambda s: s["published"], reverse=True)
    return [{**s, "published": s["published"].isoformat(timespec="minutes")} for s in kept[:MAX_PER_COMPANY]]


def main():
    companies = json.loads(COMPANIES.read_text())["companies"]
    previous = json.loads(OUTPUT.read_text()).get("companies", {}) if OUTPUT.exists() else {}
    cutoff = datetime.now(timezone.utc) - timedelta(days=MAX_AGE_DAYS)

    results = {}
    for company in companies:
        ticker = company["ticker"]
        print(ticker)
        stories = collect(company, cutoff)
        if stories is None:
            print("  all sources failed, keeping previous headlines")
            stories = previous.get(ticker, [])
        results[ticker] = stories

    OUTPUT.write_text(json.dumps({
        "updated": datetime.now(timezone.utc).isoformat(timespec="minutes"),
        "companies": results,
    }, indent=1, ensure_ascii=False) + "\n")
    print(f"Wrote {sum(len(v) for v in results.values())} stories for {len(results)} companies")


if __name__ == "__main__":
    main()
