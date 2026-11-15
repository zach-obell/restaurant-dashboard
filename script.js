// COVERAGE UNIVERSE — keep every company and its TradingView exchange-prefixed symbol here.
// Verified symbols: NYSE (CMG, CAVA, SG, MCD, YUM); NASDAQ (WING, DPZ, SBUX).
// ANALYST NOTES: write each company's 2–3 sentence take between the backticks after note: `` (apostrophes are fine).
// Leave it empty (``) to show the placeholder.
const COMPANIES = [
  { ticker: 'CMG', symbol: 'NYSE:CMG', name: 'Chipotle Mexican Grill', sector: 'Fast casual', grid: 'fast-casual-grid',
    note: `` },
  { ticker: 'CAVA', symbol: 'NYSE:CAVA', name: 'CAVA Group', sector: 'Fast casual', grid: 'fast-casual-grid',
    note: `` },
  { ticker: 'SG', symbol: 'NYSE:SG', name: 'Sweetgreen', sector: 'Fast casual', grid: 'fast-casual-grid',
    note: `` },
  { ticker: 'WING', symbol: 'NASDAQ:WING', name: 'Wingstop', sector: 'Fast casual', grid: 'fast-casual-grid',
    note: `` },
  { ticker: 'MCD', symbol: 'NYSE:MCD', name: 'McDonald’s', sector: 'Quick service', grid: 'quick-service-grid',
    note: `` },
  { ticker: 'YUM', symbol: 'NYSE:YUM', name: 'Yum! Brands', sector: 'Quick service', grid: 'quick-service-grid',
    note: `` },
  { ticker: 'DPZ', symbol: 'NASDAQ:DPZ', name: 'Domino’s Pizza', sector: 'Quick service', grid: 'quick-service-grid',
    note: `` },
  { ticker: 'SBUX', symbol: 'NASDAQ:SBUX', name: 'Starbucks', sector: 'Coffee', grid: 'coffee-grid',
    note: `` }
];

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
  const bySector = sector => COMPANIES.filter(company => company.sector === sector).map(company => ({ s: company.symbol, d: company.ticker }));
  registerWidget(document.getElementById('market-overview'), 'market-overview', {
    title: 'Restaurant coverage universe',
    tabs: [
      { title: 'Fast casual', symbols: bySector('Fast casual') },
      { title: 'Quick service', symbols: bySector('Quick service') },
      { title: 'Coffee', symbols: bySector('Coffee') }
    ],
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
      <span class="card-head"><span><span class="company-name">${company.name}</span><span class="card-meta">${company.sector} <span aria-hidden="true">·</span> ${company.symbol}</span></span><span class="ticker-pill">${company.ticker}</span><span class="card-chevron" aria-hidden="true">↗</span></span>
      <span class="card-chart-label"><span>LIVE PRICE · 1Y VIEW</span><span>OPEN DETAIL →</span></span>
    </button>
    <div class="widget-slot mini-chart" id="mini-${company.ticker}" aria-label="Live one-year chart for ${company.name}"></div>
    <div class="analyst-note"><div class="note-heading"><span class="note-icon" aria-hidden="true">✳</span><h3>Analyst note</h3></div><p>${company.note || `[Add your 2–3 sentence analyst take for ${company.ticker}.]`}</p></div>`;
  const miniChart = card.querySelector('.mini-chart');
  miniChart.style.cssText = 'position:relative;width:100%;height:220px;overflow:hidden';
  card.querySelector('.company-open').addEventListener('click', () => openCompany(company));
  document.getElementById(company.grid).appendChild(card);
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

function initializeCompanyCards() {
  COMPANIES.forEach(createCompanyCard);
}

const MARKET_NEWS = '__market';
const DEFAULT_NEWS_TICKER = 'MCD'; // company shown first in the news section

function initializeNews() {
  const select = document.getElementById('news-symbol');
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
  renderNews(DEFAULT_NEWS_TICKER);
}

function renderNews(choice) {
  const base = { isTransparent: true, displayMode: 'regular', width: '100%', height: 450, colorTheme: currentTheme(), locale: 'en' };
  if (choice === MARKET_NEWS) {
    registerWidget(document.getElementById('news-timeline'), 'timeline', { ...base, feedMode: 'market', market: 'stock' }, 450);
    return;
  }
  const company = COMPANIES.find(item => item.ticker === choice) || COMPANIES[0];
  registerWidget(document.getElementById('news-timeline'), 'timeline', { ...base, feedMode: 'symbol', symbol: company.symbol }, 450);
}

function openCompany(company) {
  activeCompany = company;
  document.getElementById('dialog-title').textContent = company.name;
  document.getElementById('dialog-subtitle').textContent = `${company.ticker} · ${company.symbol} · ${company.sector}`;
  document.querySelector('.detail-note-text').textContent = company.note || `[Add your 2–3 sentence analyst take for ${company.ticker} in the COMPANIES list at the top of script.js.]`;
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

// COMPS TABLE: market cap and P/E come from data/comps.json, which a GitHub Action
// refreshes every weekday. The numbers typed into index.html are the fallback.
const COMPS_URL = 'https://raw.githubusercontent.com/zach-obell/restaurant-dashboard/main/data/comps.json';

async function loadCompsData() {
  for (const url of [`${COMPS_URL}?t=${Date.now()}`, 'data/comps.json']) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (response.ok) return await response.json();
    } catch (error) { /* try the next source */ }
  }
  return null;
}

async function initializeComps() {
  const data = await loadCompsData();
  if (!data || !Array.isArray(data.rows)) return;
  const table = document.getElementById('comps-table');
  if (!table) return;
  for (const row of data.rows) {
    const pill = [...table.querySelectorAll('tbody .ticker-pill')].find(el => el.textContent.trim() === row.ticker);
    if (!pill) continue;
    const cells = pill.closest('tr').querySelectorAll('td');
    if (cells.length < 4) continue;
    cells[2].textContent = `$${Number(row.market_cap_billions).toFixed(1)}B`;
    cells[3].textContent = row.pe === null || row.pe === undefined ? 'n/m' : `${Number(row.pe).toFixed(1)}x${row.pe_note || ''}`;
  }
  const label = document.getElementById('comps-asof');
  if (label && data.as_of) {
    const date = new Date(`${data.as_of}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
    label.textContent = `Prices as of ${date} close · Financials: ${data.eps_period || 'FY2025'}, GAAP`;
  }
}

initializeTheme();
initializeTickerTape();
initializeMarketOverview();
initializeCompanyCards();
initializeNews();
initializeDialog();
initializeComps();
