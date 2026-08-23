window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'acct-ch4', subject: 'acct', num: 4,
  title: 'The Accounting Cycle',
  overview: 'Putting it all together: preparing financial statements from the adjusted trial balance, closing the temporary accounts, the full 10-step accounting cycle, and measuring liquidity with working capital and the current ratio.',
  sections: [
    { title: 'From Adjusted Trial Balance to Financial Statements', html:
      '<p>The adjusted trial balance feeds the statements: revenue and expense accounts flow to the <strong>income statement</strong>; capital and drawing flow to the <strong>statement of owner’s equity</strong>; asset and liability accounts flow to the <strong>balance sheet</strong>.</p>' +
      '<ul>' +
      '<li><strong>Income statement:</strong> expenses listed in order of size (largest first), with Miscellaneous Expense always last.</li>' +
      '<li><strong>Statement of owner’s equity:</strong> beginning capital + investments + net income − withdrawals = ending capital.</li>' +
      '<li><strong>Balance sheet:</strong> the <span class="term">classified balance sheet</span> groups items into subsections (see next).</li>' +
      '<li><strong>Statement of cash flows:</strong> prepared by analyzing the cash account and classifying each transaction as operating, investing, or financing.</li>' +
      '</ul>' },
    { title: 'Classified Balance Sheet Categories', html:
      '<ul>' +
      '<li><span class="term">Current assets</span>: cash and assets expected to be converted to cash or used up within one year (cash, receivables, supplies, prepaids).</li>' +
      '<li><span class="term">Property, plant, and equipment</span> (fixed assets): long-lived assets like land, buildings, equipment (net of accumulated depreciation).</li>' +
      '<li><span class="term">Current liabilities</span>: due within one year, paid out of current assets (accounts payable, wages payable, unearned fees).</li>' +
      '<li><span class="term">Long-term liabilities</span>: not due for more than a year (e.g., mortgage payable).</li>' +
      '</ul>' },
    { title: 'Closing Entries', html:
      '<p><span class="term">Permanent (real) accounts</span> — assets, liabilities, capital — carry balances forward. <span class="term">Temporary (nominal) accounts</span> — revenues, expenses, drawing — relate to one period only and must start the next period at zero.</p>' +
      '<p>The <span class="term">closing process</span> ("closing the books") has two entries:</p>' +
      '<ol>' +
      '<li>Debit each revenue account and credit each expense account for their balances; the difference (net income or loss) goes to the owner’s <strong>capital</strong> account (credit capital for net income, debit for net loss).</li>' +
      '<li>Credit Drawing for its balance and debit capital.</li>' +
      '</ol>' +
      '<p>After closing, a <span class="term">post-closing trial balance</span> verifies the ledger balances — it lists <strong>only balance sheet (permanent) accounts</strong>, which should agree exactly with the balance sheet.</p>' },
    { title: 'The 10 Steps of the Accounting Cycle', html:
      '<ol>' +
      '<li>Analyze and record transactions in the <strong>journal</strong></li>' +
      '<li><strong>Post</strong> transactions to the ledger</li>' +
      '<li>Prepare an <strong>unadjusted trial balance</strong></li>' +
      '<li>Assemble and analyze <strong>adjustment data</strong></li>' +
      '<li>Prepare an optional <strong>end-of-period spreadsheet</strong></li>' +
      '<li>Journalize and post <strong>adjusting entries</strong></li>' +
      '<li>Prepare an <strong>adjusted trial balance</strong></li>' +
      '<li>Prepare the <strong>financial statements</strong></li>' +
      '<li>Journalize and post <strong>closing entries</strong></li>' +
      '<li>Prepare a <strong>post-closing trial balance</strong></li>' +
      '</ol>' +
      '<div class="tip">💡 Mnemonic anchor: <em>journal → ledger → trial balance → adjust → statements → close</em>. The financial statements are the most important output of the cycle.</div>' },
    { title: 'Why GAAP Requires Accrual Accounting', html:
      '<p>The cash basis records transactions only when cash moves — simple, but it can badly distort performance across periods (revenue lands when collected, not when earned; expenses land when paid). The accrual basis applies the revenue and expense recognition principles so each period’s income statement reflects what was actually earned and incurred — making periods comparable and preventing manipulation via payment timing.</p>' },
    { title: 'Analysis: Working Capital & Current Ratio', html:
      '<p><span class="term">Liquidity</span> = ability to convert assets to cash; <span class="term">solvency</span> = ability to pay debts.</p>' +
      '<div class="formula">Working capital = Current assets − Current liabilities<br>Current ratio = Current assets ÷ Current liabilities</div>' +
      '<p>Example: current assets $7,745, current liabilities $1,390 → working capital $6,355; current ratio ≈ 5.6. The current ratio is more useful than working capital when comparing across companies or to industry averages.</p>' }
  ],
  terms: [
    { term: 'Classified balance sheet', def: 'A balance sheet with subsections: current assets; property, plant & equipment; current liabilities; long-term liabilities; owner’s equity.' },
    { term: 'Current assets', def: 'Cash and other assets expected to be converted to cash or used up within one year through normal operations.' },
    { term: 'Property, plant, and equipment', def: 'Long-lived fixed assets (land, buildings, equipment) reported net of accumulated depreciation.' },
    { term: 'Current liabilities', def: 'Obligations due within one year that will be paid out of current assets.' },
    { term: 'Long-term liabilities', def: 'Obligations not due for more than one year (e.g., mortgage payable).' },
    { term: 'Permanent (real) accounts', def: 'Balance sheet accounts — assets, liabilities, capital — whose balances carry forward from year to year.' },
    { term: 'Temporary (nominal) accounts', def: 'Revenue, expense, and drawing accounts; they relate to one period and are closed to zero at period end.' },
    { term: 'Closing entries', def: 'Journal entries that transfer revenue, expense, and drawing balances to the owner’s capital account.' },
    { term: 'Closing process', def: 'Two steps: (1) close revenues and expenses to capital (net income/loss), (2) close drawing to capital.' },
    { term: 'Post-closing trial balance', def: 'Prepared after closing; contains only permanent (balance sheet) accounts and verifies the ledger is in balance for the next period.' },
    { term: 'Accounting cycle', def: 'The 10-step process from analyzing/journalizing transactions through the post-closing trial balance.' },
    { term: 'End-of-period spreadsheet', def: 'An optional working tool showing the flow from unadjusted trial balance through adjustments to the statements; not part of the formal records.' },
    { term: 'Liquidity', def: 'The ability to convert assets into cash.' },
    { term: 'Solvency', def: 'The ability of a business to pay its debts.' },
    { term: 'Working capital', def: 'Current assets minus current liabilities; positive working capital signals ability to cover short-term obligations.' },
    { term: 'Current ratio', def: 'Current assets divided by current liabilities; more useful than working capital for comparing companies.' }
  ],
  quiz: [
    { q: 'Which would NOT be considered a current asset?',
      options: ['Land', 'Cash', 'Supplies', 'Accounts Receivable'],
      answer: 0, explain: 'Current assets convert to cash or are used up within a year. Land is a long-term (fixed) asset.' },
    { q: 'On the income statement, expenses are listed…',
      options: ['alphabetically', 'in order of size with Miscellaneous Expense last', 'by account number', 'by date incurred'],
      answer: 1, explain: 'Convention: largest expenses first; Miscellaneous Expense goes last regardless of amount.' },
    { q: 'Which is a NOMINAL (temporary) account?',
      options: ['Accounts Receivable', 'Accounts Payable', 'Rent Expense', 'Cash'],
      answer: 2, explain: 'Revenues, expenses, and drawing are temporary — closed each period. Assets and liabilities are permanent (real) accounts.' },
    { q: 'The two steps of the closing process transfer…',
      options: ['(1) revenues & expenses to capital, then (2) drawing to capital', '(1) assets to capital, then (2) liabilities to capital', '(1) drawing to revenue, then (2) revenue to cash', '(1) capital to income summary, then (2) income summary to cash'],
      answer: 0, explain: 'Step 1 closes revenue and expense balances (net income/loss) into capital; step 2 closes the drawing account into capital.' },
    { q: 'After closing entries are posted, which account has a ZERO balance?',
      options: ['Owner’s Capital', 'Fees Earned', 'Cash', 'Accounts Payable'],
      answer: 1, explain: 'All temporary accounts — including revenue accounts like Fees Earned — are closed to zero for the next period.' },
    { q: 'Which account would NOT appear on the post-closing trial balance?',
      options: ['Office Equipment', 'Cash', 'Unearned Fees', 'Fees Earned'],
      answer: 3, explain: 'The post-closing trial balance lists only permanent (balance sheet) accounts. Fees Earned was closed to capital.' },
    { q: 'What is the correct order of these accounting cycle steps?',
      options: ['adjust → journalize → post → close', 'journalize → post → unadjusted trial balance → adjust → statements → close', 'statements → adjust → close → journalize', 'post → journalize → close → adjust'],
      answer: 1, explain: 'Transactions are journalized and posted; a trial balance is prepared; adjustments are made; statements are prepared; then the books are closed.' },
    { q: 'The MOST important output of the accounting cycle is…',
      options: ['the journal', 'the post-closing trial balance', 'the financial statements', 'the chart of accounts'],
      answer: 2, explain: 'The whole cycle exists to produce reliable financial statements for decision makers.' },
    { q: 'GAAP requires the accrual basis rather than the cash basis primarily because accrual accounting…',
      options: ['is easier to apply', 'matches revenues and expenses to the period they are earned/incurred', 'eliminates the need for adjusting entries', 'tracks cash more precisely'],
      answer: 1, explain: 'Accrual accounting applies the revenue and expense recognition principles, making each period’s reported income meaningful and comparable.' },
    { q: 'Current assets are $7,745 and current liabilities are $1,390. Working capital and current ratio are…',
      options: ['$6,355 and about 5.6', '$9,135 and about 0.18', '$6,355 and about 0.18', '$1,390 and about 5.6'],
      answer: 0, explain: 'Working capital = 7,745 − 1,390 = $6,355; current ratio = 7,745 ÷ 1,390 ≈ 5.6.' },
    { q: 'When comparing short-term liquidity ACROSS companies of different sizes, the better measure is…',
      options: ['working capital, because it is in dollars', 'the current ratio, because it is size-independent', 'net income', 'total assets'],
      answer: 1, explain: 'A ratio scales away company size, making cross-company and industry comparisons meaningful.' },
    { q: 'A mortgage due in 15 years is classified on the balance sheet as…',
      options: ['a current liability', 'a long-term liability', 'owner’s equity', 'a fixed asset'],
      answer: 1, explain: 'Liabilities not due within one year are long-term liabilities.' }
  ]
});
