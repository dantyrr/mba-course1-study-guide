window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'stat-ch3', subject: 'stat', num: 3, altLabel: 'Course Ch 20',
  title: 'Descriptive Statistics: Numerical Measures',
  overview: 'Numerical summaries of a data set: measures of location (mean, median, mode, percentiles, quartiles), measures of variability (range, IQR, variance, standard deviation, coefficient of variation), measures of shape and relative position (skewness, z-scores, Chebyshev, the empirical rule, outliers), the five-number summary and boxplot, and finally covariance and correlation for two variables.',
  sections: [
    { title: '0. The Map, and Sample vs. Population Notation', html:
      '<p>Everything in this chapter is computed one of two ways depending on whether the data are a <strong>sample</strong> or the whole <strong>population</strong> — and the notation differs. Learn the pairs now; exam questions hinge on them.</p>' +
      '<div class="tablewrap"><table><tr><th>Measure</th><th>Sample statistic</th><th>Population parameter</th></tr>' +
      '<tr><td>Mean</td><td>x̄ ("x-bar")</td><td>μ (mu)</td></tr>' +
      '<tr><td>Variance</td><td>s²</td><td>σ² (sigma squared)</td></tr>' +
      '<tr><td>Standard deviation</td><td>s</td><td>σ (sigma)</td></tr>' +
      '<tr><td>Size</td><td>n</td><td>N</td></tr>' +
      '<tr><td>Correlation</td><td>r<sub>xy</sub></td><td>ρ<sub>xy</sub> (rho)</td></tr>' +
      '</table></div>' +
      '<p>A measure computed from a sample is a <span class="term">sample statistic</span>; from a population, a <span class="term">population parameter</span>. A sample statistic used to estimate the corresponding parameter is called a <span class="term">point estimator</span>.</p>' },

    { title: '1. Measures of Location: Mean, Weighted Mean, Geometric Mean (3.1)', html:
      '<div class="formula">Sample mean: x̄ = Σx<sub>i</sub> ÷ n&nbsp;&nbsp;&nbsp;Population mean: μ = Σx<sub>i</sub> ÷ N</div>' +
      '<p>The mean is the <strong>balance point</strong> of the dot plot — picture the axis as a board with equal weights at each dot; the mean is the fulcrum that balances it. Because every value enters the sum, the mean is <strong>sensitive to extreme values</strong>.</p>' +
      '<p><strong>Weighted mean</strong> — used when observations carry different importance:</p>' +
      '<div class="formula">x̄ = Σ(w<sub>i</sub>x<sub>i</sub>) ÷ Σw<sub>i</sub></div>' +
      '<p>In the raw-material purchase example, cost per pound is weighted by pounds purchased, so the 2,750-lb purchase at $2.80 influences the average far more than the 500-lb purchase at $3.40.</p>' +
      '<p><strong>Geometric mean</strong> — the correct average for <em>rates of change over time</em> (growth rates, investment returns):</p>' +
      '<div class="formula">x̄<sub>g</sub> = ⁿ√(x<sub>1</sub> × x<sub>2</sub> × … × x<sub>n</sub>)&nbsp;&nbsp;— the nth root of the product of n growth factors</div>' +
      '<p>Convert each return to a <strong>growth factor</strong> first (a −22.1% return becomes 0.779; +28.7% becomes 1.287), take the nth root of their product, then subtract 1 to express it as a rate.</p>' +
      '<div class="tip"><strong>Why the geometric mean matters:</strong> averaging percentage returns arithmetically overstates performance. A portfolio that falls 50% then rises 50% has an arithmetic mean return of 0% but is actually down 25% — only the geometric mean captures that.</div>' },

    { title: '2. Measures of Location: Median, Mode, Percentiles, Quartiles (3.1)', html:
      '<p>The <span class="term">median</span> is the value in the <strong>middle</strong> when data are arranged in ascending order.</p>' +
      '<ul>' +
      '<li><strong>Odd n:</strong> the median is the middle value.</li>' +
      '<li><strong>Even n:</strong> the median is the average of the two middle values.</li>' +
      '</ul>' +
      '<p>Unlike the mean, the median is <strong>resistant to extreme values</strong> — which is why median (not mean) is reported for house prices and incomes.</p>' +
      '<p>The <span class="term">mode</span> is the value occurring with greatest frequency. In the 12 starting salaries, $5,880 is the mode because it is the only value appearing more than once. Data with exactly two modes are <strong>bimodal</strong>; more than two, <strong>multimodal</strong>. The mode is the only measure of location that works for <em>categorical</em> data.</p>' +
      '<p><strong>Percentiles.</strong> The pth percentile is a value such that roughly p% of observations are at or below it.</p>' +
      '<div class="formula">Locate the pth percentile: L<sub>p</sub> = (p ÷ 100)(n + 1)</div>' +
      '<p>If L<sub>p</sub> is a whole number, that position <em>is</em> the percentile. If not, interpolate between the two surrounding positions.</p>' +
      '<p><strong>Quartiles</strong> divide the data into four parts:</p>' +
      '<div class="tablewrap"><table><tr><th>Quartile</th><th>Equivalent percentile</th><th>Meaning</th></tr>' +
      '<tr><td>Q<sub>1</sub></td><td>25th</td><td>First quartile — 25% of data at or below</td></tr>' +
      '<tr><td>Q<sub>2</sub></td><td>50th</td><td>Second quartile — this <strong>is the median</strong></td></tr>' +
      '<tr><td>Q<sub>3</sub></td><td>75th</td><td>Third quartile — 75% of data at or below</td></tr>' +
      '</table></div>' },

    { title: '3. Measures of Variability (3.2)', html:
      '<p>Location alone is not enough. Two suppliers can both average 10 days to fill an order, yet one is far more reliable — the difference is <strong>variability</strong> (dispersion).</p>' +
      '<div class="tablewrap"><table><tr><th>Measure</th><th>Formula</th><th>Notes</th></tr>' +
      '<tr><td><span class="term">Range</span></td><td><div class="formula">Largest value − Smallest value</div></td><td>Simplest, but uses only two values, so it is <strong>very sensitive to outliers</strong>.</td></tr>' +
      '<tr><td><span class="term">Interquartile range (IQR)</span></td><td><div class="formula">IQR = Q<sub>3</sub> − Q<sub>1</sub></div></td><td>The range of the <strong>middle 50%</strong> of the data. Overcomes the range’s outlier sensitivity.</td></tr>' +
      '<tr><td><span class="term">Sample variance</span></td><td><div class="formula">s² = Σ(x<sub>i</sub> − x̄)² ÷ (n − 1)</div></td><td>Average squared deviation. Note the divisor is <strong>n − 1</strong>, not n.</td></tr>' +
      '<tr><td><span class="term">Population variance</span></td><td><div class="formula">σ² = Σ(x<sub>i</sub> − μ)² ÷ N</div></td><td>Here the divisor <strong>is</strong> N.</td></tr>' +
      '<tr><td><span class="term">Standard deviation</span></td><td><div class="formula">s = √s²&nbsp;&nbsp;·&nbsp;&nbsp;σ = √σ²</div></td><td>The positive square root of variance — measured in the <strong>same units as the data</strong>, which is why it is easier to interpret than variance.</td></tr>' +
      '<tr><td><span class="term">Coefficient of variation</span></td><td><div class="formula">CV = (s ÷ x̄) × 100%</div></td><td>Standard deviation as a <strong>percentage of the mean</strong>. Use it to compare variability between data sets with different units or very different means.</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>Why n − 1?</strong> Using n − 1 makes s² an <em>unbiased</em> estimator of σ². The quantity n − 1 is the <strong>degrees of freedom</strong>: once x̄ is known, only n − 1 of the deviations are free to vary, because all n deviations from the mean must sum to zero.</div>' },

    { title: '4. z-Scores and Relative Location (3.3)', html:
      '<div class="formula">z<sub>i</sub> = (x<sub>i</sub> − x̄) ÷ s</div>' +
      '<p>A <span class="term">z-score</span> is the number of <strong>standard deviations</strong> a value lies from the mean. It is also called the <em>standardized value</em>.</p>' +
      '<ul>' +
      '<li><strong>Positive z</strong> → the value is above the mean. <strong>Negative z</strong> → below the mean. <strong>z = 0</strong> → exactly at the mean.</li>' +
      '<li>z = 1.5 means the observation is 1.5 standard deviations <em>above</em> the mean.</li>' +
      '<li>Because z-scores strip out units, they let you compare positions across completely different data sets.</li>' +
      '</ul>' +
      '<p><strong>Distribution shape.</strong> <span class="term">Skewness</span> measures asymmetry:</p>' +
      '<div class="tablewrap"><table><tr><th>Shape</th><th>Skewness</th><th>Relationship of mean and median</th></tr>' +
      '<tr><td>Symmetric</td><td>0</td><td>Mean = median</td></tr>' +
      '<tr><td>Skewed right (positive)</td><td>&gt; 0</td><td><strong>Mean &gt; median</strong> — the long right tail pulls the mean up</td></tr>' +
      '<tr><td>Skewed left (negative)</td><td>&lt; 0</td><td><strong>Mean &lt; median</strong> — the long left tail pulls the mean down</td></tr>' +
      '</table></div>' },

    { title: '5. Chebyshev’s Theorem and the Empirical Rule (3.3)', html:
      '<p>Both tell you what share of the data falls within a given number of standard deviations of the mean — but they apply in different situations.</p>' +
      '<div class="tablewrap"><table><tr><th></th><th>Chebyshev’s theorem</th><th>Empirical rule</th></tr>' +
      '<tr><td><strong>Applies to</strong></td><td><strong>ANY</strong> distribution, any shape</td><td>Only <strong>bell-shaped (approximately normal)</strong> distributions</td></tr>' +
      '<tr><td><strong>Formula / values</strong></td><td>At least (1 − 1/z²) of values lie within z standard deviations, for any z &gt; 1</td><td>Fixed percentages at 1, 2, and 3 standard deviations</td></tr>' +
      '<tr><td><strong>z = 2</strong></td><td>At least <strong>75%</strong></td><td>Approximately <strong>95%</strong></td></tr>' +
      '<tr><td><strong>z = 3</strong></td><td>At least <strong>89%</strong></td><td>Almost all (~99.7%)</td></tr>' +
      '<tr><td><strong>z = 1</strong></td><td>Gives nothing useful (1 − 1/1 = 0)</td><td>Approximately <strong>68%</strong></td></tr>' +
      '</table></div>' +
      '<p><strong>Chebyshev worked:</strong> z = 2 → 1 − 1/2² = 1 − 0.25 = <strong>0.75</strong>. z = 2.5 → 1 − 1/6.25 = <strong>0.84</strong>. z = 3 → 1 − 1/9 = <strong>0.89</strong>.</p>' +
      '<div class="tip"><strong>The two things to keep straight:</strong> Chebyshev says "<em>at least</em>" and works for any distribution but gives weaker bounds; the empirical rule gives sharper figures (68–95–99.7) but <strong>only for bell-shaped data</strong>. The empirical rule rests on the normal distribution, covered later.</div>' },

    { title: '6. Detecting Outliers (3.3)', html:
      '<p>An <span class="term">outlier</span> is an unusually small or large value. It may be a correctly recorded extreme value, a data-entry error, or a value that does not belong to the population — so outliers should always be <strong>investigated, not automatically deleted</strong>.</p>' +
      '<p><strong>Two detection methods:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Method</th><th>Rule</th></tr>' +
      '<tr><td><strong>z-score method</strong></td><td>Treat any value with <strong>z &lt; −3 or z &gt; +3</strong> as a candidate outlier.</td></tr>' +
      '<tr><td><strong>IQR (fences) method</strong></td><td>Compute <strong>lower limit = Q<sub>1</sub> − 1.5(IQR)</strong> and <strong>upper limit = Q<sub>3</sub> + 1.5(IQR)</strong>. Any value outside those limits is a candidate outlier.</td></tr>' +
      '</table></div>' },

    { title: '7. Five-Number Summary and Boxplot (3.4)', html:
      '<p>The <span class="term">five-number summary</span> describes a data set with exactly five values, in this order:</p>' +
      '<div class="formula">1. Smallest value&nbsp;&nbsp;2. First quartile (Q<sub>1</sub>)&nbsp;&nbsp;3. Median (Q<sub>2</sub>)&nbsp;&nbsp;4. Third quartile (Q<sub>3</sub>)&nbsp;&nbsp;5. Largest value</div>' +
      '<p>A <span class="term">boxplot</span> is the graphical version, built from that summary:</p>' +
      '<ol>' +
      '<li>Draw a <strong>box</strong> from Q<sub>1</sub> to Q<sub>3</sub> — the box therefore spans the <strong>IQR</strong>, containing the middle 50% of the data.</li>' +
      '<li>Draw a vertical line in the box at the <strong>median</strong>.</li>' +
      '<li>Compute the limits: Q<sub>1</sub> − 1.5(IQR) and Q<sub>3</sub> + 1.5(IQR).</li>' +
      '<li>Extend <strong>whiskers</strong> from the box to the smallest and largest values <em>within</em> those limits.</li>' +
      '<li>Plot each <strong>outlier</strong> beyond the limits with an asterisk (*).</li>' +
      '</ol>' +
      '<div class="tip"><strong>The whiskers do not extend to the limits themselves</strong> — they stop at the most extreme <em>actual data values</em> that fall inside the limits. This is the detail most often missed.</div>' +
      '<p>Boxplots drawn side by side (often vertically) give a quick visual comparison of groups. In the business-major salary example, the comparison shows accounting has the highest salaries, management and marketing the lowest, and high-salary outliers exist for accounting, finance, and marketing.</p>' },

    { title: '8. Measures of Association: Covariance and Correlation (3.5)', html:
      '<p>Two descriptive measures of the <strong>linear</strong> association between two variables.</p>' +
      '<div class="formula">Sample covariance: s<sub>xy</sub> = Σ(x<sub>i</sub> − x̄)(y<sub>i</sub> − ȳ) ÷ (n − 1)<br>Population covariance: σ<sub>xy</sub> = Σ(x<sub>i</sub> − μ<sub>x</sub>)(y<sub>i</sub> − μ<sub>y</sub>) ÷ N</div>' +
      '<div class="tablewrap"><table><tr><th>Covariance</th><th>Interpretation</th></tr>' +
      '<tr><td><strong>Positive</strong></td><td>Positive linear association — x above its mean tends to pair with y above its mean.</td></tr>' +
      '<tr><td><strong>Negative</strong></td><td>Negative linear association.</td></tr>' +
      '<tr><td><strong>Near zero</strong></td><td>No linear association.</td></tr>' +
      '</table></div>' +
      '<p><strong>Covariance’s flaw:</strong> its magnitude depends on the <strong>units of measurement</strong>, so you cannot tell from the number alone whether an association is strong. Changing from dollars to thousands of dollars changes the covariance but not the actual relationship.</p>' +
      '<p>The <span class="term">correlation coefficient</span> fixes this by standardizing:</p>' +
      '<div class="formula">Sample: r<sub>xy</sub> = s<sub>xy</sub> ÷ (s<sub>x</sub> s<sub>y</sub>)&nbsp;&nbsp;·&nbsp;&nbsp;Population: ρ<sub>xy</sub> = σ<sub>xy</sub> ÷ (σ<sub>x</sub> σ<sub>y</sub>)</div>' +
      '<p>This is the <strong>Pearson product moment correlation coefficient</strong>. Properties:</p>' +
      '<ul>' +
      '<li>Always between <strong>−1 and +1</strong>.</li>' +
      '<li><strong>+1</strong> = perfect positive linear relationship (all points exactly on an upward line); <strong>−1</strong> = perfect negative; <strong>0</strong> = no linear relationship.</li>' +
      '<li>The closer to ±1, the stronger the linear association. The <strong>sign</strong> always matches the sign of the covariance.</li>' +
      '<li><strong>Not affected by the units of measurement</strong> — its key advantage over covariance.</li>' +
      '</ul>' +
      '<div class="tip"><strong>Two cautions the chapter stresses.</strong> (1) Correlation measures only <em>linear</em> association — a strong curved relationship can produce r near 0. (2) <strong>Correlation does not imply causation.</strong> A high correlation between two variables does not establish that one causes the other.</div>' },

    { title: '9. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>Sample variance divides by n − 1; population variance divides by N.</strong> The single most tested formula detail in the chapter.</li>' +
      '<li><strong>Standard deviation is the square root of variance</strong> and carries the same units as the data; variance is in squared units.</li>' +
      '<li><strong>The mean is pulled by outliers; the median is not.</strong> Skewed right → mean &gt; median.</li>' +
      '<li><strong>The mode is the only location measure usable with categorical data</strong>, and a data set can have none, one, or several modes.</li>' +
      '<li><strong>Use the geometric mean for growth rates</strong>, not the arithmetic mean.</li>' +
      '<li><strong>Q<sub>2</sub> IS the median</strong>, and the 50th percentile is the same thing.</li>' +
      '<li><strong>IQR = Q<sub>3</sub> − Q<sub>1</sub></strong> = the span of the middle 50%.</li>' +
      '<li><strong>Chebyshev applies to any distribution and says "at least"; the empirical rule needs a bell shape</strong> and gives 68–95–99.7.</li>' +
      '<li><strong>Outlier fences use 1.5 × IQR</strong>, and the z-score rule uses |z| &gt; 3.</li>' +
      '<li><strong>In a boxplot, whiskers stop at the most extreme data values inside the limits</strong>, not at the limits.</li>' +
      '<li><strong>Covariance depends on units; correlation does not</strong> and is bounded by −1 and +1.</li>' +
      '<li><strong>Correlation ≠ causation</strong>, and r ≈ 0 only rules out a <em>linear</em> relationship.</li>' +
      '<li><strong>The coefficient of variation</strong> is the tool for comparing variability across data sets with different means or units.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Sample statistic vs. population parameter', def: 'A numerical measure computed from sample data is a sample statistic; from population data, a population parameter. A sample statistic used to estimate a parameter is a point estimator.' },
    { term: 'Sample mean (x̄)', def: 'Σxᵢ ÷ n. The balance point of the data; sensitive to extreme values.' },
    { term: 'Population mean (μ)', def: 'Σxᵢ ÷ N.' },
    { term: 'Weighted mean', def: 'Σ(wᵢxᵢ) ÷ Σwᵢ — used when observations differ in importance, such as cost per pound weighted by pounds purchased.' },
    { term: 'Geometric mean', def: 'The nth root of the product of n values; the correct average for rates of change such as growth rates and investment returns. Convert returns to growth factors first.' },
    { term: 'Median', def: 'The middle value in ascending order (average of the two middle values when n is even). Resistant to extreme values.' },
    { term: 'Mode', def: 'The value occurring most frequently. Two modes = bimodal; more than two = multimodal. The only location measure usable for categorical data.' },
    { term: 'Percentile', def: 'A value such that about p% of observations are at or below it. Locate with Lp = (p ÷ 100)(n + 1), interpolating when the position is not a whole number.' },
    { term: 'Quartiles', def: 'Q1 = 25th percentile, Q2 = 50th percentile (the median), Q3 = 75th percentile. They divide the data into four parts.' },
    { term: 'Range', def: 'Largest value − smallest value. Simplest variability measure but very sensitive to outliers since it uses only two values.' },
    { term: 'Interquartile range (IQR)', def: 'Q3 − Q1 — the range of the middle 50% of the data; not distorted by outliers.' },
    { term: 'Sample variance (s²)', def: 'Σ(xᵢ − x̄)² ÷ (n − 1). The divisor n − 1 makes it an unbiased estimator of σ².' },
    { term: 'Population variance (σ²)', def: 'Σ(xᵢ − μ)² ÷ N — note the divisor is N, not N − 1.' },
    { term: 'Standard deviation', def: 'The positive square root of the variance; expressed in the same units as the data, unlike variance.' },
    { term: 'Degrees of freedom', def: 'n − 1 for a sample variance: once x̄ is known, only n − 1 deviations are free to vary because all deviations must sum to zero.' },
    { term: 'Coefficient of variation', def: '(s ÷ x̄) × 100% — the standard deviation as a percentage of the mean; used to compare variability across data sets with different units or means.' },
    { term: 'z-score', def: '(xᵢ − x̄) ÷ s — the number of standard deviations a value is from the mean. Also called the standardized value; positive above the mean, negative below.' },
    { term: 'Skewness', def: 'A measure of distribution asymmetry. Symmetric: skewness 0 and mean = median. Skewed right: positive, mean > median. Skewed left: negative, mean < median.' },
    { term: 'Chebyshev’s theorem', def: 'For ANY distribution, at least (1 − 1/z²) of values lie within z standard deviations of the mean (z > 1): at least 75% within 2, at least 89% within 3.' },
    { term: 'Empirical rule', def: 'For bell-shaped distributions only: about 68% within 1 standard deviation, about 95% within 2, and almost all within 3.' },
    { term: 'Outlier', def: 'An unusually small or large value. Flagged when |z| > 3, or when the value falls outside Q1 − 1.5(IQR) and Q3 + 1.5(IQR). Should be investigated, not automatically discarded.' },
    { term: 'Five-number summary', def: 'Smallest value, Q1, median, Q3, largest value.' },
    { term: 'Boxplot', def: 'Graph of the five-number summary: box from Q1 to Q3 with a line at the median, whiskers to the most extreme values within the 1.5 × IQR limits, and outliers marked with asterisks.' },
    { term: 'Covariance', def: 'sxy = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ (n − 1). Positive indicates positive linear association, negative the reverse — but its magnitude depends on the units of measurement.' },
    { term: 'Correlation coefficient', def: 'rxy = sxy ÷ (sx sy) — the Pearson product moment correlation. Always between −1 and +1 and unaffected by units of measurement.' },
    { term: 'Interpreting r', def: '+1 is a perfect positive linear relationship, −1 perfect negative, 0 no linear relationship. Closer to ±1 means stronger linear association.' },
    { term: 'Correlation and causation', def: 'A strong correlation does not establish that one variable causes the other, and r near 0 rules out only a LINEAR relationship.' }
  ],
  quiz: [
    { q: 'The sample variance is computed by dividing the sum of squared deviations by…',
      options: ['n', 'n − 1', 'N', 'n + 1'],
      answer: 1, explain: 'Dividing by n − 1 (the degrees of freedom) makes s² an unbiased estimator of σ². Population variance divides by N.' },
    { q: 'Which measure of location is MOST affected by extreme values?',
      options: ['median', 'mode', 'mean', 'first quartile'],
      answer: 2, explain: 'Every value enters the mean’s sum, so one extreme observation shifts it. The median only depends on position.' },
    { q: 'In a distribution skewed to the right, the relationship between mean and median is…',
      options: ['mean < median', 'mean = median', 'mean > median', 'they cannot be compared'],
      answer: 2, explain: 'The long right tail pulls the mean above the median.' },
    { q: 'The second quartile, Q₂, is the same as the…',
      options: ['mean', 'mode', 'median', 'range'],
      answer: 2, explain: 'Q₂ is the 50th percentile, which is the median by definition.' },
    { q: 'The interquartile range is computed as…',
      options: ['largest − smallest', 'Q₃ − Q₁', 'Q₃ − median', 'median − Q₁'],
      answer: 1, explain: 'The IQR spans the middle 50% of the data and is not distorted by outliers.' },
    { q: 'The standard deviation is…',
      options: ['the square of the variance', 'the positive square root of the variance', 'the variance divided by the mean', 'always larger than the variance'],
      answer: 1, explain: 'Taking the square root returns the measure to the original units of the data.' },
    { q: 'A z-score of −2.0 indicates that the observation is…',
      options: ['2 units below the mean', '2 standard deviations below the mean', '2 standard deviations above the mean', 'equal to the mean'],
      answer: 1, explain: 'z-scores count standard deviations; the negative sign places the value below the mean.' },
    { q: 'Chebyshev’s theorem states that at least what percentage of values lies within 2 standard deviations of the mean?',
      options: ['68%', '75%', '89%', '95%'],
      answer: 1, explain: '1 − 1/2² = 0.75. The 95% figure is the empirical rule, which requires a bell-shaped distribution.' },
    { q: 'The empirical rule applies only to data that are…',
      options: ['skewed right', 'approximately bell-shaped', 'categorical', 'free of outliers'],
      answer: 1, explain: 'Chebyshev’s theorem is the version that works for any distribution shape.' },
    { q: 'According to the empirical rule, approximately what percentage of values lies within 1 standard deviation of the mean?',
      options: ['50%', '68%', '75%', '95%'],
      answer: 1, explain: 'The sequence is roughly 68% / 95% / almost all for 1, 2, and 3 standard deviations.' },
    { q: 'Using the z-score method, a value is treated as a candidate outlier when…',
      options: ['|z| > 1', '|z| > 2', '|z| > 3', 'z is negative'],
      answer: 2, explain: 'Values more than three standard deviations from the mean are flagged for investigation.' },
    { q: 'Using the IQR method, the upper limit for detecting outliers is…',
      options: ['Q₃ + IQR', 'Q₃ + 1.5(IQR)', 'Q₃ + 3(IQR)', 'Q₃ + 1.5(Q₃ − median)'],
      answer: 1, explain: 'The fences are Q₁ − 1.5(IQR) and Q₃ + 1.5(IQR).' },
    { q: 'The five-number summary consists of…',
      options: ['mean, median, mode, range, variance', 'smallest value, Q₁, median, Q₃, largest value', 'mean, standard deviation, n, min, max', 'Q₁, Q₂, Q₃, IQR, range'],
      answer: 1, explain: 'Those five values are exactly what a boxplot displays.' },
    { q: 'In a boxplot, the box itself spans…',
      options: ['the full range of the data', 'the interquartile range, from Q₁ to Q₃', 'one standard deviation either side of the mean', 'the middle 95% of the data'],
      answer: 1, explain: 'The box covers the middle 50%, with a line drawn inside it at the median.' },
    { q: 'In a boxplot, the whiskers extend to…',
      options: ['exactly Q₁ − 1.5(IQR) and Q₃ + 1.5(IQR)', 'the smallest and largest data values within the limits', 'the smallest and largest values in the entire data set', 'three standard deviations from the mean'],
      answer: 1, explain: 'The limits determine which values count as outliers; the whiskers stop at real data values inside them.' },
    { q: 'The coefficient of variation is most useful for…',
      options: ['detecting outliers', 'comparing variability between data sets with different units or means', 'finding the median', 'measuring skewness'],
      answer: 1, explain: 'Expressing s as a percentage of the mean removes the scale, making the comparison meaningful.' },
    { q: 'Which measure of location can be used with categorical data?',
      options: ['mean', 'median', 'mode', 'geometric mean'],
      answer: 2, explain: 'You can identify the most frequent category even when arithmetic is impossible.' },
    { q: 'The correct average to use for a series of annual growth rates is the…',
      options: ['arithmetic mean', 'weighted mean', 'geometric mean', 'median'],
      answer: 2, explain: 'Rates of change compound, so the nth root of the product of growth factors gives the true average rate.' },
    { q: 'The sample correlation coefficient must always lie…',
      options: ['between 0 and 1', 'between −1 and +1', 'above 0', 'between −100 and +100'],
      answer: 1, explain: 'Dividing covariance by both standard deviations bounds the result.' },
    { q: 'A correlation coefficient of −0.95 indicates…',
      options: ['a weak relationship', 'a strong negative linear relationship', 'no relationship', 'a strong positive linear relationship'],
      answer: 1, explain: 'The sign gives direction and the closeness to 1 in absolute value gives strength.' },
    { q: 'The main advantage of the correlation coefficient over the covariance is that correlation…',
      options: ['is always positive', 'is not affected by the units of measurement', 'is easier to compute', 'proves causation'],
      answer: 1, explain: 'Covariance magnitude changes if you rescale the data; correlation does not.' },
    { q: 'A correlation coefficient near zero tells you there is no…',
      options: ['relationship of any kind', 'linear relationship', 'causation', 'variability'],
      answer: 1, explain: 'A strong curved relationship can still produce r near 0, which is why scatter diagrams matter.' },
    { q: 'If every value in a data set is identical, the standard deviation equals…',
      options: ['the mean', 'one', 'zero', 'the number of observations'],
      answer: 2, explain: 'No value deviates from the mean, so every squared deviation is zero.' },
    { q: 'A weighted mean should be used when…',
      options: ['the data contain outliers', 'observations differ in their relative importance', 'the data are categorical', 'the distribution is skewed'],
      answer: 1, explain: 'Each value is multiplied by its weight before averaging — as with cost per pound weighted by pounds purchased.' },
    { q: 'A data set has exactly two values that both occur with the greatest frequency. The data are…',
      options: ['symmetric', 'bimodal', 'multimodal', 'skewed'],
      answer: 1, explain: 'Exactly two modes is bimodal; more than two is multimodal.' }
  ]
});
