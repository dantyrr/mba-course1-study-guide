window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'stat-ch7', subject: 'stat', num: 7, altLabel: 'Course Ch 22',
  title: 'Sampling and Sampling Distributions',
  overview: 'How a sample lets you say something about a population. Covers simple random sampling from finite and infinite populations, point estimation, the sampling distributions of x̄ and p̄, the central limit theorem, properties of good estimators, alternative sampling methods, and the difference between sampling error and nonsampling error.',
  sections: [
    { title: '0. The Vocabulary of Sampling (7.1)', html:
      '<div class="tablewrap"><table><tr><th>Term</th><th>Definition</th></tr>' +
      '<tr><td><span class="term">Element</span></td><td>The entity on which data are collected.</td></tr>' +
      '<tr><td><span class="term">Population</span></td><td>The collection of ALL elements of interest.</td></tr>' +
      '<tr><td><span class="term">Sample</span></td><td>A subset of the population.</td></tr>' +
      '<tr><td><span class="term">Sampling</span></td><td>The process of collecting data to answer a research question about a population.</td></tr>' +
      '<tr><td><span class="term">Sampled population</span></td><td>The population from which the sample is actually drawn.</td></tr>' +
      '<tr><td><span class="term">Target population</span></td><td>The population you want to make inferences about.</td></tr>' +
      '<tr><td><span class="term">Frame</span></td><td>A list of the elements the sample will be selected from.</td></tr>' +
      '</table></div>' +
      '<p>Because a sample contains only part of the population, results are only <strong>estimates</strong> — but with proper methods they are good estimates.</p>' +
      '<div class="tip"><strong>Practical advice the chapter emphasizes:</strong> always check that the <strong>sampled population and the target population are in close agreement</strong>. If they are not, you cannot guarantee the sample represents the population you actually care about, no matter how good the sampling method is.</div>' },

    { title: '1. Sampling from Finite and Infinite Populations (7.2)', html:
      '<p><strong>Finite population — simple random sample.</strong> A <span class="term">simple random sample</span> of size n from a finite population of size N is selected so that <strong>every possible sample of size n has the same probability of being selected</strong>.</p>' +
      '<ul>' +
      '<li><span class="term">Sampling with replacement</span> — each element is returned before the next draw, so an element can appear more than once.</li>' +
      '<li><span class="term">Sampling without replacement</span> — the procedure <strong>used most often</strong>.</li>' +
      '<li><strong>Procedure:</strong> assign a random number to each element (Excel’s RAND gives values uniformly between 0 and 1), then select the n elements with the smallest random numbers.</li>' +
      '</ul>' +
      '<p><strong>Infinite population — random sample.</strong> Sometimes no list of all elements exists, so no frame can be built. A <span class="term">random sample</span> from an infinite population satisfies two conditions:</p>' +
      '<ol>' +
      '<li>Each element selected comes from <strong>the same population</strong>.</li>' +
      '<li>Each element is selected <strong>independently</strong>.</li>' +
      '</ol>' +
      '<p>An <strong>ongoing process</strong> typically generates an infinite population because there is no upper limit on how many units it can produce — parts on a production line, transactions at a bank.</p>' },

    { title: '2. Point Estimation (7.3)', html:
      '<p>A sample statistic that estimates a population parameter is a <span class="term">point estimator</span>; the numerical value it produces is the <span class="term">point estimate</span>.</p>' +
      '<div class="tablewrap"><table><tr><th>Population parameter</th><th>Point estimator</th></tr>' +
      '<tr><td>Population mean μ</td><td>Sample mean x̄</td></tr>' +
      '<tr><td>Population standard deviation σ</td><td>Sample standard deviation s</td></tr>' +
      '<tr><td>Population proportion p</td><td>Sample proportion p̄</td></tr>' +
      '</table></div>' +
      '<p>In the EAI example, a simple random sample of 30 managers from a population of 2,500 is used to estimate the mean annual salary and the proportion who completed the management training program.</p>' +
      '<div class="tip"><strong>The key idea to carry forward:</strong> a <em>different</em> random sample would have produced <em>different</em> point estimates. That variation from sample to sample is exactly what a sampling distribution describes.</div>' },

    { title: '3. Sampling Distribution of x̄ (7.4, 7.5)', html:
      '<p>The <span class="term">sampling distribution of x̄</span> is the probability distribution of all possible values of the sample mean. Three things define it:</p>' +
      '<div class="formula">Expected value:&nbsp;&nbsp;E(x̄) = μ<br>Standard deviation (standard error):&nbsp;&nbsp;σ<sub>x̄</sub> = σ ÷ √n<br>Form: normal if the population is normal, or approximately normal by the central limit theorem</div>' +
      '<p>Because E(x̄) = μ, the sample mean is an <strong>unbiased</strong> estimator of the population mean.</p>' +
      '<p><strong>The finite population correction factor.</strong> When sampling <em>without replacement</em> from a finite population:</p>' +
      '<div class="formula">σ<sub>x̄</sub> = √[(N − n) ÷ (N − 1)] × (σ ÷ √n)</div>' +
      '<p>The correction can be ignored — and the simpler σ/√n used — whenever <strong>n/N ≤ 0.05</strong> (the sample is less than 5% of the population). With 30 managers out of 2,500, n/N = 0.012, so it is ignored.</p>' +
      '<p><strong>The standard error shrinks as n grows.</strong> Because √n is in the denominator, quadrupling the sample size <em>halves</em> the standard error. Larger samples give sample means clustered more tightly around μ.</p>' },

    { title: '4. The Central Limit Theorem (7.5)', html:
      '<div class="formula">Central limit theorem: In selecting random samples of size n from a population, the sampling distribution of x̄ can be approximated by a NORMAL distribution as the sample size becomes large.</div>' +
      '<p>This is the single most important result in the chapter — it is what makes inference possible without knowing the population’s shape.</p>' +
      '<div class="tablewrap"><table><tr><th>Population shape</th><th>What you can say about the sampling distribution of x̄</th></tr>' +
      '<tr><td><strong>Normal</strong></td><td>x̄ is normally distributed <strong>for any sample size</strong> — no CLT needed.</td></tr>' +
      '<tr><td><strong>Not normal</strong></td><td>x̄ is approximately normal when <strong>n ≥ 30</strong>.</td></tr>' +
      '<tr><td><strong>Badly skewed or with outliers</strong></td><td>Samples of <strong>50 or more</strong> may be needed.</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>n ≥ 30 is the rule of thumb to memorize.</strong> Note what the CLT does and does not say: it describes the distribution of the <em>sample mean</em>, not the distribution of the individual data values. The population can stay as skewed as it likes.</div>' },

    { title: '5. Sampling Distribution of p̄ (7.6)', html:
      '<p>The <span class="term">sample proportion</span> p̄ = x/n estimates the population proportion p, and its sampling distribution works the same way:</p>' +
      '<div class="formula">Expected value:&nbsp;&nbsp;E(p̄) = p&nbsp;&nbsp;(so p̄ is unbiased)<br>Standard error:&nbsp;&nbsp;σ<sub>p̄</sub> = √[p(1 − p) ÷ n]<br>Form: approximately normal when np ≥ 5 AND n(1 − p) ≥ 5</div>' +
      '<p>The finite population correction applies here too, and is likewise ignored when n/N ≤ 0.05.</p>' +
      '<p><strong>Worked example.</strong> 17% of households spend more than $100 per week on groceries; n = 800.</p>' +
      '<ul>' +
      '<li>E(p̄) = <strong>0.17</strong></li>' +
      '<li>σ<sub>p̄</sub> = √[(0.17)(0.83) ÷ 800] = √0.00017638 = <strong>0.0133</strong></li>' +
      '<li>Check normality: np = 800(0.17) = 136 ≥ 5 and n(1−p) = 664 ≥ 5 ✓</li>' +
      '</ul>' },

    { title: '6. Properties of Point Estimators (7.7)', html:
      '<div class="tablewrap"><table><tr><th>Property</th><th>Meaning</th></tr>' +
      '<tr><td><span class="term">Unbiased</span></td><td>The expected value of the estimator equals the population parameter. x̄ and p̄ are unbiased; this is why sample variance divides by n − 1 rather than n.</td></tr>' +
      '<tr><td><span class="term">Efficient</span></td><td>Among unbiased estimators, the one with the <strong>smaller standard error</strong> is more efficient — it is more likely to land near the parameter.</td></tr>' +
      '<tr><td><span class="term">Consistent</span></td><td>Values of the estimator tend to get <strong>closer to the parameter as the sample size grows</strong>. A larger sample tends to give a better estimate.</td></tr>' +
      '</table></div>' },

    { title: '7. Other Sampling Methods (7.8)', html:
      '<p><strong>Probability sampling methods</strong> — these allow you to evaluate how good the sample results are:</p>' +
      '<div class="tablewrap"><table><tr><th>Method</th><th>How it works</th><th>Advantage / Disadvantage</th></tr>' +
      '<tr><td><span class="term">Stratified random sampling</span></td><td>Divide the population into <strong>strata</strong>; every element belongs to exactly one. Take a simple random sample from <em>each</em> stratum. Best when elements within a stratum are <strong>alike (homogeneous)</strong>.</td><td><strong>+</strong> More precise results than simple random sampling when strata are homogeneous.<br><strong>−</strong> May require a larger total sample size.</td></tr>' +
      '<tr><td><span class="term">Cluster sampling</span></td><td>Divide the population into <strong>clusters</strong>, ideally each a small-scale version of the population (<strong>heterogeneous</strong>). Take a simple random sample <em>of clusters</em>; all elements in chosen clusters form the sample.</td><td><strong>+</strong> Cost effective — close proximity means many observations quickly.<br><strong>−</strong> Generally requires a larger total sample size.</td></tr>' +
      '<tr><td><span class="term">Systematic sampling</span></td><td>To get n from N, randomly select one of the first N/n elements, then take every N/n-th element after it.</td><td><strong>+</strong> Easier to identify the sample. Has the properties of a simple random sample if the list ordering is random.</td></tr>' +
      '</table></div>' +
      '<p><strong>Nonprobability sampling methods</strong> — easy, but you <em>cannot</em> evaluate how representative the sample is:</p>' +
      '<div class="tablewrap"><table><tr><th>Method</th><th>How it works</th><th>Weakness</th></tr>' +
      '<tr><td><span class="term">Convenience sampling</span></td><td>Items are included because they are easy to obtain — e.g., a professor using student volunteers.</td><td>Impossible to determine how representative the sample is.</td></tr>' +
      '<tr><td><span class="term">Judgment sampling</span></td><td>An expert selects the elements they feel are most representative — e.g., a reporter sampling a few senators.</td><td>Quality depends entirely on the judgment of the person selecting.</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>The chapter’s recommendation:</strong> use <strong>probability sampling methods</strong> for finite populations, because formulas exist to evaluate the "goodness" of the results. No such evaluation is possible with convenience or judgment sampling, so interpret those results with great care.</div>' +
      '<p><strong>Stratified vs. cluster — the distinction most often confused:</strong> in <em>stratified</em> sampling you want each stratum internally <strong>similar</strong> and you sample <em>within every stratum</em>. In <em>cluster</em> sampling you want each cluster internally <strong>diverse</strong> (a mini-population) and you sample <em>whole clusters</em>.</p>' },

    { title: '8. Sampling Error vs. Nonsampling Error (7.9)', html:
      '<p><span class="term">Sampling error</span> is the natural deviation of the sample from the population that results from random sampling. On average random samples are representative, but no single sample is perfectly so. <strong>Larger samples reduce sampling error</strong>, because the standard error shrinks as n grows.</p>' +
      '<p><span class="term">Nonsampling error</span> is any deviation arising for reasons <em>other</em> than random sampling — and a bigger sample does <strong>not</strong> fix it:</p>' +
      '<div class="tablewrap"><table><tr><th>Type</th><th>Cause</th></tr>' +
      '<tr><td><strong>Coverage error</strong></td><td>The research objective and the population sampled from are not aligned.</td></tr>' +
      '<tr><td><strong>Nonresponse error</strong></td><td>Some segments of the population are more or less likely to respond to the survey.</td></tr>' +
      '<tr><td><strong>Measurement error</strong></td><td>The characteristic of interest is measured incorrectly.</td></tr>' +
      '<tr><td><strong>Interviewer error</strong></td><td>The interviewer biases responses positively or negatively.</td></tr>' +
      '<tr><td><strong>Processing error</strong></td><td>Mistakes introduced during data recording and preparation.</td></tr>' +
      '</table></div>' },

    { title: '9. Big Data and Sampling (7.9)', html:
      '<p><span class="term">Big data</span> is any set of data too large or too complex for standard data-processing techniques and typical desktop software. It is characterized by the <strong>Four V’s</strong>:</p>' +
      '<div class="tablewrap"><table><tr><th>V</th><th>Meaning</th></tr>' +
      '<tr><td><strong>Volume</strong></td><td>The amount of data generated</td></tr>' +
      '<tr><td><strong>Variety</strong></td><td>The diversity in types and structures of data</td></tr>' +
      '<tr><td><strong>Veracity</strong></td><td>The reliability of the data</td></tr>' +
      '<tr><td><strong>Velocity</strong></td><td>The speed at which data are generated</td></tr>' +
      '</table></div>' +
      '<p>Two structural challenges: <strong>tall data</strong> (so many observations that traditional statistical inference becomes obsolete — everything is "significant") and <strong>wide data</strong> (so many variables that considering them simultaneously is infeasible).</p>' },

    { title: '10. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>E(x̄) = μ and E(p̄) = p</strong> — both estimators are unbiased.</li>' +
      '<li><strong>Standard error of the mean = σ ÷ √n.</strong> It gets <em>smaller</em> as n gets <em>larger</em>; quadrupling n halves it.</li>' +
      '<li><strong>Standard error of the proportion = √[p(1−p)/n].</strong></li>' +
      '<li><strong>Ignore the finite population correction when n/N ≤ 0.05.</strong></li>' +
      '<li><strong>Central limit theorem: n ≥ 30</strong> makes x̄ approximately normal regardless of population shape. If the population is already normal, x̄ is normal for <em>any</em> n.</li>' +
      '<li><strong>The CLT describes the sample MEAN, not the individual observations.</strong></li>' +
      '<li><strong>p̄ is approximately normal when np ≥ 5 and n(1−p) ≥ 5</strong> — check both.</li>' +
      '<li><strong>Stratified: homogeneous strata, sample within every stratum. Cluster: heterogeneous clusters, sample whole clusters.</strong></li>' +
      '<li><strong>Convenience and judgment sampling are nonprobability methods</strong>, so the goodness of the results cannot be evaluated.</li>' +
      '<li><strong>Larger samples reduce sampling error but do nothing for nonsampling error.</strong></li>' +
      '<li><strong>Unbiased, efficient, consistent</strong> — know all three estimator properties; efficiency compares standard errors among unbiased estimators.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Element', def: 'The entity on which data are collected.' },
    { term: 'Population vs. sample', def: 'A population is the collection of all elements of interest; a sample is a subset of it.' },
    { term: 'Frame', def: 'A list of the elements from which the sample will be selected. Infinite populations have no frame.' },
    { term: 'Sampled vs. target population', def: 'The sampled population is where the sample actually comes from; the target population is what you want to make inferences about. They should be in close agreement.' },
    { term: 'Simple random sample (finite)', def: 'A sample of size n selected so that every possible sample of size n has the same probability of being selected.' },
    { term: 'Sampling with/without replacement', def: 'With replacement returns each element before the next draw so it can reappear; without replacement is used most often.' },
    { term: 'Random sample (infinite population)', def: 'Each element selected comes from the same population and each is selected independently.' },
    { term: 'Point estimator / point estimate', def: 'A sample statistic used to estimate a population parameter; the resulting numerical value is the point estimate.' },
    { term: 'Sampling distribution', def: 'The probability distribution of all possible values of a sample statistic.' },
    { term: 'E(x̄) = μ', def: 'The expected value of the sample mean equals the population mean, making x̄ an unbiased estimator.' },
    { term: 'Standard error of the mean', def: 'σx̄ = σ ÷ √n — the standard deviation of the sampling distribution of x̄. It decreases as n increases.' },
    { term: 'Finite population correction factor', def: '√[(N − n) ÷ (N − 1)], applied when sampling without replacement from a finite population; ignored when n/N ≤ 0.05.' },
    { term: 'Central limit theorem', def: 'The sampling distribution of x̄ can be approximated by a normal distribution as the sample size becomes large; n ≥ 30 is the rule of thumb.' },
    { term: 'Normal population exception', def: 'If the population itself is normally distributed, x̄ is normally distributed for ANY sample size.' },
    { term: 'Sample proportion p̄', def: 'x/n, the point estimator of the population proportion p. E(p̄) = p.' },
    { term: 'Standard error of the proportion', def: 'σp̄ = √[p(1 − p) ÷ n].' },
    { term: 'Normality condition for p̄', def: 'The sampling distribution of p̄ is approximately normal when np ≥ 5 AND n(1 − p) ≥ 5.' },
    { term: 'Unbiased estimator', def: 'An estimator whose expected value equals the population parameter being estimated.' },
    { term: 'Efficiency', def: 'Among unbiased estimators, the one with the smaller standard error is more efficient.' },
    { term: 'Consistency', def: 'An estimator is consistent if its values tend to get closer to the population parameter as the sample size becomes larger.' },
    { term: 'Stratified random sampling', def: 'Divide the population into homogeneous strata (each element in exactly one), then take a simple random sample from every stratum. More precise, but may need a larger total sample.' },
    { term: 'Cluster sampling', def: 'Divide the population into heterogeneous clusters, each ideally a small-scale version of the population, then randomly select whole clusters. Cost effective but usually needs a larger sample.' },
    { term: 'Systematic sampling', def: 'Randomly select one of the first N/n elements, then take every N/n-th element thereafter. Easier to identify than a simple random sample.' },
    { term: 'Convenience sampling', def: 'A nonprobability method where items are chosen because they are easy to obtain; it is impossible to judge how representative the sample is.' },
    { term: 'Judgment sampling', def: 'A nonprobability method where an expert picks the elements they believe are most representative; quality depends entirely on that person’s judgment.' },
    { term: 'Sampling error', def: 'The natural deviation of a sample from its population caused by random sampling; reduced by larger samples.' },
    { term: 'Nonsampling error', def: 'Deviation arising for reasons other than random sampling — coverage, nonresponse, measurement, interviewer, and processing errors. Not fixed by a larger sample.' },
    { term: 'Big data and the Four V’s', def: 'Data too large or complex for standard processing, characterized by Volume, Variety, Veracity, and Velocity.' },
    { term: 'Tall data vs. wide data', def: 'Tall data has so many observations that traditional inference becomes obsolete; wide data has so many variables that simultaneous consideration is infeasible.' }
  ],
  quiz: [
    { q: 'A simple random sample of size n from a finite population of size N is selected such that…',
      options: ['every element has an equal chance of being first', 'every possible sample of size n has the same probability of being selected', 'the sample is chosen by an expert', 'elements are chosen in order'],
      answer: 1, explain: 'The definition applies to every possible SAMPLE, not just every element.' },
    { q: 'The expected value of the sample mean, E(x̄), equals…',
      options: ['x̄', 'μ', 'σ ÷ √n', '0'],
      answer: 1, explain: 'Because E(x̄) = μ, the sample mean is an unbiased estimator of the population mean.' },
    { q: 'The standard error of the mean is computed as…',
      options: ['σ ÷ n', 'σ ÷ √n', 'σ² ÷ n', '√(σ ÷ n)'],
      answer: 1, explain: 'This is the standard deviation of the sampling distribution of x̄.' },
    { q: 'As the sample size increases, the standard error of the mean…',
      options: ['increases', 'decreases', 'stays the same', 'becomes zero'],
      answer: 1, explain: 'Since √n is in the denominator, larger samples give sample means clustered more tightly around μ.' },
    { q: 'A population has σ = 20. For samples of size 100, the standard error of the mean is…',
      options: ['20', '2', '0.2', '4'],
      answer: 1, explain: '20 ÷ √100 = 20 ÷ 10 = 2.' },
    { q: 'The central limit theorem states that the sampling distribution of x̄ can be approximated by a normal distribution when…',
      options: ['the population is normal', 'the sample size is large', 'the standard deviation is known', 'sampling is done with replacement'],
      answer: 1, explain: 'The CLT applies regardless of the population’s shape once n is large enough — the rule of thumb is n ≥ 30.' },
    { q: 'If the population is normally distributed, the sampling distribution of x̄ is normal for…',
      options: ['n ≥ 30 only', 'n ≥ 50 only', 'any sample size', 'no sample size'],
      answer: 2, explain: 'With a normal population you do not need the central limit theorem at all.' },
    { q: 'The rule of thumb for the sample size needed for the central limit theorem to apply is…',
      options: ['n ≥ 5', 'n ≥ 10', 'n ≥ 30', 'n ≥ 100'],
      answer: 2, explain: 'Highly skewed populations or data with outliers may need samples approaching 50.' },
    { q: 'The finite population correction factor can be ignored when…',
      options: ['n/N ≤ 0.05', 'n/N ≥ 0.05', 'n ≥ 30', 'the population is normal'],
      answer: 0, explain: 'When the sample is less than 5% of the population, the simpler σ/√n is accurate enough.' },
    { q: 'The sampling distribution of p̄ can be approximated by a normal distribution when…',
      options: ['n ≥ 30', 'np ≥ 5 and n(1 − p) ≥ 5', 'p ≥ 0.5', 'the population is finite'],
      answer: 1, explain: 'Both conditions must be checked — a proportion near 0 or 1 needs a larger n.' },
    { q: 'The standard error of the sample proportion is…',
      options: ['√[p(1 − p) ÷ n]', 'p(1 − p) ÷ n', '√[p ÷ n]', 'σ ÷ √n'],
      answer: 0, explain: 'With p = 0.17 and n = 800: √[(0.17)(0.83)/800] = 0.0133.' },
    { q: 'An estimator whose expected value equals the population parameter is said to be…',
      options: ['consistent', 'efficient', 'unbiased', 'robust'],
      answer: 2, explain: 'Both x̄ and p̄ are unbiased estimators.' },
    { q: 'Given two unbiased estimators, the more efficient one is the one with…',
      options: ['the larger standard error', 'the smaller standard error', 'the larger sample size', 'the simpler formula'],
      answer: 1, explain: 'A smaller standard error means the estimator is more likely to land near the parameter.' },
    { q: 'A point estimator is consistent if…',
      options: ['it gives the same value every time', 'its values tend to get closer to the parameter as the sample size increases', 'it is unbiased', 'it has zero standard error'],
      answer: 1, explain: 'Consistency is why larger samples tend to give better estimates.' },
    { q: 'In stratified random sampling, the best results are obtained when elements within each stratum are…',
      options: ['as different as possible', 'as much alike as possible', 'randomly ordered', 'equal in number'],
      answer: 1, explain: 'Homogeneous strata are what make stratified sampling more precise than simple random sampling.' },
    { q: 'In cluster sampling, each cluster should ideally be…',
      options: ['homogeneous', 'a representative small-scale version of the population', 'the same size', 'geographically distant'],
      answer: 1, explain: 'This is the opposite requirement from strata — clusters should be internally heterogeneous.' },
    { q: 'Which sampling method selects every N/n-th element after a random start?',
      options: ['stratified', 'cluster', 'systematic', 'convenience'],
      answer: 2, explain: 'It has the properties of a simple random sample when the population list is randomly ordered.' },
    { q: 'A professor who uses student volunteers for a study is using…',
      options: ['stratified sampling', 'cluster sampling', 'convenience sampling', 'systematic sampling'],
      answer: 2, explain: 'It is easy, but it is impossible to determine how representative the sample is.' },
    { q: 'The main disadvantage of nonprobability sampling methods is that…',
      options: ['they are expensive', 'they take too long', 'the goodness of the sample results cannot be evaluated', 'they require a frame'],
      answer: 2, explain: 'No formulas exist to evaluate closeness to the population parameters, so results must be interpreted with great care.' },
    { q: 'Sampling error can be limited by…',
      options: ['collecting larger samples', 'using convenience sampling', 'training interviewers', 'improving data entry'],
      answer: 0, explain: 'The standard error shrinks as n grows. Interviewer training and data-entry care address NONsampling error.' },
    { q: 'Error that occurs when some segments of the population are less likely to answer a survey is…',
      options: ['coverage error', 'nonresponse error', 'measurement error', 'processing error'],
      answer: 1, explain: 'It is a nonsampling error, so a larger sample does not fix it.' },
    { q: 'An ongoing production line generates what kind of population?',
      options: ['finite', 'infinite', 'stratified', 'clustered'],
      answer: 1, explain: 'There is no upper limit on the number of units the process can create, so no frame can be constructed.' },
    { q: 'Which is NOT one of the Four V’s of big data?',
      options: ['Volume', 'Variety', 'Validity', 'Velocity'],
      answer: 2, explain: 'The four are Volume, Variety, Veracity, and Velocity.' },
    { q: 'A data set with so many observations that traditional statistical inference becomes obsolete is described as…',
      options: ['wide data', 'tall data', 'deep data', 'clustered data'],
      answer: 1, explain: 'Wide data is the companion problem — too many variables to consider simultaneously.' },
    { q: 'When using a sample to make inferences, you should always confirm that…',
      options: ['the sample size is exactly 30', 'the sampled population and target population are in close agreement', 'sampling is done with replacement', 'the population is normal'],
      answer: 1, explain: 'Otherwise the sample may be representative of the wrong population entirely.' }
  ]
});
