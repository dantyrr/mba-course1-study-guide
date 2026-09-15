window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'fbook-ch2', subject: 'fbook', num: 2,
  title: 'Financial Statements, Cash Flow, and Taxes',
  overview: 'Built from the textbook chapter rather than the slides. The book’s thesis: a firm’s intrinsic value is the present value of its free cash flows discounted at the WACC, so the whole chapter is about getting from accounting statements to FCF — using MicroDrive, Inc. as the running example — and then evaluating performance (ROIC, MVA, EVA) and the tax rules that shape after-tax cash flows.',
  sections: [
    { title: '0. The Map of the Chapter (Learning Outcomes 2-1 to 2-10)', html:
      '<p>The book organizes the chapter around ten outcomes. Read them as a checklist:</p>' +
      '<ol>' +
      '<li>Name the <strong>four basic financial statements</strong>.</li>' +
      '<li>Outline the <strong>balance sheet</strong> categories.</li>' +
      '<li>Calculate <strong>net income</strong> (and EBITDA, EPS).</li>' +
      '<li>Create a <strong>statement of cash flows</strong>.</li>' +
      '<li>Interpret a <strong>statement of stockholders’ equity</strong>.</li>' +
      '<li>Find <strong>net cash flow</strong>.</li>' +
      '<li>Calculate <strong>free cash flow</strong> (the five steps).</li>' +
      '<li>Evaluate <strong>operating performance</strong> (ROIC, OP, CR, MVA, EVA).</li>' +
      '<li>Identify major provisions of the <strong>corporate tax code</strong>.</li>' +
      '<li>Illustrate how the <strong>personal tax code</strong> is progressive.</li>' +
      '</ol>' +
      '<div class="tip"><strong>Why finance cares (the book’s framing):</strong> Apple generated ~$104B from operations in 2021 and returned $100B to shareholders; Amazon generated $46B and returned none, spending on property and equipment instead. Cash flow is "the lifeblood of a company" — statements matter because they let investors <em>forecast future cash flows</em> and estimate intrinsic value. Most firms use <span class="term">accrual accounting</span>, so some reported items are not cash — which is why the chapter keeps converting accounting numbers into cash-flow numbers.</div>' },

    { title: '1. The Annual Report and the Four Statements (2-1)', html:
      '<p>The <span class="term">annual report</span> has two equally important parts: (1) the <strong>written</strong> material — the chair’s description of the year and new developments (explains <em>why</em> things happened), and (2) the <strong>quantitative</strong> material — four financial statements (what actually happened to assets, earnings, dividends, and cash flows). The four statements: the <strong>balance sheet</strong>, the <strong>income statement</strong>, the <strong>statement of stockholders’ equity</strong>, and the <strong>statement of cash flows</strong>. They are integrated — each refers to the others.</p>' +
      '<p>Public companies file detailed quarterly (10-Q) and annual (10-K) reports on the SEC’s EDGAR system at sec.gov.</p>' },

    { title: '2. The Balance Sheet (2-2) — MicroDrive’s Snapshot', html:
      '<p>A balance sheet is a <strong>snapshot</strong> of financial position on one day (usually the last day of the year); it changes daily, and a retailer’s December 31 sheet looks very different from its June 30 sheet. <strong>Assets</strong> are listed in order of <span class="term">liquidity</span> (how quickly they convert to cash at fair value). <strong>Claims</strong> are listed in the order they must be paid: suppliers (accounts payable, ~30 days), banks (notes payable, ~90 days), bondholders (20+ years), and finally stockholders, whose <span class="term">residual claim</span> never has to be paid off. Amounts are <span class="term">book values</span> (what bookkeepers recorded), which can differ greatly from <span class="term">market values</span>.</p>' +
      '<div class="tablewrap"><table><tr><th>MicroDrive, Dec 31 (millions)</th><th>2022</th><th>2023</th></tr>' +
      '<tr><td>Cash (operating)</td><td>$102</td><td>$100</td></tr>' +
      '<tr><td>Short-term investments</td><td>40</td><td>10</td></tr>' +
      '<tr><td>Accounts receivable</td><td>384</td><td>500</td></tr>' +
      '<tr><td>Inventories</td><td>774</td><td>1,000</td></tr>' +
      '<tr><td>Net plant &amp; equipment</td><td>1,780</td><td>2,000</td></tr>' +
      '<tr><td>Accounts payable</td><td>180</td><td>200</td></tr>' +
      '<tr><td>Notes payable</td><td>28</td><td>150</td></tr>' +
      '<tr><td>Accruals</td><td>370</td><td>400</td></tr>' +
      '<tr><td>Long-term bonds</td><td>350</td><td>520</td></tr>' +
      '<tr><td>Preferred stock</td><td>100</td><td>100</td></tr>' +
      '<tr><td>Common stock + retained earnings (common equity)</td><td>—</td><td>2,240 (RE 1,740)</td></tr></table></div>' +
      '<p><strong>Current assets</strong> (converted to cash within a year): cash, short-term investments, receivables, inventories. Only cash is actually spendable; very-short-maturity securities are <span class="term">cash equivalents</span> and are grouped with cash. The book carefully separates the <strong>cash needed for operations</strong> ($100M) from <span class="term">short-term investments</span> held for other purposes ($10M) — outside sources often don’t make this distinction.</p>' +
      '<p><strong>Inventory accounting — FIFO vs. LIFO (exam favorite):</strong> FIFO assumes the <em>first</em> items bought are the first used; LIFO assumes the <em>most recent</em>. During inflation, the GrindemFirst/GrindemLast example (gravel bought at $1,000, replaced at $1,050) shows FIFO reports the <em>older, cheaper</em> cost in COGS, so a FIFO firm reports (1) <strong>higher</strong> ending inventory, (2) <strong>lower</strong> COGS, and (3) <strong>higher</strong> profits than an otherwise identical LIFO firm. MicroDrive uses FIFO. The accounting choice does not change the physical order in which inventory is used.</p>' +
      '<p><strong>Long-term assets:</strong> plant and equipment last more than a year, so the cost is spread over the useful life as <span class="term">depreciation expense</span> — which is <em>not cash spent this year</em> but this year’s recognition of a prior expenditure. Some firms report gross plant &amp; equipment and accumulated depreciation; MicroDrive reports only <strong>net</strong> plant &amp; equipment.</p>' +
      '<p><strong>Liabilities and equity:</strong> current liabilities (accounts payable, notes payable, <span class="term">accruals</span> — wages, interest, utilities, rent, and taxes owed between payment dates); long-term bonds; <span class="term">preferred stock</span> (a hybrid — ranks below debt but above common in bankruptcy, fixed dividend, no upside); and <strong>common equity</strong> = common stock account + retained earnings, also called <span class="term">net worth</span> (assets net of liabilities and preferred).</p>' +
      '<div class="tip"><strong>Self-test:</strong> total assets $8M, current liabilities $3M, long-term debt $2M, preferred $1M → common equity (net worth) = 8 − 3 − 2 − 1 = <strong>$2M</strong>.</div>' },

    { title: '3. The Income Statement (2-3) — EBITDA, Net Income, EPS', html:
      '<p>The income statement reports <strong>performance over a period</strong> (month, quarter, year), in contrast to the balance sheet’s point-in-time snapshot.</p>' +
      '<div class="tablewrap"><table><tr><th>MicroDrive 2023 (millions)</th><th></th></tr>' +
      '<tr><td>Net sales (revenues less discounts and returns)</td><td>$5,000</td></tr>' +
      '<tr><td>COGS excluding depreciation</td><td>3,900</td></tr>' +
      '<tr><td>Depreciation</td><td>200</td></tr>' +
      '<tr><td>Other operating expenses</td><td>500</td></tr>' +
      '<tr><td><strong>EBIT</strong></td><td><strong>$400</strong> (2022: $440)</td></tr>' +
      '<tr><td>Interest expense</td><td>60</td></tr>' +
      '<tr><td>Pre-tax income (EBT, taxable income)</td><td>$340</td></tr>' +
      '<tr><td>Taxes (25%)</td><td>85</td></tr>' +
      '<tr><td>Net income</td><td>$255</td></tr>' +
      '<tr><td>Preferred dividends</td><td>7</td></tr>' +
      '<tr><td><strong>Net income available to common</strong></td><td><strong>$248</strong></td></tr>' +
      '<tr><td>Common dividends</td><td>60</td></tr>' +
      '<tr><td>Shares outstanding</td><td>60 million</td></tr></table></div>' +
      '<ul>' +
      '<li><strong>Depreciation</strong> (tangible assets) vs. <strong>amortization</strong> (intangibles: goodwill from paying more than book value in an acquisition, patents, copyrights, trademarks). Straight-line example: a $100,000 machine, 5-year life, zero salvage → $20,000/yr.</li>' +
      '<li><strong>COGS</strong> = labor, raw materials, and other direct production costs. Most published statements bury depreciation inside COGS; the book reports it separately for transparency.</li>' +
      '<li><span class="term">EBITDA</span> = EBIT + depreciation &amp; amortization = 400 + 200 = <strong>$600M</strong>; or Sales − COGS(excl. depr.) − other operating expenses = 5,000 − 3,900 − 500 = $600M. Some analysts prefer it because D&amp;A aren’t cash — but the book says FCF is far more useful.</li>' +
      '<li><span class="term">Net income</span> (accounting income, earnings, profit) = sales net of all expenses including taxes. Unless stated otherwise, "net income" in the book means net income <em>available to common stockholders</em>.</li>' +
      '<li><span class="term">EPS</span> ("the bottom line") = net income to common ÷ shares = 248 ÷ 60 = <strong>$4.13</strong>.</li>' +
      '</ul>' +
      '<div class="tip"><strong>A matter of opinion:</strong> GAAP leaves managers a lot of discretion in how and when to report transactions, so two firms in identical situations can report different pictures — legal, but it makes comparisons harder. Also: U.S. GAAP is <em>rules-based</em>; most other countries use principles-based <em>IFRS</em>, so U.S. and foreign statements aren’t directly comparable (even "revenue" is defined differently).</div>' +
      '<p><strong>Self-tests:</strong> EBT $2M + interest $0.3M + depreciation $0.2M → EBITDA <strong>$2.5M</strong>. Sales $7M − COGS $4M − other $0.5M → EBITDA <strong>$2.5M</strong>.</p>' },

    { title: '4. The Statement of Cash Flows (2-4) — "Net Income Is Not a Cash Flow"', html:
      '<p>A firm can report large net income yet end the year with the same or less cash, because net income gets used for dividends, inventory, receivables, fixed assets, debt repayment, buybacks, and more. The statement separates activity into three categories:</p>' +
      '<div class="tablewrap"><table><tr><th>Section</th><th>MicroDrive 2023 (millions)</th><th>Rules</th></tr>' +
      '<tr><td><strong>Operating activities</strong></td><td>Net income, + depreciation, ± working-capital changes → <strong>+$163</strong></td><td>Add back non-cash charges. An <em>increase</em> in a non-cash current asset (inventory, receivables) <em>uses</em> cash; a <em>decrease</em> provides cash. An <em>increase</em> in a current liability (payables, accruals) <em>provides</em> cash; a decrease uses cash.</td></tr>' +
      '<tr><td><strong>Investing activities</strong></td><td>Bought fixed assets (420); sold short-term investments +30 → <strong>−$390</strong></td><td>Fixed assets and short-term financial investments.</td></tr>' +
      '<tr><td><strong>Financing activities</strong></td><td>Notes payable +122, new bonds +170, dividends (67) → <strong>+$225</strong></td><td>Issuing debt or stock provides cash; dividends, buybacks, and principal repayments use cash.</td></tr>' +
      '<tr><td><strong>Net change in cash</strong></td><td>163 − 390 + 225 = <strong>−$2</strong></td><td>Reconciles beginning to ending cash.</td></tr></table></div>' +
      '<p><strong>Memory devices from the book:</strong> if something you <em>own</em> goes up (new laptop) your cash went down; if something you own goes down (sold a car) cash goes up. If something you <em>owe</em> goes up (student loan) cash goes up; pay it off and cash goes down.</p>' +
      '<p><strong>Other non-cash wrinkles:</strong> reported tax expense can differ from taxes actually paid (companies report one pre-tax figure to the public and another to the IRS — Apple paid ~$5B less than reported in 2021; Kraft Heinz ~$1B more). Taxes on unrepatriated foreign profits appear as <span class="term">deferred taxes</span>.</p>' +
      '<div class="tip"><strong>The book’s most important single number:</strong> <span class="term">cash flow from operations</span> (operating cash flow). Profits can be "doctored" (slow depreciation, unrecognized bad debts), but it is very hard to doctor profits <em>and</em> the working-capital accounts at the same time. Companies often report positive net income right up to bankruptcy while operating cash flow deteriorated much earlier. <strong>If you are pressed for time, look first at the trend in cash provided by operations.</strong></div>' +
      '<p><strong>MicroDrive’s verdict:</strong> $5B of sales but only $163M from operations — not nearly enough to cover $420M of fixed-asset purchases and $67M of dividends. It covered the gap by borrowing heavily and liquidating short-term investments. That cannot continue year after year.</p>' +
      '<p><strong>Self-test:</strong> inventories fell from $2.0M to $1.5M → cash from operations <strong>increases $500,000</strong>.</p>' },

    { title: '5. Statement of Stockholders’ Equity (2-5) — Retained Earnings Is Not Cash', html:
      '<p>Shows beginning equity, changes during the year, and ending equity. MicroDrive earned $248M and paid $60M in common dividends, so it <strong>retained (plowed back) $188M</strong>: retained earnings rose from $1,552M to $1,740M.</p>' +
      '<p>The book stresses this twice: the $1,740M retained earnings balance is the <em>sum of all annual additions since inception</em> and represents <strong>assets purchased over time</strong> with reinvested profits. It is a <strong>claim on assets, not a pile of money</strong>, and is not "available" to pay dividends or anything else.</p>' +
      '<p><strong>Self-test:</strong> prior retained earnings $3M + net income $2.5M − dividends $1M = <strong>$4.5M</strong>.</p>' },

    { title: '6. Net Cash Flow (2-6)', html:
      '<div class="formula">Net cash flow = Net income − Non-cash revenues + Non-cash expenses&nbsp;&nbsp;(Eq. 2-4)<br>≈ Net income + Depreciation and amortization&nbsp;&nbsp;(Eq. 2-5)</div>' +
      '<p>MicroDrive: 248 + 200 = <strong>$448M</strong>. Depreciation and amortization are usually the largest non-cash items and other items roughly net to zero. The book notes this pen-and-paper measure was once a common performance metric but is now less useful than the cash-flow measures that follow — it is included so you recognize it elsewhere.</p>' +
      '<p><strong>Self-test:</strong> net income $5M, depreciation $1M → net cash flow <strong>$6M</strong>.</p>' },

    { title: '7. Free Cash Flow (2-7) — The Five Steps with MicroDrive', html:
      '<p><span class="term">Free cash flow</span> can be defined two ways that must agree: by <em>use</em> — cash available for distribution to <strong>all investors</strong> after all investments needed to sustain operations; and by <em>source</em> — after-tax operating profit minus the new expenditures needed to sustain the business. <strong>The way managers make a company more valuable is to increase FCF now and in the future.</strong></p>' +
      '<p><strong>Step 1 — NOPAT (2-7a).</strong> Two firms with identical operations but different debt report different net incomes (more interest → lower NI), so net income can misstate operating performance. <span class="term">NOPAT</span> is the profit the firm would earn with no debt and no financial assets:</p>' +
      '<div class="formula">NOPAT = EBIT × (1 − Tax rate)&nbsp;&nbsp;(Eq. 2-6)&nbsp;&nbsp;→ MicroDrive 2023: 400 × 0.75 = $300M (2022: 440 × 0.75 = $330M)</div>' +
      '<p><strong>Step 2 — Net operating working capital (2-7b).</strong> <span class="term">Operating current assets</span> are the short-term assets normally used in operations: operating cash (to "grease the wheels" and avoid overdrafts), receivables, inventory. Short-term investments are <span class="term">nonoperating assets</span> — a treasurer’s investment decision, not a consequence of operations. <strong>Rule of thumb: if an asset pays interest, it is not an operating asset.</strong> <span class="term">Operating current liabilities</span> arise in the normal course of business — accounts payable and accruals. Notes payable is a <em>financing choice</em> (the firm could have issued bonds or stock instead). <strong>Rule of thumb: if a liability charges interest, it is not an operating liability.</strong> Ask: is the item a natural consequence of operations, or a discretionary financing/investment choice?</p>' +
      '<div class="formula">NOWC = Operating current assets − Operating current liabilities&nbsp;&nbsp;(Eq. 2-7)<br>2023: (100 + 500 + 1,000) − (200 + 400) = $1,000M&nbsp;&nbsp;·&nbsp;&nbsp;2022: (102 + 384 + 774) − (180 + 370) = $710M</div>' +
      '<p>Each dollar of operating current liabilities is a dollar the firm does <em>not</em> have to raise from investors — so NOWC is the working capital acquired with investor-supplied funds. Do not confuse it with accounting’s <span class="term">net working capital</span> (all current assets − all current liabilities), which includes short-term investments and notes payable.</p>' +
      '<p><strong>Step 3 — Total net operating capital (2-7c).</strong></p>' +
      '<div class="formula">Total net operating capital = NOWC + Operating long-term assets&nbsp;&nbsp;(Eq. 2-8)<br>2023: 1,000 + 2,000 = $3,000M&nbsp;&nbsp;·&nbsp;&nbsp;2022: 710 + 1,780 = $2,490M</div>' +
      '<p>The same number can be built from the <em>sources</em> side: <span class="term">total investor-supplied capital</span> = notes payable + long-term bonds + preferred stock + common equity = 150 + 520 + 100 + 2,240 = $3,010M (Eq. 2-9); subtract the $10M of short-term investments not used in operations → <span class="term">investor-supplied operating capital</span> = $3,000M (Eq. 2-10) — identical. The book prefers the operating-side calculation because it works for a division or a factory, not just the whole company. "Operating capital" or just "capital" means total net operating capital.</p>' +
      '<p><strong>Step 4 — Net investment in operating capital (2-7d).</strong> 3,000 − 2,490 = <strong>$510M</strong>. Most of it went into NOWC, which grew 41% (290 ÷ 710) while sales grew only 4.2% (5,000 vs. 4,800). Warning bells: is MicroDrive gearing up for growth, or are inventories not moving and receivables not being collected? (Chapter 3’s ratios answer that.)</p>' +
      '<p><strong>Step 5 — Free cash flow (2-7e).</strong></p>' +
      '<div class="formula">FCF = NOPAT − Net investment in total operating capital&nbsp;&nbsp;(Eq. 2-11)<br>2023: 300 − 510 = −$210M</div>' +
      '<p>The financial press sometimes uses Eq. 2-12: FCF = [EBIT(1 − T) + Depreciation] − Gross investment in fixed assets − Investment in NOWC = (300 + 200) − 420 − (1,000 − 710) = −$210M. Same answer — the depreciation terms cancel — but Eq. 2-11 is simpler and statements usually report <em>net</em> rather than gross fixed assets.</p>' +
      '<p><strong>The uses of FCF (2-7f) — five, and they must total the FCF:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Use</th><th>MicroDrive 2023</th></tr>' +
      '<tr><td>1. After-tax interest to debtholders = Interest × (1 − T)</td><td>60 × 0.75 = $45</td></tr>' +
      '<tr><td>2. Net debt repayment = beginning debt − ending debt (issuing debt is a "negative use")</td><td>(28 + 350) − (150 + 520) = −$292</td></tr>' +
      '<tr><td>3. Dividends (preferred + common)</td><td>7 + 60 = $67</td></tr>' +
      '<tr><td>4. Net stock repurchases (issuing stock is a negative use)</td><td>$0</td></tr>' +
      '<tr><td>5. Net purchases of short-term investments = ending − beginning (selling is a negative use)</td><td>10 − 40 = −$30</td></tr>' +
      '<tr><td><strong>Total uses</strong></td><td><strong>45 − 292 + 67 + 0 − 30 = −$210 ✓</strong></td></tr></table></div>' +
      '<p>FCF is never "used" to buy operating assets — those are already subtracted in the FCF calculation. Warning: firms with high FCF sometimes waste it on value-destroying acquisitions — an <span class="term">agency cost</span> (managers acting as agents not always in shareholders’ interest).</p>' +
      '<p><strong>FCF and value (2-7g):</strong> a company’s fundamental value is the present value of expected future FCFs discounted at the WACC.</p>' +
      '<div class="tip"><strong>Self-tests worked:</strong> Sales $10M, COGS $5M, depreciation $1.4M, other $2M → EBIT $1.6M → NOPAT = 1.6 × 0.75 = <strong>$1.2M</strong> (interest is ignored). Operating current assets = cash 0.5 + AR 1.2 + inventory 1.0 = <strong>$2.7M</strong> (exclude the $2.5M of short-term investments). Operating current liabilities = AP 1.0 + accruals 0.5 = <strong>$1.5M</strong> (exclude notes payable, short-term debt, bonds). NOWC = 2.7 − 1.5 = <strong>$1.2M</strong>; total net operating capital = 1.2 + 7.8 + 1.0 = <strong>$10M</strong>. FCF = 1.2 − (10 − 9.3) = <strong>$0.5M</strong>.</div>' },

    { title: '8. Performance Evaluation (2-8): ROIC, MVA, EVA', html:
      '<p><strong>Is negative FCF bad?</strong> "Not necessarily; it depends on why." It <em>is</em> bad if NOPAT is negative (operating problems). But high-growth firms often have positive NOPAT and negative FCF because they’re investing to support growth — Vital Farms (pasture-raised eggs) grew sales 52% in 2020, nearly quadrupled NOPAT, and still had negative FCF. Growth adds value only if the return on the new capital beats its cost.</p>' +
      '<div class="formula">ROIC = NOPAT ÷ Operating capital&nbsp;&nbsp;(Eq. 2-13)&nbsp;&nbsp;→ MicroDrive: 300 ÷ 3,000 = 10%<br>Test: growth adds value if ROIC &gt; WACC</div>' +
      '<p>MicroDrive’s WACC is 11.5%. Its ROIC fell from 13.25% (2022, above WACC) to 10% (2023, below WACC and below the 13.19% industry average) — insufficient return, and the trend is the wrong direction. Two ratios diagnose <em>why</em>:</p>' +
      '<div class="formula">Operating profitability (OP) = NOPAT ÷ Sales&nbsp;&nbsp;(Eq. 2-14)&nbsp;&nbsp;→ 300 ÷ 5,000 = 6.0% (was 6.88%; industry 6.75%)<br>Capital requirement (CR) = Operating capital ÷ Sales&nbsp;&nbsp;(Eq. 2-15)&nbsp;&nbsp;→ 3,000 ÷ 5,000 = 60% (was 51.88%; industry 51.19%)</div>' +
      '<p>Profitability slipped a little; capital utilization got <em>much</em> worse — MicroDrive ties up far more capital per dollar of sales than its industry. If a firm keeps a high ROIC, its FCF turns large and positive once growth slows.</p>' +
      '<p><span class="term">Market Value Added (MVA)</span> brings in the stock price — the thing management should maximize:</p>' +
      '<div class="formula">MVA = Market value of stock − Equity capital supplied = (Shares × Price) − Total common equity&nbsp;&nbsp;(Eq. 2-16)<br>MicroDrive: 60M × $31 − 2,240 = 1,860 − 2,240 = −$380M</div>' +
      '<p>Coca-Cola (early 2022): market cap $261B vs. $23B of equity invested → MVA $238B — management doing a good job. MicroDrive went from positive MVA in 2022 to <strong>negative</strong>: its market value is now less than the cumulative equity shareholders put in. Alternative form (Eq. 2-17): MVA = total market value (equity + debt + preferred) − total investor-supplied capital; analysts usually use book debt as the estimate of market debt.</p>' +
      '<p><span class="term">Economic Value Added (EVA)</span> measures managerial effectiveness in <em>one year</em>: true economic profit after charging for <strong>all</strong> capital, including the opportunity cost of equity (which accounting profit never charges):</p>' +
      '<div class="formula">EVA = NOPAT − (Operating capital × WACC)&nbsp;&nbsp;(Eq. 2-18)&nbsp;&nbsp;= Operating capital × (ROIC − WACC)&nbsp;&nbsp;(Eq. 2-19)<br>MicroDrive: 300 − 3,000 × 0.115 = 300 − 345 = −$45M</div>' +
      '<p>Depreciation is <em>not</em> added back in EVA — worn-out assets must be replaced, so it is a real cost. EVA can be computed for divisions and is widely used in compensation plans.</p>' +
      '<p><strong>MVA vs. EVA (2-8d):</strong> related but not directly — a history of negative EVAs usually means negative MVA, but the stock price depends on <em>expected future</em> performance, so a firm with past negative EVAs can have positive MVA if investors expect a turnaround. For incentive pay, EVA is preferred because (1) it measures the current year, not the company’s whole life, and (2) it can be applied to individual divisions.</p>' +
      '<div class="tip"><strong>Self-tests:</strong> sales $200M, NOPAT $12M, operating capital $100M → OP 6%, CR 50%, ROIC 12%. Capital $100M, ROIC 14%, WACC 10% → EVA = 100 × (0.14 − 0.10) = <strong>$4M</strong>.</div>' },

    { title: '9. Corporate Income Taxes (2-9)', html:
      '<p>Value depends on <em>after-tax</em> cash flows. The 2017 <span class="term">Tax Cuts and Jobs Act (TCJA)</span> shapes the current code.</p>' +
      '<ul>' +
      '<li><strong>Flat 21% federal rate</strong> (2-9a): $1B or $10B of taxable income both pay 21%. Applies to operating income (including gains on selling used equipment) and to investment income. Self-test: $85,000 taxable income → 21% = <strong>$17,850</strong>.</li>' +
      '<li><strong>Interest income</strong> (bank deposits, Treasuries, commercial paper): taxed at 21%.</li>' +
      '<li><strong>Capital gains on securities:</strong> short-term (&lt; 1 year) or long-term, both taxed at 21% for corporations. A T-bill bought at $980 maturing at $1,000 → $20 gain → tax $4.20. Example: 100 shares bought at $15, sold at $40 after 2 years → $2,500 long-term gain.</li>' +
      '<li><strong>Dividends received</strong> — <span class="term">triple taxation</span>: Company A’s income is taxed; A pays a dividend to Company B, which is taxed again in B’s income; B pays a dividend to individuals, taxed a third time. Mitigation: a corporation <strong>excludes 50%</strong> of dividends received. Book example: Company B invests $100M in A’s 4% preferred → $4M dividends; tax = 4 × (1 − 0.5) × 0.25 = $0.5M → keeps $3.5M (effective rate 12.5%). The alternative 4.6% bond pays $4.6M but is fully taxed: 4.6 × 0.75 = $3.45M. <strong>The lower-yielding preferred wins after tax.</strong></li>' +
      '</ul>' +
      '<p><strong>Special expense rules (2-9c):</strong></p>' +
      '<ul>' +
      '<li><span class="term">Interest expense limitation:</span> deductible up to <strong>30% of EBIT</strong> per year; excess carries forward indefinitely (subject to the same limit each year). EBIT $10B, interest $4B → deduct $3B, carry $1B forward.</li>' +
      '<li><span class="term">NOL carryforward:</span> prior operating losses offset up to <strong>80% of current taxable income</strong>; the remainder carries forward indefinitely — designed not to penalize firms with fluctuating income. <strong>Apex example:</strong> $160M of cumulative losses; 2022 pre-tax profit $120M → offset 80% = $96M → taxable $24M → tax (25%) $6M; $64M of losses remain and offset $64M of 2023’s $140M.</li>' +
      '<li><strong>Interest vs. dividends paid:</strong> interest is deductible, so $1 of pre-tax income pays $1 of interest. Dividends are not deductible: at a 24.8% combined rate a firm needs 1 ÷ (1 − 0.248) = <strong>$1.33 of pre-tax income to pay $1 of dividends</strong>. This is the tax incentive to finance with debt rather than stock.</li>' +
      '</ul>' +
      '<p><strong>Miscellaneous features (2-9d):</strong></p>' +
      '<ul>' +
      '<li><strong>Overseas income:</strong> pre-2018, U.S. tax was deferred as long as foreign earnings stayed abroad (Google, Coca-Cola, Microsoft deferred billions). The TCJA imposed a one-time tax on accumulated deferred foreign earnings — <strong>15.5%</strong> on amounts held in cash, <strong>8%</strong> on the rest — and thereafter new foreign earnings are not taxed by the U.S. Downside: stronger incentive to locate production in low-tax countries (Ireland 12.5%, Bulgaria 10%, Hungary 9%).</li>' +
      '<li><span class="term">Improper accumulation:</span> penalty rates on earnings retained just so stockholders avoid personal dividend taxes; the first <strong>$250,000</strong> of retained earnings is exempt, and more is fine if needed for legitimate business reasons (paying debt, funding growth, cushioning losses).</li>' +
      '<li><strong>Consolidated returns:</strong> a company owning <strong>80% or more</strong> of another can file one return so one unit’s losses offset another’s profits — makes risky new ventures more feasible ("you can go broke losing $1 to save 21 cents in taxes").</li>' +
      '<li><span class="term">Pass-through entities</span> (proprietorships, partnerships, LLCs, S corporations): no tax at the business level; income is taxed on the owners’ personal returns whether or not it is distributed. An <strong>S corporation</strong> keeps limited liability but is taxed like a partnership.</li>' +
      '<li>The TCJA <strong>eliminated the corporate AMT</strong> (a parallel calculation meant to keep companies from paying zero tax).</li>' +
      '</ul>' },

    { title: '10. Personal Taxes (2-10 and Web Extension 2A)', html:
      '<p><span class="term">Ordinary income</span> = wages, proprietorship/partnership profits, and investment income other than qualified dividends and long-term gains. The <span class="term">marginal tax rate</span> is the rate on an additional dollar; the <span class="term">average tax rate</span> = taxes paid ÷ taxable income. For corporations both are 21% (flat); for individuals the average rate rises with income — a <span class="term">progressive</span> system implemented with <span class="term">tax brackets</span> (seven for 2022: 10% up to $10,275 … 37% above $539,900).</p>' +
      '<p><strong>Bracket math:</strong> taxable income $35,000 → 10% × 10,275 = $1,027.50 plus 12% × (35,000 − 10,275 = 24,725) = $2,967 → total <strong>$3,994.50</strong>.</p>' +
      '<p><strong>Jill Smith example (2A-5):</strong> $100,000 salary − $12,950 standard deduction = $87,050 taxable. Tax on the base of her bracket ($41,775) is $4,807.50; the $45,275 above it is taxed at 22% = $9,960.50 → total <strong>$14,768</strong>. Average rate = 14,768 ÷ 87,050 = <strong>17.0%</strong>, below her 22% marginal rate — that is what progressive means. A $1,000 raise stays in the 22% bracket: $220 income tax + $76.50 payroll tax → net raise $703.50.</p>' +
      '<p><strong>From Form 1040 (2A-1 to 2A-3):</strong> total income → adjustments (Schedule 1: student loan interest, HSA, educator expenses…) → <span class="term">adjusted gross income (AGI)</span> → minus the <span class="term">standard deduction</span> ($12,950 single / $25,900 joint for 2022) <em>or</em> <span class="term">itemized deductions</span> (mortgage interest, charity, medical, property taxes) → <strong>taxable income</strong>. Filers under $100,000 use the IRS Tax Table; over $100,000 the Tax Computation Worksheet. The TCJA removed the "marriage penalty": a couple with twice a single filer’s income pays twice the tax.</p>' +
      '<p><strong>Tax credits</strong> reduce the tax bill directly: earned income credit, child tax credit, child and dependent care credit, retirement savings credit, residential energy credit.</p>' +
      '<p><strong>Payroll taxes (2A-7):</strong> Social Security 6.2% (employer matches; 12.4% total; self-employed pay the full 12.4%; 2022 wage cap $147,000) + Medicare 1.45% (matched; 2.9% total; no cap; +0.9% for high earners) = <strong>7.65%</strong> withheld from the employee. Jill: $100,000 × 7.65% = $7,650; after income and payroll taxes she keeps $100,000 − 14,768 − 7,650 = <strong>$77,582</strong>.</p>' +
      '<p><strong>Investment income (2-10a/b, 2A-8):</strong></p>' +
      '<ul>' +
      '<li><strong>Municipal bond</strong> interest is exempt from federal tax, so a lower-yielding muni can match a corporate bond after tax. At a 37% marginal rate, a 5.5% muni equals a corporate bond paying 8.73%: 8.73% × (1 − 0.37) = 5.5%.</li>' +
      '<li><strong>Capital gains</strong> on capital assets (stocks, bonds, real estate) are taxed only when sold. Held &lt; 1 year → short-term, taxed as ordinary income. Held &gt; 1 year → long-term, taxed at lower rates. Losses offset gains only.</li>' +
      '<li><strong>Qualified dividends</strong> (U.S. or U.S.-listed company; stock held several months around the payment) are taxed like long-term gains — the book calls the combination <strong>"LT-Dividends-Gains"</strong>. Rates are progressive: 0% if taxable income ≤ $41,675 (single) / $83,350 (joint); 20% if ≥ $459,751 / $496,600; 15% for most in between. Ordinary income fills the brackets first, then the dividends/gains are taxed starting where ordinary income left off — e.g., a couple with $396,600 ordinary and $150,000 of LT-Dividends-Gains pays 15% on the $100,000 that fits under the $496,600 threshold and 20% on the remaining $50,000 → $25,000.</li>' +
      '<li><span class="term">Net Investment Income Tax (NIIT):</span> an extra 3.8% for high earners on the <em>smaller</em> of net investment income or the amount by which modified AGI exceeds $200,000 (single) / $250,000 (joint). MAGI $300,000 with $80,000 of investment income → 3.8% × 80,000 = $3,040; with $150,000 of investment income → 3.8% × 100,000 = $3,800.</li>' +
      '<li><strong>Pass-through income (2A-8c):</strong> owners may deduct 20% of qualified business income. A proprietor in the 37% bracket earning $100,000 is taxed on $80,000 → $29,600 → effective rate 0.37 × (1 − 0.20) = <strong>29.6%</strong>, keeping 70.4%. Compare a C-corp: 21% corporate tax, then 20% on the 79% paid as dividends → 21% + 15.8% = <strong>36.8%</strong> total, keeping 63.2%. The pass-through has a 7.2-point advantage.</li>' +
      '</ul>' +
      '<p><strong>Other topics:</strong> the personal <span class="term">AMT</span> requires computing tax two ways (regular, and with certain deductions and muni income added back) and paying the higher. <strong>Gift/estate/generation-skipping taxes</strong> are paid by the giver or estate: $15,000 annual gift exclusion per recipient (2021; $30,000 for a couple), an $11.58M lifetime exclusion, 40% top rate; estates below $11.58M are exempt; GSTT applies at 40% above $11.7M.</p>' },

    { title: '11. Self-Test Problem ST-1 Worked (Cole Furnaces)', html:
      '<p>EBIT $4M, depreciation $1M, interest $1M, tax rate 25%, operating current assets $14M, operating current liabilities $4M, net plant &amp; equipment $15M, after-tax cost of capital 10%, prior-year operating capital $24M.</p>' +
      '<div class="tablewrap"><table><tr><th>Question</th><th>Calculation</th><th>Answer</th></tr>' +
      '<tr><td>a. Net income</td><td>(4 − 1) × (1 − 0.25)</td><td>$2.25M</td></tr>' +
      '<tr><td>b. Net cash flow</td><td>2.25 + 1</td><td>$3.25M</td></tr>' +
      '<tr><td>c. NOPAT</td><td>4 × 0.75</td><td>$3.0M</td></tr>' +
      '<tr><td>d. NOWC / total net operating capital</td><td>14 − 4 = 10; 10 + 15</td><td>$10M / $25M</td></tr>' +
      '<tr><td>e. FCF</td><td>3 − (25 − 24)</td><td>$2.0M</td></tr>' +
      '<tr><td>f. ROIC</td><td>3 ÷ 25</td><td>12%</td></tr>' +
      '<tr><td>g. EVA</td><td>3 − 0.10 × 25 (or 25 × (12% − 10%))</td><td>$0.5M</td></tr></table></div>' +
      '<p><strong>Problem-solving hint from the book (Problem 2-3):</strong> to back out interest from net income, divide NI by (1 − T) to get pre-tax income, then the gap between EBIT and pre-tax income is interest. Holly’s Art Galleries: NI $7.9M ÷ 0.79 = $10.0M pre-tax; EBIT $13M → interest = <strong>$3.0M</strong>.</p>' },

    { title: '12. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>Retained earnings ≠ cash.</strong> It is a cumulative claim already spent on assets.</li>' +
      '<li><strong>Net income is not a cash flow.</strong> Add back depreciation; adjust for working-capital changes.</li>' +
      '<li><strong>FIFO in inflation → higher inventory, lower COGS, higher profit</strong> than LIFO.</li>' +
      '<li><strong>Interest-paying assets are not operating assets; interest-charging liabilities are not operating liabilities.</strong></li>' +
      '<li><strong>NOWC ≠ net working capital.</strong> NOWC excludes short-term investments and notes payable.</li>' +
      '<li><strong>NOPAT ignores interest.</strong> Use EBIT × (1 − T), never net income.</li>' +
      '<li><strong>FCF subtracts the change in operating capital.</strong> The five uses must sum to FCF; issuing debt/stock or selling investments are negative uses.</li>' +
      '<li><strong>Negative FCF is fine if ROIC &gt; WACC</strong> (Vital Farms); bad if NOPAT is negative (operating trouble) or ROIC &lt; WACC (MicroDrive).</li>' +
      '<li><strong>EVA = capital × (ROIC − WACC)</strong>; MVA uses the stock price and covers the firm’s whole life.</li>' +
      '<li><strong>Corporate: 21% flat; 50% dividend exclusion; interest deductible up to 30% of EBIT; NOLs offset up to 80% of income.</strong></li>' +
      '<li><strong>Personal: marginal ≠ average; short-term gains = ordinary income; qualified dividends and long-term gains at 0/15/20%; muni interest federally exempt.</strong></li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Annual report', def: 'Yearly report to stockholders with written discussion (why things happened) and four financial statements (what happened).' },
    { term: 'Accrual accounting', def: 'Recording transactions when earned or incurred rather than when cash moves; an accrual is the value of a transaction not yet fully paid or received.' },
    { term: 'Book value vs. market value', def: 'Book values are amounts recorded when assets were bought or liabilities issued; market values are current values set in the marketplace — often very different.' },
    { term: 'Liquidity (asset ordering)', def: 'The time it takes to convert an asset to cash at fair value; balance-sheet assets are listed from most to least liquid.' },
    { term: 'Residual claim', def: 'Stockholders are paid only if value remains after all other claimants; their claim never has to be "paid off."' },
    { term: 'Cash equivalents', def: 'Marketable securities maturing very soon that can be converted to cash at close to book value; grouped with cash.' },
    { term: 'FIFO vs. LIFO', def: 'First-in-first-out assumes the oldest inventory is used first; last-in-first-out assumes the newest. In inflation, FIFO reports higher inventory, lower COGS, and higher profit.' },
    { term: 'Depreciation expense', def: 'The annual portion of a long-term asset’s cost charged as expense; not cash spent this year but recognition of a prior expenditure.' },
    { term: 'Accruals', def: 'Accrued liabilities — wages, interest, utilities, rent, taxes owed between payment dates — reported as a current liability.' },
    { term: 'Preferred stock', def: 'A hybrid of debt and common stock: fixed dividend, ranks below debt but above common in bankruptcy, no share in earnings growth.' },
    { term: 'Common equity (net worth)', def: 'Common stock account plus retained earnings; equals assets net of liabilities and preferred stock.' },
    { term: 'EBITDA', def: 'EBIT + depreciation and amortization; equivalently sales − COGS (excl. depr.) − other operating expenses. MicroDrive: $600M.' },
    { term: 'Earnings per share (EPS)', def: 'Net income available to common ÷ shares outstanding — the "bottom line." MicroDrive: $248M ÷ 60M = $4.13.' },
    { term: 'Goodwill / intangibles', def: 'Goodwill is the excess paid over book value in an acquisition; with patents, copyrights, and trademarks it is amortized rather than depreciated.' },
    { term: 'GAAP vs. IFRS', def: 'U.S. GAAP is rules-based; IFRS (most other countries) is principles-based. Statements under the two are not directly comparable.' },
    { term: 'Operating cash flow (cash flow from operations)', def: 'The operating-section subtotal of the cash-flow statement — the book’s single most important number because it is hard to doctor.' },
    { term: 'Working-capital cash rules', def: 'Increase in a non-cash current asset uses cash; decrease provides it. Increase in a current liability provides cash; decrease uses it.' },
    { term: 'Deferred taxes', def: 'Taxes recognized on the income statement but not yet paid, e.g., on unrepatriated foreign profits.' },
    { term: 'Net cash flow', def: 'Net income − non-cash revenues + non-cash expenses; usually net income + depreciation and amortization. MicroDrive: $448M.' },
    { term: 'Free cash flow (FCF)', def: 'Cash available for distribution to all investors after investments needed to sustain operations; FCF = NOPAT − net investment in total operating capital. MicroDrive 2023: −$210M.' },
    { term: 'NOPAT', def: 'EBIT × (1 − T): profit with no debt and no financial assets. MicroDrive: $300M.' },
    { term: 'Operating current assets', def: 'Operating cash, receivables, and inventory — excludes short-term investments. Rule of thumb: if it pays interest, it is not operating.' },
    { term: 'Operating current liabilities', def: 'Accounts payable and accruals — excludes notes payable. Rule of thumb: if it charges interest, it is not operating.' },
    { term: 'Net operating working capital (NOWC)', def: 'Operating current assets − operating current liabilities; working capital funded by investors. MicroDrive 2023: $1,000M.' },
    { term: 'Net working capital (accounting)', def: 'All current assets − all current liabilities; includes short-term investments and notes payable, so it differs from NOWC.' },
    { term: 'Total net operating capital', def: 'NOWC + operating long-term assets (= investor-supplied capital − short-term investments). MicroDrive 2023: $3,000M.' },
    { term: 'Investor-supplied capital', def: 'Notes payable + long-term bonds + preferred stock + common equity. MicroDrive 2023: $3,010M.' },
    { term: 'Net investment in operating capital', def: 'This year’s operating capital minus last year’s. MicroDrive: 3,000 − 2,490 = $510M.' },
    { term: 'Five uses of FCF', def: 'After-tax interest, net debt repayment, dividends, net stock repurchases, net purchases of short-term investments; issuing securities or selling investments count as negative uses.' },
    { term: 'Agency cost', def: 'Value lost when managers (agents) act in their own interest — e.g., wasting high FCF on overpriced acquisitions.' },
    { term: 'Return on invested capital (ROIC)', def: 'NOPAT ÷ operating capital; growth adds value only if ROIC > WACC. MicroDrive: 10% vs. 11.5% WACC.' },
    { term: 'Operating profitability (OP) ratio', def: 'NOPAT ÷ sales. MicroDrive: 6.0%.' },
    { term: 'Capital requirement (CR) ratio', def: 'Operating capital ÷ sales — capital tied up per dollar of sales. MicroDrive: 60%.' },
    { term: 'Market Value Added (MVA)', def: '(Shares × price) − total common equity; cumulative value created since inception. MicroDrive: −$380M; Coca-Cola: +$238B.' },
    { term: 'Economic Value Added (EVA)', def: 'NOPAT − (operating capital × WACC) = capital × (ROIC − WACC); one year’s true economic profit after charging for equity. MicroDrive: −$45M.' },
    { term: 'Weighted average cost of capital (WACC)', def: 'The overall rate of return a company must earn to fairly compensate all its investors.' },
    { term: 'Flat corporate tax rate', def: '21% federal on all taxable income regardless of size (TCJA).' },
    { term: 'Triple taxation of dividends', def: 'Corporate income taxed at the payer, again at a corporate recipient, and again at the individual — mitigated by the 50% dividends-received exclusion.' },
    { term: 'Interest expense limitation', def: 'Deductible interest capped at 30% of EBIT per year; unused amounts carry forward indefinitely.' },
    { term: 'NOL carryforward', def: 'Prior operating losses offset up to 80% of current taxable income; the rest carries forward indefinitely.' },
    { term: 'Pre-tax income needed to pay $1 of dividends', def: '$1 ÷ (1 − T); at 24.8%, $1.33 — because dividends, unlike interest, are not deductible.' },
    { term: 'Improper accumulation', def: 'Penalty on retaining earnings solely to avoid stockholders’ dividend taxes; first $250,000 exempt.' },
    { term: 'Consolidated tax return', def: 'A corporation owning 80%+ of another may file one return so losses in one offset profits in another.' },
    { term: 'Pass-through entity', def: 'Proprietorship, partnership, LLC, or S-corp: no entity-level tax; income taxed on owners’ returns with a 20% QBI deduction.' },
    { term: 'Progressive tax / tax brackets', def: 'Successively higher marginal rates on ranges of income, so the average rate rises with income (10%–37% in 2022).' },
    { term: 'Marginal vs. average tax rate', def: 'Marginal = rate on the next dollar; average = total tax ÷ taxable income. Jill Smith: 22% marginal, 17.0% average.' },
    { term: 'Standard vs. itemized deductions', def: 'Standard: $12,950 single / $25,900 joint (2022). Itemized: mortgage interest, charity, medical, property taxes when they exceed the standard amount.' },
    { term: 'Payroll taxes', def: 'Social Security 6.2% (capped) + Medicare 1.45% (uncapped) = 7.65% withheld, matched by the employer; self-employed pay both halves.' },
    { term: 'Municipal bond taxation', def: 'Interest on most state/local bonds is exempt from federal tax; at 37%, a 5.5% muni equals an 8.73% corporate bond.' },
    { term: 'Capital gain / loss (personal)', def: 'Taxed only when sold; short-term (< 1 yr) is ordinary income; long-term (> 1 yr) taxed at 0/15/20%.' },
    { term: 'Qualified dividends (LT-Dividends-Gains)', def: 'Dividends meeting holding-period rules are taxed like long-term capital gains; ordinary income fills the brackets first.' },
    { term: 'Net Investment Income Tax', def: 'Extra 3.8% on the smaller of net investment income or MAGI above $200,000 single / $250,000 joint.' },
    { term: 'Alternative Minimum Tax (personal)', def: 'Compute tax the regular way and the AMT way (adding back certain deductions and muni interest); pay the higher.' }
  ],
  quiz: [
    { q: 'According to the book, a firm’s intrinsic value is determined by…',
      options: ['its net income', 'the present value of its expected free cash flows discounted at the WACC', 'its retained earnings', 'its EBITDA'],
      answer: 1, explain: 'The chapter’s framing: value = PV of future FCFs at the WACC, which is why everything builds toward FCF.' },
    { q: 'A firm has $8M in total assets, $3M current liabilities, $2M long-term debt, and $1M preferred stock. Reported common equity is…',
      options: ['$2M', '$3M', '$5M', '$8M'],
      answer: 0, explain: 'Net worth = assets − liabilities − preferred = 8 − 3 − 2 − 1 = $2M.' },
    { q: 'During inflation, a FIFO firm compared with an identical LIFO firm reports…',
      options: ['lower inventory and higher profit', 'higher inventory, lower COGS, and higher profit', 'higher COGS and lower profit', 'identical statements'],
      answer: 1, explain: 'FIFO expenses the older, cheaper inventory first (GrindemFirst vs. GrindemLast).' },
    { q: 'EBIT is $400M and depreciation is $200M. EBITDA is…',
      options: ['$200M', '$400M', '$600M', '$800M'],
      answer: 2, explain: 'EBITDA = EBIT + depreciation & amortization = $600M (MicroDrive).' },
    { q: 'Net income available to common is $248M with 60M shares. EPS is…',
      options: ['$4.13', '$2.48', '$6.00', '$0.24'],
      answer: 0, explain: '248 ÷ 60 = $4.13 — the "bottom line."' },
    { q: 'A firm’s inventories fall from $2.0M to $1.5M. The effect on cash provided by operations is…',
      options: ['a $500,000 decrease', 'a $500,000 increase', 'no effect', 'a $2M decrease'],
      answer: 1, explain: 'A decrease in a non-cash current asset provides cash — like selling a car.' },
    { q: 'The book says the single most revealing number when pressed for time is…',
      options: ['net income', 'EPS', 'the trend in cash provided by operating activities', 'total assets'],
      answer: 2, explain: 'Profits can be doctored, but operating cash flow deteriorates well before bankruptcy.' },
    { q: 'Prior retained earnings $3M, net income $2.5M, dividends $1M. Ending retained earnings is…',
      options: ['$4.5M', '$5.5M', '$3.5M', '$1.5M'],
      answer: 0, explain: '3 + 2.5 − 1 = $4.5M; the addition was reinvested in assets, not held as cash.' },
    { q: 'Net income $5M and depreciation $1M (the only non-cash item). Net cash flow is…',
      options: ['$4M', '$5M', '$6M', '$1M'],
      answer: 2, explain: 'Net cash flow ≈ NI + depreciation = $6M.' },
    { q: 'Sales $10M, COGS $5M, depreciation $1.4M, other operating expenses $2M, interest $1M, tax 25%. NOPAT is…',
      options: ['$0.45M', '$1.2M', '$1.6M', '$0.6M'],
      answer: 1, explain: 'EBIT = 10 − 5 − 1.4 − 2 = 1.6; NOPAT = 1.6 × 0.75 = $1.2M. Interest is ignored.' },
    { q: 'Cash $0.5M, short-term investments $2.5M, receivables $1.2M, inventories $1M. Operating current assets are…',
      options: ['$5.2M', '$2.7M', '$4.7M', '$2.2M'],
      answer: 1, explain: '0.5 + 1.2 + 1.0 = $2.7M; short-term investments pay interest and are excluded.' },
    { q: 'Accounts payable $1M, notes payable $1.1M, short-term debt $1.4M, accruals $0.5M, bonds $3M. Operating current liabilities are…',
      options: ['$1.5M', '$4.0M', '$2.6M', '$7.0M'],
      answer: 0, explain: 'Only payables and accruals arise from operations: 1.0 + 0.5 = $1.5M.' },
    { q: 'NOPAT is $1.2M; total net operating capital rose from $9.3M to $10M. FCF is…',
      options: ['$0.5M', '$1.2M', '$0.7M', '−$0.5M'],
      answer: 0, explain: 'FCF = 1.2 − (10 − 9.3) = $0.5M.' },
    { q: 'Operating capital $100M, ROIC 14%, WACC 10%. EVA is…',
      options: ['$14M', '$4M', '$10M', '−$4M'],
      answer: 1, explain: 'EVA = capital × (ROIC − WACC) = 100 × 0.04 = $4M.' },
    { q: 'MicroDrive’s MVA is −$380M. This means…',
      options: ['it lost money this year', 'its market value is less than the cumulative equity shareholders have invested', 'its EVA must be positive', 'it has negative net income'],
      answer: 1, explain: 'MVA = (60M × $31) − $2,240M = −$380M; the market values the firm below what shareholders put in.' },
    { q: 'A corporation has $85,000 of taxable income. Its federal tax is…',
      options: ['$17,850', '$21,250', '$12,750', '$8,500'],
      answer: 0, explain: 'Flat 21%: 0.21 × 85,000 = $17,850.' },
    { q: 'Company B receives $4M of dividends, has a 25% tax rate and a 50% exclusion. Tax on the dividends is…',
      options: ['$1.0M', '$0.5M', '$2.0M', '$0'],
      answer: 1, explain: '4 × (1 − 0.5) × 0.25 = $0.5M; effective rate 12.5%, so B keeps $3.5M.' },
    { q: 'Apex has $160M of prior losses and $120M of pre-tax income. Taxable income after the carryforward is…',
      options: ['$0', '$24M', '$96M', '$120M'],
      answer: 1, explain: 'Offset limited to 80% × 120 = $96M → taxable $24M; $64M of losses remain.' },
    { q: 'At a 24.8% combined tax rate, the pre-tax income needed to pay $1 of dividends is…',
      options: ['$1.00', '$1.25', '$1.33', '$0.75'],
      answer: 2, explain: '1 ÷ (1 − 0.248) = $1.33, because dividends are not deductible — the tax bias toward debt.' },
    { q: 'Jill Smith has $87,050 of taxable income and owes $14,768. Her average tax rate is about ___ and her marginal rate is ___.',
      options: ['22%; 22%', '17%; 22%', '22%; 17%', '12%; 22%'],
      answer: 1, explain: 'Average = 14,768 ÷ 87,050 ≈ 17%; the next dollar is taxed at her 22% bracket rate.' }
  ]
});
