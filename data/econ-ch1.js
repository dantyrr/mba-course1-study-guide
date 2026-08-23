window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'econ-ch1', subject: 'econ', num: 1,
  title: 'Ten Principles of Economics',
  overview: 'The foundation of the whole course: economics is the study of how society manages scarce resources. Ten core principles explain how people make decisions, how they interact, and how the economy as a whole works.',
  sections: [
    { title: 'The Big Idea: Scarcity', html:
      '<p>Every society has <span class="term">limited resources</span> but unlimited wants — that gap is <span class="term">scarcity</span>. Because of scarcity, society cannot produce everything everyone wants, so choices must be made. <span class="term">Economics</span> is simply the study of how society manages those scarce resources: how people decide, how they interact, and what forces shape the whole economy.</p>' },
    { title: 'How People Make Decisions (Principles 1–4)', html:
      '<ul>' +
      '<li><span class="term">1. People face trade-offs.</span> There is no free lunch — getting one thing usually means giving up something else. A classic society-level trade-off is <span class="term">efficiency</span> (making the economic pie as big as possible) vs. <span class="term">equality</span> (dividing the pie evenly). Redistributing income raises equality but can weaken incentives to work, shrinking the pie.</li>' +
      '<li><span class="term">2. The cost of something is what you give up to get it.</span> The <span class="term">opportunity cost</span> of an item is whatever must be given up to obtain it — including time and foregone alternatives, not just money.</li>' +
      '<li><span class="term">3. Rational people think at the margin.</span> Rational people compare <span class="term">marginal benefits</span> and <span class="term">marginal costs</span> of small, incremental changes. Act only when MB &gt; MC. (Your $8/month streaming subscription is already paid — the marginal cost of one more movie is just your time.)</li>' +
      '<li><span class="term">4. People respond to incentives.</span> An <span class="term">incentive</span> is anything that induces action. Because rational people weigh costs and benefits, changing those costs or benefits changes behavior — sometimes with unintended consequences.</li>' +
      '</ul>' +
      '<div class="tip">💡 <strong>Sunk cost trap:</strong> money already spent (like $2,000 of past repairs on a car) is irrelevant to the decision at hand. Compare only the <em>future</em> marginal benefit and marginal cost.</div>' },
    { title: 'How People Interact (Principles 5–7)', html:
      '<ul>' +
      '<li><span class="term">5. Trade can make everyone better off.</span> Trade lets people and countries specialize in what they do best and enjoy a greater variety of goods at lower cost. Trade is not a contest with one winner.</li>' +
      '<li><span class="term">6. Markets are usually a good way to organize economic activity.</span> In a <span class="term">market economy</span>, millions of firms and households make decentralized decisions. Adam Smith’s <span class="term">“invisible hand”</span> (from <em>The Wealth of Nations</em>, 1776) works through <em>prices</em>: prices reflect both the value buyers place on a good and the cost of producing it, guiding self-interested actors toward outcomes good for society. When government blocks prices from adjusting, it hampers this coordination.</li>' +
      '<li><span class="term">7. Governments can sometimes improve market outcomes.</span> Government is needed to enforce rules and <span class="term">property rights</span>, and can intervene to promote efficiency or equality. <span class="term">Market failure</span> occurs when a market on its own fails to allocate resources efficiently — caused by an <span class="term">externality</span> (one person’s actions affect a bystander, e.g. pollution) or <span class="term">market power</span> (a single actor can unduly influence prices).</li>' +
      '</ul>' },
    { title: 'How the Economy as a Whole Works (Principles 8–10)', html:
      '<ul>' +
      '<li><span class="term">8. A country’s standard of living depends on its ability to produce goods and services.</span> Almost all variation in living standards across countries is explained by <span class="term">productivity</span> — output produced per unit of labor. Higher productivity → higher standard of living.</li>' +
      '<li><span class="term">9. Prices rise when the government prints too much money.</span> <span class="term">Inflation</span> is an increase in the overall price level. In the long run, inflation is almost always caused by excessive growth in the quantity of money, which erodes money’s value.</li>' +
      '<li><span class="term">10. Society faces a short-run trade-off between inflation and unemployment.</span> In the short run, more money → more spending → firms raise prices <em>and</em> hire more workers → lower unemployment. Many policies push inflation and unemployment in opposite directions; this trade-off is central to analyzing the <span class="term">business cycle</span> — the fluctuations in economic activity like employment and production.</li>' +
      '</ul>' },
    { title: 'Quick Reference Table', html:
      '<div class="tablewrap"><table><tr><th>Group</th><th>Principle</th></tr>' +
      '<tr><td rowspan="4">Decisions</td><td>1. People face trade-offs</td></tr>' +
      '<tr><td>2. The cost of something is what you give up to get it</td></tr>' +
      '<tr><td>3. Rational people think at the margin</td></tr>' +
      '<tr><td>4. People respond to incentives</td></tr>' +
      '<tr><td rowspan="3">Interaction</td><td>5. Trade can make everyone better off</td></tr>' +
      '<tr><td>6. Markets are usually a good way to organize activity</td></tr>' +
      '<tr><td>7. Governments can sometimes improve market outcomes</td></tr>' +
      '<tr><td rowspan="3">Whole economy</td><td>8. Living standards depend on production (productivity)</td></tr>' +
      '<tr><td>9. Prices rise when too much money is printed</td></tr>' +
      '<tr><td>10. Short-run trade-off between inflation and unemployment</td></tr>' +
      '</table></div>' }
  ],
  terms: [
    { term: 'Scarcity', def: 'The limited nature of society’s resources: society cannot produce all the goods and services people want.' },
    { term: 'Economics', def: 'The study of how society manages its scarce resources.' },
    { term: 'Efficiency', def: 'Society getting the most it can from its scarce resources — the size of the economic pie.' },
    { term: 'Equality', def: 'Distributing economic prosperity uniformly among society’s members — how evenly the pie is sliced.' },
    { term: 'Opportunity cost', def: 'Whatever must be given up to obtain some item — the true cost of a decision, including time and foregone alternatives.' },
    { term: 'Rational people', def: 'People who systematically and purposefully do the best they can to achieve their goals, given available opportunities.' },
    { term: 'Marginal change', def: 'A small incremental adjustment to an existing plan of action; rational people act when marginal benefit exceeds marginal cost.' },
    { term: 'Incentive', def: 'Something (such as a reward or penalty) that induces a person to act.' },
    { term: 'Market economy', def: 'An economy that allocates resources through the decentralized decisions of many firms and households interacting in markets.' },
    { term: 'Invisible hand', def: 'Adam Smith’s idea that self-interested buyers and sellers in competitive markets are guided by prices toward outcomes that benefit society.' },
    { term: 'Property rights', def: 'The ability of an individual to own and exercise control over scarce resources — enforced by government, essential for markets to work.' },
    { term: 'Market failure', def: 'A situation in which a market left on its own fails to allocate resources efficiently (e.g., due to externalities or market power).' },
    { term: 'Externality', def: 'The impact of one person’s actions on the well-being of a bystander, such as pollution.' },
    { term: 'Market power', def: 'The ability of a single economic actor (or small group) to unduly influence market prices.' },
    { term: 'Productivity', def: 'The quantity of goods and services produced from each unit of labor input — the key driver of living standards.' },
    { term: 'Inflation', def: 'An increase in the overall level of prices in the economy.' },
    { term: 'Business cycle', def: 'Fluctuations in economic activity, such as employment and production.' }
  ],
  quiz: [
    { q: 'Economics is best defined as the study of how…',
      options: ['governments raise and spend money', 'society manages its scarce resources', 'businesses maximize profits', 'to eliminate scarcity through technology'],
      answer: 1, explain: 'Because resources are scarce, economics studies how society manages them — how people decide, interact, and how the whole economy works.' },
    { q: 'You have a non-refundable $80 concert ticket. On the night of the show, a friend invites you to a dinner you’d enjoy more. A rational decision ignores…',
      options: ['the enjoyment you’d get from the dinner', 'the $80 already paid for the ticket', 'the enjoyment you’d get from the concert', 'your available time tonight'],
      answer: 1, explain: 'The $80 is a sunk cost — it’s gone either way. Rational decisions compare only marginal (future) benefits and costs.' },
    { q: 'The opportunity cost of attending an MBA class tonight is…',
      options: ['only the tuition paid for the course', 'zero, since tuition is already paid', 'the value of the best alternative use of that time', 'the salary of your professor'],
      answer: 2, explain: 'Opportunity cost is whatever you give up to get something — here, the best alternative use of your evening (work, leisure, family time).' },
    { q: 'The trade-off between efficiency and equality means that…',
      options: ['efficient economies always have equal incomes', 'policies that slice the pie more evenly can shrink the pie', 'equality always increases total output', 'efficiency and equality are unrelated goals'],
      answer: 1, explain: 'Redistribution improves equality but can reduce incentives to work and produce, reducing total output (the pie).' },
    { q: 'Netflix charges a flat monthly fee. The marginal cost of watching one additional movie this month is…',
      options: ['the monthly subscription fee', 'the fee divided by movies watched', 'essentially just the opportunity cost of your time', 'zero in every sense'],
      answer: 2, explain: 'The subscription is fixed regardless of viewing. The relevant marginal cost is the value of the time you give up.' },
    { q: 'According to Adam Smith’s "invisible hand," what instrument directs economic activity?',
      options: ['government regulation', 'prices', 'central planning', 'corporate charity'],
      answer: 1, explain: 'Prices reflect both buyers’ valuations and sellers’ costs, guiding self-interested decisions toward socially desirable outcomes.' },
    { q: 'A factory’s pollution harming nearby residents is an example of…',
      options: ['market power', 'an externality', 'productivity', 'the invisible hand at work'],
      answer: 1, explain: 'An externality is the impact of one person’s (or firm’s) actions on a bystander — a classic source of market failure that may justify government intervention.' },
    { q: 'Nearly all variation in living standards across countries is attributable to differences in…',
      options: ['natural resources', 'labor unions', 'productivity', 'money supply'],
      answer: 2, explain: 'Principle 8: countries whose workers produce more goods and services per hour enjoy higher standards of living.' },
    { q: 'In the long run, high inflation is almost always caused by…',
      options: ['greedy corporations raising prices', 'labor shortages', 'excessive growth in the quantity of money', 'high productivity growth'],
      answer: 2, explain: 'Principle 9: when a government creates too much money, the value of money falls and the overall price level rises.' },
    { q: 'The short-run trade-off in Principle 10 is between inflation and…',
      options: ['unemployment', 'productivity', 'trade deficits', 'government debt'],
      answer: 0, explain: 'In the short run, policies that stimulate spending tend to lower unemployment while raising inflation, and vice versa — key to business cycle analysis.' }
  ]
});
