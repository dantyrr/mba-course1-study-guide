window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'stat-ch4', subject: 'stat', num: 4, altLabel: 'Course Ch 21',
  title: 'Introduction to Probability',
  overview: 'Probability as a numerical measure of likelihood: random experiments and sample spaces, three counting rules, three methods of assigning probabilities, events and the basic relationships (complement, union, intersection, addition law), conditional probability and independence, the multiplication law, and Bayes’ theorem for revising probabilities when new information arrives.',
  sections: [
    { title: '0. What Probability Is (4.0)', html:
      '<p><span class="term">Probability</span> is a numerical measure of the likelihood that an event will occur. Managers use it to handle uncertainty: what are the chances sales fall if we raise prices? How likely is the project to finish on time? Will the new investment be profitable?</p>' +
      '<div class="formula">Probability values are always on a scale from 0 to 1</div>' +
      '<ul>' +
      '<li>Near <strong>0</strong> → the event is quite unlikely.</li>' +
      '<li>Near <strong>1</strong> → the event is almost certain.</li>' +
      '<li>Values in between represent degrees of likelihood.</li>' +
      '</ul>' },

    { title: '1. Random Experiments and Sample Space (4.1)', html:
      '<p>A <span class="term">random experiment</span> is a process that generates well-defined outcomes, where on any single repetition <strong>exactly one</strong> of the possible outcomes occurs.</p>' +
      '<p>The <span class="term">sample space</span> is the set of <strong>all</strong> possible experimental outcomes; an individual outcome is a <span class="term">sample point</span>.</p>' +
      '<div class="tip"><strong>How statistics differs from the physical sciences here:</strong> in a laboratory experiment, researchers control conditions to study cause and effect. In a <em>statistical</em> experiment, <strong>probability determines the outcome</strong> — repeat it exactly the same way and you may get an entirely different result. That is why these are called <em>random</em> experiments.</div>' },

    { title: '2. Three Counting Rules (4.1)', html:
      '<div class="tablewrap"><table><tr><th>Rule</th><th>Formula</th><th>When to use it</th></tr>' +
      '<tr><td><span class="term">Multiple-step experiments</span></td><td><div class="formula">(n₁)(n₂)…(n<sub>k</sub>)</div></td><td>An experiment with k steps, where step i has n<sub>i</sub> possible outcomes. A <strong>tree diagram</strong> is the visual aid.</td></tr>' +
      '<tr><td><span class="term">Combinations</span></td><td><div class="formula">C(N,n) = N! ÷ [n!(N − n)!]</div></td><td>Selecting n objects from N when the <strong>order does NOT matter</strong>.</td></tr>' +
      '<tr><td><span class="term">Permutations</span></td><td><div class="formula">P(N,n) = N! ÷ (N − n)!</div></td><td>Selecting n objects from N when the <strong>order DOES matter</strong>. Always gives more outcomes than the matching combination.</td></tr>' +
      '</table></div>' +
      '<p><strong>The KP&amp;L project example.</strong> A capacity-expansion project has two sequential stages: design (2, 3, or 4 months) and construction (6, 7, or 8 months), with a 10-month completion goal. The counting rule gives <strong>(3)(3) = 9</strong> experimental outcomes, each written as an ordered pair such as (2, 6) with a total completion time of 8 months.</p>' +
      '<div class="tip"><strong>Combinations vs. permutations:</strong> choosing 3 people for a committee is a <em>combination</em> (order irrelevant); choosing a president, secretary, and treasurer is a <em>permutation</em> (order matters). Note 0! = 1 by definition.</div>' },

    { title: '3. Assigning Probabilities (4.1)', html:
      '<p>Whatever method is used, two <strong>basic requirements</strong> must always hold:</p>' +
      '<div class="formula">1. 0 ≤ P(E<sub>i</sub>) ≤ 1 for every sample point<br>2. The probabilities of all sample points must sum to exactly 1</div>' +
      '<div class="tablewrap"><table><tr><th>Method</th><th>How probabilities are assigned</th><th>Appropriate when</th></tr>' +
      '<tr><td><span class="term">Classical method</span></td><td>Each of n outcomes gets probability <strong>1/n</strong>.</td><td>All outcomes are <strong>equally likely</strong> — coins, dice, cards.</td></tr>' +
      '<tr><td><span class="term">Relative frequency method</span></td><td>Probability = (times the outcome occurred) ÷ (total trials).</td><td><strong>Historical data</strong> are available over many repetitions.</td></tr>' +
      '<tr><td><span class="term">Subjective method</span></td><td>Assign a degree of belief, using whatever experience and information is available.</td><td>Outcomes are <strong>not equally likely and no data exist</strong>. Different people may reasonably assign different values.</td></tr>' +
      '</table></div>' +
      '<p><strong>KP&amp;L again:</strong> management judged the nine outcomes <em>not</em> equally likely, so the classical method was unusable. Instead they used the relative frequency method on 40 similar past projects — e.g., outcome (3, 7) occurred 8 times, so P(3, 7) = 8/40 = 0.20.</p>' },

    { title: '4. Events and Their Probability (4.2)', html:
      '<p>An <span class="term">event</span> is a <strong>collection of sample points</strong>.</p>' +
      '<div class="formula">The probability of an event = the SUM of the probabilities of the sample points in that event</div>' +
      '<p>So if the event "project completed in 10 months or less" consists of outcomes (2,6), (2,7), (2,8), (3,6), (3,7), and (4,6), you simply add those six probabilities: 0.15 + 0.15 + 0.05 + 0.10 + 0.20 + 0.05 = 0.70.</p>' },

    { title: '5. Basic Relationships of Probability (4.3)', html:
      '<p>With many sample points, listing them all becomes impractical — these relationships let you compute probabilities without knowing every individual sample point probability.</p>' +
      '<div class="tablewrap"><table><tr><th>Concept</th><th>Definition</th><th>Formula</th></tr>' +
      '<tr><td><span class="term">Complement</span> of A</td><td>All sample points <strong>not</strong> in A, written A<sup>c</sup>.</td><td><div class="formula">P(A<sup>c</sup>) = 1 − P(A)</div></td></tr>' +
      '<tr><td><span class="term">Union</span> of A and B</td><td>All points in A <strong>OR</strong> B <strong>or both</strong>. Written A ∪ B.</td><td>See the addition law below.</td></tr>' +
      '<tr><td><span class="term">Intersection</span> of A and B</td><td>All points in <strong>BOTH</strong> A and B. Written A ∩ B.</td><td>See the multiplication law.</td></tr>' +
      '<tr><td><span class="term">Addition law</span></td><td>Probability that A or B or both occur.</td><td><div class="formula">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</div></td></tr>' +
      '</table></div>' +
      '<p><strong>Why subtract the intersection?</strong> Sample points in both A and B get counted twice when you add P(A) and P(B), so the overlap must be removed once.</p>' +
      '<p><span class="term">Mutually exclusive events</span> have <strong>no sample points in common</strong> — if one occurs, the other cannot.</p>' +
      '<div class="formula">If A and B are mutually exclusive: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)</div>' },

    { title: '6. Conditional Probability and Independence (4.4)', html:
      '<div class="formula">P(A | B) = P(A ∩ B) ÷ P(B)&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;P(B | A) = P(A ∩ B) ÷ P(A)</div>' +
      '<p><span class="term">Conditional probability</span> is the probability of A <strong>given that</strong> B has already occurred. Knowing B happened shrinks the sample space to just B, so you ask what fraction of B is also A.</p>' +
      '<p><strong>The police promotion example.</strong> A force of 1,200 officers (960 male, 240 female) promoted 288 men and 36 women over two years. Dividing every cell by 1,200 gives the <span class="term">joint probability table</span>:</p>' +
      '<div class="tablewrap"><table><tr><th></th><th>Male (M)</th><th>Female (F)</th><th>Total (marginal)</th></tr>' +
      '<tr><td>Promoted (A)</td><td>0.24</td><td>0.03</td><td><strong>0.27</strong></td></tr>' +
      '<tr><td>Not promoted (A<sup>c</sup>)</td><td>0.56</td><td>0.17</td><td><strong>0.73</strong></td></tr>' +
      '<tr><td><strong>Total (marginal)</strong></td><td><strong>0.80</strong></td><td><strong>0.20</strong></td><td><strong>1.00</strong></td></tr>' +
      '</table></div>' +
      '<ul>' +
      '<li>Values in the <strong>body</strong> of the table are <span class="term">joint probabilities</span> — P(A ∩ M) = 0.24.</li>' +
      '<li>Values in the <strong>margins</strong> are <span class="term">marginal probabilities</span> — P(A) = 0.27, P(M) = 0.80.</li>' +
      '<li>P(A | M) = 0.24 ÷ 0.80 = <strong>0.30</strong>; P(A | F) = 0.03 ÷ 0.20 = <strong>0.15</strong>.</li>' +
      '</ul>' +
      '<p>A male officer’s promotion probability is twice a female officer’s — the conditional probabilities, not the raw counts, are what make the discrimination argument.</p>' +
      '<p><strong>Independence.</strong> Two events are <span class="term">independent</span> if knowing one occurred does not change the probability of the other:</p>' +
      '<div class="formula">A and B are independent if P(A | B) = P(A) — equivalently, if P(B | A) = P(B)<br>Otherwise they are dependent</div>' +
      '<p>In the promotion example P(A | M) = 0.30 but P(A) = 0.27, so promotion and gender are <strong>dependent</strong>.</p>' +
      '<div class="tip"><strong>Do not confuse mutually exclusive with independent.</strong> Two events with nonzero probabilities <strong>cannot be both</strong>. If mutually exclusive events A and B are such that A is known to occur, then B cannot occur — its probability drops to 0, which means knowing about A <em>changed</em> B’s probability. That is the definition of dependence.</div>' },

    { title: '7. The Multiplication Law (4.4)', html:
      '<div class="formula">General: P(A ∩ B) = P(B)P(A | B) = P(A)P(B | A)<br>If A and B are independent: P(A ∩ B) = P(A)P(B)</div>' +
      '<p>The multiplication law computes the probability of an <strong>intersection</strong>, just as the addition law computes a <strong>union</strong>. It is simply the conditional probability formula rearranged.</p>' +
      '<p>The independent-events version is also a <strong>test</strong>: if P(A ∩ B) equals P(A)P(B), the events are independent; if not, they are dependent.</p>' },

    { title: '8. Bayes’ Theorem (4.5)', html:
      '<p>Bayes’ theorem handles this situation: you begin with <span class="term">prior probabilities</span>, then <strong>new information arrives</strong>, and you need revised — <span class="term">posterior</span> — probabilities.</p>' +
      '<div class="formula">Prior probabilities → New information → Bayes’ theorem → Posterior probabilities</div>' +
      '<div class="formula">P(A<sub>i</sub> | B) = [P(A<sub>i</sub>)P(B | A<sub>i</sub>)] ÷ [P(A<sub>1</sub>)P(B | A<sub>1</sub>) + P(A<sub>2</sub>)P(B | A<sub>2</sub>) + … + P(A<sub>n</sub>)P(B | A<sub>n</sub>)]</div>' +
      '<p>The denominator is just P(B) computed by adding up every way B can happen.</p>' +
      '<p><strong>The two-supplier example.</strong> Supplier 1 provides 65% of parts and 2% of its parts are bad; Supplier 2 provides 35% with 5% bad. A randomly chosen part is found to be bad — which supplier did it most likely come from?</p>' +
      '<div class="tablewrap"><table><tr><th>Event</th><th>Prior P(A<sub>i</sub>)</th><th>Conditional P(B|A<sub>i</sub>)</th><th>Joint P(A<sub>i</sub> ∩ B)</th><th>Posterior P(A<sub>i</sub>|B)</th></tr>' +
      '<tr><td>A₁ (Supplier 1)</td><td>0.65</td><td>0.02</td><td>0.0130</td><td>0.0130 ÷ 0.0305 = <strong>0.4262</strong></td></tr>' +
      '<tr><td>A₂ (Supplier 2)</td><td>0.35</td><td>0.05</td><td>0.0175</td><td>0.0175 ÷ 0.0305 = <strong>0.5738</strong></td></tr>' +
      '<tr><td><strong>Total</strong></td><td><strong>1.00</strong></td><td></td><td><strong>0.0305</strong></td><td><strong>1.0000</strong></td></tr>' +
      '</table></div>' +
      '<p><strong>The tabular approach in five columns:</strong> (1) list the mutually exclusive events, (2) write their prior probabilities, (3) write the conditional probabilities of the new information given each event, (4) multiply columns 2 × 3 to get joint probabilities, (5) divide each joint probability by the column-4 <strong>sum</strong> to get the posteriors.</p>' +
      '<div class="tip"><strong>What the numbers say:</strong> Supplier 1 supplies most parts (prior 0.65), yet given that a part is bad, it is <em>more likely</em> to have come from Supplier 2 (posterior 0.5738) because Supplier 2’s defect rate is 2.5 times higher. Posterior probabilities must always sum to 1.</div>' },

    { title: '9. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>All probabilities lie between 0 and 1</strong>, and the probabilities of all sample points must sum to exactly 1.</li>' +
      '<li><strong>Combinations ignore order; permutations count it.</strong> P(N,n) is always ≥ C(N,n).</li>' +
      '<li><strong>Classical method requires equally likely outcomes</strong> — if they are not equally likely, use relative frequency or subjective assignment.</li>' +
      '<li><strong>The addition law subtracts the intersection</strong> to avoid double counting. Only drop that term when the events are mutually exclusive.</li>' +
      '<li><strong>Mutually exclusive means P(A ∩ B) = 0</strong>, not that the events are independent.</li>' +
      '<li><strong>Mutually exclusive events with nonzero probability are always DEPENDENT.</strong> They can never be independent.</li>' +
      '<li><strong>P(A|B) divides by P(B)</strong> — the condition always goes in the denominator.</li>' +
      '<li><strong>Independence test:</strong> P(A|B) = P(A), or equivalently P(A ∩ B) = P(A)P(B).</li>' +
      '<li><strong>P(A ∩ B) = P(A)P(B) only when independent.</strong> Using it otherwise is the most common error in the chapter.</li>' +
      '<li><strong>Joint probabilities sit in the body of the table; marginal probabilities in the margins.</strong></li>' +
      '<li><strong>In Bayes’ theorem the denominator is the sum of all the joint probabilities</strong>, and the posteriors must sum to 1.</li>' +
      '<li><strong>P(A<sup>c</sup>) = 1 − P(A)</strong> — often the fastest route to an answer.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Probability', def: 'A numerical measure of the likelihood an event will occur, always between 0 and 1.' },
    { term: 'Random experiment', def: 'A process generating well-defined outcomes where exactly one outcome occurs on any single repetition; probability, not controlled conditions, determines which.' },
    { term: 'Sample space', def: 'The set of all possible experimental outcomes.' },
    { term: 'Sample point', def: 'An individual outcome in the sample space.' },
    { term: 'Counting rule for multiple-step experiments', def: '(n₁)(n₂)…(n_k) outcomes for a k-step experiment; visualized with a tree diagram. KP&L: (3)(3) = 9 outcomes.' },
    { term: 'Combinations', def: 'C(N,n) = N! ÷ [n!(N − n)!] — selecting n from N when order does NOT matter.' },
    { term: 'Permutations', def: 'P(N,n) = N! ÷ (N − n)! — selecting n from N when order DOES matter; always at least as many as combinations.' },
    { term: 'Basic requirements for assigning probabilities', def: 'Each sample point probability must be between 0 and 1, and all sample point probabilities must sum to 1.' },
    { term: 'Classical method', def: 'Assign 1/n to each of n outcomes; valid only when outcomes are equally likely.' },
    { term: 'Relative frequency method', def: 'Assign probability based on how often an outcome occurred in historical data.' },
    { term: 'Subjective method', def: 'Assign a degree of belief when outcomes are not equally likely and no data exist; different people may assign different values.' },
    { term: 'Event', def: 'A collection of sample points. Its probability is the sum of the probabilities of the sample points it contains.' },
    { term: 'Complement', def: 'Aᶜ is all sample points not in A. P(Aᶜ) = 1 − P(A).' },
    { term: 'Union (A ∪ B)', def: 'All sample points in A or B or both.' },
    { term: 'Intersection (A ∩ B)', def: 'All sample points in both A and B.' },
    { term: 'Addition law', def: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). The intersection is subtracted because those points would otherwise be counted twice.' },
    { term: 'Mutually exclusive events', def: 'Events with no sample points in common, so P(A ∩ B) = 0 and P(A ∪ B) = P(A) + P(B).' },
    { term: 'Conditional probability', def: 'P(A | B) = P(A ∩ B) ÷ P(B) — the probability of A given that B has occurred.' },
    { term: 'Joint probability', def: 'The probability of an intersection, found in the body of a joint probability table.' },
    { term: 'Marginal probability', def: 'The probability of a single event, found in the margins of a joint probability table.' },
    { term: 'Independent events', def: 'Events where P(A | B) = P(A) and P(B | A) = P(B) — knowing one occurred does not change the other’s probability.' },
    { term: 'Mutually exclusive vs. independent', def: 'Two events with nonzero probabilities cannot be both. If mutually exclusive events are such that one occurs, the other’s probability becomes 0 — so they are dependent.' },
    { term: 'Multiplication law', def: 'P(A ∩ B) = P(B)P(A | B) = P(A)P(B | A). For independent events this simplifies to P(A)P(B).' },
    { term: 'Prior probability', def: 'An initial estimate of the probability of an event, before new information is obtained.' },
    { term: 'Posterior probability', def: 'A revised probability of an event after new information is incorporated via Bayes’ theorem.' },
    { term: 'Bayes’ theorem', def: 'P(Aᵢ|B) = P(Aᵢ)P(B|Aᵢ) ÷ Σ P(Aⱼ)P(B|Aⱼ) — revises prior probabilities into posterior probabilities using new information.' },
    { term: 'Tabular approach to Bayes’ theorem', def: 'Five columns: events, priors, conditionals, joint probabilities (priors × conditionals), and posteriors (each joint divided by the sum of the joints).' }
  ],
  quiz: [
    { q: 'Probability values must always be…',
      options: ['between −1 and 1', 'between 0 and 1', 'greater than 1', 'whole numbers'],
      answer: 1, explain: 'Near 0 means unlikely, near 1 means almost certain.' },
    { q: 'The set of all possible outcomes of a random experiment is called the…',
      options: ['event', 'sample point', 'sample space', 'intersection'],
      answer: 2, explain: 'An individual outcome within it is a sample point; a collection of sample points is an event.' },
    { q: 'An experiment has three steps with 2, 4, and 3 possible outcomes respectively. The total number of experimental outcomes is…',
      options: ['9', '24', '12', '18'],
      answer: 1, explain: 'The multiple-step counting rule multiplies: (2)(4)(3) = 24.' },
    { q: 'Selecting a committee of 3 people from 10, where order does not matter, requires the counting rule for…',
      options: ['permutations', 'combinations', 'multiple-step experiments', 'complements'],
      answer: 1, explain: 'Combinations apply when order is irrelevant; permutations apply when it matters.' },
    { q: 'The classical method of assigning probabilities is appropriate when…',
      options: ['historical data are available', 'all experimental outcomes are equally likely', 'no information is available', 'outcomes are mutually exclusive'],
      answer: 1, explain: 'Each of n equally likely outcomes gets probability 1/n. KP&L could not use it because its outcomes were not equally likely.' },
    { q: 'A manager assigns probabilities based on personal judgment because no data exist and outcomes are not equally likely. This is the…',
      options: ['classical method', 'relative frequency method', 'subjective method', 'addition law'],
      answer: 2, explain: 'Subjective probabilities express a degree of belief; different people may reasonably assign different values.' },
    { q: 'The probability of an event is found by…',
      options: ['multiplying the probabilities of its sample points', 'summing the probabilities of the sample points in the event', 'dividing by the number of sample points', 'subtracting from 1'],
      answer: 1, explain: 'An event is a collection of sample points, so its probability is their total.' },
    { q: 'If P(A) = 0.35, then P(Aᶜ) equals…',
      options: ['0.35', '0.65', '1.35', '0'],
      answer: 1, explain: 'The complement rule: P(Aᶜ) = 1 − P(A).' },
    { q: 'The addition law is written as…',
      options: ['P(A ∪ B) = P(A) + P(B)', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 'P(A ∪ B) = P(A)P(B)', 'P(A ∪ B) = P(A) − P(B)'],
      answer: 1, explain: 'The intersection is subtracted so overlapping sample points are not counted twice.' },
    { q: 'P(A) = 0.5, P(B) = 0.4, and P(A ∩ B) = 0.2. What is P(A ∪ B)?',
      options: ['0.9', '0.7', '0.2', '0.1'],
      answer: 1, explain: '0.5 + 0.4 − 0.2 = 0.7.' },
    { q: 'For mutually exclusive events A and B, P(A ∩ B) equals…',
      options: ['0', '1', 'P(A)P(B)', 'P(A) + P(B)'],
      answer: 0, explain: 'Mutually exclusive events share no sample points, so the addition law reduces to P(A) + P(B).' },
    { q: 'Conditional probability P(A | B) is computed as…',
      options: ['P(A ∩ B) ÷ P(A)', 'P(A ∩ B) ÷ P(B)', 'P(A)P(B)', 'P(A) + P(B) − P(A ∩ B)'],
      answer: 1, explain: 'The event being conditioned on always goes in the denominator — it defines the reduced sample space.' },
    { q: 'In a joint probability table, the values appearing in the margins are called…',
      options: ['joint probabilities', 'conditional probabilities', 'marginal probabilities', 'posterior probabilities'],
      answer: 2, explain: 'Body values are joint probabilities; the row and column totals are marginal probabilities.' },
    { q: 'Two events are independent if…',
      options: ['P(A ∩ B) = 0', 'P(A | B) = P(A)', 'P(A) + P(B) = 1', 'they are mutually exclusive'],
      answer: 1, explain: 'Knowing B occurred leaves A’s probability unchanged. Equivalently, P(A ∩ B) = P(A)P(B).' },
    { q: 'Two events with nonzero probabilities that are mutually exclusive must be…',
      options: ['independent', 'dependent', 'complements', 'equally likely'],
      answer: 1, explain: 'If one occurs the other cannot, so its probability drops to 0 — knowing about the first changed the second, which is dependence.' },
    { q: 'The general multiplication law states that P(A ∩ B) equals…',
      options: ['P(A) + P(B)', 'P(A)P(B) always', 'P(B)P(A | B)', 'P(A) ÷ P(B)'],
      answer: 2, explain: 'It is the conditional probability formula rearranged. The simplified P(A)P(B) version requires independence.' },
    { q: 'If P(A) = 0.6 and P(B) = 0.3 and the events are independent, P(A ∩ B) equals…',
      options: ['0.9', '0.18', '0.3', '0.5'],
      answer: 1, explain: 'For independent events the joint probability is the product: 0.6 × 0.3 = 0.18.' },
    { q: 'An initial probability estimate made before new information is obtained is called a…',
      options: ['posterior probability', 'prior probability', 'joint probability', 'conditional probability'],
      answer: 1, explain: 'Bayes’ theorem revises priors into posteriors once new information arrives.' },
    { q: 'In the tabular approach to Bayes’ theorem, joint probabilities are computed by…',
      options: ['adding priors and conditionals', 'multiplying each prior by its conditional probability', 'dividing each prior by its conditional', 'summing the posteriors'],
      answer: 1, explain: 'Column 4 = column 2 × column 3; each posterior is then that joint probability divided by the sum of the joint probabilities.' },
    { q: 'In Bayes’ theorem, the posterior probabilities for a set of mutually exclusive, collectively exhaustive events must sum to…',
      options: ['the prior total', '0', '1', 'the joint probability total'],
      answer: 2, explain: 'They form a complete probability distribution over the revised possibilities.' },
    { q: 'Supplier 1 provides 65% of parts with a 2% defect rate; Supplier 2 provides 35% with a 5% defect rate. The probability a randomly selected part is bad is…',
      options: ['0.0305', '0.07', '0.035', '0.02'],
      answer: 0, explain: '(0.65)(0.02) + (0.35)(0.05) = 0.0130 + 0.0175 = 0.0305 — the denominator in Bayes’ theorem.' },
    { q: 'Given that a part is bad in that same example, the probability it came from Supplier 2 is about…',
      options: ['0.35', '0.4262', '0.5738', '0.05'],
      answer: 2, explain: '0.0175 ÷ 0.0305 = 0.5738. Supplier 2 ships fewer parts but has a much higher defect rate.' },
    { q: 'In the police promotion example, P(promoted) = 0.27 while P(promoted | male) = 0.30. This shows the two events are…',
      options: ['independent', 'dependent', 'mutually exclusive', 'complements'],
      answer: 1, explain: 'Independence would require the conditional probability to equal the marginal probability.' },
    { q: 'A tree diagram is most useful for…',
      options: ['displaying a frequency distribution', 'showing the sample points of a multiple-step experiment', 'computing the median', 'testing independence'],
      answer: 1, explain: 'Each branch level represents one step, so the final branches enumerate all outcomes.' },
    { q: 'The probabilities assigned to all the sample points of an experiment must sum to…',
      options: ['0', '0.5', '1', 'the number of sample points'],
      answer: 2, explain: 'That is the second basic requirement, along with each probability lying between 0 and 1.' }
  ]
});
