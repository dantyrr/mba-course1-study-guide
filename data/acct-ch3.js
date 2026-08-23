window.COURSE_DATA = window.COURSE_DATA || [];
window.COURSE_DATA.push({
  id: 'acct-ch3', subject: 'acct', num: 3,
  title: 'The Adjusting Process',
  overview: 'Accrual accounting requires end-of-period adjustments so revenues and expenses land in the right period. Learn the four adjustment types (accrued revenues, accrued expenses, unearned revenues, prepaid expenses) plus depreciation, and the adjusted trial balance.',
  sections: [
    { title: 'Accrual vs. Cash Basis', html:
      '<ul>' +
      '<li><span class="term">Accrual basis</span>: revenues recorded <strong>when earned</strong> (service performed / product delivered), expenses recorded <strong>when incurred</strong> — regardless of when cash moves. Required by GAAP.</li>' +
      '<li><span class="term">Cash basis</span>: record only when cash is received or paid.</li>' +
      '</ul>' +
      '<p>The <span class="term">revenue recognition principle</span> (record revenue when earned) and <span class="term">expense recognition / matching principle</span> (report expenses in the same period as the related revenue) drive the need for adjustments so net income is properly measured.</p>' },
    { title: 'Why Adjust? The Adjusting Process', html:
      '<p>At period end, some accounts on the unadjusted trial balance are out of date because: some expenses aren’t recorded daily (supplies), some revenues/expenses accrue with the passage of time (rent, insurance), and some items are simply unrecorded (services provided but not yet billed).</p>' +
      '<p>The <span class="term">adjusting process</span> updates these accounts before financial statements are prepared. Key fact: <strong>every adjusting entry affects at least one income statement account AND one balance sheet account</strong> — and never Cash.</p>' },
    { title: 'The Four Types of Adjustments (+ Depreciation)', html:
      '<div class="tablewrap"><table><tr><th>Type</th><th>Situation</th><th>Adjusting entry</th></tr>' +
      '<tr><td><span class="term">Accrued revenue</span></td><td>Earned but not yet recorded/billed</td><td>Debit Accounts Receivable / Credit Revenue</td></tr>' +
      '<tr><td><span class="term">Accrued expense</span></td><td>Incurred but not yet paid/recorded (e.g., wages)</td><td>Debit Expense / Credit Payable</td></tr>' +
      '<tr><td><span class="term">Unearned revenue</span></td><td>Cash received before earning (a liability)</td><td>Debit Unearned Revenue / Credit Revenue</td></tr>' +
      '<tr><td><span class="term">Prepaid expense</span></td><td>Cash paid before use (an asset: supplies, insurance)</td><td>Debit Expense / Credit Asset</td></tr>' +
      '<tr><td><span class="term">Depreciation</span></td><td>Allocating a fixed asset’s cost over its life</td><td>Debit Depreciation Expense / Credit Accumulated Depreciation</td></tr></table></div>' +
      '<p><strong>Worked examples:</strong></p><ul>' +
      '<li>Provided 25 hours of service at $20/hr, billing next month → debit A/R $500, credit Fees Earned $500.</li>' +
      '<li>Employees earned $250 of wages after the last payday → debit Wages Expense $250, credit Wages Payable $250.</li>' +
      '<li>Received $360 for 3 months’ rent on Dec 1; one month earned by Dec 31 → debit Unearned Rent $120, credit Rent Revenue $120.</li>' +
      '<li>Supplies account shows $2,000; only $760 on hand → $1,240 used → debit Supplies Expense $1,240, credit Supplies $1,240.</li>' +
      '<li>12-month insurance prepaid $2,400 on Dec 1 → one month expired → debit Insurance Expense $200, credit Prepaid Insurance $200.</li></ul>' },
    { title: 'Depreciation in Depth', html:
      '<p><span class="term">Fixed (plant) assets</span> are long-lived physical resources used in the business — effectively long-term prepaid expenses. All fixed assets <strong>except land</strong> depreciate.</p>' +
      '<ul>' +
      '<li>The credit goes to <span class="term">Accumulated Depreciation</span> — a <span class="term">contra asset</span> account deducted from the related asset on the balance sheet; its normal balance is a credit (opposite the asset).</li>' +
      '<li><span class="term">Book value</span> = Cost − Accumulated Depreciation. E.g., equipment $1,800 − $50 = $1,750.</li>' +
      '<li>Book value usually differs from market value: depreciation is an <strong>allocation</strong> method, not a valuation method.</li>' +
      '</ul>' },
    { title: 'Effects of Omitting Adjustments', html:
      '<p>Exam favorite! If an adjustment is omitted, trace the misstatements:</p>' +
      '<div class="tablewrap"><table><tr><th>Omitted adjustment</th><th>Income statement</th><th>Balance sheet</th></tr>' +
      '<tr><td>Accrued revenue ($500)</td><td>Revenue & net income understated</td><td>Assets (A/R) & equity understated</td></tr>' +
      '<tr><td>Accrued wages ($250)</td><td>Expenses understated, net income overstated</td><td>Liabilities understated, equity overstated</td></tr>' +
      '<tr><td>Unearned rent earned ($120)</td><td>Revenue & net income understated</td><td>Liabilities overstated, equity understated</td></tr>' +
      '<tr><td>Supplies/insurance used</td><td>Expenses understated, net income overstated</td><td>Assets overstated, equity overstated</td></tr>' +
      '<tr><td>Depreciation</td><td>Expenses understated, net income overstated</td><td>Assets overstated, equity overstated</td></tr></table></div>' },
    { title: 'Adjusted Trial Balance & Vertical Analysis', html:
      '<p>After adjusting entries are journalized and posted, the <span class="term">adjusted trial balance</span> verifies debits still equal credits — the last check before preparing financial statements.</p>' +
      '<p><span class="term">Vertical analysis</span> compares each item on a statement to a <em>total within the same statement</em>: balance sheet items as a percent of total assets; income statement items as a percent of revenues.</p>' }
  ],
  terms: [
    { term: 'Accrual basis of accounting', def: 'Revenues recorded when earned and expenses when incurred, regardless of cash timing. Required by GAAP.' },
    { term: 'Cash basis of accounting', def: 'Transactions recorded only when cash is received or paid.' },
    { term: 'Matching (expense recognition) principle', def: 'Expenses incurred in generating revenue must be reported in the same period as that revenue.' },
    { term: 'Adjusting process / adjusting entries', def: 'End-of-period analysis and entries that bring accounts up to date; each affects at least one income statement and one balance sheet account (never Cash).' },
    { term: 'Accrual (adjustment type)', def: 'Revenue earned or expense incurred that has NOT yet been recorded — adjust with a receivable/revenue or expense/payable entry.' },
    { term: 'Deferral (adjustment type)', def: 'Cash received or paid BEFORE the revenue/expense is recognized — unearned revenue (liability) or prepaid expense (asset).' },
    { term: 'Accrued revenue', def: 'Revenue earned but not yet recorded; adjust by debiting Accounts Receivable and crediting revenue.' },
    { term: 'Accrued expense', def: 'Expense incurred but not yet paid or recorded (e.g., wages); adjust by debiting the expense and crediting a liability.' },
    { term: 'Unearned revenue', def: 'A liability for cash received before it is earned; as it is earned, debit the liability and credit revenue.' },
    { term: 'Prepaid expense', def: 'An asset for cash paid before use (supplies, insurance); as consumed, debit the expense and credit the asset.' },
    { term: 'Fixed (plant) assets', def: 'Long-lived physical resources used in the business (land, buildings, equipment). All depreciate except land.' },
    { term: 'Depreciation expense', def: 'The portion of a fixed asset’s cost recorded as expense each period as the asset loses usefulness.' },
    { term: 'Accumulated Depreciation', def: 'A contra asset account (normal credit balance) deducted from the related fixed asset on the balance sheet.' },
    { term: 'Contra account', def: 'An account whose normal balance is opposite the account it offsets and is deducted from it.' },
    { term: 'Book value (net book value)', def: 'The cost of a fixed asset minus its accumulated depreciation.' },
    { term: 'Adjusted trial balance', def: 'A trial balance prepared after adjustments to verify debit/credit equality before the financial statements.' },
    { term: 'Vertical analysis', def: 'Expressing each statement item as a percent of a total on the same statement (total assets, or total revenues).' }
  ],
  quiz: [
    { q: 'Under the accrual basis, revenue is recorded when…',
      options: ['cash is received', 'the service is performed or product delivered', 'the customer is invoiced, regardless of delivery', 'the fiscal year ends'],
      answer: 1, explain: 'Revenue recognition: record revenue when earned. Cash timing is irrelevant under the accrual basis.' },
    { q: 'Every adjusting entry affects…',
      options: ['two balance sheet accounts', 'two income statement accounts', 'at least one income statement account and one balance sheet account', 'the cash account'],
      answer: 2, explain: 'Adjustments align revenues/expenses (income statement) with the related asset/liability (balance sheet). Cash is never in an adjusting entry.' },
    { q: 'Revenue earned but not yet recorded requires an adjusting entry that…',
      options: ['debits an asset and credits a revenue', 'debits a revenue and credits an asset', 'debits cash and credits revenue', 'debits a liability and credits revenue'],
      answer: 0, explain: 'Accrued revenue: debit Accounts Receivable (asset), credit the revenue account.' },
    { q: 'In November, an airline sells a $200 ticket for a flight next January. On the sale date it credits…',
      options: ['Sales', 'Cash', 'Unearned Revenue', 'Accounts Receivable'],
      answer: 2, explain: 'The airline has cash but hasn’t performed the service — a liability (Unearned Revenue) until the flight occurs.' },
    { q: 'A company received $360 on Dec 1 for three months’ rent. The Dec 31 adjusting entry is…',
      options: ['debit Unearned Rent $120, credit Rent Revenue $120', 'debit Rent Revenue $120, credit Unearned Rent $120', 'debit Cash $120, credit Rent Revenue $120', 'debit Unearned Rent $360, credit Rent Revenue $360'],
      answer: 0, explain: 'One of three months has been earned: move $120 from the liability to revenue.' },
    { q: 'Supplies had a $2,000 balance; $760 remain on hand at year-end. The adjusting entry debits…',
      options: ['Supplies for $1,240', 'Supplies Expense for $1,240', 'Supplies Expense for $760', 'Supplies for $760'],
      answer: 1, explain: 'Supplies used = $2,000 − $760 = $1,240 → debit Supplies Expense, credit Supplies for $1,240.' },
    { q: 'If the $250 accrued wages adjustment is omitted, the period’s net income is…',
      options: ['understated by $250', 'overstated by $250', 'correct — wages will be recorded when paid', 'overstated by $500'],
      answer: 1, explain: 'Wages Expense is understated, so net income is overstated by $250; liabilities are also understated on the balance sheet.' },
    { q: 'Accumulated Depreciation is best described as…',
      options: ['an expense account', 'a liability', 'a contra asset deducted from the related fixed asset', 'part of owner’s equity'],
      answer: 2, explain: 'It offsets the fixed asset account on the balance sheet and carries a credit balance — opposite the asset’s normal debit balance.' },
    { q: 'A truck cost $120,000 and has accumulated depreciation of $72,000. Its book value is…',
      options: ['$48,000', '$72,000', '$120,000', '$0'],
      answer: 0, explain: 'Book value = cost − accumulated depreciation = $120,000 − $72,000 = $48,000.' },
    { q: 'Book value usually differs from market value because depreciation is…',
      options: ['a valuation method', 'an allocation of cost over the asset’s life', 'based on appraisals', 'recorded only when assets are sold'],
      answer: 1, explain: 'Depreciation systematically allocates historical cost to expense; it makes no attempt to track what the asset would sell for.' },
    { q: 'Which asset is NOT depreciated?',
      options: ['office equipment', 'buildings', 'land', 'store fixtures'],
      answer: 2, explain: 'Land does not lose usefulness over time, so it is never depreciated.' },
    { q: 'In vertical analysis of a balance sheet, each asset item is stated as a percent of…',
      options: ['total liabilities', 'prior-year assets', 'total assets', 'net income'],
      answer: 2, explain: 'Vertical analysis compares items to a total within the same statement — for the balance sheet, total assets.' }
  ]
});
