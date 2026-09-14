window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'fin-ch2', subject: 'fin', num: 2,
  title: 'Financial Statements, Cash Flows, and Taxes',
  overview: 'What the four financial statements say, how to turn accounting numbers into the cash-flow measures finance actually cares about (NOPAT, operating capital, free cash flow, ROIC, EVA, MVA), and the corporate and personal tax rules that shape financing decisions. The running example is Computron, which expanded in 2023 — and the numbers show why investors were unhappy.',
  sections: [
    { title: '0. The Map of This Chapter', html:
      '<p>Accounting statements are written for accountants and tax authorities. Finance asks a different question: <strong>how much cash does the business generate for the investors who fund it, and does that cash earn enough to justify their capital?</strong> The chapter builds that answer in layers:</p>' +
      '<ol>' +
      '<li>The four statements in the <span class="term">annual report</span> — what each one reports.</li>' +
      '<li>Reorganizing the balance sheet into <strong>operating</strong> items (used to run the business) vs. <strong>financing</strong> items (how it’s funded).</li>' +
      '<li>From that: <strong>NOPAT → operating capital → free cash flow (FCF)</strong>. FCF drives firm value.</li>' +
      '<li>Performance measures built on those pieces: <strong>ROIC, EVA, MVA</strong>.</li>' +
      '<li>Corporate and personal <strong>taxes</strong> — especially why the tax code favors debt over equity.</li>' +
      '</ol>' +
      '<div class="tip"><strong>One-line summary:</strong> a company creates value when it earns a return on invested capital (ROIC) greater than its cost of capital (WACC). Everything in this chapter is machinery for measuring that.</div>' },

    { title: '1. The Four Financial Statements', html:
      '<div class="tablewrap"><table><tr><th>Statement</th><th>What it shows</th><th>Timing</th><th>Key detail</th></tr>' +
      '<tr><td><span class="term">Balance sheet</span></td><td>Assets on the left; liabilities and equity (the <em>claims</em> against those assets) on the right</td><td>Snapshot at a point in time</td><td><span class="term">Retained earnings</span> is a claim, NOT a pile of cash — a firm with $20M of retained earnings cannot necessarily pay a $20M dividend; the money was reinvested in buildings, equipment, inventory.</td></tr>' +
      '<tr><td><span class="term">Income statement</span></td><td>Revenues minus expenses (including taxes) over a period; net sales at top, EPS at the bottom</td><td>Over a period</td><td>Bottom line: net income available to common stockholders, plus earnings and dividends per share.</td></tr>' +
      '<tr><td><span class="term">Statement of stockholders’ equity</span></td><td>Beginning equity, stock issued/repurchased, net income retained, ending equity</td><td>Over a period</td><td>Shows how much of earnings were retained vs. paid out as dividends.</td></tr>' +
      '<tr><td><span class="term">Statement of cash flows</span></td><td>Impact of operating, investing, and financing activities on cash</td><td>Over a period</td><td>Reconciles beginning cash to ending cash.</td></tr>' +
      '</table></div>' +
      '<p><strong>Equity vocabulary:</strong> <span class="term">common stockholders’ equity (net worth)</span> = capital stock + paid-in capital + retained earnings. <span class="term">Paid-in capital</span> is what stockholders paid above par value when new shares were issued.</p>' +
      '<p><strong>Non-cash charges:</strong> <span class="term">depreciation</span> is a non-cash charge against <em>tangible</em> assets (buildings, machines); <span class="term">amortization</span> is the same idea for <em>intangible</em> assets (goodwill). <span class="term">EBITDA</span> = earnings before interest, taxes, depreciation, and amortization.</p>' +
      '<p><span class="term">Net cash flow</span> ≠ <span class="term">accounting profit</span> (net income) because some revenues/expenses on the income statement weren’t received/paid in cash. Since depreciation is usually the biggest non-cash item: <strong>Net cash flow ≈ Net income + Depreciation (and amortization)</strong>.</p>' },

    { title: '2. The Computron Example: What the Statements Show', html:
      '<p>Computron expanded operations in 2023. Its statements (millions of dollars):</p>' +
      '<div class="tablewrap"><table><tr><th>Income statement</th><th>2022</th><th>2023</th></tr>' +
      '<tr><td>Sales</td><td>$5,500</td><td>$6,000</td></tr>' +
      '<tr><td>COGS (except depreciation)</td><td>4,300</td><td>4,800</td></tr>' +
      '<tr><td>Depreciation</td><td>290</td><td>320</td></tr>' +
      '<tr><td>Other expenses</td><td>350</td><td>420</td></tr>' +
      '<tr><td><strong>EBIT</strong></td><td><strong>$560</strong></td><td><strong>$460</strong></td></tr>' +
      '<tr><td>Interest expense</td><td>68</td><td>108</td></tr>' +
      '<tr><td>Pre-tax earnings</td><td>$492</td><td>$352</td></tr>' +
      '<tr><td>Taxes (25%)</td><td>123</td><td>88</td></tr>' +
      '<tr><td><strong>Net income</strong></td><td><strong>$369</strong></td><td><strong>$264</strong></td></tr></table></div>' +
      '<div class="tablewrap"><table><tr><th>Balance sheet</th><th>2022</th><th>2023</th></tr>' +
      '<tr><td>Cash</td><td>$60</td><td>$50</td></tr>' +
      '<tr><td>Short-term investments</td><td>100</td><td>10</td></tr>' +
      '<tr><td>Accounts receivable</td><td>400</td><td>520</td></tr>' +
      '<tr><td>Inventories</td><td>620</td><td>820</td></tr>' +
      '<tr><td>Net fixed assets</td><td>2,900</td><td>3,500</td></tr>' +
      '<tr><td><strong>Total assets</strong></td><td><strong>$4,080</strong></td><td><strong>$4,900</strong></td></tr>' +
      '<tr><td>Accounts payable</td><td>300</td><td>400</td></tr>' +
      '<tr><td>Notes payable</td><td>50</td><td>250</td></tr>' +
      '<tr><td>Accruals</td><td>200</td><td>240</td></tr>' +
      '<tr><td>Long-term debt</td><td>800</td><td>1,100</td></tr>' +
      '<tr><td>Common stock</td><td>1,000</td><td>1,000</td></tr>' +
      '<tr><td>Retained earnings</td><td>1,730</td><td>1,910</td></tr></table></div>' +
      '<p><strong>Reading the story:</strong> sales grew 9% but net income <em>fell</em> $105M — interest expense jumped 59% because the expansion was financed with debt (notes payable and long-term debt both rose; no stock was issued). Receivables and inventory nearly doubled — the firm is taking longer to collect and has unsold product sitting in warehouses. Cash and short-term investments fell. Stock price dropped from $50 to $30.</p>' },

    { title: '3. The Statement of Cash Flows', html:
      '<p>Three sections; each answers a different question. Computron’s 2023 statement:</p>' +
      '<div class="tablewrap"><table><tr><th>Section</th><th>Items (2023, $M)</th><th>Net</th></tr>' +
      '<tr><td><strong>Operating activities</strong><br><em>Did the core business generate cash?</em></td><td>Net income 264 + depreciation 320 − ΔAR 120 − ΔInventory 200 + ΔAP 100 + ΔAccruals 40</td><td><strong>+$404</strong></td></tr>' +
      '<tr><td><strong>Investing activities</strong><br><em>What did it spend on long-term assets?</em></td><td>Purchases of fixed assets (920) + sale of short-term investments 90</td><td><strong>−$830</strong></td></tr>' +
      '<tr><td><strong>Financing activities</strong><br><em>How did it raise/return money?</em></td><td>ΔNotes payable +200 + ΔLong-term debt +300 − dividends 84</td><td><strong>+$416</strong></td></tr>' +
      '<tr><td><strong>Net change in cash</strong></td><td>404 − 830 + 416</td><td><strong>−$10</strong> (60 → 50)</td></tr></table></div>' +
      '<p><strong>Rules for the operating section:</strong> add back non-cash charges (depreciation); an <em>increase</em> in an operating asset (AR, inventory) <em>uses</em> cash (subtract); an <em>increase</em> in an operating liability (AP, accruals) <em>provides</em> cash (add).</p>' +
      '<p><strong>Conclusion for Computron:</strong> operations were positive but dragged down by the big build-up of working capital; investing was heavily negative from fixed-asset spending; financing was a big increase in borrowing — and even after all that borrowing, cash still fell.</p>' },

    { title: '4. Operating vs. Financing: NOWC and Operating Capital', html:
      '<p>Finance splits the balance sheet into what is needed to <em>run</em> the business and how it is <em>funded</em>:</p>' +
      '<ul>' +
      '<li><span class="term">Operating current assets</span> = current assets needed for operations: <strong>cash, accounts receivable, inventory</strong>. <em>Excludes</em> short-term investments (those are a parking place for excess cash, not operations).</li>' +
      '<li><span class="term">Operating current liabilities</span> = current liabilities that arise naturally from operations: <strong>accounts payable and accruals</strong>. <em>Excludes</em> notes payable and any interest-bearing debt (those are financing).</li>' +
      '</ul>' +
      '<div class="formula">Net operating working capital (NOWC) = Operating current assets − Operating current liabilities<br>Total net operating capital (operating capital) = NOWC + Operating long-term assets (net fixed assets)</div>' +
      '<p><strong>Computron 2023:</strong> NOWC = (50 + 520 + 820) − (400 + 240) = 1,390 − 640 = <strong>$750</strong> (2022: $580). Operating capital = 750 + 3,500 = <strong>$4,250</strong> (2022: $3,480).</p>' +
      '<p>Operating capital is the total capital investors have supplied to run the business — equivalently, interest-bearing debt + preferred stock + common equity − short-term investments. Without it the firm cannot exist.</p>' },

    { title: '5. NOPAT and Free Cash Flow — the Core of the Chapter', html:
      '<div class="formula">NOPAT = EBIT × (1 − Tax rate)</div>' +
      '<p><span class="term">Net operating profit after taxes</span> is the profit the company would earn if it had <strong>no debt and no financial assets</strong>. Because it strips out financing effects (interest), it is a better measure of pure <em>operating</em> performance than net income. Computron 2023: NOPAT = 460 × (1 − 0.25) = <strong>$345</strong> (2022: $420).</p>' +
      '<div class="formula">FCF = NOPAT − Net investment in operating capital<br>&nbsp;&nbsp;&nbsp;&nbsp;= NOPAT − (Operating capital this year − Operating capital last year)</div>' +
      '<p><span class="term">Free cash flow</span> is the cash actually available for distribution to <em>all</em> investors (stockholders and debtholders) after the firm has made the investments in fixed assets and working capital needed to sustain operations. <strong>A company’s value depends on the FCF it can generate</strong> — this is the most important cash-flow measure.</p>' +
      '<p><strong>Computron 2023:</strong> FCF = 345 − (4,250 − 3,480) = 345 − 770 = <strong>−$425</strong>. The expansion consumed far more capital than operations produced.</p>' +
      '<p><strong>The five uses of FCF:</strong> (1) pay interest on debt, (2) repay principal, (3) pay dividends, (4) buy back stock, (5) buy non-operating assets such as marketable securities. When FCF is negative, the firm must do the reverse — Computron borrowed $500M net and sold $90M of short-term investments to cover after-tax interest ($81M) and dividends ($84M).</p>' +
      '<div class="tip"><strong>Is negative FCF always bad?</strong> No. Fast-growing firms often have negative FCF because they’re investing heavily in capital. That’s fine <em>if</em> those investments earn more than the cost of capital (ROIC &gt; WACC). Computron’s problem is that its ROIC (8.1%) is <em>below</em> its 10% WACC — the growth destroyed value.</div>' },

    { title: '6. Performance Measures: ROIC, EVA, MVA', html:
      '<div class="tablewrap"><table><tr><th>Measure</th><th>Formula</th><th>Computron 2023</th><th>Interpretation</th></tr>' +
      '<tr><td><span class="term">Operating profitability (OP)</span></td><td>NOPAT ÷ Sales</td><td>345 ÷ 6,000 = 8.1% (was 12.1%)</td><td>Operating profit per dollar of sales — fell.</td></tr>' +
      '<tr><td><span class="term">Capital requirement (CR)</span></td><td>Operating capital ÷ Sales</td><td>4,250 ÷ 6,000 = 70.8% (was 58.0%)</td><td>Capital needed per dollar of sales — rose (worse utilization).</td></tr>' +
      '<tr><td><span class="term">Return on invested capital (ROIC)</span></td><td>NOPAT ÷ Operating capital (= OP ÷ CR)</td><td>345 ÷ 4,250 = 8.1% (was 12.1%)</td><td>The best single measure of operating performance. Compare to WACC: 8.1% &lt; 10% → value destroyed.</td></tr>' +
      '<tr><td><span class="term">Economic Value Added (EVA)</span></td><td>NOPAT − (WACC × Operating capital)</td><td>345 − 0.10 × 4,250 = 345 − 425 = <strong>−$80</strong> (2022: +$72)</td><td>Profit after charging for ALL capital, including equity. Positive = value created this year; negative = destroyed.</td></tr>' +
      '<tr><td><span class="term">Market Value Added (MVA)</span></td><td>Market value of firm − Book value of capital supplied ≈ Market value of equity − Book equity</td><td>100M shares × $30 − 2,910 = 3,000 − 2,910 = <strong>$90</strong> (2022: 5,000 − 2,730 = $2,270)</td><td>Cumulative value created over the firm’s life as judged by the market. Collapsed with the stock price.</td></tr></table></div>' +
      '<p><strong>EVA vs. accounting profit:</strong> net income charges for debt (interest) but not for equity capital. EVA subtracts the cost of <em>all</em> capital, so a firm can report positive net income and still have negative EVA — that is exactly Computron in 2023 (NI = +$264M, EVA = −$80M).</p>' },

    { title: '7. Corporate Income Taxes', html:
      '<ul>' +
      '<li><strong>Flat 21% rate</strong> on taxable income (the 2017 Tax Cuts and Jobs Act replaced the old progressive corporate schedule). Taxable operating income includes sales, services, and capital gains on equipment sold. (The Computron slides use an illustrative 25%.)</li>' +
      '<li><span class="term">Net operating loss (NOL) carryforward:</span> past losses can offset up to <strong>80% of current taxable income</strong>; unused losses carry forward <strong>indefinitely</strong>. Example: cumulative unused NOL $72B, taxable income $80B → limit = min(72, 0.8 × 80 = 64) = $64B → taxable income after carryforward = $16B → tax at 25% = $4B → $8B of NOL remains. (Pre-TCJA rules, which the older review summary still describes: carry back 2 years, forward 20.)</li>' +
      '<li><strong>Interest deduction limit:</strong> interest expense is deductible only up to <strong>30% of EBIT</strong> per year; the excess carries forward up to 20 years. Example: EBIT $50B, interest $20B → deductible now = $15B; $5B carried forward.</li>' +
      '<li><strong>Interest is deductible; dividends paid are not.</strong> This is why the tax system <strong>favors debt over equity</strong> financing.</li>' +
      '<li><strong>Interest income received</strong> by a corporation is fully taxable at 21%. <strong>Capital gains</strong> on securities are taxed at 21% whether short- or long-term.</li>' +
      '<li><strong>Dividends received from another corporation:</strong> to soften <em>triple</em> taxation (paying company → receiving company → its shareholders), the receiving corporation excludes <strong>50%</strong> of dividends received; the rest is taxed at 21%. (The older summary cites 70%; the slides’ 50% reflects current law.)</li>' +
      '<li><strong>Foreign profits</strong> of overseas subsidiaries earned 2018 and later: no U.S. tax (taxed where earned).</li>' +
      '</ul>' +
      '<p><strong>Worked example — after-tax interest vs. dividends</strong> ($40M to invest, 25% tax rate): a 5.4% bond yields 2.16M pre-tax → tax 0.54 → <strong>$1.62M after tax</strong>. A 5.0% preferred stock yields 2.00M → only 50% taxable → tax = 2.0 × 0.5 × 0.25 = 0.25 → <strong>$1.75M after tax</strong>. The stock pays less before tax but more after tax because of the dividend exclusion.</p>' +
      '<p><strong>Comprehensive example:</strong> operating income $166M, interest income $20M, dividend income $28M, 21% rate → taxable dividends = 28 × (1 − 0.5) = 14 → taxable income = 166 + 20 + 14 = $200M → tax = 0.21 × 200 = <strong>$42M</strong>.</p>' +
      '<p><span class="term">S corporation:</span> a small business that elects to be taxed like a partnership/proprietorship (income flows to owners, no double taxation) while keeping limited liability. Reasons to prefer proprietorship/partnership/S-corp when starting out: avoid double taxation, and early losses can offset the owners’ other income. <span class="term">Improper accumulation</span> is retaining earnings just so stockholders avoid personal tax on dividends.</p>' },

    { title: '8. Personal Taxes', html:
      '<ul>' +
      '<li><span class="term">Progressive tax:</span> the average rate rises with income; seven brackets from 10% (first ~$10,275 in 2022) to 37% (over ~$539,900).</li>' +
      '<li><span class="term">Marginal tax rate</span> = rate on the <em>next</em> dollar of income. <span class="term">Average tax rate</span> = total tax ÷ taxable income. <span class="term">Taxable income</span> = gross income − exemptions and deductions.</li>' +
      '<li><strong>Ordinary income</strong> (wages, salary) and <strong>short-term capital gains</strong> (asset held &lt; 1 year) are taxed at bracket rates.</li>' +
      '<li><strong>Long-term capital gains</strong> (held &gt; 1 year) get lower rates: 0%/ordinary for small gains, 15% for most, 20% above ~$459,750.</li>' +
      '<li><span class="term">Qualified dividends</span> (stock held ≥ 60 days before and after the dividend) are taxed at capital-gains rates; ordinary dividends are taxed as ordinary income.</li>' +
      '<li><span class="term">Municipal bonds:</span> interest is usually exempt from federal tax, so a muni can beat a higher-yielding corporate bond after tax.</li>' +
      '</ul>' +
      '<div class="formula">After-tax corporate yield = Corporate rate × (1 − T)<br>Breakeven tax rate: T* = 1 − (Muni rate ÷ Corporate rate)</div>' +
      '<p><strong>Example:</strong> 6.4% corporate bond vs. 5.0% muni, investor in the 24% bracket. After-tax corporate = 6.4% × 0.76 = 4.86% &lt; 5.0% → the muni wins. Breakeven: T* = 1 − 5.0/6.4 = 21.9% — anyone with a marginal rate above 21.9% should prefer the muni.</p>' },

    { title: '9. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>Retained earnings is not cash.</strong> It is a cumulative claim that has been reinvested in operating assets.</li>' +
      '<li><strong>Operating current assets exclude short-term investments; operating current liabilities exclude notes payable.</strong> Getting this wrong throws off NOWC, operating capital, and FCF.</li>' +
      '<li><strong>NOPAT uses EBIT, not net income</strong> — the whole point is to remove interest.</li>' +
      '<li><strong>FCF subtracts the <em>change</em> in operating capital</strong>, not its level.</li>' +
      '<li><strong>Negative FCF can be fine</strong> for a growing firm — the test is ROIC vs. WACC.</li>' +
      '<li><strong>EVA is a one-year flow; MVA is a cumulative stock</strong> (market’s verdict on all past value creation).</li>' +
      '<li><strong>Interest is deductible, dividends aren’t</strong> → tax code favors debt. Dividends <em>received</em> by a corporation get a 50% exclusion.</li>' +
      '<li><strong>Marginal ≠ average tax rate.</strong> Decisions depend on the marginal rate.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Annual report', def: 'A report issued yearly to stockholders containing the four basic financial statements plus management’s discussion of the past year and future prospects.' },
    { term: 'Balance sheet', def: 'A snapshot of financial position at a point in time: assets on the left, liabilities and equity (claims against assets) on the right.' },
    { term: 'Income statement', def: 'Summarizes revenues and expenses over a period; net sales at the top, net income and EPS at the bottom.' },
    { term: 'Statement of stockholders’ equity', def: 'Shows beginning equity, stock issued/repurchased, net income retained, and ending equity between balance sheet dates.' },
    { term: 'Statement of cash flows', def: 'Reports the impact of operating, investing, and financing activities on cash over a period.' },
    { term: 'Retained earnings', def: 'The cumulative portion of earnings saved rather than paid as dividends — a claim against assets, not cash itself.' },
    { term: 'Net cash flow', def: 'Net income plus non-cash adjustments; usually approximated as net income + depreciation and amortization.' },
    { term: 'EBITDA', def: 'Earnings before interest, taxes, depreciation, and amortization.' },
    { term: 'Depreciation vs. amortization', def: 'Non-cash charges: depreciation applies to tangible assets (buildings, machines); amortization to intangibles (goodwill).' },
    { term: 'Operating current assets', def: 'Current assets used to support operations — cash, accounts receivable, inventory. Excludes short-term investments.' },
    { term: 'Operating current liabilities', def: 'Current liabilities arising naturally from operations — accounts payable and accruals. Excludes notes payable and other interest-bearing debt.' },
    { term: 'Net operating working capital (NOWC)', def: 'Operating current assets minus operating current liabilities.' },
    { term: 'Total net operating capital', def: 'NOWC plus operating long-term assets (net plant and equipment); the total investor-supplied capital used to run the business.' },
    { term: 'NOPAT', def: 'Net operating profit after taxes = EBIT × (1 − T). The profit a firm would earn with no debt and no financial assets — the cleanest measure of operating performance.' },
    { term: 'Free cash flow (FCF)', def: 'NOPAT minus the net investment in operating capital: cash available to all investors after the investments needed to sustain operations. Drives firm value.' },
    { term: 'Five uses of FCF', def: 'Pay interest, repay principal, pay dividends, repurchase stock, buy non-operating assets (e.g., marketable securities).' },
    { term: 'Return on invested capital (ROIC)', def: 'NOPAT ÷ total net operating capital. Best measure of operating performance; compare with WACC.' },
    { term: 'Economic Value Added (EVA)', def: 'NOPAT − (WACC × operating capital): profit after charging for all capital including equity. Positive = value created this year.' },
    { term: 'Market Value Added (MVA)', def: 'Market value of the firm minus book value of investor-supplied capital; if debt trades at book, MVA = market value of equity − book equity.' },
    { term: 'Operating profitability & capital requirement ratios', def: 'OP = NOPAT ÷ Sales; CR = Operating capital ÷ Sales. ROIC = OP ÷ CR.' },
    { term: 'NOL carryforward', def: 'Past operating losses offset up to 80% of current taxable income and carry forward indefinitely (post-TCJA).' },
    { term: 'Interest deduction limit', def: 'Corporate interest expense is deductible up to 30% of EBIT each year; excess carries forward up to 20 years.' },
    { term: 'Dividend exclusion', def: 'A corporation excludes 50% of dividends received from another corporation from taxable income, mitigating triple taxation.' },
    { term: 'Why the tax code favors debt', def: 'Interest paid is tax-deductible; dividends paid are not.' },
    { term: 'S corporation', def: 'A small corporation taxed like a partnership/proprietorship (no double taxation) while keeping limited liability.' },
    { term: 'Progressive tax', def: 'A system where the percentage paid in taxes rises with income.' },
    { term: 'Marginal vs. average tax rate', def: 'Marginal = tax rate on the next dollar of income; average = total tax ÷ taxable income.' },
    { term: 'Capital gain / loss', def: 'Profit (loss) from selling a capital asset for more (less) than its cost. Long-term (held > 1 year) individual gains are taxed at lower rates than ordinary income.' },
    { term: 'Qualified dividend', def: 'A dividend on stock held at least 60 days before and after the payment; taxed at capital-gains rates instead of as ordinary income.' },
    { term: 'Breakeven tax rate (muni vs. corporate)', def: 'T* = 1 − (muni yield ÷ corporate yield); investors with a marginal rate above T* prefer the tax-exempt muni.' }
  ],
  quiz: [
    { q: 'Which statement is a snapshot of the firm’s financial position at a specific point in time?',
      options: ['income statement', 'balance sheet', 'statement of cash flows', 'statement of stockholders’ equity'],
      answer: 1, explain: 'The balance sheet reports assets, liabilities, and equity as of a date; the other three cover a period.' },
    { q: 'A firm reports $20 million of retained earnings. Can it definitely pay a $20 million cash dividend?',
      options: ['Yes — retained earnings are cash held in reserve', 'No — retained earnings are a claim that has been reinvested in operating assets, not cash', 'Yes, but only with creditor approval', 'No — dividends can only come from paid-in capital'],
      answer: 1, explain: 'Retained earnings represent cumulative undistributed income; the money was likely spent on buildings, equipment, and inventory.' },
    { q: 'Net cash flow is best approximated as…',
      options: ['net income − depreciation', 'net income + depreciation', 'EBIT − taxes', 'sales − COGS'],
      answer: 1, explain: 'Depreciation is the largest non-cash charge, so adding it back to net income approximates net cash flow.' },
    { q: 'Which item is EXCLUDED from operating current assets?',
      options: ['cash', 'inventory', 'accounts receivable', 'short-term investments'],
      answer: 3, explain: 'Short-term investments are not used to support operations; they are excess cash parked in securities.' },
    { q: 'Which item is EXCLUDED from operating current liabilities?',
      options: ['accounts payable', 'accruals', 'notes payable', 'wages payable'],
      answer: 2, explain: 'Notes payable are interest-bearing financing, not a natural byproduct of operations.' },
    { q: 'EBIT is $460 million and the tax rate is 25%. NOPAT is…',
      options: ['$345 million', '$460 million', '$115 million', '$264 million'],
      answer: 0, explain: 'NOPAT = EBIT × (1 − T) = 460 × 0.75 = $345 million.' },
    { q: 'NOPAT is $345, operating capital rose from $3,480 to $4,250. Free cash flow is…',
      options: ['−$425', '+$425', '$345', '−$770'],
      answer: 0, explain: 'FCF = NOPAT − Δoperating capital = 345 − 770 = −$425.' },
    { q: 'A growing firm has negative free cash flow. This is acceptable when…',
      options: ['net income is positive', 'the firm’s ROIC exceeds its WACC', 'dividends are being paid', 'depreciation is high'],
      answer: 1, explain: 'Heavy investment produces negative FCF; it creates value only if the capital earns more than it costs.' },
    { q: 'EVA is defined as…',
      options: ['net income − dividends', 'NOPAT − (WACC × operating capital)', 'market value of equity − book value of equity', 'EBIT × (1 − T)'],
      answer: 1, explain: 'EVA charges NOPAT for the dollar cost of all capital, including equity.' },
    { q: 'MVA (assuming debt trades at book value) equals…',
      options: ['NOPAT − capital charge', 'market value of equity − book value of equity', 'net income + depreciation', 'total assets − total liabilities'],
      answer: 1, explain: 'MVA is the market’s cumulative verdict on value created: market equity minus the equity capital investors supplied.' },
    { q: 'The U.S. tax system favors debt financing over equity because…',
      options: ['dividends are deductible but interest is not', 'interest is deductible but dividends are not', 'debt is always cheaper', 'equity is taxed at 21%'],
      answer: 1, explain: 'Interest expense reduces taxable income; dividend payments do not.' },
    { q: 'A corporation receives $28 million of dividends from another company. With a 50% exclusion, taxable dividends are…',
      options: ['$28 million', '$14 million', '$0', '$21 million'],
      answer: 1, explain: 'Only (1 − 0.5) × 28 = $14 million is added to taxable income.' },
    { q: 'An investor in the 24% bracket compares a 6.4% corporate bond with a 5.0% tax-exempt muni. After tax, the corporate bond yields…',
      options: ['6.4%', '4.86%', '5.0%', '1.54%'],
      answer: 1, explain: '6.4% × (1 − 0.24) = 4.86%, which is less than the muni’s 5.0%.' },
    { q: 'The marginal tax rate is the rate…',
      options: ['on total income', 'on the last (next) dollar of income', 'averaged across all brackets', 'applied to capital gains only'],
      answer: 1, explain: 'Marginal = the rate on an additional dollar; average = total tax ÷ taxable income.' }
  ]
});
