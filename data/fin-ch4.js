window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'fin-ch4', subject: 'fin', num: 4,
  title: 'Time Value of Money',
  overview: 'A dollar today is worth more than a dollar tomorrow. This chapter gives you the tools to move money across time: future value (compounding), present value (discounting), annuities and perpetuities, uneven cash flows, nominal vs. effective rates, and loan amortization — with the calculator and Excel conventions used in the course.',
  sections: [
    { title: '0. The Map of This Chapter', html:
      '<p>Every TVM problem has the same five ingredients: <strong>PV</strong> (value today), <strong>FV</strong> (value at a future date), <strong>N</strong> (number of periods), <strong>I</strong> (interest rate per period), and <strong>PMT</strong> (a repeated equal payment, if any). Given any four, you can find the fifth. The chapter walks through the cases in increasing complexity:</p>' +
      '<ol>' +
      '<li>A single lump sum: FV (compounding) and PV (discounting).</li>' +
      '<li>Solving for N or I instead (how long to double? what rate?).</li>' +
      '<li>Annuities (equal payments): ordinary vs. annuity due; perpetuities.</li>' +
      '<li>Uneven cash flows: value each one and add.</li>' +
      '<li>Compounding more than once a year: nominal, periodic, and effective rates; APR.</li>' +
      '<li>Amortized loans and a few special cases.</li>' +
      '</ol>' +
      '<div class="tip"><strong>Always start with a time line.</strong> Tick marks are the <em>ends</em> of periods: Time 0 is today; Time 1 is the end of period 1 (= beginning of period 2). Put the interest rate above the line between ticks; put cash flows under the ticks. Outflows are negative, inflows positive.</div>' },

    { title: '1. Future Value of a Lump Sum (Compounding)', html:
      '<div class="formula">FVₙ = PV × (1 + I)ᴺ</div>' +
      '<p><span class="term">Compounding</span> is moving <em>right</em> on the time line — finding what a payment grows to. It works because you earn "interest on interest": $100 at 10% becomes $110 after year 1, $121 after year 2 (10% of $110, not $100), and $133.10 after year 3.</p>' +
      '<p><strong>Four ways to solve any TVM problem:</strong> (1) step-by-step along the time line, (2) the formula on a regular calculator, (3) a financial calculator, (4) a spreadsheet.</p>' +
      '<div class="tablewrap"><table><tr><th>Method</th><th>FV of $100, 3 years, 10%</th></tr>' +
      '<tr><td>Formula</td><td>100 × 1.10³ = <strong>$133.10</strong></td></tr>' +
      '<tr><td>Financial calculator</td><td>N = 3, I/YR = 10, PV = −100, PMT = 0 → FV = 133.10</td></tr>' +
      '<tr><td>Excel</td><td>=FV(0.10, 3, 0, −100) → 133.10</td></tr></table></div>' +
      '<div class="tip"><strong>Sign convention:</strong> calculators solve PV(1+I)ᴺ + FV = 0, so either PV or FV must be entered as a negative (cash you pay out). Enter PV = −100 to get a positive FV. Before starting: clear the registers, set P/YR = 1, set END mode, and enter PMT = 0 when there are no payments.</div>' +
      '<p><strong>Relationships:</strong> FV grows with a higher rate, more time, or more frequent compounding. Doubling the time more than doubles the growth (compounding is exponential, not linear).</p>' },

    { title: '2. Present Value of a Lump Sum (Discounting)', html:
      '<div class="formula">PV = FVₙ ÷ (1 + I)ᴺ = FVₙ × [1 ÷ (1 + I)ᴺ]</div>' +
      '<p><span class="term">Discounting</span> is the reverse of compounding — moving <em>left</em> on the time line to find what a future amount is worth today. $100 due in 3 years at 10%: PV = 100 ÷ 1.10³ = 100 × 0.7513 = <strong>$75.13</strong>. Put $75.13 in the bank today and you can take out $100 in 3 years.</p>' +
      '<p>Calculator: N = 3, I/YR = 10, PMT = 0, FV = 100 → PV = −75.13. Excel: =PV(0.10, 3, 0, 100) → −75.13.</p>' +
      '<p>The rate used, <span class="term">I</span>, is the <span class="term">opportunity cost rate</span>: the return available on the best alternative investment of <em>similar risk</em>. It is not one universal number — it varies with the riskiness and maturity of the investment and with inflation expectations. The higher the rate or the longer the wait, the lower the present value.</p>' },

    { title: '3. Solving for N (Time) or I (Rate)', html:
      '<p>Rearrange FVₙ = PV(1 + I)ᴺ.</p>' +
      '<p><strong>How long to double at 20%?</strong> $2 = $1 × 1.20ᴺ → 1.20ᴺ = 2 → N = ln(2) ÷ ln(1.20) = 0.693 ÷ 0.182 ≈ <strong>3.8 years</strong>. Calculator: I/YR = 20, PV = −1, PMT = 0, FV = 2 → N. Excel: =NPER(0.20, 0, −1, 2).</p>' +
      '<p><strong>What rate doubles money in 3 years?</strong> $2 = $1 × (1 + I)³ → 1 + I = 2^(1/3) = 1.2599 → I ≈ <strong>25.99%</strong>. Calculator: N = 3, PV = −1, PMT = 0, FV = 2 → I/YR. Excel: =RATE(3, 0, −1, 2).</p>' +
      '<div class="tip"><strong>Growth trap:</strong> if EPS grows from $1 to $2 over 10 years, total growth is 100% but the <em>annual</em> rate is not 10% — it is 7.18%, because of compounding ("growth on growth"). A true 10% rate would give $2.59.</div>' },

    { title: '4. Annuities: Ordinary vs. Annuity Due', html:
      '<p>An <span class="term">annuity</span> is a series of <em>equal</em> payments (<strong>PMT</strong>) for a fixed number of periods. An <span class="term">ordinary (deferred) annuity</span> pays at the <em>end</em> of each period; an <span class="term">annuity due</span> pays at the <em>beginning</em>. The payment period must match the compounding period.</p>' +
      '<div class="formula">FV of ordinary annuity: FVAₙ = PMT × [((1 + I)ᴺ − 1) ÷ I]<br>PV of ordinary annuity: PVAₙ = PMT × [1/I − 1/(I × (1 + I)ᴺ)]<br>Annuity due: multiply the ordinary-annuity PV or FV by (1 + I)</div>' +
      '<p><strong>Worked example — $100 per year for 3 years at 10%:</strong></p>' +
      '<div class="tablewrap"><table><tr><th></th><th>Ordinary annuity (END)</th><th>Annuity due (BEGIN)</th></tr>' +
      '<tr><td>Future value</td><td>100 × (1.10³ − 1) ÷ 0.10 = <strong>$331.00</strong></td><td>331.00 × 1.10 = <strong>$364.10</strong></td></tr>' +
      '<tr><td>Present value</td><td>100 × [1/0.1 − 1/(0.1 × 1.10³)] = <strong>$248.69</strong></td><td>248.69 × 1.10 = <strong>$273.55</strong></td></tr></table></div>' +
      '<p>Why the annuity due is worth more: each payment arrives one period earlier, so it is discounted one year less (PV) or compounded one extra year (FV).</p>' +
      '<p><strong>Calculator:</strong> N = 3, I/YR = 10, PMT = −100, and enter 0 for the lump sum you don’t have (PV = 0 when solving for FV; FV = 0 when solving for PV). For an annuity due, switch the calculator to BEGIN mode. <strong>Excel:</strong> =FV(0.10, 3, −100, 0) → 331.00; =PV(0.10, 3, 100, 0) → −248.69; add a fifth argument of 1 for an annuity due: =PV(0.10, 3, −100, 0, 1).</p>' +
      '<p>A <span class="term">perpetuity</span> (also called a <em>consol</em>) is an annuity that never ends (N = ∞):</p>' +
      '<div class="formula">PV of a perpetuity = PMT ÷ I</div>' +
      '<p>Example: $100 per year forever at 10% is worth 100 ÷ 0.10 = $1,000 today.</p>' },

    { title: '5. Uneven Cash Flow Streams', html:
      '<p>When the payments differ from period to period, there is no shortcut: <strong>find the PV (or FV) of each cash flow and add them up.</strong> The future value of an uneven stream is sometimes called its <span class="term">terminal value</span>. The slides reserve the label "PMT" for equal annuity payments and "cash flow (CF)" for uneven streams.</p>' +
      '<p><strong>Example:</strong> CF₁ = 100, CF₂ = 300, CF₃ = 300, CF₄ = −50 at 10%. PV = 100/1.1 + 300/1.1² + 300/1.1³ − 50/1.1⁴ = <strong>$530.09</strong>.</p>' +
      '<ul>' +
      '<li><strong>Calculator:</strong> use the cash-flow register (CF₀ = 0, then CF₁…CF₄ in order), enter I/YR = 10, then compute NPV. Here NPV = PV because CF₀ = 0.</li>' +
      '<li><strong>Excel:</strong> =NPV(10%, B2:E2) with the four cash flows in B2:E2 → 530.09. (Excel’s NPV assumes the first cash flow is at Time 1.)</li>' +
      '</ul>' +
      '<p>An uneven stream can <em>contain</em> an annuity: $100, $200, then $400 for years 3–10 is not an annuity, but the years-3-to-10 portion is an 8-year $400 annuity you can value with the annuity formula, then discount back.</p>' },

    { title: '6. Compounding More Than Once a Year: Nominal, Periodic, and Effective Rates', html:
      '<p>Three different "rates" show up, and using the wrong one is the most common TVM mistake:</p>' +
      '<div class="tablewrap"><table><tr><th>Rate</th><th>Definition</th><th>Use it for…</th></tr>' +
      '<tr><td><span class="term">Nominal (quoted, stated) rate, I<sub>NOM</sub></span></td><td>The annual rate written in the contract, e.g., "6% compounded monthly." Also called the APR.</td><td>Nothing directly — never use in calculations or on time lines. It must come with M, the periods per year.</td></tr>' +
      '<tr><td><span class="term">Periodic rate, I<sub>PER</sub></span></td><td>I<sub>NOM</sub> ÷ M. 6% monthly → 0.5% per month; 6% quarterly → 1.5% per quarter.</td><td><strong>All calculations</strong> and time lines. (For annual payments, periodic = nominal.)</td></tr>' +
      '<tr><td><span class="term">Effective annual rate, EFF% (EAR, AER)</span></td><td>The annual rate that would produce the same FV under annual compounding.</td><td>Comparing loans or investments with <em>different compounding frequencies</em>.</td></tr></table></div>' +
      '<div class="formula">I<sub>PER</sub> = I<sub>NOM</sub> ÷ M&nbsp;&nbsp;&nbsp;&nbsp;FVₙ = PV × (1 + I<sub>NOM</sub>/M)^(M×N)&nbsp;&nbsp;&nbsp;&nbsp;EFF% = (1 + I<sub>NOM</sub>/M)ᴹ − 1</div>' +
      '<p><strong>Example — $100 at 12% nominal for 5 years:</strong> semiannual: 100 × (1 + 0.12/2)^(2×5) = 100 × 1.06¹⁰ = <strong>$179.08</strong>. More frequent compounding → larger FV because interest is earned on interest more often: annual $176.23, semiannual $179.08, quarterly $180.61, monthly $181.67, daily $182.19.</p>' +
      '<p><strong>Effective rates for 12% nominal:</strong> annual 12.00% · semiannual (1.06)² − 1 = 12.36% · quarterly 12.55% · monthly 12.68% · daily 12.75%. EFF% equals the nominal rate <em>only</em> with annual compounding (M = 1); otherwise it is always higher.</p>' +
      '<div class="tip">Would you rather have 5% compounded semiannually or 5% compounded daily? <strong>Daily</strong> — same stated rate, more interest on interest.</div>' },

    { title: '7. APR and the Modified APR', html:
      '<p>The Truth in Lending rules require lenders to disclose the <span class="term">annual percentage rate (APR)</span>: the nominal annual rate actually charged <em>after including fees</em>. Use it to compare loans with different processing fees.</p>' +
      '<p><strong>Example:</strong> $3,621.15 loan, 8% nominal, 48 monthly payments of $90, $100 processing fee. Step 1 — find the true monthly rate from actual cash flows: N = 48, PV = 3,621.15 − 100 = 3,521.15, PMT = −90, FV = 0 → I<sub>PER</sub> = 0.8675% per month. Step 2 — APR = 0.8675% × 12 = <strong>10.41%</strong> (well above the quoted 8% because of the fee).</p>' +
      '<p>The APR does not compound the monthly rate. The <span class="term">modified APR</span> does: (1.008675)¹² − 1 = <strong>10.92%</strong> — the true effective annual cost.</p>' },

    { title: '8. Amortized Loans', html:
      '<p>An <span class="term">amortized loan</span> is repaid in equal periodic payments; an <span class="term">amortization schedule</span> splits each payment into interest and principal and tracks the remaining balance (which must reach zero at the end).</p>' +
      '<p><strong>Example — $1,000, 10% annual rate, 3 equal annual payments:</strong></p>' +
      '<ol>' +
      '<li><strong>Find the payment:</strong> N = 3, I/YR = 10, PV = 1,000, FV = 0 → PMT = <strong>$402.11</strong> (the PV-of-annuity formula solved for PMT).</li>' +
      '<li><strong>Interest for the year</strong> = beginning balance × I = 1,000 × 0.10 = $100.</li>' +
      '<li><strong>Principal repaid</strong> = PMT − interest = 402.11 − 100 = $302.11.</li>' +
      '<li><strong>Ending balance</strong> = beginning balance − principal = 1,000 − 302.11 = $697.89. Repeat.</li>' +
      '</ol>' +
      '<div class="tablewrap"><table><tr><th>Year</th><th>Beginning balance</th><th>Payment</th><th>Interest</th><th>Principal</th><th>Ending balance</th></tr>' +
      '<tr><td>1</td><td>$1,000.00</td><td>$402.11</td><td>$100.00</td><td>$302.11</td><td>$697.89</td></tr>' +
      '<tr><td>2</td><td>697.89</td><td>402.11</td><td>69.79</td><td>332.33</td><td>365.56</td></tr>' +
      '<tr><td>3</td><td>365.56</td><td>402.11</td><td>36.56</td><td>365.56</td><td>0.00</td></tr>' +
      '<tr><td><strong>Total</strong></td><td></td><td><strong>1,206.34</strong></td><td><strong>206.34</strong></td><td><strong>1,000.00</strong></td><td></td></tr></table></div>' +
      '<p>Interest falls each year because the outstanding balance falls, so an ever-larger share of the fixed payment goes to principal. Mortgages, auto loans, and business loans all work this way.</p>' },

    { title: '9. Special Cases: Fractional Periods, Non-Matching Periods, Comparing Investments', html:
      '<ul>' +
      '<li><strong>Fractional time periods:</strong> convert to the periodic rate and count periods. $100 at 11.33463% nominal, daily compounding, for 273 days: I<sub>PER</sub> = 11.33463% ÷ 365 = 0.031054% per day → FV = 100 × 1.00031054²⁷³ = <strong>$108.85</strong>.</li>' +
      '<li><strong>Payments and compounding that don’t match</strong> (e.g., annual $100 payments but 10% compounded semiannually): either compound each cash flow separately with the semiannual rate (100 × 1.05⁴ + 100 × 1.05² + 100 = $331.80), or convert to the effective annual rate — EFF% = (1.05)² − 1 = 10.25% — and treat it as an ordinary annuity at 10.25%.</li>' +
      '<li><strong>Comparing investments:</strong> $850 in a bank at 7% nominal, daily compounding, vs. a riskless note costing $850 that pays $1,000 in 456 days. Three equivalent tests: (a) <em>FV</em>: bank grows to 850 × (1 + 0.07/365)⁴⁵⁶ = $927.67 &lt; $1,000 → buy the note; (b) <em>PV</em>: note’s PV at the bank’s daily rate = 1,000 ÷ 1.00019178⁴⁵⁶ = $916.27 &gt; $850 → buy; (c) <em>rate of return</em>: the note earns 13.89% effective (=RATE(456/365, 0, −850, 1000)) vs. the bank’s EFF% of (1 + 0.07/365)³⁶⁵ − 1 = 7.25% → buy. All three methods always agree.</li>' +
      '</ul>' },

    { title: '10. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>Never calculate with the nominal rate</strong> when compounding is more than annual. Convert to the periodic rate (I<sub>NOM</sub> ÷ M) and multiply N by M.</li>' +
      '<li><strong>EFF% &gt; nominal whenever M &gt; 1.</strong> They’re equal only for annual compounding.</li>' +
      '<li><strong>Annuity due = ordinary annuity × (1 + I)</strong> — for both PV and FV. Set BEGIN mode or add the ",1" argument in Excel.</li>' +
      '<li><strong>Perpetuity PV = PMT ÷ I</strong> uses the periodic rate that matches the payment frequency.</li>' +
      '<li><strong>Sign convention:</strong> one of PV/FV (or PMT) must be negative on a calculator or you get an error.</li>' +
      '<li><strong>PV falls as the rate or the time rises;</strong> FV rises with both.</li>' +
      '<li><strong>Interest in an amortization schedule = beginning balance × periodic rate</strong>; principal = payment − interest.</li>' +
      '<li><strong>Excel’s NPV assumes the first cash flow is one period away</strong> — add a Time-0 cash flow separately.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Time value of money', def: 'The principle that dollars received at different times are not equivalent; a dollar today is worth more than a dollar later because it can earn interest.' },
    { term: 'Time line', def: 'A graphical representation of the timing of cash flows: tick marks at period ends, Time 0 = today; rate shown above the line, cash flows below.' },
    { term: 'Compounding', def: 'The process of finding the future value of a payment or series of payments — moving right on the time line.' },
    { term: 'Discounting', def: 'The process of finding the present value of a future payment or series — the reverse of compounding.' },
    { term: 'Future value (FV)', def: 'The amount a payment (or series) will grow to at a future date: FVₙ = PV(1 + I)ᴺ.' },
    { term: 'Present value (PV)', def: 'The value today of a future payment or series: PV = FVₙ ÷ (1 + I)ᴺ; also the beginning amount that grows to a given FV.' },
    { term: 'Opportunity cost rate', def: 'The rate of return available on the best alternative investment of similar risk — the I used in discounting. Varies with risk, maturity, and inflation.' },
    { term: 'Annuity', def: 'A series of equal payments (PMT) for a specified number of periods.' },
    { term: 'Ordinary (deferred) annuity', def: 'An annuity with payments at the END of each period.' },
    { term: 'Annuity due', def: 'An annuity with payments at the BEGINNING of each period; worth (1 + I) times the ordinary annuity in both PV and FV.' },
    { term: 'Perpetuity (consol)', def: 'An annuity with infinite payments; PV = PMT ÷ I.' },
    { term: 'Lump sum', def: 'A single payment occurring now or at a future date, as opposed to an annuity.' },
    { term: 'Uneven cash flow stream', def: 'A series of cash flows whose amounts vary; its PV or FV is the sum of the individual PVs or FVs.' },
    { term: 'Terminal value', def: 'The future value of an uneven cash flow stream.' },
    { term: 'Nominal (quoted, stated) rate', def: 'The annual rate stated in a contract (also called APR); must be paired with the number of compounding periods per year and is never used directly in calculations.' },
    { term: 'Periodic rate', def: 'The rate per compounding period: I_NOM ÷ M. Used for all calculations and shown on time lines.' },
    { term: 'Effective annual rate (EFF%, EAR)', def: '(1 + I_NOM/M)ᴹ − 1: the annual rate that yields the same FV as multi-period compounding. Use to compare different compounding frequencies.' },
    { term: 'APR (annual percentage rate)', def: 'The nominal annual rate actually charged after including lender fees; required disclosure under Truth in Lending. Use to compare loans with different fees.' },
    { term: 'Modified APR', def: 'The APR’s periodic rate compounded: (1 + I_PER)ᴹ − 1 — the true effective annual cost including fees.' },
    { term: 'Amortized loan', def: 'A loan repaid in equal periodic payments that cover interest and gradually retire the principal.' },
    { term: 'Amortization schedule', def: 'A table breaking each payment into interest (beginning balance × rate) and principal (payment − interest), with the balance falling to zero at the end.' },
    { term: 'Growing annuity', def: 'A stream of payments that grows at a constant rate for a set number of years; valued with more complex formulas or a spreadsheet.' },
    { term: 'Calculator sign convention', def: 'Financial calculators solve PV(1+I)ᴺ + PMT × annuity factor + FV = 0, so at least one cash flow must be entered as negative (an outflow).' },
    { term: 'Excel TVM functions', def: 'FV(rate, nper, pmt, pv, [type]), PV(rate, nper, pmt, fv, [type]), NPER, RATE, NPV(rate, values); type = 1 for annuity due.' }
  ],
  quiz: [
    { q: 'You deposit $100 at 10% annual interest. After 3 years you have…',
      options: ['$130.00', '$133.10', '$121.00', '$110.00'],
      answer: 1, explain: 'FV = 100 × 1.10³ = $133.10. The extra $3.10 over simple interest is interest on interest.' },
    { q: 'The present value of $100 due in 3 years at 10% is…',
      options: ['$75.13', '$90.91', '$70.00', '$82.64'],
      answer: 0, explain: 'PV = 100 ÷ 1.10³ = $75.13.' },
    { q: 'Finding the present value of a future cash flow is called…',
      options: ['compounding', 'amortizing', 'discounting', 'annuitizing'],
      answer: 2, explain: 'Discounting moves money left on the time line — the reverse of compounding.' },
    { q: 'At 20% interest, roughly how long does it take money to double?',
      options: ['5 years', '3.8 years', '2 years', '10 years'],
      answer: 1, explain: 'N = ln(2) ÷ ln(1.20) ≈ 3.8 years.' },
    { q: 'The FV of a 3-year $100 ordinary annuity at 10% is…',
      options: ['$300.00', '$331.00', '$364.10', '$248.69'],
      answer: 1, explain: 'FVA = 100 × (1.10³ − 1) ÷ 0.10 = $331.00.' },
    { q: 'The PV of a 3-year $100 ordinary annuity at 10% is…',
      options: ['$248.69', '$273.55', '$300.00', '$331.00'],
      answer: 0, explain: 'PVA = 100 × [1/0.1 − 1/(0.1 × 1.1³)] = $248.69.' },
    { q: 'If the same annuity were an annuity due, its PV would be…',
      options: ['$226.08', '$248.69', '$273.55', '$300.00'],
      answer: 2, explain: 'Annuity due PV = ordinary PV × (1 + I) = 248.69 × 1.10 = $273.55 — each payment comes a year earlier.' },
    { q: 'The PV of a perpetuity paying $100 per year at 10% is…',
      options: ['$1,000', '$100', '$10,000', 'infinite'],
      answer: 0, explain: 'PV = PMT ÷ I = 100 ÷ 0.10 = $1,000.' },
    { q: 'A 12% nominal rate compounded semiannually has an effective annual rate of…',
      options: ['12.00%', '12.36%', '12.68%', '6.00%'],
      answer: 1, explain: 'EFF% = (1 + 0.12/2)² − 1 = 1.1236 − 1 = 12.36%.' },
    { q: 'Which rate should be used in calculations and shown on time lines?',
      options: ['the nominal rate', 'the periodic rate', 'the APR', 'the prime rate'],
      answer: 1, explain: 'Convert the nominal rate to the periodic rate (I_NOM ÷ M) for all calculations.' },
    { q: 'The effective annual rate equals the nominal rate only when…',
      options: ['compounding is daily', 'compounding is annual', 'the rate is below 10%', 'payments are monthly'],
      answer: 1, explain: 'With M = 1 there is no intra-year compounding; for any M > 1, EFF% exceeds the nominal rate.' },
    { q: 'On a $1,000 loan at 10% with annual payments of $402.11, the principal repaid in year 1 is…',
      options: ['$100.00', '$302.11', '$402.11', '$697.89'],
      answer: 1, explain: 'Interest = 1,000 × 0.10 = $100; principal = 402.11 − 100 = $302.11.' },
    { q: 'In an amortization schedule, the interest portion of each payment…',
      options: ['stays constant', 'rises over time', 'falls over time because the balance declines', 'equals the principal portion'],
      answer: 2, explain: 'Interest = beginning balance × rate, and the balance shrinks with each payment.' },
    { q: 'For the same stated rate, which compounding frequency gives the highest future value?',
      options: ['annual', 'semiannual', 'quarterly', 'daily'],
      answer: 3, explain: 'More frequent compounding earns interest on interest more often — daily is highest.' },
    { q: 'APR differs from the quoted nominal rate because APR…',
      options: ['compounds monthly', 'includes lender fees in the cost of the loan', 'ignores the payment schedule', 'is always lower'],
      answer: 1, explain: 'APR is the nominal annual rate computed from actual cash flows including processing fees — use it to compare loans with different fees.' }
  ]
});
