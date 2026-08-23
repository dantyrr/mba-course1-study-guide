window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'econ-ch2', subject: 'econ', num: 2,
  title: 'Thinking Like an Economist',
  overview: 'Economists work as scientists (building and testing models like the circular-flow diagram and the production possibilities frontier) and as policy advisers (making recommendations). This chapter also covers why economists disagree and a graphing refresher.',
  sections: [
    { title: 'The Economist as Scientist', html:
      '<p>Economists follow the <span class="term">scientific method</span>: devise theories, collect data, and analyze it to verify or refute those theories. Since controlled experiments are usually impractical, economists rely on <em>natural experiments</em> offered by history.</p>' +
      '<p><span class="term">Assumptions</span> simplify a complex world — the art of scientific thinking is choosing which assumptions to make for a given question and time horizon. <span class="term">Economic models</span> are diagrams and equations that omit unnecessary detail, are built on assumptions, and are subject to revision.</p>' },
    { title: 'Model 1: The Circular-Flow Diagram', html:
      '<p>The <span class="term">circular-flow diagram</span> is a visual model showing how dollars flow through markets between <strong>households</strong> and <strong>firms</strong>.</p>' +
      '<ul>' +
      '<li><strong>Firms</strong> produce goods and services using <span class="term">factors of production</span> (inputs: labor, land, capital).</li>' +
      '<li><strong>Households</strong> own the factors of production and consume the goods and services.</li>' +
      '<li>In the <strong>market for goods &amp; services</strong>: households are buyers, firms are sellers.</li>' +
      '<li>In the <strong>market for factors of production</strong>: households are sellers (of labor etc.), firms are buyers.</li>' +
      '</ul>' +
      '<p>One loop carries goods and inputs; the outer loop carries the corresponding flow of dollars (spending, revenue, wages/rent/profit, income).</p>' },
    { title: 'Model 2: The Production Possibilities Frontier (PPF)', html:
      '<p>The <span class="term">production possibilities frontier</span> graphs all combinations of two outputs the economy can produce given its factors of production and technology.</p>' +
      '<ul>' +
      '<li><strong>On the curve</strong> = <em>efficient</em>: producing more of one good requires producing less of the other.</li>' +
      '<li><strong>Inside the curve</strong> = <em>inefficient but possible</em>: resources are idle or misused; both goods could increase.</li>' +
      '<li><strong>Outside the curve</strong> = <em>not feasible</em> with current resources and technology.</li>' +
      '<li>The <strong>slope</strong> of the PPF measures <span class="term">opportunity cost</span>: e.g., if giving up 200 computers yields 100 cars, each car "costs" 2 computers.</li>' +
      '<li>The PPF is usually <strong>bowed outward</strong> because resources are specialized — opportunity cost of a good rises as you produce more of it.</li>' +
      '<li><strong>Technological advance</strong> or more resources shifts the PPF <em>outward</em> = economic growth (more of both goods possible).</li>' +
      '</ul>' },
    { title: 'Micro vs. Macro; Scientist vs. Policy Adviser', html:
      '<ul>' +
      '<li><span class="term">Microeconomics</span>: how households and firms make decisions and interact in markets.</li>' +
      '<li><span class="term">Macroeconomics</span>: economy-wide phenomena — inflation, unemployment, economic growth.</li>' +
      '</ul>' +
      '<p>When explaining causes of events, economists are <strong>scientists</strong>; when recommending policies, they are <strong>advisers</strong>.</p>' +
      '<ul>' +
      '<li><span class="term">Positive statements</span> are <em>descriptive</em> — claims about how the world <em>is</em>; they can be confirmed or refuted with evidence. ("Minimum-wage laws cause unemployment.")</li>' +
      '<li><span class="term">Normative statements</span> are <em>prescriptive</em> — claims about how the world <em>ought to be</em>; evaluating them involves values as well as facts. ("The government should raise the minimum wage.")</li>' +
      '</ul>' },
    { title: 'Why Economists Disagree', html:
      '<ul>' +
      '<li><strong>Different scientific judgments</strong> — different hunches about which theories are valid or the size of key parameters.</li>' +
      '<li><strong>Different values</strong> — different normative views about what policy should accomplish.</li>' +
      '<li><strong>Perception vs. reality</strong> — economists actually agree more than the public thinks; disliked policies often persist because of political realities, not divided expert opinion.</li>' +
      '</ul>' },
    { title: 'Appendix: Graphing Refresher', html:
      '<ul>' +
      '<li>Single-variable graphs: pie chart, bar graph, time-series graph.</li>' +
      '<li>Two variables: coordinate system / scatterplots; ordered pairs (x, y).</li>' +
      '<li><strong>Negatively related</strong> variables → downward-sloping curve (like a demand curve); <strong>positively related</strong> → upward-sloping.</li>' +
      '<li><span class="term">Slope</span> = change in y ÷ change in x ("rise over run"). Flat line ≈ small slope; vertical line = infinite slope.</li>' +
      '<li>Beware <span class="term">omitted variables</span> (lighters ↔ cancer, missing: smoking) and <span class="term">reverse causality</span> (more police ↔ more crime: which causes which?).</li>' +
      '</ul>' }
  ],
  terms: [
    { term: 'Scientific method', def: 'The development and testing of theories about how the world works, using observation and data.' },
    { term: 'Economic model', def: 'A simplified representation of reality (diagrams and equations) built on assumptions, used to understand the economy.' },
    { term: 'Circular-flow diagram', def: 'A visual model showing how dollars flow through markets between households and firms.' },
    { term: 'Factors of production', def: 'Inputs used to produce goods and services — labor, land, and capital; owned by households, used by firms.' },
    { term: 'Production possibilities frontier (PPF)', def: 'A graph showing the combinations of output the economy can possibly produce given available factors of production and technology.' },
    { term: 'Efficient point (on PPF)', def: 'A point on the frontier: the economy is getting all it can from its resources; producing more of one good requires less of another.' },
    { term: 'Inefficient point (inside PPF)', def: 'A feasible output combination where the economy could produce more of both goods (resources idle or misallocated).' },
    { term: 'Opportunity cost (PPF)', def: 'What is given up of one good to produce more of another; equals the slope of the PPF.' },
    { term: 'Bowed-outward PPF', def: 'Shape reflecting specialized resources: the opportunity cost of a good rises as more of it is produced.' },
    { term: 'Microeconomics', def: 'The study of how households and firms make decisions and how they interact in markets.' },
    { term: 'Macroeconomics', def: 'The study of economy-wide phenomena, including inflation, unemployment, and economic growth.' },
    { term: 'Positive statement', def: 'A descriptive claim about how the world is; can be confirmed or refuted with evidence.' },
    { term: 'Normative statement', def: 'A prescriptive claim about how the world ought to be; involves values as well as facts.' },
    { term: 'Slope', def: 'The ratio of the change in y to the change in x between two points on a line ("rise over run").' },
    { term: 'Omitted variable', def: 'A missing factor that creates a misleading association between two variables (e.g., smoking behind the lighters–cancer link).' },
    { term: 'Reverse causality', def: 'Concluding A causes B when in fact B causes A (e.g., police concentration and crime rates).' }
  ],
  quiz: [
    { q: 'In the circular-flow diagram, households are SELLERS in the…',
      options: ['market for goods and services', 'market for factors of production', 'financial market', 'international market'],
      answer: 1, explain: 'Households own the factors of production (like their labor) and sell them to firms; firms sell goods and services back to households.' },
    { q: 'A point INSIDE the production possibilities frontier is…',
      options: ['efficient', 'infeasible', 'possible but inefficient', 'only reachable with new technology'],
      answer: 2, explain: 'Inside the PPF the economy produces less than it could — eliminating the inefficiency lets it produce more of both goods.' },
    { q: 'Moving along a PPF from one efficient point to another, an economy gains 100 cars and gives up 200 computers. The opportunity cost of one car is…',
      options: ['2 computers', '½ computer', '200 computers', '100 computers'],
      answer: 0, explain: 'Opportunity cost = what is given up ÷ what is gained = 200/100 = 2 computers per car, which equals the slope of the PPF.' },
    { q: 'A PPF is bowed outward because…',
      options: ['technology always improves over time', 'resources are specialized, so opportunity costs rise with production', 'prices rise with inflation', 'consumers prefer variety'],
      answer: 1, explain: 'As the economy produces more of a good, it must use resources increasingly less suited to it, raising the opportunity cost.' },
    { q: 'A technological advance in the computer industry causes the PPF to…',
      options: ['shift inward', 'become a straight line', 'shift outward', 'stay unchanged'],
      answer: 2, explain: 'Better technology expands what the economy can produce — an outward shift, allowing more of both goods (economic growth).' },
    { q: 'Which is a MACROeconomic topic?',
      options: ['how a family decides how much to save', 'the effect of rent control on housing in one city', 'the national unemployment rate', 'a firm’s pricing decision'],
      answer: 2, explain: 'Macroeconomics studies economy-wide phenomena — inflation, unemployment, growth. The others are micro topics.' },
    { q: '"The government SHOULD raise the minimum wage" is a…',
      options: ['positive statement', 'normative statement', 'scientific statement', 'testable hypothesis'],
      answer: 1, explain: '"Should" signals a value judgment about how the world ought to be — a normative (prescriptive) statement.' },
    { q: '"Minimum-wage laws cause unemployment" is best classified as…',
      options: ['normative, because it is about policy', 'positive, because it can be tested against evidence', 'normative, because economists disagree about it', 'neither positive nor normative'],
      answer: 1, explain: 'It is a descriptive claim about how the world works. Disagreement doesn’t make a claim normative — testability against evidence makes it positive.' },
    { q: 'Economists disagree about policy mainly because of…',
      options: ['different scientific judgments and different values', 'a lack of data in economics', 'government pressure on researchers', 'the impossibility of testing theories'],
      answer: 0, explain: 'They may differ on which positive theories are valid (science) and on what policy should aim for (values).' },
    { q: 'A graph shows that cities with more police officers have more crime. Concluding "police cause crime" is likely an error of…',
      options: ['omitted variable bias only', 'reverse causality', 'slope miscalculation', 'sampling'],
      answer: 1, explain: 'It’s more plausible that high-crime cities hire more police — the causation likely runs the other way (reverse causality).' }
  ]
});
