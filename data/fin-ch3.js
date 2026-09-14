window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'fin-ch3', subject: 'fin', num: 3,
  title: 'Analysis of Financial Statements',
  overview: 'Ratio analysis: the five families of ratios (profitability, asset management, liquidity, debt management, market value), how to compute each one for Computron’s projected 2024 statements, how to compare against industry averages and over time, the DuPont equation that ties it all together, and the limits of ratios.',
  sections: [
    { title: '0. The Map of This Chapter', html:
      '<p>Ratios make raw statement numbers <strong>comparable</strong> — one company over time (trend analysis) and one company against its peers (<span class="term">benchmarking</span>). Different users care about different ratios:</p>' +
      '<ul>' +
      '<li><strong>Short-term creditors</strong> → liquidity ratios (will I get paid this year?).</li>' +
      '<li><strong>Long-term creditors</strong> → debt ratio, TIE, coverage, plus profitability.</li>' +
      '<li><strong>Equity investors</strong> → profitability first, then the rest for risk.</li>' +
      '<li><strong>Managers</strong> → everything, to find weaknesses and to keep up appearances for the other three groups.</li>' +
      '</ul>' +
      '<p>The chapter works one example throughout — Computron’s 2024 projections (2024E) — so learn the numbers and you can rebuild any ratio: Sales $6,600 · COGS ex-depr. $5,210 · Depreciation $370 · EBIT $620 · Interest $100 · Net income $390 · Total assets $5,000 · Current assets $1,300 · Inventory $660 · Receivables $530 · Net fixed assets $3,700 · Current liabilities $700 · Notes payable $100 · Long-term debt $1,100 · Equity $3,200 · 100M shares · Price $49 · EPS $3.90 · Lease payments $20.</p>' },

    { title: '1. Profitability Ratios — the Return on Sales and on Capital', html:
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Computron 2024E</th><th>Industry</th><th>What it tells you</th></tr>' +
      '<tr><td><span class="term">Net profit margin</span></td><td>Net income ÷ Sales</td><td>390 ÷ 6,600 = 5.9%</td><td>7.2%</td><td>Profit per dollar of sales after everything, including interest and taxes.</td></tr>' +
      '<tr><td><span class="term">Operating profit margin</span></td><td>EBIT ÷ Sales</td><td>620 ÷ 6,600 = 9.4%</td><td>10.4%</td><td>Profit per dollar of sales before financing and taxes.</td></tr>' +
      '<tr><td><span class="term">Basic earning power (BEP)</span></td><td>EBIT ÷ Total assets</td><td>620 ÷ 5,000 = 12.4%</td><td>15.6%</td><td>Raw earning power of assets, <em>before</em> taxes and leverage — good for comparing firms with different debt and tax situations.</td></tr>' +
      '<tr><td><span class="term">Return on assets (ROA)</span></td><td>Net income ÷ Total assets</td><td>390 ÷ 5,000 = 7.8%</td><td>10.8%</td><td>Net income generated per dollar of assets.</td></tr>' +
      '<tr><td><span class="term">Return on equity (ROE)</span></td><td>Net income ÷ Common equity</td><td>390 ÷ 3,200 = 12.2%</td><td>15.4%</td><td>Shareholders’ rate of return, after the effect of leverage.</td></tr></table></div>' +
      '<p><strong>Verdict:</strong> all below industry, but improving from 2023 (ROA was 5.4%, ROE 9.1%).</p>' +
      '<div class="tip"><strong>How debt affects ROA vs. ROE:</strong> interest expense lowers net income, so more debt <em>lowers ROA</em>. But debt also means <em>less equity</em> for the same assets; if equity falls proportionally more than net income, <em>ROE rises</em>. That is why ROE can look great for a highly leveraged (risky) firm — which the DuPont equation makes explicit.</div>' },

    { title: '2. Asset Management (Efficiency) Ratios — How Hard Are the Assets Working?', html:
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Computron 2024E</th><th>Industry</th><th>What it tells you</th></tr>' +
      '<tr><td><span class="term">Inventory turnover</span></td><td>COGS ÷ Inventories<br>(COGS <em>including</em> depreciation)</td><td>(5,210 + 370) ÷ 660 = 8.5×</td><td>9.0×</td><td>How many times inventory is sold and replaced per year. Low = excess or obsolete stock.</td></tr>' +
      '<tr><td><span class="term">Days sales outstanding (DSO)</span></td><td>Receivables ÷ (Sales ÷ 365)</td><td>530 ÷ (6,600 ÷ 365) = 29.3 days</td><td>28.0 days</td><td>Average days from sale to cash collection. Also called average collection period.</td></tr>' +
      '<tr><td><span class="term">Fixed assets turnover</span></td><td>Sales ÷ Net fixed assets</td><td>6,600 ÷ 3,700 = 1.8×</td><td>3.0×</td><td>Sales generated per dollar of plant and equipment.</td></tr>' +
      '<tr><td><span class="term">Total assets turnover</span></td><td>Sales ÷ Total assets</td><td>6,600 ÷ 5,000 = 1.3×</td><td>1.5×</td><td>Sales per dollar of all assets.</td></tr></table></div>' +
      '<p><strong>Verdict:</strong> turnover ratios improved from 2023 but remain below industry — Computron carries too many fixed assets relative to its sales (the 2023 expansion).</p>' +
      '<div class="tip"><strong>Slide-specific detail:</strong> Computron’s income statement shows "COGS except depreciation," so the slides add depreciation back in when computing inventory turnover. If a problem gives you COGS directly, just use it.</div>' },

    { title: '3. Liquidity Ratios — Can It Pay Bills Due This Year?', html:
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Computron 2024E</th><th>Industry</th></tr>' +
      '<tr><td><span class="term">Current ratio</span></td><td>Current assets ÷ Current liabilities</td><td>1,300 ÷ 700 = 1.9×</td><td>2.5×</td></tr>' +
      '<tr><td><span class="term">Quick (acid-test) ratio</span></td><td>(Current assets − Inventories) ÷ Current liabilities</td><td>(1,300 − 660) ÷ 700 = 0.9×</td><td>1.3×</td></tr></table></div>' +
      '<p>The quick ratio strips out inventory because it is the least liquid current asset — it must be sold (and often collected) before it becomes cash. Computron’s liquidity is <strong>weak</strong>: improving, but below the industry on both measures.</p>' +
      '<p><strong>Classic reasoning question (Ryngaert & Co.):</strong> sales constant, total assets turnover <em>fell</em> → assets grew. Fixed assets turnover constant → the growth was in <em>current</em> assets. Current ratio <em>rose</em> but quick ratio unchanged → the growth was specifically in <em>inventory</em>.</p>' },

    { title: '4. Debt Management (Leverage) Ratios — How Much Debt, and Can It Be Serviced?', html:
      '<p>Two questions: (1) what fraction of the firm is financed with debt? (2) can earnings cover the fixed charges that debt creates?</p>' +
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Computron 2024E</th><th>Industry</th></tr>' +
      '<tr><td><span class="term">Debt ratio (debt-to-assets)</span></td><td>Total debt ÷ Total assets<br>(debt = notes payable + long-term debt)</td><td>(100 + 1,100) ÷ 5,000 = 24.0%</td><td>15.0%</td></tr>' +
      '<tr><td><span class="term">Debt-to-equity</span></td><td>Total debt ÷ Common equity</td><td>1,200 ÷ 3,200 = 0.38</td><td>0.22</td></tr>' +
      '<tr><td><span class="term">Liabilities-to-assets</span></td><td>Total liabilities ÷ Total assets</td><td>1,800 ÷ 5,000 = 36.0%</td><td>30.0%</td></tr>' +
      '<tr><td><span class="term">Equity multiplier</span></td><td>Total assets ÷ Common equity</td><td>5,000 ÷ 3,200 = 1.56</td><td>1.5</td></tr>' +
      '<tr><td><span class="term">Times interest earned (TIE)</span></td><td>EBIT ÷ Interest expense</td><td>620 ÷ 100 = 6.2×</td><td>13.0×</td></tr>' +
      '<tr><td><span class="term">EBITDA coverage</span></td><td>(EBIT + Depr. & Amort. + Lease pmts) ÷ (Interest + Lease pmts + Loan principal pmts)</td><td>(620 + 370 + 20) ÷ (100 + 20 + 0) = 8.4×</td><td>17.2×</td></tr></table></div>' +
      '<p><strong>Verdict:</strong> improved from 2023 but Computron still carries more debt and thinner coverage than the industry — <strong>more risk</strong>. TIE says operating income could fall to about 1/6 of its current level before interest couldn’t be paid; EBITDA coverage is broader because it counts cash flow available for leases and principal too.</p>' +
      '<div class="tip">"Total debt" in these ratios means <em>interest-bearing</em> debt (notes payable + bonds), not all liabilities. Accounts payable and accruals are operating liabilities, which is why the liabilities-to-assets ratio is a separate, larger number.</div>' },

    { title: '5. Market Value Ratios — What Does the Market Think?', html:
      '<p>These relate the stock price to earnings, cash flow, and book value — the market’s combined judgment of past performance, expected growth, and risk. Higher current earnings and higher expected growth <em>raise</em> them; higher risk <em>lowers</em> them.</p>' +
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Computron 2024E</th><th>Industry</th></tr>' +
      '<tr><td><span class="term">Price/earnings (P/E)</span></td><td>Price per share ÷ EPS</td><td>49.00 ÷ 3.90 = 12.6×</td><td>16.8×</td></tr>' +
      '<tr><td><span class="term">Price/cash flow</span></td><td>Price per share ÷ Cash flow per share<br>(cash flow = NI + depreciation)</td><td>—</td><td>—</td></tr>' +
      '<tr><td><span class="term">Book value per share</span></td><td>Common equity ÷ Shares outstanding</td><td>3,200 ÷ 100 = $32.00</td><td>—</td></tr>' +
      '<tr><td><span class="term">Market/book (M/B)</span></td><td>Price per share ÷ Book value per share</td><td>49.00 ÷ 32.00 = 1.53×</td><td>2.6×</td></tr></table></div>' +
      '<p><strong>Verdict:</strong> investors pay less per dollar of Computron’s earnings and book value than for the average firm in the industry — the market doesn’t value it as highly.</p>' },

    { title: '6. Common-Size and Percent-Change Statements', html:
      '<ul>' +
      '<li><span class="term">Common-size statements</span> express every balance-sheet item as a % of total assets and every income-statement item as a % of sales. This removes size so you can compare with the industry. Findings: Computron’s net fixed assets are 74% of assets vs. 66% for the industry; COGS is 78.9% of sales vs. 71%; net income is 5.9% of sales vs. 7.4%.</li>' +
      '<li><span class="term">Percent-change statements</span> show the cumulative % change of each item from a base year. From 2022 to 2023: sales +9.1% but net income −28.5%; receivables +30%, inventory +32%, notes payable +400% — assets grew 20% while profit fell, funded by debt. The 2024E projections show inventory growth cut back and notes payable reduced.</li>' +
      '</ul>' },

    { title: '7. The DuPont Equation — Why ROE Is What It Is', html:
      '<div class="formula">ROE = Net income ÷ Equity<br>&nbsp;&nbsp;&nbsp;&nbsp;= ROA × Equity multiplier<br>&nbsp;&nbsp;&nbsp;&nbsp;= (Net income ÷ Sales) × (Sales ÷ Total assets) × (Total assets ÷ Equity)<br>&nbsp;&nbsp;&nbsp;&nbsp;= Profit margin × Total assets turnover × Equity multiplier</div>' +
      '<p>The <span class="term">DuPont equation</span> splits ROE into three levers management can pull:</p>' +
      '<ol>' +
      '<li><strong>Profit margin</strong> — expense control (how much of each sales dollar survives as profit).</li>' +
      '<li><strong>Total assets turnover</strong> — asset utilization (how many sales dollars each asset dollar generates).</li>' +
      '<li><strong>Equity multiplier</strong> — debt utilization (how much of the asset base is financed by equity vs. borrowed money).</li>' +
      '</ol>' +
      '<div class="tablewrap"><table><tr><th>Year</th><th>Profit margin</th><th>×</th><th>TA turnover</th><th>×</th><th>Equity multiplier</th><th>=</th><th>ROE</th></tr>' +
      '<tr><td>2022</td><td>6.7%</td><td></td><td>1.348</td><td></td><td>1.495</td><td></td><td>13.5%</td></tr>' +
      '<tr><td>2023</td><td>4.4%</td><td></td><td>1.224</td><td></td><td>1.684</td><td></td><td>9.1%</td></tr>' +
      '<tr><td>2024E</td><td>5.9%</td><td></td><td>1.320</td><td></td><td>1.563</td><td></td><td>12.2%</td></tr></table></div>' +
      '<p>These match the directly computed ROEs. The 2023 collapse came from margin and turnover both falling; only the higher equity multiplier (more debt) propped ROE up — a reminder that leverage raises ROE <em>and</em> risk.</p>' +
      '<div class="tip"><strong>Industry differences:</strong> a grocery chain has a tiny profit margin but very high turnover; a steel company needs far more assets per dollar of sales (low turnover) but earns a higher margin. High turnover and low margin often go together, and vice versa — DuPont shows how both routes can produce a similar ROE.</div>' },

    { title: '8. Limitations of Ratio Analysis & Qualitative Factors', html:
      '<ul>' +
      '<li><strong>Conglomerates:</strong> a firm with many divisions has no clean industry average to compare against (PepsiCo vs. Coca-Cola was misleading when Pepsi also owned restaurants and snack foods).</li>' +
      '<li><strong>Seasonality:</strong> inventory and receivables swing during the year, distorting turnover ratios. Fix: use monthly averages.</li>' +
      '<li><strong>Growth and timing:</strong> equity is measured at a point in time while income accrues over the year, so ROE differs depending on whether beginning, ending, or average equity is used — average is conceptually best.</li>' +
      '<li><span class="term">Window dressing:</span> techniques (e.g., borrowing just before year-end to boost cash) that make statements look better than they are.</li>' +
      '<li><strong>Different accounting practices</strong> (inventory methods, depreciation) distort comparisons.</li>' +
      '<li>"Good" or "bad" is ambiguous: a high current ratio might mean strong liquidity — or idle cash and excess inventory.</li>' +
      '</ul>' +
      '<p><strong>Qualitative factors</strong> ratios miss: dependence on a single customer, product, or supplier; heavy overseas exposure; the competitive situation; the product pipeline; legal and regulatory issues.</p>' },

    { title: '9. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>BEP uses EBIT; ROA uses net income.</strong> BEP is the "before taxes and leverage" version.</li>' +
      '<li><strong>Quick ratio removes inventory only</strong> — receivables stay in.</li>' +
      '<li><strong>DSO uses sales per day (Sales ÷ 365)</strong>, not COGS.</li>' +
      '<li><strong>Debt ratio uses interest-bearing debt</strong>; liabilities-to-assets uses all liabilities.</li>' +
      '<li><strong>Equity multiplier = Total assets ÷ Equity</strong> — it is greater than 1 whenever there is any debt, and it is the leverage term in DuPont.</li>' +
      '<li><strong>Higher P/E and M/B are "better"</strong> in the sense the market values the firm more highly.</li>' +
      '<li><strong>More debt → lower ROA but possibly higher ROE.</strong></li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Liquidity ratios', def: 'Ratios relating current assets to current liabilities, showing ability to meet maturing short-term obligations.' },
    { term: 'Current ratio', def: 'Current assets ÷ current liabilities.' },
    { term: 'Quick (acid-test) ratio', def: '(Current assets − inventories) ÷ current liabilities; excludes the least liquid current asset.' },
    { term: 'Asset management (efficiency) ratios', def: 'Ratios measuring how effectively a firm manages its assets: inventory turnover, DSO, fixed assets turnover, total assets turnover.' },
    { term: 'Inventory turnover', def: 'Cost of goods sold (including depreciation) ÷ inventories.' },
    { term: 'Days sales outstanding (DSO)', def: 'Receivables ÷ average daily sales (Sales ÷ 365): how long the firm waits after a sale to collect cash. Also called average collection period.' },
    { term: 'Fixed assets turnover', def: 'Sales ÷ net fixed assets: how effectively plant and equipment generate sales.' },
    { term: 'Total assets turnover', def: 'Sales ÷ total assets.' },
    { term: 'Debt ratio (debt-to-assets)', def: 'Total interest-bearing debt ÷ total assets: the fraction of assets financed by debtholders.' },
    { term: 'Debt-to-equity ratio', def: 'Total debt ÷ total common equity.' },
    { term: 'Equity multiplier', def: 'Total assets ÷ common equity; the leverage factor in the DuPont equation.' },
    { term: 'Times-interest-earned (TIE)', def: 'EBIT ÷ interest charges: how far operating income can fall before the firm cannot cover interest.' },
    { term: 'EBITDA coverage ratio', def: '(EBITDA + lease payments) ÷ (interest + lease payments + principal payments): a broader coverage measure that includes leases and debt repayment.' },
    { term: 'Profitability ratios', def: 'Ratios showing the combined effects of liquidity, asset management, and debt on operating results.' },
    { term: 'Net profit margin', def: 'Net income ÷ sales: profit per dollar of sales.' },
    { term: 'Operating profit margin', def: 'EBIT ÷ sales.' },
    { term: 'Basic earning power (BEP)', def: 'EBIT ÷ total assets: raw earning power of assets before taxes and leverage.' },
    { term: 'Return on assets (ROA)', def: 'Net income ÷ total assets.' },
    { term: 'Return on equity (ROE)', def: 'Net income ÷ common equity: shareholders’ return after the effect of leverage.' },
    { term: 'Market value ratios', def: 'Ratios relating stock price to earnings, cash flow, and book value: P/E, price/cash flow, M/B.' },
    { term: 'Price/earnings (P/E) ratio', def: 'Price per share ÷ earnings per share: what investors pay per dollar of profit.' },
    { term: 'Market/book (M/B) ratio', def: 'Price per share ÷ book value per share (equity ÷ shares outstanding).' },
    { term: 'Common-size statements', def: 'Balance sheet items as a % of total assets; income statement items as a % of sales.' },
    { term: 'Percent-change statements', def: 'Each item’s cumulative % change from a base year.' },
    { term: 'Trend analysis', def: 'Plotting a ratio over time to see whether the firm’s condition is improving or deteriorating.' },
    { term: 'Benchmarking (comparative ratio analysis)', def: 'Comparing a firm’s ratios with leading companies in the same industry.' },
    { term: 'DuPont equation', def: 'ROE = Profit margin × Total assets turnover × Equity multiplier (= ROA × Equity multiplier).' },
    { term: 'Window dressing', def: 'Techniques used to make financial statements look better than they really are.' },
    { term: 'Effect of debt on ROA vs. ROE', def: 'Interest lowers net income and thus ROA; but less equity means ROE can rise — at the cost of more risk.' }
  ],
  quiz: [
    { q: 'Current assets are $1,300, inventories $660, and current liabilities $700. The quick ratio is…',
      options: ['1.9', '0.9', '1.3', '0.5'],
      answer: 1, explain: '(1,300 − 660) ÷ 700 = 0.91. The quick ratio removes inventory, the least liquid current asset.' },
    { q: 'Receivables are $530 and annual sales are $6,600. Days sales outstanding is approximately…',
      options: ['12 days', '29 days', '80 days', '365 days'],
      answer: 1, explain: 'DSO = 530 ÷ (6,600 ÷ 365) = 530 ÷ 18.08 ≈ 29.3 days.' },
    { q: 'Basic earning power (BEP) is calculated as…',
      options: ['net income ÷ total assets', 'EBIT ÷ total assets', 'EBIT ÷ sales', 'net income ÷ equity'],
      answer: 1, explain: 'BEP uses EBIT to show the raw earning power of assets before taxes and leverage.' },
    { q: 'EBIT is $620 and interest expense is $100. The times-interest-earned ratio is…',
      options: ['6.2', '0.16', '520', '62'],
      answer: 0, explain: 'TIE = EBIT ÷ interest = 620 ÷ 100 = 6.2×.' },
    { q: 'Notes payable are $100, long-term debt $1,100, accounts payable $330, and total assets $5,000. The debt ratio is…',
      options: ['30.6%', '24.0%', '36.0%', '22.0%'],
      answer: 1, explain: 'Debt ratio uses interest-bearing debt: (100 + 1,100) ÷ 5,000 = 24%. Payables are excluded.' },
    { q: 'Price per share is $49 and EPS is $3.90. The P/E ratio is about…',
      options: ['12.6', '0.08', '191', '49'],
      answer: 0, explain: 'P/E = 49 ÷ 3.90 ≈ 12.6 — investors pay $12.60 per $1 of earnings.' },
    { q: 'Equity is $3,200 with 100 million shares; the stock trades at $49. The market/book ratio is…',
      options: ['0.65', '1.53', '3.2', '15.3'],
      answer: 1, explain: 'Book value per share = 3,200 ÷ 100 = $32; M/B = 49 ÷ 32 = 1.53.' },
    { q: 'The DuPont equation expresses ROE as…',
      options: ['profit margin × total assets turnover × equity multiplier', 'net income ÷ sales', 'EBIT ÷ total assets × (1 − T)', 'current ratio × debt ratio'],
      answer: 0, explain: 'ROE = (NI ÷ Sales) × (Sales ÷ TA) × (TA ÷ Equity) — expense control, asset use, and leverage.' },
    { q: 'Profit margin is 5.9%, total assets turnover 1.32, and the equity multiplier 1.56. ROE is about…',
      options: ['7.8%', '12.2%', '5.9%', '20.6%'],
      answer: 1, explain: '0.059 × 1.32 × 1.56 ≈ 0.122 = 12.2%.' },
    { q: 'Adding debt to a firm’s capital structure tends to…',
      options: ['raise ROA and lower ROE', 'lower ROA but possibly raise ROE', 'raise both ROA and ROE', 'leave both unchanged'],
      answer: 1, explain: 'Interest lowers net income (ROA down), but the smaller equity base can push ROE up — with more risk.' },
    { q: 'Sales are unchanged, total assets turnover fell, fixed assets turnover is unchanged, the current ratio rose, and the quick ratio is unchanged. The firm most likely…',
      options: ['bought new equipment', 'increased its inventories', 'paid down debt', 'collected receivables faster'],
      answer: 1, explain: 'Assets grew (TAT fell) in current assets (FAT constant), and specifically in inventory (current ratio up, quick ratio flat).' },
    { q: 'Short-term creditors are most interested in…',
      options: ['market value ratios', 'liquidity ratios', 'the DuPont equation', 'profit margins'],
      answer: 1, explain: 'Short-term lenders care whether the firm can pay obligations coming due soon.' },
    { q: 'In a common-size income statement, each item is expressed as a percentage of…',
      options: ['total assets', 'net income', 'sales', 'the prior year’s value'],
      answer: 2, explain: 'Income statement items are scaled by sales; balance sheet items by total assets.' },
    { q: 'Window dressing refers to…',
      options: ['seasonal inventory build-ups', 'techniques that make financial statements look better than they really are', 'comparing ratios across industries', 'using average rather than year-end equity'],
      answer: 1, explain: 'Window dressing manipulates the appearance of the statements — one of the limitations of ratio analysis.' }
  ]
});
