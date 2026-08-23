window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'acct-ch1', subject: 'acct', num: 1,
  title: 'Introduction to Accounting and Business',
  overview: 'What a business is, the role of accounting and ethics, GAAP and its assumptions and principles, the accounting equation (Assets = Liabilities + Owner’s Equity), recording transactions, and the four financial statements.',
  sections: [
    { title: 'Business & the Role of Accounting', html:
      '<p>A <span class="term">business</span> assembles inputs (materials, labor) to provide goods or services to customers. <span class="term">Profit</span> = amounts received from customers − amounts paid for inputs.</p>' +
      '<p><strong>Three types of businesses:</strong> <span class="term">service</span> (e.g., an airline), <span class="term">retail</span> (sells products purchased from others — e.g., Walmart, Starbucks), <span class="term">manufacturing</span> (converts inputs into products — e.g., Ford).</p>' +
      '<p><strong>Three types of business activities:</strong> <span class="term">operating</span> (generating revenue from customers), <span class="term">investing</span> (acquiring long-term assets), <span class="term">financing</span> (obtaining funds to start/expand).</p>' +
      '<p><span class="term">Accounting</span> is an information system providing reports about a business’s economic activities and condition. <strong>Managerial accounting</strong> serves internal users (managers); <strong>financial accounting</strong> serves external users (investors, creditors). <span class="term">Ethics</span> — moral principles guiding conduct — are essential so the information is trustworthy; frauds typically stem from failures of individual character or a culture of greed and ethical indifference.</p>' },
    { title: 'GAAP: Standards, Characteristics, Assumptions & Principles', html:
      '<p><span class="term">GAAP</span> (generally accepted accounting principles) is the collection of standards, principles, and assumptions defining how financial information is reported. The <span class="term">FASB</span> sets the standards (in the Accounting Standards Codification); the <span class="term">SEC</span> has ultimate authority for public companies.</p>' +
      '<p><strong>Two key characteristics of useful information:</strong> <span class="term">relevance</span> (can impact decisions) and <span class="term">faithful representation</span> (accurately reflects economic reality).</p>' +
      '<p><strong>Four assumptions:</strong></p><ul>' +
      '<li><span class="term">Monetary unit</span> — reports expressed in a single currency.</li>' +
      '<li><span class="term">Time period</span> — activities reported over regular periods; the annual period is the <span class="term">fiscal year</span> (a <em>natural business year</em> ends at the low point of the operating cycle).</li>' +
      '<li><span class="term">Business entity</span> — reports include only the business’s own activities, separate from the owner’s.</li>' +
      '<li><span class="term">Going concern</span> — assume the business will continue operating.</li></ul>' +
      '<p><strong>Four principles:</strong> <span class="term">measurement</span> (record at objectively determined amounts — arm’s-length transaction prices), <span class="term">historical cost</span> (keep items at initial transaction price), <span class="term">revenue recognition</span> (record revenue when earned), <span class="term">expense recognition</span> (record expenses in the same period as the revenue they generate — matching).</p>' +
      '<p><strong>Forms of entity:</strong> proprietorship, partnership, corporation, LLC. Most large companies are corporations (access to capital, limited liability).</p>' },
    { title: 'The Accounting Equation', html:
      '<div class="formula">Assets = Liabilities + Owner’s Equity</div>' +
      '<ul>' +
      '<li><span class="term">Assets</span>: resources owned by the business (cash, supplies, land, receivables).</li>' +
      '<li><span class="term">Liabilities</span>: creditors’ claims — obligations to transfer assets to third parties (accounts payable).</li>' +
      '<li><span class="term">Owner’s equity</span>: the owner’s residual claim after liabilities. Liabilities are listed first because creditors have first rights to assets.</li>' +
      '</ul>' +
      '<p>Every <span class="term">business transaction</span> — an economic event that changes financial condition — can be stated as changes in the equation’s elements, and <strong>the two sides always stay equal</strong>.</p>' },
    { title: 'How Transactions Affect the Equation', html:
      '<div class="tablewrap"><table><tr><th>Transaction</th><th>Effect</th></tr>' +
      '<tr><td>Owner invests $25,000 cash</td><td>Cash ↑, Capital ↑</td></tr>' +
      '<tr><td>Buy land for cash</td><td>Land ↑, Cash ↓ (total assets unchanged)</td></tr>' +
      '<tr><td>Buy supplies on account</td><td>Supplies ↑, Accounts Payable ↑</td></tr>' +
      '<tr><td>Earn fees, receive cash</td><td>Cash ↑, Owner’s Equity ↑ (revenue: Fees Earned)</td></tr>' +
      '<tr><td>Pay expenses</td><td>Cash ↓, Owner’s Equity ↓ (expenses)</td></tr>' +
      '<tr><td>Pay creditor on account</td><td>Cash ↓, Accounts Payable ↓</td></tr>' +
      '<tr><td>Supplies used up</td><td>Supplies ↓, Owner’s Equity ↓ (Supplies Expense)</td></tr>' +
      '<tr><td>Owner withdraws cash</td><td>Cash ↓, Owner’s Equity ↓ (Drawing — NOT an expense)</td></tr></table></div>' +
      '<p>Owner’s equity is <strong>increased</strong> by owner investments and revenues; <strong>decreased</strong> by withdrawals and expenses. Purchases on account create an <span class="term">account payable</span>; supplies to be used later are <span class="term">prepaid expenses</span> (assets). Revenue earned on credit creates an <span class="term">account receivable</span>.</p>' },
    { title: 'The Four Financial Statements', html:
      '<div class="tablewrap"><table><tr><th>Statement</th><th>Reports</th><th>Time frame</th></tr>' +
      '<tr><td><span class="term">Income statement</span></td><td>Revenues − expenses = net income (or net loss)</td><td>Period of time</td></tr>' +
      '<tr><td><span class="term">Statement of owner’s equity</span></td><td>Changes in capital: beginning balance + investments + net income − withdrawals</td><td>Period of time</td></tr>' +
      '<tr><td><span class="term">Balance sheet</span></td><td>Assets, liabilities, owner’s equity</td><td>Point in time</td></tr>' +
      '<tr><td><span class="term">Statement of cash flows</span></td><td>Cash receipts/payments by operating, investing, financing activities</td><td>Period of time</td></tr></table></div>' +
      '<p><strong>Prepare in order:</strong> income statement → statement of owner’s equity → balance sheet → statement of cash flows, because each feeds the next (net income flows to owner’s equity; ending capital appears on the balance sheet; the balance sheet cash equals ending cash on the cash-flow statement).</p>' },
    { title: 'Analysis: Ratio of Liabilities to Owner’s Equity', html:
      '<div class="formula">Ratio = Total liabilities ÷ Total owner’s (stockholders’) equity</div>' +
      '<p>The <strong>lower</strong> the ratio, the better the company can withstand poor business conditions and pay creditors. Ratios below 1.0 are generally considered favorable.</p>' }
  ],
  terms: [
    { term: 'Business', def: 'An organization that assembles inputs (materials, labor) to provide goods or services (outputs) to customers.' },
    { term: 'Profit', def: 'The difference between amounts received from customers and amounts paid for the inputs used to provide goods or services.' },
    { term: 'Accounting', def: 'An information system that provides reports to users about a business’s economic activities and condition.' },
    { term: 'Managerial vs. financial accounting', def: 'Managerial accounting serves internal users (managers); financial accounting serves external users (investors, creditors).' },
    { term: 'GAAP', def: 'Generally accepted accounting principles — the standards, principles, and assumptions defining how financial information is reported; set by the FASB under SEC authority.' },
    { term: 'Relevance & faithful representation', def: 'The two key characteristics of financial reports: information that can impact decisions and that accurately reflects economic reality.' },
    { term: 'Business entity assumption', def: 'Financial reports include only data directly related to the business’s activities — separate from the owner’s personal affairs.' },
    { term: 'Going concern assumption', def: 'The assumption that a business will continue operating indefinitely.' },
    { term: 'Fiscal year', def: 'The annual accounting period a company adopts; a natural business year ends at the lowest point of the operating cycle.' },
    { term: 'Historical cost principle', def: 'Recording and keeping an item at its initial (arm’s-length) transaction price.' },
    { term: 'Revenue recognition principle', def: 'Revenue is recorded when it is earned — when services are performed or goods delivered.' },
    { term: 'Expense recognition (matching) principle', def: 'Expenses are recorded in the same period as the revenue they helped generate.' },
    { term: 'Accounting equation', def: 'Assets = Liabilities + Owner’s Equity.' },
    { term: 'Assets', def: 'Resources owned by the business — rights to economic benefits (cash, receivables, supplies, land).' },
    { term: 'Liabilities', def: 'Obligations to transfer assets to third parties — creditors’ claims (e.g., accounts payable).' },
    { term: 'Owner’s equity', def: 'The owner’s right to the assets after all liabilities are paid; increased by investments and revenues, decreased by withdrawals and expenses.' },
    { term: 'Account payable', def: 'The liability created by a purchase on account.' },
    { term: 'Account receivable', def: 'An asset: amounts owed by customers for services performed or goods sold on credit.' },
    { term: 'Prepaid expenses', def: 'Items such as supplies purchased for future use — recorded as assets until consumed.' },
    { term: 'Drawing (withdrawal)', def: 'A distribution of assets to the owner for personal use; reduces owner’s equity but is NOT an expense.' },
    { term: 'Net income', def: 'The excess of revenues over expenses for a period (a net loss if expenses exceed revenues).' },
    { term: 'Ratio of liabilities to owner’s equity', def: 'Total liabilities ÷ total equity; lower is safer — better able to withstand poor conditions and pay creditors.' }
  ],
  quiz: [
    { q: 'Which of the following is a SERVICE business?',
      options: ['Walmart', 'Southwest Airlines', 'Ford Motor Company', 'Starbucks'],
      answer: 1, explain: 'An airline provides a service. Walmart and Starbucks are retailers; Ford is a manufacturer.' },
    { q: 'Acquiring long-term assets for use in the business is which type of activity?',
      options: ['operating', 'investing', 'financing', 'marketing'],
      answer: 1, explain: 'Investing activities acquire long-term assets. Operating generates revenue; financing obtains funds.' },
    { q: 'Which body maintains the accounting standards that make up U.S. GAAP?',
      options: ['the SEC directly writes all standards', 'the FASB (with SEC oversight)', 'the IRS', 'the Federal Reserve'],
      answer: 1, explain: 'The FASB develops and maintains GAAP in its Codification; the SEC has legal authority over public-company reporting and delegates standard-setting to the FASB.' },
    { q: 'Keeping the owner’s personal transactions out of the company’s records reflects the…',
      options: ['going concern assumption', 'monetary unit assumption', 'business entity assumption', 'historical cost principle'],
      answer: 2, explain: 'The business entity assumption limits reported data to the activities of the business itself, separate from its owner.' },
    { q: 'Land bought years ago for $100,000 is now worth $180,000. Under GAAP it is normally reported at…',
      options: ['$180,000', '$100,000', 'the average of the two', 'whatever management estimates'],
      answer: 1, explain: 'The historical cost principle keeps assets at their initial transaction price — objective and verifiable.' },
    { q: 'A company has assets of $500,000 and liabilities of $320,000. Owner’s equity is…',
      options: ['$820,000', '$180,000', '$320,000', 'cannot be determined'],
      answer: 1, explain: 'Assets = Liabilities + Equity, so Equity = $500,000 − $320,000 = $180,000.' },
    { q: 'A company pays $89,000 cash for land. The effect on the accounting equation is…',
      options: ['Cash +89,000; Land +89,000', 'Cash −89,000; Land +89,000', 'Cash +89,000; Land −89,000', 'Cash −89,000; Land −89,000'],
      answer: 1, explain: 'One asset is exchanged for another: cash decreases, land increases; total assets are unchanged.' },
    { q: 'Buying supplies on account…',
      options: ['increases assets and increases liabilities', 'increases assets and decreases equity', 'decreases assets and increases liabilities', 'has no effect until the supplies are used'],
      answer: 0, explain: 'Supplies (asset) increase and Accounts Payable (liability) increases by the same amount — the equation stays balanced.' },
    { q: 'An owner withdrawing cash for personal use is recorded as…',
      options: ['an expense on the income statement', 'a drawing that reduces owner’s equity', 'a liability to the owner', 'a reduction of revenue'],
      answer: 1, explain: 'Withdrawals are distributions of assets to the owner — they reduce equity but are not expenses because they don’t generate revenue.' },
    { q: 'Which financial statement shows sales, expenses, and net income or loss?',
      options: ['balance sheet', 'statement of cash flows', 'income statement', 'statement of owner’s equity'],
      answer: 2, explain: 'The income statement reports revenues and expenses for a period; the excess is net income (or a net loss).' },
    { q: 'Why is the statement of owner’s equity prepared AFTER the income statement but BEFORE the balance sheet?',
      options: ['it is alphabetical convention', 'net income flows into owner’s equity, and ending capital then appears on the balance sheet', 'the SEC requires that order', 'cash must be counted first'],
      answer: 1, explain: 'The statements interrelate: net income (income statement) updates capital (statement of owner’s equity), whose ending balance is reported on the balance sheet.' },
    { q: 'Company A’s liabilities-to-equity ratio is 0.6; Company B’s is 2.4. Which is generally better positioned to weather a downturn?',
      options: ['Company B — more leverage means more growth', 'Company A — a lower ratio means less debt burden relative to equity', 'They are equivalent', 'Neither; the ratio is meaningless'],
      answer: 1, explain: 'A lower liabilities-to-equity ratio (especially below 1.0) indicates a stronger ability to withstand poor conditions and pay creditors.' }
  ]
});
