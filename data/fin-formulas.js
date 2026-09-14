/* Finance formula sheet — every equation from the Corporate Finance chapters, with purpose and usage */
window.FIN_FORMULAS = {
  title: 'Finance Formula Sheet',
  intro: 'Every formula from the Finance chapters (Ehrhardt & Brigham, Corporate Finance: Ch 2 Financial Statements & Cash Flows, Ch 3 Ratio Analysis, Ch 4 Time Value of Money), with what it is used for and how to apply it. Built for an open-note test: worked numbers come straight from the course’s Computron example and TVM slides.',
  sections: [
    { title: 'Ch 2 — Cash Flow & Performance Measures', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Net cash flow ≈ Net income + Depreciation & amortization</div></td><td>Converting accounting profit to cash generated.</td><td>Add back the non-cash charges. Depreciation is usually the largest.</td></tr>' +
      '<tr><td><div class="formula">NOPAT = EBIT × (1 − T)</div></td><td>Operating profit with financing effects removed.</td><td>Use EBIT, not net income. Computron 2023: 460 × 0.75 = $345.</td></tr>' +
      '<tr><td><div class="formula">NOWC = Operating CA − Operating CL<br>Op. CA = cash + A/R + inventory (no ST investments)<br>Op. CL = A/P + accruals (no notes payable)</div></td><td>Working capital tied up in running the business.</td><td>2023: (50 + 520 + 820) − (400 + 240) = $750.</td></tr>' +
      '<tr><td><div class="formula">Total net operating capital = NOWC + Net fixed assets</div></td><td>All investor-supplied capital used in operations.</td><td>2023: 750 + 3,500 = $4,250 (2022: $3,480).</td></tr>' +
      '<tr><td><div class="formula">FCF = NOPAT − (Op. capital<sub>t</sub> − Op. capital<sub>t−1</sub>)</div></td><td>Cash available to ALL investors after required investment; drives firm value.</td><td>2023: 345 − (4,250 − 3,480) = −$425. Subtract the <em>change</em> in capital, not its level.</td></tr>' +
      '<tr><td><div class="formula">Operating profitability OP = NOPAT ÷ Sales<br>Capital requirement CR = Op. capital ÷ Sales</div></td><td>Decomposing ROIC into margin and capital intensity.</td><td>2023: OP = 8.1%, CR = 70.8%. Lower CR = better capital utilization.</td></tr>' +
      '<tr><td><div class="formula">ROIC = NOPAT ÷ Total net operating capital = OP ÷ CR</div></td><td>Best measure of operating performance; compare to WACC.</td><td>2023: 345 ÷ 4,250 = 8.1% &lt; WACC 10% → value destroyed.</td></tr>' +
      '<tr><td><div class="formula">EVA = NOPAT − (WACC × Op. capital)</div></td><td>Value created (or destroyed) in one year after charging for all capital, including equity.</td><td>2023: 345 − 0.10 × 4,250 = −$80. Positive = created value.</td></tr>' +
      '<tr><td><div class="formula">MVA = Market value of firm − Book value of capital<br>≈ (Shares × Price) − Book equity (if debt ≈ book)</div></td><td>Cumulative value created as judged by the market.</td><td>2023: 100 × $30 − 2,910 = $90 (2022: $2,270).</td></tr>' +
      '</table></div>' },

    { title: 'Ch 2 — Tax Formulas', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">NOL usable this year = MIN(cumulative unused NOL, 80% × taxable income)</div></td><td>Applying loss carryforwards.</td><td>NOL $72B, TI $80B → min(72, 64) = $64B; taxable income becomes $16B; $8B carries forward.</td></tr>' +
      '<tr><td><div class="formula">Max interest deduction = 30% × EBIT</div></td><td>Limit on deductible interest; excess carries forward 20 years.</td><td>EBIT $50B, interest $20B → deduct $15B now, $5B later.</td></tr>' +
      '<tr><td><div class="formula">Taxable dividends received = (1 − 0.50) × Dividends</div></td><td>Corporate dividend exclusion (mitigates triple taxation).</td><td>$28M received → $14M taxable at 21%.</td></tr>' +
      '<tr><td><div class="formula">After-tax interest = Interest × (1 − T)<br>After-tax dividend = Div × [1 − (1 − excl.) × T]</div></td><td>Comparing corporate investments in bonds vs. preferred stock.</td><td>$40M: 5.4% bond → $1.62M after tax; 5.0% preferred → $1.75M after tax (stock wins).</td></tr>' +
      '<tr><td><div class="formula">Average tax rate = Total tax ÷ Taxable income<br>Marginal rate = rate on the next dollar</div></td><td>Personal tax analysis; decisions use the marginal rate.</td><td>Progressive system: average rate rises with income.</td></tr>' +
      '<tr><td><div class="formula">After-tax corporate bond yield = r × (1 − T)<br>Breakeven T* = 1 − (Muni yield ÷ Corporate yield)</div></td><td>Muni vs. taxable bond choice.</td><td>6.4% corp, 5.0% muni, 24% bracket → 4.86% after tax &lt; 5.0% → muni. T* = 21.9%.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 3 — Ratio Analysis (all Computron 2024E)', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:30%">Ratio</th><th style="width:30%">Formula</th><th>2024E value · what it tells you</th></tr>' +
      '<tr><td colspan="3"><strong>Liquidity — can it pay bills due within a year?</strong></td></tr>' +
      '<tr><td>Current ratio</td><td><div class="formula">Current assets ÷ Current liabilities</div></td><td>1,300 ÷ 700 = 1.9 (ind. 2.5)</td></tr>' +
      '<tr><td>Quick (acid-test) ratio</td><td><div class="formula">(Current assets − Inventories) ÷ Current liabilities</div></td><td>(1,300 − 660) ÷ 700 = 0.9 (ind. 1.3). Inventory is least liquid.</td></tr>' +
      '<tr><td colspan="3"><strong>Asset management — how hard do assets work?</strong></td></tr>' +
      '<tr><td>Inventory turnover</td><td><div class="formula">COGS ÷ Inventories</div></td><td>5,580 ÷ 660 = 8.5× (ind. 9.0). COGS includes depreciation.</td></tr>' +
      '<tr><td>Days sales outstanding</td><td><div class="formula">Receivables ÷ (Sales ÷ 365)</div></td><td>530 ÷ 18.08 = 29.3 days (ind. 28). Days to collect.</td></tr>' +
      '<tr><td>Fixed assets turnover</td><td><div class="formula">Sales ÷ Net fixed assets</div></td><td>6,600 ÷ 3,700 = 1.8× (ind. 3.0)</td></tr>' +
      '<tr><td>Total assets turnover</td><td><div class="formula">Sales ÷ Total assets</div></td><td>6,600 ÷ 5,000 = 1.3× (ind. 1.5)</td></tr>' +
      '<tr><td colspan="3"><strong>Debt management — how much leverage, and can it be serviced?</strong></td></tr>' +
      '<tr><td>Debt ratio (debt-to-assets)</td><td><div class="formula">Total debt ÷ Total assets<br>(debt = notes payable + LT debt)</div></td><td>1,200 ÷ 5,000 = 24% (ind. 15%)</td></tr>' +
      '<tr><td>Debt-to-equity</td><td><div class="formula">Total debt ÷ Common equity</div></td><td>1,200 ÷ 3,200 = 0.38 (ind. 0.22)</td></tr>' +
      '<tr><td>Liabilities-to-assets</td><td><div class="formula">Total liabilities ÷ Total assets</div></td><td>1,800 ÷ 5,000 = 36% (ind. 30%)</td></tr>' +
      '<tr><td>Equity multiplier</td><td><div class="formula">Total assets ÷ Common equity</div></td><td>5,000 ÷ 3,200 = 1.56 (ind. 1.5). DuPont leverage term.</td></tr>' +
      '<tr><td>Times interest earned</td><td><div class="formula">EBIT ÷ Interest expense</div></td><td>620 ÷ 100 = 6.2× (ind. 13.0)</td></tr>' +
      '<tr><td>EBITDA coverage</td><td><div class="formula">(EBIT + Depr. & amort. + Lease pmts) ÷ (Interest + Lease pmts + Principal pmts)</div></td><td>(620 + 370 + 20) ÷ (100 + 20 + 0) = 8.4× (ind. 17.2)</td></tr>' +
      '<tr><td colspan="3"><strong>Profitability — return on sales and on capital</strong></td></tr>' +
      '<tr><td>Net profit margin</td><td><div class="formula">Net income ÷ Sales</div></td><td>390 ÷ 6,600 = 5.9% (ind. 7.2%)</td></tr>' +
      '<tr><td>Operating profit margin</td><td><div class="formula">EBIT ÷ Sales</div></td><td>620 ÷ 6,600 = 9.4% (ind. 10.4%)</td></tr>' +
      '<tr><td>Basic earning power</td><td><div class="formula">EBIT ÷ Total assets</div></td><td>620 ÷ 5,000 = 12.4% (ind. 15.6%). Before taxes & leverage.</td></tr>' +
      '<tr><td>Return on assets</td><td><div class="formula">Net income ÷ Total assets</div></td><td>390 ÷ 5,000 = 7.8% (ind. 10.8%)</td></tr>' +
      '<tr><td>Return on equity</td><td><div class="formula">Net income ÷ Common equity</div></td><td>390 ÷ 3,200 = 12.2% (ind. 15.4%)</td></tr>' +
      '<tr><td colspan="3"><strong>Market value — what does the market think?</strong></td></tr>' +
      '<tr><td>Price/earnings</td><td><div class="formula">Price per share ÷ EPS</div></td><td>49 ÷ 3.90 = 12.6 (ind. 16.8). $ paid per $1 of earnings.</td></tr>' +
      '<tr><td>Price/cash flow</td><td><div class="formula">Price ÷ (Net income + Depreciation) per share</div></td><td>$ paid per $1 of cash flow.</td></tr>' +
      '<tr><td>Book value per share</td><td><div class="formula">Common equity ÷ Shares outstanding</div></td><td>3,200 ÷ 100 = $32.00</td></tr>' +
      '<tr><td>Market/book</td><td><div class="formula">Price per share ÷ Book value per share</div></td><td>49 ÷ 32 = 1.53 (ind. 2.6)</td></tr>' +
      '<tr><td colspan="3"><strong>Putting it together</strong></td></tr>' +
      '<tr><td>DuPont equation</td><td><div class="formula">ROE = Profit margin × Total assets turnover × Equity multiplier<br>= (NI ÷ Sales) × (Sales ÷ TA) × (TA ÷ Equity) = ROA × EM</div></td><td>2024E: 5.9% × 1.320 × 1.563 = 12.2%. Levers: expense control, asset use, leverage.</td></tr>' +
      '<tr><td>Common-size statements</td><td><div class="formula">Balance sheet item ÷ Total assets · Income item ÷ Sales</div></td><td>Removes size for peer comparison.</td></tr>' +
      '<tr><td>Percent change</td><td><div class="formula">(Value<sub>t</sub> − Value<sub>base</sub>) ÷ Value<sub>base</sub></div></td><td>Cumulative growth from the base year.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 4 — Time Value of Money', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Formula</th><th style="width:30%">What it is used for</th><th>How to use it (examples at 10%)</th></tr>' +
      '<tr><td><div class="formula">FVₙ = PV × (1 + I)ᴺ</div></td><td>Compounding a lump sum forward.</td><td>$100, 3 yrs → 100 × 1.331 = $133.10. Excel =FV(I, N, 0, −PV).</td></tr>' +
      '<tr><td><div class="formula">PV = FVₙ ÷ (1 + I)ᴺ</div></td><td>Discounting a future lump sum to today.</td><td>$100 in 3 yrs → 100 ÷ 1.331 = $75.13. Excel =PV(I, N, 0, FV).</td></tr>' +
      '<tr><td><div class="formula">N = ln(FV ÷ PV) ÷ ln(1 + I)</div></td><td>How long to reach a target (e.g., doubling).</td><td>Double at 20%: ln 2 ÷ ln 1.2 = 3.8 yrs. Excel =NPER(I, 0, −PV, FV).</td></tr>' +
      '<tr><td><div class="formula">I = (FV ÷ PV)^(1/N) − 1</div></td><td>Implied growth or return rate.</td><td>Double in 3 yrs: 2^(1/3) − 1 = 25.99%. Excel =RATE(N, 0, −PV, FV).</td></tr>' +
      '<tr><td><div class="formula">FVAₙ (ordinary) = PMT × [((1 + I)ᴺ − 1) ÷ I]</div></td><td>Future value of equal end-of-period payments (savings plans).</td><td>$100 × 3 yrs → 100 × 3.31 = $331.00. Excel =FV(I, N, −PMT, 0).</td></tr>' +
      '<tr><td><div class="formula">PVAₙ (ordinary) = PMT × [1/I − 1/(I × (1 + I)ᴺ)]</div></td><td>Present value of equal end-of-period payments (loan values, pensions).</td><td>$100 × 3 yrs → $248.69. Excel =PV(I, N, PMT, 0).</td></tr>' +
      '<tr><td><div class="formula">Annuity due = Ordinary annuity × (1 + I)&nbsp;&nbsp;(PV or FV)</div></td><td>Payments at the beginning of each period (leases, rent).</td><td>PV 248.69 × 1.1 = $273.55; FV 331 × 1.1 = $364.10. Calculator BEGIN mode; Excel type = 1.</td></tr>' +
      '<tr><td><div class="formula">PV of perpetuity = PMT ÷ I</div></td><td>Payments that never end (consols, preferred stock).</td><td>$100/yr at 10% → $1,000. Use the periodic rate matching payment frequency.</td></tr>' +
      '<tr><td><div class="formula">PV of uneven stream = Σ CFₜ ÷ (1 + I)ᵗ</div></td><td>Any irregular cash flows; NPV of a project.</td><td>100, 300, 300, −50 → $530.09. Excel =NPV(I, range) assumes first flow at t = 1.</td></tr>' +
      '<tr><td><div class="formula">I<sub>PER</sub> = I<sub>NOM</sub> ÷ M&nbsp;&nbsp;·&nbsp;&nbsp;Periods = N × M</div></td><td>Converting a quoted annual rate for intra-year compounding. Use for ALL calculations.</td><td>6% monthly → 0.5%/month; 5 yrs → 60 periods. Never calculate with the nominal rate directly.</td></tr>' +
      '<tr><td><div class="formula">FVₙ = PV × (1 + I<sub>NOM</sub> ÷ M)^(M × N)</div></td><td>Lump-sum growth with M compounding periods per year.</td><td>$100, 12% semiannual, 5 yrs → 100 × 1.06¹⁰ = $179.08 (daily: $182.19).</td></tr>' +
      '<tr><td><div class="formula">EFF% (EAR) = (1 + I<sub>NOM</sub> ÷ M)ᴹ − 1</div></td><td>Comparing investments/loans with different compounding frequencies.</td><td>12% semiannual → 12.36%; quarterly 12.55%; monthly 12.68%; daily 12.75%. EFF% = nominal only if M = 1.</td></tr>' +
      '<tr><td><div class="formula">APR = I<sub>PER</sub> (from actual cash flows incl. fees) × M<br>Modified APR = (1 + I<sub>PER</sub>)ᴹ − 1</div></td><td>Comparing loans with different fees (Truth in Lending).</td><td>$3,521.15 net of fee, 48 × $90 → 0.8675%/mo → APR 10.41%; modified 10.92%.</td></tr>' +
      '<tr><td><div class="formula">Loan payment: solve PVAₙ = Loan for PMT<br>Interestₜ = Beginning balanceₜ × I<br>Principalₜ = PMT − Interestₜ<br>Ending balanceₜ = Beginning balanceₜ − Principalₜ</div></td><td>Building an amortization schedule.</td><td>$1,000, 10%, 3 yrs → PMT $402.11; yr-1 interest $100, principal $302.11, balance $697.89; ends at $0. Total interest $206.34.</td></tr>' +
      '<tr><td><div class="formula">Fractional periods: FV = PV × (1 + I<sub>PER</sub>)^(days)</div></td><td>Odd holding periods with daily compounding.</td><td>11.33463%/365 = 0.031054%/day; 273 days → $108.85.</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>Calculator checklist:</strong> clear TVM registers · P/YR = 1 · END mode (BEGIN for annuity due) · enter the unused variable as 0 (PMT = 0 for lump sums; PV = 0 or FV = 0 for annuities) · make one cash flow negative · use the periodic rate and total periods.</div>' }
  ]
};
