// COVERAGE UNIVERSE — company data (tickers, financials, shares) lives in data/companies.json.
// ANALYST NOTES: write each company's 2–3 sentence take between the backticks (apostrophes are fine).
// Leave it empty (``) to show the placeholder.
const NOTES = {
  // Fast casual
  CMG: `View: Neutral, leaning positive. Chipotle still runs one of the most profitable models in the group (16.2% operating margin), but FY2025 revenue growth of 5.4% was slow by its own standards and the stock fell sharply over the past year as traffic softened. September comps of +3.8%, with lower-income guests coming back, are the first sign of a turn. The thing to watch is whether the Smoked Brisket return and roughly 350 new openings a year can turn that into steady traffic growth in 2027.`,
  CAVA: `View: Neutral. CAVA is the growth story of the group, with revenue up 22% and its restaurant count up about 20% to 500, but at over 100x FY2025 earnings the stock is priced as if that growth is guaranteed. Q3 same-restaurant sales slowed to 3.1% from about 9% in the first half, and restaurant margins slipped on labor and delivery costs. I would want to see comps reaccelerate before getting more positive.`,
  WING: `View: Cautious. Wingstop's franchise-heavy model produces a 25.7% operating margin and it is still growing its store count about 14% a year, but domestic same-store sales keep falling and 2026 guidance now calls for a 6.5–7% decline. Average sales per restaurant dropped about 10% to $1.85M, which squeezes the franchisees who pay for all those new stores. Unit growth can only hide falling per-store sales for so long, so stabilizing comps is the key thing to watch.`,
  SHAK: `View: Positive. Shake Shack pairs fast growth (revenue +15.4%) with something most of the group lacks right now: positive traffic, now five straight quarters, and 23 straight quarters of positive comps. The weak spot is profitability, a 4.3% operating margin, because new-store opening costs and labor weigh on results. If margins expand as the newer Shacks mature, earnings could grow much faster than sales.`,
  SG: `View: Cautious. Sweetgreen is still losing money (a -20.5% operating margin) on flat FY2025 revenue. Management expects 2026 comps of about -5.5% and plans to cut new openings roughly in half in 2027 to fix the economics of existing restaurants. October comps turning positive after a summer food-safety scare is the first good news in a while, but until restaurant margins clearly improve this is a show-me story.`,
  // Quick service
  MCD: `View: Positive. McDonald's is the benchmark for the industry: with about 95% of restaurants franchised, it earns a 46.1% operating margin and keeps growing earnings even when sales are soft. The concern is U.S. traffic. U.S. comps slipped 0.2% in Q3, the first decline in over a year, as lower-income customers pulled back. The national entry-level value program planned for early 2027 is the catalyst I am watching to see if McDonald's can win those guests back.`,
  YUM: `View: Neutral. Yum is now mainly a KFC and Taco Bell story after selling Pizza Hut in September for about $2.4B, which simplifies the business and funded debt paydown and buybacks (the FY2025 numbers in the table still include Pizza Hut). KFC's global unit growth of about 7% is the engine, while Taco Bell U.S. sales were hurt by a produce-related outbreak in Q3 before rebounding. The question is whether a smaller, more focused Yum can hit its 8% core profit growth target.`,
  QSR: `View: Positive. Restaurant Brands (Burger King, Tim Hortons, Popeyes, Firehouse Subs) is seeing its Burger King U.S. turnaround pay off, with BK U.S. comps up 8.4% in Q3, well ahead of most burger peers. FY2025 revenue grew 12.2% with a 23.3% operating margin from a mostly franchised system. The key question is whether the other brands can keep pace now that Burger King is carrying growth.`,
  DPZ: `View: Neutral. Domino's is a disciplined, mostly franchised operator (19.3% operating margin) that keeps growing earnings through buybacks and supply-chain profits, with Q3 EPS up 12.7%. But U.S. same-store sales have been under 1% for three straight quarters, and orders are getting smaller as customers trade down. With a new CEO in place, the next few quarters will show whether Domino's can get back to its 3% U.S. comp target.`,
  WEN: `View: Cautious. Wendy's still earns a solid 15.8% operating margin, but revenue fell 3.1% in FY2025, U.S. traffic has dropped sharply, and hundreds of underperforming restaurants are closing. New CEO Bob Wright has openly said the brand lost ground on food quality and value, and activist investor Trian has pushed for change. It has the lowest P/E in the group, which says the market has little faith in the turnaround yet.`,
  PZZA: `View: Cautious. Papa John's North America comps fell 8.3% in Q3, management cut guidance for the third straight quarter, and international, previously its bright spot, turned negative too. The operating margin is thin at 4.3%, and the company plans to close 200–250 North American restaurants this year. Its new Unbox Better plan sounds reasonable, but until North America sales stop shrinking I would stay on the sidelines.`,
  DNUT: `View: Cautious. Krispy Kreme lost money in FY2025 (a -30.8% operating margin), mostly from write-downs tied to its failed McDonald's partnership, and revenue fell 8.6%. The turnaround (refranchising, outsourcing delivery and exiting unprofitable doors) has brought leverage down to about 5.5x, and the brand itself is still strong. This is a high-risk debt-reduction story: falling leverage and a return to organic sales growth are what to watch.`,
  JACK: `View: Cautious. Jack in the Box lost money in FY2025 and is in the middle of a restructuring: it sold Del Taco for $115M to pay down debt, is closing underperforming restaurants and changed CEOs this year. Its market cap is now only a few hundred million dollars, which shows how much doubt is priced in. A return to positive same-store sales is the signal that would change my view.`,
  // Coffee
  SBUX: `View: Neutral, leaning positive. Starbucks' Back to Starbucks turnaround under Brian Niccol is starting to show up, with North America comps up 7.9% in fiscal Q4. But FY2026 revenue grew only 2%, the 9.7% operating margin is well below where it was a few years ago, and at close to 50x GAAP earnings the stock already prices in a lot of recovery. Fiscal 2027 adjusted EPS guidance of $3.15–3.25 is the bar to watch.`,
  BROS: `View: Positive. Dutch Bros is the fastest grower in the coverage list (revenue +27.9%) and lifted its operating margin to 9.8% as its drive-thru model scales, with about 250 openings planned next year. The stock fell sharply after Q3 on worries that McDonald's new drinks and fast-growing 7 Brew are chasing the same customers. If same-shop sales and traffic hold up, the long-term growth story is intact.`,
  // Casual dining
  DRI: `View: Positive. Darden (Olive Garden, LongHorn and others) is the scale leader in casual dining, with a 12.0% operating margin and FY2026 revenue up 9.4%, about two points of which came from a 53rd week. LongHorn is the standout, and every segment posted positive same-restaurant sales in Q1 of fiscal 2027. The stock is not cheap, but Darden's scale gives it purchasing and advertising advantages smaller chains cannot match.`,
  TXRH: `View: Neutral. Texas Roadhouse has been one of the best traffic stories in casual dining, but beef inflation held its operating margin to 8.1%, and comps slowed from about 6% in July and August to 1.5% in early Q4. Beef costs are easing, which should help margins, but the stock trades at roughly 30x earnings, a premium that depends on traffic holding up. Full Q4 traffic numbers are the key data point.`,
  EAT: `View: Positive. Brinker has had the best turnaround in the industry: Chili's posted its 22nd straight quarter of same-store sales growth, up about 10% in Q1 of fiscal 2027 on top of +21% a year earlier. FY2026 revenue rose 7.9% with a 10.7% operating margin, and on P/E it is one of the cheaper names in the group. The risk is that it is now lapping huge numbers, so slower growth could hit the stock even if the business stays healthy.`,
  CAKE: `View: Positive. The Cheesecake Factory's Q3 2026 was a standout, with comps at its namesake restaurants up 15.2% and traffic up 9.5%, proof that a differentiated, experience-driven casual dining brand can still win. Newer concepts like North Italia and Flower Child add unit growth, though the 5.0% operating margin leaves little room for cost pressure. The question is whether that traffic surge holds up next year.`,
  CBRL: `View: Cautious. Cracker Barrel had a rough FY2026: revenue fell 4.7%, it posted an operating loss, and GAAP earnings were propped up by a $47M legal settlement. The balance sheet has improved and new CEO David Deno is guiding to 3–5% comps in fiscal 2027, but traffic was still down about 6% last quarter. I would want to see traffic stabilize before trusting the turnaround.`,
  BLMN: `View: Cautious. Bloomin' Brands (Outback, Carrabba's, Bonefish Grill, Fleming's) is early in an Outback turnaround: guest scores have improved for five straight quarters, but traffic is still falling and the FY2025 operating margin was under 1%. The company suspended its dividend to fund the plan, and a large franchisee filed for bankruptcy. Positive Outback traffic is the proof point I am waiting for.`,
  DIN: `View: Cautious. Dine Brands (Applebee's, IHOP) is almost fully franchised, which gives it an 11.7% margin before interest, but heavy debt eats most of that: FY2025 pre-tax income was just $25M after $78M of interest. Applebee's and IHOP both returned to small positive comps in Q3 2026, and dual-brand restaurants are the growth plan. The stock looks cheap on adjusted earnings for a reason, since its leverage leaves little room for error.`
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
