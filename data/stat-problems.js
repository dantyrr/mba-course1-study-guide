/* Statistics calculation problems — the 12 problems from the course calculation videos, worked step by step */
window.STAT_PROBLEMS = {
  title: 'Statistics Calculation Problems',
  intro: 'Every problem from the "Stats Calculations" video handout, solved in full with the formula, the work, and the final answer. Grouped by the chapter each problem comes from.',
  groups: [
    { chapter: 'Ch 2 (Course 19) — Tabular and Graphical Displays',
      problems: [
        { topic: 'Relative and Percent Frequency',
          q: 'A partial relative frequency distribution is given: class A = .22, class B = .18, class C = .40, class D = unknown. (a) What is the relative frequency of class D? (b) The total sample size is 200 — what is the frequency of class D? (c) Show the frequency distribution. (d) Show the percent frequency distribution.',
          formula: 'Σ(relative frequencies) = 1&nbsp;&nbsp;·&nbsp;&nbsp;Frequency = (Relative frequency) × n&nbsp;&nbsp;·&nbsp;&nbsp;Percent frequency = (Relative frequency) × 100',
          steps: [
            '<strong>(a)</strong> All relative frequencies must sum to 1, so class D = 1 − (.22 + .18 + .40) = 1 − .80 = <strong>.20</strong>',
            '<strong>(b)</strong> Frequency of D = .20 × 200 = <strong>40</strong>',
            '<strong>(c)</strong> Frequency distribution: A = .22 × 200 = 44 · B = .18 × 200 = 36 · C = .40 × 200 = 80 · D = 40. Total = 200 ✓',
            '<strong>(d)</strong> Percent frequency distribution: A = 22% · B = 18% · C = 40% · D = 20%. Total = 100% ✓'
          ],
          answer: 'Relative frequency of D = .20 · Frequency of D = 40 · Frequencies: A 44, B 36, C 80, D 40 · Percents: 22%, 18%, 40%, 20%',
          note: 'Always check your work by confirming the frequencies sum to n and the percents sum to 100.' },

        { topic: 'Two Categorical Variables — Side-by-Side Chart',
          q: 'Variable x takes values A, B, C, or D and variable y takes values I or II. The crosstabulation of frequencies is: A → I 143, II 857 · B → I 200, II 800 · C → I 321, II 679 · D → I 420, II 580. (a) Construct a side-by-side bar chart with x on the horizontal axis. (b) Comment on the relationship between x and y.',
          formula: 'Row percentage = (cell frequency) ÷ (row total) × 100',
          steps: [
            '<strong>Step 1 — find the row totals.</strong> Every row totals 1,000: 143 + 857 = 1,000 · 200 + 800 = 1,000 · 321 + 679 = 1,000 · 420 + 580 = 1,000.',
            '<strong>Step 2 — convert to row percentages,</strong> which is what makes the bars comparable:<br>A: I = 14.3%, II = 85.7%<br>B: I = 20.0%, II = 80.0%<br>C: I = 32.1%, II = 67.9%<br>D: I = 42.0%, II = 58.0%',
            '<strong>Step 3 — the chart.</strong> Put A, B, C, D on the horizontal axis. At each value of x place two adjacent bars, one for y = I and one for y = II, with percentage on the vertical axis. Use the same two colors across all four groups and include a legend.',
            '<strong>Step 4 — read the pattern.</strong> Moving from A to D, the bar for category I rises steadily (14.3% → 20.0% → 32.1% → 42.0%) while the bar for category II falls by the same amounts (85.7% → 80.0% → 67.9% → 58.0%).'
          ],
          answer: 'There is a clear relationship between x and y: as x moves from A toward D, the proportion of y = I increases steadily from 14.3% to 42.0% and the proportion of y = II decreases from 85.7% to 58.0%. Category II is the majority at every level of x, but its dominance shrinks as x increases.',
          note: 'Comparing raw counts here happens to work because all four row totals are equal at 1,000. Whenever row totals differ, you MUST convert to row percentages before comparing.' }
      ] },

    { chapter: 'Ch 3 (Course 20) — Numerical Measures',
      problems: [
        { topic: 'Mean, Median, and Mode',
          q: 'Thirteen automobiles were road tested for 300 miles in both city and highway conditions. City mpg: 16.2, 16.7, 15.9, 14.4, 13.2, 15.3, 16.8, 16.0, 16.1, 15.3, 15.2, 15.3, 16.2. Highway mpg: 19.4, 20.6, 18.3, 18.6, 19.2, 17.4, 17.2, 18.6, 19.0, 21.1, 19.4, 18.5, 18.7. Use the mean, median, and mode to make a statement about the difference in performance for city and highway driving.',
          formula: 'x̄ = Σx<sub>i</sub> ÷ n&nbsp;&nbsp;·&nbsp;&nbsp;Median = middle value of the ordered data (n odd → the (n+1)/2-th value)&nbsp;&nbsp;·&nbsp;&nbsp;Mode = most frequent value',
          steps: [
            '<strong>City mean:</strong> Σx = 202.6, n = 13 → x̄ = 202.6 ÷ 13 = <strong>15.58 mpg</strong>',
            '<strong>City median:</strong> ordered — 13.2, 14.4, 15.2, 15.3, 15.3, 15.3, <u>15.9</u>, 16.0, 16.1, 16.2, 16.2, 16.7, 16.8. With n = 13 the median is the 7th value = <strong>15.9 mpg</strong>',
            '<strong>City mode:</strong> 15.3 appears three times, more than any other value → <strong>15.3 mpg</strong>',
            '<strong>Highway mean:</strong> Σx = 246.0, n = 13 → x̄ = 246.0 ÷ 13 = <strong>18.92 mpg</strong>',
            '<strong>Highway median:</strong> ordered — 17.2, 17.4, 18.3, 18.5, 18.6, 18.6, <u>18.7</u>, 19.0, 19.2, 19.4, 19.4, 20.6, 21.1. The 7th value = <strong>18.7 mpg</strong>',
            '<strong>Highway mode:</strong> both 18.6 and 19.4 appear twice → the data are <strong>bimodal at 18.6 and 19.4 mpg</strong>',
            '<strong>Compare:</strong> mean difference = 18.92 − 15.58 = 3.34 mpg · median difference = 18.7 − 15.9 = 2.8 mpg · the modes also sit roughly 3 mpg apart.'
          ],
          answer: 'City: mean 15.58, median 15.9, mode 15.3. Highway: mean 18.92, median 18.7, bimodal at 18.6 and 19.4. All three measures agree that highway mileage is better — roughly 3 mpg higher than city mileage.',
          note: 'When the mean, median, and mode all point the same direction, the conclusion is solid and the data are not badly skewed.' },

        { topic: 'Five-Number Summary',
          q: 'Consider a sample with data values of 27, 25, 20, 15, 30, 34, 28, and 25. Provide the five-number summary for the data.',
          formula: 'Five-number summary = Minimum, Q1, Median (Q2), Q3, Maximum&nbsp;&nbsp;·&nbsp;&nbsp;Location of the pth percentile: L<sub>p</sub> = (p ÷ 100)(n + 1)',
          steps: [
            '<strong>Step 1 — order the data:</strong> 15, 20, 25, 25, 27, 28, 30, 34 (n = 8)',
            '<strong>Minimum = 15 · Maximum = 34</strong>',
            '<strong>Median (Q2):</strong> with n even, average the 4th and 5th values: (25 + 27) ÷ 2 = <strong>26</strong>',
            '<strong>Q1:</strong> L₂₅ = (25/100)(8 + 1) = 2.25 → one quarter of the way from the 2nd value (20) to the 3rd value (25): 20 + 0.25(25 − 20) = 20 + 1.25 = <strong>21.25</strong>',
            '<strong>Q3:</strong> L₇₅ = (75/100)(9) = 6.75 → three quarters of the way from the 6th value (28) to the 7th value (30): 28 + 0.75(30 − 28) = 28 + 1.5 = <strong>29.5</strong>'
          ],
          answer: 'Five-number summary: 15, 21.25, 26, 29.5, 34 — with IQR = 29.5 − 21.25 = 8.25',
          note: 'Outlier check: Q1 − 1.5(IQR) = 21.25 − 12.375 = 8.875 and Q3 + 1.5(IQR) = 29.5 + 12.375 = 41.875. Every value falls inside these limits, so there are no outliers.' }
      ] },

    { chapter: 'Ch 4 (Course 21) — Probability',
      problems: [
        { topic: 'Tree Diagram and Probability',
          q: 'Consider the experiment of tossing a fair coin three times, with independent tosses. (a) Develop a tree diagram for the experiment. (b) List the experimental outcomes. (c) What is the probability of each experimental outcome?',
          formula: 'Counting rule for multiple-step experiments: (n<sub>1</sub>)(n<sub>2</sub>)…(n<sub>k</sub>)&nbsp;&nbsp;·&nbsp;&nbsp;Classical method: P(each outcome) = 1 ÷ (number of equally likely outcomes)',
          steps: [
            '<strong>(a) The tree.</strong> Toss 1 branches into H and T. Each of those branches again into H and T for toss 2, giving 4 nodes. Each of those branches once more for toss 3, giving 8 terminal branches. Every branch carries probability 1/2.',
            '<strong>(b) Count the outcomes:</strong> (2)(2)(2) = <strong>8 experimental outcomes</strong>',
            'List them by reading down the tree: <strong>HHH, HHT, HTH, HTT, THH, THT, TTH, TTT</strong>',
            '<strong>(c)</strong> The coin is fair and the tosses are independent, so each path has probability (1/2)(1/2)(1/2) = 1/8. The 8 outcomes are equally likely, and 8 × (1/8) = 1 ✓'
          ],
          answer: '8 outcomes — HHH, HHT, HTH, HTT, THH, THT, TTH, TTT — each with probability 1/8 = 0.125',
          note: 'Once you have the sample space, events are easy: P(exactly two heads) = 3/8, since HHT, HTH, and THH all qualify.' },

        { topic: 'Bayes’ Theorem',
          q: 'A consulting firm submitted a bid for a large research project. Management initially felt they had a 50-50 chance of getting the project. The agency then requested additional information. Past experience shows the agency requests additional information for 75% of successful bids and 40% of unsuccessful bids. (a) What is the prior probability the bid is successful? (b) What is the conditional probability of a request given the bid will be successful? (c) Compute the posterior probability the bid will be successful given a request for additional information.',
          formula: 'Bayes’ theorem: P(S|R) = P(S)P(R|S) ÷ [P(S)P(R|S) + P(U)P(R|U)]',
          steps: [
            '<strong>Define the events.</strong> S = the bid is successful · U = the bid is unsuccessful · R = additional information is requested.',
            '<strong>(a) Prior probabilities:</strong> "50-50 chance" → P(S) = <strong>0.50</strong> and P(U) = 0.50',
            '<strong>(b) Conditional probabilities:</strong> P(R|S) = <strong>0.75</strong> and P(R|U) = 0.40',
            '<strong>(c) Step 1 — joint probabilities</strong> (prior × conditional):<br>P(S ∩ R) = (0.50)(0.75) = 0.375<br>P(U ∩ R) = (0.50)(0.40) = 0.200',
            '<strong>Step 2 — total probability of a request:</strong> P(R) = 0.375 + 0.200 = 0.575',
            '<strong>Step 3 — posterior:</strong> P(S|R) = 0.375 ÷ 0.575 = <strong>0.6522</strong>'
          ],
          answer: 'Prior P(S) = 0.50 · P(R|S) = 0.75 · Posterior P(S|R) = 0.6522',
          note: 'The request for additional information is good news: it raised the firm’s probability of success from 0.50 to about 0.65. In the tabular method, each posterior is simply its joint probability divided by the sum of the joint probabilities (0.575).' }
      ] },

    { chapter: 'Ch 7 (Course 22) — Sampling and Sampling Distributions',
      problems: [
        { topic: 'Point Estimation',
          q: 'The NFL polls fans to rate each game from 0 (forgettable) to 100 (memorable). The fan ratings for a random sample of games are: 1, 86, 74, 72, 73, 20, 57, 80, 79, 83, 74. (a) Develop a point estimate of the mean fan rating for the population of NFL games. (b) Develop a point estimate of the population standard deviation.',
          formula: 'x̄ = Σx<sub>i</sub> ÷ n&nbsp;&nbsp;·&nbsp;&nbsp;s = √[ Σ(x<sub>i</sub> − x̄)² ÷ (n − 1) ]',
          steps: [
            '<strong>(a) Sum the ratings:</strong> 1 + 86 + 74 + 72 + 73 + 20 + 57 + 80 + 79 + 83 + 74 = 699, with n = 11',
            '<strong>Point estimate of μ:</strong> x̄ = 699 ÷ 11 = <strong>63.55</strong>',
            '<strong>(b) Squared deviations from 63.55:</strong> (1−63.55)² = 3911.9 · (86−63.55)² = 504.2 · (74−63.55)² = 109.3 · (72−63.55)² = 71.5 · (73−63.55)² = 89.4 · (20−63.55)² = 1896.2 · (57−63.55)² = 42.8 · (80−63.55)² = 270.8 · (79−63.55)² = 238.9 · (83−63.55)² = 378.5 · (74−63.55)² = 109.3',
            '<strong>Sum of squared deviations:</strong> 7,622.8',
            '<strong>Sample variance:</strong> s² = 7,622.8 ÷ (11 − 1) = 762.28',
            '<strong>Point estimate of σ:</strong> s = √762.28 = <strong>27.61</strong>'
          ],
          answer: 'Point estimate of the population mean: x̄ = 63.55 · Point estimate of the population standard deviation: s = 27.61',
          note: 'The handout states 12 games but lists only 11 values, and the first value appears as "1" where the original data set almost certainly had a two-digit rating. The method above is exactly what the exam wants — if your instructor gives a complete 12-value list, substitute it and repeat these same steps. Note how much the single value of 1 inflates s: it alone contributes more than half the total sum of squares.' },

        { topic: 'Sampling Distribution of a Proportion',
          q: 'The Food Marketing Institute shows that 17% of households spend more than $100 per week on groceries. Assume p = .17 and a sample of 800 households will be selected. (a) Show the sampling distribution of p̄. (b) What is the probability that the sample proportion will be within .02 of the population proportion?',
          formula: 'E(p̄) = p&nbsp;&nbsp;·&nbsp;&nbsp;σ<sub>p̄</sub> = √[p(1 − p) ÷ n]&nbsp;&nbsp;·&nbsp;&nbsp;z = (p̄ − p) ÷ σ<sub>p̄</sub>',
          steps: [
            '<strong>(a) Expected value:</strong> E(p̄) = p = <strong>0.17</strong>',
            '<strong>Standard error:</strong> σ<sub>p̄</sub> = √[(0.17)(0.83) ÷ 800] = √(0.1411 ÷ 800) = √0.000176375 = <strong>0.013281</strong>',
            '<strong>Check the normal approximation:</strong> np = 800(0.17) = 136 ≥ 5 and n(1 − p) = 800(0.83) = 664 ≥ 5 ✓ — so the sampling distribution of p̄ is approximately normal with mean 0.17 and standard error 0.0133.',
            '<strong>(b) Convert the interval to z-scores.</strong> "Within .02" means 0.15 ≤ p̄ ≤ 0.19.<br>Upper: z = (0.19 − 0.17) ÷ 0.013281 = +1.51<br>Lower: z = (0.15 − 0.17) ÷ 0.013281 = −1.51',
            '<strong>Find the area between.</strong> From the standard normal table, the area to the left of 1.51 is 0.9345 and to the left of −1.51 is 0.0655.',
            'P(0.15 ≤ p̄ ≤ 0.19) = 0.9345 − 0.0655 = <strong>0.8690</strong>'
          ],
          answer: 'Sampling distribution: approximately normal with E(p̄) = 0.17 and σp̄ = 0.0133. Probability the sample proportion is within .02 of p = 0.8690.',
          note: 'The handout prints "within .2" rather than ".02". Taken literally, .2 would give z = ±15.06 and a probability of essentially 1.0000, which is not a meaningful exam question — .02 is the intended value and is what the textbook uses.' }
      ] },

    { chapter: 'Ch 9 (Course 23) — Hypothesis Tests',
      problems: [
        { topic: 'Type I and Type II Errors',
          q: 'Carpetland salespeople average $8,000 per week in sales. Steve Contois, the firm’s vice president, proposes a compensation plan with new selling incentives. Steve hopes the results of a trial selling period will let him conclude the plan increases average sales per person. (a) Develop the appropriate null and alternative hypotheses. (b) What is the Type I error and what are its consequences? (c) What is the Type II error and what are its consequences?',
          formula: 'The research claim goes in H<sub>a</sub>; the equality always stays in H<sub>0</sub>.&nbsp;&nbsp;Type I = reject a true H<sub>0</sub> (probability α) · Type II = fail to reject a false H<sub>0</sub> (probability β)',
          steps: [
            '<strong>(a) Identify what Steve wants to prove:</strong> that the plan <em>increases</em> average sales above $8,000. That claim is the research hypothesis, so it goes in Ha.',
            '<strong>H<sub>0</sub>: μ ≤ 8,000&nbsp;&nbsp;&nbsp;H<sub>a</sub>: μ &gt; 8,000</strong> — an upper-tail test.',
            '<strong>(b) Type I error</strong> = concluding μ &gt; 8,000 (the plan increases sales) when in truth μ ≤ 8,000 (it does not).',
            '<strong>Consequence:</strong> Carpetland adopts and pays for a new incentive compensation plan that does not actually increase sales — higher compensation costs with no offsetting revenue.',
            '<strong>(c) Type II error</strong> = concluding there is not enough evidence that μ &gt; 8,000 when in truth the plan does increase sales.',
            '<strong>Consequence:</strong> Carpetland rejects a plan that would genuinely have raised sales — the lost profit from a missed opportunity.'
          ],
          answer: 'H0: μ ≤ 8,000 and Ha: μ > 8,000. Type I error: adopting a costly incentive plan that does not actually work. Type II error: passing up an incentive plan that would have increased sales.',
          note: 'Which error is worse is a business judgment, not a statistical one. If the plan is expensive to implement, Steve should choose a small α to guard against the Type I error.' },

        { topic: 'Hypothesis Test About a Mean, σ Known',
          q: 'Consider the hypothesis test H0: μ ≥ 20 against Ha: μ < 20. A sample of 60 provided a sample mean of 19.4, and the population standard deviation is 2. (a) Compute the value of the test statistic. (b) What is the p-value? (c) Using α = .05, what is your conclusion? (d) What is the rejection rule using the critical value, and what is your conclusion?',
          formula: 'z = (x̄ − μ<sub>0</sub>) ÷ (σ ÷ √n)&nbsp;&nbsp;·&nbsp;&nbsp;Reject H<sub>0</sub> if p-value ≤ α&nbsp;&nbsp;·&nbsp;&nbsp;Lower-tail critical value rule: reject H<sub>0</sub> if z ≤ −z<sub>α</sub>',
          steps: [
            '<strong>Identify the case.</strong> σ = 2 is given, so this is the σ-known case and the test statistic uses the z distribution. It is a lower-tail test.',
            '<strong>(a) Standard error:</strong> σ ÷ √n = 2 ÷ √60 = 2 ÷ 7.746 = 0.2582',
            '<strong>Test statistic:</strong> z = (19.4 − 20) ÷ 0.2582 = −0.6 ÷ 0.2582 = <strong>−2.32</strong>',
            '<strong>(b) p-value.</strong> For a lower-tail test the p-value is the area to the LEFT of the test statistic. From the standard normal table, the area to the left of −2.32 is <strong>0.0102</strong>. (Do not double it — this is a one-tailed test.)',
            '<strong>(c)</strong> 0.0102 ≤ 0.05, so <strong>reject H<sub>0</sub></strong>. There is sufficient evidence at the .05 level to conclude the population mean is less than 20.',
            '<strong>(d) Critical value rule.</strong> At α = .05 for a lower-tail test, z<sub>.05</sub> = 1.645, so the rule is: <strong>reject H<sub>0</sub> if z ≤ −1.645</strong>. Since −2.32 ≤ −1.645, <strong>reject H<sub>0</sub></strong> — the same conclusion as the p-value approach.'
          ],
          answer: 'z = −2.32 · p-value = 0.0102 · At α = .05, reject H0 · Critical value rule: reject if z ≤ −1.645; since −2.32 ≤ −1.645, reject H0.',
          note: 'The p-value and critical value approaches always agree. Showing both is free insurance on an exam.' }
      ] },

    { chapter: 'Ch 10 (Course 24) — Inference With Two Populations',
      problems: [
        { topic: 'Difference Between Two Population Means, σ Unknown',
          q: 'Two independent random samples are taken from two normal populations. Sample 1: 10, 7, 13, 7, 9, 8. Sample 2: 8, 7, 8, 4, 6, 9. (a) Compute the two sample means. (b) Compute the two sample standard deviations. (c) What is the point estimate of the difference between the two population means? (d) What is the 90% confidence interval estimate of the difference?',
          formula: 'x̄ = Σx<sub>i</sub> ÷ n&nbsp;&nbsp;·&nbsp;&nbsp;s = √[Σ(x<sub>i</sub> − x̄)² ÷ (n − 1)]&nbsp;&nbsp;·&nbsp;&nbsp;(x̄<sub>1</sub> − x̄<sub>2</sub>) ± t<sub>α/2</sub>√[(s<sub>1</sub>²/n<sub>1</sub>) + (s<sub>2</sub>²/n<sub>2</sub>)]',
          steps: [
            '<strong>(a) Sample means.</strong> Sample 1: (10 + 7 + 13 + 7 + 9 + 8) = 54 → x̄<sub>1</sub> = 54 ÷ 6 = <strong>9</strong>. Sample 2: (8 + 7 + 8 + 4 + 6 + 9) = 42 → x̄<sub>2</sub> = 42 ÷ 6 = <strong>7</strong>.',
            '<strong>(b) Sample 1 standard deviation.</strong> Deviations: 1, −2, 4, −2, 0, −1 → squares 1, 4, 16, 4, 0, 1 = 26. s<sub>1</sub>² = 26 ÷ 5 = 5.2 → s<sub>1</sub> = <strong>2.280</strong>',
            '<strong>Sample 2 standard deviation.</strong> Deviations: 1, 0, 1, −3, −1, 2 → squares 1, 0, 1, 9, 1, 4 = 16. s<sub>2</sub>² = 16 ÷ 5 = 3.2 → s<sub>2</sub> = <strong>1.789</strong>',
            '<strong>(c) Point estimate:</strong> x̄<sub>1</sub> − x̄<sub>2</sub> = 9 − 7 = <strong>2</strong>',
            '<strong>(d) Standard error:</strong> √[(5.2 ÷ 6) + (3.2 ÷ 6)] = √(0.8667 + 0.5333) = √1.4 = <strong>1.1832</strong> — note the variances ADD.',
            '<strong>Degrees of freedom</strong> (Welch): numerator (1.4)² = 1.96; denominator (1/5)(0.8667)² + (1/5)(0.5333)² = 0.15022 + 0.05689 = 0.20711. df = 1.96 ÷ 0.20711 = 9.46 → round DOWN to <strong>df = 9</strong>.',
            '<strong>t value:</strong> for a 90% interval, α/2 = .05, and t<sub>.05</sub> with 9 df = <strong>1.833</strong>',
            '<strong>Margin of error:</strong> 1.833 × 1.1832 = 2.169',
            '<strong>Interval:</strong> 2 ± 2.169 = <strong>(−0.17, 4.17)</strong>'
          ],
          answer: 'x̄1 = 9, x̄2 = 7 · s1 = 2.280, s2 = 1.789 · Point estimate of μ1 − μ2 = 2 · 90% confidence interval: (−0.17, 4.17)',
          note: 'The interval contains 0, so at the 90% confidence level you cannot conclude the two population means differ — even though the observed sample difference was 2.' },

        { topic: 'Difference Between Two Population Proportions',
          q: 'Does trust in Pinterest differ by gender? Of 150 women sampled, 117 trust recommendations made on Pinterest; of 170 men sampled, 102 do. (a) What is the point estimate of the proportion of women who trust the recommendations? (b) Of men? (c) Provide a 95% confidence interval estimate of the difference between the two proportions.',
          formula: 'p̄ = x ÷ n&nbsp;&nbsp;·&nbsp;&nbsp;(p̄<sub>1</sub> − p̄<sub>2</sub>) ± z<sub>α/2</sub>√[ p̄<sub>1</sub>(1 − p̄<sub>1</sub>)/n<sub>1</sub> + p̄<sub>2</sub>(1 − p̄<sub>2</sub>)/n<sub>2</sub> ]',
          steps: [
            '<strong>(a) Women:</strong> p̄<sub>1</sub> = 117 ÷ 150 = <strong>0.78</strong>',
            '<strong>(b) Men:</strong> p̄<sub>2</sub> = 102 ÷ 170 = <strong>0.60</strong>',
            '<strong>(c) Point estimate of the difference:</strong> 0.78 − 0.60 = <strong>0.18</strong>',
            '<strong>Standard error</strong> — a confidence interval uses the SEPARATE sample proportions, not a pooled estimate:<br>(0.78)(0.22) ÷ 150 = 0.1716 ÷ 150 = 0.0011440<br>(0.60)(0.40) ÷ 170 = 0.2400 ÷ 170 = 0.0014118<br>Sum = 0.0025558 → √0.0025558 = <strong>0.050555</strong>',
            '<strong>z value:</strong> for 95% confidence, z<sub>.025</sub> = <strong>1.96</strong>',
            '<strong>Margin of error:</strong> 1.96 × 0.050555 = 0.0991',
            '<strong>Interval:</strong> 0.18 ± 0.0991 = <strong>(0.081, 0.279)</strong>'
          ],
          answer: 'Women: p̄1 = 0.78 · Men: p̄2 = 0.60 · Point estimate of the difference = 0.18 · 95% confidence interval: (0.081, 0.279)',
          note: 'The entire interval lies above zero, so you can be 95% confident that a higher proportion of women than men trust recommendations made on Pinterest — the difference is somewhere between about 8 and 28 percentage points. Remember: confidence intervals use p̄1 and p̄2 separately, but a hypothesis test of p1 = p2 uses the pooled p̄.' }
      ] }
  ]
};
