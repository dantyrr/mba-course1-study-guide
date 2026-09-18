window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'fbook-ch4', subject: 'fbook', num: 4, altLabel: 'Course Ch 15',
  title: 'Time Value of Money',
  overview: 'Built from the textbook chapter. The book calls TVM (also known as discounted cash flow analysis) the single most important concept in finance — a dollar expected sooner is worth more than a dollar expected later, and every valuation in the rest of the book rests on it. Eighteen sections take you from a simple time line through amortized mortgages and inflation-adjusted growing annuities, always showing four ways to solve: step-by-step, formula, financial calculator, and spreadsheet.',
  sections: [
    { title: '0. The Map: 18 Learning Outcomes, Four Solution Methods', html:
      '<p>The chapter is long but highly patterned. <strong>Every problem has the same five variables</strong> — N, I, PV, PMT, FV — and the calculator solves one master equation for whichever one you leave blank:</p>' +
      '<div class="formula">(4-2)&nbsp;&nbsp;PV(1 + I)<sup>N</sup> + PMT[((1 + I)<sup>N</sup> − 1) ÷ I] + FV = 0</div>' +
      '<p>Drop the PMT term and you get the lump-sum version (4-2a): PV(1 + I)<sup>N</sup> + FV = 0.</p>' +
      '<p><strong>The four solution methods, and when the book uses each:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Method</th><th>Best for</th></tr>' +
      '<tr><td><strong>Step-by-step</strong> (walk the time line)</td><td>Very simple problems; shows exactly what is happening, but slow.</td></tr>' +
      '<tr><td><strong>Formula</strong></td><td>Single cash flows; too time-consuming when there are many cash flows.</td></tr>' +
      '<tr><td><strong>Financial calculator</strong></td><td>Most problems; portable.</td></tr>' +
      '<tr><td><strong>Spreadsheet</strong></td><td>Many cash flows, irregular streams, or when you want to change an input and see the effect ("sensitivity analysis"). Inputs are <em>visible</em>, so errors are easier to catch and the work is transparent to others.</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>The book’s framing:</strong> TVM is an application of the value equation from Chapters 1 and 2 — a firm’s value is the size, timing, and risk of its free cash flows, discounted at the WACC. It also opens with a practical warning: when you buy a car, the dealer’s <em>finance office</em> is where it gets tricky (rebates vs. zero-interest loans, varying terms). You need TVM to tell which offer is actually cheapest.</div>' },

    { title: '1. Time Lines (4-1)', html:
      '<p>Step one of <em>any</em> time value analysis is drawing a time line, and the book insists even experts use them for complex problems.</p>' +
      '<ul>' +
      '<li><strong>Tick marks are period ends.</strong> Time 0 is today and the beginning of Period 1. Time 1 is the end of Period 1 <em>and</em> the beginning of Period 2. The tick at Time 2 is both the end of Year 2 and the start of Year 3.</li>' +
      '<li><strong>Periods need not be years</strong> — quarters, months, weeks, or days all work.</li>' +
      '<li><strong>Cash flows go directly below the tick marks; the interest rate goes just above the line.</strong> Unknowns get a question mark.</li>' +
      '<li>If the rate <strong>varies</strong>, show a different rate for each period.</li>' +
      '</ul>' +
      '<div class="tip">The book quotes Woody Allen — "90% of success is just showing up" — and adapts it: with time value problems, <strong>90% of success is correctly setting up the time line.</strong></div>' },

    { title: '2. Future Values and Compounding (4-2)', html:
      '<p><span class="term">Compounding</span> is moving <em>right</em> along the time line, from present value to future value. A dollar today beats a dollar later because you can invest it and earn interest.</p>' +
      '<div class="formula">(4-1)&nbsp;&nbsp;FV<sub>N</sub> = PV(1 + I)<sup>N</sup></div>' +
      '<p><strong>The book’s notation</strong> (worth memorizing because it appears everywhere):</p>' +
      '<div class="tablewrap"><table><tr><th>Symbol</th><th>Meaning</th></tr>' +
      '<tr><td><strong>PV</strong></td><td>Present value, or beginning amount.</td></tr>' +
      '<tr><td><strong>FV<sub>N</sub></strong></td><td>Future value after N periods, once interest has been added.</td></tr>' +
      '<tr><td><strong>CF<sub>t</sub></strong></td><td>Cash flow in period t; can be positive or negative. CF<sub>0</sub> = PV.</td></tr>' +
      '<tr><td><strong>I</strong></td><td>Interest rate per year (written I/YR on calculators). Later chapters use "r" instead.</td></tr>' +
      '<tr><td><strong>INT</strong></td><td>Dollars of interest earned during the year = (beginning amount) × I.</td></tr>' +
      '<tr><td><strong>N</strong></td><td>Number of periods.</td></tr>' +
      '</table></div>' +
      '<p><strong>The running example — $100 at 5% for 3 years:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Year</th><th>Beginning</th><th>Interest earned</th><th>Ending</th></tr>' +
      '<tr><td>1</td><td>$100.00</td><td>$5.00</td><td>$105.00</td></tr>' +
      '<tr><td>2</td><td>$105.00</td><td>$5.25</td><td>$110.25</td></tr>' +
      '<tr><td>3</td><td>$110.25</td><td>$5.51</td><td><strong>$115.76</strong></td></tr>' +
      '</table></div>' +
      '<p>Year 2’s interest is higher than Year 1’s because you earned $5 × 0.05 = $0.25 of <strong>interest on interest</strong>. Total interest: $15.76. By formula: 100 × 1.05³ = $115.76. Excel: <code>=FV(0.05,3,0,-100)</code>.</p>' +
      '<p><strong>Simple vs. compound interest (4-2g).</strong> <span class="term">Simple interest</span> is earned only on the principal:</p>' +
      '<div class="formula">Simple interest: FV = PV + PV(I)(N) = 100 + 100(0.05)(3) = $115.00</div>' +
      '<p>That is $0.76 less than the compound result. Most finance uses compound interest, but simple interest still appears in some legal documents.</p>' +
      '<div class="tip"><strong>Interest rate = growth rate.</strong> These concepts apply to anything that grows: sales, population, EPS, your salary. The rate can also be <em>negative</em> — many firms had negative revenue growth in 2021 during the pandemic contraction.</div>' },

    { title: '3. Calculator and Spreadsheet Conventions (4-2c, 4-2d)', html:
      '<p>This section is pure exam insurance — most lost points here are setup errors, not concept errors.</p>' +
      '<div class="tablewrap"><table><tr><th>Setting</th><th>Rule</th><th>What goes wrong if you forget</th></tr>' +
      '<tr><td><strong>Payments per period</strong></td><td>Set to <strong>1</strong> and leave it. Define the period as a month or a year to match the problem.</td><td>Many calculators ship assuming 12 payments/year, silently corrupting every answer.</td></tr>' +
      '<tr><td><strong>End vs. Begin mode</strong></td><td>Most contracts pay at period <em>end</em> → End Mode. Switch to Begin only for annuities due, then <strong>switch back</strong>.</td><td>Left in Begin Mode, every payment earns one extra period of interest and the FV comes out too large.</td></tr>' +
      '<tr><td><strong>Signs</strong></td><td>At least one cash flow must be <strong>negative</strong> and one positive. Outflows (money leaving your pocket) are negative.</td><td>All-positive entries return an error rather than an answer.</td></tr>' +
      '<tr><td><strong>Rate format</strong></td><td>In calculator TVM functions enter <strong>5.25</strong>, not 0.0525. Using Equation 4-2 by hand, enter the <strong>decimal</strong> 0.0525.</td><td>Answers off by orders of magnitude.</td></tr>' +
      '<tr><td><strong>Entering negatives</strong></td><td>Type the number, then press <strong>+/−</strong>. Don’t type "−100" directly.</td><td>Typing the minus first subtracts from whatever is on the display.</td></tr>' +
      '</table></div>' +
      '<p><strong>Why signs flip:</strong> the FV function answers "if I invest this much now, how much will be available to me later?" Investing $100 is an outflow (−100); the $115.76 you withdraw is an inflow (+). If instead you <em>borrow</em>, the signs reverse: the loan is cash into your pocket now and the repayments are cash out later.</p>' +
      '<p><strong>Excel conventions:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Need</th><th>Function</th></tr>' +
      '<tr><td>Future value</td><td><code>=FV(I, N, PMT, PV, [Type])</code></td></tr>' +
      '<tr><td>Present value</td><td><code>=PV(I, N, PMT, FV, [Type])</code></td></tr>' +
      '<tr><td>Interest rate</td><td><code>=RATE(N, PMT, PV, FV, [Type])</code></td></tr>' +
      '<tr><td>Number of periods</td><td><code>=NPER(I, PMT, PV, FV, [Type])</code></td></tr>' +
      '<tr><td>Payment</td><td><code>=PMT(I, N, PV, FV, [Type])</code></td></tr>' +
      '<tr><td>Uneven stream PV</td><td><code>=NPV(I, range)</code></td></tr>' +
      '<tr><td>Effective rate</td><td><code>=EFF(I_NOM, M)</code></td></tr>' +
      '</table></div>' +
      '<p><strong>Type</strong> is omitted or 0 for an ordinary annuity, <strong>1</strong> for an annuity due. Excel also differs from calculators on rate entry: format the cell as Percentage and type 5 (shows 5%), or format as Number and type 0.05 — typing 5 in a Number-formatted cell means <strong>500%</strong>.</p>' +
      '<div class="tip"><strong>Good spreadsheet habit the book teaches:</strong> put every input in a labeled INPUTS section and reference the <em>cells</em> in your formulas, never hard-coded numbers. Then changing one input instantly updates the result — that is sensitivity analysis, and it is how real financial models are built.</div>' },

    { title: '4. Present Values and Discounting (4-3)', html:
      '<p><span class="term">Discounting</span> is moving <em>left</em> along the time line — the reciprocal of compounding. Solve Equation 4-1 for PV:</p>' +
      '<div class="formula">(4-3)&nbsp;&nbsp;PV = FV<sub>N</sub> ÷ (1 + I)<sup>N</sup></div>' +
      '<p><strong>The setup the book uses:</strong> a broker offers a bond paying a guaranteed $115.76 in 3 years. Banks pay 5% on 3-year CDs. That 5% is your <span class="term">opportunity cost</span> — the return on an alternative investment <em>of similar risk</em>. Since $100 in a CD grows to exactly $115.76, <strong>$100 is the most you should pay</strong>; that is the bond’s fair price, also called its intrinsic or fundamental value. Pay less and the bond beats the CD; pay more and the CD wins; pay exactly $100 and you are indifferent.</p>' +
      '<p><strong>How PV behaves (4-3b):</strong> present value <em>falls</em> and approaches zero as the payment date moves further out, and the <strong>higher the interest rate, the faster it falls</strong>. Two illustrations from the book:</p>' +
      '<ul>' +
      '<li>At a 20% discount rate, <strong>$100 due in 40 years is worth less than 7 cents today</strong>.</li>' +
      '<li>Running it the other way, <strong>1 cent would grow to almost $1 million in 100 years at 20%</strong>.</li>' +
      '</ul>' +
      '<div class="tip"><strong>Why this section matters most:</strong> the fundamental goal of financial management is maximizing intrinsic value, and the intrinsic value of any asset — a business, a stock, a bond — <em>is</em> the present value of its expected future cash flows. Present value sits at the heart of every valuation in the rest of the book.</div>' },

    { title: '5. Solving for I and N (4-4, 4-5)', html:
      '<p>With four variables in Equation 4-1, knowing any three gives you the fourth.</p>' +
      '<div class="formula">(4-4)&nbsp;&nbsp;I = (FV<sub>N</sub> ÷ PV)<sup>(1/N)</sup> − 1<br><br>(4-5)&nbsp;&nbsp;N = ln(FV<sub>N</sub> ÷ PV) ÷ ln(1 + I)</div>' +
      '<div class="tablewrap"><table><tr><th>Question</th><th>Setup</th><th>Answer</th></tr>' +
      '<tr><td>A security costs $100 and returns $150 after 10 years. What rate?</td><td>(150 ÷ 100)<sup>0.1</sup> − 1&nbsp;&nbsp;·&nbsp;&nbsp;Calculator: N=10, PV=−100, PMT=0, FV=150 → I/YR<br>Excel: <code>=RATE(10,0,-100,150)</code></td><td><strong>4.14%</strong></td></tr>' +
      '<tr><td>You have $500,000 at 4.5%. How long to reach $1 million?</td><td>ln(2) ÷ ln(1.045)&nbsp;&nbsp;·&nbsp;&nbsp;Excel: <code>=NPER(0.045,0,-500000,1000000)</code></td><td><strong>15.7473 years</strong></td></tr>' +
      '</table></div>' +
      '<p><strong>Note the sign requirement:</strong> when solving for I, PV must be negative (an outflow/investment) and FV positive (an inflow). Enter both as positive — or both negative — and you get an error message instead of an answer.</p>' +
      '<div class="tip"><strong>Self-test practice:</strong> a Treasury bond paying $1,000 in 10 years bought for $585.43 earns <strong>5.5%</strong>; at $550 it earns 6.16%; at $600, 5.24%. Notice the pattern — <em>pay less, earn more</em>. And $1,000 doubles in <strong>11.9 years at 6%</strong> but only 7.27 years at 10%.</div>' },

    { title: '6. Perpetuities (4-6)', html:
      '<p>Some securities pay a fixed amount every period <strong>with no ending date</strong> — a <span class="term">perpetuity</span>. The step-by-step approach is impossible (the cash flows never end), but the formula is the simplest in the chapter:</p>' +
      '<div class="formula">(4-6)&nbsp;&nbsp;PV of a perpetuity = PMT ÷ I</div>' +
      '<p><strong>The book’s rate-sensitivity demonstration</strong> — a $25 perpetual payment:</p>' +
      '<div class="tablewrap"><table><tr><th>Interest rate</th><th>Present value</th></tr>' +
      '<tr><td>2.0%</td><td>25 ÷ 0.020 = $1,250.00</td></tr>' +
      '<tr><td>2.5%</td><td>25 ÷ 0.025 = $1,000.00</td></tr>' +
      '<tr><td>3.0%</td><td>25 ÷ 0.030 = $833.33</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>The general principle this demonstrates:</strong> when interest rates change, <strong>present value moves inversely</strong> — PV falls when rates rise and rises when rates fall. This is exactly why bond prices move opposite to interest rates, a point the chapter previews here and develops later.</div>' },

    { title: '7. Annuities: Ordinary vs. Due (4-7 to 4-10)', html:
      '<p>An <span class="term">annuity</span> is a series of <strong>equal payments at fixed intervals</strong>. Both conditions must hold — constant payments and a fixed number of periods — or it is not an annuity.</p>' +
      '<div class="tablewrap"><table><tr><th></th><th>Ordinary (deferred) annuity</th><th>Annuity due</th></tr>' +
      '<tr><td><strong>Payments occur</strong></td><td>End of each period</td><td>Beginning of each period</td></tr>' +
      '<tr><td><strong>Real-world examples</strong></td><td>Mortgages, car loans, student loans</td><td>Rental leases, life insurance premiums, lottery payoffs</td></tr>' +
      '<tr><td><strong>Calculator</strong></td><td>End Mode</td><td>Begin Mode</td></tr>' +
      '<tr><td><strong>Excel Type</strong></td><td>0 or omitted</td><td>1</td></tr>' +
      '</table></div>' +
      '<p>The book notes annuities due are less common, so <strong>assume ordinary unless told otherwise</strong>.</p>' +
      '<div class="formula">(4-7)&nbsp;&nbsp;FVA<sub>N</sub> = PMT[((1 + I)<sup>N</sup> − 1) ÷ I]<br>(4-9)&nbsp;&nbsp;PVA<sub>N</sub> = PMT[1/I − 1/(I(1 + I)<sup>N</sup>)]<br><br>(4-8)&nbsp;&nbsp;FVA<sub>due</sub> = FVA<sub>ordinary</sub>(1 + I)<br>(4-10)&nbsp;&nbsp;PVA<sub>due</sub> = PVA<sub>ordinary</sub>(1 + I)</div>' +
      '<p><strong>The running example — $100 per year for 3 years at 5%:</strong></p>' +
      '<div class="tablewrap"><table><tr><th></th><th>Ordinary annuity</th><th>Annuity due</th></tr>' +
      '<tr><td><strong>Future value</strong></td><td>$315.25</td><td>315.25 × 1.05 = <strong>$331.01</strong></td></tr>' +
      '<tr><td><strong>Present value</strong></td><td>$272.32</td><td>272.32 × 1.05 = <strong>$285.94</strong></td></tr>' +
      '</table></div>' +
      '<p><strong>Why the annuity due is always worth more:</strong> every payment arrives one period earlier, so each is compounded one <em>extra</em> period (raising FV) and discounted one <em>fewer</em> period (raising PV). Multiplying by (1 + I) captures exactly that one-period shift.</p>' +
      '<p><strong>Reading the FV of an ordinary annuity:</strong> with 3 payments, the first earns interest for 2 periods, the second for 1, and the <strong>last earns nothing</strong> because it arrives at the end of the annuity’s life. (Self-test: in a 5-payment, 10% annuity of $100, the first payment earns interest 4 years and grows to $146.41; the fifth earns 0 years and stays $100.)</p>' +
      '<div class="tip"><strong>Calculator tip:</strong> when solving for an annuity’s FV, enter <strong>PV = 0</strong> (you start with nothing); when solving for its PV, enter <strong>FV = 0</strong>. Forgetting to zero out the unused variable is a top-three error.</div>' },

    { title: '8. Finding an Annuity’s PMT, N, or I (4-11)', html:
      '<p>Five variables — N, I, PMT, PV, FV — so knowing four gives the fifth. Finding N or I by hand requires tedious trial and error, so the book uses only the calculator and spreadsheet for those.</p>' +
      '<p><strong>The savings-goal example: accumulate $10,000 in 5 years at 6%.</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Question</th><th>Ordinary annuity</th><th>Annuity due</th></tr>' +
      '<tr><td>Required annual deposit (PMT)</td><td><strong>$1,773.96</strong></td><td><strong>$1,673.55</strong></td></tr>' +
      '<tr><td>If you can only save $1,200/yr, how long? (N)</td><td>6.96 years</td><td>6.63 years</td></tr>' +
      '<tr><td>If you save $1,200/yr for exactly 5 years, what rate? (I)</td><td colspan="2"><strong>25.78%</strong></td></tr>' +
      '</table></div>' +
      '<p><strong>A useful shortcut the book points out:</strong> the annuity-due payment is the ordinary payment <em>divided</em> by (1 + I): 1,773.96 ÷ 1.06 = $1,673.55. (Note the direction — for <em>values</em> you multiply by (1 + I); for the required <em>payment</em> you divide, because earlier payments do more work.)</p>' +
      '<div class="tip"><strong>The book’s reality check on that 25.78%:</strong> earning such a return would mean high-risk stocks, cryptocurrency speculation, or a casino — with a high probability of ending up with nothing. The sensible responses are to <strong>save more, lower the target, or extend the horizon</strong>.</div>' +
      '<div class="tip"><strong>The power of compound interest (boxed feature).</strong> A 26-year-old wanting $1 million at 65, earning 10%, must invest <strong>$2,491 per year</strong>. At 8% it takes $4,185; at 12%, only $1,462. Wait until 40 and you need <strong>$10,168</strong> per year at 10%; wait until 50 and earn 8% and it becomes <strong>$36,830</strong>. And with 3% inflation over 39 years, that $1 million is worth only $315,754 in today’s dollars — about $20,605 a year before taxes if you live 20 more years. <strong>Start early.</strong></div>' },

    { title: '9. Uneven (Irregular) Cash Flow Streams (4-12 to 4-14)', html:
      '<p>When cash flows differ period to period you have an <span class="term">uneven</span> or <span class="term">irregular cash flow stream</span>. The book reserves <strong>PMT</strong> for constant payments and <strong>CF<sub>t</sub></strong> for varying ones.</p>' +
      '<div class="formula">(4-11)&nbsp;&nbsp;PV = CF<sub>1</sub>/(1+I)<sup>1</sup> + CF<sub>2</sub>/(1+I)<sup>2</sup> + … + CF<sub>N</sub>/(1+I)<sup>N</sup><br><br>(4-12)&nbsp;&nbsp;FV = CF<sub>0</sub>(1+I)<sup>N</sup> + CF<sub>1</sub>(1+I)<sup>N−1</sup> + … + CF<sub>N</sub></div>' +
      '<p><strong>Two categories — and they are solved differently:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Type</th><th>Example</th><th>How to solve</th><th>Book’s answer</th></tr>' +
      '<tr><td><strong>Annuity + final lump sum</strong></td><td>Bonds: a 5-year, 12% annuity of $100 plus $1,000 at the end</td><td>Use all <strong>five TVM keys</strong> — the only difference from a plain annuity is a nonzero FV. Excel: <code>=PV(0.12,5,100,1000)</code></td><td><strong>$927.90</strong></td></tr>' +
      '<tr><td><strong>Truly irregular</strong></td><td>0, 100, 300, 300, 300, 500 at 12%</td><td>The TVM keys will not work. Use the <strong>cash flow register</strong> (CFLO), enter CF<sub>0</sub>…CF<sub>N</sub> in order, set I/YR, press <strong>NPV</strong>. Excel: <code>=NPV(rate, range)</code></td><td><strong>$1,016.35</strong></td></tr>' +
      '</table></div>' +
      '<p>The sum of a stream’s present values including any Time-0 flow is its <span class="term">net present value (NPV)</span>. The future value of that same stream is <strong>$1,791.15</strong> — found with an NFV key, or as NPV(1 + I)<sup>N</sup> = 1,016.35 × 1.12⁵.</p>' +
      '<p><strong>Solving for the rate (4-14):</strong> the discount rate that makes the PV of a stream equal its cost is the <span class="term">internal rate of return (IRR)</span>. For the same stream bought for $1,000 at Time 0, <strong>IRR = 12.55%</strong>. There is no simple step-by-step method — it requires trial and error, so always use a calculator or spreadsheet. Once the cash flows are entered you can get <em>both</em> NPV and IRR, which is typically what an investment decision needs.</p>' +
      '<div class="tip"><strong>Two traps the book calls out explicitly.</strong><br>(1) <strong>Clear the cash flow register</strong> before a new problem. Numbers stay in memory — run an 8-flow problem then a 4-flow problem and the calculator adds the leftovers, silently giving a wrong answer.<br>(2) <strong>Calculator and Excel handle Time 0 differently.</strong> A financial calculator’s NPV <em>includes</em> CF<sub>0</sub>; Excel’s NPV starts at Time 1, so you must <strong>add the Time-0 cash flow separately</strong>. But Excel’s <strong>IRR</strong> function <em>does</em> require all cash flows including Time 0.</div>' },

    { title: '10. Four Types of Interest Rates (4-15a)', html:
      '<p>Once compounding happens more than once a year, four different rates are floating around and confusing them is the most common source of wrong answers.</p>' +
      '<div class="tablewrap"><table><tr><th>Rate</th><th>Definition</th><th>When to use it</th></tr>' +
      '<tr><td><span class="term">Nominal (quoted) rate, I<sub>NOM</sub></span></td><td>The rate quoted by banks, brokers, and lenders. Meaningless without the number of compounding periods per year.</td><td><strong>Never</strong> on a time line and <strong>never</strong> as a calculator input — unless compounding is annual.</td></tr>' +
      '<tr><td><span class="term">Periodic rate, I<sub>PER</sub></span></td><td>(4-13) I<sub>PER</sub> = I<sub>NOM</sub> ÷ M — the rate charged or paid each period.</td><td><strong>All calculations and all time lines.</strong></td></tr>' +
      '<tr><td><span class="term">Effective annual rate, EFF% (EAR / AER)</span></td><td>(4-15) EFF% = (1 + I<sub>NOM</sub>/M)<sup>M</sup> − 1</td><td>Rarely used in calculations — but <strong>required to compare</strong> loans or investments with <em>different compounding frequencies</em>.</td></tr>' +
      '<tr><td><span class="term">Annual percentage rate (APR)</span></td><td>Nominal annual rate after including lender <strong>fees</strong>; required by the Truth in Lending provisions of the Consumer Credit Protection Act (1968).</td><td>Comparing loans with different fee structures.</td></tr>' +
      '</table></div>' +
      '<div class="formula">(4-14)&nbsp;&nbsp;FV<sub>N</sub> = PV(1 + I<sub>NOM</sub>/M)<sup>M×N</sup></div>' +
      '<p><strong>Worked:</strong> $100 at 12% nominal compounded <em>quarterly</em> for 2 years → I<sub>PER</sub> = 3%, periods = 8 → 100 × 1.03⁸ = <strong>$126.68</strong>.</p>' +
      '<p><strong>The comparison that shows why EFF% matters:</strong> a bank loan at 12% compounded quarterly has EFF% = 1.03⁴ − 1 = <strong>12.5509%</strong>. A credit card at 1% per month has EFF% = 1.01¹² − 1 = <strong>12.6825%</strong>. Same 12% nominal rate, but the credit card costs more — because the first payment is due after 1 month instead of 3.</p>' },

    { title: '11. APR, Add-On Interest, and Payday Loans (4-15a continued)', html:
      '<p>The book pushes past the textbook definition of APR to show how quoted rates hide true costs.</p>' +
      '<p><strong>Example 1 — a car loan with a processing fee.</strong> Borrow $5,172.50 at a 6% nominal rate, $100/month for 60 months, plus a separate $120 processing fee.</p>' +
      '<ol>' +
      '<li>Ignoring the fee, EFF% = (1 + 0.06/12)¹² − 1 = <strong>6.17%</strong> — but this understates the true cost.</li>' +
      '<li>Find the monthly rate on the <em>actual</em> cash received: <code>=RATE(60, −100, 5172.50 − 120, 0)</code> = <strong>0.5817%</strong> per month (above the 0.5% nominal monthly rate).</li>' +
      '<li><strong>APR = 12 × 0.5817% = 6.98%.</strong></li>' +
      '<li>But APR does not compound. Compounding it: (1.005817)¹² − 1 = <strong>7.21%</strong> — the truly comparable annual cost.</li>' +
      '</ol>' +
      '<p><strong>Example 2 — add-on interest.</strong> <span class="term">Add-on interest</span> multiplies the amount borrowed by the quoted rate, divides by the number of payments, and starts payments immediately. Buy $3,000 of appliances at a quoted 8% add-on for 1 year:</p>' +
      '<ul>' +
      '<li>Total interest = 3,000 × 0.08 = $240 → total loan = $3,240 → payment = 3,240 ÷ 12 = <strong>$270/month, first payment at purchase</strong> (an annuity due).</li>' +
      '<li>Solve in Begin Mode (N=12, PV=3000, PMT=−270, FV=0): periodic rate = 1.4313% → <strong>APR = 17.1758%</strong>, and <strong>EFF% = 18.5945%</strong>.</li>' +
      '<li>The "8%" loan actually costs more than twice that. The book’s advice: <strong>be wary of loan offers and do the math yourself.</strong></li>' +
      '</ul>' +
      '<div class="tip"><strong>Payday lending (boxed feature).</strong> Fees run about $15–$17 per $100 borrowed. A typical $350 loan carries a ~$56 fee repaid in 2 weeks. Periodic rate = 56 ÷ 350 = <strong>16% for two weeks</strong>. APR = 16% × 26 = <strong>416%</strong>. But the effective rate is far worse: (1.16)²⁶ − 1 ≈ <strong>4,641%</strong>. This is the sharpest illustration in the chapter of why APR understates cost.</div>' },

    { title: '12. Frequency of Compounding and Fractional Periods (4-15b, 4-16)', html:
      '<p><strong>More frequent compounding always raises FV and EFF%</strong> — you earn interest on interest more often. But the gains are not linear: the <strong>biggest jump is annual → semiannual</strong>, and moving from monthly to daily has relatively little impact. (Pushed to the limit you get <em>continuous compounding</em>, covered in a web extension.)</p>' +
      '<p><strong>Why it matters practically:</strong> virtually all bonds pay interest semiannually, most stocks pay dividends quarterly, most mortgages/student loans/auto loans are monthly, and most money market funds pay daily.</p>' +
      '<p><strong>Fractional time periods (4-16).</strong> Deposit $100 at a 10% nominal rate, compounded daily on a 365-day year. How much after 9 months?</p>' +
      '<div class="formula">I<sub>PER</sub> = 0.10 ÷ 365 = 0.000273973 per day<br>Days = (9/12) × 365 = 273.75 ≈ 274<br>FV = 100(1.000273973)<sup>274</sup> = <strong>$107.79</strong></div>' +
      '<p><strong>Compare with simple interest</strong> on the same 274 days: 100 × 0.10 × (274/365) = <strong>$7.51</strong>, so you would owe $107.51. The book notes this is how most banks compute loan interest — except they usually collect monthly, which raises the EFF% and the total interest paid.</p>' +
      '<div class="tip"><strong>Watch the day-count convention.</strong> A self-test borrows $1 million at 9% simple interest: a 30-day month on a <strong>360-day year</strong> costs $7,500.00, but on a <strong>365-day year</strong> costs $7,397.26. Always check which year the lender uses.</div>' },

    { title: '13. Amortized Loans (4-17)', html:
      '<p>An <span class="term">amortized loan</span> is repaid in equal installments — auto loans, mortgages, student loans, many business loans. Each payment splits into <strong>interest and principal repayment</strong>, and the <span class="term">amortization schedule</span> tracks the split and the declining balance.</p>' +
      '<p><strong>The mechanics, in order:</strong></p>' +
      '<ol>' +
      '<li><strong>Find the payment</strong> so the PV of all payments equals the loan. ($100,000 at 6% for 5 years → <code>=PMT(0.06,5,100000,0)</code> = <strong>$23,739.64</strong>.)</li>' +
      '<li><strong>Interest</strong> for the period = beginning balance × periodic rate.</li>' +
      '<li><strong>Principal</strong> = payment − interest.</li>' +
      '<li><strong>Ending balance</strong> = beginning balance − principal. Repeat; the final balance must be <strong>zero</strong>.</li>' +
      '</ol>' +
      '<p>Interest is high in early periods and declines as the balance falls; the principal portion grows correspondingly. For taxes, the borrower deducts the interest component and the lender reports it as taxable income.</p>' +
      '<p><strong>The mortgage example — $250,000, 30 years, 6%.</strong> Convert to monthly: N = 360, I = 0.5%.</p>' +
      '<div class="tablewrap"><table><tr><th>Question</th><th>Answer</th></tr>' +
      '<tr><td>Monthly payment</td><td><strong>$1,498.88</strong></td></tr>' +
      '<tr><td>Remaining balance after 12 payments</td><td>$246,929.93</td></tr>' +
      '<tr><td>Principal repaid in year 1</td><td>250,000 − 246,929.93 = $3,070.07</td></tr>' +
      '<tr><td>Total payments in year 1</td><td>12 × 1,498.88 = $17,986.56</td></tr>' +
      '<tr><td>Interest paid in year 1</td><td>17,986.56 − 3,070.07 = <strong>$14,916.49</strong></td></tr>' +
      '<tr><td>Share of year-1 payments going to interest</td><td><strong>about 83%</strong></td></tr>' +
      '<tr><td>Total payments over 30 years</td><td>360 × 1,498.88 ≈ $539,597</td></tr>' +
      '<tr><td>Total interest over 30 years</td><td>539,597 − 250,000 = <strong>$289,597</strong></td></tr>' +
      '</table></div>' +
      '<p><strong>The 15-year comparison</strong> (same 6% rate): payment rises to $2,109.64, but total payments fall to ≈$379,736 and <strong>total interest drops to $129,736</strong> — a $159,861 saving. Raising the monthly payment dramatically cuts both total interest and payoff time.</p>' +
      '<div class="tip"><strong>Auto loans are not quite regular amortized loans (4-17d).</strong> A normal loan computes monthly interest as beginning balance × periodic rate. Many auto loans instead allocate total interest by a <em>predefined percentage each month</em> (summing to 100%), front-loading the interest. Total interest is the same, but in every month your <strong>balance is higher</strong> than under regular amortization — so you owe more if you sell the car early, and your early-year interest deductions are smaller.</div>' +
      '<div class="tip"><strong>Option reset ARMs and the 2007 recession (boxed feature).</strong> Some adjustable-rate mortgages let borrowers pay only <em>half</em> the first month’s interest; the unpaid interest was added to the balance, which therefore <em>grew</em> every month. On a $325,000 loan at 7%, the initial payment was $947.92. Once the balance passed 110% of the original ($357,500) — after about 32 months — the loan reset to fully amortize the now-larger balance over the remaining 328 months, jumping the payment to <strong>$2,453.94</strong>. That is a 2.6× increase <em>even with no rate change</em>. Mass resets beginning in 2007 produced a wave of defaults.</div>' },

    { title: '14. Growing Annuities (4-18)', html:
      '<p>The name is an oxymoron — an annuity has constant payments — but a <span class="term">growing annuity</span> is a series of payments that <strong>grow at a constant rate</strong>. The main use is financial planning where withdrawals must keep pace with inflation to hold your standard of living constant.</p>' +
      '<p><strong>The key move: work in <em>real</em> (inflation-adjusted) terms.</strong></p>' +
      '<div class="formula">(4-16)&nbsp;&nbsp;Real rate = r<sub>r</sub> = [(1 + r<sub>NOM</sub>) ÷ (1 + Inflation)] − 1</div>' +
      '<p>Note this is <em>not</em> simply nominal minus inflation. With 6% nominal and 3% inflation: 1.06 ÷ 1.03 − 1 = <strong>2.9126%</strong>, not 3%.</p>' +
      '<p><strong>Example 1 — constant real retirement income.</strong> A 65-year-old with a $1 million nest egg expects to live 20 more years, earn 6% nominal, and face 3% inflation, and wants constant purchasing power.</p>' +
      '<ul>' +
      '<li>Compute the real rate: <strong>2.9126214%</strong>.</li>' +
      '<li>Solve as an <strong>annuity due</strong> (Begin Mode): N=20, I/YR=2.9126214, PV=−1,000,000, FV=0 → PMT = <strong>$64,786.88</strong>. That is the withdrawal today; later withdrawals grow 3% per year.</li>' +
      '<li>For <em>end-of-year</em> withdrawals: End Mode gives $66,673.87, but that is in beginning-of-year terms — inflate it one year: 66,673.87 × 1.03 = <strong>$68,674.09</strong>.</li>' +
      '</ul>' +
      '<p><strong>Example 2 — initial deposit to reach a future sum.</strong> Accumulate $100,000 in 10 years with 10 deposits (first one today) growing at 2% inflation, earning 6%.</p>' +
      '<ul>' +
      '<li>Real rate = 1.06 ÷ 1.02 − 1 = <strong>3.9215686%</strong>.</li>' +
      '<li>Restate the target in real dollars: 100,000 ÷ 1.02¹⁰ = <strong>$82,034.83</strong>.</li>' +
      '<li>Begin Mode: N=10, I/YR=3.9215686, PV=0, FV=82,034.83 → PMT = <strong>$6,598.87</strong>.</li>' +
      '</ul>' +
      '<div class="tip"><strong>The rule that makes these problems work:</strong> express <em>all three</em> of I/YR, FV, and PMT in <strong>real</strong> terms — never mix real and nominal. Three approaches exist (a spreadsheet amortization-style model with Goal Seek, the real-rate calculator method above, or a complicated closed-form formula); the book focuses on the first two.</div>' },

    { title: '15. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>Draw the time line first.</strong> Most errors are setup errors, not math errors.</li>' +
      '<li><strong>Never calculate with the nominal rate</strong> when M > 1. Convert: I<sub>PER</sub> = I<sub>NOM</sub>/M and periods = N × M.</li>' +
      '<li><strong>EFF% > nominal whenever M > 1</strong>; they are equal only under annual compounding.</li>' +
      '<li><strong>Annuity due = ordinary × (1 + I)</strong> for PV and FV — but the required <em>payment</em> is ordinary <strong>÷</strong> (1 + I).</li>' +
      '<li><strong>Reset Begin Mode back to End Mode</strong> after an annuity-due problem.</li>' +
      '<li><strong>Zero out the unused variable</strong> (PMT = 0 for lump sums; PV = 0 or FV = 0 for pure annuities).</li>' +
      '<li><strong>Signs must differ</strong> — at least one inflow and one outflow, or you get an error.</li>' +
      '<li><strong>Clear the cash flow register</strong> between irregular-stream problems.</li>' +
      '<li><strong>Excel NPV starts at Time 1</strong> (add CF<sub>0</sub> yourself); <strong>Excel IRR includes Time 0</strong>.</li>' +
      '<li><strong>Perpetuity = PMT ÷ I</strong>, and PV moves <em>inversely</em> with rates.</li>' +
      '<li><strong>Amortization: interest = beginning balance × periodic rate</strong>; principal = payment − interest; final balance = 0.</li>' +
      '<li><strong>Real rate is a ratio, not a subtraction:</strong> (1 + nominal)/(1 + inflation) − 1.</li>' +
      '<li><strong>APR excludes compounding; EFF% includes it.</strong> Add-on and payday quotes are far below true cost.</li>' +
      '</ul>' },

    { title: '16. Self-Test Answer Bank (worked values to check yourself)', html:
      '<p>Every numeric answer the chapter supplies, grouped so you can drill quickly.</p>' +
      '<div class="tablewrap"><table><tr><th>Problem</th><th>Answer</th></tr>' +
      '<tr><td>FV of $100, 5 years, 10%</td><td>$161.05</td></tr>' +
      '<tr><td>$2,000 CD, 3 years, at 4% / 5% / 6% / 20%</td><td>$2,249.73 / $2,315.25 / $2,382.03 / $3,456.00</td></tr>' +
      '<tr><td>$100M sales growing 8% for 10 years / declining 8%</td><td>$215.89M / $43.44M</td></tr>' +
      '<tr><td>$1 for 100 years at 5% / 10%</td><td>$131.50 / $13,780.61</td></tr>' +
      '<tr><td>PV of $2,249.73 due in 3 years at 4% / in 5 years at 4% / in 5 years at 6%</td><td>$2,000 / $1,849.11 / $1,681.13</td></tr>' +
      '<tr><td>PV of $1M due in 100 years at 5% / 20%</td><td>$7,604.49 / $0.0121</td></tr>' +
      '<tr><td>Rate on $1,000 bond in 10 years bought at $585.43 / $550 / $600</td><td>5.5% / 6.16% / 5.24%</td></tr>' +
      '<tr><td>EPS $1.00 → $1.47 over 5 years</td><td>8%</td></tr>' +
      '<tr><td>Years to double $1,000 at 6% / 10%</td><td>11.9 / 7.27</td></tr>' +
      '<tr><td>EPS $2.00 → $3.00 at 5.2%</td><td>8 years</td></tr>' +
      '<tr><td>Perpetuity of $1,000 at 5%</td><td>$20,000</td></tr>' +
      '<tr><td>$2,500/yr for 5 years at 4% / 6% / 3% (ordinary)</td><td>$13,540.81 / $14,092.73 / $13,272.84</td></tr>' +
      '<tr><td>Same as annuity due at 4%</td><td>$14,082.44</td></tr>' +
      '<tr><td>PVA of 10 × $100 at 10% / 4% / 0%</td><td>$614.46 / $811.09 / $1,000.00</td></tr>' +
      '<tr><td>Same as annuities due</td><td>$675.90 / $843.53 / $1,000.00</td></tr>' +
      '<tr><td>$100/yr for 10 years at 8%: ordinary / due</td><td>$671.01 / $724.69</td></tr>' +
      '<tr><td>$100,000 at 7%, 10 withdrawals: end / beginning</td><td>$14,237.75 / $13,306.31</td></tr>' +
      '<tr><td>$100,000 at 7% withdrawing $10,000/yr / at 0% / withdrawing $7,000</td><td>17.8 years / 10 years / forever</td></tr>' +
      '<tr><td>$100,000 now vs. 12-year annuity of $12,000 → implied rate</td><td>6.11%</td></tr>' +
      '<tr><td>10-year $10,000 annuity due sold for $60,000 → buyer’s return; fair price at 6%</td><td>13.70% / $78,016.92</td></tr>' +
      '<tr><td>5-yr $100 annuity + $500 at year 5, 6% / 10-yr version + $500</td><td>$794.87 / $1,015.21</td></tr>' +
      '<tr><td>PV of 0, 100, 200, 0, 400 at 8%</td><td>$558.07</td></tr>' +
      '<tr><td>FV of $100, $150, $300 at 15%</td><td>$604.75</td></tr>' +
      '<tr><td>$465 cost → $100 × 4 years + $200 extra at year 4</td><td>9.05%</td></tr>' +
      '<tr><td>$465 cost → $100, $200, $300</td><td>11.71%</td></tr>' +
      '<tr><td>FV of $100, 3 years, 8% annual / monthly</td><td>$125.97 / $127.02</td></tr>' +
      '<tr><td>PV of $100 due in 3 years, 8% annual / monthly</td><td>$79.38 / $78.73</td></tr>' +
      '<tr><td>Credit card 18% APR, monthly → EFF%</td><td>19.56%</td></tr>' +
      '<tr><td>$1M at 9% simple, 30-day month: 360-day year / 365-day year</td><td>$7,500.00 / $7,397.26</td></tr>' +
      '<tr><td>$1,000 at 7% daily (365) → EFF%; withdrawal after 7 months</td><td>7.250098% / $1,041.67</td></tr>' +
      '<tr><td>$100,000 at 6% over 60 monthly payments; first payment split</td><td>$1,933.28; $500 interest + $1,433.28 principal</td></tr>' +
      '<tr><td>$30,000 student loan at 8%, 3 annual payments</td><td>PMT $11,641.01; interest $2,400; principal $9,241.01; balance $20,758.99</td></tr>' +
      '<tr><td>Real rate when nominal 10% and inflation 5%</td><td>4.7619%</td></tr>' +
      '</table></div>' }
  ],
  terms: [
    { term: 'Time value of money (TVM)', def: 'Also called discounted cash flow (DCF) analysis; the book calls it the single most important concept in finance because a dollar expected sooner is worth more than one expected later.' },
    { term: 'Time line', def: 'A diagram of a problem: tick marks at period ends (Time 0 = today), cash flows below the line, interest rate above, question marks for unknowns.' },
    { term: 'Compounding', def: 'Moving right on a time line — finding the future value of a present amount.' },
    { term: 'Discounting', def: 'Moving left on a time line — finding the present value of a future amount; the reverse of compounding.' },
    { term: 'FV of a single payment', def: 'FV_N = PV(1 + I)^N. $100 at 5% for 3 years = $115.76.' },
    { term: 'PV of a single payment', def: 'PV = FV_N ÷ (1 + I)^N. $115.76 due in 3 years at 5% = $100.' },
    { term: 'Interest on interest', def: 'Why year 2 earns more than year 1: the $5 of first-year interest itself earns $0.25 at 5%.' },
    { term: 'Simple interest', def: 'Interest on principal only: FV = PV + PV(I)(N). $100 at 5% for 3 years = $115.00, versus $115.76 compounded.' },
    { term: 'Opportunity cost rate', def: 'The return available on an alternative investment of similar risk; the discount rate in a PV calculation.' },
    { term: 'Intrinsic (fundamental) value', def: 'The present value of an asset’s expected future cash flows — its "fair price."' },
    { term: 'Finding the interest rate', def: 'I = (FV_N ÷ PV)^(1/N) − 1. $100 growing to $150 in 10 years = 4.14%.' },
    { term: 'Finding the number of periods', def: 'N = ln(FV_N ÷ PV) ÷ ln(1 + I). $500,000 to $1,000,000 at 4.5% = 15.7473 years.' },
    { term: 'Perpetuity', def: 'A fixed payment continuing forever; PV = PMT ÷ I. $25 at 2.5% = $1,000.' },
    { term: 'Inverse rate–value relationship', def: 'When interest rates rise, present values fall; when rates fall, present values rise. Demonstrated with the perpetuity and underlying bond pricing.' },
    { term: 'Annuity', def: 'A series of equal payments at fixed intervals. Requires constant payments AND a fixed number of periods.' },
    { term: 'Ordinary (deferred) annuity', def: 'Payments at the END of each period — mortgages, car loans, student loans. Calculator: End Mode; Excel Type 0.' },
    { term: 'Annuity due', def: 'Payments at the BEGINNING of each period — rental leases, insurance premiums, lottery payoffs. Calculator: Begin Mode; Excel Type 1.' },
    { term: 'FV of an ordinary annuity', def: 'FVA_N = PMT[((1 + I)^N − 1) ÷ I]. $100 for 3 years at 5% = $315.25.' },
    { term: 'PV of an ordinary annuity', def: 'PVA_N = PMT[1/I − 1/(I(1 + I)^N)]. $100 for 3 years at 5% = $272.32.' },
    { term: 'Annuity due conversion', def: 'PVA_due = PVA_ordinary(1 + I) and FVA_due = FVA_ordinary(1 + I) — each payment shifts one period earlier. ($285.94 and $331.01.)' },
    { term: 'Annuity due payment shortcut', def: 'The required payment for an annuity due is the ordinary payment DIVIDED by (1 + I): $1,773.96 ÷ 1.06 = $1,673.55.' },
    { term: 'Which payment earns no interest', def: 'In an ordinary annuity the LAST payment earns nothing — it arrives at the end of the annuity’s life.' },
    { term: 'Uneven (irregular) cash flow stream', def: 'Cash flows that vary period to period; denoted CF_t rather than PMT. PV = sum of each flow discounted separately.' },
    { term: 'Annuity plus final lump sum', def: 'A bond-like stream solved with all five TVM keys (nonzero FV). 5-year 12% annuity of $100 plus $1,000 = $927.90.' },
    { term: 'Net present value (NPV)', def: 'The present value of a stream’s future cash flows net of any Time-0 cash flow. The irregular example: $1,016.35 at 12%.' },
    { term: 'Internal rate of return (IRR)', def: 'The discount rate that makes a stream’s PV equal its cost; requires trial and error, so use a calculator or spreadsheet. Example: 12.55%.' },
    { term: 'Cash flow register (CFLO)', def: 'The calculator menu for irregular streams; enter CF_0 through CF_N in order. Must be CLEARED between problems or leftover flows corrupt the answer.' },
    { term: 'Excel NPV vs. IRR on Time 0', def: 'Excel’s NPV begins at Time 1 (add CF_0 separately); Excel’s IRR requires all cash flows including Time 0. A financial calculator’s NPV includes CF_0.' },
    { term: 'Nominal (quoted) rate, I_NOM', def: 'The rate quoted by lenders; meaningless without M. Never shown on a time line or entered in a calculator unless compounding is annual.' },
    { term: 'Periodic rate, I_PER', def: 'I_NOM ÷ M — the rate per compounding period. Used for ALL calculations and time lines.' },
    { term: 'Effective annual rate (EFF%, EAR, AER)', def: '(1 + I_NOM/M)^M − 1: the annual rate producing the same result as M-times-per-year compounding. Required to compare different compounding frequencies.' },
    { term: 'Annual percentage rate (APR)', def: 'The nominal annual rate after including lender fees; mandated by the Truth in Lending provisions of the Consumer Credit Protection Act of 1968. Does not compound.' },
    { term: 'FV with non-annual compounding', def: 'FV_N = PV(1 + I_NOM/M)^(M×N). $100 at 12% quarterly for 2 years = $126.68.' },
    { term: 'Bank loan vs. credit card comparison', def: '12% compounded quarterly = 12.5509% EFF%; 1% per month = 12.6825% EFF%. Same nominal rate, higher effective cost for monthly payments.' },
    { term: 'Add-on interest', def: 'Total interest = amount borrowed × quoted rate, divided over the payments with the first due immediately. An 8% add-on on $3,000 has an APR of 17.1758% and EFF% of 18.5945%.' },
    { term: 'Payday loan economics', def: 'A ~$56 fee on a $350 two-week loan is a 16% periodic rate → 416% APR → about 4,641% effective annual rate.' },
    { term: 'Frequency of compounding effect', def: 'FV and EFF% rise with more frequent compounding; the biggest jump is annual → semiannual, while monthly → daily changes little.' },
    { term: 'Fractional time periods', def: 'Use the periodic rate and the exact number of periods: $100 at 10% daily for 274 days = $107.79.' },
    { term: 'Day-count convention', def: '360-day vs. 365-day year changes simple interest: $1M at 9% for 30 days is $7,500.00 (360) or $7,397.26 (365).' },
    { term: 'Amortized loan', def: 'A loan repaid in equal installments; each payment is part interest, part principal, with the balance reaching zero.' },
    { term: 'Amortization schedule', def: 'Table showing each payment split into interest (beginning balance × periodic rate) and principal, plus the remaining balance.' },
    { term: 'Mortgage interest front-loading', def: 'On a $250,000, 30-year, 6% mortgage ($1,498.88/month), about 83% of first-year payments go to interest — $14,916.49 of $17,986.56.' },
    { term: 'Shortening the term', def: 'The same $250,000 at 6% over 15 years costs $2,109.64/month but total interest falls from $289,597 to $129,736.' },
    { term: 'Auto loan interest allocation', def: 'Many auto loans allocate total interest by predefined monthly percentages rather than by beginning balance, front-loading interest so the balance stays higher than under regular amortization.' },
    { term: 'Option reset ARM', def: 'A mortgage allowing payments below the interest due, so the balance grows until it hits 110% of the original and resets — the $325,000 example jumps from $947.92 to $2,453.94 per month.' },
    { term: 'Growing annuity', def: 'A stream of payments growing at a constant rate; used for inflation-adjusted retirement planning.' },
    { term: 'Real rate of return', def: 'r_r = [(1 + r_NOM) ÷ (1 + Inflation)] − 1 — a ratio, not a subtraction. 6% nominal with 3% inflation = 2.9126%, not 3%.' },
    { term: 'Constant real income calculation', def: 'Convert to the real rate, then solve as an annuity due. $1M over 20 years at 6% nominal / 3% inflation supports an initial withdrawal of $64,786.88.' },
    { term: 'Real-terms rule', def: 'In a growing annuity problem, express I/YR, FV, and PMT all in real terms — never mix real and nominal.' },
    { term: 'Calculator setup checklist', def: 'One payment per period, End Mode (unless annuity due), outflows negative, rate as a percentage in TVM functions, and zero out unused variables.' }
  ],
  quiz: [
    { q: 'On a time line, the tick mark labeled Time 2 represents…',
      options: ['the middle of Year 2', 'both the end of Year 2 and the beginning of Year 3', 'only the beginning of Year 2', 'two years before today'],
      answer: 1, explain: 'Each tick is simultaneously the end of one period and the start of the next; Time 0 is today.' },
    { q: 'You deposit $100 at 5% for 3 years. The total interest earned is $15.76 rather than $15.00 because…',
      options: ['the bank rounds up', 'you earn interest on previously earned interest', 'the rate rises each year', 'of inflation'],
      answer: 1, explain: 'Compounding: year 1’s $5 of interest itself earns $0.25 in year 2, and so on. Simple interest would give exactly $15.00.' },
    { q: 'What is the future value of $100 after 5 years at 10%?',
      options: ['$150.00', '$161.05', '$110.00', '$155.00'],
      answer: 1, explain: 'FV = 100 × 1.10⁵ = $161.05.' },
    { q: 'A $2,000 CD pays 4% compounded annually for 3 years. Its maturity value is…',
      options: ['$2,240.00', '$2,249.73', '$2,315.25', '$2,080.00'],
      answer: 1, explain: '2,000 × 1.04³ = $2,249.73. At 5% it would be $2,315.25; at 6%, $2,382.03.' },
    { q: 'A security costs $100 today and pays $150 in 10 years. Its annual rate of return is…',
      options: ['5.00%', '4.14%', '50.0%', '3.75%'],
      answer: 1, explain: 'I = (150/100)^(1/10) − 1 = 4.14%.' },
    { q: 'How long will it take $500,000 to grow to $1 million at 4.5%?',
      options: ['10.0 years', '15.7 years', '22.2 years', '20.0 years'],
      answer: 1, explain: 'N = ln(2) ÷ ln(1.045) = 15.7473 years.' },
    { q: 'A perpetuity pays $1,000 per year and the appropriate rate is 5%. Its present value is…',
      options: ['$5,000', '$20,000', '$50,000', 'infinite'],
      answer: 1, explain: 'PV = PMT ÷ I = 1,000 ÷ 0.05 = $20,000.' },
    { q: 'Interest rates rise. What happens to the present value of a perpetuity?',
      options: ['it rises', 'it falls', 'it is unchanged', 'it becomes negative'],
      answer: 1, explain: 'PV moves inversely with rates — $25 ÷ 0.025 = $1,000 becomes $25 ÷ 0.03 = $833.33.' },
    { q: 'Which of these is an annuity DUE?',
      options: ['a mortgage payment', 'a car loan payment', 'a rental lease payment', 'a student loan payment'],
      answer: 2, explain: 'Rental leases, insurance premiums, and lottery payoffs pay at the beginning of the period; loans pay at the end.' },
    { q: 'A 3-year ordinary annuity of $100 at 5% has a future value of $315.25. The same annuity due has a future value of…',
      options: ['$300.00', '$331.01', '$285.94', '$315.25'],
      answer: 1, explain: 'FVA_due = 315.25 × 1.05 = $331.01 — each payment is compounded one extra period.' },
    { q: 'A 3-year ordinary annuity of $100 at 5% has a present value of $272.32. The annuity due version is worth…',
      options: ['$259.35', '$285.94', '$272.32', '$331.01'],
      answer: 1, explain: 'PVA_due = 272.32 × 1.05 = $285.94 — each payment is discounted one fewer period.' },
    { q: 'In a 5-payment ordinary annuity of $100 at 10%, how long does the FIFTH payment earn interest?',
      options: ['4 years', '1 year', '0 years', '5 years'],
      answer: 2, explain: 'The last payment arrives at the end of the annuity’s life, so it stays $100. The first earns interest 4 years and grows to $146.41.' },
    { q: 'To accumulate $10,000 in 5 years at 6%, the required END-of-year deposit is $1,773.96. The required BEGINNING-of-year deposit is…',
      options: ['$1,880.40', '$1,673.55', '$1,773.96', '$2,000.00'],
      answer: 1, explain: 'Divide by (1 + I): 1,773.96 ÷ 1.06 = $1,673.55. Note payments are divided while values are multiplied.' },
    { q: 'What is the PV of a 5-year, $100 ordinary annuity plus an extra $500 at the end of Year 5, at 6%?',
      options: ['$794.87', '$1,015.21', '$921.00', '$673.27'],
      answer: 0, explain: 'Use all five TVM keys with FV = 500: $794.87. This "annuity plus lump sum" pattern is how bonds are valued.' },
    { q: 'For a truly irregular cash flow stream, you must use…',
      options: ['the TVM keys with PMT', 'the cash flow register and the NPV key', 'the perpetuity formula', 'simple interest'],
      answer: 1, explain: 'The TVM keys require a constant PMT. Enter CF₀…CF_N in the CFLO register, set I/YR, then press NPV.' },
    { q: 'A key difference between a financial calculator and Excel when valuing an uneven stream is that…',
      options: ['Excel cannot handle uneven streams', 'Excel’s NPV starts at Time 1, so the Time-0 cash flow must be added separately', 'the calculator ignores the interest rate', 'Excel requires annual periods'],
      answer: 1, explain: 'The calculator’s NPV includes CF₀; Excel’s NPV does not. Excel’s IRR, however, does require all flows including Time 0.' },
    { q: 'Which rate should NEVER be entered into a financial calculator or shown on a time line (when compounding is more frequent than annual)?',
      options: ['the periodic rate', 'the nominal (quoted) rate', 'the effective annual rate', 'the real rate'],
      answer: 1, explain: 'Convert the nominal rate to the periodic rate: I_PER = I_NOM ÷ M.' },
    { q: '$100 is invested at a 12% nominal rate compounded quarterly for 2 years. Its future value is…',
      options: ['$124.00', '$126.68', '$125.44', '$126.82'],
      answer: 1, explain: 'I_PER = 3%, periods = 8: 100 × 1.03⁸ = $126.68.' },
    { q: 'A bank loan at 12% compounded quarterly has an EFF% of 12.5509%. A credit card charging 1% per month has an EFF% of 12.6825%. Why is the card more expensive despite the same 12% nominal rate?',
      options: ['the card adds fees', 'payments begin after 1 month instead of 3, so compounding occurs more often', 'the card uses simple interest', 'the bank rate is a teaser'],
      answer: 1, explain: 'More frequent compounding means more interest on interest, raising the effective rate.' },
    { q: 'A credit card discloses an 18% APR with monthly interest. Its effective annual rate is…',
      options: ['18.00%', '19.56%', '21.00%', '1.50%'],
      answer: 1, explain: '(1 + 0.18/12)¹² − 1 = 19.56%. APR understates the true cost because it does not compound.' },
    { q: 'An $3,000 appliance loan quoted at "8% add-on" for 1 year requires 12 payments of $270 starting immediately. Its actual APR is about…',
      options: ['8.0%', '17.2%', '12.0%', '4.0%'],
      answer: 1, explain: 'Solve as an annuity due: periodic rate 1.4313% × 12 = 17.1758% APR, with an EFF% of 18.5945%.' },
    { q: 'On a $250,000, 30-year, 6% mortgage with payments of $1,498.88, roughly what share of the FIRST year’s payments goes to interest?',
      options: ['about 50%', 'about 83%', 'about 25%', 'about 100%'],
      answer: 1, explain: 'Interest of $14,916.49 out of $17,986.56 in payments — interest is heavily front-loaded because the balance is largest early.' },
    { q: 'Switching that same $250,000, 6% mortgage from 30 years to 15 years changes total interest from $289,597 to…',
      options: ['$144,799', '$129,736', '$200,000', '$259,597'],
      answer: 1, explain: 'Payments rise to $2,109.64 but total interest falls to $129,736 — raising the payment dramatically cuts lifetime interest.' },
    { q: 'In an amortization schedule, the interest portion of each payment is calculated as…',
      options: ['total interest ÷ number of payments', 'beginning balance × periodic rate', 'payment × interest rate', 'principal × number of years'],
      answer: 1, explain: 'Principal = payment − interest, and the ending balance falls until it reaches zero.' },
    { q: 'If the nominal rate is 6% and inflation is 3%, the real rate of return is…',
      options: ['3.0000%', '2.9126%', '9.0000%', '2.0000%'],
      answer: 1, explain: 'Real rate = (1.06 ÷ 1.03) − 1 = 2.9126%. It is a ratio, not nominal minus inflation.' }
  ]
});
