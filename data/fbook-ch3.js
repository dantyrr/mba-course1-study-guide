window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'fbook-ch3', subject: 'fbook', num: 3, altLabel: 'Course Ch 14',
  title: 'Analysis of Financial Statements',
  overview: 'Built from the textbook chapter. Financial statement analysis does two things: compares a firm with others in its industry, and tracks its own trend over time. The book walks a specific four-step workflow (cash flows → ROIC and FCF → ratios), then works through five families of ratios, ties them together with the DuPont equation, and closes with the limitations and the qualitative questions ratios can never answer.',
  sections: [
    { title: '0. The Map: Why Analyze Statements at All', html:
      '<p>The chapter opens with the same value equation as Chapter 2: a firm’s <strong>intrinsic value is the present value of expected future free cash flows discounted at the WACC</strong>. Statement analysis is how you estimate the pieces that drive that equation — <strong>profitability, required capital investments, business risk, and the debt/equity mix</strong>.</p>' +
      '<p><strong>Financial statement analysis involves two comparisons:</strong></p>' +
      '<ol><li>Comparing the firm’s performance with <strong>other firms in the same industry</strong>.</li>' +
      '<li>Evaluating <strong>trends in the firm’s own position over time</strong>.</li></ol>' +
      '<p><strong>Three audiences, three purposes:</strong> <em>managers</em> use it to spot situations needing attention; <em>lenders</em> use it to judge creditworthiness; <em>stockholders</em> use it to predict future earnings, dividends, and free cash flow.</p>' +
      '<div class="tip"><strong>Context note:</strong> the chapter opens by pointing out that companies actively guide analysts — a National Investor Relations Institute survey found <strong>94% of respondents in 2014</strong> provided some form of earnings guidance. Analysts are not working from statements alone.</div>' },

    { title: '1. The Four-Step Analysis Workflow (3-1)', html:
      '<p>This ordered workflow is distinctive to the book — the slides skip it, but it tells you <em>what to look at first</em>, which is exactly what an exam question like "where would you begin?" is testing.</p>' +
      '<div class="tablewrap"><table><tr><th>Step</th><th>What you do</th><th>What you are looking for</th></tr>' +
      '<tr><td><strong>1. Gather data (3-1a)</strong></td><td>Download the statements (SEC EDGAR and many financial websites).</td><td>Standardized statements you can paste into a spreadsheet.</td></tr>' +
      '<tr><td><strong>2. Examine the statement of cash flows (3-1b)</strong></td><td>Look here <strong>first</strong> — "some financial analysis can be done with virtually no calculations."</td><td><strong>Operating:</strong> downward trends or negative net cash flow from operations "almost always indicates problems." <strong>Investing:</strong> a big jump vs. prior years signals a major acquisition. <strong>Financing:</strong> is the company raising capital from investors or returning it to them (issuing debt vs. buying back stock)?</td></tr>' +
      '<tr><td><strong>3. Calculate ROIC and FCF (3-1c)</strong></td><td>Compute NOPAT and total net operating capital (from Chapter 2), then the OP ratio, CR ratio, ROIC, and FCF.</td><td><strong>ROIC vs. WACC.</strong> ROIC > WACC → the company is usually adding value. ROIC < WACC → the company usually has serious problems.</td></tr>' +
      '<tr><td><strong>4. Begin ratio analysis (3-1d)</strong></td><td>Only now do you compute the five ratio families.</td><td>Ratios "extract important information that might not be obvious simply from examining the financial statements."</td></tr>' +
      '</table></div>' +
      '<p>Note the book’s income-statement convention carried over from Chapter 2: COGS is split into <strong>(1) COGS excluding depreciation</strong> and <strong>(2) depreciation</strong>, so you can see each separately. MicroDrive has no amortization.</p>' +
      '<div class="tip"><strong>The logic of the order:</strong> ROIC tells you the firm’s <em>overall</em> performance, but it cannot tell you <em>why</em>. Ratios diagnose the specific activities. As the book puts it, no matter what ROIC says about overall performance, you still need the individual ratios to examine specific activities.</div>' },

    { title: '2. Profitability Ratios (3-2)', html:
      '<p>Profitability ratios identify the factors affecting NOPAT, then go further by <strong>incorporating the impact of leverage</strong> on shareholders’ profitability as measured by net income.</p>' +
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>What it isolates</th></tr>' +
      '<tr><td><span class="term">Net profit margin</span><br>(profit margin on sales)</td><td><div class="formula">Net income ÷ Sales</div></td><td>Profit per dollar of sales after <em>everything</em> — operations, interest, and taxes.</td></tr>' +
      '<tr><td><span class="term">Operating profit margin</span></td><td><div class="formula">EBIT ÷ Sales</div></td><td>Performance of <strong>operations before interest expense</strong> is considered — separates operating problems from financing ones.</td></tr>' +
      '<tr><td><span class="term">Gross profit margin</span></td><td><div class="formula">(Sales − COGS) ÷ Sales</div></td><td>Gross profit per dollar of sales <strong>before any other expenses</strong> — drills deepest into cost structure.</td></tr>' +
      '<tr><td><span class="term">Basic earning power (BEP)</span></td><td><div class="formula">EBIT ÷ Total assets</div></td><td>Raw earning power of assets <strong>before taxes and leverage</strong>.</td></tr>' +
      '<tr><td><span class="term">Return on total assets (ROA)</span></td><td><div class="formula">Net income ÷ Total assets</div></td><td>Return on assets <strong>after interest and taxes</strong>.</td></tr>' +
      '<tr><td><span class="term">Return on common equity (ROE)</span></td><td><div class="formula">Net income ÷ Common equity</div></td><td>How well stockholders are doing "in an accounting sense" on the money they invested.</td></tr>' +
      '</table></div>' +
      '<p><strong>Why BEP is useful:</strong> because it strips out both taxes and leverage, it lets you compare firms with <em>different tax situations and different degrees of financial leverage</em> — an apples-to-apples measure of asset earning power.</p>' +
      '<div class="tip"><strong>Why debt lowers ROA but can raise ROE (a self-test question).</strong> Debt creates interest expense, which reduces net income — the numerator of both ratios — so <strong>ROA falls</strong>. But debt also means <em>less equity</em> supports the same assets. If equity shrinks proportionally more than net income does, <strong>ROE rises</strong>. Worked self-test: a firm with $200B sales, $10B net income, $100B assets financed half debt / half equity has PM = 5%, ROA = 10%, ROE = 20%. Replace some debt with equity and <strong>ROA increases</strong> (less interest → more net income) while <strong>ROE decreases</strong> (bigger equity base, less leverage).</div>' },

    { title: '3. Asset Management (Efficiency) Ratios (3-3)', html:
      '<p>These measure how effectively the firm uses its assets — hence the alternative name <strong>efficiency ratios</strong>. The book frames the stakes in cash-flow terms:</p>' +
      '<ul>' +
      '<li><strong>Too many assets</strong> → operating capital is unduly high → <strong>reduces free cash flow</strong> and ultimately the stock price.</li>' +
      '<li><strong>Too few assets</strong> → lost sales → hurts profitability, FCF, and the stock price.</li>' +
      '<li>The goal is therefore <strong>the right amount</strong> invested in assets — not simply "less."</li>' +
      '</ul>' +
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Interpretation</th></tr>' +
      '<tr><td><span class="term">Total assets turnover</span></td><td><div class="formula">Sales ÷ Total assets</div></td><td>Sales dollars generated per dollar tied up in assets.</td></tr>' +
      '<tr><td><span class="term">Fixed assets turnover</span></td><td><div class="formula">Sales ÷ Net fixed assets</div></td><td>How effectively property, plant, and equipment are used.</td></tr>' +
      '<tr><td><span class="term">Days sales outstanding (DSO)</span><br>= average collection period (ACP)</td><td><div class="formula">Receivables ÷ (Sales ÷ 365)</div></td><td>Average days the firm waits after a sale before receiving cash.</td></tr>' +
      '<tr><td><span class="term">Inventory turnover</span></td><td><div class="formula">COGS ÷ Inventories</div></td><td>How many times inventory is sold and replaced per year.</td></tr>' +
      '</table></div>' +
      '<p><strong>Two book-specific warnings the slides leave out:</strong></p>' +
      '<ol>' +
      '<li><strong>Inventory turnover uses COGS, not sales.</strong> Sales revenues include both costs <em>and</em> profit, whereas inventory is usually reported <em>at cost</em>. Using COGS compares inventory with the cost of producing or acquiring it — a like-for-like comparison.</li>' +
      '<li><strong>Fixed assets turnover is distorted by inflation.</strong> Fixed assets are carried at <em>historical cost</em>, not current replacement cost. So a <strong>mature firm</strong> whose assets were bought years ago can show a <em>higher</em> fixed assets turnover than a <strong>younger firm</strong> with newer assets recorded at inflated prices — that reflects accountants’ difficulty with inflation, <em>not</em> inefficiency at the new firm. Be alert to this when comparing firms of different ages.</li>' +
      '</ol>' +
      '<p><strong>Year-end vs. average balances:</strong> sales occur throughout the year but assets are reported at period end. For a growing or seasonal company, <em>average</em> assets would technically be better. The book nonetheless uses <strong>year-end values for all turnover ratios</strong> so they stay comparable with most published industry averages.</p>' +
      '<div class="tip"><strong>Receivables feed back into Chapter 2:</strong> high accounts receivable (and high inventories) raise <span class="term">net operating working capital</span>, which <strong>hurts FCF and the stock price</strong>. So if DSO has been rising unexpectedly, the firm should review its credit standards and expedite collections.</div>' },

    { title: '4. Liquidity Ratios (3-4)', html:
      '<p>Liquidity is about meeting obligations coming due soon. <strong>Current assets</strong> normally include cash, marketable securities, receivables, and inventories. <strong>Current liabilities</strong> consist of accounts payable, short-term notes payable, current maturities of long-term debt, accrued taxes, and other accrued expenses.</p>' +
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Notes</th></tr>' +
      '<tr><td><span class="term">Current ratio</span></td><td><div class="formula">Current assets ÷ Current liabilities</div></td><td>"The best single indicator of the extent to which the claims of short-term creditors are covered by assets that are expected to be converted to cash fairly quickly" — the most commonly used measure of short-term solvency. Creditors generally like to see a high one.</td></tr>' +
      '<tr><td><span class="term">Quick ratio</span> (acid test)</td><td><div class="formula">(Current assets − Inventories) ÷ Current liabilities</div></td><td>Measures the ability to pay short-term obligations <strong>without relying on selling inventory</strong>.</td></tr>' +
      '</table></div>' +
      '<p><strong>What makes an asset "liquid":</strong> a <span class="term">liquid asset</span> trades in an <strong>active market</strong>, so it can be converted quickly to cash at the going market price. <strong>Inventories are typically the least liquid current asset</strong> — which is exactly why the quick ratio removes them. They are also the current assets on which <strong>losses are most likely in a bankruptcy</strong>.</p>' +
      '<p><strong>The warning sign:</strong> when a company starts to experience financial difficulty, it begins paying its bills (accounts payable) <em>more slowly</em> and borrowing more from its bank — so <strong>current liabilities rise</strong> and the current ratio falls. The book is candid that ratio analysis "doesn’t answer such questions, but it does point to areas of potential concern."</p>' +
      '<div class="tip"><strong>Reverse-engineering self-test:</strong> current liabilities $800M and a current ratio of 2.5 → current assets = 2.5 × 800 = <strong>$2,000M</strong>. If the quick ratio is 2.0, then (2,000 − Inventory) ÷ 800 = 2.0 → 2,000 − Inventory = 1,600 → <strong>Inventory = $400M</strong>. Expect this "solve backwards" format on an exam.</div>' },

    { title: '5. Debt Management (Leverage) Ratios (3-5)', html:
      '<p><span class="term">Financial leverage</span> is the extent to which a firm uses debt financing. The book gives <strong>three implications</strong> — worth memorizing as a set:</p>' +
      '<ol>' +
      '<li><strong>Control.</strong> Stockholders can control a firm with a smaller investment of their own equity if part of the firm is financed with debt.</li>' +
      '<li><strong>Magnification — both ways.</strong> If assets generate a <em>higher</em> pre-tax return than the interest rate on debt, shareholders’ returns are magnified ("leveraged"). But shareholders’ <strong>losses are equally magnified</strong> if assets return <em>less</em> than the interest rate.</li>' +
      '<li><strong>Fragility.</strong> With high leverage, even a <em>small</em> decline in performance can push the firm’s value below what it owes creditors.</li>' +
      '</ol>' +
      '<p>Debt management ratios answer two questions: <strong>(1) how much debt relative to equity?</strong> and <strong>(2) can the firm pay interest and principal?</strong> — together they indicate the likelihood of default.</p>' +
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Notes</th></tr>' +
      '<tr><td><span class="term">Debt-to-assets (debt) ratio</span></td><td><div class="formula">Total debt ÷ Total assets</div></td><td><strong>Total debt = all short-term debt + all long-term debt.</strong> It does <em>not</em> include other liabilities. The book prefers this one because it is intuitive to think in terms of the percentage of the firm financed with debt.</td></tr>' +
      '<tr><td><span class="term">Debt-to-equity ratio</span></td><td><div class="formula">Total debt ÷ Total common equity</div></td><td>Widely used, so know how to interpret it too.</td></tr>' +
      '<tr><td><span class="term">Market debt ratio</span></td><td><div class="formula">Total debt ÷ (Total debt + Market value of equity)</div></td><td>Uses the <em>market</em> value of equity. Because the market value of debt is hard to estimate, analysts usually substitute the book value of debt.</td></tr>' +
      '<tr><td><span class="term">Liabilities-to-assets ratio</span></td><td><div class="formula">Total liabilities ÷ Total assets</div></td><td>The extent to which assets are supported by <strong>liabilities of every kind</strong>, not just interest-bearing debt — so it is always ≥ the debt ratio.</td></tr>' +
      '<tr><td><span class="term">Equity multiplier</span></td><td><div class="formula">Total assets ÷ Common equity</div></td><td>"The factor by which the return on assets is multiplied to determine the return on equity" — the leverage term in DuPont.</td></tr>' +
      '<tr><td><span class="term">Times-interest-earned (TIE)</span></td><td><div class="formula">EBIT ÷ Interest expense</div></td><td>How far operating income can fall before interest cannot be covered.</td></tr>' +
      '<tr><td><span class="term">EBITDA coverage ratio</span></td><td><div class="formula">(EBITDA + Lease payments) ÷ (Interest + Lease payments + Principal payments)</div></td><td>A broader coverage measure — see below.</td></tr>' +
      '</table></div>' +
      '<p><strong>TIE’s two shortcomings</strong> (and why EBITDA coverage exists):</p>' +
      '<ol>' +
      '<li><strong>Interest is not the only fixed financial charge.</strong> Companies must also <em>repay debt on schedule</em>, and many <em>lease</em> assets and must make lease payments. Failing either can force bankruptcy.</li>' +
      '<li><strong>EBIT is not all the cash available to service debt</strong>, especially when a firm has large non-cash charges like depreciation and amortization.</li>' +
      '</ol>' +
      '<p>So the better ratio puts all the "cash" earnings in the numerator and all the fixed financial charges in the denominator.</p>' +
      '<div class="tip"><strong>Who uses which — a clean exam distinction.</strong> <strong>Banks and other short-term lenders focus on the EBITDA coverage ratio</strong>; they rarely lend beyond about 5 years (except real-estate-backed loans), and over a short period the tax savings from depreciation genuinely can service debt. <strong>Long-term bondholders focus on TIE</strong>, because over a long horizon those depreciation funds must be <em>reinvested</em> to maintain plant and equipment or the company cannot stay in business.</div>' +
      '<div class="tip"><strong>Definitions vary by source — the book flags this explicitly.</strong> Some sources define the debt ratio using <em>only long-term debt</em>; others (confusingly) use <em>total liabilities</em> instead of total debt; some use <em>investor-supplied capital</em> in the denominator instead of total assets. Similar variations exist for debt-to-equity. <strong>Always check your source’s definition before using a ratio.</strong></div>' },

    { title: '6. Market Value Ratios (3-6)', html:
      '<p>These relate the stock price to earnings, cash flow, and book value — a way to measure the value of one company’s stock relative to another’s, and an indication of what investors think of past performance and future prospects.</p>' +
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Formula</th><th>Interpretation</th></tr>' +
      '<tr><td><span class="term">Price/earnings (P/E)</span></td><td><div class="formula">Price per share ÷ Earnings per share</div></td><td>How much investors will pay per dollar of reported profits. <strong>Higher for firms with strong growth prospects; lower for riskier firms</strong> (other things held constant).</td></tr>' +
      '<tr><td><span class="term">Price/free cash flow (P/FCF)</span></td><td><div class="formula">Price per share ÷ Free cash flow per share</div></td><td>Because stock prices depend on the ability to generate FCF, investors often look here.</td></tr>' +
      '<tr><td><span class="term">Price/EBITDA</span></td><td><div class="formula">Price ÷ EBITDA</div></td><td>A <strong>better measure of operating performance than P/E</strong>, because P/E incorporates non-operating items — interest expense and taxes.</td></tr>' +
      '<tr><td><span class="term">Book value per share (BVPS)</span></td><td><div class="formula">Total common equity ÷ Shares outstanding</div></td><td>The accounting value behind each share.</td></tr>' +
      '<tr><td><span class="term">Market capitalization</span></td><td><div class="formula">Shares outstanding × Price per share</div></td><td>Total market value of equity ("market cap").</td></tr>' +
      '<tr><td><span class="term">Market/book (M/B)</span></td><td><div class="formula">Price per share ÷ Book value per share<br>= Market cap ÷ Total common equity</div></td><td>Both routes give the same number. <strong>Companies with relatively high ROE generally sell at higher multiples of book value.</strong></td></tr>' +
      '</table></div>' },

    { title: '7. Common Size, Percentage Change, and Trend Analysis (3-7)', html:
      '<div class="tablewrap"><table><tr><th>Method</th><th>How to do it</th><th>What it reveals</th></tr>' +
      '<tr><td><span class="term">Common size analysis</span></td><td>Divide <strong>all income statement items by sales</strong>; divide <strong>all balance sheet items by total assets</strong>.</td><td>Removes the effect of size, so you can compare statements <em>over time</em> and <em>across companies</em>. Easy in a spreadsheet — with standardized statements you can paste a new company’s data over the old and every formula still works.</td></tr>' +
      '<tr><td><span class="term">Percentage change analysis</span></td><td>Compute growth rates for all income statement items and balance sheet accounts <strong>relative to a base year</strong>.</td><td>Helps a manager identify possible trouble spots so the company can address them.</td></tr>' +
      '<tr><td><span class="term">Trend analysis</span></td><td>Plot a single ratio <strong>over time</strong>, usually against the industry average.</td><td>Gives clues whether the firm’s condition is likely to improve or deteriorate. The book’s example: MicroDrive’s <strong>return on assets has been declining since 2021, in contrast to the industry average</strong>.</td></tr>' +
      '</table></div>' },

    { title: '8. Tying It Together: The DuPont Equation (3-8)', html:
      '<p>The book’s framing: "in ratio analysis, it is sometimes easy to miss the forest for all the trees." The DuPont equation provides the framework that shows how profitability, asset efficiency, and leverage <strong>interact</strong> to determine ROE — and critically, it explains <strong>why</strong> a company’s ROE is high or low, not just what it is.</p>' +
      '<div class="formula">Simple version:&nbsp;&nbsp;ROE = (Net income ÷ Total assets) × (Total assets ÷ Equity) = ROA × Equity multiplier<br><br>Extended (three-part) version:<br>ROE = (Net income ÷ Sales) × (Sales ÷ Total assets) × (Total assets ÷ Equity)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= Profit margin × Total assets turnover × Equity multiplier</div>' +
      '<p><strong>The three levers, in the book’s own terms:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Lever</th><th>Ratio</th><th>Management question it answers</th></tr>' +
      '<tr><td><strong>Expense control</strong></td><td>Profit margin (PM)</td><td>How much of each sales dollar survives as profit?</td></tr>' +
      '<tr><td><strong>Asset utilization</strong></td><td>Total assets turnover (TAT)</td><td>How many sales dollars does each asset dollar generate?</td></tr>' +
      '<tr><td><strong>Debt utilization</strong></td><td>Equity multiplier (EM)</td><td>How much of the asset base is funded by borrowed money rather than equity?</td></tr>' +
      '</table></div>' +
      '<p><strong>The same ROE, reached two different ways</strong> — the book’s key insight. Company A, "perhaps a jewelry store," has:</p>' +
      '<div class="formula">PM 20% × TAT 0.5 × EM 1.0 = <strong>10% ROE</strong></div>' +
      '<p>It earns 10% for equity holders by selling <em>relatively few items</em> given its asset base, at a <em>high profit margin</em>, using <em>no leverage</em> (100% equity financed → EM = 1.0). A grocery chain would reach a similar ROE from the opposite direction: a thin margin, very high turnover. <strong>DuPont shows the route, not just the destination.</strong></p>' +
      '<p><strong>Self-test:</strong> profit margin 6%, total assets turnover 2, equity multiplier 1.5 → ROE = 0.06 × 2 × 1.5 = <strong>18%</strong>.</p>' +
      '<div class="tip">The book notes DuPont is valuable for <strong>"quick and dirty" estimates</strong> of how operating changes will affect returns — change one lever, see the ROE effect immediately.</div>' },

    { title: '9. Comparative Ratios and Benchmarking (3-9)', html:
      '<p>Ratio analysis is inherently comparative. The standard comparison is against <strong>industry-average figures</strong>. But the book notes that MicroDrive’s managers, like most firms, go a step further: they compare their ratios with a <strong>smaller set of leading companies</strong> in their field.</p>' +
      '<p>That technique is <span class="term">benchmarking</span>, and the firms chosen are <span class="term">benchmark companies</span>. MicroDrive benchmarks against <strong>five other firms</strong> its management considers the best-managed companies with similar operations.</p>' +
      '<div class="tip"><strong>A goal-setting point that shows up in the limitations section too:</strong> to set goals for <em>high-level</em> performance, benchmark against the <strong>industry leaders’</strong> ratios — not the industry <em>average</em>. Averaging includes the weak performers.</div>' },

    { title: '10. Uses and Limitations of Ratio Analysis (3-10)', html:
      '<p>Ratios give useful information but have limitations "that necessitate care and judgment." The book lists five specific problems:</p>' +
      '<div class="tablewrap"><table><tr><th>Problem</th><th>Explanation</th><th>Fix / caution</th></tr>' +
      '<tr><td><strong>Multidivisional firms</strong></td><td>Large firms operate divisions in different industries, so no meaningful set of industry averages exists.</td><td>Industry averages are more meaningful for <strong>small, narrowly focused firms</strong> than large, multidivisional ones.</td></tr>' +
      '<tr><td><strong>Averages vs. leaders</strong></td><td>Matching the industry average is not an ambitious goal.</td><td>Benchmark on <strong>industry leaders</strong> to set high-level performance goals.</td></tr>' +
      '<tr><td><strong>Inflation</strong></td><td>Badly distorts balance sheets — reported values differ substantially from "true" values. It also affects depreciation charges and inventory costs, so <strong>reported profits are distorted too</strong>.</td><td>Distorts a firm’s analysis <em>over time</em> and comparisons between firms <strong>of different ages</strong>.</td></tr>' +
      '<tr><td><strong>Seasonal effects</strong></td><td>A food processor’s inventory turnover is radically different measured just <em>before</em> versus just <em>after</em> the close of canning season.</td><td>Minimize by using <strong>monthly averages</strong> for inventory and receivables in turnover ratios.</td></tr>' +
      '<tr><td><strong>Window dressing</strong></td><td>Techniques that make statements look stronger than they are.</td><td>The book’s example: take out a <strong>2-year loan in late December</strong>. Being over one year, it is <em>not</em> a current liability — but the cash received <em>is</em> a current asset. Both the current and quick ratios improve and the year-end balance sheet looks stronger. Pay it back in January and the whole transaction was strictly window dressing.</td></tr>' +
      '<tr><td><strong>Different accounting practices</strong></td><td>Choices of <strong>inventory valuation</strong> (FIFO vs. LIFO) and <strong>depreciation methods</strong> affect statements differently.</td><td>Makes company-to-company comparisons less meaningful.</td></tr>' +
      '</table></div>' +
      '<p><strong>The book’s bottom line:</strong> conducting ratio analysis in a <em>mechanical, unthinking manner</em> is dangerous. Used intelligently and with good judgment, it provides useful insights into operations — and, importantly, it <strong>identifies the right questions to ask</strong>.</p>' },

    { title: '11. Looking Beyond the Numbers (3-11)', html:
      '<p>Sound analysis requires qualitative factors too. The book lists five questions suggested by the <strong>American Association of Individual Investors (AAII)</strong>:</p>' +
      '<ol>' +
      '<li><strong>Concentration risk.</strong> To what extent are revenues tied to <em>one key customer</em> or <em>one key product</em>? Does the company rely on a <em>single supplier</em>? Reliance on any single customer, product, or supplier <strong>increases risk</strong>.</li>' +
      '<li><strong>Overseas exposure.</strong> What percentage of business is generated overseas? A large percentage exposes the firm to <strong>currency exchange volatility and political instability</strong>.</li>' +
      '<li><strong>Competition.</strong> What are the probable actions of current competitors, and how likely are <em>new</em> competitors?</li>' +
      '<li><strong>Product pipeline.</strong> Do future prospects depend critically on products <em>currently in the pipeline</em>, or on existing products?</li>' +
      '<li><strong>Legal and regulatory environment.</strong> How does it affect the company?</li>' +
      '</ol>' },

    { title: '12. Morris Corporation — Full Worked Example', html:
      '<p>The chapter reuses one company across four consecutive self-tests. Learn it once and you can answer all of them. <strong>Given data:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Balance sheet</th><th></th><th>Income statement</th><th></th></tr>' +
      '<tr><td>Cash</td><td>$40</td><td>Sales</td><td>$820</td></tr>' +
      '<tr><td>Accounts receivable</td><td>30</td><td>COGS (excluding depreciation)</td><td>450</td></tr>' +
      '<tr><td>Inventories</td><td>100</td><td>Depreciation</td><td>50</td></tr>' +
      '<tr><td>Net fixed assets</td><td>500</td><td>Other operating expenses</td><td>100</td></tr>' +
      '<tr><td><strong>Total assets</strong></td><td><strong>$670</strong></td><td><strong>EBIT</strong></td><td><strong>$220</strong></td></tr>' +
      '<tr><td>Accounts payable</td><td>20</td><td>Interest expense</td><td>20</td></tr>' +
      '<tr><td>Accruals</td><td>10</td><td>Pre-tax income</td><td>$200</td></tr>' +
      '<tr><td>Short-term debt</td><td>25</td><td>Taxes (25%)</td><td>50</td></tr>' +
      '<tr><td>Long-term debt</td><td>200</td><td><strong>Net income</strong></td><td><strong>$150</strong></td></tr>' +
      '<tr><td>Common equity</td><td>415</td><td colspan="2">Stock: 100 shares at $15</td></tr>' +
      '</table></div>' +
      '<p><strong>Derived subtotals you will need:</strong> current assets = 40 + 30 + 100 = <strong>$170</strong> · current liabilities = 20 + 10 + 25 = <strong>$55</strong> · total debt = 25 + 200 = <strong>$225</strong> · total liabilities = 20 + 10 + 25 + 200 = <strong>$255</strong> · COGS including depreciation = 450 + 50 = <strong>$500</strong>.</p>' +
      '<div class="tablewrap"><table><tr><th>Ratio</th><th>Calculation</th><th>Answer</th></tr>' +
      '<tr><td>Net profit margin</td><td>150 ÷ 820</td><td>18.3%</td></tr>' +
      '<tr><td>Operating profit margin</td><td>220 ÷ 820</td><td>26.8%</td></tr>' +
      '<tr><td>Basic earning power</td><td>220 ÷ 670</td><td>32.8%</td></tr>' +
      '<tr><td>Return on total assets</td><td>150 ÷ 670</td><td>22.4%</td></tr>' +
      '<tr><td>Return on common equity</td><td>150 ÷ 415</td><td>36.1%</td></tr>' +
      '<tr><td>Total assets turnover</td><td>820 ÷ 670</td><td>1.2×</td></tr>' +
      '<tr><td>Fixed assets turnover</td><td>820 ÷ 500</td><td>1.6×</td></tr>' +
      '<tr><td>Days sales outstanding</td><td>30 ÷ (820 ÷ 365) = 30 ÷ 2.247</td><td>13.4 days</td></tr>' +
      '<tr><td>Inventory turnover</td><td>500 ÷ 100&nbsp;&nbsp;<em>(COGS includes depreciation)</em></td><td>5.0×</td></tr>' +
      '<tr><td>Current ratio</td><td>170 ÷ 55</td><td>3.1×</td></tr>' +
      '<tr><td>Quick ratio</td><td>(170 − 100) ÷ 55</td><td>1.3×</td></tr>' +
      '<tr><td>Debt-to-assets ratio</td><td>225 ÷ 670</td><td>33.6%</td></tr>' +
      '<tr><td>Debt-to-equity ratio</td><td>225 ÷ 415</td><td>54.2%</td></tr>' +
      '<tr><td>Liabilities-to-assets ratio</td><td>255 ÷ 670</td><td>38.1%</td></tr>' +
      '<tr><td>Times-interest-earned</td><td>220 ÷ 20</td><td>11.0×</td></tr>' +
      '<tr><td>Equity multiplier</td><td>670 ÷ 415</td><td>1.61×</td></tr>' +
      '<tr><td>Market debt ratio</td><td>225 ÷ (225 + 100 × $15) = 225 ÷ 1,725</td><td>13.0%</td></tr>' +
      '</table></div>' +
      '<p><strong>Interpreting the market debt ratio result:</strong> 13.0% versus the book-value debt ratio of 33.6%. The market values Morris’s equity ($1,500) far above its book value ($415), so measured against market value the firm looks <strong>considerably less risky</strong> — a much smaller share of its true value is owed to creditors.</p>' +
      '<div class="tip"><strong>DuPont cross-check:</strong> PM 18.3% × TAT 1.224 × EM 1.614 = 36.1% — exactly the ROE computed directly. If your three DuPont components don’t reproduce ROE, one of them is wrong. (Note: the debt-ratio self-test states a 40% tax rate, but none of the ratios it asks for — debt, D/E, liabilities-to-assets, TIE — use net income, so the answers are unchanged.)</div>' },

    { title: '13. MicroDrive: Chapter 2 Statements → Chapter 3 Ratios', html:
      '<p>The chapter continues the MicroDrive example from Chapter 2. Using those 2023 statements (sales $5,000; EBIT $400; interest $60; net income available to common $248; 60M shares at $31; cash $100; ST investments $10; receivables $500; inventories $1,000; net plant &amp; equipment $2,000; accounts payable $200; notes payable $150; accruals $400; long-term bonds $520; preferred $100; common equity $2,240), here is the full ratio set worked out.</p>' +
      '<p><em>Conventions used: net income = income available to common; COGS includes depreciation (3,900 + 200 = 4,100); total assets = $3,610; current assets = $1,610; current liabilities = $750; total debt = notes payable + bonds = $670; total liabilities = $1,270.</em></p>' +
      '<div class="tablewrap"><table><tr><th>Family</th><th>Ratio</th><th>Calculation</th><th>Result</th></tr>' +
      '<tr><td rowspan="6">Profitability</td><td>Net profit margin</td><td>248 ÷ 5,000</td><td>5.0%</td></tr>' +
      '<tr><td>Operating profit margin</td><td>400 ÷ 5,000</td><td>8.0%</td></tr>' +
      '<tr><td>Gross profit margin</td><td>(5,000 − 4,100) ÷ 5,000</td><td>18.0%</td></tr>' +
      '<tr><td>Basic earning power</td><td>400 ÷ 3,610</td><td>11.1%</td></tr>' +
      '<tr><td>Return on assets</td><td>248 ÷ 3,610</td><td>6.9%</td></tr>' +
      '<tr><td>Return on equity</td><td>248 ÷ 2,240</td><td>11.1%</td></tr>' +
      '<tr><td rowspan="4">Asset management</td><td>Total assets turnover</td><td>5,000 ÷ 3,610</td><td>1.39×</td></tr>' +
      '<tr><td>Fixed assets turnover</td><td>5,000 ÷ 2,000</td><td>2.5×</td></tr>' +
      '<tr><td>Days sales outstanding</td><td>500 ÷ (5,000 ÷ 365)</td><td>36.5 days</td></tr>' +
      '<tr><td>Inventory turnover</td><td>4,100 ÷ 1,000</td><td>4.1×</td></tr>' +
      '<tr><td rowspan="2">Liquidity</td><td>Current ratio</td><td>1,610 ÷ 750</td><td>2.15×</td></tr>' +
      '<tr><td>Quick ratio</td><td>(1,610 − 1,000) ÷ 750</td><td>0.81×</td></tr>' +
      '<tr><td rowspan="5">Debt management</td><td>Debt-to-assets</td><td>670 ÷ 3,610</td><td>18.6%</td></tr>' +
      '<tr><td>Debt-to-equity</td><td>670 ÷ 2,240</td><td>29.9%</td></tr>' +
      '<tr><td>Liabilities-to-assets</td><td>1,270 ÷ 3,610</td><td>35.2%</td></tr>' +
      '<tr><td>Equity multiplier</td><td>3,610 ÷ 2,240</td><td>1.61×</td></tr>' +
      '<tr><td>Times-interest-earned</td><td>400 ÷ 60</td><td>6.7×</td></tr>' +
      '<tr><td rowspan="4">Market value</td><td>Market cap</td><td>60 × $31</td><td>$1,860M</td></tr>' +
      '<tr><td>Book value per share</td><td>2,240 ÷ 60</td><td>$37.33</td></tr>' +
      '<tr><td>P/E</td><td>$31.00 ÷ $4.13</td><td>7.5×</td></tr>' +
      '<tr><td>Market/book</td><td>$31.00 ÷ $37.33</td><td>0.83×</td></tr>' +
      '</table></div>' +
      '<p><strong>What the numbers say.</strong> The quick ratio below 1.0 and inventory turnover of only 4.1× point straight at the inventory build-up flagged in Chapter 2. DSO of 36.5 days reflects receivables that also grew faster than sales. Most damning is the <strong>market/book ratio of 0.83</strong> — the market values MicroDrive at <em>less than</em> the book value of its equity, which is the same story as its negative MVA (−$380M) from Chapter 2.</p>' +
      '<div class="tip"><strong>Why P/FCF is not meaningful here:</strong> MicroDrive’s 2023 free cash flow was <strong>−$210 million</strong>. A price-to-FCF ratio computed on negative FCF is meaningless — a good reminder that any ratio with a negative or near-zero denominator should be discarded rather than reported.</div>' +
      '<div class="tip"><strong>DuPont cross-check:</strong> PM 4.96% × TAT 1.385 × EM 1.612 = <strong>11.1%</strong>, matching ROE computed directly. Notice the equity multiplier of 1.61 is doing real work — ROA is only 6.9%.</div>' },

    { title: '14. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>Start with the statement of cash flows</strong>, not the ratios. Negative or declining operating cash flow "almost always indicates problems."</li>' +
      '<li><strong>Inventory turnover uses COGS; every other turnover ratio uses sales.</strong> Sales include profit; inventory is carried at cost.</li>' +
      '<li><strong>DSO uses sales per day</strong> (Sales ÷ 365), and DSO = average collection period.</li>' +
      '<li><strong>Total debt ≠ total liabilities.</strong> Debt = short-term debt + long-term debt only. That is why the liabilities-to-assets ratio exceeds the debt ratio for the same firm (Morris: 38.1% vs. 33.6%).</li>' +
      '<li><strong>BEP uses EBIT; ROA uses net income.</strong> BEP deliberately strips out taxes and leverage so firms with different tax and debt profiles can be compared.</li>' +
      '<li><strong>More debt lowers ROA but can raise ROE</strong> — and raises risk. The equity multiplier is where that shows up in DuPont.</li>' +
      '<li><strong>Banks watch EBITDA coverage; bondholders watch TIE.</strong> Short horizon vs. long horizon.</li>' +
      '<li><strong>EBITDA coverage puts lease payments in BOTH the numerator and the denominator.</strong> Forgetting the numerator lease add-back is the most common arithmetic slip.</li>' +
      '<li><strong>A high current ratio is not automatically good</strong>, and an old firm’s high fixed-assets turnover may just be historical-cost accounting, not efficiency.</li>' +
      '<li><strong>Check the definition before using a ratio</strong> — sources differ on debt ratio and debt-to-equity.</li>' +
      '<li><strong>Window dressing:</strong> a December 2-year loan inflates current <em>and</em> quick ratios because the cash is current but the loan is not.</li>' +
      '<li><strong>Benchmark against leaders, not averages</strong>, when setting goals.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Financial statement analysis', def: 'Comparing a firm with other firms in the same industry and evaluating trends in its own financial position over time.' },
    { term: 'The four-step analysis workflow', def: '(1) gather data, (2) examine the statement of cash flows, (3) calculate ROIC and FCF, (4) begin ratio analysis.' },
    { term: 'What to check first', def: 'Net cash provided by operating activities — downward trends or negative operating cash flow almost always indicate problems.' },
    { term: 'ROIC vs. WACC test', def: 'ROIC greater than WACC → the company is usually adding value; ROIC less than WACC → the company usually has serious problems.' },
    { term: 'Net profit margin', def: 'Net income ÷ sales; profit per dollar of sales after interest and taxes. Also called profit margin on sales.' },
    { term: 'Operating profit margin', def: 'EBIT ÷ sales; operating performance before interest expense is considered.' },
    { term: 'Gross profit margin', def: '(Sales − COGS) ÷ sales; gross profit per dollar of sales before any other expenses are deducted.' },
    { term: 'Basic earning power (BEP)', def: 'EBIT ÷ total assets; the raw earning power of assets before taxes and leverage — useful for comparing firms with different tax situations and leverage.' },
    { term: 'Return on total assets (ROA)', def: 'Net income ÷ total assets; return on assets after interest and taxes.' },
    { term: 'Return on common equity (ROE)', def: 'Net income ÷ common equity; how well stockholders are doing in an accounting sense.' },
    { term: 'Why debt lowers ROA', def: 'Interest expense reduces net income, the numerator — so ROA falls even though assets are unchanged.' },
    { term: 'Why debt can raise ROE', def: 'Debt replaces equity in the denominator; if equity falls proportionally more than net income, ROE rises — along with risk.' },
    { term: 'Asset management (efficiency) ratios', def: 'Ratios measuring how effectively a firm uses its assets: total assets turnover, fixed assets turnover, DSO, and inventory turnover.' },
    { term: 'The right amount of assets', def: 'Too many assets raise operating capital and cut FCF; too few cost sales. Both hurt the stock price.' },
    { term: 'Total assets turnover', def: 'Sales ÷ total assets; sales dollars generated per dollar tied up in assets.' },
    { term: 'Fixed assets turnover', def: 'Sales ÷ net fixed assets; how effectively plant and equipment are used.' },
    { term: 'Fixed assets turnover and inflation', def: 'Fixed assets are carried at historical cost, so an older firm can show a higher ratio than a newer one — an accounting artifact, not greater efficiency.' },
    { term: 'Days sales outstanding (DSO)', def: 'Receivables ÷ average daily sales (Sales ÷ 365); average days from sale to cash. Also called the average collection period (ACP).' },
    { term: 'Inventory turnover', def: 'COGS ÷ inventories. Uses COGS rather than sales because sales include profit while inventory is reported at cost.' },
    { term: 'Year-end vs. average balances', def: 'Average assets would be better for growing or seasonal firms, but year-end values are used so ratios match published industry averages.' },
    { term: 'Current ratio', def: 'Current assets ÷ current liabilities; the best single indicator of short-term creditor coverage and the most commonly used measure of short-term solvency.' },
    { term: 'Quick (acid test) ratio', def: '(Current assets − inventories) ÷ current liabilities; ability to pay short-term obligations without selling inventory.' },
    { term: 'Liquid asset', def: 'An asset that trades in an active market and can be converted quickly to cash at the going market price.' },
    { term: 'Least liquid current asset', def: 'Inventories — the current assets on which losses are most likely in a bankruptcy.' },
    { term: 'Financial difficulty warning sign', def: 'A struggling firm pays accounts payable more slowly and borrows more from banks, so current liabilities rise and liquidity ratios fall.' },
    { term: 'Financial leverage', def: 'The extent to which a firm uses debt financing.' },
    { term: 'Three implications of leverage', def: '(1) stockholders control the firm with less of their own equity, (2) returns AND losses are magnified, (3) a small performance decline can push value below what is owed.' },
    { term: 'Debt-to-assets (debt) ratio', def: 'Total debt ÷ total assets, where total debt = short-term debt + long-term debt only (not other liabilities).' },
    { term: 'Debt-to-equity ratio', def: 'Total debt ÷ total common equity.' },
    { term: 'Market debt ratio', def: 'Total debt ÷ (total debt + market value of equity); uses market rather than book equity.' },
    { term: 'Liabilities-to-assets ratio', def: 'Total liabilities ÷ total assets; how far assets are supported by liabilities of every kind rather than equity.' },
    { term: 'Equity multiplier', def: 'Total assets ÷ common equity; the factor by which ROA is multiplied to get ROE.' },
    { term: 'Times-interest-earned (TIE)', def: 'EBIT ÷ interest expense; how far operating income can fall before interest cannot be covered.' },
    { term: 'TIE’s two shortcomings', def: '(1) interest is not the only fixed charge — debt repayment and leases also matter; (2) EBIT omits non-cash charges, understating cash available to service debt.' },
    { term: 'EBITDA coverage ratio', def: '(EBITDA + lease payments) ÷ (interest + lease payments + principal payments); lease payments appear in both numerator and denominator.' },
    { term: 'Who uses TIE vs. EBITDA coverage', def: 'Banks and short-term lenders focus on EBITDA coverage; long-term bondholders focus on TIE, because depreciation funds must eventually be reinvested in plant.' },
    { term: 'Price/earnings (P/E) ratio', def: 'Price per share ÷ EPS; higher for firms with strong growth prospects, lower for riskier firms.' },
    { term: 'Price/free cash flow (P/FCF)', def: 'Price per share ÷ FCF per share; used because stock prices depend on the ability to generate free cash flow.' },
    { term: 'Price/EBITDA ratio', def: 'Price ÷ EBITDA; a better measure of operating performance than P/E because P/E includes non-operating items (interest and taxes).' },
    { term: 'Book value per share', def: 'Total common equity ÷ shares outstanding.' },
    { term: 'Market capitalization', def: 'Shares outstanding × price per share — the total market value of equity.' },
    { term: 'Market/book (M/B) ratio', def: 'Price per share ÷ book value per share, or equivalently market cap ÷ total common equity. Firms with high ROE generally sell at higher multiples of book.' },
    { term: 'Common size analysis', def: 'Divide all income statement items by sales and all balance sheet items by total assets, so statements can be compared over time and across companies.' },
    { term: 'Percentage change analysis', def: 'Growth rates for all statement items relative to a base year, used to identify possible trouble spots.' },
    { term: 'Trend analysis', def: 'Plotting a ratio over time to see whether the firm’s condition is improving or deteriorating — e.g., MicroDrive’s ROA declining since 2021 against a flat industry average.' },
    { term: 'DuPont equation (extended)', def: 'ROE = profit margin × total assets turnover × equity multiplier; explains WHY ROE is high or low, not just what it is.' },
    { term: 'DuPont’s three levers', def: 'Expense control (profit margin), asset utilization (total assets turnover), and debt utilization (equity multiplier).' },
    { term: 'Same ROE, different routes', def: 'A jewelry store: 20% margin × 0.5 turnover × 1.0 multiplier = 10% ROE. A grocery chain reaches similar ROE with a thin margin and high turnover.' },
    { term: 'Benchmarking', def: 'Comparing a company with a smaller set of leading firms (benchmark companies) rather than only the industry average. MicroDrive uses five.' },
    { term: 'Window dressing', def: 'Making statements look stronger than they are — e.g., a 2-year loan taken in late December adds current assets without adding current liabilities, inflating the current and quick ratios.' },
    { term: 'Limitations of ratio analysis', def: 'Multidivisional firms lack comparable averages; averages are not ambitious goals; inflation distorts values and profits; seasonality distorts turnover; window dressing; differing accounting practices.' },
    { term: 'Looking beyond the numbers', def: 'AAII qualitative questions: concentration in one customer/product/supplier, overseas exposure, competitors, product pipeline, and legal/regulatory environment.' }
  ],
  quiz: [
    { q: 'According to the book’s workflow, what should you examine FIRST when analyzing a company?',
      options: ['the DuPont equation', 'the statement of cash flows, especially net cash from operating activities', 'the market/book ratio', 'the industry average table'],
      answer: 1, explain: 'Some analysis takes virtually no calculation — declining or negative operating cash flow almost always signals problems.' },
    { q: 'Morris Corp: sales $820, EBIT $220, net income $150, total assets $670, common equity $415. Its ROE is…',
      options: ['22.4%', '36.1%', '32.8%', '18.3%'],
      answer: 1, explain: 'ROE = net income ÷ common equity = 150 ÷ 415 = 36.1%.' },
    { q: 'Using the same Morris data, the basic earning power ratio is…',
      options: ['32.8%', '22.4%', '26.8%', '36.1%'],
      answer: 0, explain: 'BEP = EBIT ÷ total assets = 220 ÷ 670 = 32.8%. It uses EBIT, so taxes and leverage are excluded.' },
    { q: 'Why is the basic earning power ratio useful?',
      options: ['it includes the effect of leverage', 'it shows asset earning power before taxes and leverage, so firms with different tax and debt profiles can be compared', 'it is always higher than ROA', 'it measures liquidity'],
      answer: 1, explain: 'That is exactly the comparison problem BEP is designed to solve.' },
    { q: 'A firm replaces some debt financing with equity financing. What happens?',
      options: ['ROA rises and ROE falls', 'both rise', 'ROA falls and ROE rises', 'neither changes'],
      answer: 0, explain: 'Less interest raises net income (ROA up), but a larger equity base and less leverage lower ROE.' },
    { q: 'Inventory turnover is computed with COGS rather than sales because…',
      options: ['COGS is always larger', 'sales include profit while inventory is reported at cost', 'sales are seasonal', 'GAAP requires it'],
      answer: 1, explain: 'Using COGS compares inventory with the cost of producing or acquiring it — a like-for-like basis.' },
    { q: 'A firm has $200M sales, $180M COGS, $40M inventory, $60M receivables. Inventory turnover and DSO are…',
      options: ['5.0× and 109.5 days', '4.5× and 109.5 days', '4.5× and 73 days', '5.0× and 30 days'],
      answer: 1, explain: 'Turnover = 180 ÷ 40 = 4.5×; DSO = 60 ÷ (200 ÷ 365) = 109.5 days.' },
    { q: 'An older firm shows a higher fixed assets turnover than a newer competitor. The most likely explanation is…',
      options: ['the older firm is genuinely more efficient', 'inflation — the older firm’s assets are carried at lower historical costs', 'the newer firm has more sales', 'a seasonal effect'],
      answer: 1, explain: 'Historical-cost accounting makes older assets look small relative to current replacement cost, inflating the ratio.' },
    { q: 'Which current asset is typically the LEAST liquid?',
      options: ['cash', 'marketable securities', 'accounts receivable', 'inventories'],
      answer: 3, explain: 'Inventories are least liquid and are where losses are most likely in bankruptcy — which is why the quick ratio removes them.' },
    { q: 'A company has current liabilities of $800M and a current ratio of 2.5. Its current assets are…',
      options: ['$320M', '$2,000M', '$1,200M', '$800M'],
      answer: 1, explain: 'Current assets = 2.5 × 800 = $2,000M. If the quick ratio is 2.0, inventory = 2,000 − 1,600 = $400M.' },
    { q: 'Which statement about financial leverage is correct?',
      options: ['it magnifies gains but not losses', 'it magnifies both shareholder returns and shareholder losses', 'it reduces the risk of default', 'it requires stockholders to invest more equity'],
      answer: 1, explain: 'Returns are leveraged when assets out-earn the interest rate; losses are equally magnified when they do not.' },
    { q: 'In the book’s definition, "total debt" in the debt ratio includes…',
      options: ['all liabilities including payables and accruals', 'short-term debt plus long-term debt only', 'long-term debt only', 'debt plus preferred stock'],
      answer: 1, explain: 'Other liabilities are excluded — which is why the liabilities-to-assets ratio is a separate, larger number.' },
    { q: 'Morris has $225 of total debt, $670 of total assets, and 100 shares trading at $15. Its market debt ratio is…',
      options: ['33.6%', '13.0%', '54.2%', '38.1%'],
      answer: 1, explain: '225 ÷ (225 + 1,500) = 13.0% — far below the 33.6% book debt ratio, so the firm looks less risky on a market basis.' },
    { q: 'The equity multiplier is defined as…',
      options: ['total assets ÷ common equity', 'common equity ÷ total assets', 'total debt ÷ equity', 'net income ÷ equity'],
      answer: 0, explain: 'It is the factor by which ROA is multiplied to obtain ROE.' },
    { q: 'A company has EBITDA of $600M, interest of $60M, lease payments of $40M, and principal payments of $30M. Its EBITDA coverage ratio is…',
      options: ['4.6', '4.9', '6.5', '10.0'],
      answer: 1, explain: '(600 + 40) ÷ (60 + 40 + 30) = 640 ÷ 130 = 4.9. Lease payments appear in both numerator and denominator.' },
    { q: 'Which lender group focuses most on the EBITDA coverage ratio rather than TIE?',
      options: ['long-term bondholders', 'banks and other short-term lenders', 'preferred stockholders', 'common stockholders'],
      answer: 1, explain: 'Over a short horizon, depreciation tax savings can service debt; over the long run those funds must be reinvested, so bondholders prefer TIE.' },
    { q: 'The price/EBITDA ratio is considered a better measure of operating performance than P/E because…',
      options: ['EBITDA is always larger than earnings', 'P/E incorporates non-operating items such as interest expense and taxes', 'EBITDA includes depreciation', 'P/E is not published'],
      answer: 1, explain: 'Stripping out financing and tax effects isolates operations.' },
    { q: 'Market capitalization is calculated as…',
      options: ['total common equity', 'shares outstanding × price per share', 'price ÷ book value per share', 'total assets − total liabilities'],
      answer: 1, explain: 'Market cap is the total market value of equity; dividing it by total common equity gives the M/B ratio.' },
    { q: 'In a common size analysis, balance sheet items are divided by ___ and income statement items by ___.',
      options: ['sales; total assets', 'total assets; sales', 'equity; net income', 'the base year; sales'],
      answer: 1, explain: 'That standardization removes size so firms and years can be compared directly.' },
    { q: 'A company has a profit margin of 6%, total assets turnover of 2, and an equity multiplier of 1.5. Its ROE is…',
      options: ['9%', '12%', '18%', '21%'],
      answer: 2, explain: 'DuPont: 0.06 × 2 × 1.5 = 18%.' },
    { q: 'A jewelry store with a 20% profit margin, 0.5 total assets turnover, and no debt has an ROE of…',
      options: ['10%', '20%', '40%', '5%'],
      answer: 0, explain: '0.20 × 0.5 × 1.0 = 10%. All-equity financing means the equity multiplier is 1.0.' },
    { q: 'Taking out a 2-year loan in late December and repaying it in January is an example of…',
      options: ['trend analysis', 'window dressing', 'benchmarking', 'common size analysis'],
      answer: 1, explain: 'The cash counts as a current asset but the loan is not a current liability, so current and quick ratios look artificially strong at year-end.' },
    { q: 'Industry averages are MOST meaningful for…',
      options: ['large multidivisional conglomerates', 'small, narrowly focused firms', 'firms in different countries', 'firms with seasonal sales'],
      answer: 1, explain: 'Multidivisional firms span industries, so no single set of averages fits them.' },
    { q: 'To set goals for high-level performance, the book recommends benchmarking against…',
      options: ['the industry average', 'the industry leaders’ ratios', 'the firm’s own prior year', 'the smallest competitor'],
      answer: 1, explain: 'Averages include weak performers; leaders define what excellent looks like.' },
    { q: 'Which is NOT one of the AAII qualitative questions in "Looking Beyond the Numbers"?',
      options: ['reliance on a single customer, product, or supplier', 'the percentage of business generated overseas', 'the company’s current ratio trend', 'the legal and regulatory environment'],
      answer: 2, explain: 'The current ratio is quantitative. The AAII list covers concentration risk, overseas exposure, competitors, the product pipeline, and legal/regulatory issues.' }
  ]
});
