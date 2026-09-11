window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'econ-ch15', subject: 'econ', num: 15,
  title: 'Firms in Competitive Markets',
  overview: 'This chapter answers one question from the firm’s point of view: if I can’t control the price, how much should I produce — and should I produce at all? Then it zooms out to ask what happens to a whole market when every firm answers that question and new firms can come and go. Everything hangs on four comparisons: MR vs. MC, P vs. AVC, P vs. ATC, and (in the long run) P vs. minimum ATC.',
  sections: [
    { title: '0. The Map of This Chapter (read this first)', html:
      '<p>Chapter 15 has a lot of curves and rules, but they all come from <strong>one idea</strong>: a competitive firm cannot change the price, so its <em>only</em> decision is <strong>how much to produce</strong> (including zero). The chapter builds that decision up in layers:</p>' +
      '<ol>' +
      '<li><strong>What “competitive” means</strong> and why it makes firms <em>price takers</em>.</li>' +
      '<li><strong>Revenue</strong> for a price taker — the punchline is that price = average revenue = marginal revenue.</li>' +
      '<li><strong>Costs</strong> (a quick refresher on TC, ATC, AVC, MC and the shape of their curves).</li>' +
      '<li><strong>The output decision:</strong> produce where MR = MC.</li>' +
      '<li><strong>The “should I even open?” decision:</strong> shut down if P &lt; AVC (short run), exit if P &lt; ATC (long run).</li>' +
      '<li><strong>The market as a whole:</strong> short run (fixed number of firms) vs. long run (entry and exit push profit to zero).</li>' +
      '</ol>' +
      '<div class="tip"><strong>The four comparisons to memorize.</strong> (1) MR vs. MC tells you <em>how much</em> to make. (2) P vs. AVC tells you whether to <em>shut down now</em>. (3) P vs. ATC tells you whether to <em>exit or enter</em> in the long run. (4) In long-run equilibrium, P = <em>minimum</em> ATC and economic profit = 0.</div>' },

    { title: '1. What Is a Competitive Market?', html:
      '<p>A <span class="term">competitive market</span> (also called <em>perfectly competitive</em>) has three characteristics. All three matter:</p>' +
      '<div class="tablewrap"><table><tr><th>Characteristic</th><th>Why it matters</th><th>Example that fits / doesn’t</th></tr>' +
      '<tr><td><strong>Many buyers and many sellers</strong></td><td>No single participant is big enough to move the market price.</td><td>Thousands of wheat farmers ✓ &nbsp;·&nbsp; One regional electric utility ✗</td></tr>' +
      '<tr><td><strong>Identical (homogeneous) goods</strong></td><td>Buyers don’t care <em>who</em> they buy from, so nobody can charge a premium.</td><td>Grade-A milk, corn, copper ✓ &nbsp;·&nbsp; iPhones vs. Android phones ✗ (differentiated)</td></tr>' +
      '<tr><td><strong>Free entry and exit</strong></td><td>Profits attract new firms; losses drive firms out. This is what makes the <em>long-run</em> story work.</td><td>Opening a lawn-care business ✓ &nbsp;·&nbsp; Starting a new airline ✗ (huge barriers)</td></tr>' +
      '</table></div>' +
      '<p>Because of the first two characteristics, every buyer and seller is a <span class="term">price taker</span>: they take the market price as given. A wheat farmer who tried to charge $1 above the market price would sell nothing (buyers go elsewhere for identical wheat), and there’s no reason to charge below it (the farmer can already sell all they want at the market price).</p>' +
      '<div class="tip"><strong>Mental model:</strong> a competitive firm faces a <em>horizontal</em> demand curve at the market price. It can sell 1 unit or 1,000 units at that price — but only at that price.</div>' },

    { title: '2. Revenue of a Competitive Firm: Why P = AR = MR', html:
      '<p>Three revenue measures, all built from <strong>total revenue (TR) = P × Q</strong>:</p>' +
      '<ul>' +
      '<li><span class="term">Average revenue (AR)</span> = TR ÷ Q — revenue per unit sold. Since TR = P × Q, AR = (P × Q) ÷ Q = <strong>P</strong>. This is true for <em>every</em> firm, competitive or not.</li>' +
      '<li><span class="term">Marginal revenue (MR)</span> = ΔTR ÷ ΔQ — the <em>extra</em> revenue from selling one more unit. For a <strong>competitive</strong> firm, selling one more unit adds exactly the price to revenue (the price doesn’t change when you sell more), so <strong>MR = P</strong>.</li>' +
      '</ul>' +
      '<p><strong>Worked example</strong> — a farmer selling milk at a market price of $6 per gallon:</p>' +
      '<div class="tablewrap"><table><tr><th>Quantity (Q)</th><th>Price (P)</th><th>Total revenue (TR = P × Q)</th><th>Average revenue (TR ÷ Q)</th><th>Marginal revenue (ΔTR)</th></tr>' +
      '<tr><td>1</td><td>$6</td><td>$6</td><td>$6</td><td>—</td></tr>' +
      '<tr><td>2</td><td>$6</td><td>$12</td><td>$6</td><td>$6</td></tr>' +
      '<tr><td>3</td><td>$6</td><td>$18</td><td>$6</td><td>$6</td></tr>' +
      '<tr><td>4</td><td>$6</td><td>$24</td><td>$6</td><td>$6</td></tr>' +
      '<tr><td>5</td><td>$6</td><td>$30</td><td>$6</td><td>$6</td></tr>' +
      '</table></div>' +
      '<p>Every column that isn’t TR is just $6. That is the whole point: <strong>for a price taker, P = AR = MR</strong>, and the firm’s marginal-revenue "curve" is a flat line at the market price.</p>' +
      '<div class="tip"><strong>Why this matters later:</strong> because MR is simply P, the profit-max rule "MR = MC" turns into the easy-to-use rule <strong>"P = MC."</strong> (For a monopoly, MR &lt; P because selling more requires cutting price — that’s the next chapter.)</div>' },

    { title: '3. Cost Refresher: The Curves the Chapter Assumes You Know', html:
      '<p>The slides use cost curves from the previous chapter without much re-explanation. Here is what each one means and what shape it has.</p>' +
      '<div class="tablewrap"><table><tr><th>Cost measure</th><th>Formula</th><th>Plain English</th><th>Shape of the curve</th></tr>' +
      '<tr><td><span class="term">Fixed cost (FC)</span></td><td>—</td><td>Costs you pay even at zero output (rent, a lease, a loan payment).</td><td>Flat line</td></tr>' +
      '<tr><td><span class="term">Variable cost (VC)</span></td><td>—</td><td>Costs that rise with output (materials, hourly labor, electricity).</td><td>Rises with Q</td></tr>' +
      '<tr><td><span class="term">Total cost (TC)</span></td><td>FC + VC</td><td>Everything.</td><td>Rises with Q</td></tr>' +
      '<tr><td><span class="term">Average total cost (ATC)</span></td><td>TC ÷ Q</td><td>Cost per unit, all-in.</td><td><strong>U-shaped</strong></td></tr>' +
      '<tr><td><span class="term">Average variable cost (AVC)</span></td><td>VC ÷ Q</td><td>Variable cost per unit — what it costs to make each unit <em>ignoring</em> fixed costs.</td><td>U-shaped, below ATC</td></tr>' +
      '<tr><td><span class="term">Average fixed cost (AFC)</span></td><td>FC ÷ Q</td><td>Fixed cost spread over units; shrinks as Q grows.</td><td>Falls continuously</td></tr>' +
      '<tr><td><span class="term">Marginal cost (MC)</span></td><td>ΔTC ÷ ΔQ</td><td>The extra cost of making <em>one more</em> unit.</td><td><strong>Upward sloping</strong> (eventually)</td></tr>' +
      '</table></div>' +
      '<p><strong>Three geometry facts you need for the graphs:</strong></p>' +
      '<ol>' +
      '<li><strong>MC slopes upward</strong> because of diminishing marginal product: each added worker/unit of input adds less output, so each extra unit of output costs more.</li>' +
      '<li><strong>ATC is U-shaped.</strong> At low output, spreading fixed cost over more units pulls ATC down; at high output, rising MC pushes it back up.</li>' +
      '<li><strong>MC crosses ATC at ATC’s minimum.</strong> Think of ATC as your grade-point average and MC as the grade on your next test: if the next grade is below your average, your average falls; if above, your average rises. So ATC falls while MC &lt; ATC and rises once MC &gt; ATC — which means they cross exactly at the bottom of the U. The same logic makes MC cross AVC at AVC’s minimum.</li>' +
      '</ol>' +
      '<p>The bottom of the ATC curve is called the <span class="term">efficient scale</span> — the quantity that minimizes average total cost.</p>' },

    { title: '4. The Output Decision: Produce Where MR = MC', html:
      '<p>The firm’s goal is to <strong>maximize profit = TR − TC</strong>. The way to find the best quantity is to go unit by unit and ask: <em>does this next unit add more to revenue than to cost?</em></p>' +
      '<ul>' +
      '<li>If <strong>MR &gt; MC</strong>, the next unit adds more revenue than cost → <strong>make it</strong> (profit rises).</li>' +
      '<li>If <strong>MC &gt; MR</strong>, the last unit cost more than it brought in → <strong>make less</strong>.</li>' +
      '<li>Profit is maximized where <strong>MR = MC</strong>. For a competitive firm, since MR = P, that is where <strong>P = MC</strong>.</li>' +
      '</ul>' +
      '<p><strong>Worked example</strong> — market price is $6. The firm has $3 of fixed cost and the total costs below:</p>' +
      '<div class="tablewrap"><table><tr><th>Q</th><th>TR (P × Q)</th><th>TC</th><th>Profit (TR − TC)</th><th>MR</th><th>MC</th><th>Decision</th></tr>' +
      '<tr><td>0</td><td>$0</td><td>$3</td><td>−$3</td><td>—</td><td>—</td><td>—</td></tr>' +
      '<tr><td>1</td><td>$6</td><td>$5</td><td>$1</td><td>$6</td><td>$2</td><td>MR &gt; MC → make more</td></tr>' +
      '<tr><td>2</td><td>$12</td><td>$8</td><td>$4</td><td>$6</td><td>$3</td><td>MR &gt; MC → make more</td></tr>' +
      '<tr><td>3</td><td>$18</td><td>$12</td><td>$6</td><td>$6</td><td>$4</td><td>MR &gt; MC → make more</td></tr>' +
      '<tr><td>4</td><td>$24</td><td>$17</td><td>$7</td><td>$6</td><td>$5</td><td>MR &gt; MC → make more</td></tr>' +
      '<tr><td><strong>5</strong></td><td><strong>$30</strong></td><td><strong>$23</strong></td><td><strong>$7</strong></td><td><strong>$6</strong></td><td><strong>$6</strong></td><td><strong>MR = MC → stop here</strong></td></tr>' +
      '<tr><td>6</td><td>$36</td><td>$30</td><td>$6</td><td>$6</td><td>$7</td><td>MC &gt; MR → too much</td></tr>' +
      '<tr><td>7</td><td>$42</td><td>$38</td><td>$4</td><td>$6</td><td>$8</td><td>MC &gt; MR → too much</td></tr>' +
      '</table></div>' +
      '<p>Profit peaks at $7 around Q = 4–5 (the fifth unit is exactly break-even at the margin, which is what MR = MC means) and falls after that. Notice you never needed to look at fixed cost to choose Q — it’s the same $3 no matter what.</p>' +
      '<p><strong>The graph in words (Figure 1 in the slides):</strong> draw the U-shaped ATC, the lower U-shaped AVC, and the rising MC. Draw a horizontal line at the market price P — that line is the firm’s demand, AR, and MR all at once. The profit-maximizing quantity is where the horizontal price line <strong>crosses the MC curve</strong>. To the left of that point MR &gt; MC (expand); to the right MC &gt; MR (contract).</p>' +
      '<div class="tip"><strong>Key consequence — the MC curve is the firm’s supply curve.</strong> If the price rises from $6 to $8, the firm slides up its MC curve to the quantity where MC = $8. Because the MC curve tells you the quantity supplied at every price, it <em>is</em> the supply curve (with one exception covered next: the firm supplies nothing when price falls below AVC).</div>' },

    { title: '5. Shut Down or Keep Going? Exit or Stay? (Short Run vs. Long Run)', html:
      '<p>Two different decisions with two different time horizons — this is the most-tested part of the chapter.</p>' +
      '<div class="tablewrap"><table><tr><th></th><th>Shutdown</th><th>Exit</th></tr>' +
      '<tr><td><strong>Time frame</strong></td><td>Short run — a temporary decision to produce nothing for a while</td><td>Long run — a permanent decision to leave the market</td></tr>' +
      '<tr><td><strong>Costs while doing it</strong></td><td>Still pays <strong>fixed costs</strong> (the lease doesn’t go away)</td><td>Pays <strong>nothing</strong> — all costs gone</td></tr>' +
      '<tr><td><strong>What you give up</strong></td><td>Total revenue (TR)</td><td>Total revenue (TR)</td></tr>' +
      '<tr><td><strong>What you save</strong></td><td>Variable cost (VC)</td><td>Total cost (TC)</td></tr>' +
      '<tr><td><strong>Rule</strong></td><td>Shut down if TR &lt; VC ⇔ <strong>P &lt; AVC</strong></td><td>Exit if TR &lt; TC ⇔ <strong>P &lt; ATC</strong>; enter if P &gt; ATC</td></tr>' +
      '</table></div>' +
      '<p><strong>Why the shutdown rule ignores fixed costs.</strong> In the short run, fixed costs are <span class="term">sunk costs</span> — already committed, cannot be recovered, and paid whether you open or not. "Don’t cry over spilt milk": if a cost is the same under every choice, it cannot affect which choice is best. So the only question is whether revenue covers the costs you <em>can</em> avoid — the variable ones.</p>' +
      '<p><strong>Worked example.</strong> A bakery has a $1,000/month lease (fixed) and would spend $3,000 on flour, labor, and electricity (variable) to make 1,000 loaves.</p>' +
      '<ul>' +
      '<li>If the market price is <strong>$3.50</strong>: TR = $3,500 &gt; VC $3,000. Staying open loses $500 (3,500 − 4,000), but shutting down loses the full $1,000 lease. <strong>Stay open</strong> — you lose less. (P = $3.50 &gt; AVC = $3.00.)</li>' +
      '<li>If the market price is <strong>$2.50</strong>: TR = $2,500 &lt; VC $3,000. Opening loses $1,500; shutting loses $1,000. <strong>Shut down.</strong> (P = $2.50 &lt; AVC = $3.00.)</li>' +
      '<li>Either way, ATC = $4.00. Since P &lt; ATC in both cases, the bakery should <strong>exit in the long run</strong> unless the price recovers — once the lease is up, nothing is sunk anymore.</li>' +
      '</ul>' +
      '<div class="tablewrap"><table><tr><th>Where the price sits</th><th>Short-run action</th><th>Long-run action</th></tr>' +
      '<tr><td><strong>P &lt; AVC</strong></td><td>Shut down (Q = 0)</td><td>Exit</td></tr>' +
      '<tr><td><strong>AVC &lt; P &lt; ATC</strong></td><td>Operate at a loss (loss is smaller than fixed cost)</td><td>Exit</td></tr>' +
      '<tr><td><strong>P &gt; ATC</strong></td><td>Operate and earn profit</td><td>Stay (and others will enter)</td></tr>' +
      '</table></div>' +
      '<p><strong>Putting it together — the firm’s supply curve, precisely:</strong></p>' +
      '<ul>' +
      '<li><strong>Short-run supply curve</strong> = the part of the MC curve that lies <strong>above AVC</strong>. Below the minimum of AVC, quantity supplied is zero.</li>' +
      '<li><strong>Long-run supply curve</strong> = the part of the MC curve that lies <strong>above ATC</strong>. Below the minimum of ATC, the firm leaves.</li>' +
      '</ul>' +
      '<div class="tip"><strong>The 2 a.m. Walmart example from the slides.</strong> Ten shoppers and one open checkout looks wasteful, but the rent, shelving, and refrigeration are paid whether the doors are open or locked — they are sunk for that night. The only real cost of staying open overnight is the extra variable cost (a cashier, some lighting). As long as overnight sales cover <em>that</em>, staying open is the right call. Same logic: a restaurant serving lunch even though it "loses money" overall, or a farm harvesting a crop whose price collapsed after planting.</div>' },

    { title: '6. Measuring Profit and Loss on the Graph', html:
      '<p>Once you know Q (where P = MC), profit is easy:</p>' +
      '<div class="formula">Profit = TR − TC = (P × Q) − (ATC × Q) = <strong>(P − ATC) × Q</strong><br>If P &lt; ATC: Loss = <strong>(ATC − P) × Q</strong></div>' +
      '<p>On the graph this is a <strong>rectangle</strong>: its height is the gap between the price line and the ATC curve <em>at the chosen Q</em>, and its width is Q.</p>' +
      '<ul>' +
      '<li>Price line above ATC → the rectangle is profit (Figure 5a).</li>' +
      '<li>Price line below ATC → the rectangle is a loss (Figure 5b), and the firm is minimizing that loss by producing where P = MC (as long as P is still above AVC).</li>' +
      '</ul>' +
      '<p><strong>Worked example (the slides’ Active Learning 1):</strong> the firm finds MR = MC at Q = 30. At that quantity ATC = $5 and the price is $3. AVC at Q = 30 is $2.</p>' +
      '<ol>' +
      '<li>TR = 3 × 30 = $90. TC = 5 × 30 = $150. Profit = 90 − 150 = <strong>−$60</strong> (a loss).</li>' +
      '<li>Shortcut: loss = (ATC − P) × Q = (5 − 3) × 30 = $60. Same answer.</li>' +
      '<li>Should it shut down? P ($3) &gt; AVC ($2), so <strong>no — keep producing</strong>. Shutting down would lose the whole fixed cost, which is (ATC − AVC) × Q = (5 − 2) × 30 = $90, worse than the $60 loss from operating.</li>' +
      '</ol>' +
      '<div class="tip"><strong>Exam habit:</strong> when a question gives you a graph or a table, do it in this order — (1) find Q where P = MC, (2) read ATC and AVC at <em>that</em> Q, (3) compare P to AVC for the shutdown call, (4) compute (P − ATC) × Q for profit or loss.</div>' },

    { title: '7. Market Supply in the Short Run (Fixed Number of Firms)', html:
      '<p>Two simplifying assumptions the chapter makes: (1) all firms, existing and potential, have <strong>identical cost curves</strong>; (2) a firm’s costs <strong>don’t change</strong> as other firms enter or exit.</p>' +
      '<p>In the short run the number of firms is <strong>fixed</strong> (entering takes time; existing firms are stuck with their fixed costs). Each firm supplies along its MC curve (above AVC). The <strong>market supply curve is the horizontal sum</strong> of all those individual MC curves — at any price, add up what every firm produces.</p>' +
      '<p><strong>Example (Figure 6):</strong> 1,000 identical firms. If at P = $2 each firm produces 200 units, the market supplies 1,000 × 200 = 200,000 units at $2. Do that at every price and you have the market supply curve, which simply looks like one firm’s MC curve stretched 1,000× wider.</p>' },

    { title: '8. Market Supply in the Long Run: Entry, Exit, and Zero Profit', html:
      '<p>In the long run, firms can enter or leave, and that changes everything. Here is the logic as a chain reaction:</p>' +
      '<ol>' +
      '<li>Suppose price is <strong>above ATC</strong>. Existing firms earn positive economic profit.</li>' +
      '<li>Profit attracts <strong>new firms to enter</strong> (free entry). The number of firms rises.</li>' +
      '<li>More firms → market supply shifts <strong>right</strong> → the market price <strong>falls</strong>.</li>' +
      '<li>Entry continues as long as any profit remains. It <strong>stops when P = ATC</strong> — economic profit is zero and nobody has a reason to come in.</li>' +
      '<li>The mirror image: if P &lt; ATC, firms lose money, some <strong>exit</strong>, supply shifts <strong>left</strong>, price <strong>rises</strong>, until again P = ATC.</li>' +
      '</ol>' +
      '<p>So the long run settles where <strong>P = ATC</strong>. But we also know each firm produces where P = MC. If P = MC <em>and</em> P = ATC, then MC = ATC — and MC only equals ATC at the <strong>minimum of ATC</strong>. Therefore:</p>' +
      '<div class="formula">Long-run competitive equilibrium: P = MC = minimum ATC → economic profit = 0 → every firm operates at its efficient scale</div>' +
      '<p><strong>The long-run market supply curve</strong> (Figure 7): because any price above min ATC triggers entry and any price below triggers exit, the market ends up supplying <em>whatever quantity demand wants</em> at a price equal to minimum ATC. The long-run supply curve is therefore a <strong>horizontal line at min ATC</strong>. The number of firms — not the price — adjusts to meet demand.</p>' +
      '<p><strong>"Why would anyone stay in business earning zero profit?"</strong> Because it’s zero <em>economic</em> profit, not zero money. Economic profit subtracts <em>all</em> opportunity costs, including the owner’s time and the return they could earn investing their money elsewhere. Example: a farmer who could earn a $60,000 salary elsewhere and $20,000 interest on the capital tied up in the farm. If the farm’s accounting profit is exactly $80,000, its economic profit is zero — the farmer is doing exactly as well as the best alternative, so there is no reason to leave (and no reason for others to enter). <strong>Zero economic profit = a normal, competitive return.</strong></p>' },

    { title: '9. A Demand Increase, Step by Step (Figure 8)', html:
      '<p>This three-panel story is the classic exam question. Start in long-run equilibrium: P₁ = min ATC, each firm earning zero profit, quantity Q₁.</p>' +
      '<div class="tablewrap"><table><tr><th>Stage</th><th>What happens in the market</th><th>What happens to each firm</th></tr>' +
      '<tr><td><strong>(a) Initial long-run equilibrium</strong></td><td>Demand D₁ meets short-run supply S₁ at P₁ = min ATC.</td><td>Produces at efficient scale; profit = 0.</td></tr>' +
      '<tr><td><strong>(b) Short run: demand rises to D₂</strong></td><td>Number of firms is fixed, so we move along S₁. Price jumps to P₂, quantity rises to Q₂.</td><td>Price is now above ATC → each firm expands along its MC curve and earns <strong>positive profit</strong>.</td></tr>' +
      '<tr><td><strong>(c) Long run: entry</strong></td><td>Profits pull in new firms. Short-run supply shifts right from S₁ to S₂ until price falls <strong>back to P₁</strong>. Market quantity ends at Q₃ &gt; Q₁.</td><td>Back to efficient scale and <strong>zero profit</strong> — but there are now more firms sharing a bigger market.</td></tr>' +
      '</table></div>' +
      '<p><strong>Summary of the final comparison to the start:</strong> same price, higher market quantity, more firms, zero profit again. The short-run price spike was temporary; the market "absorbed" the demand increase by adding firms rather than by permanently raising price.</p>' +
      '<div class="tip"><strong>Why long-run supply is more elastic than short-run supply:</strong> in the short run the only way to get more output is to push existing firms up their steep MC curves (price rises a lot). In the long run new firms can enter, so quantity can expand with little or no price increase. Entry and exit are what make the long-run curve flatter.</div>' },

    { title: '10. When the Long-Run Supply Curve Slopes Upward', html:
      '<p>The horizontal long-run supply curve came from two assumptions: identical costs, and costs unaffected by entry. Relax either one and the long-run supply curve <strong>slopes upward</strong> — a higher price is needed to coax out a larger quantity even in the long run.</p>' +
      '<ul>' +
      '<li><strong>Reason 1 — a key input is limited.</strong> Example: farmland. When new farms enter, they bid up the price of land, which raises <em>every</em> farm’s costs (min ATC rises). So expanding the industry pushes the zero-profit price up.</li>' +
      '<li><strong>Reason 2 — firms have different costs.</strong> The lowest-cost producers enter first. To draw in higher-cost producers, the price must rise above <em>their</em> ATC. So as price rises, progressively less efficient firms join, and market quantity grows. (Note: in this case the low-cost firms earn positive profit even in the long run — only the <em>marginal</em> firm earns zero.)</li>' +
      '</ul>' +
      '<p>Either way the key result survives: <strong>long-run supply is still more elastic than short-run supply</strong>, because entry and exit are easier over time.</p>' },

    { title: '11. Exam Traps and Quick Checks', html:
      '<ul>' +
      '<li><strong>"Profit-maximizing" ≠ "maximum revenue."</strong> The firm stops where MR = MC, not where TR is biggest. Producing more always raises TR for a price taker, but beyond MR = MC it raises cost even faster.</li>' +
      '<li><strong>MR = P only for competitive firms.</strong> If a question mentions a monopoly or a downward-sloping demand curve for the firm, MR &lt; P.</li>' +
      '<li><strong>Shutdown uses AVC, exit uses ATC.</strong> Fixed costs are sunk in the short run, so they’re irrelevant to the shutdown call — but in the long run nothing is fixed, so ATC is the right yardstick.</li>' +
      '<li><strong>A firm can be losing money and still be right to stay open</strong> (AVC &lt; P &lt; ATC). It’s minimizing its loss.</li>' +
      '<li><strong>Profit rectangle height is P − ATC at the chosen Q</strong>, not at the minimum of ATC. Read ATC at the quantity where P = MC.</li>' +
      '<li><strong>Zero economic profit is normal</strong>, not a failure. It means owners cover all opportunity costs; accounting profit is positive.</li>' +
      '<li><strong>After a permanent demand increase, long-run price returns to min ATC</strong> (if the LR supply curve is horizontal). Price rises only in the short run; quantity and the number of firms rise permanently.</li>' +
      '<li><strong>The MC curve is the supply curve</strong> — but only the portion above AVC (short run) or above ATC (long run).</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Competitive market (strict definition)', def: 'Many buyers and sellers trading identical products with free entry and exit, so every participant is a price taker.' },
    { term: 'Price taker', def: 'A firm (or buyer) that must accept the market price because it is too small, and its product too standardized, to influence price. It faces a horizontal demand curve at the market price.' },
    { term: 'Total revenue (TR)', def: 'Price × quantity sold.' },
    { term: 'Average revenue (AR)', def: 'Total revenue divided by quantity sold; equals the price of the good for any firm.' },
    { term: 'Marginal revenue (MR)', def: 'The change in total revenue from selling one additional unit; equals price for a competitive firm because selling more doesn’t lower the price.' },
    { term: 'P = AR = MR', def: 'The revenue identity for a competitive firm: price, average revenue, and marginal revenue are all the same flat line at the market price.' },
    { term: 'Fixed cost / variable cost', def: 'Fixed costs are paid regardless of output (rent, leases); variable costs rise with output (materials, hourly labor). TC = FC + VC.' },
    { term: 'Average total cost (ATC)', def: 'Total cost ÷ quantity; U-shaped. Its minimum is the efficient scale.' },
    { term: 'Average variable cost (AVC)', def: 'Variable cost ÷ quantity; U-shaped and below ATC. The benchmark for the short-run shutdown decision.' },
    { term: 'Marginal cost (MC)', def: 'The extra cost of producing one more unit (ΔTC ÷ ΔQ). Upward sloping; crosses ATC and AVC at their minimums.' },
    { term: 'Efficient scale', def: 'The quantity that minimizes average total cost — where MC crosses ATC. Long-run competitive equilibrium has every firm producing here.' },
    { term: 'Profit-maximizing rule', def: 'Produce the quantity where marginal revenue equals marginal cost (MR = MC); for a competitive firm, where P = MC. If MR > MC produce more; if MC > MR produce less.' },
    { term: 'Shutdown', def: 'A short-run decision not to produce anything during a period; the firm still pays fixed costs. Shut down if P < AVC (TR < VC).' },
    { term: 'Exit', def: 'A long-run decision to leave the market entirely; the firm then has zero costs. Exit if P < ATC (TR < TC). Enter if P > ATC.' },
    { term: 'Sunk cost', def: 'A cost already committed that cannot be recovered; rational decisions ignore it. In the short run, fixed costs are sunk — which is why shutdown compares P only to AVC.' },
    { term: 'Firm’s short-run supply curve', def: 'The portion of its marginal-cost curve above average variable cost; quantity supplied is zero below minimum AVC.' },
    { term: 'Firm’s long-run supply curve', def: 'The portion of its marginal-cost curve above average total cost; the firm exits below minimum ATC.' },
    { term: 'Profit formula', def: 'Profit = (P − ATC) × Q, read at the quantity where P = MC; a loss when P < ATC equals (ATC − P) × Q. On a graph, a rectangle of height P − ATC and width Q.' },
    { term: 'Short-run market supply', def: 'With a fixed number of firms, the horizontal sum of every firm’s MC curve (above AVC): e.g., 1,000 identical firms supply 1,000 × each firm’s quantity at every price.' },
    { term: 'Zero-profit condition', def: 'With free entry and exit, long-run equilibrium has P = minimum ATC and zero economic profit; firms operate at efficient scale.' },
    { term: 'Long-run market supply', def: 'Typically horizontal at minimum ATC — the number of firms, not price, adjusts to demand. May slope upward if a key input is limited or firms have different costs.' },
    { term: 'Economic vs. accounting profit', def: 'Economic profit subtracts all opportunity costs (including the owner’s time and capital); zero economic profit usually means a positive accounting profit — a normal return.' },
    { term: 'Demand increase: short run vs. long run', def: 'Short run: price and quantity rise, firms earn profit. Long run: entry shifts supply right, price falls back to min ATC, quantity and number of firms end up higher, profit returns to zero.' },
    { term: 'Why LR supply is more elastic', def: 'In the long run firms can enter and exit, so quantity can expand without pushing price up along steep MC curves.' }
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
