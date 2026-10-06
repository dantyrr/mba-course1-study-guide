window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'stat-ch2', subject: 'stat', num: 2, altLabel: 'Course Ch 19',
  title: 'Descriptive Statistics: Tabular and Graphical Displays',
  overview: 'How to summarize raw data so patterns become visible — frequency distributions and charts for one categorical variable, then for one quantitative variable, then crosstabulations and charts for two variables at once. Closes with Simpson’s paradox and the rules for building displays that actually communicate.',
  sections: [
    { title: '0. The Map (Learning Objectives 2-1 to 2-10)', html:
      '<p>The chapter moves in three steps: <strong>one categorical variable → one quantitative variable → two variables together</strong>, with a tabular method and a graphical method at each step.</p>' +
      '<div class="tablewrap"><table><tr><th>Data</th><th>Tabular display</th><th>Graphical display</th></tr>' +
      '<tr><td><strong>One categorical variable</strong></td><td>Frequency, relative frequency, percent frequency distribution</td><td>Bar chart, pie chart</td></tr>' +
      '<tr><td><strong>One quantitative variable</strong></td><td>Frequency distribution (classes), cumulative distributions</td><td>Dot plot, histogram, stem-and-leaf display</td></tr>' +
      '<tr><td><strong>Two variables</strong></td><td>Crosstabulation (with row or column percentages)</td><td>Scatter diagram + trendline, side-by-side bar chart, stacked bar chart</td></tr>' +
      '</table></div>' +
      '<p><span class="term">Data visualization</span> is the term for using graphical displays to summarize and present information about a data set. The chapter ends with best practices for making those displays effective.</p>' },

    { title: '1. Categorical Data: Frequency Distributions (2.1)', html:
      '<p>A <span class="term">frequency distribution</span> is a tabular summary showing the <strong>number of observations</strong> in each of several <strong>non-overlapping</strong> categories or classes.</p>' +
      '<div class="formula">Relative frequency of a class = Frequency of the class ÷ n<br>Percent frequency of a class = Relative frequency × 100</div>' +
      '<p><strong>The soft drink example</strong> (50 purchases):</p>' +
      '<div class="tablewrap"><table><tr><th>Soft drink</th><th>Frequency</th><th>Relative frequency</th><th>Percent frequency</th></tr>' +
      '<tr><td>Coca-Cola</td><td>19</td><td>0.38</td><td>38</td></tr>' +
      '<tr><td>Diet Coke</td><td>8</td><td>0.16</td><td>16</td></tr>' +
      '<tr><td>Dr. Pepper</td><td>5</td><td>0.10</td><td>10</td></tr>' +
      '<tr><td>Pepsi</td><td>13</td><td>0.26</td><td>26</td></tr>' +
      '<tr><td>Sprite</td><td>5</td><td>0.10</td><td>10</td></tr>' +
      '<tr><td><strong>Total</strong></td><td><strong>50</strong></td><td><strong>1.00</strong></td><td><strong>100</strong></td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>Three totals that are always true</strong> (and are heavily tested): the frequencies sum to <strong>n</strong> (the number of observations), the relative frequencies sum to <strong>1.00</strong>, and the percent frequencies sum to <strong>100</strong>.</div>' },

    { title: '2. Categorical Data: Bar Charts and Pie Charts (2.1)', html:
      '<p>A <span class="term">bar chart</span> displays categorical data summarized in a frequency, relative frequency, or percent frequency distribution.</p>' +
      '<ul>' +
      '<li>Class labels go on one axis (usually horizontal); the frequency scale on the other (usually vertical).</li>' +
      '<li>Bars have fixed width and the height matches the frequency.</li>' +
      '<li><strong>The bars are separated</strong> — the gap emphasizes that each class is a <em>separate category</em>. This is the key difference from a histogram.</li>' +
      '</ul>' +
      '<p>A <span class="term">pie chart</span> presents relative frequency and percent frequency for categorical data by subdividing a circle. The chapter notes a pie chart is <strong>generally not preferred to a bar chart</strong> — the human eye judges bar length better than pie-slice angle.</p>' +
      '<div class="tip"><strong>Pareto diagram:</strong> a bar chart used in quality control where bars are arranged in <em>descending</em> order of height, so the most frequent cause of problems appears first.</div>' },

    { title: '3. Quantitative Data: Frequency Distributions (2.2)', html:
      '<p>Same idea as categorical data, but you must first define <strong>classes</strong> (intervals). Three guidelines:</p>' +
      '<ol>' +
      '<li><strong>Number of classes:</strong> typically 5 to 20. Smaller data sets need fewer.</li>' +
      '<li><strong>Width of the classes:</strong> use equal widths. Approximate width = (largest value − smallest value) ÷ number of classes.</li>' +
      '<li><strong>Class limits:</strong> must be chosen so each item belongs to exactly one class — classes cannot overlap.</li>' +
      '</ol>' +
      '<p><strong>The audit time example</strong> (20 audits, in days):</p>' +
      '<div class="tablewrap"><table><tr><th>Audit time (days)</th><th>Frequency</th><th>Relative frequency</th><th>Percent frequency</th></tr>' +
      '<tr><td>10–14</td><td>4</td><td>0.20</td><td>20</td></tr>' +
      '<tr><td>15–19</td><td>8</td><td>0.40</td><td>40</td></tr>' +
      '<tr><td>20–24</td><td>5</td><td>0.25</td><td>25</td></tr>' +
      '<tr><td>25–29</td><td>2</td><td>0.10</td><td>10</td></tr>' +
      '<tr><td>30–34</td><td>1</td><td>0.05</td><td>5</td></tr>' +
      '<tr><td><strong>Total</strong></td><td><strong>20</strong></td><td><strong>1.00</strong></td><td><strong>100</strong></td></tr>' +
      '</table></div>' +
      '<p>Reading it: 40% of audits took 15–19 days, and only 5% took 30 or more days.</p>' +
      '<div class="formula">Class width = Difference between the lower class limits of adjacent classes<br>Class midpoint = (Lower limit + Upper limit) ÷ 2</div>' +
      '<p>Audit-time midpoints: 12, 17, 22, 27, 32. Note that the appropriate <em>precision</em> of the limits depends on the data — integer data gives limits like 10–14, data rounded to tenths gives 10.0–14.9, hundredths gives 10.00–14.99.</p>' },

    { title: '4. Cumulative Distributions (2.2)', html:
      '<p>All three cumulative forms answer "how many (or what share) are <strong>at or below</strong> the upper limit of each class?"</p>' +
      '<div class="tablewrap"><table><tr><th>Audit time</th><th>Cumulative frequency</th><th>Cumulative relative frequency</th><th>Cumulative percent frequency</th></tr>' +
      '<tr><td>≤ 14</td><td>4</td><td>0.20</td><td>20</td></tr>' +
      '<tr><td>≤ 19</td><td>12</td><td>0.60</td><td>60</td></tr>' +
      '<tr><td>≤ 24</td><td>17</td><td>0.85</td><td>85</td></tr>' +
      '<tr><td>≤ 29</td><td>19</td><td>0.95</td><td>95</td></tr>' +
      '<tr><td>≤ 34</td><td>20</td><td>1.00</td><td>100</td></tr>' +
      '</table></div>' +
      '<p>Reading it: 85% of audits were completed in 24 days or less; 95% in 29 days or less.</p>' +
      '<div class="tip"><strong>The last entry is always fixed</strong> — another heavily tested fact. The final cumulative frequency equals <strong>n</strong> (total observations), the final cumulative relative frequency equals <strong>1.00</strong>, and the final cumulative percent frequency equals <strong>100</strong>.</div>' },

    { title: '5. Quantitative Graphs: Dot Plot, Histogram, Stem-and-Leaf (2.2)', html:
      '<div class="tablewrap"><table><tr><th>Display</th><th>How it is built</th><th>What it is good for</th></tr>' +
      '<tr><td><span class="term">Dot plot</span></td><td>Horizontal axis shows the data range; each value is a dot above the axis. Three dots above 18 means an audit time of 18 occurred three times.</td><td>The simplest summary; shows the detail of every data value and is useful for comparing two or more variables.</td></tr>' +
      '<tr><td><span class="term">Histogram</span></td><td>A rectangle above each class interval, height = frequency (or relative/percent frequency). The variable goes on the horizontal axis.</td><td>The most common graphical presentation of quantitative data. <strong>No gaps between rectangles.</strong></td></tr>' +
      '<tr><td><span class="term">Stem-and-leaf display</span></td><td>Leading digits form the <strong>stem</strong> (left of a vertical line); the last digit of each item is a <strong>leaf</strong> in rank order to the right.</td><td>Shows <strong>both the rank order and the shape</strong> of the distribution — and unlike a histogram, it preserves the actual data values.</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>Bar chart vs. histogram — the classic exam distinction.</strong> They are essentially the same construction, but a <strong>bar chart separates the bars</strong> (categorical data, distinct categories) while a <strong>histogram has no separation</strong> (continuous quantitative data). For some <em>discrete</em> quantitative data — e.g., number of courses a student is enrolled in, which can only be whole numbers — separation is appropriate too.</div>' },

    { title: '6. Shape of a Distribution: Skewness (2.2)', html:
      '<p>Histograms reveal the <span class="term">shape</span> of a distribution, described by its <span class="term">skewness</span>:</p>' +
      '<div class="tablewrap"><table><tr><th>Shape</th><th>What it looks like</th><th>Typical example</th></tr>' +
      '<tr><td><strong>Moderately skewed left</strong> (negative skewness)</td><td>Longer tail stretches to the <em>left</em>; most values bunched at the high end.</td><td>Exam scores where most students did well.</td></tr>' +
      '<tr><td><strong>Moderately skewed right</strong> (positive skewness)</td><td>Longer tail stretches to the <em>right</em>; most values bunched at the low end.</td><td>Housing prices, incomes — a few very large values pull the tail out.</td></tr>' +
      '<tr><td><strong>Symmetric</strong></td><td>Left and right halves are mirror images; skewness = 0.</td><td>Heights, standardized test scores.</td></tr>' +
      '<tr><td><strong>Highly skewed right</strong></td><td>A very long right tail.</td><td>Wealth distribution.</td></tr>' +
      '</table></div>' +
      '<p>The direction of skew is named for <strong>where the tail points</strong>, not where the bulk of the data sits — the single most common mistake with this topic.</p>' },

    { title: '7. Two Variables: Crosstabulation (2.3)', html:
      '<p>A <span class="term">crosstabulation</span> is a tabular summary of data for <strong>two variables</strong>. Either variable can be categorical or quantitative (quantitative variables get grouped into classes first).</p>' +
      '<p><strong>The Zagat restaurant example</strong> — 300 Los Angeles restaurants by quality rating and meal price:</p>' +
      '<div class="tablewrap"><table><tr><th>Quality rating</th><th>$10–19</th><th>$20–29</th><th>$30–39</th><th>$40–49</th><th>Total</th></tr>' +
      '<tr><td>Good</td><td>42</td><td>40</td><td>2</td><td>0</td><td>84</td></tr>' +
      '<tr><td>Very Good</td><td>34</td><td>64</td><td>46</td><td>6</td><td>150</td></tr>' +
      '<tr><td>Excellent</td><td>2</td><td>14</td><td>28</td><td>22</td><td>66</td></tr>' +
      '<tr><td><strong>Total</strong></td><td><strong>78</strong></td><td><strong>118</strong></td><td><strong>76</strong></td><td><strong>28</strong></td><td><strong>300</strong></td></tr>' +
      '</table></div>' +
      '<p>The <strong>margins</strong> of the table give each variable’s own frequency distribution; the <strong>cells</strong> give the counts for each combination.</p>' +
      '<p><strong>Converting to percentages reveals the relationship:</strong></p>' +
      '<ul>' +
      '<li><span class="term">Row percentages</span> — divide each cell by its <em>row</em> total. Each row becomes a percent frequency distribution of meal price for one quality rating. Result: of "good" restaurants, 50% have $10–19 meals; of "excellent" restaurants, most are in the $30–39 and $40–49 ranges.</li>' +
      '<li><span class="term">Column percentages</span> — divide each cell by its <em>column</em> total. Each column becomes a percent frequency distribution of quality rating for one price class. Result: only 2.6% of $10–19 restaurants are excellent, but 78.6% of $40–49 restaurants are.</li>' +
      '</ul>' +
      '<p>Either way, the conclusion is the same: <strong>as meal price increases, quality ratings shift higher.</strong></p>' },

    { title: '8. Simpson’s Paradox (2.3)', html:
      '<p><span class="term">Simpson’s paradox</span>: conclusions drawn from <strong>aggregated</strong> data can be <strong>completely reversed</strong> when the same data are <strong>disaggregated</strong> into separate crosstabulations.</p>' +
      '<p><strong>The two judges example</strong> — 275 appealed verdicts:</p>' +
      '<div class="tablewrap"><table><tr><th>Verdict</th><th>Judge Luckett</th><th>Judge Kendall</th></tr>' +
      '<tr><td>Upheld</td><td>129 (86%)</td><td>110 (88%)</td></tr>' +
      '<tr><td>Reversed</td><td>21 (14%)</td><td>15 (12%)</td></tr>' +
      '<tr><td><strong>Total</strong></td><td><strong>150</strong></td><td><strong>125</strong></td></tr>' +
      '</table></div>' +
      '<p><strong>Aggregated conclusion:</strong> Kendall looks better — 88% upheld vs. 86%.</p>' +
      '<p><strong>Now split by type of court:</strong></p>' +
      '<div class="tablewrap"><table><tr><th>Court</th><th>Luckett upheld</th><th>Kendall upheld</th></tr>' +
      '<tr><td>Common Pleas</td><td>29 of 32 = <strong>91%</strong></td><td>90 of 100 = 90%</td></tr>' +
      '<tr><td>Municipal</td><td>100 of 118 = <strong>85%</strong></td><td>20 of 25 = 80%</td></tr>' +
      '</table></div>' +
      '<p><strong>Disaggregated conclusion: Luckett is better in BOTH courts</strong> — 91% vs. 90% and 85% vs. 80% — the exact opposite of the aggregate result.</p>' +
      '<div class="tip"><strong>Why it happens:</strong> a hidden third variable (here, which court) is related to both of the other two. Luckett heard mostly Municipal Court cases, where upheld rates are lower for everyone, which dragged his overall average down. <strong>Always ask whether an untabulated variable could be driving an aggregate comparison.</strong></div>' },

    { title: '9. Two Variables: Graphical Displays (2.4)', html:
      '<div class="tablewrap"><table><tr><th>Display</th><th>Use it for</th><th>How it works</th></tr>' +
      '<tr><td><span class="term">Scatter diagram</span></td><td>Two <strong>quantitative</strong> variables</td><td>Each observation is a point at its (x, y) position. The electronics example plots number of commercials (x) against sales (y).</td></tr>' +
      '<tr><td><span class="term">Trendline</span></td><td>Approximating the relationship in a scatter diagram</td><td>A line through the points. In the electronics example, the pattern and trendline show a <strong>positive</strong> relationship even though the points do not form a perfect line.</td></tr>' +
      '<tr><td><span class="term">Side-by-side bar chart</span></td><td>Comparing two variables</td><td>Clusters of bars; each cluster is one class of the first variable, each bar within it one category of the second.</td></tr>' +
      '<tr><td><span class="term">Stacked bar chart</span></td><td>Comparing relative/percent frequency of two categorical variables</td><td>Each bar is divided into colored segments. When percentages are displayed, <strong>all bars reach exactly 100%</strong> and are the same height.</td></tr>' +
      '</table></div>' +
      '<p><strong>Three relationships a scatter diagram can show:</strong> <em>positive</em> (y rises as x rises), <em>negative</em> (y falls as x rises), and <em>no apparent relationship</em> (points scattered with no pattern).</p>' },

    { title: '10. Effective Displays and Data Dashboards (2.5)', html:
      '<p>The goal of <span class="term">data visualization</span> is to communicate the key information in the data <strong>as clearly and effectively as possible</strong>. The chapter’s guidelines for an effective display:</p>' +
      '<ul>' +
      '<li>Give it a <strong>clear and concise title</strong>.</li>' +
      '<li>Keep the display <strong>simple</strong> — simple and informative beats elaborate.</li>' +
      '<li><strong>Label each axis clearly</strong> and state the units.</li>' +
      '<li>If colors are used, make them <strong>distinct</strong> and provide a <strong>legend</strong>.</li>' +
      '</ul>' +
      '<p>A <span class="term">data dashboard</span> organizes and presents <span class="term">key performance indicators (KPIs)</span> used to monitor an organization or process, giving timely summary information that is easy to read and interpret. Additional dashboard guidelines:</p>' +
      '<ul>' +
      '<li>Minimize the need for <strong>screen scrolling</strong>.</li>' +
      '<li>Avoid unnecessary <strong>color or 3D effects</strong>.</li>' +
      '<li>Use <strong>borders between charts</strong> to improve readability.</li>' +
      '</ul>' },

    { title: '11. Choosing the Right Display — Summary Table', html:
      '<div class="tablewrap"><table><tr><th>Purpose</th><th>Display</th><th>Data type</th></tr>' +
      '<tr><td rowspan="5"><strong>Show the distribution</strong></td><td>Bar chart</td><td>Categorical — frequency and relative frequency</td></tr>' +
      '<tr><td>Pie chart</td><td>Categorical — relative and percent frequency (generally not preferred to a bar chart)</td></tr>' +
      '<tr><td>Dot plot</td><td>Quantitative — over the entire range of the data</td></tr>' +
      '<tr><td>Histogram</td><td>Quantitative — frequency over a set of class intervals</td></tr>' +
      '<tr><td>Stem-and-leaf display</td><td>Quantitative — rank order AND shape</td></tr>' +
      '<tr><td rowspan="2"><strong>Make comparisons</strong></td><td>Side-by-side bar chart</td><td>Comparing two variables</td></tr>' +
      '<tr><td>Stacked bar chart</td><td>Relative/percent frequency of two categorical variables</td></tr>' +
      '<tr><td rowspan="2"><strong>Show relationships</strong></td><td>Scatter diagram</td><td>Two quantitative variables</td></tr>' +
      '<tr><td>Trendline</td><td>Approximating a scatter-diagram relationship</td></tr>' +
      '</table></div>' },

    { title: '12. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>Frequencies sum to n; relative frequencies sum to 1.00; percent frequencies sum to 100.</strong> Expect to be asked all three.</li>' +
      '<li><strong>Relative frequency = class frequency ÷ n.</strong> Not ÷ number of classes, and not ÷ the midpoint.</li>' +
      '<li><strong>Percent frequency = relative frequency × 100</strong> (multiply, never divide).</li>' +
      '<li><strong>Cumulative distributions use "less than or equal to the UPPER limit"</strong> of each class — not the lower limit.</li>' +
      '<li><strong>Class width = difference between the lower limits of adjacent classes.</strong></li>' +
      '<li><strong>Fewer classes → wider class width.</strong> Widest class width means the fewest classes.</li>' +
      '<li><strong>Bar chart = gaps (categorical); histogram = no gaps (quantitative).</strong></li>' +
      '<li><strong>Stem-and-leaf shows rank order AND shape</strong>, and keeps the actual values. Stems can be one or more digits; <strong>each leaf is a single digit</strong>.</li>' +
      '<li><strong>Cumulative frequency cannot be displayed by an ordinary histogram</strong> — frequency, relative frequency, and percent frequency can.</li>' +
      '<li><strong>Scatter diagram = two quantitative variables; crosstabulation = either/both types.</strong></li>' +
      '<li><strong>Categorical data labels or names categories; quantitative data says how much or how many.</strong> Numbers used only as <em>codes</em> (South = 1, North = 2) are still <strong>categorical</strong>.</li>' +
      '<li><strong>Simpson’s paradox</strong> = aggregate conclusion reverses when disaggregated.</li>' +
      '<li><strong>Stem-and-leaf is the least useful display for showing a relationship between two variables</strong> — it only handles one.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Frequency distribution', def: 'A tabular summary showing the number of observations in each of several non-overlapping classes.' },
    { term: 'Relative frequency', def: 'Frequency of a class ÷ n (the sample size). All relative frequencies sum to 1.00.' },
    { term: 'Percent frequency', def: 'Relative frequency × 100. All percent frequencies sum to 100.' },
    { term: 'Bar chart', def: 'Graphical display for categorical data; bars of fixed width with gaps between them to emphasize separate categories.' },
    { term: 'Pie chart', def: 'Circle subdivided to show relative or percent frequency for categorical data; generally not preferred to a bar chart.' },
    { term: 'Pareto diagram', def: 'A bar chart with bars in descending order of height, used in quality control to identify the most important causes of problems.' },
    { term: 'Class width', def: 'The difference between the lower class limits of adjacent classes; approximately (largest − smallest) ÷ number of classes.' },
    { term: 'Class midpoint', def: 'The value halfway between the lower and upper class limits.' },
    { term: 'Cumulative frequency distribution', def: 'Shows the number of items with values less than or equal to the upper limit of each class; the last entry equals n.' },
    { term: 'Cumulative relative frequency distribution', def: 'Shows the proportion of items at or below each upper class limit; the last entry equals 1.00.' },
    { term: 'Cumulative percent frequency distribution', def: 'Shows the percentage of items at or below each upper class limit; the last entry equals 100.' },
    { term: 'Dot plot', def: 'Simplest graphical summary of quantitative data: a horizontal axis with one dot per data value; useful for comparing distributions.' },
    { term: 'Histogram', def: 'Rectangles above class intervals with height equal to frequency; no gaps between rectangles for continuous data. The most common display for quantitative data.' },
    { term: 'Stem-and-leaf display', def: 'Leading digits form stems to the left of a vertical line; the last digit of each value is a leaf in rank order. Shows rank order and shape while preserving actual values.' },
    { term: 'Skewness', def: 'A measure of the shape of a distribution. Named for the direction the longer tail points: left (negative) or right (positive); symmetric distributions have zero skewness.' },
    { term: 'Crosstabulation', def: 'A tabular summary of data for two variables; margins give each variable’s own frequency distribution, cells give the combinations.' },
    { term: 'Row percentages', def: 'Each crosstabulation cell divided by its row total; each row becomes a percent frequency distribution of the column variable.' },
    { term: 'Column percentages', def: 'Each crosstabulation cell divided by its column total; each column becomes a percent frequency distribution of the row variable.' },
    { term: 'Simpson’s paradox', def: 'Conclusions from aggregated data reverse when the data are disaggregated, because a hidden third variable is related to both variables of interest.' },
    { term: 'Scatter diagram', def: 'Graphical presentation of the relationship between two quantitative variables; each observation is a point at its (x, y) location.' },
    { term: 'Trendline', def: 'A line that approximates the relationship shown in a scatter diagram.' },
    { term: 'Side-by-side bar chart', def: 'Multiple bar charts on one display; clusters of bars compare two variables.' },
    { term: 'Stacked bar chart', def: 'Each bar divided into colored segments; when percentages are shown all bars are the same height, reaching 100%.' },
    { term: 'Categorical data', def: 'Data that provide labels or names for categories of like items. Numeric codes for categories (South = 1, North = 2) are still categorical.' },
    { term: 'Quantitative data', def: 'Data that indicate how much or how many — numeric values on which arithmetic is meaningful.' },
    { term: 'Data visualization', def: 'The use of graphical displays to summarize and present data as clearly and effectively as possible.' },
    { term: 'Data dashboard', def: 'A visualization tool organizing key performance indicators (KPIs) to monitor an organization or process.' },
    { term: 'Key performance indicators (KPIs)', def: 'The summary measures displayed on a data dashboard to monitor performance.' }
  ],
  quiz: [
    { q: 'A frequency distribution is a tabular summary of data showing the…',
      options: ['fraction of items in several classes', 'percentage of items in several classes', 'number of items in several classes', 'midpoints of several classes'],
      answer: 2, explain: 'Frequency = a count. The fraction is the relative frequency and the percentage is the percent frequency.' },
    { q: 'A tabular summary showing the fraction of the total number of items in each class is a…',
      options: ['frequency distribution', 'relative frequency distribution', 'cumulative frequency distribution', 'percent frequency distribution'],
      answer: 1, explain: 'A fraction (proportion) of the total is a relative frequency.' },
    { q: 'The relative frequency of a class is computed by…',
      options: ['dividing the midpoint of the class by the sample size', 'dividing the frequency of the class by the midpoint', 'dividing the sample size by the frequency of the class', 'dividing the frequency of the class by the sample size'],
      answer: 3, explain: 'Relative frequency = class frequency ÷ n.' },
    { q: 'The percent frequency of a class is computed by…',
      options: ['multiplying the relative frequency by 100', 'dividing the relative frequency by 100', 'multiplying the relative frequency by 10', 'adding 100 to the relative frequency'],
      answer: 0, explain: 'Percent frequency = relative frequency × 100.' },
    { q: 'The sum of the frequencies for all classes will always equal…',
      options: ['1', 'the number of elements in the data set', 'the number of classes', '100'],
      answer: 1, explain: 'Frequencies are counts, so they total n. Relative frequencies total 1 and percent frequencies total 100.' },
    { q: 'The sum of the relative frequencies for all classes always equals…',
      options: ['the sample size', 'the number of classes', 'one', '100'],
      answer: 2, explain: 'Each relative frequency is a share of the whole, so together they make 1.00.' },
    { q: 'A cumulative relative frequency distribution shows…',
      options: ['the proportion of items with values less than or equal to the upper limit of each class', 'the proportion of items less than or equal to the lower limit of each class', 'the percentage of items at or below the upper limit of each class', 'the number of items in each class'],
      answer: 0, explain: 'Cumulative distributions always work from the UPPER limit; the relative version reports proportions, the percent version reports percentages.' },
    { q: 'In a cumulative relative frequency distribution, the last class will have a cumulative relative frequency equal to…',
      options: ['the total number of elements in the data set', 'one', 'zero', 'the number of classes'],
      answer: 1, explain: 'By the last class every observation has been counted, so the proportion is 1.00 (and the cumulative percent version equals 100).' },
    { q: 'The difference between the lower class limits of adjacent classes provides the…',
      options: ['number of classes', 'class limits', 'class midpoint', 'class width'],
      answer: 3, explain: 'That difference is the class width.' },
    { q: 'If several frequency distributions are built from the same data set, the one with the widest class width will have the…',
      options: ['fewest classes', 'most classes', 'smallest total frequency', 'largest total frequency'],
      answer: 0, explain: 'Wider classes cover the range in fewer steps. Total frequency is always n regardless of how classes are drawn.' },
    { q: 'The most common graphical presentation of quantitative data is a…',
      options: ['histogram', 'bar chart', 'pie chart', 'crosstabulation'],
      answer: 0, explain: 'Histograms display quantitative data grouped into classes; bar and pie charts are for categorical data.' },
    { q: 'Which of the following CANNOT be appropriately displayed by a histogram?',
      options: ['frequency', 'relative frequency', 'cumulative frequency', 'percent frequency'],
      answer: 2, explain: 'A histogram shows frequency, relative frequency, or percent frequency. Cumulative distributions are displayed with an ogive instead.' },
    { q: 'In a stem-and-leaf display…',
      options: ['a single digit defines each stem and a single digit defines each leaf', 'one or more digits define each stem and a single digit defines each leaf', 'a single digit defines each stem and one or more digits define each leaf', 'one or more digits define both stems and leaves'],
      answer: 1, explain: 'Stems can be multi-digit leading values; each leaf is always the single last digit of an observation.' },
    { q: 'A graphical method that shows both the rank order and the shape of a distribution simultaneously is a…',
      options: ['relative frequency distribution', 'pie chart', 'stem-and-leaf display', 'dot plot'],
      answer: 2, explain: 'That dual capability — order plus shape, with the real values retained — is the stem-and-leaf display’s distinguishing feature.' },
    { q: 'A researcher codes geographic areas as South = 1, North = 2, East = 3, West = 4. These data are…',
      options: ['categorical', 'quantitative', 'cumulative', 'either categorical or quantitative'],
      answer: 0, explain: 'The numbers are only labels — averaging them would be meaningless — so the data remain categorical.' },
    { q: 'Data that indicate how much or how many are known as…',
      options: ['categorical data', 'quantitative data', 'relative data', 'label data'],
      answer: 1, explain: 'Quantitative data are numeric magnitudes; categorical data provide labels or names.' },
    { q: 'In a crosstabulation…',
      options: ['both variables must be categorical', 'both variables must be quantitative', 'one must be categorical and one quantitative', 'either or both variables can be categorical or quantitative'],
      answer: 3, explain: 'Quantitative variables are simply grouped into classes first, as meal price was in the restaurant example.' },
    { q: 'A graphical presentation of the relationship between two quantitative variables is a…',
      options: ['dot plot', 'histogram', 'stem-and-leaf display', 'scatter diagram'],
      answer: 3, explain: 'Each point marks one observation’s (x, y) values; a trendline approximates the relationship.' },
    { q: 'When conclusions based on aggregated data are reversed by looking at disaggregated data, the occurrence is known as…',
      options: ['reverse correlation', 'negative correlation', 'Simpson’s paradox', 'Pareto’s rule'],
      answer: 2, explain: 'A hidden third variable related to both variables of interest drives the reversal — as with the two judges split by court type.' },
    { q: 'Which display is LEAST useful for showing the relationship between two variables?',
      options: ['stacked bar chart', 'stem-and-leaf display', 'crosstabulation', 'scatter diagram'],
      answer: 1, explain: 'A stem-and-leaf display summarizes only one variable; the other three are all two-variable tools.' },
    { q: 'In quality control, a bar chart with bars arranged in descending order of height so the most frequent cause appears first is a…',
      options: ['cause-and-effect diagram', 'Simpson’s chart', 'Pareto diagram', 'stacked bar chart'],
      answer: 2, explain: 'The Pareto diagram highlights the "vital few" causes of most problems.' },
    { q: 'A graphical tool typically associated with the display of key performance indicators is a…',
      options: ['side-by-side bar chart', 'stem-and-leaf display', 'stacked bar chart', 'data dashboard'],
      answer: 3, explain: 'Dashboards organize KPIs for monitoring an organization or process.' },
    { q: 'A distribution whose longer tail stretches to the right is described as…',
      options: ['negatively skewed', 'positively skewed', 'symmetric', 'bimodal'],
      answer: 1, explain: 'Skew is named for the direction the tail points — right tail means positive skewness.' },
    { q: 'Fifteen percent of students major in Economics, 20% in Finance, 35% in Management, and 30% in Accounting. Which graphical device(s) can present these data?',
      options: ['only a bar chart', 'only a pie chart', 'both a bar chart and a pie chart', 'a histogram'],
      answer: 2, explain: 'These are categorical percent frequencies, which both bar and pie charts display.' },
    { q: 'The main visual difference between a bar chart and a histogram is that…',
      options: ['a histogram separates its bars', 'a bar chart separates its bars while a histogram does not', 'a histogram uses only percentages', 'a bar chart cannot show frequency'],
      answer: 1, explain: 'The gaps emphasize that categories are distinct; continuous quantitative classes run together.' }
  ]
});
