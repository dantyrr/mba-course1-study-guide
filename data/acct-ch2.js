window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'acct-ch2', subject: 'acct', num: 2,
  title: 'Analyzing Transactions',
  overview: 'The mechanics of double-entry accounting: accounts and the chart of accounts, debit/credit rules and normal balances, journalizing, posting to the ledger, the unadjusted trial balance, and horizontal analysis.',
  sections: [
    { title: 'Accounts and the Chart of Accounts', html:
      '<p>An <span class="term">account</span> is a record of increases and decreases in one accounting-equation element. It has three parts: a <strong>title</strong>, a space for <strong>increases</strong>, and a space for <strong>decreases</strong>. The <span class="term">T account</span> form shows debits on the <strong>left</strong> and credits on the <strong>right</strong>.</p>' +
      '<p>A <span class="term">ledger</span> is the group of all accounts for a business; the <span class="term">chart of accounts</span> lists them in financial-statement order: <strong>balance sheet accounts first</strong> (assets, liabilities, owner’s equity), then <strong>income statement accounts</strong> (revenues, expenses).</p>' +
      '<ul><li><strong>Assets</strong>: rights to economic benefits (Cash, Accounts Receivable, Supplies, Prepaid Insurance, Land, Equipment).</li>' +
      '<li><strong>Liabilities</strong>: obligations to third parties (Accounts Payable, Unearned Rent).</li>' +
      '<li><strong>Owner’s equity</strong>: capital account, plus a <span class="term">drawing</span> account for withdrawals.</li></ul>' },
    { title: 'Double-Entry Accounting & Debit/Credit Rules', html:
      '<p>The <span class="term">double-entry system</span> requires every transaction to be recorded in <strong>at least two accounts</strong>, with <strong>total debits = total credits</strong>.</p>' +
      '<div class="tablewrap"><table><tr><th>Account type</th><th>Increase with</th><th>Decrease with</th><th>Normal balance</th></tr>' +
      '<tr><td>Assets</td><td>Debit</td><td>Credit</td><td>Debit</td></tr>' +
      '<tr><td>Liabilities</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>' +
      '<tr><td>Owner’s Capital</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>' +
      '<tr><td>Drawing</td><td>Debit</td><td>Credit</td><td>Debit</td></tr>' +
      '<tr><td>Revenues</td><td>Credit</td><td>Debit</td><td>Credit</td></tr>' +
      '<tr><td>Expenses</td><td>Debit</td><td>Credit</td><td>Debit</td></tr></table></div>' +
      '<div class="tip">Memory aid: accounts that <em>increase equity</em> (capital, revenue) grow with <strong>credits</strong>; accounts that <em>decrease equity</em> (drawing, expenses) grow with <strong>debits</strong>. The <span class="term">normal balance</span> is whichever side records increases.</div>' },
    { title: 'Journalizing', html:
      '<p>Transactions are first recorded chronologically in the <span class="term">journal</span> — the record of when transactions occurred. Steps for each entry:</p>' +
      '<ol><li>Enter the <strong>date</strong>.</li>' +
      '<li>Record the account <strong>debited</strong> (left margin) and the amount in the Debit column.</li>' +
      '<li>Record the account <strong>credited</strong> (indented below) and the amount in the Credit column.</li>' +
      '<li>Add a brief explanation.</li></ol>' +
      '<p><strong>Examples:</strong> Owner invests cash → debit Cash, credit Owner’s Capital. Buy supplies on account → debit Supplies, credit Accounts Payable. Earn fees for cash → debit Cash, credit Fees Earned. Pay rent → debit Rent Expense, credit Cash. Prepay insurance → debit Prepaid Insurance, credit Cash.</p>' },
    { title: 'Posting to the Ledger', html:
      '<p><span class="term">Posting</span> is the process of transferring the debits and credits from journal entries to the accounts in the ledger. Entries are posted in journal order; each posting records the date, the amount, the resulting balance, and cross-references (journal page number ↔ account number in the Post. Ref. columns).</p>' },
    { title: 'The Trial Balance & Finding Errors', html:
      '<p>An <span class="term">unadjusted trial balance</span> lists every ledger account with its debit or credit balance to verify that <strong>total debits = total credits</strong>. Steps: (1) heading — company, title, date; (2) list accounts with balances; (3) total both columns; (4) verify equality.</p>' +
      '<ul>' +
      '<li><strong>Unequal totals</strong> → an error definitely exists; retrace from the last entry.</li>' +
      '<li><strong>Equal totals ≠ proof of accuracy</strong>: some errors don’t break the equality — e.g., entering a correct entry twice, posting to the wrong account, or omitting a transaction entirely. Errors already journalized and posted are fixed with a <span class="term">correcting journal entry</span>.</li>' +
      '</ul>' +
      '<div class="tip">If the difference between column totals is evenly divisible by 9, suspect a <strong>transposition</strong> (writing $542 as $452) or a <strong>slide</strong> (writing $542.00 as $54.20).</div>' },
    { title: 'Analysis: Horizontal Analysis', html:
      '<p><span class="term">Horizontal analysis</span> compares each item on a financial statement with the <em>same item in an earlier period</em> — amount of change and percent change:</p>' +
      '<div class="formula">% change = (Current period − Prior period) ÷ Prior period × 100</div>' +
      '<p>Appropriate use: current-year balance sheet vs. prior-year balance sheet, or current-year income statement vs. prior-year income statement (same statement, different periods).</p>' }
  ],
  terms: [
    { term: 'Account', def: 'A record showing increases and decreases in a single accounting-equation element; simplest form is the T account.' },
    { term: 'T account', def: 'An account form with the title on top, debits on the left side, and credits on the right side.' },
    { term: 'Debit / Credit', def: 'Simply the left side / right side of an account. Whether they increase or decrease an account depends on the account type.' },
    { term: 'Ledger', def: 'The group of all accounts for a business entity.' },
    { term: 'Chart of accounts', def: 'The list of accounts in the ledger, ordered as they appear in the financial statements — balance sheet accounts first, then income statement accounts.' },
    { term: 'Double-entry accounting', def: 'A system requiring every transaction to be recorded in at least two accounts, with total debits equal to total credits.' },
    { term: 'Normal balance', def: 'The side (debit or credit) on which increases to the account are recorded — assets/drawing/expenses: debit; liabilities/capital/revenues: credit.' },
    { term: 'Journal', def: 'The chronological record where transactions are first entered — a record of when transactions occurred.' },
    { term: 'Journalizing', def: 'Recording a transaction in the journal: date, account debited with amount, account credited (indented) with amount, and explanation.' },
    { term: 'Posting', def: 'Transferring the debits and credits from journal entries to the accounts in the ledger.' },
    { term: 'Unadjusted trial balance', def: 'A listing of all accounts and balances prepared to verify that total debits equal total credits before adjustments.' },
    { term: 'Transposition / slide', def: 'Common errors: reversing digits ($542 → $452) or misplacing the decimal ($542.00 → $54.20). Differences divisible by 9 hint at these.' },
    { term: 'Correcting journal entry', def: 'The entry prepared to fix an error that has already been journalized and posted.' },
    { term: 'Unearned rent (unearned revenue)', def: 'A liability recorded when cash is received before revenue is earned.' },
    { term: 'Horizontal analysis', def: 'Comparing each financial statement item with the same item in an earlier period, in dollars and percent.' }
  ],
  quiz: [
    { q: 'Which would be classified as an ASSET in a chart of accounts?',
      options: ['Accounts Payable', 'Factory Equipment', 'Travel Expense', 'Fees Earned'],
      answer: 1, explain: 'Equipment is a right to economic benefits — an asset. Accounts Payable is a liability, Travel Expense an expense, Fees Earned a revenue.' },
    { q: 'In a chart of accounts, accounts are normally listed…',
      options: ['alphabetically', 'in the order they appear in the financial statements', 'by dollar size', 'by frequency of use'],
      answer: 1, explain: 'Balance sheet accounts (assets, liabilities, equity) come first, then income statement accounts (revenues, expenses).' },
    { q: 'The normal balance of an expense account is a…',
      options: ['credit, because expenses reduce equity', 'debit, because expenses increase with debits', 'credit, because expenses are on the income statement', 'zero balance'],
      answer: 1, explain: 'Expenses reduce owner’s equity, so they increase on the debit side — their normal balance is a debit.' },
    { q: 'Which pair BOTH have normal credit balances?',
      options: ['Cash and Fees Earned', 'Accounts Payable and Owner’s Capital', 'Drawing and Wages Expense', 'Supplies and Unearned Rent'],
      answer: 1, explain: 'Liabilities and capital increase with credits. Cash, Drawing, Wages Expense, and Supplies all carry debit balances.' },
    { q: 'The company provides services and receives $7,500 cash. The journal entry is…',
      options: ['debit Cash, credit Fees Earned', 'debit Fees Earned, credit Cash', 'debit Cash, credit Accounts Receivable', 'debit Accounts Receivable, credit Cash'],
      answer: 0, explain: 'Cash (asset) increases with a debit; Fees Earned (revenue) increases with a credit.' },
    { q: 'Purchasing supplies on account is journalized as…',
      options: ['debit Supplies, credit Cash', 'debit Accounts Payable, credit Supplies', 'debit Supplies, credit Accounts Payable', 'debit Supplies Expense, credit Accounts Payable'],
      answer: 2, explain: 'Supplies (asset) increases with a debit; the purchase on account creates Accounts Payable (liability), which increases with a credit.' },
    { q: 'Transferring debits and credits from journal entries to the ledger accounts is called…',
      options: ['bookkeeping', 'ledgering', 'journalizing', 'posting'],
      answer: 3, explain: 'Posting moves the journal information into the individual accounts in the ledger.' },
    { q: 'The trial balance columns are equal. This proves…',
      options: ['every transaction was recorded correctly', 'only that total debits equal total credits', 'no entry was posted twice', 'no transaction was omitted'],
      answer: 1, explain: 'A balanced trial balance can still hide errors: duplicated entries, wrong accounts, or omitted transactions don’t break the equality.' },
    { q: 'The trial balance is out of balance by $270 — a number evenly divisible by 9. A likely cause is…',
      options: ['an omitted transaction', 'a transposition or slide error', 'recording an entry twice', 'posting a debit as a debit'],
      answer: 1, explain: 'Differences divisible by 9 classically point to transposed digits (e.g., 542 vs. 452) or slides (542.00 vs. 54.20).' },
    { q: 'A $1,200 purchase of supplies was journalized and posted as a debit to Supplies Expense. The fix is…',
      options: ['erase the original entry', 'a correcting journal entry (debit Supplies, credit Supplies Expense)', 'ignore it — the trial balance still balances', 'adjust cash instead'],
      answer: 1, explain: 'Once journalized and posted, errors are fixed with a correcting entry that moves the amount to the proper account.' },
    { q: 'Which comparison is an appropriate use of horizontal analysis?',
      options: ['current-year balance sheet vs. prior-year balance sheet', 'current-year income statement vs. current-year balance sheet', 'income statement vs. statement of cash flows', 'assets vs. liabilities within one year'],
      answer: 0, explain: 'Horizontal analysis compares the same statement across periods to measure dollar and percentage changes over time.' }
  ]
});
