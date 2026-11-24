// COVERAGE UNIVERSE — company data (tickers, financials, shares) lives in data/companies.json.
// ANALYST NOTES: write each company's 2–3 sentence take between the backticks (apostrophes are fine).
// Leave it empty (``) to show the placeholder.
const NOTES = {
  // Fast casual
  CMG: `View: Neutral, leaning positive. Chipotle is still one of the most profitable chains in the group (16.2% operating margin), but growth at its existing restaurants has slowed, with Q3 2026 same-store sales up just 2.1%. The good sign is that customer visits have now grown three quarters in a row. Watch: whether visits keep rising as it opens 340–360 new restaurants in 2027.`,
  CAVA: `View: Neutral. CAVA is the fastest-growing fast-casual chain here, with revenue up 22% and 500 restaurants after growing its count about 20% in a year. But Q3 same-store sales slowed to 3.1% from about 9% earlier in the year, and with a very high P/E the stock has little room for mistakes. Watch: whether same-store sales pick back up.`,
  WING: `View: Cautious. Wingstop is very profitable because franchisees run almost all of its restaurants (25.7% operating margin), and it keeps opening new ones quickly. But sales at existing restaurants keep falling, and the company now expects a 6.5–7% drop for 2026. Watch: whether same-store sales stop declining.`,
  SHAK: `View: Positive. Shake Shack is growing fast (revenue +15.4%) and, unlike most of the group, is still bringing in more customers, with five straight quarters of traffic growth. Its weak spot is a thin 4.3% operating margin, since new restaurants are expensive to open. Watch: whether margins improve as the newer locations mature.`,
  SG: `View: Cautious. Sweetgreen is still losing money, and a summer food-safety outbreak pushed Q3 same-store sales down 6.4%. Sales turned positive again in October, but the company is cutting new openings roughly in half in 2027 to focus on fixing its existing restaurants. Watch: whether the October rebound lasts.`,
  // Quick service
  MCD: `View: Positive. McDonald's is the industry benchmark: about 95% of its restaurants are franchised, which is why it earns a 46.1% operating margin. U.S. same-store sales dipped 0.2% in Q3 as lower-income customers cut back, but turned positive again in September. Watch: the new value menu planned for early 2027.`,
  YUM: `View: Neutral. Yum sold Pizza Hut in 2026 for about $2.4B, so it is now mainly KFC and Taco Bell (the FY2025 numbers in the table still include Pizza Hut). KFC keeps opening restaurants around the world, while Taco Bell's U.S. sales fell 4% in Q3 after a produce-related outbreak before recovering. Watch: whether Taco Bell's rebound holds.`,
  QSR: `View: Positive. Restaurant Brands owns Burger King, Tim Hortons, Popeyes and Firehouse Subs. Burger King's U.S. turnaround is clearly working, with same-store sales up 8.4% in Q3, but Popeyes is moving the other way (down 2.2%). Watch: whether Popeyes can turn around the way Burger King did.`,
  DPZ: `View: Neutral. Domino's is a steady, mostly franchised business (19.3% operating margin) that keeps growing earnings, with Q3 EPS up 12.7%. But U.S. same-store sales have grown less than 1% for three straight quarters as customers spend less per order. Watch: whether its new CEO can get sales growing again.`,
  WEN: `View: Cautious. Wendy's revenue fell 3.1% in FY2025 and fewer customers are coming in, so it is closing hundreds of weaker restaurants under a new CEO. In November its board rejected a $7.35-per-share buyout offer from Nelson Peltz's Trian, its largest shareholder. Watch: whether the turnaround works or a higher offer comes.`,
  PZZA: `View: Cautious. Papa John's North America same-store sales fell 8.3% in Q3, and it cut its full-year outlook again. Its operating margin is thin at 4.3%, and it plans to close 200–250 North American restaurants this year. Watch: whether its new Unbox Better plan can stop the sales decline.`,
  DNUT: `View: Cautious. Krispy Kreme lost money in FY2025, mostly from ending a failed partnership with McDonald's, and revenue fell 8.6%. It is now selling company-run markets to franchisees and paying down debt, which is slowly improving its finances. Watch: whether debt keeps falling and sales start growing again.`,
  JACK: `View: Cautious. Jack in the Box lost money in FY2025 and is restructuring: it sold Del Taco for $115M to pay down debt, is closing weaker restaurants, and is run by an interim CEO. Same-store sales are still falling. Watch: its next earnings report for signs that sales have stabilized.`,
  // Coffee
  SBUX: `View: Neutral, leaning positive. CEO Brian Niccol's Back to Starbucks plan is working in the U.S., with North America same-store sales up 7.9% last quarter and more customers coming in. But FY2026 revenue grew only 2%, and with a high P/E the stock already expects a lot. Watch: whether it hits its fiscal 2027 profit target.`,
  BROS: `View: Positive. Dutch Bros is the fastest grower in the coverage list (revenue +27.9%) and plans about 250 new shops in 2027. The stock fell sharply after Q3 on worries that McDonald's new drinks and 7 Brew are competing for its customers. Watch: whether same-shop sales keep growing.`,
  // Casual dining
  DRI: `View: Positive. Darden (Olive Garden, LongHorn Steakhouse and others) is the biggest casual-dining company, with a 12.0% operating margin and FY2026 revenue up 9.4%, helped by an extra 53rd week. Every segment grew same-restaurant sales last quarter, led by LongHorn at 6.2%. Watch: whether Olive Garden, up only about 1%, can speed up.`,
  TXRH: `View: Neutral. Texas Roadhouse has been one of the strongest casual-dining chains, but high beef costs held its operating margin to 8.1%. Same-store sales slowed from 4.3% in Q3 to 1.5% in the first five weeks of Q4. Watch: whether customer traffic holds up as beef costs ease.`,
  EAT: `View: Positive. Brinker, the owner of Chili's, has had the best turnaround in the industry: Chili's same-store sales rose about 10% last quarter, its 22nd straight quarter of growth. FY2026 revenue grew 7.9% with a 10.7% operating margin. Watch: whether growth holds up against very strong results from a year ago.`,
  CAKE: `View: Positive. The Cheesecake Factory had a standout Q3: same-store sales jumped 15.2%, mostly because more customers came in (traffic up 9.5%). Its operating margin is thin at 5.0%, and the company says more normal growth is closer to 3% a year. Watch: how much of the surge lasts into 2027.`,
  CBRL: `View: Cautious. Cracker Barrel's revenue fell 4.7% in FY2026 and it had an operating loss; its GAAP profit came mainly from a one-time $47M legal settlement. New CEO David Deno expects same-store sales to grow 3–5% in fiscal 2027, but customer traffic was still down 6.1% last quarter. Watch: whether traffic turns around.`,
  BLMN: `View: Cautious. Bloomin' Brands (Outback, Carrabba's, Bonefish Grill, Fleming's) is trying to turn around Outback. Guest satisfaction has improved five quarters in a row, but traffic is still falling, the FY2025 operating margin was under 1%, and it suspended its dividend to pay for the plan. Watch: whether more customers come back to Outback.`,
  DIN: `View: Cautious. Dine Brands (Applebee's, IHOP) is almost fully franchised, but heavy debt eats most of its profit: FY2025 pre-tax income was just $25M after $78M of interest. Both brands grew same-store sales less than 1% in Q3, and in October its board rejected a $39-per-share buyout offer. Watch: whether a higher offer comes or sales pick up.`
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
