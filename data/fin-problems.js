/* Calculation Practice — worked solutions with formula, substitution, and answer */
window.FIN_PROBLEMS = {
  title: 'Calculation Practice',
  intro: 'Every problem from the Calculation Practice sheet, solved step by step. Each card shows the formula, the numbers substituted in, and the final answer. Work the problem yourself first, then reveal the solution to check.',
  groups: [
    {
      chapter: 'Chapter 13 — Financial Statements, Cash Flow, and Taxes',
      problems: [
        {
          topic: 'Personal After-Tax Yield',
          q: 'An investor buys a corporate bond yielding 9%. The investor is in the 36% combined federal and state tax bracket. What is the bond’s after-tax yield?',
          formula: 'After-tax yield = Pre-tax yield × (1 − T)',
          steps: [
            'After-tax yield = 9.00% × (1 − 0.36)',
            'After-tax yield = 9.00% × 0.64'
          ],
          answer: '5.76%',
          note: 'Corporate bond interest is fully taxable, so the investor keeps only (1 − T) of the yield.'
        },
        {
          topic: 'Personal After-Tax Yield — Indifference Rate',
          q: 'Johnson Corporation’s corporate bonds yield 8%. Municipal bonds of equal risk yield 6%. At what tax rate would an investor be indifferent between the two?',
          formula: 'Muni yield = Corporate yield × (1 − T)&nbsp;&nbsp;→&nbsp;&nbsp;T = 1 − (Muni ÷ Corporate)',
          steps: [
            '6% = 8% × (1 − T)',
            '1 − T = 6 ÷ 8 = 0.75',
            'T = 1 − 0.75'
          ],
          answer: 'T = 25%',
          note: 'Above a 25% tax rate the muni is better; below it the corporate bond wins.'
        },
        {
          topic: 'Income Statement — Finding Interest Expense',
          q: 'Molteni Motors Inc. reported $6 million of net income. Its EBIT was $13 million and its tax rate was 40%. What was its interest expense?',
          formula: 'Pre-tax income = Net income ÷ (1 − T)&nbsp;&nbsp;·&nbsp;&nbsp;Interest = EBIT − Pre-tax income',
          steps: [
            'Pre-tax income = $6 ÷ (1 − 0.40) = $6 ÷ 0.60 = $10 million',
            'Interest expense = EBIT − Pre-tax income = $13 − $10'
          ],
          answer: '$3 million',
          note: 'Work backwards up the income statement: net income → pre-tax income → EBIT. The gap between EBIT and pre-tax income must be interest.'
        },
        {
          topic: 'Income Statement — Finding Depreciation & Amortization',
          q: 'Talbot Enterprises reported EBITDA of $8 million and net income of $2.4 million. It had $2.0 million of interest expense and a 40% tax rate. What was its charge for depreciation and amortization?',
          formula: 'Pre-tax income = NI ÷ (1 − T)&nbsp;&nbsp;·&nbsp;&nbsp;EBIT = Pre-tax + Interest&nbsp;&nbsp;·&nbsp;&nbsp;D&amp;A = EBITDA − EBIT',
          steps: [
            'Pre-tax income = $2.4 ÷ 0.60 = $4.0 million',
            'EBIT = $4.0 + $2.0 = $6.0 million',
            'D&amp;A = EBITDA − EBIT = $8.0 − $6.0'
          ],
          answer: '$2 million',
          note: 'Three steps up the statement: net income → pre-tax → EBIT → back out D&A from EBITDA.'
        },
        {
          topic: 'Net Cash Flow',
          q: 'Kendall Corners Inc. reported net income of $3.1 million and depreciation of $500,000, with no amortization. What was its net cash flow?',
          formula: 'Net cash flow = Net income + Depreciation and amortization',
          steps: [
            'Net cash flow = $3,100,000 + $500,000'
          ],
          answer: '$3.6 million',
          note: 'Depreciation is a non-cash charge, so it is added back to net income.'
        },
        {
          topic: 'Statement of Retained Earnings',
          q: 'Del-Castillo Inc. reported $70 million of net income and $900 million of retained earnings. The previous retained earnings were $855 million. How much did the firm pay in dividends?',
          formula: 'RE<sub>end</sub> = RE<sub>begin</sub> + Net income − Dividends&nbsp;&nbsp;→&nbsp;&nbsp;Dividends = Net income − (RE<sub>end</sub> − RE<sub>begin</sub>)',
          steps: [
            'Change in retained earnings = $900 − $855 = $45 million',
            'Dividends = $70 − $45'
          ],
          answer: '$25 million',
          note: 'Whatever net income is not retained was paid out.'
        }
      ]
    },
    {
      chapter: 'Chapter 14 — Analysis of Financial Statements',
      problems: [
        {
          topic: 'Days Sales Outstanding',
          q: 'Greene Sisters has a DSO of 20 days and average daily sales of $20,000. What is the level of its accounts receivable? (365-day year.)',
          formula: 'DSO = Receivables ÷ Average daily sales&nbsp;&nbsp;→&nbsp;&nbsp;Receivables = DSO × Average daily sales',
          steps: [
            'Receivables = 20 days × $20,000 per day'
          ],
          answer: '$400,000',
          note: 'DSO answers "how many days of sales are sitting uncollected." Multiply back to get the dollar balance.'
        },
        {
          topic: 'Debt Ratio',
          q: 'Vigo Vacations has $200 million in total assets, $5 million in notes payable, and $25 million in long-term debt. What is the debt ratio?',
          formula: 'Debt ratio = Total debt ÷ Total assets, where Total debt = Notes payable + Long-term debt',
          steps: [
            'Total debt = $5 + $25 = $30 million',
            'Debt ratio = $30 ÷ $200 = 0.15'
          ],
          answer: '15%',
          note: 'Only interest-bearing debt counts here — accounts payable and accruals are excluded.'
        },
        {
          topic: 'Market/Book Ratio',
          q: 'Winston’s Watch’s stock price is $75 per share. Total assets are $10 billion, current liabilities $1 billion, long-term debt $3 billion, and common equity $6 billion, with 800 million shares outstanding. What is the market/book ratio?',
          formula: 'Book value per share = Common equity ÷ Shares outstanding&nbsp;&nbsp;·&nbsp;&nbsp;M/B = Price per share ÷ BVPS',
          steps: [
            'BVPS = $6,000 million ÷ 800 million shares = $7.50',
            'M/B = $75.00 ÷ $7.50'
          ],
          answer: '10.0',
          note: 'Total assets and the liability figures are not needed — only common equity and share count.'
        },
        {
          topic: 'Price/Earnings Ratio',
          q: 'Reno Revolvers has an EPS of $1.50, cash flow per share of $3.00, and a price/cash flow ratio of 8.0. What is its P/E ratio?',
          formula: 'Price = (P/CF) × Cash flow per share&nbsp;&nbsp;·&nbsp;&nbsp;P/E = Price ÷ EPS',
          steps: [
            'Price per share = 8.0 × $3.00 = $24.00',
            'P/E = $24.00 ÷ $1.50'
          ],
          answer: '16.0',
          note: 'Back out the share price from the cash-flow multiple first, then divide by EPS.'
        },
        {
          topic: 'Return on Equity',
          q: 'Needham Pharmaceuticals has a profit margin of 3% and an equity multiplier of 2.0. Sales are $100 million and total assets are $50 million. What is its ROE?',
          formula: 'ROE = Profit margin × Total assets turnover × Equity multiplier',
          steps: [
            'Total assets turnover = Sales ÷ Total assets = $100 ÷ $50 = 2.0',
            'ROE = 3% × 2.0 × 2.0'
          ],
          answer: 'ROE = 12%',
          note: 'The DuPont identity. Equivalently: net income = 3% × $100 = $3M; equity = $50 ÷ 2.0 = $25M; ROE = 3 ÷ 25 = 12%.'
        },
        {
          topic: 'DuPont Identity',
          q: 'Gardial &amp; Son has an ROA of 12%, a 5% profit margin, and an ROE of 20%. What is the total assets turnover? What is the equity multiplier?',
          formula: 'ROA = Profit margin × Total assets turnover&nbsp;&nbsp;·&nbsp;&nbsp;ROE = ROA × Equity multiplier',
          steps: [
            'Total assets turnover = ROA ÷ Profit margin = 12% ÷ 5% = 2.4',
            'Equity multiplier = ROE ÷ ROA = 20% ÷ 12% = 1.67'
          ],
          answer: 'Total assets turnover = 2.4×&nbsp;&nbsp;·&nbsp;&nbsp;Equity multiplier = 1.67×',
          note: 'Check: 5% × 2.4 × 1.6667 = 20% ✓'
        }
      ]
    },
    {
      chapter: 'Chapter 15 — Time Value of Money',
      problems: [
        {
          topic: 'Future Value of a Single Payment',
          q: 'If you deposit $10,000 in a bank account that pays 10% interest annually, how much will be in your account after 5 years?',
          formula: 'FV<sub>N</sub> = PV(1 + I)<sup>N</sup>',
          steps: [
            'FV = $10,000 × (1.10)<sup>5</sup>',
            'FV = $10,000 × 1.61051'
          ],
          answer: '$16,105.10',
          note: 'Calculator: N=5, I/YR=10, PV=−10000, PMT=0 → FV. Excel: =FV(0.10,5,0,−10000)'
        },
        {
          topic: 'Present Value of a Single Payment',
          q: 'What is the present value of a security that will pay $5,000 in 20 years if securities of equal risk pay 7% annually?',
          formula: 'PV = FV<sub>N</sub> ÷ (1 + I)<sup>N</sup>',
          steps: [
            'PV = $5,000 ÷ (1.07)<sup>20</sup>',
            'PV = $5,000 ÷ 3.869684'
          ],
          answer: '$1,292.10',
          note: 'Calculator: N=20, I/YR=7, PMT=0, FV=5000 → PV. Excel: =PV(0.07,20,0,5000)'
        },
        {
          topic: 'Interest Rate on a Single Payment',
          q: 'Your parents retire in 18 years. They have $250,000 and think they will need $1 million. What annual rate must they earn, assuming no additional saving?',
          formula: 'I = (FV<sub>N</sub> ÷ PV)<sup>1/N</sup> − 1',
          steps: [
            'I = ($1,000,000 ÷ $250,000)<sup>1/18</sup> − 1',
            'I = 4<sup>0.05556</sup> − 1 = 1.0801 − 1'
          ],
          answer: '8.01%',
          note: 'Calculator: N=18, PV=−250000, PMT=0, FV=1000000 → I/YR. Excel: =RATE(18,0,−250000,1000000)'
        },
        {
          topic: 'Number of Periods — Single Payment',
          q: 'If you deposit money today in an account paying 6.5% annual interest, how long will it take to double your money?',
          formula: 'N = ln(FV ÷ PV) ÷ ln(1 + I)',
          steps: [
            'N = ln(2) ÷ ln(1.065)',
            'N = 0.693147 ÷ 0.062975'
          ],
          answer: '11.01 years',
          note: 'Calculator: I/YR=6.5, PV=−1, PMT=0, FV=2 → N. Excel: =NPER(0.065,0,−1,2)'
        },
        {
          topic: 'Number of Periods — Annuity',
          q: 'You have $42,180.53 in a brokerage account and will deposit $5,000 at the end of every year until the account totals $250,000, earning 12% annually. How many years will it take?',
          formula: 'FV = PV(1 + I)<sup>N</sup> + PMT[((1 + I)<sup>N</sup> − 1) ÷ I]',
          steps: [
            'Both a lump sum AND a payment stream are growing, so use all five TVM keys.',
            'Calculator: I/YR=12, PV=−42180.53, PMT=−5000, FV=250000 → N',
            'Excel: =NPER(0.12, −5000, −42180.53, 250000)'
          ],
          answer: '11 years',
          note: 'Enter PV and PMT with the same sign (both outflows) and FV opposite.'
        },
        {
          topic: 'Ordinary Annuity vs. Annuity Due',
          q: 'What is the future value of a 7%, 5-year ordinary annuity paying $300 per year? If it were an annuity due, what would its future value be?',
          formula: 'FVA<sub>N</sub> = PMT[((1 + I)<sup>N</sup> − 1) ÷ I]&nbsp;&nbsp;·&nbsp;&nbsp;FVA<sub>due</sub> = FVA<sub>ordinary</sub> × (1 + I)',
          steps: [
            'FVA = $300 × [((1.07)<sup>5</sup> − 1) ÷ 0.07]',
            'FVA = $300 × [(1.402552 − 1) ÷ 0.07] = $300 × 5.750739 = $1,725.22',
            'FVA<sub>due</sub> = $1,725.22 × 1.07'
          ],
          answer: 'Ordinary: $1,725.22&nbsp;&nbsp;·&nbsp;&nbsp;Annuity due: $1,845.99',
          note: 'The annuity due is larger because every payment is compounded one extra year. Calculator: switch to BEGIN mode.'
        }
      ]
    },
    {
      chapter: 'Chapter 16 — Capital Budgeting',
      intro: 'All four problems use the same project: initial cost $40,000, net cash inflows of $9,000 per year for 7 years, cost of capital 11%.',
      problems: [
        {
          topic: 'Net Present Value (NPV)',
          q: 'A project costs $40,000, returns $9,000 per year for 7 years, and has an 11% cost of capital. What is its NPV?',
          formula: 'NPV = PV of inflows − Initial cost, where PV = PMT × [(1 − (1 + I)<sup>−N</sup>) ÷ I]',
          steps: [
            'PV of inflows = $9,000 × [(1 − 1.11<sup>−7</sup>) ÷ 0.11]',
            'PV of inflows = $9,000 × 4.712196 = $42,409.77',
            'NPV = $42,409.77 − $40,000'
          ],
          answer: 'NPV ≈ $2,409.77',
          note: 'NPV is positive, so the project adds value and should be accepted. Calculator: CF₀=−40000, CF₁₋₇=9000, I=11 → NPV.'
        },
        {
          topic: 'Internal Rate of Return (IRR)',
          q: 'Same project: $40,000 cost, $9,000 per year for 7 years. What is the IRR?',
          formula: 'IRR is the rate where NPV = 0: $40,000 = $9,000 × [(1 − (1 + IRR)<sup>−7</sup>) ÷ IRR]',
          steps: [
            'Required annuity factor = $40,000 ÷ $9,000 = 4.4444',
            'Solve for the rate giving that factor over 7 years (trial and error or calculator)',
            'Calculator: CF₀=−40000, CF₁₋₇=9000 → IRR. Excel: =IRR(values)'
          ],
          answer: 'IRR ≈ 12.84%',
          note: 'IRR (12.84%) exceeds the 11% cost of capital, so accept — the same conclusion NPV gave.'
        },
        {
          topic: 'Profitability Index (PI)',
          q: 'Same project. What is the Profitability Index?',
          formula: 'PI = PV of future cash flows ÷ Initial cost',
          steps: [
            'PI = $42,409.77 ÷ $40,000'
          ],
          answer: 'PI ≈ 1.06',
          note: 'PI > 1.0 means accept. It is equivalent to NPV > 0, but expressed as value created per dollar invested.'
        },
        {
          topic: 'Payback Period',
          q: 'Same project. What is the payback period?',
          formula: 'Payback = Initial cost ÷ Annual cash inflow (when inflows are equal)',
          steps: [
            'Payback = $40,000 ÷ $9,000'
          ],
          answer: '4.44 years',
          note: 'Payback ignores the time value of money and all cash flows after the cutoff — which is why NPV is the preferred method.'
        }
      ]
    },
    {
      chapter: 'Chapter 17 — Financial Forecasting (AFN)',
      intro: 'Broussard Skateboard: sales rise 15% from $8 million (2016) to $9.2 million (2017). Assets were $5 million and the firm is at full capacity. Current liabilities of $1.4 million consist of $450,000 accounts payable, $500,000 notes payable, and $450,000 accruals. After-tax profit margin 6%; payout ratio 40%.',
      problems: [
        {
          topic: 'AFN Equation — Base Case',
          q: 'Use the AFN equation to forecast Broussard’s additional funds needed for the coming year.',
          formula: 'AFN = (A*/S₀)ΔS − (L*/S₀)ΔS − M(S₁)(RR)<br>where RR = retention ratio = 1 − payout ratio',
          steps: [
            'ΔS = $9.2 − $8.0 = $1.2 million',
            'Spontaneous liabilities L* = A/P + Accruals = $450,000 + $450,000 = $900,000 (notes payable is NOT spontaneous)',
            'Required asset increase = ($5.0 ÷ $8.0) × $1.2 = 0.625 × $1.2 = $0.750 million',
            'Spontaneous liability increase = ($0.9 ÷ $8.0) × $1.2 = 0.1125 × $1.2 = $0.135 million',
            'Addition to retained earnings = 0.06 × $9.2 × (1 − 0.40) = 0.06 × $9.2 × 0.60 = $0.3312 million',
            'AFN = $0.750 − $0.135 − $0.3312'
          ],
          answer: 'AFN = $0.2838 million ≈ $283,800',
          note: 'Notes payable is excluded from spontaneous liabilities because it is a financing decision, not something that arises automatically with sales.'
        },
        {
          topic: 'AFN Equation — Higher Asset Base',
          q: 'What would AFN be if year-end 2016 assets had been $7 million instead of $5 million? Why is it different, and is capital intensity the same?',
          formula: 'AFN = (A*/S₀)ΔS − (L*/S₀)ΔS − M(S₁)(RR)',
          steps: [
            'Required asset increase = ($7.0 ÷ $8.0) × $1.2 = 0.875 × $1.2 = $1.050 million',
            'Spontaneous liability increase = $0.135 million (unchanged)',
            'Addition to retained earnings = $0.3312 million (unchanged)',
            'AFN = $1.050 − $0.135 − $0.3312'
          ],
          answer: 'AFN = $0.5838 million ≈ $583,800',
          note: 'AFN is higher because the capital intensity ratio (A*/S₀) rose from 0.625 to 0.875 — the firm now needs 87.5¢ of assets per $1 of sales instead of 62.5¢, so growth requires more new financing.'
        },
        {
          topic: 'AFN Equation — No Dividends',
          q: 'Return to $5 million of assets, but assume the company pays no dividends. What is AFN now, and why does it differ?',
          formula: 'AFN = (A*/S₀)ΔS − (L*/S₀)ΔS − M(S₁)(RR), with RR = 1.0 when no dividends are paid',
          steps: [
            'Required asset increase = $0.750 million (unchanged)',
            'Spontaneous liability increase = $0.135 million (unchanged)',
            'Addition to retained earnings = 0.06 × $9.2 × 1.00 = $0.552 million',
            'AFN = $0.750 − $0.135 − $0.552'
          ],
          answer: 'AFN = $0.063 million ≈ $63,000',
          note: 'Much lower than the $283,800 base case because retaining all earnings supplies $0.552 million internally instead of $0.3312 million, cutting the external financing needed.'
        }
      ]
    },
    {
      chapter: 'Chapter 18 — Operating and Financial Leverage',
      problems: [
        {
          topic: 'Break-Even Quantity',
          q: 'Shapland Inc. has fixed operating costs of $500,000 and variable costs of $50 per unit. If it sells the product for $75 per unit, what is the break-even quantity?',
          formula: 'Q<sub>BE</sub> = Fixed costs ÷ (Price per unit − Variable cost per unit)',
          steps: [
            'Contribution margin per unit = $75 − $50 = $25',
            'Q<sub>BE</sub> = $500,000 ÷ $25'
          ],
          answer: '20,000 units',
          note: 'Each unit contributes $25 toward covering fixed costs; 20,000 units exactly covers the $500,000.'
        },
        {
          topic: 'Unlevered Beta',
          q: 'Count’s Accounting has a beta of 1.15 and a tax rate of 40%. If it is financed with 20% debt, what is its unlevered beta?',
          formula: 'Hamada equation: b<sub>L</sub> = b<sub>U</sub>[1 + (1 − T)(D/E)]&nbsp;&nbsp;→&nbsp;&nbsp;b<sub>U</sub> = b<sub>L</sub> ÷ [1 + (1 − T)(D/E)]',
          steps: [
            '20% debt means 80% equity, so D/E = 0.20 ÷ 0.80 = 0.25',
            'b<sub>U</sub> = 1.15 ÷ [1 + (1 − 0.40)(0.25)]',
            'b<sub>U</sub> = 1.15 ÷ [1 + 0.15] = 1.15 ÷ 1.15'
          ],
          answer: 'b<sub>U</sub> = 1.00',
          note: 'Unlevered beta strips out financial risk, leaving only business risk. Watch the conversion: 20% debt means D/E = 0.25, not 0.20.'
        },
        {
          topic: 'Premium for Financial Risk',
          q: 'Ethier Enterprise has an unlevered beta of 1.0. It is financed with 50% debt and has a levered beta of 1.6. If the risk-free rate is 5.5% and the market risk premium is 6%, how much additional premium do shareholders require for financial risk?',
          formula: 'Premium for financial risk = (b<sub>L</sub> − b<sub>U</sub>) × RP<sub>M</sub>',
          steps: [
            'Unlevered required return = 5.5% + 1.0(6%) = 11.5%',
            'Levered required return = 5.5% + 1.6(6%) = 15.1%',
            'Premium for financial risk = 15.1% − 11.5% = (1.6 − 1.0) × 6%'
          ],
          answer: '3.6%',
          note: 'The risk-free rate cancels out, so the premium is simply the change in beta times the market risk premium.'
        }
      ]
    }
  ]
};
