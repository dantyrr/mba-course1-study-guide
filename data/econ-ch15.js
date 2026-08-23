window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'econ-ch15', subject: 'econ', num: 15,
  title: 'Firms in Competitive Markets',
  overview: 'How does a firm that takes the market price as given decide how much to produce? Profit maximization (MR = MC), the shutdown and exit rules, and how entry and exit drive long-run profit to zero.',
  sections: [
    { title: 'What Is a Competitive Market?', html:
      '<p>A <span class="term">competitive market</span> has three characteristics:</p>' +
      '<ol><li>Many buyers and many sellers</li><li>Goods offered are identical</li><li>Firms can freely <strong>enter or exit</strong> the market</li></ol>' +
      '<p>Each buyer and seller is a <strong>price taker</strong>.</p>' +
      '<p><strong>Revenue for a competitive firm:</strong> <span class="term">average revenue</span> (TR ÷ Q) equals price for any firm. For a <em>competitive</em> firm, <span class="term">marginal revenue</span> (ΔTR from one more unit) <strong>also equals the price</strong>, because selling one more unit adds exactly P to revenue.</p>' +
      '<div class="formula">Competitive firm: P = AR = MR</div>' },
    { title: 'Profit Maximization: MR = MC', html:
      '<p>Goal: maximize <strong>Profit = TR − TC</strong>. Compare marginal revenue and marginal cost unit by unit:</p>' +
      '<ul>' +
      '<li>If <strong>MR &gt; MC</strong> → produce more.</li>' +
      '<li>If <strong>MC &gt; MR</strong> → produce less.</li>' +
      '<li>Profit is maximized where <strong>MR = MC</strong> — for a competitive firm, where <strong>P = MC</strong>.</li>' +
      '</ul>' +
      '<p>Because the MC curve tells us the quantity the firm supplies at any price, <strong>the marginal-cost curve is essentially the firm’s supply curve</strong>. Recall the cost-curve geometry: MC slopes upward, ATC is U-shaped, and MC crosses ATC at ATC’s minimum.</p>' },
    { title: 'The Shutdown Rule (Short Run) and Exit Rule (Long Run)', html:
      '<ul>' +
      '<li><span class="term">Shutdown</span> = short-run decision to produce nothing temporarily. The firm still pays fixed costs. <strong>Shut down if TR &lt; VC, i.e., if P &lt; AVC.</strong></li>' +
      '<li><span class="term">Exit</span> = long-run decision to leave the market. No costs remain. <strong>Exit if TR &lt; TC, i.e., if P &lt; ATC. Enter if P &gt; ATC.</strong></li>' +
      '</ul>' +
      '<div class="tablewrap"><table><tr><th>Condition</th><th>Decision</th></tr>' +
      '<tr><td>P &lt; AVC</td><td>Shut down now (produce 0)</td></tr>' +
      '<tr><td>AVC &lt; P &lt; ATC</td><td>Operate in short run (covers variable costs), but exit in long run</td></tr>' +
      '<tr><td>P &gt; ATC</td><td>Stay and enjoy profit</td></tr></table></div>' +
      '<p>Hence the firm’s <strong>short-run supply curve</strong> is the MC curve above AVC; its <strong>long-run supply curve</strong> is the MC curve above ATC.</p>' +
      '<div class="tip"><span class="term">Sunk costs</span> — costs already committed and unrecoverable — should be ignored. In the short run, fixed costs are sunk, which is why they don’t matter for the shutdown decision (this is why a store can rationally stay open all night even with few customers: rent is sunk; only variable costs matter).</div>' },
    { title: 'Measuring Profit and Loss', html:
      '<div class="formula">Profit = (P − ATC) × Q&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Loss = (ATC − P) × Q</div>' +
      '<p>Graphically, profit is the rectangle between price and ATC at the chosen quantity (where P = MC). If P is between AVC and ATC, the firm operates at a loss in the short run but minimizes that loss by producing where P = MC.</p>' },
    { title: 'Market Supply: Short Run vs. Long Run', html:
      '<ul>' +
      '<li><strong>Short run:</strong> number of firms fixed. Market supply = horizontal sum of the firms’ MC curves (above AVC).</li>' +
      '<li><strong>Long run:</strong> free entry and exit. If P &gt; ATC → profits attract entry → supply shifts right → price falls. If P &lt; ATC → losses cause exit → supply shifts left → price rises. The process ends when <strong>P = minimum ATC</strong> and firms earn <strong>zero economic profit</strong>, operating at their efficient scale.</li>' +
      '<li>The long-run market supply curve is therefore typically <strong>horizontal</strong> at minimum ATC (and always more elastic than short-run supply).</li>' +
      '</ul>' +
      '<p><strong>Why stay in business at zero profit?</strong> Economic profit counts <em>all opportunity costs</em> (including the owner’s time and capital). Zero <em>economic</em> profit typically means positive <em>accounting</em> profit — owners are covering everything they gave up.</p>' },
    { title: 'A Demand Increase: Short Run → Long Run', html:
      '<ol>' +
      '<li>Start in long-run equilibrium (P = min ATC, zero profit).</li>' +
      '<li>Demand shifts right → price and quantity rise → P &gt; ATC → firms earn profits.</li>' +
      '<li>Profits attract entry → short-run supply shifts right → price falls back to min ATC.</li>' +
      '<li>New long-run equilibrium: same price, larger quantity, more firms, zero profit again.</li>' +
      '</ol>' +
      '<p><strong>When might long-run supply slope upward?</strong> (1) A key input is in limited supply (entry bids up its price, raising all firms’ costs); (2) firms have different costs (higher prices draw in higher-cost producers).</p>' }
  ],
  terms: [
    { term: 'Competitive market (strict definition)', def: 'Many buyers and sellers trading identical products with free entry and exit, so every participant is a price taker.' },
    { term: 'Average revenue (AR)', def: 'Total revenue divided by quantity sold; equals the price of the good for any firm.' },
    { term: 'Marginal revenue (MR)', def: 'The change in total revenue from selling one additional unit; equals price for a competitive firm.' },
    { term: 'Profit-maximizing rule', def: 'Produce the quantity where marginal revenue equals marginal cost (MR = MC); for a competitive firm, where P = MC.' },
    { term: 'Shutdown', def: 'A short-run decision not to produce anything during a period; the firm still pays fixed costs. Shut down if P < AVC (TR < VC).' },
    { term: 'Exit', def: 'A long-run decision to leave the market entirely; the firm then has zero costs. Exit if P < ATC (TR < TC).' },
    { term: 'Sunk cost', def: 'A cost already committed that cannot be recovered; rational decisions ignore it. In the short run, fixed costs are sunk.' },
    { term: 'Firm’s short-run supply curve', def: 'The portion of its marginal-cost curve above average variable cost.' },
    { term: 'Firm’s long-run supply curve', def: 'The portion of its marginal-cost curve above average total cost.' },
    { term: 'Profit formula', def: 'Profit = (P − ATC) × Q; a loss when P < ATC equals (ATC − P) × Q.' },
    { term: 'Zero-profit condition', def: 'With free entry and exit, long-run equilibrium has P = minimum ATC and zero economic profit; firms operate at efficient scale.' },
    { term: 'Economic vs. accounting profit', def: 'Economic profit subtracts all opportunity costs (including owner’s time/capital); zero economic profit usually means positive accounting profit.' },
    { term: 'Long-run market supply', def: 'Typically horizontal at minimum ATC; may slope upward if inputs are limited or firms have different costs.' }
  ],
  quiz: [
    { q: 'For a competitive firm, marginal revenue equals…',
      options: ['average total cost', 'the market price', 'total revenue', 'marginal cost at every output level'],
      answer: 1, explain: 'A price taker adds exactly P to revenue with each extra unit sold, so MR = P (= AR).' },
    { q: 'A competitive firm maximizes profit by producing the quantity where…',
      options: ['average total cost is minimized', 'total revenue is maximized', 'price equals marginal cost', 'price equals average variable cost'],
      answer: 2, explain: 'Profit is maximized where MR = MC; since MR = P for a competitive firm, produce where P = MC.' },
    { q: 'If MR > MC at the current output, the firm should…',
      options: ['increase output', 'decrease output', 'shut down', 'raise its price'],
      answer: 0, explain: 'Each additional unit adds more to revenue than to cost, so producing more raises profit — expand until MR = MC.' },
    { q: 'In the short run, a competitive firm should shut down when…',
      options: ['P < ATC', 'P < AVC', 'profit is zero', 'MC > ATC'],
      answer: 1, explain: 'Shutting down loses TR but saves VC. Shut down when TR < VC, i.e., P < AVC. Fixed costs are sunk and irrelevant.' },
    { q: 'Price is $4, AVC at the best quantity is $3, and ATC is $5. The firm should…',
      options: ['shut down immediately', 'operate in the short run but exit in the long run', 'stay in business permanently — it is profitable', 'raise output until ATC falls to $4'],
      answer: 1, explain: 'AVC < P < ATC: the firm covers its variable costs plus some fixed costs (better than shutting down), but with P < ATC it should exit in the long run.' },
    { q: 'A firm produces Q = 30 where P = MC = $3, and ATC = $5. Its profit or loss is…',
      options: ['profit of $60', 'loss of $60', 'loss of $90', 'profit of $90'],
      answer: 1, explain: 'Loss = (ATC − P) × Q = ($5 − $3) × 30 = $60.' },
    { q: 'The competitive firm’s short-run supply curve is…',
      options: ['its entire MC curve', 'its MC curve above AVC', 'its MC curve above ATC', 'its ATC curve above MC'],
      answer: 1, explain: 'For P > AVC the firm produces where P = MC; for P < AVC it shuts down. So supply = MC above AVC. (Above ATC is the long-run version.)' },
    { q: 'In long-run competitive equilibrium with free entry and exit, price equals…',
      options: ['minimum average variable cost', 'minimum average total cost', 'marginal revenue minus ATC', 'zero'],
      answer: 1, explain: 'Entry and exit continue until economic profit is zero, which happens when P = minimum ATC — firms operate at efficient scale.' },
    { q: 'Competitive firms stay in business despite zero long-run profit because…',
      options: ['they expect prices to rise', 'zero economic profit still covers all opportunity costs (accounting profit is positive)', 'governments subsidize them', 'fixed costs are negative'],
      answer: 1, explain: 'Economic profit includes the opportunity cost of the owners’ time and money. Zero economic profit means owners earn exactly what they could elsewhere.' },
    { q: 'Demand permanently increases in a competitive market. In the LONG run, compared to the original equilibrium, price is…',
      options: ['higher, with more firms', 'back at minimum ATC, with more firms and higher market quantity', 'lower, with fewer firms', 'higher, with fewer firms'],
      answer: 1, explain: 'Short-run profits attract entry, shifting supply right until price returns to minimum ATC. Quantity and the number of firms are permanently higher; profit returns to zero.' },
    { q: 'Why can a 24-hour store rationally stay open overnight with only a few customers?',
      options: ['rent and equipment costs are sunk at night — only variable costs matter', 'total revenue always exceeds total cost', 'fixed costs rise at night', 'it is required to by regulation'],
      answer: 0, explain: 'The overnight decision is marginal: stay open if the extra revenue covers the extra (variable) costs like staffing. Rent is sunk regardless.' }
  ]
});
