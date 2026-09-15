/* Finance textbook formula sheet — every numbered equation from Chapter 2 with MicroDrive worked values */
window.FBOOK_FORMULAS = {
  title: 'Finance Book Formula Sheet',
  intro: 'Every numbered equation from the textbook chapter (Financial Statements, Cash Flow, and Taxes) plus the tax formulas from Section 2-9, 2-10, and Web Extension 2A, with what each is used for and the MicroDrive worked values. Built for an open-note test.',
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
