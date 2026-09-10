/* Economics formula sheet — every equation from the Mankiw chapters, with purpose and usage */
window.ECON_FORMULAS = {
  title: 'Economics Formula Sheet',
  intro: 'Every equation and decision rule from the Economics chapters (Mankiw 10e: Ch 1, 2, 4, 5, 15), with what it is used for and how to apply it. Built for an open-note test: use the chapter headers to jump, and the Print button for a paper copy.',
  sections: [
    { title: 'Ch 1 — Ten Principles: Decision Rules', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Rule / equation</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Act if: Marginal Benefit &gt; Marginal Cost<br>(MB &gt; MC)</div></td>' +
      '<td>Deciding whether to do <em>one more</em> of anything (watch one more movie, produce one more unit, stay open one more hour).</td>' +
      '<td>Compare only the <strong>extra</strong> benefit and <strong>extra</strong> cost of the increment. Ignore what is already spent or fixed. If MB &gt; MC, do it; if MC &gt; MB, don’t.</td></tr>' +
      '<tr><td><div class="formula">Opportunity cost = value of the best alternative given up</div></td>' +
      '<td>Finding the TRUE cost of a choice (attending school, taking a job, using time or money one way instead of another).</td>' +
      '<td>Add up everything sacrificed — money spent <em>plus</em> foregone earnings/time. Example: the cost of college includes foregone wages, not just tuition.</td></tr>' +
      '<tr><td><div class="formula">Sunk cost: already spent → ignore it</div></td>' +
      '<td>Avoiding the sunk-cost trap in repair/replace/continue decisions.</td>' +
      '<td>Money already committed and unrecoverable (e.g., $2,000 of past repairs) must NOT enter the decision. Compare only future MB vs. future MC.</td></tr>' +
      '</table></div>' },

    { title: 'Ch 2 — Thinking Like an Economist: Graphs & the PPF', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Slope = Δy ÷ Δx<br>("rise over run")</div></td>' +
      '<td>Measuring how steep a line is — how much y changes when x changes by one unit (e.g., along a demand curve).</td>' +
      '<td>Pick two points; divide the change in the y-value by the change in the x-value. Example from the text: moving from (13 novels, $8) to (21, $6): slope = −2 ÷ 8 = −1/4. Downward lines have negative slope; flat ≈ 0; vertical = infinite.</td></tr>' +
      '<tr><td><div class="formula">Opportunity cost on the PPF = amount of good B given up ÷ amount of good A gained<br>= |slope of the PPF|</div></td>' +
      '<td>Reading trade-offs off a production possibilities frontier.</td>' +
      '<td>Example: producing 100 more cars costs 200 computers → each car "costs" 200/100 = 2 computers. A bowed-out PPF means this cost RISES as you make more of a good (specialized resources).</td></tr>' +
      '<tr><td><div class="formula">Points: on PPF = efficient · inside = inefficient · outside = not feasible</div></td>' +
      '<td>Classifying any output combination on a PPF question.</td>' +
      '<td>On the curve: can only get more of one good by giving up the other. Inside: could make more of BOTH. Outside: impossible with current resources/technology (growth shifts the whole curve outward).</td></tr>' +
      '</table></div>' },

    { title: 'Ch 4 — Supply & Demand: Market Math', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Market demand = sum of all individual quantities demanded at each price</div></td>' +
      '<td>Building the market demand curve from individual buyers.</td>' +
      '<td>Add curves HORIZONTALLY (add quantities at each price, not prices). Example: at $4, Catherine demands 4 + Nicholas demands 3 → market Qd = 7. Market supply works the same way with sellers.</td></tr>' +
      '<tr><td><div class="formula">Equilibrium: Quantity demanded = Quantity supplied<br>(Qd = Qs)</div></td>' +
      '<td>Finding the market-clearing price and quantity — where the curves intersect.</td>' +
      '<td>Read the intersection of supply and demand. At that price, buyers buy exactly what sellers sell; no pressure for price to move.</td></tr>' +
      '<tr><td><div class="formula">Surplus: Qs &gt; Qd (price above equilibrium)<br>Shortage: Qd &gt; Qs (price below equilibrium)</div></td>' +
      '<td>Predicting price movement when the market is NOT in equilibrium.</td>' +
      '<td>Surplus → sellers cut prices → price falls to equilibrium. Shortage → sellers raise prices → price rises to equilibrium (the law of supply and demand).</td></tr>' +
      '<tr><td><div class="formula">3-step method: 1) Which curve shifts? 2) Which direction? 3) Compare old vs. new equilibrium</div></td>' +
      '<td>Analyzing ANY event’s effect on price and quantity.</td>' +
      '<td>Results: D↑ → P↑ Q↑ · D↓ → P↓ Q↓ · S↑ → P↓ Q↑ · S↓ → P↑ Q↓. If BOTH curves shift, one of P or Q is ambiguous (depends on shift sizes).</td></tr>' +
      '</table></div>' },

    { title: 'Ch 5 — Elasticity: Formulas', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Price elasticity of demand<br>= %ΔQd ÷ %ΔP<br>(drop the minus sign)</div></td>' +
      '<td>Measuring how strongly buyers respond to a price change.</td>' +
      '<td>&gt;1 elastic · &lt;1 inelastic · =1 unit elastic · 0 perfectly inelastic (vertical curve) · ∞ perfectly elastic (horizontal curve). More elastic when: close substitutes exist, good is a luxury, market is narrowly defined, time horizon is long.</td></tr>' +
      '<tr><td><div class="formula">Midpoint method:<br>%Δ = (end − start) ÷ [(end + start) ÷ 2] × 100</div></td>' +
      '<td>Computing the percentage changes for ANY elasticity — gives the same answer in both directions.</td>' +
      '<td>Worked example (iPhones): P $400→$600, Q 10,600→8,400.<br>%ΔP = 200 ÷ 500 = 40%. %ΔQ = 2,200 ÷ 9,500 ≈ 23.2%.<br>Elasticity = 23.2 ÷ 40 ≈ <strong>0.58 → inelastic</strong>.</td></tr>' +
      '<tr><td><div class="formula">Total revenue = Price × Quantity<br>(TR = P × Q)</div></td>' +
      '<td>What sellers receive / buyers spend; predicting revenue when price changes.</td>' +
      '<td><strong>Inelastic</strong> demand: P and TR move TOGETHER (raise price → revenue rises). <strong>Elastic</strong>: P and TR move OPPOSITE (raise price → revenue falls). <strong>Unit elastic</strong>: TR unchanged. On a linear demand curve, elasticity falls as you slide down it: elastic at high P/low Q, inelastic at low P/high Q.</td></tr>' +
      '<tr><td><div class="formula">Income elasticity of demand<br>= %ΔQd ÷ %Δ income</div></td>' +
      '<td>Classifying goods by how demand responds to income.</td>' +
      '<td>Positive → normal good (well above 1 suggests a luxury). Negative → inferior good.</td></tr>' +
      '<tr><td><div class="formula">Cross-price elasticity<br>= %ΔQd of good 1 ÷ %ΔP of good 2</div></td>' +
      '<td>Determining whether two goods are substitutes or complements.</td>' +
      '<td>Positive → substitutes (pricier Coke → more Pepsi bought). Negative → complements (pricier peanut butter → less jelly bought).</td></tr>' +
      '<tr><td><div class="formula">Price elasticity of supply<br>= %ΔQs ÷ %ΔP</div></td>' +
      '<td>Measuring how strongly sellers respond to a price change.</td>' +
      '<td>Same &gt;1/&lt;1/=1 classifications as demand. More elastic in the LONG run (capacity can adjust); very inelastic near maximum capacity. Use the midpoint method for the % changes.</td></tr>' +
      '</table></div>' +
      '<div class="tip"><strong>Elasticity applications to remember:</strong> Farm technology → supply right + inelastic food demand → price falls more than quantity rises → farm revenue FALLS. OPEC → supply cuts spike prices short-run (inelastic) but barely move them long-run (elastic). Drug interdiction → supply left + inelastic demand → total drug spending RISES short-run.</div>' },

    { title: 'Ch 15 — Competitive Firms: Cost & Revenue Formulas', html:
      '<div class="tablewrap"><table>' +
      '<tr><th style="width:34%">Equation</th><th style="width:30%">What it is used for</th><th>How to use it</th></tr>' +
      '<tr><td><div class="formula">Profit = TR − TC</div></td>' +
      '<td>The firm’s bottom line and its goal (maximize this).</td>' +
      '<td>TR = total revenue, TC = total cost. Economic profit uses ALL opportunity costs (including the owner’s time/capital) — so zero economic profit still means a positive accounting profit.</td></tr>' +
      '<tr><td><div class="formula">TR = P × Q&nbsp;&nbsp;·&nbsp;&nbsp;TC = FC + VC</div></td>' +
      '<td>Building blocks for every profit calculation.</td>' +
      '<td>FC = fixed costs (paid even at zero output); VC = variable costs (rise with output).</td></tr>' +
      '<tr><td><div class="formula">AR = TR ÷ Q = P<br>MR = ΔTR ÷ ΔQ</div></td>' +
      '<td>Average and marginal revenue.</td>' +
      '<td>AR equals price for ANY firm. For a COMPETITIVE (price-taking) firm, MR = P too — each extra unit adds exactly the market price to revenue.</td></tr>' +
      '<tr><td><div class="formula">ATC = TC ÷ Q · AVC = VC ÷ Q · AFC = FC ÷ Q<br>MC = ΔTC ÷ ΔQ</div></td>' +
      '<td>Per-unit cost measures used in every graph question.</td>' +
      '<td>Geometry to remember: MC slopes upward, ATC is U-shaped, and MC crosses ATC at ATC’s MINIMUM.</td></tr>' +
      '<tr><td><div class="formula">Profit-max rule: produce where MR = MC<br>(competitive firm: P = MC)</div></td>' +
      '<td>Choosing the profit-maximizing output.</td>' +
      '<td>If MR &gt; MC → produce more; if MC &gt; MR → produce less. Because the MC curve gives quantity supplied at each price, the MC curve IS the firm’s supply curve.</td></tr>' +
      '<tr><td><div class="formula">Shutdown (short run): if P &lt; AVC → produce 0<br>Exit (long run): if P &lt; ATC · Enter: if P &gt; ATC</div></td>' +
      '<td>The stay-or-go decisions.</td>' +
      '<td>Short run: fixed costs are sunk, so only compare price to AVC. Three zones: P &lt; AVC shut down now · AVC &lt; P &lt; ATC operate now but exit long run · P &gt; ATC stay and profit. Short-run supply = MC above AVC; long-run supply = MC above ATC.</td></tr>' +
      '<tr><td><div class="formula">Profit = (P − ATC) × Q<br>Loss = (ATC − P) × Q</div></td>' +
      '<td>Computing profit/loss and finding the rectangle on the graph.</td>' +
      '<td>At the chosen Q (where P = MC), the rectangle’s height is P − ATC and width is Q. Example: Q = 30, P = $3, ATC = $5 → loss = (5 − 3) × 30 = $60.</td></tr>' +
      '<tr><td><div class="formula">Long-run competitive equilibrium:<br>P = minimum ATC → zero economic profit</div></td>' +
      '<td>Where free entry and exit push every competitive market.</td>' +
      '<td>P &gt; ATC → profits → entry → supply right → price falls. P &lt; ATC → losses → exit → price rises. Ends at P = min ATC with firms at efficient scale; long-run market supply is roughly horizontal there (and always more elastic than short-run).</td></tr>' +
      '</table></div>' }
  ]
};
