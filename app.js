/* MBA Course 1 Study Guide — hash-routed SPA, no dependencies */
(function () {
  'use strict';

  var CHAPTERS = window.COURSE_DATA || [];
  var SUBJECTS = {
    econ: { name: 'Economics', sub: 'Principles of Economics (Mankiw, 10e)', icon: '📈', cls: 'econ' },
    acct: { name: 'Accounting', sub: 'Accounting (Warren, 29e)', icon: '🧾', cls: 'acct' }
  };
  var app = document.getElementById('app');

  /* ---------- progress store ---------- */
  var KEY = 'mba1-progress-v1';
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function saveStore(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  function chState(id) {
    var s = loadStore();
    return s[id] || { read: false, mastered: [], bestQuiz: null };
  }
  function setChState(id, st) {
    var s = loadStore(); s[id] = st; saveStore(s);
  }
  function chPct(ch) {
    var st = chState(ch.id);
    var parts = 0;
    if (st.read) parts++;
    if (ch.terms.length && st.mastered.length >= ch.terms.length) parts++;
    if (st.bestQuiz !== null && st.bestQuiz >= Math.ceil(ch.quiz.length * 0.7)) parts++;
    return Math.round(parts / 3 * 100);
  }

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function byId(id) { return CHAPTERS.find(function (c) { return c.id === id; }); }
  function subjectChapters(s) { return CHAPTERS.filter(function (c) { return c.subject === s; }); }

  /* ---------- router ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/').filter(Boolean);
    window.scrollTo(0, 0);
    if (parts[0] === 'chapter' && parts[1] && byId(parts[1])) {
      renderChapter(byId(parts[1]), parts[2] || 'notes');
    } else if (parts[0] === 'subject' && SUBJECTS[parts[1]]) {
      renderHome(parts[1]);
    } else {
      renderHome(null);
    }
  }
  window.addEventListener('hashchange', route);

  /* ---------- home ---------- */
  function subjectCard(key) {
    var s = SUBJECTS[key];
    var chs = subjectChapters(key);
    var avg = Math.round(chs.reduce(function (a, c) { return a + chPct(c); }, 0) / chs.length);
    var items = chs.map(function (c) {
      var st = chState(c.id), pct = chPct(c);
      var meta = [];
      meta.push(st.read ? '<span class="done">✓ notes</span>' : 'notes');
      meta.push(st.mastered.length >= c.terms.length ? '<span class="done">✓ cards</span>' : st.mastered.length + '/' + c.terms.length + ' cards');
      meta.push(st.bestQuiz !== null ? (st.bestQuiz >= Math.ceil(c.quiz.length * 0.7) ? '<span class="done">✓ quiz ' : '<span>quiz ') + st.bestQuiz + '/' + c.quiz.length + '</span>' : 'quiz');
      return '<li><a href="#/chapter/' + c.id + '">' +
        '<span class="ch-num">Ch ' + c.num + '</span>' +
        '<span class="ch-info"><span class="ch-title">' + esc(c.title) + '</span>' +
        '<span class="ch-meta">' + meta.join(' · ') + '</span></span>' +
        '<span style="font-size:.78rem;color:var(--muted);font-weight:700">' + pct + '%</span>' +
        '</a></li>';
    }).join('');
    return '<section class="subject-card ' + s.cls + '">' +
      '<h2><span class="badge">' + s.icon + '</span>' + s.name + '</h2>' +
      '<p class="sub">' + esc(s.sub) + '</p>' +
      '<div class="pbar ' + (key === 'acct' ? 'acct-bar' : '') + '"><div style="width:' + avg + '%"></div></div>' +
      '<p class="pbar-label">' + avg + '% complete</p>' +
      '<ul class="chapter-list">' + items + '</ul></section>';
  }

  function renderHome(only) {
    var keys = only ? [only] : ['econ', 'acct'];
    var total = Math.round(CHAPTERS.reduce(function (a, c) { return a + chPct(c); }, 0) / CHAPTERS.length);
    app.innerHTML =
      '<div class="hero"><h1>MBA Course 1 Study Guide</h1>' +
      '<p>Study notes, flashcards, and practice quizzes for your Economics and Accounting chapters. Your progress saves automatically in this browser.</p>' +
      '<div class="overall-bar"><div class="pbar"><div style="width:' + total + '%"></div></div>' +
      '<p class="pbar-label">Overall progress: ' + total + '%</p></div></div>' +
      '<div class="subject-grid">' + keys.map(subjectCard).join('') + '</div>';
  }

  /* ---------- chapter ---------- */
  function renderChapter(ch, tab) {
    var s = SUBJECTS[ch.subject];
    var st = chState(ch.id);
    var chs = subjectChapters(ch.subject);
    var idx = chs.indexOf(ch);
    var prev = chs[idx - 1], next = chs[idx + 1];

    var tabs = [
      { key: 'notes', label: '📖 Notes', count: ch.sections.length },
      { key: 'cards', label: '🃏 Flashcards', count: ch.terms.length },
      { key: 'quiz', label: '✅ Quiz', count: ch.quiz.length }
    ];
    app.innerHTML =
      '<div class="' + (ch.subject === 'acct' ? 'acct-page' : 'econ-page') + '">' +
      '<p class="crumbs"><a href="#/">Home</a> › <a href="#/subject/' + ch.subject + '">' + s.name + '</a> › Chapter ' + ch.num + '</p>' +
      '<header class="ch-header">' +
      '<span class="kicker ' + s.cls + '-k">' + s.icon + ' ' + s.name + ' · Chapter ' + ch.num + '</span>' +
      '<h1>' + esc(ch.title) + '</h1>' +
      '<p class="overview">' + ch.overview + '</p></header>' +
      '<nav class="tabs">' + tabs.map(function (t) {
        return '<button class="tab-btn' + (t.key === tab ? ' active' : '') + '" data-tab="' + t.key + '">' +
          t.label + '<span class="tab-count">' + t.count + '</span></button>';
      }).join('') + '</nav>' +
      '<div id="tab-body"></div>' +
      '<div class="ch-nav">' +
      (prev ? '<a href="#/chapter/' + prev.id + '"><span class="dir">← Previous</span>Ch ' + prev.num + ': ' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a href="#/chapter/' + next.id + '" style="text-align:right"><span class="dir">Next →</span>Ch ' + next.num + ': ' + esc(next.title) + '</a>' : '<span></span>') +
      '</div></div>';

    app.querySelectorAll('.tab-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        location.hash = '#/chapter/' + ch.id + '/' + b.dataset.tab;
      });
    });

    var body = document.getElementById('tab-body');
    if (tab === 'cards') renderCards(ch, body);
    else if (tab === 'quiz') renderQuiz(ch, body);
    else renderNotes(ch, body);
  }

  /* ---------- notes ---------- */
  function renderNotes(ch, body) {
    var st = chState(ch.id);
    body.innerHTML = ch.sections.map(function (sec) {
      return '<section class="note-section"><h3>' + esc(sec.title) + '</h3>' + sec.html + '</section>';
    }).join('') +
      '<button class="mark-read' + (st.read ? ' is-read' : '') + '" id="markRead">' +
      (st.read ? '✓ Notes completed' : 'Mark notes as read') + '</button>';
    document.getElementById('markRead').addEventListener('click', function () {
      var s = chState(ch.id); s.read = true; setChState(ch.id, s);
      this.classList.add('is-read'); this.textContent = '✓ Notes completed';
    });
  }

  /* ---------- flashcards ---------- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function renderCards(ch, body) {
    var st = chState(ch.id);
    var deck = shuffle(ch.terms.map(function (t, i) { return { i: i, term: t.term, def: t.def }; }));
    var pos = 0, knownThisRun = 0;

    function draw() {
      if (pos >= deck.length) {
        var mastered = chState(ch.id).mastered.length;
        body.innerHTML = '<div class="fc-wrap"><div class="fc-summary">' +
          '<div class="big">🎉 Deck complete</div>' +
          '<p>You marked <strong>' + knownThisRun + '</strong> of ' + deck.length + ' cards as known this round.<br>' +
          'Total mastered: <strong>' + mastered + '/' + ch.terms.length + '</strong></p>' +
          '<div class="chip-row">' +
          '<button class="fc-btn know" id="fcAgainAll">Study full deck again</button>' +
          (mastered < ch.terms.length ? '<button class="fc-btn" id="fcMissed">Review unmastered (' + (ch.terms.length - mastered) + ')</button>' : '') +
          '</div></div></div>';
        var b1 = document.getElementById('fcAgainAll');
        if (b1) b1.addEventListener('click', function () { renderCards(ch, body); });
        var b2 = document.getElementById('fcMissed');
        if (b2) b2.addEventListener('click', function () {
          var m = chState(ch.id).mastered;
          deck = shuffle(ch.terms.map(function (t, i) { return { i: i, term: t.term, def: t.def }; })
            .filter(function (c) { return m.indexOf(c.i) === -1; }));
          pos = 0; knownThisRun = 0; draw();
        });
        return;
      }
      var c = deck[pos];
      var masteredNow = chState(ch.id).mastered;
      body.innerHTML = '<div class="fc-wrap">' +
        '<div class="fc-status"><span>Card ' + (pos + 1) + ' of ' + deck.length + '</span>' +
        '<span>Mastered: ' + masteredNow.length + '/' + ch.terms.length + '</span></div>' +
        '<div class="fc-card" id="fcCard" tabindex="0" role="button" aria-label="Flashcard, click to flip">' +
        '<div class="fc-inner">' +
        '<div class="fc-face front"><span class="label">Term</span><div class="word">' + esc(c.term) + '</div><div class="fc-hint">Click or press space to flip</div></div>' +
        '<div class="fc-face back"><span class="label">Definition</span><div class="def">' + esc(c.def) + '</div></div>' +
        '</div></div>' +
        '<div class="fc-controls">' +
        '<button class="fc-btn again" id="fcAgain">↻ Still learning</button>' +
        '<button class="fc-btn" id="fcSkip">Skip</button>' +
        '<button class="fc-btn know" id="fcKnow">✓ I know this</button>' +
        '</div></div>';

      var card = document.getElementById('fcCard');
      function flip() { card.classList.toggle('flipped'); }
      card.addEventListener('click', flip);
      card.addEventListener('keydown', function (e) {
        if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); flip(); }
      });
      document.getElementById('fcKnow').addEventListener('click', function () {
        var s = chState(ch.id);
        if (s.mastered.indexOf(c.i) === -1) s.mastered.push(c.i);
        setChState(ch.id, s);
        knownThisRun++; pos++; draw();
      });
      document.getElementById('fcAgain').addEventListener('click', function () {
        var s = chState(ch.id);
        var k = s.mastered.indexOf(c.i);
        if (k !== -1) { s.mastered.splice(k, 1); setChState(ch.id, s); }
        deck.push(c); pos++; draw();
      });
      document.getElementById('fcSkip').addEventListener('click', function () { pos++; draw(); });
    }
    draw();
  }

  /* ---------- quiz ---------- */
  function renderQuiz(ch, body) {
    var qs = shuffle(ch.quiz);
    var pos = 0, score = 0;

    function drawQ() {
      if (pos >= qs.length) {
        var st = chState(ch.id);
        if (st.bestQuiz === null || score > st.bestQuiz) { st.bestQuiz = score; setChState(ch.id, st); }
        var pct = Math.round(score / qs.length * 100);
        var msg = pct >= 90 ? 'Outstanding — exam ready! 🏆' :
                  pct >= 70 ? 'Solid work — review the ones you missed.' :
                  'Keep going — reread the notes and try again.';
        body.innerHTML = '<div class="quiz-wrap"><div class="q-card q-result">' +
          '<div class="q-score">' + score + '/' + qs.length + '</div>' +
          '<p class="q-msg">' + msg + '</p>' +
          '<p class="best">Best score: ' + chState(ch.id).bestQuiz + '/' + qs.length + '</p>' +
          '<div class="chip-row"><button class="q-next" id="qRetry">Try again</button></div>' +
          '</div></div>';
        document.getElementById('qRetry').addEventListener('click', function () { renderQuiz(ch, body); });
        return;
      }
      var q = qs[pos];
      var order = shuffle(q.options.map(function (o, i) { return { text: o, correct: i === q.answer }; }));
      body.innerHTML = '<div class="quiz-wrap">' +
        '<div class="q-progress"><span>Question ' + (pos + 1) + ' of ' + qs.length + '</span><span>Score: ' + score + '</span></div>' +
        '<div class="q-card"><p class="q-text">' + esc(q.q) + '</p>' +
        '<div class="q-opts">' + order.map(function (o, i) {
          return '<button class="q-opt" data-i="' + i + '">' + esc(o.text) + '</button>';
        }).join('') + '</div><div id="qFeedback"></div></div></div>';

      var opts = body.querySelectorAll('.q-opt');
      opts.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var pick = order[+btn.dataset.i];
          opts.forEach(function (b, j) {
            b.disabled = true;
            if (order[j].correct) b.classList.add('correct');
          });
          if (pick.correct) { score++; }
          else btn.classList.add('wrong');
          document.getElementById('qFeedback').innerHTML =
            '<div class="q-explain"><strong>' + (pick.correct ? 'Correct! ' : 'Not quite. ') + '</strong>' + esc(q.explain) + '</div>' +
            '<button class="q-next" id="qNext">' + (pos + 1 < qs.length ? 'Next question →' : 'See results') + '</button>';
          document.getElementById('qNext').addEventListener('click', function () { pos++; drawQ(); });
          document.querySelector('.q-progress span:last-child').textContent = 'Score: ' + score;
        });
      });
    }
    drawQ();
  }

  /* ---------- reset ---------- */
  document.getElementById('resetProgress').addEventListener('click', function () {
    if (confirm('Clear all saved progress (notes read, mastered cards, quiz scores)?')) {
      localStorage.removeItem(KEY); route();
    }
  });

  route();
})();
