/* Statistics formula sheet — every equation from the six course chapters */
window.STAT_FORMULAS = {
  title: 'Statistics Formula Sheet',
  intro: 'Every formula from the six statistics chapters — Ch 2 Tabular and Graphical Displays (course Ch 19), Ch 3 Numerical Measures (Ch 20), Ch 4 Probability (Ch 21), Ch 7 Sampling Distributions (Ch 22), Ch 9 Hypothesis Tests (Ch 23), and Ch 10 Two Populations (Ch 24) — with what each one is used for and how to apply it. Built for an open-note test.',
  sections: [
    { title: 'Ch 2 (Course 19) — Tabular and Graphical Displays', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:36%">Formula</th><th style="width:28%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Relative frequency = f<sub>i</sub> ÷ n</div></td><td>Proportion of observations in a class.</td><td>All relative frequencies sum to 1. Multiply by 100 for percent frequency (sums to 100).</td></tr>' +
      '<tr><td><div class="formula">Approximate class width = (Largest value − Smallest value) ÷ Number of classes</div></td><td>Setting up a quantitative frequency distribution.</td><td>Round up to a convenient number. Use 5–20 classes; classes must be nonoverlapping and of equal width.</td></tr>' +
      '<tr><td><div class="formula">Class midpoint = (Lower limit + Upper limit) ÷ 2</div></td><td>Representing a class by a single value.</td><td>Used for plotting and for grouped-data calculations.</td></tr>' +
      '<tr><td><div class="formula">Row % = cell ÷ row total&nbsp;·&nbsp;Column % = cell ÷ column total</div></td><td>Comparing distributions across a crosstabulation.</td><td>Always percentage before comparing rows or columns of different sizes. Watch for Simpson’s paradox.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 3 (Course 20) — Measures of Location', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:36%">Formula</th><th style="width:28%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">x̄ = Σx<sub>i</sub> ÷ n&nbsp;&nbsp;(sample)<br>μ = Σx<sub>i</sub> ÷ N&nbsp;&nbsp;(population)</div></td><td>The arithmetic mean.</td><td>Uses every value, so it is sensitive to outliers.</td></tr>' +
      '<tr><td><div class="formula">Weighted mean:&nbsp;x̄ = Σw<sub>i</sub>x<sub>i</sub> ÷ Σw<sub>i</sub></div></td><td>When observations differ in importance or quantity.</td><td>GPA, average cost per unit across different purchase sizes.</td></tr>' +
      '<tr><td><div class="formula">Geometric mean:&nbsp;x̄<sub>g</sub> = ⁿ√(x<sub>1</sub>x<sub>2</sub>…x<sub>n</sub>)</div></td><td>Averaging rates of change over several periods.</td><td>Use growth factors (1 + r), then subtract 1 to get the mean rate.</td></tr>' +
      '<tr><td><div class="formula">Median</div></td><td>Center of the data, resistant to outliers.</td><td>Order the data. Odd n: middle value. Even n: average of the two middle values. Preferred for skewed data.</td></tr>' +
      '<tr><td><div class="formula">Mode</div></td><td>Most frequent value; the only measure usable for categorical data.</td><td>Two modes = bimodal; three or more = multimodal.</td></tr>' +
      '<tr><td><div class="formula">L<sub>p</sub> = (p ÷ 100)(n + 1)</div></td><td>Locating the pth percentile.</td><td>If L<sub>p</sub> is not a whole number, interpolate between the surrounding ordered values. Q1 = 25th, Q2 = median, Q3 = 75th.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 3 (Course 20) — Measures of Variability and Association', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:36%">Formula</th><th style="width:28%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Range = Largest − Smallest</div></td><td>Simplest measure of spread.</td><td>Uses only two values, so it is badly affected by outliers.</td></tr>' +
      '<tr><td><div class="formula">IQR = Q3 − Q1</div></td><td>Spread of the middle 50%.</td><td>Immune to outliers; used in the boxplot outlier rule.</td></tr>' +
      '<tr><td><div class="formula">s² = Σ(x<sub>i</sub> − x̄)² ÷ (n − 1)<br>σ² = Σ(x<sub>i</sub> − μ)² ÷ N</div></td><td>Variance.</td><td>Dividing by n − 1 (degrees of freedom) makes s² unbiased. Units are squared.</td></tr>' +
      '<tr><td><div class="formula">s = √s²&nbsp;&nbsp;σ = √σ²</div></td><td>Standard deviation.</td><td>Same units as the data, which is why it is the preferred spread measure.</td></tr>' +
      '<tr><td><div class="formula">CV = (s ÷ x̄) × 100</div></td><td>Relative variability.</td><td>Compares spread across data sets with different units or very different means.</td></tr>' +
      '<tr><td><div class="formula">z<sub>i</sub> = (x<sub>i</sub> − x̄) ÷ s</div></td><td>Standardized distance from the mean.</td><td>Mean of all z-scores is 0; standard deviation is 1. |z| > 3 flags a possible outlier.</td></tr>' +
      '<tr><td><div class="formula">Chebyshev:&nbsp;at least (1 − 1/z²) of values are within z standard deviations</div></td><td>Any distribution, any shape.</td><td>z = 2 → 75%; z = 3 → 89%; z = 4 → 94%. Requires z > 1.</td></tr>' +
      '<tr><td><div class="formula">Empirical rule: 68% / 95% / 99.7%</div></td><td>Bell-shaped data only.</td><td>Within 1, 2, and 3 standard deviations of the mean respectively.</td></tr>' +
      '<tr><td><div class="formula">Outlier limits: Q1 − 1.5(IQR)&nbsp;and&nbsp;Q3 + 1.5(IQR)</div></td><td>Boxplot outlier detection.</td><td>Whiskers extend to the most extreme values still inside these limits.</td></tr>' +
      '<tr><td><div class="formula">s<sub>xy</sub> = Σ(x<sub>i</sub> − x̄)(y<sub>i</sub> − ȳ) ÷ (n − 1)</div></td><td>Sample covariance — direction of a linear relationship.</td><td>Sign is meaningful; magnitude depends on units.</td></tr>' +
      '<tr><td><div class="formula">r<sub>xy</sub> = s<sub>xy</sub> ÷ (s<sub>x</sub>s<sub>y</sub>)</div></td><td>Correlation coefficient — direction AND strength.</td><td>Always between −1 and +1. Measures LINEAR association only, and never establishes causation.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 4 (Course 21) — Probability', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:36%">Formula</th><th style="width:28%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Multiple-step counting rule:&nbsp;(n<sub>1</sub>)(n<sub>2</sub>)…(n<sub>k</sub>)</div></td><td>Total outcomes of a k-step experiment.</td><td>Three coin tosses: 2 × 2 × 2 = 8 outcomes.</td></tr>' +
      '<tr><td><div class="formula">Combinations:&nbsp;C(N,n) = N! ÷ [n!(N − n)!]</div></td><td>Selecting n from N when ORDER DOES NOT matter.</td><td>Committees, lottery numbers, hands of cards.</td></tr>' +
      '<tr><td><div class="formula">Permutations:&nbsp;P(N,n) = N! ÷ (N − n)!</div></td><td>Selecting n from N when ORDER MATTERS.</td><td>Always larger than the corresponding combination.</td></tr>' +
      '<tr><td><div class="formula">Basic requirements:&nbsp;0 ≤ P(E<sub>i</sub>) ≤ 1&nbsp;and&nbsp;ΣP(E<sub>i</sub>) = 1</div></td><td>Checking any probability assignment.</td><td>Applies to the classical, relative frequency, and subjective methods alike.</td></tr>' +
      '<tr><td><div class="formula">P(A<sup>c</sup>) = 1 − P(A)</div></td><td>Complement rule.</td><td>Often the fastest path for "at least one" problems.</td></tr>' +
      '<tr><td><div class="formula">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</div></td><td>Addition law — probability of A or B.</td><td>Subtracting the intersection prevents double counting. If mutually exclusive, P(A ∩ B) = 0.</td></tr>' +
      '<tr><td><div class="formula">P(A|B) = P(A ∩ B) ÷ P(B)</div></td><td>Conditional probability.</td><td>Knowing B occurred shrinks the sample space to B.</td></tr>' +
      '<tr><td><div class="formula">P(A ∩ B) = P(A|B)P(B) = P(B|A)P(A)</div></td><td>Multiplication law — probability of A and B.</td><td>If independent, this reduces to P(A)P(B).</td></tr>' +
      '<tr><td><div class="formula">Independence:&nbsp;P(A|B) = P(A)</div></td><td>Testing whether events are independent.</td><td>Mutually exclusive events with nonzero probability are NEVER independent.</td></tr>' +
      '<tr><td><div class="formula">Bayes:&nbsp;P(A<sub>i</sub>|B) = P(A<sub>i</sub>)P(B|A<sub>i</sub>) ÷ ΣP(A<sub>j</sub>)P(B|A<sub>j</sub>)</div></td><td>Revising a prior probability after new information.</td><td>Tabular method: prior × conditional = joint; each posterior = its joint ÷ the sum of the joints.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 7 (Course 22) — Sampling Distributions', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:36%">Formula</th><th style="width:28%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">E(x̄) = μ</div></td><td>The sample mean is unbiased.</td><td>True for every sample size.</td></tr>' +
      '<tr><td><div class="formula">σ<sub>x̄</sub> = σ ÷ √n</div></td><td>Standard error of the mean.</td><td>Quadrupling n halves it. σ = 2, n = 60 → 0.258.</td></tr>' +
      '<tr><td><div class="formula">Finite population correction:&nbsp;σ<sub>x̄</sub> = √[(N − n)/(N − 1)] × (σ ÷ √n)</div></td><td>Sampling without replacement from a finite population.</td><td>Ignore it whenever n/N ≤ 0.05.</td></tr>' +
      '<tr><td><div class="formula">Central limit theorem:&nbsp;x̄ ≈ normal for large n</div></td><td>Justifies normal-based inference regardless of population shape.</td><td>n ≥ 30 rule of thumb; n ≥ 50 for highly skewed data; any n if the population is normal.</td></tr>' +
      '<tr><td><div class="formula">E(p̄) = p&nbsp;&nbsp;σ<sub>p̄</sub> = √[p(1 − p) ÷ n]</div></td><td>Sampling distribution of a proportion.</td><td>p = 0.17, n = 800 → 0.0133. Normal approximation needs np ≥ 5 and n(1 − p) ≥ 5.</td></tr>' +
      '<tr><td><div class="formula">z = (x̄ − μ) ÷ σ<sub>x̄</sub>&nbsp;&nbsp;z = (p̄ − p) ÷ σ<sub>p̄</sub></div></td><td>Probability questions about a sample mean or proportion.</td><td>"Within 0.02 of p": compute z at both ends and take the area between.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 9 (Course 23) — Hypothesis Tests, One Population', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:36%">Formula</th><th style="width:28%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">H0: μ ≥ μ<sub>0</sub> / μ ≤ μ<sub>0</sub> / μ = μ<sub>0</sub><br>Ha: μ &lt; μ<sub>0</sub> / μ &gt; μ<sub>0</sub> / μ ≠ μ<sub>0</sub></div></td><td>The three hypothesis forms.</td><td>The equality ALWAYS belongs to H0. Hypotheses are about μ, never x̄.</td></tr>' +
      '<tr><td><div class="formula">z = (x̄ − μ<sub>0</sub>) ÷ (σ ÷ √n)</div></td><td>Test about a mean, σ KNOWN.</td><td>x̄ = 19.4, μ0 = 20, σ = 2, n = 60 → z = −2.32, p = 0.0102.</td></tr>' +
      '<tr><td><div class="formula">t = (x̄ − μ<sub>0</sub>) ÷ (s ÷ √n),&nbsp;df = n − 1</div></td><td>Test about a mean, σ UNKNOWN.</td><td>The choice is driven by whether σ is known, not by n.</td></tr>' +
      '<tr><td><div class="formula">z = (p̄ − p<sub>0</sub>) ÷ √[p<sub>0</sub>(1 − p<sub>0</sub>) ÷ n]</div></td><td>Test about a proportion.</td><td>The standard error uses the HYPOTHESIZED p<sub>0</sub>, not p̄.</td></tr>' +
      '<tr><td><div class="formula">Reject H0 if p-value ≤ α</div></td><td>p-value approach.</td><td>Two-tailed: find the tail area beyond |test statistic| and DOUBLE it.</td></tr>' +
      '<tr><td><div class="formula">Lower: reject if z ≤ −z<sub>α</sub><br>Upper: reject if z ≥ z<sub>α</sub><br>Two-tail: reject if |z| ≥ z<sub>α/2</sub></div></td><td>Critical value approach.</td><td>α = .10 → 1.282 / 1.645 · α = .05 → 1.645 / 1.96 · α = .01 → 2.326 / 2.576 (one / two tail).</td></tr>' +
      '<tr><td><div class="formula">x̄ = μ<sub>0</sub> ± z<sub>α</sub>(σ ÷ √n)</div></td><td>Rejection rule expressed in sample-mean units.</td><td>Step 1 of computing β.</td></tr>' +
      '<tr><td><div class="formula">Power = 1 − β</div></td><td>Probability of correctly rejecting a false H0.</td><td>β is computed for one specific assumed true μ; power rises as the true μ moves away from μ<sub>0</sub>.</td></tr>' +
      '<tr><td><div class="formula">n = (z<sub>α</sub> + z<sub>β</sub>)²σ² ÷ (μ<sub>0</sub> − μ<sub>a</sub>)²</div></td><td>Sample size controlling BOTH error types.</td><td>Use z<sub>α/2</sub> for a two-tailed test. Smaller detectable differences require far larger n.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 10 (Course 24) — Two Populations', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:36%">Formula</th><th style="width:28%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">σ<sub>x̄1−x̄2</sub> = √[(σ<sub>1</sub>²/n<sub>1</sub>) + (σ<sub>2</sub>²/n<sub>2</sub>)]</div></td><td>Standard error of the difference between two means.</td><td>Variances ADD even though means are subtracted.</td></tr>' +
      '<tr><td><div class="formula">(x̄<sub>1</sub> − x̄<sub>2</sub>) ± z<sub>α/2</sub>√[(σ<sub>1</sub>²/n<sub>1</sub>) + (σ<sub>2</sub>²/n<sub>2</sub>)]</div></td><td>Interval for μ1 − μ2, σ known.</td><td>n1 ≥ 30 and n2 ≥ 30 adequate; otherwise both populations should be approximately normal.</td></tr>' +
      '<tr><td><div class="formula">z = [(x̄<sub>1</sub> − x̄<sub>2</sub>) − D<sub>0</sub>] ÷ √[(σ<sub>1</sub>²/n<sub>1</sub>) + (σ<sub>2</sub>²/n<sub>2</sub>)]</div></td><td>Test about μ1 − μ2, σ known.</td><td>D<sub>0</sub> = 0 in the standard test of equality.</td></tr>' +
      '<tr><td><div class="formula">(x̄<sub>1</sub> − x̄<sub>2</sub>) ± t<sub>α/2</sub>√[(s<sub>1</sub>²/n<sub>1</sub>) + (s<sub>2</sub>²/n<sub>2</sub>)]</div></td><td>Interval for μ1 − μ2, σ unknown.</td><td>Example: 2 ± 1.833(1.1832) = (−0.17, 4.17).</td></tr>' +
      '<tr><td><div class="formula">t = [(x̄<sub>1</sub> − x̄<sub>2</sub>) − D<sub>0</sub>] ÷ √[(s<sub>1</sub>²/n<sub>1</sub>) + (s<sub>2</sub>²/n<sub>2</sub>)]</div></td><td>Test about μ1 − μ2, σ unknown.</td><td>Robust: nearly equal sample sizes totaling ≥ 20 work well even for non-normal populations.</td></tr>' +
      '<tr><td><div class="formula">df = [(s<sub>1</sub>²/n<sub>1</sub>)+(s<sub>2</sub>²/n<sub>2</sub>)]² ÷ { [1/(n<sub>1</sub>−1)](s<sub>1</sub>²/n<sub>1</sub>)² + [1/(n<sub>2</sub>−1)](s<sub>2</sub>²/n<sub>2</sub>)² }</div></td><td>Degrees of freedom, two-sample t.</td><td>Round DOWN to the nearest integer.</td></tr>' +
      '<tr><td><div class="formula">d̄ = Σd<sub>i</sub> ÷ n&nbsp;&nbsp;s<sub>d</sub> = √[Σ(d<sub>i</sub> − d̄)² ÷ (n − 1)]</div></td><td>Matched samples — summarize the paired differences.</td><td>n = number of PAIRS.</td></tr>' +
      '<tr><td><div class="formula">t = (d̄ − μ<sub>d</sub>) ÷ (s<sub>d</sub> ÷ √n),&nbsp;df = n − 1<br>Interval: d̄ ± t<sub>α/2</sub>(s<sub>d</sub> ÷ √n)</div></td><td>Matched sample test and interval.</td><td>A one-sample procedure applied to the differences. Matched designs give better precision and are recommended when feasible.</td></tr>' +
      '<tr><td><div class="formula">(p̄<sub>1</sub> − p̄<sub>2</sub>) ± z<sub>α/2</sub>√[p̄<sub>1</sub>(1−p̄<sub>1</sub>)/n<sub>1</sub> + p̄<sub>2</sub>(1−p̄<sub>2</sub>)/n<sub>2</sub>]</div></td><td>Interval for p1 − p2.</td><td>Uses the SEPARATE sample proportions. Example: 0.18 ± 1.96(0.0506) = (0.081, 0.279).</td></tr>' +
      '<tr><td><div class="formula">p̄ = (n<sub>1</sub>p̄<sub>1</sub> + n<sub>2</sub>p̄<sub>2</sub>) ÷ (n<sub>1</sub> + n<sub>2</sub>)</div></td><td>Pooled estimate.</td><td>Total successes ÷ total observations. Used ONLY in the hypothesis test.</td></tr>' +
      '<tr><td><div class="formula">z = (p̄<sub>1</sub> − p̄<sub>2</sub>) ÷ √{p̄(1 − p̄)[(1/n<sub>1</sub>) + (1/n<sub>2</sub>)]}</div></td><td>Test of H0: p1 = p2.</td><td>Interval uses p̄1 and p̄2 separately; the TEST uses the pooled p̄.</td></tr>' +
      '</table></div>' },

    { title: 'Critical Values You Should Not Have to Look Up', html:
      '<div class="tablewrap"><table>' +
      '<tr><th>Confidence / α</th><th>One-tailed z</th><th>Two-tailed z (= z for a CI)</th></tr>' +
      '<tr><td>90% · α = .10</td><td>1.282</td><td>1.645</td></tr>' +
      '<tr><td>95% · α = .05</td><td>1.645</td><td>1.960</td></tr>' +
      '<tr><td>98% · α = .02</td><td>2.054</td><td>2.326</td></tr>' +
      '<tr><td>99% · α = .01</td><td>2.326</td><td>2.576</td></tr>' +
      '</table></div>' +
      '<div class="tablewrap"><table>' +
      '<tr><th>Quick decision rules</th></tr>' +
      '<tr><td>Reject H0 when p-value ≤ α, or when the test statistic falls beyond the critical value. The two approaches always agree.</td></tr>' +
      '<tr><td>A confidence interval for a difference that CONTAINS 0 means no significant difference.</td></tr>' +
      '<tr><td>σ given → z. Only s given → t with df = n − 1 (one sample) or the Welch df (two samples).</td></tr>' +
      '<tr><td>Proportion CONFIDENCE INTERVAL → use p̄. Proportion HYPOTHESIS TEST → use p<sub>0</sub> (one sample) or pooled p̄ (two samples).</td></tr>' +
      '</table></div>' }
  ]
};
