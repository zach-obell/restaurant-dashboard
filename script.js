// COVERAGE UNIVERSE — company data (tickers, financials, shares) lives in data/companies.json.
// ANALYST NOTES: write each company's 2–3 sentence take between the backticks (apostrophes are fine).
// Leave it empty (``) to show the placeholder.
const NOTES = {
  // Fast casual
  CMG: `View: Neutral, leaning positive. Chipotle's Nov. 13 tattoo BOGO set a new single-day sales record, beating the record from August, and BofA named it one of its top restaurant picks. The stock rose about 3% over the past week while the broader market fell into a correction. Customer visits have grown three quarters in a row, but Q3 same-store sales rose just 2.1%. Watch: whether the promotions turn into lasting traffic gains in Q4.`,
  CAVA: `View: Neutral. CAVA fell about 10% over the past week with no new company news and is now roughly half its 52-week high of about $99. Investors are still reacting to its Q3 miss, when same-store sales slowed to 3.1% and margins narrowed, and the stock trades at about 93 times earnings, leaving little room for mistakes. Watch: whether same-store sales pick back up.`,
  WING: `View: Cautious. Wingstop rose on Nov. 18 after an unconfirmed Betaville report that a larger buyer may be interested, but no buyer or terms were named and the stock ended the week down about 8%. BofA still lists it as a top pick, but sales at existing restaurants keep falling, with a 6.5–7% drop expected for 2026. Watch: whether takeover talk is confirmed or same-store sales stop declining.`,
  SHAK: `View: Positive. Shake Shack is still one of the few chains bringing in more customers: Q3 same-Shack sales rose 2.5% with traffic up 0.8%, and its restaurant count grew 17%. Activist fund Starboard Value disclosed a new stake this month. Its weak spot is still profitability, as delivery and new-store costs pushed restaurant-level margins down to 22.5%. Watch: whether margins improve as the newer locations mature.`,
  SG: `View: Cautious. Sweetgreen is growing again, with October same-store sales up about 5% and traffic up 4%, and it expects roughly 3–4% growth in Q4 after a 6.4% drop in Q3. It also launched AI ordering on Nov. 18, but still expects an adjusted EBITDA loss of $20–23M this year, and several insiders sold small amounts of stock this week. Watch: its Dec. 2 Morgan Stanley conference talk for an update on the rebound.`,
  // Quick service
  MCD: `View: Positive. McDonald's is the industry benchmark: about 95% of its restaurants are franchised, which is why it earns a 46.1% operating margin. But a Nov. 24 Bloomberg report says franchisees are pushing back on paying for its upgrade plan (hand-breaded chicken, AI drive-thrus, remodels), and it faces lawsuits claiming its AI pricing tool coordinated menu prices. Watch: franchisee buy-in and the new value menu planned for early 2027.`,
  YUM: `View: Neutral. Yum is now mainly KFC and Taco Bell after selling Pizza Hut (the FY2025 numbers in the table still include it). BNP Paribas started covering the stock on Nov. 24 at Outperform with a $189 target, but Tasty Chick'n, a franchisee with 84 KFC restaurants, filed for bankruptcy on Nov. 16 after three years of falling sales. Watch: whether more U.S. KFC franchisees run into trouble.`,
  QSR: `View: Positive. Restaurant Brands owns Burger King, Tim Hortons, Popeyes and Firehouse Subs. This month it sold $1B of investment-grade bonds (6.00% due 2031 and 6.40% due 2036) to pay down part of its term loan, a sign its credit profile has improved. Burger King's U.S. turnaround is working (Q3 same-store sales +8.4%), but Popeyes fell 2.2%. Watch: whether Popeyes can turn around the way Burger King did.`,
  DPZ: `View: Neutral. Domino's rose about 4% over the past week, one of the best results in the group, and BNP Paribas started coverage at Outperform on Nov. 24. It is a steady, mostly franchised business (19.3% operating margin), but U.S. same-store sales have grown less than 1% for three straight quarters, and a small Florida franchisee filed for bankruptcy on Nov. 23. Watch: whether its new CEO can get sales growing again.`,
  WEN: `View: Cautious. On Nov. 23 Wendy's was hit with a proposed class action claiming it and software maker NCR Voyix used shared sales data to coordinate menu prices across franchisees, similar to suits McDonald's faces. Its bankrupt franchisee Meritage has closed close to 100 restaurants, and the board rejected Trian's $7.35-per-share offer and adopted a poison pill. Watch: whether CEO Bob Wright's turnaround works or Trian comes back with more.`,
  PZZA: `View: Cautious. On Nov. 24 StoneX kept its Hold rating after Q3 North America same-store sales fell 8.3%, worse than its 6.6% estimate, and Papa John's now expects about an 8% drop for the year. It is testing an AI tool that checks customers' pizza photos for quality, while closing 200–250 North American restaurants this year. Watch: whether its new Unbox Better plan can stop the sales decline.`,
  DNUT: `View: Cautious. Krispy Kreme fell about 18% over the past week with no new company news, giving back much of its jump after Q3, when it beat estimates and raised its 2026 revenue outlook to $1.35–1.40B. Revenue is shrinking on purpose as it sells company-run markets to franchisees, and it still lost $13.3M in Q3. Watch: whether debt keeps falling and the turnaround starts showing up as profit.`,
  JACK: `View: Cautious. Jack in the Box fell about 9% over the past week. On Nov. 17 it said CFO Dawn Hooper will step down in April 2027, adding to a leadership overhaul in which President Taylor Montgomery is set to replace interim CEO Mark King. Same-store sales fell 1.1% in Q3, though management said Q4 started slightly positive. Watch: its Dec. 9 earnings report for signs that sales have stabilized.`,
  // Coffee
  SBUX: `View: Neutral, leaning positive. CEO Brian Niccol's Back to Starbucks plan is working in the U.S., with North America same-store sales up 7.9% last quarter. After closing hundreds of weaker stores, Starbucks plans just 90–100 net new North American stores in fiscal 2027, about half of them licensed and many in a smaller format. With a high P/E, the stock already expects a lot. Watch: whether it hits its fiscal 2027 profit target.`,
  BROS: `View: Positive. Dutch Bros is the fastest grower in the coverage list (revenue +27.9%), and BofA named it one of its top restaurant picks. It is now testing DoorDash delivery, and mobile Order Ahead reached about 17% of visits in Q3. But the stock is near its 52-week low after falling 21% on a cautious outlook in early November. Watch: whether same-shop sales hold up against McDonald's new drinks and 7 Brew.`,
  // Casual dining
  DRI: `View: Positive. Darden hit an all-time high above $240 on Nov. 24 as Mizuho ($255) and KeyBanc ($249) raised their price targets on Olive Garden strength and BNP Paribas started coverage at Outperform ($263). KeyBanc now expects Olive Garden same-restaurant sales of 3.0% in fiscal Q2, though Mizuho's checks point to slower growth at LongHorn. Watch: fiscal Q2 results on Dec. 18.`,
  TXRH: `View: Neutral. Texas Roadhouse fell about 4% over the past week. JPMorgan cut its target to $195, saying a false brand allegation in August hurt sales, but noted quarter-to-date same-store sales of 1.5% were improving into November, and BNP Paribas started coverage at Outperform ($226). High beef costs held its operating margin to 8.1%. Watch: whether traffic keeps improving as beef costs ease.`,
  EAT: `View: Positive. Brinker, the owner of Chili's, has had the best turnaround in the industry: Chili's same-store sales rose 10.1% last quarter with traffic up 6.4%, and Brinker raised its fiscal 2027 adjusted EPS outlook to $13.30–13.90. The stock slipped about 4% over the past week as the broader market sold off. Watch: whether traffic keeps growing against very strong results from a year ago.`,
  CAKE: `View: Positive. The Cheesecake Factory hit an all-time high near $119 on Nov. 18 after upbeat comments at an investor conference about record sales and strong traffic, then gave back those gains in the market selloff. Q3 same-store sales at the core brand jumped 15.2%, and the stock is up about 125% this year. Its operating margin is thin at 5.0%. Watch: how much of the surge lasts into 2027.`,
  CBRL: `View: Neutral. Cracker Barrel rose about 12% over the past week, helped by UBS raising its target to $75 from $53 and saying the company could raise its fiscal 2027 outlook; Citi still rates it Sell ($46). The stock is up nearly 180% this year, so expectations are now high, and traffic was still down 6.1% last quarter. Watch: fiscal Q1 results on Dec. 2 for proof that traffic is turning around.`,
  BLMN: `View: Cautious. Bloomin' Brands (Outback, Carrabba's, Bonefish Grill, Fleming's) is trying to turn around Outback, and CEO Mike Spanos bought about $502,000 of stock on Nov. 11 at around $10 a share, a sign of confidence. But traffic is still falling, the FY2025 operating margin was under 1%, and it suspended its dividend to pay for the plan. Watch: whether more customers come back to Outback.`,
  DIN: `View: Cautious. Dine Brands (Applebee's, IHOP) is almost fully franchised, but heavy debt eats most of its profit: FY2025 pre-tax income was just $25M after $78M of interest. The takeover fight continues: on Nov. 19 the board told would-be buyers Arkhouse and Cobblers Cove, who hold about 19% mostly through swaps, that converting swaps into shares would trigger its poison pill. Watch: whether they raise their rejected $39-per-share offer.`
};

const COMPANIES_URL = 'data/companies.json';
let COMPANIES = [];
let SEGMENTS = [];
const segmentId = segment => segment.toLowerCase().replace(/[^a-z]+/g, '-');
const noteFor = company => NOTES[company.ticker] || '';

const WIDGET_BASE = 'https://s3.tradingview.com/external-embedding/embed-widget-';
const widgetRegistry = new Map();
const dialog = document.getElementById('company-dialog');
let activeCompany = null;

function currentTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function preferredTheme() {
  const saved = localStorage.getItem('restaurant-dashboard-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme, save = false) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101a24' : '#f3f5f2';
  const button = document.getElementById('theme-toggle');
  const isDark = theme === 'dark';
  button.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  button.querySelector('.theme-label').textContent = `${isDark ? 'Light' : 'Dark'} mode`;
  button.querySelector('.theme-icon').textContent = isDark ? '◐' : '☼';
  if (save) localStorage.setItem('restaurant-dashboard-theme', theme);
  refreshWidgets();
}

function registerWidget(container, widgetName, config, height) {
  if (!container) return;
  widgetRegistry.set(container.id, { widgetName, config, height });
  renderWidget(container, widgetName, config, height);
}

function renderWidget(container, widgetName, config, height) {
  container.replaceChildren();
  const isMiniChart = container.classList.contains('mini-chart');
  const wrapper = document.createElement('div');
  wrapper.className = 'tradingview-widget-container';
  if (isMiniChart) {
    wrapper.style.cssText = 'position:relative;width:100%;height:100%;overflow:hidden';
  } else if (height) {
    wrapper.style.minHeight = `${height}px`;
  }
  const inner = document.createElement('div');
  inner.className = 'tradingview-widget-container__widget';
  if (isMiniChart) {
    inner.style.cssText = 'position:relative;width:100%;height:100%;overflow:hidden';
  } else if (height) {
    inner.style.minHeight = `${height}px`;
  }
  wrapper.appendChild(inner);
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = `${WIDGET_BASE}${widgetName}.js`;
  script.textContent = JSON.stringify({ ...config, colorTheme: currentTheme() });
  wrapper.appendChild(script);
  container.appendChild(wrapper);
}

function refreshWidgets() {
  for (const [id, entry] of widgetRegistry) {
    const container = document.getElementById(id);
    if (container) renderWidget(container, entry.widgetName, entry.config, entry.height);
  }
}

function initializeTickerTape() {
  const symbols = COMPANIES.map(company => ({ proName: company.symbol, title: company.ticker }));
  registerWidget(document.getElementById('ticker-tape'), 'ticker-tape', {
    symbols,
    showSymbolLogo: true,
    displayMode: 'adaptive',
    isTransparent: true,
    locale: 'en'
  }, 46);
}

function initializeMarketOverview() {
  const bySegment = segment => COMPANIES.filter(company => company.segment === segment).map(company => ({ s: company.symbol, d: company.ticker }));
  registerWidget(document.getElementById('market-overview'), 'market-overview', {
    title: 'Restaurant coverage universe',
    tabs: SEGMENTS.map(segment => ({ title: segment, symbols: bySegment(segment) })),
    showSymbolLogo: true,
    isTransparent: true,
    dateRange: '12M',
    showFloatingTooltip: true,
    showMarketStatus: true,
    showMiniChart: true,
    width: '100%',
    height: 365,
    locale: 'en'
  }, 365);
}

function createCompanyCard(company) {
  const card = document.createElement('article');
  card.className = 'company-card';
  card.innerHTML = `
    <button class="company-open" type="button" aria-label="Open ${company.name} company details">
      <span class="card-head"><span><span class="company-name">${company.name}</span><span class="card-meta">${company.segment} <span aria-hidden="true">·</span> ${company.symbol}</span></span><span class="ticker-pill">${company.ticker}</span><span class="card-chevron" aria-hidden="true">↗</span></span>
      <span class="card-chart-label"><span>LIVE PRICE · 1Y VIEW</span><span>OPEN DETAIL →</span></span>
    </button>
    <div class="widget-slot mini-chart" id="mini-${company.ticker}" aria-label="Live one-year chart for ${company.name}"></div>
    <div class="analyst-note"><div class="note-heading"><span class="note-icon" aria-hidden="true">✳</span><h3>Analyst note</h3></div><p></p></div>`;
  card.querySelector('.analyst-note p').textContent = noteFor(company) || `[Add your 2–3 sentence analyst take for ${company.ticker}.]`;
  const miniChart = card.querySelector('.mini-chart');
  miniChart.style.cssText = 'position:relative;width:100%;height:220px;overflow:hidden';
  card.querySelector('.company-open').addEventListener('click', () => openCompany(company));
  document.getElementById(`${segmentId(company.segment)}-grid`).appendChild(card);
  registerWidget(document.getElementById(`mini-${company.ticker}`), 'mini-symbol-overview', {
    symbol: company.symbol,
    width: '100%',
    height: '100%',
    dateRange: '12M',
    colorTheme: currentTheme(),
    isTransparent: true,
    autosize: true,
    largeChartUrl: '',
    locale: 'en'
  }, null);
}

function initializeCoverage() {
  const pad = n => String(n).padStart(2, '0');
  document.getElementById('stat-companies').textContent = pad(COMPANIES.length);
  document.getElementById('stat-segments').textContent = pad(SEGMENTS.length);
  const root = document.getElementById('coverage-segments');
  root.replaceChildren();
  SEGMENTS.forEach((segment, index) => {
    const count = COMPANIES.filter(company => company.segment === segment).length;
    const heading = document.createElement('div');
    heading.className = 'subsector-heading';
    heading.innerHTML = `<span class="subsector-index">${String.fromCharCode(65 + index)}</span><h3></h3><span class="subsector-line"></span><span class="subsector-count">${pad(count)} ${count === 1 ? 'NAME' : 'NAMES'}</span>`;
    heading.querySelector('h3').textContent = segment;
    const grid = document.createElement('div');
    grid.className = 'company-grid';
    grid.id = `${segmentId(segment)}-grid`;
    grid.setAttribute('aria-label', `${segment} companies`);
    root.append(heading, grid);
  });
  COMPANIES.forEach(createCompanyCard);
}

const MARKET_NEWS = '__market';
const ALL_COVERAGE = '__all';
const DEFAULT_NEWS_TICKER = 'MCD'; // company shown first in the news section
const NEWS_URL = 'data/news.json'; // written by data/update_news.py (Google News, Yahoo Finance, SEC filings)
let NEWS = null;

async function initializeNews() {
  const select = document.getElementById('news-symbol');
  const allOption = document.createElement('option');
  allOption.value = ALL_COVERAGE;
  allOption.textContent = 'Latest · All coverage';
  select.appendChild(allOption);
  COMPANIES.forEach(company => {
    const option = document.createElement('option');
    option.value = company.ticker;
    option.textContent = `${company.ticker} · ${company.name}`;
    select.appendChild(option);
  });
  const marketOption = document.createElement('option');
  marketOption.value = MARKET_NEWS;
  marketOption.textContent = 'Top stories · All US stocks';
  select.appendChild(marketOption);
  select.addEventListener('change', () => renderNews(select.value));
  select.value = DEFAULT_NEWS_TICKER;
  NEWS = await fetchJson([`${NEWS_URL}?t=${Date.now()}`]);
  renderNews(select.value);
}

function timeAgo(iso) {
  const minutes = Math.max(0, Math.round((Date.now() - new Date(iso)) / 60000));
  if (minutes < 60) return `${minutes}m ago`;
  if (minutes < 1440) return `${Math.round(minutes / 60)}h ago`;
  const days = Math.round(minutes / 1440);
  return days < 7 ? `${days}d ago` : new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function renderTradingViewNews(config) {
  const base = { isTransparent: true, displayMode: 'regular', width: '100%', height: 450, colorTheme: currentTheme(), locale: 'en' };
  registerWidget(document.getElementById('news-timeline'), 'timeline', { ...base, ...config }, 450);
  document.getElementById('news-source-meta').textContent = 'Live widget · TradingView';
}

function renderHeadlines(stories, showTicker) {
  const container = document.getElementById('news-timeline');
  widgetRegistry.delete(container.id); // stop theme changes from re-drawing a TradingView widget here
  const list = document.createElement('ul');
  list.className = 'news-list';
  stories.forEach(story => {
    const item = document.createElement('li');
    item.className = 'news-item';
    const link = document.createElement('a');
    link.href = story.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'news-headline';
    link.textContent = story.title;
    const meta = document.createElement('div');
    meta.className = 'news-meta';
    const parts = [showTicker ? story.ticker : null, story.publisher, timeAgo(story.published)].filter(Boolean);
    meta.textContent = parts.join(' · ');
    if (story.source === 'SEC filing') {
      const tag = document.createElement('span');
      tag.className = 'news-tag';
      tag.textContent = 'FILING';
      meta.prepend(tag);
    }
    item.append(link, meta);
    list.appendChild(item);
  });
  container.replaceChildren(list);
  const updated = NEWS && NEWS.updated ? ` · updated ${timeAgo(NEWS.updated)}` : '';
  document.getElementById('news-source-meta').textContent = `Google News · Yahoo Finance · SEC EDGAR${updated}`;
}

function renderNews(choice) {
  if (choice === MARKET_NEWS) {
    renderTradingViewNews({ feedMode: 'market', market: 'stock' });
    return;
  }
  const byTicker = (NEWS && NEWS.companies) || {};
  if (choice === ALL_COVERAGE) {
    const stories = Object.entries(byTicker)
      .flatMap(([ticker, items]) => items.filter(story => story.source !== 'SEC filing').map(story => ({ ...story, ticker })))
      .sort((a, b) => new Date(b.published) - new Date(a.published))
      .slice(0, 40);
    if (stories.length) renderHeadlines(stories, true);
    else renderTradingViewNews({ feedMode: 'market', market: 'stock' });
    return;
  }
  const company = COMPANIES.find(item => item.ticker === choice) || COMPANIES[0];
  const stories = byTicker[company.ticker] || [];
  if (stories.length) renderHeadlines(stories, false);
  else renderTradingViewNews({ feedMode: 'symbol', symbol: company.symbol }); // fallback if news.json is missing
}

function openCompany(company) {
  activeCompany = company;
  document.getElementById('dialog-title').textContent = company.name;
  document.getElementById('dialog-subtitle').textContent = `${company.ticker} · ${company.symbol} · ${company.segment}`;
  document.querySelector('.detail-note-text').textContent = noteFor(company) || `[Add your 2–3 sentence analyst take for ${company.ticker} in the NOTES list at the top of script.js.]`;
  registerWidget(document.getElementById('detail-chart'), 'advanced-chart', {
    autosize: true,
    symbol: company.symbol,
    interval: 'D',
    timezone: 'Etc/UTC',
    theme: currentTheme(),
    style: '1',
    locale: 'en',
    allow_symbol_change: false,
    calendar: false,
    support_host: 'https://www.tradingview.com',
    withdateranges: true,
    details: false,
    hotlist: false,
    hide_side_toolbar: false,
    studies: [],
    show_popup_button: false
  }, 500);
  registerWidget(document.getElementById('detail-profile'), 'symbol-profile', {
    width: '100%',
    height: 275,
    isTransparent: true,
    symbol: company.symbol,
    colorTheme: currentTheme(),
    locale: 'en'
  }, 275);
  registerWidget(document.getElementById('detail-fundamentals'), 'fundamental-data', {
    width: '100%',
    height: 275,
    isTransparent: true,
    symbol: company.symbol,
    colorTheme: currentTheme(),
    displayMode: 'regular',
    locale: 'en'
  }, 275);
  if (!dialog.open) dialog.showModal();
}

function initializeTheme() {
  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark', true);
  });
  applyTheme(preferredTheme());
}

function initializeDialog() {
  document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    activeCompany = null;
    for (const id of ['detail-chart', 'detail-profile', 'detail-fundamentals']) widgetRegistry.delete(id);
  });
}

// COMPS TABLE: built from data/companies.json (financials, shares, EPS) plus the latest
// closing prices in data/comps.json, which a GitHub Action refreshes every weekday.
const COMPS_URL = 'https://raw.githubusercontent.com/zach-obell/restaurant-dashboard/main/data/comps.json';

async function fetchJson(urls) {
  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (response.ok) return await response.json();
    } catch (error) { /* try the next source */ }
  }
  return null;
}

const pct = value => value === null || value === undefined ? '—' : value < 0 ? `(${Math.abs(value).toFixed(1)}%)` : `${value.toFixed(1)}%`;
const growth = value => value === null || value === undefined ? '—' : `${value > 0 ? '+' : value < 0 ? '−' : ''}${Math.abs(value).toFixed(1)}%`;

function renderComps(prices) {
  const tbody = document.querySelector('#comps-table tbody');
  tbody.replaceChildren();
  for (const company of COMPANIES) {
    const price = prices[company.ticker];
    const marketCap = price ? `$${(price * company.shares_millions / 1000).toFixed(1)}B` : '—';
    const pe = !price ? '—' : company.eps && company.eps > 0 ? `${(price / company.eps).toFixed(1)}x${company.pe_note || ''}` : 'n/m';
    const row = document.createElement('tr');
    const cells = [company.name, company.ticker, company.segment, company.fiscal_year, marketCap, pe, growth(company.rev_growth), pct(company.op_margin)];
    cells.forEach((value, index) => {
      const cell = document.createElement(index === 0 ? 'th' : 'td');
      if (index === 0) cell.scope = 'row';
      if (index === 1) {
        const pill = document.createElement('span');
        pill.className = 'ticker-pill';
        pill.textContent = value;
        cell.appendChild(pill);
      } else {
        cell.textContent = value;
      }
      if (index >= 4) cell.className = 'entry-cell';
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  }
  const notes = COMPANIES.map(company => company.footnote).filter(Boolean);
  document.getElementById('comps-company-notes').textContent = notes.join(' ');
}

async function initializeComps() {
  const data = await fetchJson([`${COMPS_URL}?t=${Date.now()}`, 'data/comps.json']);
  const prices = {};
  for (const row of (data && Array.isArray(data.rows) ? data.rows : [])) prices[row.ticker] = Number(row.price);
  renderComps(prices);
  const label = document.getElementById('comps-asof');
  if (label && data && data.as_of) {
    const date = new Date(`${data.as_of}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
    label.textContent = `Prices as of ${date} close · Financials: latest fiscal year, GAAP`;
  }
}

async function initialize() {
  initializeTheme();
  initializeDialog();
  const data = await fetchJson([`${COMPANIES_URL}?t=${Date.now()}`]);
  if (!data || !Array.isArray(data.companies)) {
    document.getElementById('coverage-segments').textContent = 'Company data could not be loaded. Refresh the page to try again.';
    return;
  }
  COMPANIES = data.companies;
  SEGMENTS = data.segments || [...new Set(COMPANIES.map(company => company.segment))];
  initializeTickerTape();
  initializeMarketOverview();
  initializeCoverage();
  initializeNews();
  initializeComps();
}

initialize();
