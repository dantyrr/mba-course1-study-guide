window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'stat-ch9', subject: 'stat', num: 9, altLabel: 'Course Ch 23',
  title: 'Hypothesis Tests',
  overview: 'The complete hypothesis-testing toolkit: how to write H0 and Ha, Type I and Type II errors, tests about a population mean with σ known (z) and σ unknown (t), tests about a population proportion, the p-value / critical-value / confidence-interval approaches, computing β and power, sample size determination, and the difference between statistical and practical significance.',
  sections: [
    { title: '0. What a Hypothesis Test Is', html:
      '<p><span class="term">Hypothesis testing</span> is a statistical procedure that uses sample data to determine whether a statement about the value of a population parameter should or should not be rejected.</p>' +
      '<div class="tablewrap"><table><tr><th>Symbol</th><th>Meaning</th></tr>' +
      '<tr><td><strong>H<sub>0</sub></strong></td><td>The <span class="term">null hypothesis</span> — the tentative assumption, the status quo, the claim being challenged. <strong>Always contains an equality: =, ≤, or ≥.</strong></td></tr>' +
      '<tr><td><strong>H<sub>a</sub></strong></td><td>The <span class="term">alternative hypothesis</span> — the opposite of H0, usually what the researcher is trying to establish. <strong>Always strict: ≠, &gt;, or &lt;.</strong></td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>The single most reliable exam shortcut:</strong> the equality sign <em>always</em> goes in H0. If an answer choice puts =, ≤, or ≥ in Ha, it is wrong.</div>' },

    { title: '1. Developing Null and Alternative Hypotheses (9.1)', html:
      '<p>The textbook gives two framings. Figuring out which one you are in is most of the work.</p>' +
      '<p><strong>A. The alternative hypothesis as a research hypothesis.</strong> You want to <em>prove</em> something new — a new method is faster, a new drug works better. The research claim goes in <strong>H<sub>a</sub></strong>, because rejecting H0 is the strong conclusion that gives statistical support to the claim.</p>' +
      '<div class="formula">New car gets more than 24 mpg → H0: μ ≤ 24&nbsp;&nbsp;Ha: μ &gt; 24</div>' +
      '<p><strong>B. The null hypothesis as an assumption to be challenged.</strong> A claim is already being made (by a manufacturer, a label, a supplier) and you are testing whether the data contradict it. The existing claim goes in <strong>H<sub>0</sub></strong> and gets the benefit of the doubt; you reject it only with strong evidence.</p>' +
      '<div class="formula">Soft drink labeled "at least 67.6 oz" → H0: μ ≥ 67.6&nbsp;&nbsp;Ha: μ &lt; 67.6</div>' +
      '<p><strong>Summary of the three forms:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Test</th><th>H0</th><th>Ha</th></tr>' +
      '<tr><td>Lower tail (one-tailed)</td><td>μ ≥ μ<sub>0</sub></td><td>μ &lt; μ<sub>0</sub></td></tr>' +
      '<tr><td>Upper tail (one-tailed)</td><td>μ ≤ μ<sub>0</sub></td><td>μ &gt; μ<sub>0</sub></td></tr>' +
      '<tr><td>Two-tailed</td><td>μ = μ<sub>0</sub></td><td>μ ≠ μ<sub>0</sub></td></tr>' +
      '</table></div>' +
      '<p>Useful questions the chapter suggests: <em>What is the purpose of collecting the sample? What conclusions are we hoping to make?</em> Sometimes it is easier to write Ha first and then negate it.</p>' },

    { title: '2. Type I and Type II Errors (9.2)', html:
      '<p>Because the test is based on a sample, errors are possible.</p>' +
      '<div class="tablewrap"><table><tr><th></th><th>H0 is true</th><th>H0 is false</th></tr>' +
      '<tr><td><strong>Do not reject H0</strong></td><td>Correct conclusion</td><td><strong>Type II error</strong> (probability β)</td></tr>' +
      '<tr><td><strong>Reject H0</strong></td><td><strong>Type I error</strong> (probability α)</td><td>Correct conclusion</td></tr>' +
      '</table></div>' +
      '<ul>' +
      '<li><span class="term">Type I error</span> — <strong>rejecting H0 when H0 is actually true</strong>. A "false alarm."</li>' +
      '<li><span class="term">Type II error</span> — <strong>failing to reject H0 when H0 is actually false</strong>. A "missed detection."</li>' +
      '<li><span class="term">Level of significance α</span> — the probability of making a Type I error when the equality part of H0 is true. <strong>You choose α; it is the controlled error.</strong> Common values: .01, .05, .10.</li>' +
      '</ul>' +
      '<p>A test in which only α is controlled is called a <strong>significance test</strong>. Because β is <em>not</em> controlled, statisticians recommend the wording <strong>"do not reject H0"</strong> rather than "accept H0."</p>' +
      '<div class="tip"><strong>The trade-off:</strong> lowering α (making rejection harder) <em>raises</em> β, and vice versa. The only way to lower both at once is to <strong>increase the sample size</strong>.</div>' },

    { title: '3. Population Mean, σ Known (9.3)', html:
      '<div class="formula">Test statistic:&nbsp;&nbsp;z = (x̄ − μ<sub>0</sub>) ÷ (σ ÷ √n)</div>' +
      '<p><strong>The p-value approach.</strong> The <span class="term">p-value</span> is the probability, assuming H0 is true as an equality, of obtaining a sample result <strong>at least as unlikely as the one observed</strong>. A small p-value means the data strongly contradict H0.</p>' +
      '<div class="tablewrap"><table><tr><th>Test</th><th>p-value</th></tr>' +
      '<tr><td>Lower tail</td><td>Area in the lower tail to the LEFT of z</td></tr>' +
      '<tr><td>Upper tail</td><td>Area in the upper tail to the RIGHT of z</td></tr>' +
      '<tr><td>Two-tailed</td><td>Tail area beyond |z|, <strong>DOUBLED</strong></td></tr>' +
      '</table></div>' +
      '<div class="formula">Rejection rule (p-value approach):&nbsp;&nbsp;Reject H0 if p-value ≤ α</div>' +
      '<p><strong>The critical value approach.</strong> The <span class="term">critical value</span> is the value of the test statistic that cuts off exactly α in the rejection region.</p>' +
      '<div class="tablewrap"><table><tr><th>Test</th><th>Rejection rule</th><th>Critical value at α = .05</th></tr>' +
      '<tr><td>Lower tail</td><td>Reject H0 if z ≤ −z<sub>α</sub></td><td>−1.645</td></tr>' +
      '<tr><td>Upper tail</td><td>Reject H0 if z ≥ z<sub>α</sub></td><td>+1.645</td></tr>' +
      '<tr><td>Two-tailed</td><td>Reject H0 if z ≤ −z<sub>α/2</sub> or z ≥ z<sub>α/2</sub></td><td>±1.96</td></tr>' +
      '</table></div>' +
      '<p>Memorize: α = .10 → 1.282 / 1.645 · α = .05 → 1.645 / 1.96 · α = .01 → 2.326 / 2.576 (one-tailed / two-tailed).</p>' +
      '<p><strong>The confidence interval approach</strong> (two-tailed tests only). Build a 100(1 − α)% confidence interval for μ. If the hypothesized value μ<sub>0</sub> is <strong>not inside the interval</strong>, reject H0.</p>' +
      '<div class="tip"><strong>All three approaches always agree.</strong> They are three ways of asking the same question.</div>' },

    { title: '4. Worked Example — σ Known, Lower Tail', html:
      '<p>A production process is supposed to average at least 20 units per hour. σ = 2 is known from history. A sample of n = 60 hours gives x̄ = 19.4. Test at α = .05.</p>' +
      '<ol>' +
      '<li><strong>Hypotheses:</strong> H0: μ ≥ 20&nbsp;&nbsp;Ha: μ &lt; 20 (lower tail)</li>' +
      '<li><strong>Standard error:</strong> σ/√n = 2 ÷ √60 = 2 ÷ 7.746 = 0.2582</li>' +
      '<li><strong>Test statistic:</strong> z = (19.4 − 20) ÷ 0.2582 = <strong>−2.32</strong></li>' +
      '<li><strong>p-value:</strong> area to the left of −2.32 = <strong>0.0102</strong></li>' +
      '<li><strong>Decision:</strong> 0.0102 ≤ 0.05 → <strong>reject H0</strong></li>' +
      '<li><strong>Critical value check:</strong> −2.32 ≤ −1.645 → reject. Same answer.</li>' +
      '<li><strong>Conclusion:</strong> there is sufficient evidence that the mean is below 20 units per hour.</li>' +
      '</ol>' },

    { title: '5. Population Mean, σ Unknown (9.4)', html:
      '<p>When σ is unknown, estimate it with the sample standard deviation s and use the <strong>t distribution</strong> with <strong>n − 1 degrees of freedom</strong>.</p>' +
      '<div class="formula">Test statistic:&nbsp;&nbsp;t = (x̄ − μ<sub>0</sub>) ÷ (s ÷ √n),&nbsp;&nbsp;df = n − 1</div>' +
      '<p>Everything else is identical to the σ-known case — same three forms, same rejection rules, with t<sub>α</sub> replacing z<sub>α</sub>.</p>' +
      '<p><strong>Sample size guidance from the chapter:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Population</th><th>Requirement</th></tr>' +
      '<tr><td>Normally distributed</td><td>Exact results for <strong>any</strong> sample size</td></tr>' +
      '<tr><td>Approximately normal</td><td>Small samples (even n &lt; 15) acceptable</td></tr>' +
      '<tr><td>Not normal</td><td>Procedures are approximations; <strong>n ≥ 30</strong> gives good results in most cases</td></tr>' +
      '<tr><td>Highly skewed or with outliers</td><td>Sample sizes approaching <strong>50</strong> recommended</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>How to choose z vs. t:</strong> it is NOT about sample size. It is about whether <strong>σ (the population standard deviation) is given</strong>. σ given → z. Only s given → t with df = n − 1.</div>' },

    { title: '6. Population Proportion (9.5)', html:
      '<p>The three forms, with p<sub>0</sub> the hypothesized proportion:</p>' +
      '<div class="tablewrap"><table><tr><th>Lower tail</th><th>Upper tail</th><th>Two-tailed</th></tr>' +
      '<tr><td>H0: p ≥ p<sub>0</sub><br>Ha: p &lt; p<sub>0</sub></td><td>H0: p ≤ p<sub>0</sub><br>Ha: p &gt; p<sub>0</sub></td><td>H0: p = p<sub>0</sub><br>Ha: p ≠ p<sub>0</sub></td></tr>' +
      '</table></div>' +
      '<div class="formula">Test statistic:&nbsp;&nbsp;z = (p̄ − p<sub>0</sub>) ÷ σ<sub>p̄</sub>&nbsp;&nbsp;where&nbsp;&nbsp;σ<sub>p̄</sub> = √[p<sub>0</sub>(1 − p<sub>0</sub>) ÷ n]</div>' +
      '<p><strong>Critical detail:</strong> the standard error uses <strong>p<sub>0</sub>, the hypothesized value — not p̄</strong>. This is a favorite exam trap. (Confidence intervals for a proportion use p̄; hypothesis tests use p<sub>0</sub>, because the test assumes H0 is true.)</p>' +
      '<p>Requires np<sub>0</sub> ≥ 5 and n(1 − p<sub>0</sub>) ≥ 5 so the normal approximation holds. Rejection rules and the p-value logic are exactly the same as for a mean with σ known.</p>' },

    { title: '7. Hypothesis Testing and Decision Making (9.6)', html:
      '<p>In a <strong>significance test</strong> you control only α. That is why "do not reject H0" is the correct wording — you have no control over how often you would miss a false H0.</p>' +
      '<p>But when <strong>two different actions must be taken</strong> depending on the outcome (accept the shipment or return it), statisticians recommend controlling <strong>both</strong> α and β. Once β is under control, you may legitimately say <strong>"accept H0."</strong></p>' },

    { title: '8. Calculating the Probability of a Type II Error (9.7)', html:
      '<p>β is computed <em>for a specific assumed true value of μ</em> — there is no single β for a test.</p>' +
      '<p><strong>The procedure:</strong></p>' +
      '<ol>' +
      '<li>Write H0 and Ha and choose α.</li>' +
      '<li>Use the critical value to solve for the <strong>rejection rule in terms of x̄</strong>:<br><span class="formula">x̄ = μ<sub>0</sub> ± z<sub>α</sub>(σ ÷ √n)</span></li>' +
      '<li>Pick a particular true value of μ from the Ha region.</li>' +
      '<li>Compute the probability that x̄ falls in the <strong>do-not-reject</strong> region given that true μ. That probability is β.</li>' +
      '</ol>' +
      '<div class="formula">Power = 1 − β&nbsp;&nbsp;= the probability of correctly rejecting a false H0</div>' +
      '<p>The <span class="term">power curve</span> plots power against the true value of μ. It shows the pattern you should know: the <strong>farther the true μ is from the hypothesized μ<sub>0</sub>, the smaller β and the higher the power</strong>. Big differences are easy to detect; small ones are easy to miss.</p>' },

    { title: '9. Determining the Sample Size (9.8)', html:
      '<p>To control <strong>both</strong> error probabilities, solve for n:</p>' +
      '<div class="formula">n = (z<sub>α</sub> + z<sub>β</sub>)² σ² ÷ (μ<sub>0</sub> − μ<sub>a</sub>)²</div>' +
      '<p>where μ<sub>a</sub> is the specific alternative value you want to be able to detect. For a two-tailed test, replace z<sub>α</sub> with z<sub>α/2</sub>.</p>' +
      '<p>What the formula tells you qualitatively — all worth knowing for a conceptual question:</p>' +
      '<ul>' +
      '<li>Smaller α → larger n required.</li>' +
      '<li>Smaller β (more power) → larger n required.</li>' +
      '<li>Larger σ (more variability) → larger n required.</li>' +
      '<li>A smaller difference |μ<sub>0</sub> − μ<sub>a</sub>| you want to detect → <strong>much</strong> larger n (it is squared in the denominator).</li>' +
      '</ul>' },

    { title: '10. Statistical vs. Practical Significance, and Big Data (9.9)', html:
      '<p><span class="term">Statistical significance</span> means the p-value fell below α — the result is unlikely to be due to chance alone. <span class="term">Practical significance</span> means the difference is large enough to matter in the real world.</p>' +
      '<p><strong>They are not the same thing.</strong> Because the standard error is σ/√n, an extremely large sample makes the standard error tiny, which makes the test statistic huge, which makes almost <em>any</em> difference statistically significant — even a difference far too small to act on.</p>' +
      '<div class="tip"><strong>The big-data warning:</strong> with very large samples, statistically significant results may have no practical significance at all. Always ask about the <em>size</em> of the effect, not just the p-value. Note also that a larger sample reduces <em>sampling</em> error but does nothing about nonsampling error, so a big-data result can be precisely wrong.</div>' },

    { title: '11. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>The equality (=, ≤, ≥) always belongs to H0.</strong></li>' +
      '<li><strong>Type I = reject a TRUE H0 (probability α). Type II = fail to reject a FALSE H0 (probability β).</strong> Learn one of them cold and derive the other.</li>' +
      '<li><strong>Reject H0 when p-value ≤ α.</strong> Small p-value = strong evidence against H0.</li>' +
      '<li><strong>Double the tail area for a two-tailed p-value.</strong></li>' +
      '<li><strong>z when σ is known, t with df = n − 1 when σ is unknown.</strong> It is about σ, not about n.</li>' +
      '<li><strong>A proportion test uses p<sub>0</sub> in the standard error, not p̄.</strong></li>' +
      '<li><strong>Say "do not reject H0," not "accept H0"</strong> — unless β has also been controlled.</li>' +
      '<li><strong>Not rejecting H0 does not prove H0 is true.</strong> It means the evidence was not strong enough.</li>' +
      '<li><strong>Lowering α raises β.</strong> Only a larger n lowers both.</li>' +
      '<li><strong>Power = 1 − β,</strong> and power rises as the true μ moves farther from μ<sub>0</sub>.</li>' +
      '<li><strong>The confidence interval approach works only for two-tailed tests:</strong> reject if μ<sub>0</sub> is outside the interval.</li>' +
      '<li><strong>Statistically significant ≠ practically significant,</strong> especially with very large samples.</li>' +
      '<li><strong>α = .05 critical values: 1.645 one-tailed, 1.96 two-tailed.</strong></li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Hypothesis testing', def: 'A statistical procedure that uses sample data to determine whether a statement about a population parameter should be rejected.' },
    { term: 'Null hypothesis H0', def: 'The tentative assumption or status quo being challenged. It always contains the equality: =, ≤, or ≥.' },
    { term: 'Alternative hypothesis Ha', def: 'The opposite of H0, usually the research conclusion you are trying to support. It is always strict: ≠, >, or <.' },
    { term: 'Research hypothesis framing', def: 'When you want to prove a new claim, put the claim in Ha so that rejecting H0 provides statistical support for it.' },
    { term: 'Assumption-to-be-challenged framing', def: 'When an existing claim is being tested, put the claim in H0 so it is only overturned by strong contrary evidence.' },
    { term: 'One-tailed test', def: 'A test whose rejection region is entirely in one tail: H0: μ ≥ μ0 vs. Ha: μ < μ0 (lower), or H0: μ ≤ μ0 vs. Ha: μ > μ0 (upper).' },
    { term: 'Two-tailed test', def: 'H0: μ = μ0 vs. Ha: μ ≠ μ0; the rejection region is split between both tails.' },
    { term: 'Type I error', def: 'Rejecting H0 when H0 is true. Its probability is α.' },
    { term: 'Type II error', def: 'Failing to reject H0 when H0 is false. Its probability is β.' },
    { term: 'Level of significance α', def: 'The probability of a Type I error when the equality part of H0 is true. The analyst chooses it — commonly .01, .05, or .10.' },
    { term: 'Significance test', def: 'A test in which only the probability of a Type I error is controlled; hence the conclusion "do not reject H0" rather than "accept H0."' },
    { term: 'Test statistic (mean, σ known)', def: 'z = (x̄ − μ0) ÷ (σ ÷ √n).' },
    { term: 'Test statistic (mean, σ unknown)', def: 't = (x̄ − μ0) ÷ (s ÷ √n) with n − 1 degrees of freedom.' },
    { term: 'Test statistic (proportion)', def: 'z = (p̄ − p0) ÷ √[p0(1 − p0) ÷ n] — the standard error uses the hypothesized p0, not p̄.' },
    { term: 'p-value', def: 'The probability, assuming H0 true, of obtaining a sample result at least as unlikely as the one observed. Reject H0 if p-value ≤ α.' },
    { term: 'Two-tailed p-value', def: 'The tail area beyond |test statistic|, doubled.' },
    { term: 'Critical value', def: 'The value of the test statistic that cuts off exactly α (or α/2 per tail) in the rejection region.' },
    { term: 'Critical value rejection rules', def: 'Lower tail: reject if z ≤ −zα. Upper tail: reject if z ≥ zα. Two-tailed: reject if z ≤ −zα/2 or z ≥ zα/2.' },
    { term: 'Confidence interval approach', def: 'For a two-tailed test, build a 100(1 − α)% interval for μ and reject H0 if μ0 falls outside it.' },
    { term: 'Rejection region in terms of x̄', def: 'x̄ = μ0 ± zα(σ ÷ √n) — the sample mean value at which the decision flips; used to compute β.' },
    { term: 'β (beta)', def: 'The probability of a Type II error, computed for a specific assumed true value of μ. There is no single β for a test.' },
    { term: 'Power', def: '1 − β, the probability of correctly rejecting a false H0. Power rises as the true μ moves farther from μ0.' },
    { term: 'Power curve', def: 'A plot of power against the true value of the parameter.' },
    { term: 'Sample size formula', def: 'n = (zα + zβ)²σ² ÷ (μ0 − μa)², which controls both the Type I and Type II error probabilities.' },
    { term: 'Statistical significance', def: 'The p-value is below α — the result is unlikely to be due to chance alone.' },
    { term: 'Practical significance', def: 'The observed difference is large enough to matter in practice. Very large samples can produce statistical significance without it.' },
    { term: 'Choosing z vs. t', def: 'Use z when the population standard deviation σ is known; use t with df = n − 1 when only the sample standard deviation s is available.' }
  ],
  quiz: [
    { q: 'Which hypothesis always contains the equality sign?',
      options: ['the alternative hypothesis', 'the null hypothesis', 'both', 'neither'],
      answer: 1, explain: 'H0 always contains =, ≤, or ≥. Ha is always strict: ≠, >, or <.' },
    { q: 'A manufacturer claims its batteries last at least 500 hours. A consumer group tests the claim. The correct hypotheses are…',
      options: ['H0: μ ≤ 500, Ha: μ > 500', 'H0: μ ≥ 500, Ha: μ < 500', 'H0: μ = 500, Ha: μ ≠ 500', 'H0: μ < 500, Ha: μ ≥ 500'],
      answer: 1, explain: 'The existing claim gets the benefit of the doubt in H0; the group is looking for evidence the batteries fall short.' },
    { q: 'A researcher wants to show a new teaching method raises test scores above the current mean of 75. Ha should be…',
      options: ['μ ≤ 75', 'μ ≥ 75', 'μ > 75', 'μ = 75'],
      answer: 2, explain: 'The research claim goes in Ha so that rejecting H0 provides statistical support for it.' },
    { q: 'A Type I error occurs when…',
      options: ['H0 is rejected when it is true', 'H0 is not rejected when it is false', 'H0 is rejected when it is false', 'the sample is too small'],
      answer: 0, explain: 'Its probability is α, the level of significance, which the analyst controls.' },
    { q: 'A Type II error occurs when…',
      options: ['H0 is rejected when it is true', 'H0 is not rejected when it is false', 'the p-value is too small', 'α is set too low'],
      answer: 1, explain: 'Its probability is β, which is NOT controlled in an ordinary significance test.' },
    { q: 'The level of significance α is the probability of…',
      options: ['a Type II error', 'a correct decision', 'a Type I error', 'the null hypothesis being true'],
      answer: 2, explain: 'Specifically, when the equality part of H0 is true.' },
    { q: 'The decision rule using the p-value approach is to reject H0 if…',
      options: ['p-value ≥ α', 'p-value ≤ α', 'p-value ≥ 0.5', 'p-value = 0'],
      answer: 1, explain: 'A small p-value means the observed data would be very unlikely if H0 were true.' },
    { q: 'For a two-tailed test, the p-value is found by…',
      options: ['taking the tail area beyond the test statistic', 'doubling the tail area beyond the absolute value of the test statistic', 'halving the tail area', 'subtracting the tail area from 1'],
      answer: 1, explain: 'Both tails count as "at least as unlikely" results.' },
    { q: 'The test statistic for a population mean with σ known is…',
      options: ['(x̄ − μ0) ÷ (s ÷ √n)', '(x̄ − μ0) ÷ (σ ÷ √n)', '(x̄ − μ0) ÷ σ', '(p̄ − p0) ÷ σp̄'],
      answer: 1, explain: 'Known σ means you use the standard normal z distribution.' },
    { q: 'The t distribution is used in a test about a mean when…',
      options: ['the sample is small', 'σ is unknown', 'the population is not normal', 'α is small'],
      answer: 1, explain: 'The choice is driven by whether σ is known, not by sample size.' },
    { q: 'For a test about a mean with σ unknown and n = 25, the degrees of freedom are…',
      options: ['25', '24', '26', '23'],
      answer: 1, explain: 'df = n − 1.' },
    { q: 'In a hypothesis test about a population proportion, the standard error is computed using…',
      options: ['the sample proportion p̄', 'the hypothesized proportion p0', 'either one', 'the population standard deviation'],
      answer: 1, explain: 'The test assumes H0 is true, so σp̄ = √[p0(1 − p0)/n]. Confidence intervals use p̄ instead.' },
    { q: 'A sample of n = 60 gives x̄ = 19.4 when testing H0: μ ≥ 20 with σ = 2. The test statistic is approximately…',
      options: ['−0.30', '−2.32', '−1.645', '−0.60'],
      answer: 1, explain: 'z = (19.4 − 20) ÷ (2/√60) = −0.6 ÷ 0.2582 = −2.32.' },
    { q: 'For that test at α = .05, the correct decision is…',
      options: ['do not reject H0; p-value ≈ 0.49', 'reject H0; p-value ≈ 0.0102', 'reject H0; p-value ≈ 0.0204', 'cannot be determined'],
      answer: 1, explain: 'The lower-tail area beyond −2.32 is 0.0102, which is ≤ 0.05.' },
    { q: 'The critical value for a lower-tail test at α = .05 using the z distribution is…',
      options: ['−1.96', '−1.645', '−2.326', '−1.282'],
      answer: 1, explain: '±1.96 is the two-tailed value at α = .05; −1.645 is the one-tailed value.' },
    { q: 'The critical values for a two-tailed test at α = .05 are…',
      options: ['±1.645', '±1.96', '±2.576', '±1.282'],
      answer: 1, explain: 'α/2 = .025 in each tail.' },
    { q: 'The confidence interval approach to hypothesis testing applies to…',
      options: ['lower-tail tests only', 'upper-tail tests only', 'two-tailed tests', 'all tests'],
      answer: 2, explain: 'Reject H0 if the hypothesized value falls outside the 100(1 − α)% interval.' },
    { q: 'Statisticians recommend saying "do not reject H0" rather than "accept H0" because…',
      options: ['H0 is always false', 'the probability of a Type II error is not controlled', 'α is too large', 'the sample is random'],
      answer: 1, explain: 'Only once β is also controlled can "accept H0" be justified.' },
    { q: 'Power is defined as…',
      options: ['α', 'β', '1 − α', '1 − β'],
      answer: 3, explain: 'It is the probability of correctly rejecting a false null hypothesis.' },
    { q: 'As the true population mean moves farther from the hypothesized value, β…',
      options: ['increases', 'decreases', 'stays constant', 'equals α'],
      answer: 1, explain: 'Larger differences are easier to detect, so power increases and β falls.' },
    { q: 'If α is decreased while the sample size is held constant, β…',
      options: ['decreases', 'increases', 'is unchanged', 'becomes zero'],
      answer: 1, explain: 'The two error probabilities trade off; only a larger n can reduce both.' },
    { q: 'In the sample size formula n = (zα + zβ)²σ² ÷ (μ0 − μa)², requiring the test to detect a SMALLER difference…',
      options: ['decreases the required n', 'increases the required n substantially', 'has no effect on n', 'increases α'],
      answer: 1, explain: 'The difference is squared in the denominator, so small differences demand much larger samples.' },
    { q: 'A result that is statistically significant…',
      options: ['is always practically important', 'may have little practical significance, especially with very large samples', 'proves H0 is false', 'means α was too large'],
      answer: 1, explain: 'A huge n shrinks the standard error so much that trivial differences become significant.' },
    { q: 'Failing to reject H0 means…',
      options: ['H0 has been proven true', 'the evidence was not strong enough to reject H0', 'a Type I error was made', 'α should be increased'],
      answer: 1, explain: 'Absence of evidence against H0 is not proof that H0 is true.' },
    { q: 'Which of the following is a valid set of hypotheses?',
      options: ['H0: μ > 10, Ha: μ ≤ 10', 'H0: μ ≤ 10, Ha: μ > 10', 'H0: x̄ = 10, Ha: x̄ ≠ 10', 'H0: μ ≠ 10, Ha: μ = 10'],
      answer: 1, explain: 'The equality belongs to H0, and hypotheses are always written about the population parameter μ, never about the sample statistic x̄.' }
  ]
});
