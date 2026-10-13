// ==========================================================================
// UNIOSUN Regularisation CBT Arena — Conventional Mobile App Engine
// ==========================================================================

(function () {
  'use strict';

  // Academic Hierarchy & Ranks
  const RANKS = [
    { level: 1, title: 'Graduate Assistant', minXp: 0, maxXp: 250, icon: '🎓' },
    { level: 2, title: 'Assistant Lecturer', minXp: 250, maxXp: 650, icon: '📖' },
    { level: 3, title: 'Lecturer II', minXp: 650, maxXp: 1200, icon: '📝' },
    { level: 4, title: 'Lecturer I', minXp: 1200, maxXp: 2000, icon: '🔬' },
    { level: 5, title: 'Senior Lecturer', minXp: 2000, maxXp: 3000, icon: '📚' },
    { level: 6, title: 'Reader (Assoc. Prof.)', minXp: 3000, maxXp: 4500, icon: '🏛️' },
    { level: 7, title: 'Full Professor', minXp: 4500, maxXp: 6500, icon: '👑' },
    { level: 8, title: 'College Provost', minXp: 6500, maxXp: 9000, icon: '⭐' },
    { level: 9, title: 'Vice-Chancellor & Chair', minXp: 9000, maxXp: 99999, icon: '🌟' }
  ];

  // Global App State
  const state = {
    currentScreen: 'screen-arena', // 'screen-arena' | 'screen-cram' | 'screen-vault' | 'screen-profile'
    mode: 'PRACTICE', // 'PRACTICE' | 'EXAM' | 'VAULT'
    filterCat: 'ALL',
    deck: [],
    currentIdx: 0,
    answeredInCurrent: false,

    // Stats
    score: 0,
    attempted: 0,
    streak: 0,
    maxStreak: 0,

    // Theme & Audio
    theme: localStorage.getItem('uniosun_theme') || 'light',
    soundEnabled: localStorage.getItem('uniosun_sound') !== 'false',

    // RPG XP
    xp: parseInt(localStorage.getItem('uniosun_xp') || '0', 10),

    // Missed & Flagged
    vault: new Set(JSON.parse(localStorage.getItem('uniosun_vault') || '[]')),
    missed: new Set(JSON.parse(localStorage.getItem('uniosun_missed') || '[]')),
    flagged: new Set(),

    // Lifelines (Practice)
    lifelines: {
      fifties: 3,
      freezes: 3,
      hints: 3
    },

    // Timers
    timerInterval: null,
    timeLeft: 25,
    questionStartTime: 0,

    // Exam Mode State
    exam: {
      active: false,
      questions: [],
      userAnswers: [], // array of selected option indices (-1 for none)
      flagged: new Set(),
      durationSeconds: 45 * 60,
      timeRemaining: 45 * 60,
      timerInterval: null,
      submitted: false
    }
  };

  // --------------------------------------------------------------------------
  // Web Audio API Synthesizer (Zero External Dependencies)
  // --------------------------------------------------------------------------
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, type, duration, gainValue = 0.1, delay = 0) {
    if (!state.soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const startTime = audioCtx.currentTime + delay;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(gainValue, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch (e) {
      console.warn('Audio tone error', e);
    }
  }

  const SoundFX = {
    correct() {
      if (navigator.vibrate) try { navigator.vibrate(35); } catch (e) {}
      playTone(523.25, 'sine', 0.12, 0.15, 0.00);
      playTone(659.25, 'sine', 0.14, 0.15, 0.07);
      playTone(783.99, 'sine', 0.16, 0.15, 0.14);
      playTone(1046.50, 'sine', 0.28, 0.20, 0.21);
    },
    wrong() {
      if (navigator.vibrate) try { navigator.vibrate([60, 40, 60]); } catch (e) {}
      playTone(220, 'triangle', 0.18, 0.18, 0.00);
      playTone(180, 'sawtooth', 0.22, 0.15, 0.08);
    },
    streak() {
      if (navigator.vibrate) try { navigator.vibrate([40, 30, 50]); } catch (e) {}
      playTone(440, 'triangle', 0.08, 0.12, 0.00);
      playTone(554.37, 'triangle', 0.08, 0.12, 0.06);
      playTone(659.25, 'triangle', 0.12, 0.15, 0.12);
      playTone(880, 'sine', 0.25, 0.20, 0.18);
    },
    levelUp() {
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {
        playTone(freq, 'triangle', 0.25, 0.18, idx * 0.08);
      });
    },
    tick() {
      playTone(700, 'triangle', 0.04, 0.05, 0);
    }
  };

  // --------------------------------------------------------------------------
  // Confetti Particle Physics
  // --------------------------------------------------------------------------
  const Confetti = {
    canvas: null,
    ctx: null,
    particles: [],
    animId: null,

    init() {
      this.canvas = document.getElementById('confetti-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());
    },

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },

    burst(count = 50) {
      if (!this.canvas) return;
      const colors = ['#1e40af', '#10b981', '#f59e0b', '#ec4899', '#38bdf8'];
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight * 0.35;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 3;
        this.particles.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 12,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.015
        });
      }
      if (!this.animId) this.loop();
    },

    loop() {
      if (!this.ctx || !this.canvas) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx; p.y += p.vy;
        p.vy += 0.25;
        p.vx *= 0.98;
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.y > this.canvas.height) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        this.animId = requestAnimationFrame(() => this.loop());
      } else {
        this.animId = null;
      }
    }
  };

  // --------------------------------------------------------------------------
  // XP & Career Progression
  // --------------------------------------------------------------------------
  function getCurrentRank(xp) {
    for (let i = RANKS.length - 1; i >= 0; i--) {
      if (xp >= RANKS[i].minXp) return RANKS[i];
    }
    return RANKS[0];
  }

  function addXP(amount) {
    const prevRank = getCurrentRank(state.xp);
    state.xp += amount;
    localStorage.setItem('uniosun_xp', state.xp.toString());
    const newRank = getCurrentRank(state.xp);

    updateRankUI();

    if (newRank.level > prevRank.level) {
      SoundFX.levelUp();
      Confetti.burst(80);
      alert(`🎉 PROMOTION EARNED!\n\nYou have been promoted to ${newRank.title} (Level ${newRank.level})!`);
    }
  }

  function updateRankUI() {
    const rank = getCurrentRank(state.xp);
    const rankTitle = document.getElementById('rank-title');
    const rankXp = document.getElementById('rank-xp-text');
    const rankIcon = document.getElementById('rank-icon');

    if (rankTitle) rankTitle.textContent = rank.title;
    if (rankIcon) rankIcon.textContent = rank.icon;
    if (rankXp) {
      rankXp.textContent = rank.level === 9 ? `${state.xp.toLocaleString()} XP (VC)` : `${state.xp} / ${rank.maxXp} XP`;
    }

    // Profile screen stats
    const profPill = document.getElementById('profile-rank-pill');
    const profXp = document.getElementById('profile-xp-val');
    const profNext = document.getElementById('profile-next-rank-val');
    const profFill = document.getElementById('profile-progress-fill');

    if (profPill) profPill.textContent = `${rank.title} (Level ${rank.level})`;
    if (profXp) profXp.textContent = `${state.xp.toLocaleString()} XP`;
    if (profNext) profNext.textContent = `${rank.maxXp.toLocaleString()} XP`;
    if (profFill) {
      const pct = Math.min(100, Math.round((state.xp / rank.maxXp) * 100));
      profFill.style.width = `${pct}%`;
    }

    const pScore = document.getElementById('p-stat-score');
    const pPct = document.getElementById('p-stat-pct');
    const pStreak = document.getElementById('p-stat-streak');
    const pAtt = document.getElementById('p-stat-attempted');

    if (pScore) pScore.textContent = state.score;
    if (pPct) pPct.textContent = state.attempted > 0 ? `${Math.round((state.score / state.attempted) * 100)}%` : '0%';
    if (pStreak) pStreak.textContent = state.maxStreak;
    if (pAtt) pAtt.textContent = state.attempted;
  }

  // --------------------------------------------------------------------------
  // Deck Loading & Mode Switching
  // --------------------------------------------------------------------------
  function loadDeck() {
    if (state.mode === 'PRACTICE') {
      if (state.filterCat === 'ALL') {
        state.deck = [...questionBank];
      } else {
        state.deck = questionBank.filter(q => q.sec === state.filterCat);
      }
    } else if (state.mode === 'EXAM') {
      state.deck = state.exam.questions;
    } else if (state.mode === 'VAULT') {
      const vaultIds = new Set([...state.vault, ...state.missed]);
      state.deck = questionBank.filter(q => vaultIds.has(q.id));
      if (state.deck.length === 0) {
        state.deck = [{
          id: 0,
          sec: 'UNIOSUN',
          secTitle: 'Revision Vault',
          part: 'All Caught Up',
          q: 'Your revision vault is currently empty! Missed or flagged questions appear here automatically.',
          opts: ['Switch to Practice Mode', 'Take a Mock Exam', 'Review Cram Sheet', 'Return to Home'],
          ans: 0,
          exp: 'Switch to Practice or Mock Exam to start testing!'
        }];
      }
    }

    state.currentIdx = 0;
    renderCurrentQuestion();
    updateStatusSummary();
    updateVaultUI();
  }

  function startExamMode() {
    // Proportional 60 Questions:
    // IT: 24, UNIOSUN: 15, PEDAGOGY: 12, APTITUDE: 9
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    const itPool = shuffle(questionBank.filter(q => q.sec === 'IT')).slice(0, 24);
    const uniPool = shuffle(questionBank.filter(q => q.sec === 'UNIOSUN')).slice(0, 15);
    const pedPool = shuffle(questionBank.filter(q => q.sec === 'PEDAGOGY')).slice(0, 12);
    const aptPool = shuffle(questionBank.filter(q => q.sec === 'APTITUDE')).slice(0, 9);

    const examQuestions = shuffle([...itPool, ...uniPool, ...pedPool, ...aptPool]);

    state.exam.active = true;
    state.exam.questions = examQuestions;
    state.exam.userAnswers = new Array(examQuestions.length).fill(-1);
    state.exam.flagged = new Set();
    state.exam.submitted = false;
    state.exam.timeRemaining = state.exam.durationSeconds;

    state.mode = 'EXAM';
    state.deck = examQuestions;
    state.currentIdx = 0;

    startExamTimer();
    renderCurrentQuestion();
    updateStatusSummary();
  }

  // --------------------------------------------------------------------------
  // Timer Management
  // --------------------------------------------------------------------------
  function startPracticeTimer() {
    clearInterval(state.timerInterval);
    state.timeLeft = 25;
    state.questionStartTime = Date.now();
    updateTimerUI();

    state.timerInterval = setInterval(() => {
      state.timeLeft--;
      updateTimerUI();
      if (state.timeLeft <= 5 && state.timeLeft > 0) SoundFX.tick();
      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        if (!state.answeredInCurrent) handleAnswerSelect(-1);
      }
    }, 1000);
  }

  function startExamTimer() {
    clearInterval(state.exam.timerInterval);
    updateExamTimerUI();

    state.exam.timerInterval = setInterval(() => {
      state.exam.timeRemaining--;
      updateExamTimerUI();
      if (state.exam.timeRemaining <= 0) {
        clearInterval(state.exam.timerInterval);
        submitExam(true);
      }
    }, 1000);
  }

  function updateTimerUI() {
    const timerEl = document.getElementById('stat-timer');
    const timerPill = document.getElementById('timer-pill');
    if (!timerEl || !timerPill) return;

    timerEl.textContent = state.timeLeft;
    timerPill.classList.toggle('urgent', state.timeLeft <= 5);
  }

  function updateExamTimerUI() {
    const timerEl = document.getElementById('stat-timer');
    const timerPill = document.getElementById('timer-pill');
    if (!timerEl || !timerPill) return;

    const m = Math.floor(state.exam.timeRemaining / 60);
    const s = state.exam.timeRemaining % 60;
    timerEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    timerPill.classList.toggle('urgent', state.exam.timeRemaining <= 300);
  }

  // --------------------------------------------------------------------------
  // Render Active Question (Conventional Mobile CBT Pattern)
  // --------------------------------------------------------------------------
  function renderCurrentQuestion() {
    const item = state.deck[state.currentIdx];
    if (!item) return;

    state.answeredInCurrent = false;

    // Header Tags
    const qNumLabel = document.getElementById('q-number-label');
    const qSecTag = document.getElementById('q-sec-tag');
    const qSubpart = document.getElementById('q-subpart-text');
    const qPrompt = document.getElementById('q-prompt');
    const hintBox = document.getElementById('hint-panel');
    const expBox = document.getElementById('explanation-panel');
    const flagBtn = document.getElementById('flag-btn');

    if (qNumLabel) qNumLabel.textContent = `Question ${state.currentIdx + 1}`;
    if (qSecTag) qSecTag.textContent = item.secTitle || item.sec;
    if (qSubpart) qSubpart.textContent = item.part || '';
    if (qPrompt) qPrompt.textContent = item.q;

    // Reset boxes
    if (hintBox) hintBox.style.display = 'none';
    if (expBox) expBox.style.display = 'none';

    // Flag status
    const isFlagged = state.mode === 'EXAM' ? state.exam.flagged.has(state.currentIdx) : state.flagged.has(item.id);
    if (flagBtn) {
      flagBtn.classList.toggle('active', isFlagged);
      document.getElementById('flag-btn-text').textContent = isFlagged ? 'Flagged' : 'Flag';
    }

    // Render Options List
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    let prevAns = -1;
    if (state.mode === 'EXAM') {
      prevAns = state.exam.userAnswers[state.currentIdx];
    }

    item.opts.forEach((optText, idx) => {
      const card = document.createElement('div');
      card.className = 'option-radio-card';
      card.id = `opt-card-${idx}`;

      const circle = document.createElement('div');
      circle.className = 'radio-circle';
      const dot = document.createElement('div');
      dot.className = 'radio-dot';
      circle.appendChild(dot);

      const content = document.createElement('div');
      content.className = 'option-text-content';
      content.innerHTML = `<span class="option-letter-badge">${letters[idx]}.</span> ${optText}`;

      card.appendChild(circle);
      card.appendChild(content);

      if (state.mode === 'EXAM' && state.exam.submitted) {
        card.style.pointerEvents = 'none';
        if (idx === item.ans) card.classList.add('correct');
        else if (idx === prevAns) card.classList.add('wrong');
      } else if (state.mode === 'EXAM') {
        if (idx === prevAns) card.classList.add('selected');
        card.onclick = () => selectExamAnswer(idx);
      } else {
        card.onclick = () => handleAnswerSelect(idx);
      }

      container.appendChild(card);
    });

    // Control buttons visibility
    const submitBtn = document.getElementById('submit-exam-btn');
    const nextBtn = document.getElementById('next-btn');
    const lifelinesBar = document.getElementById('lifelines-bar');
    const catSelector = document.getElementById('category-selector-wrapper');

    if (state.mode === 'PRACTICE') {
      startPracticeTimer();
      if (lifelinesBar) lifelinesBar.style.display = 'flex';
      if (catSelector) catSelector.style.display = 'block';
      if (submitBtn) submitBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'flex';
    } else if (state.mode === 'EXAM') {
      if (lifelinesBar) lifelinesBar.style.display = 'none';
      if (catSelector) catSelector.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'flex';
      if (nextBtn) nextBtn.style.display = 'flex';

      if (state.exam.submitted) {
        showExplanation(prevAns === item.ans, item.exp);
      }
    }

    // Update Center Pill Matrix Trigger text
    const matrixBtnText = document.getElementById('matrix-btn-text');
    if (matrixBtnText) {
      matrixBtnText.textContent = `${state.currentIdx + 1} / ${state.deck.length}`;
    }

    updateStatusSummary();
  }

  // --------------------------------------------------------------------------
  // Practice Answer Selection
  // --------------------------------------------------------------------------
  function handleAnswerSelect(selectedIdx) {
    if (state.answeredInCurrent) return;
    state.answeredInCurrent = true;
    clearInterval(state.timerInterval);

    const item = state.deck[state.currentIdx];
    const isCorrect = selectedIdx === item.ans;

    const cards = document.querySelectorAll('.option-radio-card');
    cards.forEach((card, idx) => {
      card.style.pointerEvents = 'none';
      if (idx === item.ans) card.classList.add('correct');
      else if (idx === selectedIdx) card.classList.add('wrong');
    });

    state.attempted++;
    if (isCorrect) {
      state.score++;
      state.streak++;
      if (state.streak > state.maxStreak) state.maxStreak = state.streak;

      SoundFX.correct();

      // XP & bonus
      const elapsed = (Date.now() - state.questionStartTime) / 1000;
      const speedBonus = elapsed < 8 ? 15 : elapsed < 15 ? 10 : 0;
      const multiplier = state.streak >= 10 ? 2.0 : state.streak >= 5 ? 1.5 : 1.0;
      addXP(Math.round((25 + speedBonus) * multiplier));

      if (state.streak === 5 || state.streak === 10) {
        SoundFX.streak();
        Confetti.burst(40);
        state.lifelines.fifties = Math.min(5, state.lifelines.fifties + 1);
        updateLifelineButtons();
      }
    } else {
      state.streak = 0;
      SoundFX.wrong();
      state.missed.add(item.id);
      localStorage.setItem('uniosun_missed', JSON.stringify([...state.missed]));
      updateVaultUI();
    }

    showExplanation(isCorrect, item.exp);
    updateStatusSummary();
  }

  function showExplanation(isCorrect, expText) {
    const expBox = document.getElementById('explanation-panel');
    const header = document.getElementById('exp-header');
    const verdict = document.getElementById('feedback-verdict');
    const icon = document.getElementById('feedback-icon');
    const body = document.getElementById('explanation-text');

    if (!expBox) return;
    expBox.style.display = 'block';

    if (isCorrect) {
      header.className = 'exp-header correct';
      verdict.textContent = 'Correct!';
      icon.textContent = '✅';
    } else {
      header.className = 'exp-header wrong';
      verdict.textContent = 'Missed / Time Up!';
      icon.textContent = '❌';
    }
    body.textContent = expText || 'Review the official UNIOSUN syllabus guidelines.';
  }

  // --------------------------------------------------------------------------
  // CBT Exam Mode Handlers
  // --------------------------------------------------------------------------
  function selectExamAnswer(selectedIdx) {
    state.exam.userAnswers[state.currentIdx] = selectedIdx;

    const cards = document.querySelectorAll('.option-radio-card');
    cards.forEach((card, idx) => {
      card.classList.toggle('selected', idx === selectedIdx);
    });

    updateStatusSummary();
  }

  function toggleFlag() {
    if (state.mode === 'EXAM') {
      const idx = state.currentIdx;
      if (state.exam.flagged.has(idx)) state.exam.flagged.delete(idx);
      else state.exam.flagged.add(idx);
    } else {
      const item = state.deck[state.currentIdx];
      if (!item) return;
      if (state.flagged.has(item.id)) state.flagged.delete(item.id);
      else {
        state.flagged.add(item.id);
        state.vault.add(item.id);
        localStorage.setItem('uniosun_vault', JSON.stringify([...state.vault]));
      }
    }

    const flagBtn = document.getElementById('flag-btn');
    const isFlagged = state.mode === 'EXAM' ? state.exam.flagged.has(state.currentIdx) : state.flagged.has(state.deck[state.currentIdx].id);
    if (flagBtn) {
      flagBtn.classList.toggle('active', isFlagged);
      document.getElementById('flag-btn-text').textContent = isFlagged ? 'Flagged' : 'Flag';
    }

    updateStatusSummary();
    updateVaultUI();
  }

  function submitExam(force = false) {
    if (state.exam.submitted) return;

    const answeredCount = state.exam.userAnswers.filter(a => a !== -1).length;
    const totalCount = state.exam.questions.length;

    if (!force) {
      const unanswered = totalCount - answeredCount;
      const msg = unanswered > 0
        ? `You answered ${answeredCount} of ${totalCount} questions (${unanswered} unanswered).\n\nDo you want to submit your examination now?`
        : `You have answered all ${totalCount} questions!\n\nSubmit and view your result?`;

      if (!confirm(msg)) return;
    }

    clearInterval(state.exam.timerInterval);
    state.exam.submitted = true;

    let correctCount = 0;
    const pillars = {
      IT: { correct: 0, total: 0, title: 'IT & Computing' },
      UNIOSUN: { correct: 0, total: 0, title: 'UNIOSUN & Osun' },
      PEDAGOGY: { correct: 0, total: 0, title: 'Pedagogy & Ethics' },
      APTITUDE: { correct: 0, total: 0, title: 'Current Affairs & Logic' }
    };

    state.exam.questions.forEach((q, idx) => {
      const isCorrect = state.exam.userAnswers[idx] === q.ans;
      const sec = q.sec || 'IT';
      if (pillars[sec]) {
        pillars[sec].total++;
        if (isCorrect) pillars[sec].correct++;
      }
      if (isCorrect) correctCount++;
      else state.missed.add(q.id);
    });

    localStorage.setItem('uniosun_missed', JSON.stringify([...state.missed]));
    updateVaultUI();

    const pct = Math.round((correctCount / totalCount) * 100);
    addXP(correctCount * 30 + (pct >= 70 ? 500 : 200));

    // Show result modal
    const modal = document.getElementById('results-modal');
    const vBadge = document.getElementById('modal-verdict-badge');
    const sPct = document.getElementById('modal-score-pct');
    const sDetail = document.getElementById('modal-score-detail');
    const pContainer = document.getElementById('modal-pillars-breakdown');

    sPct.textContent = `${pct}%`;
    sDetail.textContent = `Scored ${correctCount} of ${totalCount} questions correctly`;

    if (pct >= 70) {
      vBadge.className = 'verdict-badge pass';
      vBadge.textContent = 'DISTINCTION — REGULARISATION CONFIRMED! 🏆';
      Confetti.burst(100);
    } else if (pct >= 50) {
      vBadge.className = 'verdict-badge pass';
      vBadge.textContent = 'PASSED — REGULARISATION SUCCESSFUL! 🎓';
      Confetti.burst(50);
    } else {
      vBadge.className = 'verdict-badge fail';
      vBadge.textContent = 'NEEDS DRILL — REVIEW MISSED TOPICS ⚠️';
    }

    pContainer.innerHTML = '';
    Object.values(pillars).forEach(p => {
      const pPct = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
      const card = document.createElement('div');
      card.className = 'pillar-card';
      card.innerHTML = `
        <div class="pillar-card-title">${p.title}</div>
        <div class="pillar-card-score">
          <span>${p.correct}/${p.total}</span>
          <span style="color:${pPct >= 70 ? '#10b981' : pPct >= 50 ? '#f59e0b' : '#ef4444'}">${pPct}%</span>
        </div>
      `;
      pContainer.appendChild(card);
    });

    modal.style.display = 'flex';
  }

  // --------------------------------------------------------------------------
  // Status Mini-Summary Bar (Screen 2 in Reference Image)
  // --------------------------------------------------------------------------
  function updateStatusSummary() {
    const curEl = document.getElementById('stat-current-num');
    const ansEl = document.getElementById('stat-answered-count');
    const flagEl = document.getElementById('stat-flagged-count');
    const unansEl = document.getElementById('stat-unanswered-count');

    if (curEl) curEl.textContent = state.currentIdx + 1;

    let ansCount = 0;
    let flagCount = 0;
    const total = state.deck.length;

    if (state.mode === 'EXAM') {
      ansCount = state.exam.userAnswers.filter(a => a !== -1).length;
      flagCount = state.exam.flagged.size;
    } else {
      ansCount = state.attempted;
      flagCount = state.flagged.size;
    }

    if (ansEl) ansEl.textContent = ansCount;
    if (flagEl) flagEl.textContent = flagCount;
    if (unansEl) unansEl.textContent = Math.max(0, total - ansCount);
  }

  // --------------------------------------------------------------------------
  // Bottom Sheet Question Navigation Matrix
  // --------------------------------------------------------------------------
  function openMatrixSheet() {
    const overlay = document.getElementById('matrix-sheet-overlay');
    const grid = document.getElementById('sheet-matrix-grid');
    if (!overlay || !grid) return;

    grid.innerHTML = '';
    state.deck.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'sheet-tile-btn';
      btn.textContent = idx + 1;

      if (idx === state.currentIdx) btn.classList.add('current');

      if (state.mode === 'EXAM') {
        if (state.exam.flagged.has(idx)) btn.classList.add('flagged');
        else if (state.exam.userAnswers[idx] !== -1) btn.classList.add('answered');
      } else {
        if (state.flagged.has(q.id)) btn.classList.add('flagged');
      }

      btn.onclick = () => {
        state.currentIdx = idx;
        renderCurrentQuestion();
        closeMatrixSheet();
      };

      grid.appendChild(btn);
    });

    overlay.style.display = 'flex';
  }

  function closeMatrixSheet() {
    const overlay = document.getElementById('matrix-sheet-overlay');
    if (overlay) overlay.style.display = 'none';
  }

  function jumpToNumber() {
    const input = document.getElementById('sheet-jump-input');
    if (!input) return;
    const val = parseInt(input.value, 10);
    if (isNaN(val) || val < 1 || val > state.deck.length) {
      alert(`Please enter a number between 1 and ${state.deck.length}`);
      return;
    }
    state.currentIdx = val - 1;
    renderCurrentQuestion();
    closeMatrixSheet();
    input.value = '';
  }

  // --------------------------------------------------------------------------
  // Lifelines (Practice Mode)
  // --------------------------------------------------------------------------
  function use5050() {
    if (state.answeredInCurrent || state.lifelines.fifties <= 0) return;
    const item = state.deck[state.currentIdx];
    if (!item) return;

    state.lifelines.fifties--;
    updateLifelineButtons();

    const wrongIndices = [0, 1, 2, 3].filter(i => i !== item.ans).sort(() => Math.random() - 0.5).slice(0, 2);
    wrongIndices.forEach(idx => {
      const card = document.getElementById(`opt-card-${idx}`);
      if (card) card.classList.add('eliminated');
    });
  }

  function useFreeze() {
    if (state.answeredInCurrent || state.lifelines.freezes <= 0) return;
    state.lifelines.freezes--;
    updateLifelineButtons();
    state.timeLeft += 30;
    updateTimerUI();
  }

  function useHint() {
    if (state.answeredInCurrent || state.lifelines.hints <= 0) return;
    state.lifelines.hints--;
    updateLifelineButtons();

    const item = state.deck[state.currentIdx];
    const hintBox = document.getElementById('hint-panel');
    const hintText = document.getElementById('hint-text');

    if (hintBox && hintText) {
      hintText.textContent = item.exp ? item.exp.slice(0, 100) + '...' : 'Recall core UNIOSUN rules.';
      hintBox.style.display = 'block';
    }
  }

  function updateLifelineButtons() {
    const c5050 = document.getElementById('count-5050');
    const cFreeze = document.getElementById('count-freeze');
    const cHint = document.getElementById('count-hint');

    if (c5050) c5050.textContent = state.lifelines.fifties;
    if (cFreeze) cFreeze.textContent = state.lifelines.freezes;
    if (cHint) cHint.textContent = state.lifelines.hints;
  }

  // --------------------------------------------------------------------------
  // Vault & Screen Navigation
  // --------------------------------------------------------------------------
  function updateVaultUI() {
    const count = new Set([...state.vault, ...state.missed]).size;
    const bCount = document.getElementById('bottom-vault-count');
    const vTotal = document.getElementById('vault-total-count');

    if (bCount) bCount.textContent = count;
    if (vTotal) vTotal.textContent = count;
  }

  function switchScreen(screenId) {
    state.currentScreen = screenId;

    document.querySelectorAll('.app-screen').forEach(s => {
      s.classList.toggle('active', s.id === screenId);
    });

    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-target') === screenId);
    });

    if (screenId === 'screen-profile') {
      updateRankUI();
    }
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('uniosun_theme', theme);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = theme === 'light' ? '🌙' : '☀️';
  }

  function toggleTheme() {
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('uniosun_sound', state.soundEnabled ? 'true' : 'false');
    const icon = document.getElementById('sound-icon');
    if (icon) icon.textContent = state.soundEnabled ? '🔊' : '🔇';
  }

  // --------------------------------------------------------------------------
  // App Initialization
  // --------------------------------------------------------------------------
  function init() {
    Confetti.init();
    applyTheme(state.theme);
    updateRankUI();
    updateLifelineButtons();
    updateVaultUI();

    // Mode Buttons
    document.getElementById('mode-btn-practice').onclick = () => {
      state.mode = 'PRACTICE';
      document.getElementById('mode-btn-practice').classList.add('active');
      document.getElementById('mode-btn-exam').classList.remove('active');
      clearInterval(state.exam.timerInterval);
      loadDeck();
    };

    document.getElementById('mode-btn-exam').onclick = () => {
      state.mode = 'EXAM';
      document.getElementById('mode-btn-exam').classList.add('active');
      document.getElementById('mode-btn-practice').classList.remove('active');
      startExamMode();
    };

    // Category Select
    const pillarSelect = document.getElementById('pillar-select');
    if (pillarSelect) {
      pillarSelect.onchange = (e) => {
        state.filterCat = e.target.value;
        loadDeck();
      };
    }

    // Bottom Navigation Tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.onclick = () => switchScreen(tab.getAttribute('data-target'));
    });

    // Navigation Buttons
    document.getElementById('next-btn').onclick = () => {
      state.currentIdx = (state.currentIdx + 1) % state.deck.length;
      renderCurrentQuestion();
    };

    document.getElementById('prev-btn').onclick = () => {
      state.currentIdx = (state.currentIdx - 1 + state.deck.length) % state.deck.length;
      renderCurrentQuestion();
    };

    document.getElementById('submit-exam-btn').onclick = () => submitExam(false);

    // Matrix Sheet Triggers
    document.getElementById('matrix-trigger-btn').onclick = openMatrixSheet;
    document.getElementById('close-sheet-btn').onclick = closeMatrixSheet;
    document.getElementById('matrix-sheet-overlay').onclick = (e) => {
      if (e.target.id === 'matrix-sheet-overlay') closeMatrixSheet();
    };
    document.getElementById('sheet-jump-btn').onclick = jumpToNumber;

    // Flag & Lifelines
    document.getElementById('flag-btn').onclick = toggleFlag;
    document.getElementById('hint-btn').onclick = useHint;
    document.getElementById('lifeline-5050').onclick = use5050;
    document.getElementById('lifeline-freeze').onclick = useFreeze;
    document.getElementById('lifeline-hint').onclick = useHint;

    // Top Header Buttons
    document.getElementById('theme-toggle-btn').onclick = toggleTheme;
    document.getElementById('sound-toggle-btn').onclick = toggleSound;

    // Results Modal Buttons
    document.getElementById('close-results-btn').onclick = () => {
      document.getElementById('results-modal').style.display = 'none';
    };
    document.getElementById('review-exam-answers-btn').onclick = () => {
      document.getElementById('results-modal').style.display = 'none';
      state.currentIdx = 0;
      renderCurrentQuestion();
    };
    document.getElementById('restart-mock-btn').onclick = () => {
      document.getElementById('results-modal').style.display = 'none';
      startExamMode();
    };

    // Vault Drill Button
    document.getElementById('drill-vault-btn').onclick = () => {
      state.mode = 'VAULT';
      switchScreen('screen-arena');
      loadDeck();
    };

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      const k = e.key.toUpperCase();
      if (k === '1' || k === 'A') {
        const c = document.getElementById('opt-card-0');
        if (c) c.click();
      } else if (k === '2' || k === 'B') {
        const c = document.getElementById('opt-card-1');
        if (c) c.click();
      } else if (k === '3' || k === 'C') {
        const c = document.getElementById('opt-card-2');
        if (c) c.click();
      } else if (k === '4' || k === 'D') {
        const c = document.getElementById('opt-card-3');
        if (c) c.click();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        state.currentIdx = (state.currentIdx + 1) % state.deck.length;
        renderCurrentQuestion();
      }
    });

    // Start with Practice Deck
    loadDeck();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
