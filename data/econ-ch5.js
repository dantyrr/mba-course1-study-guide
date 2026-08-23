window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'econ-ch5', subject: 'econ', num: 5,
  title: 'Elasticity and Its Application',
  overview: 'Elasticity measures how strongly buyers and sellers respond to changing conditions. Master the price elasticity of demand (and its link to total revenue), income and cross-price elasticities, the elasticity of supply, and three classic applications.',
  sections: [
    { title: 'Price Elasticity of Demand', html:
      '<p><span class="term">Elasticity</span> measures responsiveness of quantity demanded or supplied to a change in a determinant. <span class="term">Price elasticity of demand</span> measures how much quantity demanded responds to a price change:</p>' +
      '<div class="formula">Price elasticity of demand = %Δ quantity demanded ÷ %Δ price&nbsp;&nbsp;(use absolute value)</div>' +
      '<p><strong>Midpoint method:</strong> divide the change by the <em>average</em> of the initial and final values (not the initial value) so the elasticity is the same in both directions:</p>' +
      '<div class="formula">%Δ = (Q₂ − Q₁) ÷ [(Q₂ + Q₁)/2] × 100</div>' +
      '<p><strong>Worked example (iPhones):</strong> P: $400→$600, Q: 10,600→8,400.<br>%ΔP = 200/500 = 40%. %ΔQ = −2,200/9,500 ≈ −23.2%.<br>Elasticity ≈ 23.2/40 = <strong>0.58</strong> → inelastic.</p>' },
    { title: 'What Makes Demand More Elastic?', html:
      '<ul>' +
      '<li><strong>Close substitutes available</strong> → more elastic (easy to switch).</li>' +
      '<li><strong>Luxuries</strong> → more elastic; <strong>necessities</strong> (like insulin) → inelastic.</li>' +
      '<li><strong>Narrowly defined markets</strong> (ice cream vs. "food") → more elastic.</li>' +
      '<li><strong>Longer time horizons</strong> → more elastic (people find alternatives over time).</li>' +
      '</ul>' +
      '<div class="tablewrap"><table><tr><th>Classification</th><th>Elasticity value</th><th>Curve shape</th></tr>' +
      '<tr><td>Perfectly inelastic</td><td>0</td><td>Vertical</td></tr>' +
      '<tr><td>Inelastic</td><td>&lt; 1</td><td>Steep</td></tr>' +
      '<tr><td>Unit elastic</td><td>= 1</td><td>—</td></tr>' +
      '<tr><td>Elastic</td><td>&gt; 1</td><td>Flat</td></tr>' +
      '<tr><td>Perfectly elastic</td><td>∞</td><td>Horizontal</td></tr></table></div>' },
    { title: 'Elasticity and Total Revenue', html:
      '<p><span class="term">Total revenue</span> = P × Q (amount paid by buyers = received by sellers).</p>' +
      '<ul>' +
      '<li><strong>Inelastic demand:</strong> price and total revenue move in the <em>same</em> direction (price ↑ → revenue ↑).</li>' +
      '<li><strong>Elastic demand:</strong> price and total revenue move in <em>opposite</em> directions (price ↑ → revenue ↓).</li>' +
      '<li><strong>Unit elastic:</strong> a price change leaves total revenue unchanged.</li>' +
      '</ul>' +
      '<div class="tip">💡 Along a <strong>linear</strong> demand curve, the slope is constant but the elasticity is NOT: demand is elastic at high-price/low-quantity points and inelastic at low-price/high-quantity points.</div>' },
    { title: 'Other Demand Elasticities', html:
      '<ul>' +
      '<li><span class="term">Income elasticity of demand</span> = %ΔQ ÷ %Δincome. <strong>Normal goods: positive</strong>; <strong>inferior goods: negative</strong>.</li>' +
      '<li><span class="term">Cross-price elasticity of demand</span> = %ΔQ of good 1 ÷ %Δprice of good 2. <strong>Substitutes: positive</strong>; <strong>complements: negative</strong>.</li>' +
      '</ul>' },
    { title: 'Price Elasticity of Supply', html:
      '<p><span class="term">Price elasticity of supply</span> measures how much quantity supplied responds to a price change (%ΔQs ÷ %ΔP, midpoint method). Key determinant: sellers’ <strong>flexibility to change production</strong>.</p>' +
      '<ul>' +
      '<li><strong>Short run:</strong> supply is relatively inelastic (hard to change capacity quickly).</li>' +
      '<li><strong>Long run:</strong> supply is more elastic.</li>' +
      '<li>Supply can be highly elastic at low output (idle capacity) and very inelastic near maximum capacity.</li>' +
      '</ul>' },
    { title: 'Three Classic Applications', html:
      '<ul>' +
      '<li><strong>Good news for farming can be bad news for farmers:</strong> a better wheat hybrid shifts supply right; because food demand is <em>inelastic</em>, price falls proportionally more than quantity rises, so farm revenue <em>falls</em> (e.g., $3×100 = $300 → $2×110 = $220).</li>' +
      '<li><strong>Why OPEC failed to keep oil prices high:</strong> in the short run supply and demand are inelastic → supply cuts spike prices. In the long run both are elastic (drilling elsewhere, conservation) → the same cut barely moves price.</li>' +
      '<li><strong>Drug interdiction and drug-related crime:</strong> interdiction shifts supply left; with inelastic (addict) demand, price rises and total spending <em>rises</em> — potentially increasing crime in the short run. Over longer horizons demand is more elastic (less experimentation), so interdiction is more effective.</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Elasticity', def: 'A measure of the responsiveness of quantity demanded or supplied to a change in one of its determinants.' },
    { term: 'Price elasticity of demand', def: 'Percentage change in quantity demanded divided by percentage change in price (absolute value).' },
    { term: 'Midpoint method', def: 'Computing percentage changes by dividing the change by the average of the initial and final values, so elasticity is the same in both directions.' },
    { term: 'Elastic demand', def: 'Elasticity greater than 1: quantity demanded responds substantially to price changes; relatively flat curve.' },
    { term: 'Inelastic demand', def: 'Elasticity less than 1: quantity demanded responds only slightly to price changes; relatively steep curve.' },
    { term: 'Unit elasticity', def: 'Elasticity exactly equal to 1: total revenue is unchanged when price changes.' },
    { term: 'Perfectly inelastic demand', def: 'Elasticity = 0; the demand curve is vertical — quantity doesn’t respond to price at all.' },
    { term: 'Perfectly elastic demand', def: 'Elasticity = infinity; the demand curve is horizontal.' },
    { term: 'Total revenue', def: 'Price × quantity sold: the amount paid by buyers and received by sellers.' },
    { term: 'Income elasticity of demand', def: '%Δ quantity demanded ÷ %Δ income. Positive for normal goods, negative for inferior goods.' },
    { term: 'Cross-price elasticity of demand', def: '%Δ quantity demanded of one good ÷ %Δ price of another. Positive for substitutes, negative for complements.' },
    { term: 'Price elasticity of supply', def: 'Percentage change in quantity supplied divided by percentage change in price.' },
    { term: 'Determinants of demand elasticity', def: 'Close substitutes, luxury vs. necessity, narrow vs. broad market definition, and time horizon.' },
    { term: 'Time horizon and supply', def: 'Supply is more elastic in the long run than in the short run because producers can adjust capacity.' }
  ],
  quiz: [
    { q: 'Price rises from $400 to $600 (midpoint %Δ = 40%) and quantity demanded falls from 10,600 to 8,400 (midpoint %Δ ≈ 23.2%). Price elasticity of demand ≈…',
      options: ['0.58 — inelastic', '1.72 — elastic', '0.58 — elastic', '2.20 — elastic'],
      answer: 0, explain: 'Elasticity = 23.2 ÷ 40 ≈ 0.58. Since 0.58 < 1, demand is inelastic over this range.' },
    { q: 'Why use the midpoint method for elasticity?',
      options: ['it always gives larger elasticities', 'it gives the same answer regardless of the direction of the change', 'it eliminates the need for percentages', 'it is required for supply but not demand'],
      answer: 1, explain: 'Dividing by the average of initial and final values makes the computed elasticity identical whether price rises or falls between the two points.' },
    { q: 'Demand tends to be MORE elastic when…',
      options: ['the good is a necessity', 'the market is broadly defined', 'the time horizon is longer', 'there are few substitutes'],
      answer: 2, explain: 'Over longer periods buyers can find alternatives and adjust behavior, so demand becomes more elastic. The other three all make demand less elastic.' },
    { q: 'A perfectly inelastic demand curve is…',
      options: ['horizontal', 'vertical', 'upward sloping', 'U-shaped'],
      answer: 1, explain: 'Elasticity = 0 means quantity demanded doesn’t change at any price — a vertical line.' },
    { q: 'Pharmacies raise insulin prices 10%. Since insulin is a necessity with inelastic demand, total spending on insulin will…',
      options: ['fall', 'rise', 'stay exactly the same', 'fall to zero'],
      answer: 1, explain: 'With inelastic demand, quantity falls less than 10%, so total revenue (P×Q) rises — price and revenue move together when demand is inelastic.' },
    { q: 'A fare war cuts luxury cruise prices 20%. Demand for luxury cruises is elastic, so cruise lines’ total revenue will…',
      options: ['fall', 'rise', 'be unchanged', 'become negative'],
      answer: 1, explain: 'With elastic demand, quantity rises more than 20%, so total revenue rises when price falls — price and revenue move in opposite directions.' },
    { q: 'Along a linear (straight-line) demand curve…',
      options: ['elasticity is constant everywhere', 'slope changes but elasticity is constant', 'demand is elastic at high prices and inelastic at low prices', 'demand is inelastic at high prices and elastic at low prices'],
      answer: 2, explain: 'Slope is constant but elasticity varies: high-price/low-quantity points are elastic; low-price/high-quantity points are inelastic.' },
    { q: 'The cross-price elasticity of demand between two goods is negative. The goods are…',
      options: ['substitutes', 'complements', 'inferior goods', 'unrelated'],
      answer: 1, explain: 'Complements are used together: when one gets pricier, quantity demanded of the other falls — a negative cross-price elasticity.' },
    { q: 'A good has a negative income elasticity of demand. It is…',
      options: ['a normal good', 'an inferior good', 'a luxury', 'a complement'],
      answer: 1, explain: 'Higher income lowers demand for inferior goods, so their income elasticity is negative. Normal goods have positive income elasticity.' },
    { q: 'A new wheat hybrid raises yields 20%, yet farmers’ revenue falls. Why?',
      options: ['demand for wheat is elastic', 'demand for wheat is inelastic, so price falls proportionally more than quantity rises', 'the supply curve shifted left', 'wheat is an inferior good'],
      answer: 1, explain: 'Supply shifts right, price drops. Because food demand is inelastic, the % price drop exceeds the % quantity gain — total revenue (P×Q) falls.' },
    { q: 'OPEC cuts oil production. The price impact is large in the short run but small in the long run because…',
      options: ['demand and supply are more elastic in the long run', 'demand and supply are less elastic in the long run', 'oil is an inferior good', 'total revenue is constant over time'],
      answer: 0, explain: 'Over time, producers outside OPEC expand and consumers conserve/switch — both curves become more elastic, so the same supply cut moves price much less.' }
  ]
});
