/* Finance textbook formula sheet — every numbered equation from Chapter 2 with MicroDrive worked values */
window.FBOOK_FORMULAS = {
  title: 'Finance Book Formula Sheet',
  intro: 'Every equation from the textbook chapters — Ch 2 Financial Statements, Cash Flow and Taxes (course Ch 13), Ch 3 Analysis of Financial Statements (course Ch 14), and Ch 4 Time Value of Money (course Ch 15) — with what each is used for and worked values from the book’s own MicroDrive, Morris Corporation, and TVM examples. Built for an open-note test.',
  sections: [
    { title: 'Ch 2 — Income Statement and Cash Flow Equations (2-1 to 2-5)', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>How to use it (MicroDrive 2023, $M)</th></tr>' +
      '<tr><td><div class="formula">(2-1) EBITDA = EBIT + Depreciation (+ Amortization)</div></td><td>Earnings before the non-cash charges; a rough measure of financial strength.</td><td>400 + 200 = $600.</td></tr>' +
      '<tr><td><div class="formula">(2-2) EBITDA = Sales − COGS (excl. depr.) − Other operating expenses</div></td><td>Same number from the top of the statement.</td><td>5,000 − 3,900 − 500 = $600.</td></tr>' +
      '<tr><td><div class="formula">(2-3) EPS = Net income to common ÷ Shares outstanding</div></td><td>The "bottom line" per share.</td><td>248 ÷ 60 = $4.13.</td></tr>' +
      '<tr><td><div class="formula">(2-4) Net cash flow = NI − Non-cash revenues + Non-cash expenses<br>(2-5) ≈ NI + Depreciation & amortization</div></td><td>Older pen-and-paper cash measure.</td><td>248 + 200 = $448.</td></tr>' +
      '<tr><td><div class="formula">Net income = (EBIT − Interest) × (1 − T)</div></td><td>Backing out NI, or (reverse) interest from NI: pre-tax = NI ÷ (1 − T).</td><td>MicroDrive: (400 − 60) × 0.75 = 255; less preferred dividends 7 = 248 to common.</td></tr>' +
      '<tr><td><div class="formula">Retained earnings<sub>end</sub> = RE<sub>begin</sub> + Net income − Dividends</div></td><td>Statement of stockholders’ equity.</td><td>1,552 + 248 − 60 = $1,740 (a claim, not cash).</td></tr>' +
      '</table></div>' },

    { title: 'Ch 2 — Free Cash Flow: The Five Steps (2-6 to 2-12)', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>How to use it (MicroDrive, $M)</th></tr>' +
      '<tr><td><div class="formula">(2-6) NOPAT = EBIT × (1 − Tax rate)</div></td><td>Step 1: operating profit as if the firm had no debt and no financial assets.</td><td>400 × 0.75 = $300 (2022: $330). Never start from net income.</td></tr>' +
      '<tr><td><div class="formula">(2-7) NOWC = Operating current assets − Operating current liabilities<br>= (Op. cash + A/R + Inventory) − (A/P + Accruals)</div></td><td>Step 2: working capital funded by investors.</td><td>2023: (100 + 500 + 1,000) − (200 + 400) = $1,000. 2022: $710. Excludes short-term investments and notes payable ("pays/charges interest → not operating").</td></tr>' +
      '<tr><td><div class="formula">(2-8) Total net operating capital = NOWC + Operating long-term assets</div></td><td>Step 3: all capital used to run the business.</td><td>2023: 1,000 + 2,000 = $3,000. 2022: 710 + 1,780 = $2,490.</td></tr>' +
      '<tr><td><div class="formula">(2-9) Investor-supplied capital = Notes payable + LT bonds + Preferred + Common equity<br>(2-10) Investor-supplied operating capital = (2-9) − Short-term investments</div></td><td>Cross-check from the financing side (whole firm only).</td><td>150 + 520 + 100 + 2,240 = 3,010; − 10 = $3,000 ✓ matches (2-8).</td></tr>' +
      '<tr><td><div class="formula">Net investment in operating capital = Op. capital<sub>t</sub> − Op. capital<sub>t−1</sub></div></td><td>Step 4: new capital tied up this year.</td><td>3,000 − 2,490 = $510 (NOWC +41% vs. sales +4.2% → warning).</td></tr>' +
      '<tr><td><div class="formula">(2-11) FCF = NOPAT − Net investment in total operating capital</div></td><td>Step 5: cash available to all investors. Drives intrinsic value.</td><td>300 − 510 = −$210.</td></tr>' +
      '<tr><td><div class="formula">(2-12) FCF = [EBIT(1 − T) + Depr.] − Gross investment in fixed assets − Investment in NOWC</div></td><td>Financial-press version; gives the same answer (depreciation cancels).</td><td>(300 + 200) − 420 − (1,000 − 710) = −$210.</td></tr>' +
      '<tr><td><div class="formula">Uses of FCF = After-tax interest + Net debt repayment + Dividends + Net stock repurchases + Net purchases of ST investments<br>After-tax interest = Interest × (1 − T)</div></td><td>Where the FCF went; must equal FCF from operations.</td><td>45 + (−292) + 67 + 0 + (−30) = −$210 ✓. Issuing securities / selling investments are negative uses.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 2 — Performance Measures (2-13 to 2-19)', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>How to use it (MicroDrive)</th></tr>' +
      '<tr><td><div class="formula">(2-13) ROIC = NOPAT ÷ Operating capital<br>Value test: ROIC &gt; WACC</div></td><td>Return operations earn on invested capital — the best operating performance measure.</td><td>300 ÷ 3,000 = 10% vs. WACC 11.5% (2022: 13.25%; industry 13.19%) → value destroyed.</td></tr>' +
      '<tr><td><div class="formula">(2-14) OP = NOPAT ÷ Sales</div></td><td>Operating profit per dollar of sales.</td><td>300 ÷ 5,000 = 6.0% (was 6.88%; industry 6.75%).</td></tr>' +
      '<tr><td><div class="formula">(2-15) CR = Operating capital ÷ Sales<br>ROIC = OP ÷ CR</div></td><td>Capital tied up per dollar of sales — capital utilization.</td><td>3,000 ÷ 5,000 = 60% (was 51.88%; industry 51.19%). 6% ÷ 60% = 10% ✓.</td></tr>' +
      '<tr><td><div class="formula">(2-16) MVA = (Shares × Price) − Total common equity</div></td><td>Cumulative value created for shareholders since inception.</td><td>60 × $31 − 2,240 = −$380M. Coca-Cola: 261 − 23 = +$238B.</td></tr>' +
      '<tr><td><div class="formula">(2-17) MVA = Total market value (equity + debt + preferred) − Total investor-supplied capital</div></td><td>Alternative form; book debt usually proxies for market debt.</td><td>—</td></tr>' +
      '<tr><td><div class="formula">(2-18) EVA = NOPAT − (Operating capital × WACC)</div></td><td>One year’s true economic profit after charging for ALL capital including equity.</td><td>300 − 3,000 × 0.115 = 300 − 345 = −$45M. Depreciation is NOT added back.</td></tr>' +
      '<tr><td><div class="formula">(2-19) EVA = Operating capital × (ROIC − WACC)</div></td><td>Same thing — shows value is added only when ROIC exceeds WACC.</td><td>3,000 × (0.10 − 0.115) = −$45M. Self-test: 100 × (14% − 10%) = $4M.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 2 — Corporate Tax Formulas (2-9)', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Corporate tax = 21% × Taxable income (flat)</div></td><td>Federal tax on operating and investment income.</td><td>$85,000 → $17,850. $50M → $10.5M.</td></tr>' +
      '<tr><td><div class="formula">Taxable dividends received = Dividends × (1 − 0.50)<br>Tax on dividends = Dividends × (1 − Exclusion) × T</div></td><td>50% dividends-received exclusion (softens triple taxation).</td><td>$4M received, 25% rate → 4 × 0.5 × 0.25 = $0.5M tax → keep $3.5M (12.5% effective).</td></tr>' +
      '<tr><td><div class="formula">After-tax interest received = Interest × (1 − T)<br>After-tax preferred dividend = Div × [1 − (1 − Excl.) × T]</div></td><td>Choosing between bonds and preferred stock for surplus cash.</td><td>4.6% bond on $100M → 4.6 × 0.75 = $3.45M; 4% preferred → $3.5M — preferred wins after tax.</td></tr>' +
      '<tr><td><div class="formula">Deductible interest ≤ 30% × EBIT (excess carries forward)</div></td><td>Interest expense limitation.</td><td>EBIT $10B, interest $4B → deduct $3B, carry $1B.</td></tr>' +
      '<tr><td><div class="formula">NOL used = MIN(Cumulative prior losses, 80% × Pre-tax income)<br>Taxable income = Pre-tax income − NOL used</div></td><td>Net operating loss carryforward.</td><td>Apex: losses $160M, income $120M → use $96M → taxable $24M → tax (25%) $6M → $64M remains.</td></tr>' +
      '<tr><td><div class="formula">Pre-tax income needed to pay $1 of dividends = $1 ÷ (1 − T)</div></td><td>Why the code favors debt: interest needs $1, dividends need more.</td><td>At 24.8%: 1 ÷ 0.752 = $1.33.</td></tr>' +
      '<tr><td><div class="formula">Capital gain = Sale price − Purchase price (corporate rate 21%, short- or long-term)</div></td><td>Gains on securities.</td><td>T-bill $980 → $1,000: $20 gain, $4.20 tax. 100 shares $15 → $40: $2,500 gain.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 2 — Personal Tax Formulas (2-10, Web Extension 2A)', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Taxable income = Total income − Adjustments (→ AGI) − Standard or itemized deduction</div></td><td>Form 1040 flow.</td><td>Jill: $100,000 − $12,950 standard deduction = $87,050.</td></tr>' +
      '<tr><td><div class="formula">Tax = Tax on bracket base + Marginal rate × (Taxable income − Base)</div></td><td>Progressive bracket calculation.</td><td>Jill: 4,807.50 + 22% × (87,050 − 41,775) = $14,768. $35,000: 1,027.50 + 12% × 24,725 = $3,994.50.</td></tr>' +
      '<tr><td><div class="formula">Average tax rate = Total tax ÷ Taxable income<br>Marginal rate = rate on the next dollar</div></td><td>Progressive means average &lt; marginal.</td><td>Jill: 14,768 ÷ 87,050 = 17.0% average vs. 22% marginal. Corporations: both 21%.</td></tr>' +
      '<tr><td><div class="formula">Payroll tax = 6.2% (SS, capped at $147,000) + 1.45% (Medicare, uncapped) = 7.65%; employer matches; self-employed pay 15.3%</div></td><td>Take-home pay.</td><td>Jill: $7,650; take-home = 100,000 − 14,768 − 7,650 = $77,582. A $1,000 raise nets $703.50.</td></tr>' +
      '<tr><td><div class="formula">After-tax corporate yield = r × (1 − T)<br>Equivalent corporate yield = Muni yield ÷ (1 − T)<br>Breakeven T* = 1 − (Muni ÷ Corporate)</div></td><td>Muni vs. taxable bond decisions.</td><td>37% bracket: 5.5% muni ≡ 8.73% corporate. 7.68% bond at 25% → 5.76%. 8% vs. 5.5% → T* = 31.25%.</td></tr>' +
      '<tr><td><div class="formula">LT-Dividends-Gains tax: 0% if taxable income ≤ $41,675 (single) / $83,350 (joint); 20% if ≥ $459,751 / $496,600; else 15%. Ordinary income fills brackets first.</div></td><td>Qualified dividends and long-term capital gains.</td><td>Couple: $396,600 ordinary + $150,000 gains → 15% × 100,000 + 20% × 50,000 = $25,000.</td></tr>' +
      '<tr><td><div class="formula">NIIT = 3.8% × MIN(Net investment income, MAGI − threshold)&nbsp;&nbsp;(threshold $200,000 single / $250,000 joint)</div></td><td>Extra tax on high earners’ investment income.</td><td>MAGI $300,000, investment income $80,000 → $3,040; $150,000 → $3,800.</td></tr>' +
      '<tr><td><div class="formula">Pass-through effective rate = Personal rate × (1 − 0.20)<br>C-corp total rate = 21% + (Dividend rate × 79%)</div></td><td>Comparing business forms.</td><td>37% owner: 29.6% (keeps 70.4%) vs. C-corp 21% + 15.8% = 36.8% (keeps 63.2%) — 7.2-point advantage.</td></tr>' +
      '</table></div>' },

{ title: 'Ch 3 (Course Ch 14) — Profitability Ratios', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>Worked (Morris Corp · MicroDrive)</th></tr>' +
      '<tr><td><div class="formula">Net profit margin = Net income ÷ Sales</div></td><td>Profit per dollar of sales after interest and taxes.</td><td>Morris: 150 ÷ 820 = 18.3% · MicroDrive: 248 ÷ 5,000 = 5.0%</td></tr>' +
      '<tr><td><div class="formula">Operating profit margin = EBIT ÷ Sales</div></td><td>Operations before interest expense — separates operating from financing problems.</td><td>Morris: 220 ÷ 820 = 26.8% · MicroDrive: 400 ÷ 5,000 = 8.0%</td></tr>' +
      '<tr><td><div class="formula">Gross profit margin = (Sales − COGS) ÷ Sales</div></td><td>Gross profit per sales dollar before any other expenses.</td><td>MicroDrive: (5,000 − 4,100) ÷ 5,000 = 18.0%</td></tr>' +
      '<tr><td><div class="formula">Basic earning power (BEP) = EBIT ÷ Total assets</div></td><td>Raw asset earning power BEFORE taxes and leverage — compares firms with different tax and debt profiles.</td><td>Morris: 220 ÷ 670 = 32.8% · MicroDrive: 400 ÷ 3,610 = 11.1%</td></tr>' +
      '<tr><td><div class="formula">Return on assets (ROA) = Net income ÷ Total assets</div></td><td>Return after interest and taxes. Debt lowers ROA.</td><td>Morris: 150 ÷ 670 = 22.4% · MicroDrive: 248 ÷ 3,610 = 6.9%</td></tr>' +
      '<tr><td><div class="formula">Return on equity (ROE) = Net income ÷ Common equity</div></td><td>Shareholders’ accounting return. Debt can raise it — with more risk.</td><td>Morris: 150 ÷ 415 = 36.1% · MicroDrive: 248 ÷ 2,240 = 11.1%</td></tr>' +
      '</table></div>' },

    { title: 'Ch 3 — Asset Management (Efficiency) Ratios', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>Worked (Morris · MicroDrive)</th></tr>' +
      '<tr><td><div class="formula">Total assets turnover = Sales ÷ Total assets</div></td><td>Sales generated per dollar tied up in assets.</td><td>Morris: 820 ÷ 670 = 1.2× · MicroDrive: 5,000 ÷ 3,610 = 1.39×</td></tr>' +
      '<tr><td><div class="formula">Fixed assets turnover = Sales ÷ Net fixed assets</div></td><td>How effectively plant and equipment are used.</td><td>Morris: 820 ÷ 500 = 1.6× · MicroDrive: 5,000 ÷ 2,000 = 2.5×<br><em>Caution: historical cost makes older firms look better.</em></td></tr>' +
      '<tr><td><div class="formula">DSO = Receivables ÷ (Sales ÷ 365)</div></td><td>Average days from sale to cash (= average collection period).</td><td>Morris: 30 ÷ 2.25 = 13.4 days · MicroDrive: 500 ÷ 13.7 = 36.5 days</td></tr>' +
      '<tr><td><div class="formula">Inventory turnover = COGS ÷ Inventories</div></td><td>Times inventory is sold and replaced. <strong>Uses COGS, not sales</strong> — sales include profit, inventory is at cost.</td><td>Morris: 500 ÷ 100 = 5.0× · MicroDrive: 4,100 ÷ 1,000 = 4.1×</td></tr>' +
      '</table></div>' +
      '<div class="tip">Use <strong>year-end</strong> balances so ratios match published industry averages, even though averages would be better for growing or seasonal firms.</div>' },

    { title: 'Ch 3 — Liquidity and Debt Management Ratios', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>Worked (Morris · MicroDrive)</th></tr>' +
      '<tr><td><div class="formula">Current ratio = Current assets ÷ Current liabilities</div></td><td>Best single indicator of short-term creditor coverage.</td><td>Morris: 170 ÷ 55 = 3.1× · MicroDrive: 1,610 ÷ 750 = 2.15×</td></tr>' +
      '<tr><td><div class="formula">Quick (acid test) ratio = (Current assets − Inventories) ÷ Current liabilities</div></td><td>Paying short-term debts without selling inventory (the least liquid current asset).</td><td>Morris: 70 ÷ 55 = 1.3× · MicroDrive: 610 ÷ 750 = 0.81×</td></tr>' +
      '<tr><td><div class="formula">Debt-to-assets (debt) ratio = Total debt ÷ Total assets<br><em>Total debt = short-term debt + long-term debt ONLY</em></div></td><td>Percentage of the firm financed with debt.</td><td>Morris: 225 ÷ 670 = 33.6% · MicroDrive: 670 ÷ 3,610 = 18.6%</td></tr>' +
      '<tr><td><div class="formula">Debt-to-equity = Total debt ÷ Common equity</div></td><td>Same leverage idea, different base.</td><td>Morris: 225 ÷ 415 = 54.2% · MicroDrive: 670 ÷ 2,240 = 29.9%</td></tr>' +
      '<tr><td><div class="formula">Market debt ratio = Total debt ÷ (Total debt + Market value of equity)</div></td><td>Leverage measured against market, not book, equity.</td><td>Morris: 225 ÷ (225 + 100 × $15) = 13.0% — far below the 33.6% book figure, so less risky than book suggests.</td></tr>' +
      '<tr><td><div class="formula">Liabilities-to-assets = Total liabilities ÷ Total assets</div></td><td>Assets supported by ALL liabilities, not just debt — always ≥ the debt ratio.</td><td>Morris: 255 ÷ 670 = 38.1% · MicroDrive: 1,270 ÷ 3,610 = 35.2%</td></tr>' +
      '<tr><td><div class="formula">Equity multiplier = Total assets ÷ Common equity</div></td><td>The factor multiplying ROA to get ROE — the DuPont leverage term.</td><td>Morris: 670 ÷ 415 = 1.61× · MicroDrive: 3,610 ÷ 2,240 = 1.61×</td></tr>' +
      '<tr><td><div class="formula">Times-interest-earned = EBIT ÷ Interest expense</div></td><td>Cushion before interest cannot be covered. <strong>Long-term bondholders watch this.</strong></td><td>Morris: 220 ÷ 20 = 11.0× · MicroDrive: 400 ÷ 60 = 6.7×</td></tr>' +
      '<tr><td><div class="formula">EBITDA coverage = (EBITDA + Lease pmts) ÷ (Interest + Lease pmts + Principal pmts)</div></td><td>Broader coverage. <strong>Banks and short-term lenders watch this.</strong> Leases appear in BOTH halves.</td><td>Self-test: (600 + 40) ÷ (60 + 40 + 30) = 640 ÷ 130 = 4.9×</td></tr>' +
      '</table></div>' },

    { title: 'Ch 3 — Market Value Ratios and the DuPont Equation', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>Worked (MicroDrive)</th></tr>' +
      '<tr><td><div class="formula">P/E = Price per share ÷ EPS</div></td><td>What investors pay per dollar of profit. Higher with growth, lower with risk.</td><td>$31.00 ÷ $4.13 = 7.5×</td></tr>' +
      '<tr><td><div class="formula">P/FCF = Price per share ÷ FCF per share</div></td><td>Price against the cash flow that actually drives value.</td><td>MicroDrive FCF was −$210M → <strong>not meaningful</strong> (negative denominator).</td></tr>' +
      '<tr><td><div class="formula">Price/EBITDA = Price ÷ EBITDA</div></td><td>Better operating measure than P/E, which includes interest and taxes.</td><td>—</td></tr>' +
      '<tr><td><div class="formula">Book value per share = Common equity ÷ Shares</div></td><td>Accounting value per share.</td><td>2,240 ÷ 60 = $37.33</td></tr>' +
      '<tr><td><div class="formula">Market cap = Shares × Price</div></td><td>Total market value of equity.</td><td>60 × $31 = $1,860M</td></tr>' +
      '<tr><td><div class="formula">M/B = Price ÷ BVPS = Market cap ÷ Common equity</div></td><td>How investors regard the firm; high-ROE firms sell at higher multiples of book.</td><td>31 ÷ 37.33 = 0.83× — market values it BELOW book equity.</td></tr>' +
      '<tr><td><div class="formula">DuPont (simple): ROE = ROA × Equity multiplier<br>DuPont (extended):<br>ROE = Profit margin × Total assets turnover × Equity multiplier</div></td><td>Explains WHY ROE is what it is: expense control × asset utilization × debt utilization.</td><td>Morris: 18.3% × 1.224 × 1.614 = 36.1% ✓<br>MicroDrive: 4.96% × 1.385 × 1.612 = 11.1% ✓<br>Self-test: 6% × 2 × 1.5 = 18%<br>Jewelry store: 20% × 0.5 × 1.0 = 10%</td></tr>' +
      '<tr><td><div class="formula">Common size: Income items ÷ Sales; Balance sheet items ÷ Total assets<br>Percentage change: (Value − Base year) ÷ Base year</div></td><td>Comparing across firms and years once size is removed.</td><td>—</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>Morris Corporation reference data</strong> (used by four consecutive self-tests): Cash 40 · A/R 30 · Inventories 100 · Net fixed assets 500 → <strong>Total assets 670</strong>. A/P 20 · Accruals 10 · Short-term debt 25 · LT debt 200 · Equity 415. Sales 820 · COGS excl. depr. 450 · Depreciation 50 · Other opex 100 → <strong>EBIT 220</strong> · Interest 20 · Tax 25% → <strong>Net income 150</strong>. Current assets 170 · Current liabilities 55 · Total debt 225 · Total liabilities 255 · COGS incl. depr. 500. Stock: 100 shares at $15.</div>' },

{ title: 'Ch 4 (Course Ch 15) — Lump Sums, Rates, and Periods', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>Worked example</th></tr>' +
      '<tr><td><div class="formula">(4-1) FV<sub>N</sub> = PV(1 + I)<sup>N</sup></div></td><td>Compounding a single amount forward.</td><td>$100 at 5%, 3 yrs = $115.76 · Excel <code>=FV(I,N,0,PV)</code></td></tr>' +
      '<tr><td><div class="formula">(4-3) PV = FV<sub>N</sub> ÷ (1 + I)<sup>N</sup></div></td><td>Discounting back to today; the basis of all valuation.</td><td>$115.76 in 3 yrs at 5% = $100 · <code>=PV(I,N,0,FV)</code></td></tr>' +
      '<tr><td><div class="formula">(4-4) I = (FV<sub>N</sub> ÷ PV)<sup>1/N</sup> − 1</div></td><td>Implied rate of return or growth rate.</td><td>$100 → $150 in 10 yrs = 4.14% · <code>=RATE(N,PMT,PV,FV)</code></td></tr>' +
      '<tr><td><div class="formula">(4-5) N = ln(FV<sub>N</sub> ÷ PV) ÷ ln(1 + I)</div></td><td>Time needed to reach a goal.</td><td>$500,000 → $1M at 4.5% = 15.75 yrs · <code>=NPER(I,PMT,PV,FV)</code></td></tr>' +
      '<tr><td><div class="formula">Simple interest: FV = PV + PV(I)(N)</div></td><td>Interest on principal only (some legal documents).</td><td>$100 at 5%, 3 yrs = $115.00 vs. $115.76 compounded.</td></tr>' +
      '<tr><td><div class="formula">(4-2) Calculator master equation:<br>PV(1+I)<sup>N</sup> + PMT[((1+I)<sup>N</sup>−1) ÷ I] + FV = 0</div></td><td>What the five TVM keys actually solve. Know any four, get the fifth.</td><td>At least one cash flow must be negative or you get an error.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 4 — Annuities and Perpetuities', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>Worked ($100, 3 yrs, 5%)</th></tr>' +
      '<tr><td><div class="formula">(4-6) PV of perpetuity = PMT ÷ I</div></td><td>Payments that never end (consols, preferred stock).</td><td>$25 at 2.5% = $1,000; at 3% = $833.33; at 2% = $1,250. PV moves INVERSELY with rates.</td></tr>' +
      '<tr><td><div class="formula">(4-7) FVA<sub>N</sub> = PMT[((1 + I)<sup>N</sup> − 1) ÷ I]</div></td><td>Savings plans — value built up by equal deposits.</td><td>$315.25 · <code>=FV(0.05,3,-100,0)</code></td></tr>' +
      '<tr><td><div class="formula">(4-9) PVA<sub>N</sub> = PMT[1/I − 1/(I(1 + I)<sup>N</sup>)]</div></td><td>Loan values, pensions, bond coupon streams.</td><td>$272.32 · <code>=PV(0.05,3,-100,0)</code></td></tr>' +
      '<tr><td><div class="formula">(4-8) FVA<sub>due</sub> = FVA<sub>ord</sub>(1 + I)<br>(4-10) PVA<sub>due</sub> = PVA<sub>ord</sub>(1 + I)</div></td><td>Payments at the BEGINNING of each period (leases, insurance, lottery).</td><td>FV $331.01 · PV $285.94 · Begin Mode, or Excel Type = 1</td></tr>' +
      '<tr><td><div class="formula">Required annuity-due PMT = ordinary PMT ÷ (1 + I)</div></td><td>Solving for the deposit needed, not the value.</td><td>$1,773.96 ÷ 1.06 = $1,673.55 (note: DIVIDE for payments, multiply for values).</td></tr>' +
      '</table></div>' +
      '<div class="tip">In an ordinary annuity the <strong>first</strong> payment earns interest for N−1 periods and the <strong>last earns none</strong>. Set PV = 0 when solving for an annuity’s FV, and FV = 0 when solving for its PV.</div>' },

    { title: 'Ch 4 — Uneven Streams, NPV, and IRR', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>Worked example</th></tr>' +
      '<tr><td><div class="formula">(4-11) PV = Σ CF<sub>t</sub> ÷ (1 + I)<sup>t</sup></div></td><td>Any irregular stream; the definition of NPV.</td><td>0, 100, 300, 300, 300, 500 at 12% = <strong>$1,016.35</strong></td></tr>' +
      '<tr><td><div class="formula">(4-12) FV = Σ CF<sub>t</sub>(1 + I)<sup>N−t</sup><br>or NFV = NPV(1 + I)<sup>N</sup></div></td><td>Terminal value of an irregular stream.</td><td>Same stream = <strong>$1,791.15</strong></td></tr>' +
      '<tr><td><div class="formula">Annuity + final lump sum → use all five TVM keys</div></td><td>Bond-style streams (coupons plus face value).</td><td>5-yr 12% annuity of $100 + $1,000 = <strong>$927.90</strong> · <code>=PV(0.12,5,100,1000)</code></td></tr>' +
      '<tr><td><div class="formula">IRR: the rate where PV of inflows = cost</div></td><td>Rate of return on an irregular investment; requires trial and error.</td><td>Same stream bought for $1,000 → IRR = <strong>12.55%</strong></td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>Two mechanical traps:</strong> (1) <strong>clear the cash flow register</strong> between problems — old flows persist and get added; (2) a calculator’s NPV <strong>includes</strong> CF<sub>0</sub>, but <strong>Excel’s NPV starts at Time 1</strong> so you must add CF<sub>0</sub> yourself — while Excel’s <strong>IRR does</strong> require Time 0.</div>' },

    { title: 'Ch 4 — Compounding Periods, EFF%, and APR', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>Worked example</th></tr>' +
      '<tr><td><div class="formula">(4-13) I<sub>PER</sub> = I<sub>NOM</sub> ÷ M<br>Number of periods = N × M</div></td><td><strong>All</strong> calculations and time lines.</td><td>6% monthly → 0.5%/month. Never enter the nominal rate itself.</td></tr>' +
      '<tr><td><div class="formula">(4-14) FV<sub>N</sub> = PV(1 + I<sub>NOM</sub>/M)<sup>M×N</sup></div></td><td>Lump sum with non-annual compounding.</td><td>$100 at 12% quarterly, 2 yrs = <strong>$126.68</strong></td></tr>' +
      '<tr><td><div class="formula">(4-15) EFF% = (1 + I<sub>NOM</sub>/M)<sup>M</sup> − 1</div></td><td>Comparing loans/investments with DIFFERENT compounding frequencies.</td><td>12% quarterly = 12.5509%; 1%/month = 12.6825%; 18% APR monthly = <strong>19.56%</strong> · <code>=EFF(I_NOM,M)</code></td></tr>' +
      '<tr><td><div class="formula">APR = I<sub>PER</sub> (computed from actual cash flows incl. fees) × M<br>True cost = (1 + I<sub>PER</sub>)<sup>M</sup> − 1</div></td><td>Comparing loans with different FEES (Truth in Lending).</td><td>$5,172.50 loan, $120 fee, $100 × 60 → 0.5817%/mo → APR <strong>6.98%</strong>, compounded <strong>7.21%</strong></td></tr>' +
      '<tr><td><div class="formula">Add-on interest: total interest = Loan × quoted rate;<br>payment = (Loan + interest) ÷ M, first due immediately</div></td><td>Retail installment financing — an annuity due.</td><td>$3,000 at "8% add-on" → $270/mo → APR <strong>17.18%</strong>, EFF% <strong>18.59%</strong></td></tr>' +
      '<tr><td><div class="formula">Fractional periods: FV = PV(1 + I<sub>PER</sub>)<sup>days</sup></div></td><td>Odd holding periods with daily compounding.</td><td>$100 at 10% daily for 274 days = <strong>$107.79</strong>; simple interest = $107.51</td></tr>' +
      '</table></div>' +
      '<div class="tip">EFF% exceeds the nominal rate whenever M &gt; 1; they are equal only under annual compounding. The biggest FV gain comes from annual → semiannual; monthly → daily adds little.</div>' },

    { title: 'Ch 4 — Amortized Loans and Growing Annuities', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>Worked example</th></tr>' +
      '<tr><td><div class="formula">Payment: solve PVA<sub>N</sub> = Loan for PMT<br><code>=PMT(I, N, PV, FV)</code></div></td><td>Any installment loan.</td><td>$100,000 at 6%, 5 yrs = <strong>$23,739.64</strong>/yr</td></tr>' +
      '<tr><td><div class="formula">Interest<sub>t</sub> = Beginning balance<sub>t</sub> × I<sub>PER</sub><br>Principal<sub>t</sub> = PMT − Interest<sub>t</sub><br>Ending balance = Beginning − Principal</div></td><td>Building an amortization schedule (final balance must be 0).</td><td>$100,000 over 60 monthly payments = $1,933.28; first payment = $500 interest + $1,433.28 principal</td></tr>' +
      '<tr><td><div class="formula">Mortgage: convert to monthly (N × 12, I ÷ 12)</div></td><td>Home loans.</td><td>$250,000, 30 yrs, 6% → <strong>$1,498.88</strong>/mo · balance after 12 pmts $246,929.93 · year-1 interest $14,916.49 (≈83% of payments) · lifetime interest <strong>$289,597</strong> (15-yr: $129,736)</td></tr>' +
      '<tr><td><div class="formula">(4-16) Real rate = [(1 + r<sub>NOM</sub>) ÷ (1 + Inflation)] − 1</div></td><td>Growing annuities — inflation-adjusted planning. A RATIO, not a subtraction.</td><td>6% nominal, 3% inflation = <strong>2.9126%</strong> (not 3%); 10% and 5% = 4.7619%</td></tr>' +
      '<tr><td><div class="formula">Constant real income: solve annuity due at the REAL rate</div></td><td>Retirement withdrawals that keep pace with inflation.</td><td>$1M, 20 yrs, 6%/3% → first withdrawal <strong>$64,786.88</strong> today (or $68,674.09 at year-end)</td></tr>' +
      '<tr><td><div class="formula">Future target in real dollars = Target ÷ (1 + Inflation)<sup>N</sup></div></td><td>Deposits growing with inflation to hit a future sum.</td><td>$100,000 in 10 yrs → real target $82,034.83 → initial deposit <strong>$6,598.87</strong></td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>Calculator checklist:</strong> 1 payment per period · End Mode (Begin only for annuities due, then switch back) · one cash flow negative · rates as percentages in TVM functions · zero out the unused variable · clear the CF register between irregular problems.</div>' },

    { title: 'Ch 2 — Self-Test Problem Template (Cole Furnaces)', html:
      '<div class="tablewrap"><table><tr><th>Given</th><th>Compute</th><th>Answer</th></tr>' +
      '<tr><td rowspan="7">EBIT $4M · Depr. $1M · Interest $1M · T = 25% · Op. CA $14M · Op. CL $4M · Net PP&amp;E $15M · WACC 10% · Prior op. capital $24M</td><td>NI = (4 − 1) × 0.75</td><td>$2.25M</td></tr>' +
      '<tr><td>Net cash flow = 2.25 + 1</td><td>$3.25M</td></tr>' +
      '<tr><td>NOPAT = 4 × 0.75</td><td>$3.0M</td></tr>' +
      '<tr><td>NOWC = 14 − 4; Op. capital = 10 + 15</td><td>$10M; $25M</td></tr>' +
      '<tr><td>FCF = 3 − (25 − 24)</td><td>$2.0M</td></tr>' +
      '<tr><td>ROIC = 3 ÷ 25</td><td>12%</td></tr>' +
      '<tr><td>EVA = 3 − 0.10 × 25</td><td>$0.5M</td></tr></table></div>' }
  ]
};
