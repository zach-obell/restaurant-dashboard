"""Daily comps updater, run by GitHub Actions.

Reads data/companies.json (shares and EPS for each company), fetches each ticker's latest closing price,
recalculates market cap (price x shares) and P/E (price / EPS), and writes
data/comps.json. Uses only the Python standard library.

If a price can't be fetched, that company keeps its previous values, so the
site never shows blanks.
"""
import csv
import io
import json
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COMPANIES = ROOT / "data" / "companies.json"
OUTPUT = ROOT / "data" / "comps.json"
HEADERS = {"User-Agent": "Mozilla/5.0 (restaurant-dashboard comps updater)"}


def fetch(url):
    request = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read().decode("utf-8")


def price_from_yahoo(ticker):
    data = json.loads(fetch(
        f"https://query1.finance.yahoo.com/v8/finance/chart/{ticker}?range=5d&interval=1d"))
    result = data["chart"]["result"][0]
    closes = result["indicators"]["quote"][0]["close"]
    stamps = result["timestamp"]
    for close, stamp in reversed(list(zip(closes, stamps))):
        if close is not None:
            return float(close), datetime.fromtimestamp(stamp, timezone.utc).date().isoformat()
    raise ValueError("no closing price")


def price_from_stooq(ticker):
    text = fetch(f"https://stooq.com/q/l/?s={ticker.lower()}.us&f=sd2c&h&e=csv")
    row = next(csv.DictReader(io.StringIO(text)))
    return float(row["Close"]), row["Date"]


def get_price(ticker):
    for source in (price_from_yahoo, price_from_stooq):
        try:
            return source(ticker)
        except Exception as error:  # try the next source
            print(f"  {source.__name__} failed for {ticker}: {error}")
    return None


def main():
    fundamentals = json.loads(COMPANIES.read_text())
    previous = {}
    if OUTPUT.exists():
        previous = {row["ticker"]: row for row in json.loads(OUTPUT.read_text()).get("rows", [])}

    rows, dates = [], []
    for company in fundamentals["companies"]:
        ticker = company["ticker"]
        result = get_price(ticker)
        if result is None:
            print(f"{ticker}: keeping previous values")
            if ticker in previous:
                rows.append(previous[ticker])
            continue
        price, date = result
        dates.append(date)
        eps = company.get("eps")
        rows.append({
            "ticker": ticker,
            "price": round(price, 2),
            "price_date": date,
            "market_cap_billions": round(price * company["shares_millions"] / 1000, 1),
            "pe": round(price / eps, 1) if eps and eps > 0 else None,
            "pe_note": company.get("pe_note", ""),
        })
        print(f"{ticker}: ${price:.2f} on {date}")
        time.sleep(1)

    as_of = max(dates) if dates else json.loads(OUTPUT.read_text()).get("as_of") if OUTPUT.exists() else None
    OUTPUT.write_text(json.dumps({
        "as_of": as_of,
        "eps_period": "Latest reported fiscal year",
        "rows": rows,
    }, indent=2) + "\n")


if __name__ == "__main__":
    main()
