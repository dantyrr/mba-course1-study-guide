window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'stat-ch10', subject: 'stat', num: 10, altLabel: 'Course Ch 24',
  title: 'Inference About Means and Proportions with Two Populations',
  overview: 'Everything from Chapters 8 and 9 extended to comparisons between two populations: the difference between two means with σ1 and σ2 known (z) and unknown (t), the matched sample design, and the difference between two population proportions. For each case, both an interval estimate and a hypothesis test.',
  sections: [
    { title: '0. The Four Cases', html:
      '<p>This chapter is really one idea applied four times. Identifying <em>which case you are in</em> is most of the exam.</p>' +
      '<div class="tablewrap"><table><tr><th>Section</th><th>Situation</th><th>Distribution</th></tr>' +
      '<tr><td>10.1</td><td>Two means, <strong>independent</strong> samples, σ<sub>1</sub> and σ<sub>2</sub> <strong>known</strong></td><td>z</td></tr>' +
      '<tr><td>10.2</td><td>Two means, <strong>independent</strong> samples, σ<sub>1</sub> and σ<sub>2</sub> <strong>unknown</strong></td><td>t</td></tr>' +
      '<tr><td>10.3</td><td>Two means, <strong>matched</strong> (paired) samples</td><td>t, df = n − 1</td></tr>' +
      '<tr><td>10.4</td><td>Two <strong>proportions</strong>, independent samples</td><td>z</td></tr>' +
      '</table></div>' +
      '<p>Typical questions: estimate the difference in mean starting salary between males and females; test whether two suppliers differ in their proportion of defective parts.</p>' },

    { title: '1. Sampling Distribution of x̄1 − x̄2 (10.1)', html:
      '<p>The point estimator of μ<sub>1</sub> − μ<sub>2</sub> is <strong>x̄<sub>1</sub> − x̄<sub>2</sub></strong>.</p>' +
      '<div class="formula">Expected value:&nbsp;&nbsp;E(x̄<sub>1</sub> − x̄<sub>2</sub>) = μ<sub>1</sub> − μ<sub>2</sub><br>Standard error:&nbsp;&nbsp;σ<sub>x̄1−x̄2</sub> = √[(σ<sub>1</sub>² ÷ n<sub>1</sub>) + (σ<sub>2</sub>² ÷ n<sub>2</sub>)]<br>Form: normal when both populations are normal, or approximately normal for large samples</div>' +
      '<div class="tip"><strong>The variances ADD, even when you are SUBTRACTING the means.</strong> This is the number-one algebra trap in the chapter. You never subtract σ1²/n1 − σ2²/n2.</div>' },

    { title: '2. Two Means, σ Known — Interval and Test (10.1)', html:
      '<p><strong>Interval estimate:</strong></p>' +
      '<div class="formula">(x̄<sub>1</sub> − x̄<sub>2</sub>) ± z<sub>α/2</sub> √[(σ<sub>1</sub>² ÷ n<sub>1</sub>) + (σ<sub>2</sub>² ÷ n<sub>2</sub>)]</div>' +
      '<p><strong>Hypothesis test.</strong> The three forms, where D<sub>0</sub> is the hypothesized difference (almost always 0):</p>' +
      '<div class="tablewrap"><table><tr><th>Lower tail</th><th>Upper tail</th><th>Two-tailed</th></tr>' +
      '<tr><td>H0: μ<sub>1</sub> − μ<sub>2</sub> ≥ D<sub>0</sub><br>Ha: μ<sub>1</sub> − μ<sub>2</sub> &lt; D<sub>0</sub></td><td>H0: μ<sub>1</sub> − μ<sub>2</sub> ≤ D<sub>0</sub><br>Ha: μ<sub>1</sub> − μ<sub>2</sub> &gt; D<sub>0</sub></td><td>H0: μ<sub>1</sub> − μ<sub>2</sub> = D<sub>0</sub><br>Ha: μ<sub>1</sub> − μ<sub>2</sub> ≠ D<sub>0</sub></td></tr>' +
      '</table></div>' +
      '<div class="formula">z = [(x̄<sub>1</sub> − x̄<sub>2</sub>) − D<sub>0</sub>] ÷ √[(σ<sub>1</sub>² ÷ n<sub>1</sub>) + (σ<sub>2</sub>² ÷ n<sub>2</sub>)]</div>' +
      '<p><strong>Sample size guidance (the chapter note):</strong> in most applications of these procedures, random samples with <strong>n<sub>1</sub> ≥ 30 and n<sub>2</sub> ≥ 30</strong> are adequate. If either sample size is below 30, the distributions of the populations become important — with smaller samples the analyst must be satisfied it is reasonable to assume both populations are <strong>at least approximately normal</strong>.</p>' +
      '<p><em>Textbook examples:</em> Graystone Department Stores (mean age of inner-city vs. suburban customers) and the quality assessment of two training centers.</p>' },

    { title: '3. Two Means, σ Unknown — Interval and Test (10.2)', html:
      '<p>When σ<sub>1</sub> and σ<sub>2</sub> are unknown, substitute the sample standard deviations s<sub>1</sub> and s<sub>2</sub> and use the t distribution.</p>' +
      '<div class="formula">Interval:&nbsp;&nbsp;(x̄<sub>1</sub> − x̄<sub>2</sub>) ± t<sub>α/2</sub> √[(s<sub>1</sub>² ÷ n<sub>1</sub>) + (s<sub>2</sub>² ÷ n<sub>2</sub>)]<br><br>Test statistic:&nbsp;&nbsp;t = [(x̄<sub>1</sub> − x̄<sub>2</sub>) − D<sub>0</sub>] ÷ √[(s<sub>1</sub>² ÷ n<sub>1</sub>) + (s<sub>2</sub>² ÷ n<sub>2</sub>)]</div>' +
      '<p><strong>Degrees of freedom</strong> use the Welch–Satterthwaite approximation:</p>' +
      '<div class="formula">df = [(s<sub>1</sub>²/n<sub>1</sub>) + (s<sub>2</sub>²/n<sub>2</sub>)]² ÷ { [1/(n<sub>1</sub>−1)](s<sub>1</sub>²/n<sub>1</sub>)² + [1/(n<sub>2</sub>−1)](s<sub>2</sub>²/n<sub>2</sub>)² }</div>' +
      '<p>Round <strong>down</strong> to the nearest integer. The slides note that statistical software computes this automatically — on an exam you are usually given df or told to round down.</p>' +
      '<p><strong>Robustness note from the slides:</strong> these procedures are <strong>robust</strong> and work with relatively small samples. Equal or nearly equal sample sizes with a <strong>total n<sub>1</sub> + n<sub>2</sub> of at least 20</strong> give very good results even if the populations are not normal. Larger samples are recommended if the distributions are highly skewed or contain outliers; smaller samples should be used only if the analyst is satisfied the populations are at least approximately normal.</p>' +
      '<p><em>Textbook examples:</em> the Clearwater National Bank checking account balance study and the new software project completion time study.</p>' },

    { title: '4. Worked Example — Two Means, σ Unknown', html:
      '<p>Two independent samples of 6 observations each. Sample 1: 10, 7, 13, 7, 9, 8 → x̄<sub>1</sub> = 9, s<sub>1</sub> = 2.280. Sample 2: 8, 7, 8, 4, 6, 9 → x̄<sub>2</sub> = 7, s<sub>2</sub> = 1.789. Build a 90% confidence interval for μ<sub>1</sub> − μ<sub>2</sub>.</p>' +
      '<ol>' +
      '<li><strong>Point estimate:</strong> x̄<sub>1</sub> − x̄<sub>2</sub> = 9 − 7 = <strong>2</strong></li>' +
      '<li><strong>Standard error:</strong> √[(5.2/6) + (3.2/6)] = √[0.8667 + 0.5333] = √1.4 = <strong>1.1832</strong></li>' +
      '<li><strong>Degrees of freedom:</strong> the Welch formula gives 1.96 ÷ 0.20711 = 9.46, rounded down to <strong>9</strong></li>' +
      '<li><strong>t value:</strong> t<sub>.05</sub> with df = 9 is <strong>1.833</strong></li>' +
      '<li><strong>Margin of error:</strong> 1.833 × 1.1832 = 2.169</li>' +
      '<li><strong>Interval:</strong> 2 ± 2.169 = <strong>(−0.17, 4.17)</strong></li>' +
      '<li><strong>Interpretation:</strong> the interval contains 0, so at the 90% level there is not sufficient evidence of a difference between the two population means.</li>' +
      '</ol>' },

    { title: '5. Matched Sample Design (10.3)', html:
      '<p>In a <span class="term">matched sample</span> design, each element provides a pair of data values — the same worker tried under two production methods, the same patient measured before and after treatment. The samples are <strong>not independent</strong>.</p>' +
      '<p><strong>The entire trick:</strong> compute the <strong>difference d<sub>i</sub></strong> for each pair, then run an ordinary <em>one-sample</em> t procedure on those differences. Two samples collapse into one.</p>' +
      '<div class="formula">d̄ = Σd<sub>i</sub> ÷ n&nbsp;&nbsp;&nbsp;&nbsp;s<sub>d</sub> = √[Σ(d<sub>i</sub> − d̄)² ÷ (n − 1)]<br><br>Test statistic:&nbsp;&nbsp;t = (d̄ − μ<sub>d</sub>) ÷ (s<sub>d</sub> ÷ √n),&nbsp;&nbsp;<strong>df = n − 1</strong><br><br>Interval:&nbsp;&nbsp;d̄ ± t<sub>α/2</sub>(s<sub>d</sub> ÷ √n)</div>' +
      '<p>Here n is the <strong>number of PAIRS</strong>, not the total number of observations. Hypotheses are written about μ<sub>d</sub>, the mean of the differences, typically H0: μ<sub>d</sub> = 0.</p>' +
      '<div class="tip"><strong>Why bother matching?</strong> The slides are explicit: a matched sample procedure <strong>generally provides better precision</strong> than the independent sample approach, so <strong>it is the recommended design</strong>. Matching removes the person-to-person variation that would otherwise inflate the standard error. Use independent samples only when matching cannot be achieved, or the time and cost of matching are excessive.</div>' },

    { title: '6. Two Population Proportions (10.4)', html:
      '<p>The point estimator of p<sub>1</sub> − p<sub>2</sub> is <strong>p̄<sub>1</sub> − p̄<sub>2</sub></strong>.</p>' +
      '<div class="formula">E(p̄<sub>1</sub> − p̄<sub>2</sub>) = p<sub>1</sub> − p<sub>2</sub><br>σ<sub>p̄1−p̄2</sub> = √[ p<sub>1</sub>(1−p<sub>1</sub>)/n<sub>1</sub> + p<sub>2</sub>(1−p<sub>2</sub>)/n<sub>2</sub> ]</div>' +
      '<p><strong>Interval estimate</strong> — uses the individual sample proportions:</p>' +
      '<div class="formula">(p̄<sub>1</sub> − p̄<sub>2</sub>) ± z<sub>α/2</sub> √[ p̄<sub>1</sub>(1−p̄<sub>1</sub>)/n<sub>1</sub> + p̄<sub>2</sub>(1−p̄<sub>2</sub>)/n<sub>2</sub> ]</div>' +
      '<p><strong>Hypothesis test</strong> of H0: p<sub>1</sub> − p<sub>2</sub> = 0 — uses the <span class="term">pooled estimate</span>, because if H0 is true the two populations share one common proportion:</p>' +
      '<div class="formula">p̄ = (n<sub>1</sub>p̄<sub>1</sub> + n<sub>2</sub>p̄<sub>2</sub>) ÷ (n<sub>1</sub> + n<sub>2</sub>)&nbsp;&nbsp;= (x<sub>1</sub> + x<sub>2</sub>) ÷ (n<sub>1</sub> + n<sub>2</sub>)<br><br>z = (p̄<sub>1</sub> − p̄<sub>2</sub>) ÷ √{ p̄(1 − p̄)[ (1/n<sub>1</sub>) + (1/n<sub>2</sub>) ] }</div>' +
      '<div class="tip"><strong>The distinction to memorize:</strong> the <em>confidence interval</em> uses the separate p̄<sub>1</sub> and p̄<sub>2</sub>; the <em>hypothesis test</em> of equality uses the <strong>pooled p̄</strong>. Mixing these up is the most common error in this section.</div>' +
      '<p><em>Textbook example:</em> the tax preparation study estimating the difference between the proportions of returns with errors at two offices.</p>' },

    { title: '7. Worked Example — Two Proportions Interval', html:
      '<p>Sample 1: 117 successes out of 150, so p̄<sub>1</sub> = 0.78. Sample 2: 102 successes out of 170, so p̄<sub>2</sub> = 0.60. Build a 95% confidence interval for p<sub>1</sub> − p<sub>2</sub>.</p>' +
      '<ol>' +
      '<li><strong>Point estimate:</strong> 0.78 − 0.60 = <strong>0.18</strong></li>' +
      '<li><strong>Standard error:</strong> √[(0.78)(0.22)/150 + (0.60)(0.40)/170] = √[0.0011440 + 0.0014118] = √0.0025558 = <strong>0.0506</strong></li>' +
      '<li><strong>z<sub>.025</sub> = 1.96</strong>, so the margin of error is 1.96 × 0.0506 = 0.0991</li>' +
      '<li><strong>Interval:</strong> 0.18 ± 0.099 = <strong>(0.081, 0.279)</strong></li>' +
      '<li><strong>Interpretation:</strong> the entire interval is above 0, so there is evidence that population 1 has the higher proportion.</li>' +
      '</ol>' },

    { title: '8. Reading a Two-Sample Confidence Interval', html:
      '<p>Whatever the parameter, the interpretation rule for a difference is the same:</p>' +
      '<div class="tablewrap"><table><tr><th>Interval</th><th>Conclusion at that confidence level</th></tr>' +
      '<tr><td>Entirely above 0</td><td>Population 1 is larger</td></tr>' +
      '<tr><td>Entirely below 0</td><td>Population 2 is larger</td></tr>' +
      '<tr><td><strong>Contains 0</strong></td><td><strong>No significant difference</strong> — you cannot conclude the populations differ</td></tr>' +
      '</table></div>' +
      '<p>This is the confidence interval approach to a two-tailed test, applied to a difference: a 95% interval that contains 0 corresponds to failing to reject H0: difference = 0 at α = .05.</p>' },

    { title: '9. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>Standard errors ADD the two variance terms</strong> even though the means are subtracted.</li>' +
      '<li><strong>σ1 and σ2 given → z. Only s1 and s2 → t</strong> with the Welch df, rounded down.</li>' +
      '<li><strong>Matched samples: work with the differences d<sub>i</sub>, use df = n − 1 where n is the number of PAIRS.</strong></li>' +
      '<li><strong>Matched sampling gives better precision</strong> and is the recommended design when it is feasible.</li>' +
      '<li><strong>Two proportions: interval uses p̄1 and p̄2 separately; the test of equality uses the POOLED p̄.</strong></li>' +
      '<li><strong>Pooled p̄ = (x1 + x2) ÷ (n1 + n2)</strong> — total successes over total observations.</li>' +
      '<li><strong>An interval for a difference that contains 0 means no significant difference.</strong></li>' +
      '<li><strong>Independent samples (σ known): n1 ≥ 30 and n2 ≥ 30 is adequate;</strong> below that, approximate normality of both populations matters.</li>' +
      '<li><strong>Independent samples (σ unknown): the t procedures are robust;</strong> nearly equal sample sizes totaling at least 20 work well even for non-normal populations.</li>' +
      '<li><strong>Watch the order of subtraction.</strong> Labeling population 1 and 2 the other way flips the sign of the entire interval; the conclusion must be stated consistently.</li>' +
      '<li><strong>"Before and after on the same subjects" always means matched samples,</strong> never independent samples.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Independent simple random samples', def: 'Samples selected from two populations in which the elements chosen from one have no relationship to those chosen from the other.' },
    { term: 'Point estimator of μ1 − μ2', def: 'x̄1 − x̄2, with E(x̄1 − x̄2) = μ1 − μ2.' },
    { term: 'Standard error of x̄1 − x̄2 (σ known)', def: '√[(σ1²/n1) + (σ2²/n2)] — the variance terms add.' },
    { term: 'Interval estimate, two means, σ known', def: '(x̄1 − x̄2) ± zα/2 √[(σ1²/n1) + (σ2²/n2)].' },
    { term: 'Test statistic, two means, σ known', def: 'z = [(x̄1 − x̄2) − D0] ÷ √[(σ1²/n1) + (σ2²/n2)].' },
    { term: 'D0', def: 'The hypothesized difference between the two population means; almost always 0.' },
    { term: 'Interval estimate, two means, σ unknown', def: '(x̄1 − x̄2) ± tα/2 √[(s1²/n1) + (s2²/n2)].' },
    { term: 'Test statistic, two means, σ unknown', def: 't = [(x̄1 − x̄2) − D0] ÷ √[(s1²/n1) + (s2²/n2)].' },
    { term: 'Welch–Satterthwaite degrees of freedom', def: 'df = [(s1²/n1)+(s2²/n2)]² ÷ {[1/(n1−1)](s1²/n1)² + [1/(n2−1)](s2²/n2)²}, rounded down to the nearest integer.' },
    { term: 'Sample size guidance, σ known case', def: 'n1 ≥ 30 and n2 ≥ 30 are adequate in most applications; with smaller samples both populations should be at least approximately normal.' },
    { term: 'Robustness, σ unknown case', def: 'The t procedures work with relatively small samples; nearly equal sample sizes totaling at least 20 give good results even for non-normal populations.' },
    { term: 'Matched sample design', def: 'Each element supplies a pair of data values (e.g., the same worker under two methods). The samples are not independent.' },
    { term: 'd̄', def: 'The mean of the paired differences, Σdi ÷ n, where n is the number of pairs.' },
    { term: 'sd', def: 'The standard deviation of the paired differences, √[Σ(di − d̄)² ÷ (n − 1)].' },
    { term: 'Matched sample test statistic', def: 't = (d̄ − μd) ÷ (sd ÷ √n) with df = n − 1, where n is the number of pairs.' },
    { term: 'Matched sample interval estimate', def: 'd̄ ± tα/2(sd ÷ √n).' },
    { term: 'Why matched samples are preferred', def: 'They generally provide better precision than independent samples by removing subject-to-subject variation; use independent samples only when matching is infeasible or too costly.' },
    { term: 'Point estimator of p1 − p2', def: 'p̄1 − p̄2, with E(p̄1 − p̄2) = p1 − p2.' },
    { term: 'Interval estimate, two proportions', def: '(p̄1 − p̄2) ± zα/2 √[p̄1(1−p̄1)/n1 + p̄2(1−p̄2)/n2] — uses the separate sample proportions.' },
    { term: 'Pooled estimate p̄', def: '(n1p̄1 + n2p̄2) ÷ (n1 + n2) = total successes ÷ total observations. Used only in the hypothesis test of p1 = p2.' },
    { term: 'Test statistic, two proportions', def: 'z = (p̄1 − p̄2) ÷ √{p̄(1 − p̄)[(1/n1) + (1/n2)]}, using the pooled p̄.' },
    { term: 'Interpreting an interval for a difference', def: 'Entirely above 0 → population 1 larger; entirely below 0 → population 2 larger; containing 0 → no significant difference.' }
  ],
  quiz: [
    { q: 'The point estimator of the difference between two population means is…',
      options: ['μ1 − μ2', 'x̄1 − x̄2', 'd̄', 's1 − s2'],
      answer: 1, explain: 'And E(x̄1 − x̄2) = μ1 − μ2, so it is unbiased.' },
    { q: 'The standard error of x̄1 − x̄2 with known population standard deviations is…',
      options: ['√[(σ1²/n1) − (σ2²/n2)]', '√[(σ1²/n1) + (σ2²/n2)]', '(σ1/√n1) − (σ2/√n2)', '√[(σ1 − σ2)²/(n1 + n2)]'],
      answer: 1, explain: 'Variances add even when means are subtracted — the most common algebra error in this chapter.' },
    { q: 'For inference about two means with σ1 and σ2 known, the sample sizes generally considered adequate are…',
      options: ['n1 ≥ 10 and n2 ≥ 10', 'n1 ≥ 30 and n2 ≥ 30', 'n1 + n2 ≥ 20', 'any sizes'],
      answer: 1, explain: 'Below 30, the shapes of the two population distributions become an important consideration.' },
    { q: 'When σ1 and σ2 are unknown, inference about μ1 − μ2 is based on…',
      options: ['the z distribution', 'the t distribution', 'the chi-square distribution', 'the F distribution'],
      answer: 1, explain: 'The sample standard deviations s1 and s2 estimate the unknown σ values.' },
    { q: 'The degrees of freedom computed by the Welch formula should be…',
      options: ['rounded up', 'rounded down to the nearest integer', 'rounded to the nearest integer', 'left as a decimal'],
      answer: 1, explain: 'Rounding down is conservative — it gives a slightly wider interval.' },
    { q: 'The t procedures for two independent samples are described as robust, meaning…',
      options: ['they require very large samples', 'they give good results even when populations are not normal, especially with nearly equal sample sizes totaling at least 20', 'they never produce errors', 'they require equal variances'],
      answer: 1, explain: 'Larger samples are still recommended for highly skewed data or data with outliers.' },
    { q: 'Two samples of 5 each give x̄1 = 9, s1 = 2.280, x̄2 = 7, s2 = 1.789. The standard error of the difference is approximately…',
      options: ['0.49', '1.296', '1.680', '2.000'],
      answer: 1, explain: '√[(2.280²/5) + (1.789²/5)] = √1.6798 = 1.296.' },
    { q: 'In a matched sample design, the samples are…',
      options: ['independent', 'not independent — each element provides a pair of values', 'always equal in size to the population', 'selected by cluster sampling'],
      answer: 1, explain: 'The same subject appears in both conditions, so the two sets of values are linked.' },
    { q: 'The analysis of a matched sample design is based on…',
      options: ['the two sample means separately', 'the differences between the paired values', 'the pooled proportion', 'the ratio of the variances'],
      answer: 1, explain: 'The two-sample problem collapses into a one-sample t procedure on the differences.' },
    { q: 'For a matched sample test with 12 pairs of observations, the degrees of freedom are…',
      options: ['24', '22', '11', '12'],
      answer: 2, explain: 'df = n − 1 where n is the number of PAIRS, so 12 − 1 = 11.' },
    { q: 'The test statistic for a matched sample design is…',
      options: ['(d̄ − μd) ÷ (sd ÷ √n)', '(x̄1 − x̄2) ÷ √[(s1²/n1)+(s2²/n2)]', '(p̄1 − p̄2) ÷ σp̄', 'd̄ ÷ sd'],
      answer: 0, explain: 'It is the ordinary one-sample t statistic applied to the differences.' },
    { q: 'Compared with the independent sample approach, a matched sample design generally…',
      options: ['provides better precision and is the recommended design', 'provides worse precision', 'requires fewer assumptions about randomness', 'cannot be used for hypothesis testing'],
      answer: 0, explain: 'Matching removes variation between subjects. Use independent samples only when matching is infeasible or too costly.' },
    { q: 'A study measures the same 20 employees before and after a training program. The correct procedure is…',
      options: ['two independent samples with σ known', 'two independent samples with σ unknown', 'a matched sample t test', 'a test of two proportions'],
      answer: 2, explain: 'The same subjects appear twice, which is the definition of matched samples.' },
    { q: 'The interval estimate for the difference between two population proportions uses…',
      options: ['the pooled proportion p̄', 'the separate sample proportions p̄1 and p̄2', 'the hypothesized proportions', 'the t distribution'],
      answer: 1, explain: 'The pooled estimate appears only in the hypothesis test of p1 = p2.' },
    { q: 'The pooled estimate of the population proportion is computed as…',
      options: ['(p̄1 + p̄2) ÷ 2', '(n1p̄1 + n2p̄2) ÷ (n1 + n2)', 'p̄1 × p̄2', '(x1 − x2) ÷ (n1 − n2)'],
      answer: 1, explain: 'Equivalently, total successes divided by total observations.' },
    { q: 'The pooled estimate is used in the hypothesis test of p1 = p2 because…',
      options: ['it is easier to compute', 'if H0 is true the two populations share one common proportion', 'it gives a larger test statistic', 'the samples are matched'],
      answer: 1, explain: 'The test statistic is computed under the assumption that H0 is true.' },
    { q: 'Samples give 78 of 100 and 120 of 200 successes. The point estimate of p1 − p2 is…',
      options: ['0.18', '0.69', '0.42', '0.60'],
      answer: 0, explain: '0.78 − 0.60 = 0.18.' },
    { q: 'For that data, the standard error used in the 95% confidence interval is approximately…',
      options: ['0.018', '0.054', '0.106', '0.286'],
      answer: 1, explain: '√[(0.78)(0.22)/100 + (0.60)(0.40)/200] = √0.002916 = 0.054. The 0.106 is the margin of error.' },
    { q: 'The resulting 95% confidence interval for p1 − p2 is approximately…',
      options: ['(0.074, 0.286)', '(−0.106, 0.106)', '(0.126, 0.234)', '(0.000, 0.180)'],
      answer: 0, explain: '0.18 ± 1.96(0.054) = 0.18 ± 0.106.' },
    { q: 'A 95% confidence interval for μ1 − μ2 is (−1.2, 4.8). At the 95% level you conclude…',
      options: ['population 1 has the larger mean', 'population 2 has the larger mean', 'there is no significant difference between the means', 'the samples were too small'],
      answer: 2, explain: 'The interval contains 0, so a difference of zero remains plausible.' },
    { q: 'A 95% confidence interval for p1 − p2 is (0.081, 0.279). You conclude…',
      options: ['no significant difference', 'p1 is significantly larger than p2', 'p2 is significantly larger than p1', 'the pooled proportion is 0.18'],
      answer: 1, explain: 'The entire interval lies above zero.' },
    { q: 'In a test of H0: μ1 − μ2 = 0 against Ha: μ1 − μ2 ≠ 0, D0 equals…',
      options: ['x̄1 − x̄2', '0', '1', 'the standard error'],
      answer: 1, explain: 'D0 is the hypothesized difference, which is 0 in the standard test of equality.' },
    { q: 'If the labels for population 1 and population 2 are reversed, the confidence interval for the difference…',
      options: ['is unchanged', 'changes sign (its endpoints are negated and swapped)', 'becomes invalid', 'doubles in width'],
      answer: 1, explain: 'The conclusion is the same, but you must state which population is larger consistently with the labeling.' },
    { q: 'Which situation calls for the z distribution rather than t?',
      options: ['s1 and s2 computed from the samples', 'σ1 and σ2 known from historical data', 'matched pairs', 'small samples'],
      answer: 1, explain: 'Two-proportion inference also uses z, since the standard error is built from proportions rather than an estimated σ.' },
    { q: 'For a 90% confidence interval with df = 9, the appropriate t value is…',
      options: ['1.645', '1.833', '1.96', '2.262'],
      answer: 1, explain: 't.05 with 9 degrees of freedom is 1.833; 2.262 would be t.025 with 9 df for a 95% interval.' }
  ]
});
