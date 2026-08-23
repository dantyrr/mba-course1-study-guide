window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'econ-ch4', subject: 'econ', num: 4,
  title: 'The Market Forces of Supply and Demand',
  overview: 'Supply and demand are the two forces that make market economies work. This chapter builds the demand curve, the supply curve, and shows how they interact to determine equilibrium price and quantity — and how shifts in either curve change that equilibrium.',
  sections: [
    { title: 'Markets and Competition', html:
      '<p>A <span class="term">market</span> is a group of buyers and sellers of a particular good or service. Buyers determine <strong>demand</strong>; sellers determine <strong>supply</strong>.</p>' +
      '<p>A <span class="term">competitive market</span> has so many buyers and sellers that each has negligible impact on the price. In a <strong>perfectly competitive</strong> market: (1) goods are identical, and (2) buyers and sellers are so numerous everyone is a <span class="term">price taker</span>. At the other extreme, a <span class="term">monopoly</span> is a single seller who sets the price; most markets fall in between.</p>' },
    { title: 'Demand', html:
      '<p><span class="term">Quantity demanded</span>: the amount buyers are willing and able to purchase. The <span class="term">law of demand</span>: other things equal, when price rises, quantity demanded falls (and vice versa).</p>' +
      '<ul>' +
      '<li><span class="term">Demand schedule</span>: table of price vs. quantity demanded. <span class="term">Demand curve</span>: its graph — downward-sloping.</li>' +
      '<li><strong>Market demand</strong> = sum of all individual demands at each price (add curves <em>horizontally</em>).</li>' +
      '</ul>' +
      '<p><strong>Movement vs. shift:</strong> a change in the good’s <em>own price</em> moves you <em>along</em> the curve; a change in anything else <em>shifts</em> the whole curve.</p>' +
      '<div class="tablewrap"><table><tr><th>Shifter</th><th>Effect on demand</th></tr>' +
      '<tr><td>Income ↑ (normal good)</td><td>Demand ↑ (right shift)</td></tr>' +
      '<tr><td>Income ↑ (inferior good)</td><td>Demand ↓ (left shift)</td></tr>' +
      '<tr><td>Price of a substitute ↑</td><td>Demand ↑ for this good</td></tr>' +
      '<tr><td>Price of a complement ↑</td><td>Demand ↓ for this good</td></tr>' +
      '<tr><td>Tastes shift toward the good</td><td>Demand ↑</td></tr>' +
      '<tr><td>Expected future price/income ↑</td><td>Demand ↑ today</td></tr>' +
      '<tr><td>Number of buyers ↑</td><td>Demand ↑</td></tr></table></div>' },
    { title: 'Supply', html:
      '<p><span class="term">Quantity supplied</span>: the amount sellers are willing and able to sell. The <span class="term">law of supply</span>: other things equal, when price rises, quantity supplied rises.</p>' +
      '<ul>' +
      '<li><span class="term">Supply schedule / supply curve</span>: upward-sloping relationship between price and quantity supplied.</li>' +
      '<li><strong>Market supply</strong> = horizontal sum of individual supplies.</li>' +
      '</ul>' +
      '<div class="tablewrap"><table><tr><th>Shifter</th><th>Effect on supply</th></tr>' +
      '<tr><td>Input prices ↑</td><td>Supply ↓ (left shift)</td></tr>' +
      '<tr><td>Technology improves</td><td>Supply ↑ (right shift)</td></tr>' +
      '<tr><td>Expected future price ↑</td><td>Supply ↓ today</td></tr>' +
      '<tr><td>Number of sellers ↑</td><td>Supply ↑</td></tr></table></div>' +
      '<div class="tip">💡 Again: the good’s own price causes a <em>movement along</em> the supply curve, never a shift of it.</div>' },
    { title: 'Equilibrium', html:
      '<p><span class="term">Equilibrium</span> is where the supply and demand curves intersect: quantity buyers want to buy exactly equals quantity sellers want to sell. That price is the <span class="term">equilibrium price</span>; that quantity is the <span class="term">equilibrium quantity</span>.</p>' +
      '<ul>' +
      '<li><span class="term">Surplus</span> (price above equilibrium): quantity supplied &gt; quantity demanded → sellers cut prices → move down toward equilibrium.</li>' +
      '<li><span class="term">Shortage</span> (price below equilibrium): quantity demanded &gt; quantity supplied → sellers raise prices → move up toward equilibrium.</li>' +
      '</ul>' +
      '<p>The <span class="term">law of supply and demand</span>: the price of any good adjusts to bring quantity supplied and demanded into balance. Surpluses and shortages in well-functioning markets are temporary.</p>' },
    { title: 'Three Steps for Analyzing Changes in Equilibrium', html:
      '<ol>' +
      '<li>Decide whether the event shifts the <strong>supply</strong> curve, the <strong>demand</strong> curve, or <strong>both</strong>.</li>' +
      '<li>Decide the <strong>direction</strong> of the shift (left or right).</li>' +
      '<li>Use the supply-and-demand diagram to compare the <strong>new equilibrium</strong> with the old one.</li>' +
      '</ol>' +
      '<div class="tablewrap"><table><tr><th>Event</th><th>Price</th><th>Quantity</th></tr>' +
      '<tr><td>Demand ↑</td><td>↑</td><td>↑</td></tr>' +
      '<tr><td>Demand ↓</td><td>↓</td><td>↓</td></tr>' +
      '<tr><td>Supply ↑</td><td>↓</td><td>↑</td></tr>' +
      '<tr><td>Supply ↓</td><td>↑</td><td>↓</td></tr>' +
      '<tr><td>Demand ↑ &amp; Supply ↓</td><td>↑</td><td>ambiguous</td></tr>' +
      '<tr><td>Demand ↓ &amp; Supply ↑</td><td>↓</td><td>ambiguous</td></tr>' +
      '<tr><td>Both ↑</td><td>ambiguous</td><td>↑</td></tr>' +
      '<tr><td>Both ↓</td><td>ambiguous</td><td>↓</td></tr></table></div>' +
      '<div class="tip">💡 When both curves shift, one of price or quantity is always <em>ambiguous</em> — it depends on the relative size of the shifts.</div>' },
    { title: 'Conclusion: Prices Allocate Resources', html:
      '<p>In market economies, <strong>prices are signals</strong> that guide decisions and allocate scarce resources. For every good, the price adjusts to balance supply and demand, determining how much buyers consume and sellers produce.</p>' }
  ],
  terms: [
    { term: 'Market', def: 'A group of buyers and sellers of a particular good or service.' },
    { term: 'Competitive market', def: 'A market with many buyers and sellers, each with negligible impact on the market price.' },
    { term: 'Price taker', def: 'A buyer or seller in a perfectly competitive market who must accept the price the market determines.' },
    { term: 'Monopoly', def: 'A market with only one seller, who sets the price.' },
    { term: 'Quantity demanded', def: 'The amount of a good that buyers are willing and able to purchase.' },
    { term: 'Law of demand', def: 'Other things equal, when the price of a good rises, the quantity demanded falls.' },
    { term: 'Demand schedule / demand curve', def: 'A table / downward-sloping graph showing the relationship between price and quantity demanded.' },
    { term: 'Normal good', def: 'A good for which an increase in income leads to an increase in demand.' },
    { term: 'Inferior good', def: 'A good for which an increase in income leads to a decrease in demand.' },
    { term: 'Substitutes', def: 'Two goods used in place of each other: a price increase for one raises demand for the other.' },
    { term: 'Complements', def: 'Two goods used together: a price increase for one lowers demand for the other.' },
    { term: 'Quantity supplied', def: 'The amount of a good that sellers are willing and able to sell.' },
    { term: 'Law of supply', def: 'Other things equal, when the price of a good rises, the quantity supplied rises.' },
    { term: 'Equilibrium price', def: 'The price that balances quantity supplied and quantity demanded — where the curves intersect.' },
    { term: 'Surplus', def: 'Quantity supplied exceeds quantity demanded (price above equilibrium); pushes prices down.' },
    { term: 'Shortage', def: 'Quantity demanded exceeds quantity supplied (price below equilibrium); pushes prices up.' },
    { term: 'Law of supply and demand', def: 'The price of any good adjusts to bring quantity supplied and quantity demanded into balance.' },
    { term: 'Change in demand vs. change in quantity demanded', def: 'A shift of the whole demand curve (caused by non-price factors) vs. a movement along a fixed curve (caused by the good’s own price).' }
  ],
  quiz: [
    { q: 'In a perfectly competitive market, buyers and sellers are "price takers" because…',
      options: ['the government sets prices', 'each is too small to influence the market price', 'prices never change', 'sellers collude on prices'],
      answer: 1, explain: 'With numerous buyers and sellers trading identical products, no single participant can move the market price.' },
    { q: 'The price of orange juice falls. For orange juice, this causes…',
      options: ['a rightward shift of the demand curve', 'a leftward shift of the demand curve', 'a movement along the demand curve (quantity demanded rises)', 'a shift of the supply curve'],
      answer: 2, explain: 'A good’s own price causes movement ALONG its demand curve — an increase in quantity demanded, not a change in demand.' },
    { q: 'Apple juice and orange juice are substitutes. If the price of apple juice rises, the demand for orange juice will…',
      options: ['shift right (increase)', 'shift left (decrease)', 'stay the same, quantity moves along the curve', 'become perfectly inelastic'],
      answer: 0, explain: 'When a substitute gets pricier, buyers switch to this good — demand for orange juice increases (shifts right).' },
    { q: 'Ramen is an inferior good for a student. When the student’s income rises after graduation, their demand for ramen…',
      options: ['increases', 'decreases', 'is unchanged', 'becomes a substitute'],
      answer: 1, explain: 'For inferior goods, higher income → lower demand; consumers shift toward preferred alternatives.' },
    { q: 'A technological advance lowers the cost of producing apple juice. In the apple juice market…',
      options: ['supply shifts right', 'supply shifts left', 'quantity supplied moves along the curve', 'demand shifts right'],
      answer: 0, explain: 'Better technology means sellers supply more at every price — a rightward shift of the supply curve.' },
    { q: 'At the current market price there is a surplus of a good. We would expect…',
      options: ['buyers to bid the price up', 'sellers to cut the price toward equilibrium', 'the government to fix the price', 'demand to shift right automatically'],
      answer: 1, explain: 'Surplus = quantity supplied > quantity demanded. Sellers cut prices, raising quantity demanded and lowering quantity supplied until equilibrium.' },
    { q: 'A hot summer increases demand for ice cream. In the ice cream market, equilibrium price and quantity will…',
      options: ['both rise', 'both fall', 'price rises, quantity falls', 'price falls, quantity rises'],
      answer: 0, explain: 'A rightward demand shift along a fixed supply curve raises both the equilibrium price and quantity.' },
    { q: 'The price of sugar (an input to ice cream) rises. In the ice cream market…',
      options: ['supply shifts left; price rises and quantity falls', 'supply shifts right; price falls and quantity rises', 'demand shifts left; price and quantity fall', 'nothing changes until demand shifts'],
      answer: 0, explain: 'Higher input prices reduce supply. The supply curve shifts left: equilibrium price rises, equilibrium quantity falls.' },
    { q: 'Demand increases AND supply decreases at the same time. What happens?',
      options: ['price rises; effect on quantity is ambiguous', 'quantity rises; effect on price is ambiguous', 'both price and quantity definitely rise', 'both price and quantity definitely fall'],
      answer: 0, explain: 'Both shifts push price up, so price definitely rises. They push quantity in opposite directions, so quantity depends on which shift is larger.' },
    { q: 'A typhoon destroys much of the apple crop. Even someone who never eats apples may be affected because…',
      options: ['prices in related markets (like other juices) adjust as buyers substitute', 'the government will ration all fruit', 'the demand for apples will rise', 'supply shocks never spread across markets'],
      answer: 0, explain: 'The apple supply shock raises apple prices; buyers shift to substitutes, raising demand and prices in related markets — prices link markets together.' }
  ]
});
