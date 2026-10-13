// ==========================================================================
// UNIOSUN Regularisation CBT Arena - Interactive Gamified Controller
// Complete Game Engine, Sound Synthesizer, Mock CBT Simulator & Vault
// ==========================================================================

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Academic Hierarchy & Ranks
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------
  const state = {
    mode: 'PRACTICE', // 'PRACTICE' | 'EXAM' | 'VAULT'
    filterCat: 'ALL',
    deck: [],
    currentIdx: 0,
    answeredInCurrent: false,
    selectedOptionIdx: -1,
    
    // Stats for Practice
    score: 0,
    attempted: 0,
    streak: 0,
    maxStreak: 0,
    
    // Theme (defaults to clean light theme)
    theme: localStorage.getItem('uniosun_theme') || 'light',
    
    // XP & Level
    xp: parseInt(localStorage.getItem('uniosun_xp') || '0', 10),
    
    // Sound
    soundEnabled: localStorage.getItem('uniosun_sound') !== 'false',
    
    // Vault / Missed Questions
    vault: new Set(JSON.parse(localStorage.getItem('uniosun_vault') || '[]')),
    missed: new Set(JSON.parse(localStorage.getItem('uniosun_missed') || '[]')),
    
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
      durationSeconds: 45 * 60, // 45 minutes
      timeRemaining: 45 * 60,
      timerInterval: null,
      submitted: false,
      reviewMode: false
    }
  };

  // --------------------------------------------------------------------------
  // Web Audio API Synthesizer (Zero External Dependencies)
  // --------------------------------------------------------------------------
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
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
      // Ascending C major chime
      playTone(523.25, 'sine', 0.12, 0.15, 0.00); // C5
      playTone(659.25, 'sine', 0.14, 0.15, 0.07); // E5
      playTone(783.99, 'sine', 0.16, 0.15, 0.14); // G5
      playTone(1046.50, 'sine', 0.28, 0.20, 0.21); // C6
    },
    wrong() {
      if (navigator.vibrate) try { navigator.vibrate([60, 40, 60]); } catch (e) {}
      // Low double buzz
      playTone(220, 'triangle', 0.18, 0.18, 0.00);
      playTone(180, 'sawtooth', 0.22, 0.15, 0.08);
    },
    streak() {
      if (navigator.vibrate) try { navigator.vibrate([40, 30, 50]); } catch (e) {}
      // Glissando sweep
      playTone(440, 'triangle', 0.08, 0.12, 0.00);
      playTone(554.37, 'triangle', 0.08, 0.12, 0.06);
      playTone(659.25, 'triangle', 0.12, 0.15, 0.12);
      playTone(880, 'sine', 0.25, 0.20, 0.18);
    },
    levelUp() {
      // Triumphant Fanfare
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        playTone(freq, 'triangle', 0.25, 0.18, idx * 0.08);
      });
    },
    lifeline() {
      playTone(880, 'sine', 0.1, 0.15, 0.00);
      playTone(1320, 'sine', 0.15, 0.15, 0.06);
    },
    tick() {
      playTone(700, 'triangle', 0.04, 0.05, 0);
    }
  };

  // --------------------------------------------------------------------------
  // Confetti Particle Physics System
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

    burst(count = 60) {
      if (!this.canvas) return;
      const colors = ['#10b981', '#38bdf8', '#f59e0b', '#ec4899', '#a855f7', '#fbbf24'];
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight * 0.35;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 4;
        this.particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 12,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.01
        });
      }

      if (!this.animId) {
        this.loop();
      }
    },

    loop() {
      if (!this.ctx || !this.canvas) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
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
  // XP & Rank Calculations
  // --------------------------------------------------------------------------
  function getCurrentRank(xp) {
    for (let i = RANKS.length - 1; i >= 0; i--) {
      if (xp >= RANKS[i].minXp) {
        return RANKS[i];
      }
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
      // Level UP celebration!
      SoundFX.levelUp();
      Confetti.burst(100);
      showRankUpNotification(newRank);
    }
  }

  function showRankUpNotification(rank) {
    const banner = document.createElement('div');
    banner.style.cssText = `
      position: fixed; top: 80px; left: 50%; transform: translateX(-50%);
      background: linear-gradient(135deg, #064e3b, #0f172a);
      border: 2px solid #f59e0b; border-radius: 16px; padding: 16px 24px;
      color: #fff; z-index: 9999; box-shadow: 0 10px 35px rgba(245, 158, 11, 0.4);
      display: flex; align-items: center; gap: 14px; animation: fadeIn 0.3s ease;
    `;
    banner.innerHTML = `
      <div style="font-size: 2rem;">${rank.icon}</div>
      <div>
        <div style="font-size: 0.8rem; color: #fbbf24; font-weight: 800; text-transform: uppercase;">PROMOTION EARNED!</div>
        <div style="font-size: 1.15rem; font-weight: 800;">Ranked: ${rank.title} (Level ${rank.level})</div>
      </div>
    `;
    document.body.appendChild(banner);
    setTimeout(() => {
      banner.style.opacity = '0';
      banner.style.transition = 'opacity 0.4s';
      setTimeout(() => banner.remove(), 400);
    }, 3500);
  }

  function updateRankUI() {
    const rank = getCurrentRank(state.xp);
    const titleEl = document.getElementById('rank-title');
    const xpTextEl = document.getElementById('rank-xp-text');
    const iconEl = document.getElementById('rank-icon');

    if (titleEl) titleEl.textContent = rank.title;
    if (iconEl) iconEl.textContent = rank.icon;

    if (xpTextEl) {
      if (rank.level === 9) {
        xpTextEl.textContent = `${state.xp.toLocaleString()} XP (Max Rank)`;
      } else {
        const nextXp = rank.maxXp;
        xpTextEl.textContent = `${state.xp.toLocaleString()} / ${nextXp.toLocaleString()} XP (Lvl ${rank.level})`;
      }
    }
  }

  // --------------------------------------------------------------------------
  // Question Bank Utilities & Hint Generator
  // --------------------------------------------------------------------------
  function generateHint(item) {
    // Generate high-yield smart clue based on question properties
    const exp = item.exp || '';
    if (item.sec === 'UNIOSUN') {
      if (item.q.includes('license')) return "Think of December 2006 (just right before 2007).";
      if (item.q.includes('Chancellor') && !item.q.includes('Pioneer')) return "Popularly known as 'Mama BOVAS'.";
      if (item.q.includes('Pro-Chancellor')) return "A distinguished professor formerly a key national party secretary.";
      if (item.q.includes('motto')) return "Remember the Living Spring water motif of Osun!";
      if (item.q.includes('Management')) return "Hosted in Okuku campus.";
      if (item.q.includes('Law')) return "Think of Ifetedo campus.";
      if (item.q.includes('Agriculture')) return "Hosted in Ejigbo campus.";
      if (item.q.includes('Humanities')) return "Hosted in Ikire campus.";
      if (item.q.includes('Registrar')) return "Mrs. Atinuke Abosede Oguntunde.";
    }
    if (item.sec === 'PEDAGOGY') {
      if (item.q.includes('ratio') || item.q.includes('CCMAS')) return "The national core takes the major 70% chunk; university peculiarity gets 30%.";
      if (item.q.includes('attendance')) return "Three-quarters (75%) presence is mandatory.";
      if (item.q.includes('Salami')) return "Think of slicing a single sausage into pieces!";
      if (item.q.includes('Validity')) return "Measures what it actually purports to measure.";
      if (item.q.includes('Reliability')) return "Consistent, repeatable results across trials.";
      if (item.q.includes('Triad') || item.q.includes('mandates')) return "Teaching, Research, and Community Service.";
    }
    if (item.sec === 'IT') {
      if (item.q.includes('OSI') && item.q.includes('packet')) return "Layer 3 handles logical routing!";
      if (item.q.includes('/27')) return "Formula: 2^(32-27) - 2 = 32 - 2 = 30.";
      if (item.q.includes('ARP')) return "Resolves IP (Layer 3) to MAC address (Layer 2).";
      if (item.q.includes('403')) return "Server understands who you are, but you are FORBIDDEN access.";
      if (item.q.includes('Starvation')) return "Aging gradually boosts priority to cure this!";
      if (item.q.includes('Thrashing')) return "When the CPU spends more time paging than executing code.";
    }
    if (item.sec === 'APTITUDE') {
      if (item.q.includes('Speaker')) return "Rt. Hon. Adewale Olumide Egbedun.";
      if (item.q.includes('CJN')) return "Hon. Justice Kudirat Kekere-Ekun.";
      if (item.q.includes('Anthem')) return "Written by Lillian Jean Williams; music by Frances Benda.";
    }

    // Default snippet from explanation
    const words = exp.split(' ');
    if (words.length > 5) {
      return words.slice(0, 7).join(' ') + '...';
    }
    return exp || "Recall the core definitions from the UNIOSUN orientation guide.";
  }

  // --------------------------------------------------------------------------
  // Deck Loading & Filtering
  // --------------------------------------------------------------------------
  function loadDeck() {
    if (state.mode === 'PRACTICE') {
      if (state.filterCat === 'ALL') {
        state.deck = [...questionBank];
      } else {
        state.deck = questionBank.filter(q => q.sec === state.filterCat);
      }
    } else if (state.mode === 'VAULT') {
      const vaultIds = new Set([...state.vault, ...state.missed]);
      state.deck = questionBank.filter(q => vaultIds.has(q.id));
      if (state.deck.length === 0) {
        state.deck = [
          {
            id: 0,
            sec: 'UNIOSUN',
            secTitle: 'Revision Vault Empty',
            part: 'All Clear!',
            q: 'Your Revision Vault is currently empty! Any questions you miss or bookmark will automatically appear here for rapid drilling.',
            opts: [
              'Switch to Practice Mode',
              'Take a Mock Exam',
              'Open Cram Sheet',
              'Keep Drilling'
            ],
            ans: 0,
            exp: 'Switch to Practice Mode or Mock Exam to start testing your knowledge!'
          }
        ];
      }
    } else if (state.mode === 'EXAM') {
      // Mock Exam: Proportional sampling across pillars (Total 60 Questions)
      state.deck = state.exam.questions;
    }

    state.currentIdx = 0;
    renderCurrentQuestion();
    updateVaultBadges();
  }

  function startExamMode() {
    // Proportional distribution:
    // IT: 24 questions (from 80)
    // UNIOSUN: 15 questions (from 50)
    // PEDAGOGY: 12 questions (from 40)
    // APTITUDE: 9 questions (from 30)
    // Total = 60 questions!
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    const itPool = shuffle(questionBank.filter(q => q.sec === 'IT')).slice(0, 24);
    const uniosunPool = shuffle(questionBank.filter(q => q.sec === 'UNIOSUN')).slice(0, 15);
    const pedPool = shuffle(questionBank.filter(q => q.sec === 'PEDAGOGY')).slice(0, 12);
    const aptPool = shuffle(questionBank.filter(q => q.sec === 'APTITUDE')).slice(0, 9);

    const fullExamList = shuffle([...itPool, ...uniosunPool, ...pedPool, ...aptPool]);

    state.exam.active = true;
    state.exam.questions = fullExamList;
    state.exam.userAnswers = new Array(fullExamList.length).fill(-1);
    state.exam.flagged = new Set();
    state.exam.submitted = false;
    state.exam.reviewMode = false;
    state.exam.timeRemaining = state.exam.durationSeconds;

    state.deck = fullExamList;
    state.currentIdx = 0;

    startExamTimer();
    renderCbtMatrix();
    renderCurrentQuestion();
  }

  // --------------------------------------------------------------------------
  // Timer Engines
  // --------------------------------------------------------------------------
  function startPracticeTimer() {
    clearInterval(state.timerInterval);
    state.timeLeft = 25;
    state.questionStartTime = Date.now();
    updateTimerUI();

    state.timerInterval = setInterval(() => {
      state.timeLeft--;
      updateTimerUI();
      if (state.timeLeft <= 5 && state.timeLeft > 0) {
        SoundFX.tick();
      }
      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        if (!state.answeredInCurrent) {
          handleAnswerSelect(-1); // Time out!
        }
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
        submitExam(true); // Auto submit on timer expiry!
      }
    }, 1000);
  }

  function updateTimerUI() {
    const timerEl = document.getElementById('stat-timer');
    const badgeEl = document.getElementById('timer-badge');
    if (!timerEl || !badgeEl) return;

    timerEl.textContent = state.timeLeft;
    if (state.timeLeft <= 5) {
      badgeEl.classList.add('urgent');
    } else {
      badgeEl.classList.remove('urgent');
    }
  }

  function updateExamTimerUI() {
    const timerEl = document.getElementById('stat-timer');
    const badgeEl = document.getElementById('timer-badge');
    if (!timerEl || !badgeEl) return;

    const m = Math.floor(state.exam.timeRemaining / 60);
    const s = state.exam.timeRemaining % 60;
    const formatted = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    timerEl.textContent = formatted;

    if (state.exam.timeRemaining <= 300) {
      badgeEl.classList.add('urgent');
    } else {
      badgeEl.classList.remove('urgent');
    }
  }

  // --------------------------------------------------------------------------
  // Render Current Question
  // --------------------------------------------------------------------------
  function renderCurrentQuestion() {
    const item = state.deck[state.currentIdx];
    if (!item) return;

    state.answeredInCurrent = false;
    state.selectedOptionIdx = -1;

    // Category & Part Tags
    const catEl = document.getElementById('q-category');
    const partEl = document.getElementById('q-part');
    const promptEl = document.getElementById('q-prompt');
    const expPanel = document.getElementById('explanation-panel');
    const hintPanel = document.getElementById('hint-panel');
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const flagBtn = document.getElementById('flag-btn');

    catEl.textContent = item.secTitle || item.sec;
    partEl.textContent = item.part || '';
    promptEl.textContent = `Q${state.currentIdx + 1}. ${item.q}`;

    // Reset Panels
    expPanel.style.display = 'none';
    hintPanel.style.display = 'none';

    // Bookmark State
    const isBookmarked = state.vault.has(item.id);
    bookmarkBtn.classList.toggle('bookmarked', isBookmarked);
    document.getElementById('bookmark-text').textContent = isBookmarked ? 'Bookmarked' : 'Bookmark';

    // Progress
    const total = state.deck.length;
    const current = state.currentIdx + 1;
    document.getElementById('progress-text').textContent = `Question ${current} of ${total}`;
    const pct = Math.round((current / total) * 100);
    document.getElementById('session-progress-pct').textContent = `${pct}% Complete`;
    document.getElementById('progress-bar').style.width = `${pct}%`;

    // Render Options
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    // In Exam Review Mode, or if previously answered in Exam Mode
    let prevExamAns = -1;
    if (state.mode === 'EXAM') {
      prevExamAns = state.exam.userAnswers[state.currentIdx];
    }

    item.opts.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.id = `opt-btn-${idx}`;

      const keySpan = document.createElement('span');
      keySpan.className = 'option-key';
      keySpan.textContent = letters[idx];

      const contentSpan = document.createElement('span');
      contentSpan.className = 'option-content';
      contentSpan.textContent = optText;

      btn.appendChild(keySpan);
      btn.appendChild(contentSpan);

      // If in Exam Review Mode, show answers
      if (state.mode === 'EXAM' && state.exam.submitted) {
        btn.disabled = true;
        if (idx === item.ans) {
          btn.classList.add('correct');
        } else if (idx === prevExamAns) {
          btn.classList.add('wrong');
        }
      } else if (state.mode === 'EXAM') {
        // Pre-select if already chosen
        if (idx === prevExamAns) {
          btn.style.borderColor = '#38bdf8';
          btn.style.background = 'rgba(56, 189, 248, 0.15)';
        }
        btn.onclick = () => selectExamAnswer(idx);
      } else {
        // Practice / Vault Mode
        btn.onclick = () => handleAnswerSelect(idx);
      }

      container.appendChild(btn);
    });

    // Practice Mode: Start 25s question timer
    if (state.mode === 'PRACTICE') {
      startPracticeTimer();
      document.getElementById('next-btn').style.display = 'none';
      document.getElementById('lifelines-row').style.display = 'flex';
      document.getElementById('cbt-matrix-panel').style.display = 'none';
      document.getElementById('submit-exam-btn').style.display = 'none';
      if (flagBtn) flagBtn.style.display = 'none';
    } else if (state.mode === 'EXAM') {
      document.getElementById('lifelines-row').style.display = 'none';
      document.getElementById('cbt-matrix-panel').style.display = 'block';
      document.getElementById('submit-exam-btn').style.display = 'inline-flex';
      document.getElementById('next-btn').style.display = 'inline-flex';
      if (flagBtn) flagBtn.style.display = 'inline-flex';

      // Update flag button status
      const isFlagged = state.exam.flagged.has(state.currentIdx);
      flagBtn.classList.toggle('active', isFlagged);
      flagBtn.textContent = isFlagged ? '🚩 Flagged' : '🏳️ Flag';

      // If exam submitted (review mode), show explanation!
      if (state.exam.submitted) {
        showExplanation(prevExamAns === item.ans, item.exp);
      }
    } else if (state.mode === 'VAULT') {
      startPracticeTimer();
      document.getElementById('next-btn').style.display = 'none';
      document.getElementById('lifelines-row').style.display = 'flex';
      document.getElementById('cbt-matrix-panel').style.display = 'none';
      document.getElementById('submit-exam-btn').style.display = 'none';
      if (flagBtn) flagBtn.style.display = 'none';
    }

    // Refresh CBT Matrix indicators if in exam mode
    if (state.mode === 'EXAM') {
      updateMatrixGridState();
    }
  }

  // --------------------------------------------------------------------------
  // Practice Mode Answer Evaluation
  // --------------------------------------------------------------------------
  function handleAnswerSelect(selectedIdx) {
    if (state.answeredInCurrent) return;
    state.answeredInCurrent = true;
    clearInterval(state.timerInterval);

    const item = state.deck[state.currentIdx];
    const isCorrect = selectedIdx === item.ans;

    // Visual buttons feedback
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === item.ans) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong');
      }
    });

    // Update Stats
    state.attempted++;
    if (isCorrect) {
      state.score++;
      state.streak++;
      if (state.streak > state.maxStreak) {
        state.maxStreak = state.streak;
      }

      SoundFX.correct();

      // XP calculation: Base 25 + speed bonus + streak multiplier
      const timeElapsed = (Date.now() - state.questionStartTime) / 1000;
      let speedBonus = 0;
      if (timeElapsed < 8) speedBonus = 15;
      else if (timeElapsed < 15) speedBonus = 10;

      let multiplier = 1.0;
      if (state.streak >= 15) multiplier = 3.0;
      else if (state.streak >= 10) multiplier = 2.0;
      else if (state.streak >= 5) multiplier = 1.5;
      else if (state.streak >= 3) multiplier = 1.25;

      const earnedXP = Math.round((25 + speedBonus) * multiplier);
      addXP(earnedXP);

      // Streak celebration milestones!
      if (state.streak === 5 || state.streak === 10 || state.streak === 15) {
        SoundFX.streak();
        Confetti.burst(50);
        // Recharge 1 lifeline as reward!
        state.lifelines.fifties = Math.min(5, state.lifelines.fifties + 1);
        updateLifelineButtons();
      }
    } else {
      state.streak = 0;
      SoundFX.wrong();

      // Automatically log to missed questions set
      state.missed.add(item.id);
      localStorage.setItem('uniosun_missed', JSON.stringify([...state.missed]));
      updateVaultBadges();
    }

    updateStatsUI();
    showExplanation(isCorrect, item.exp);
    document.getElementById('next-btn').style.display = 'inline-flex';
  }

  function showExplanation(isCorrect, explanationText) {
    const expPanel = document.getElementById('explanation-panel');
    const header = document.getElementById('explanation-header');
    const verdict = document.getElementById('feedback-verdict');
    const icon = document.getElementById('feedback-icon');
    const body = document.getElementById('explanation-text');

    expPanel.style.display = 'block';

    if (isCorrect) {
      header.className = 'explanation-header correct-text';
      verdict.textContent = 'Correct!';
      icon.textContent = '✅';
    } else {
      header.className = 'explanation-header wrong-text';
      verdict.textContent = 'Missed / Time Up!';
      icon.textContent = '❌';
    }

    body.textContent = explanationText;
  }

  function updateStatsUI() {
    document.getElementById('stat-score').textContent = state.score;
    document.getElementById('stat-attempted').textContent = state.attempted;
    const pct = state.attempted > 0 ? Math.round((state.score / state.attempted) * 100) : 0;
    document.getElementById('stat-pct').textContent = `${pct}%`;

    const streakEl = document.getElementById('stat-streak');
    const streakBadge = document.getElementById('streak-badge');
    streakEl.textContent = state.streak;

    if (state.streak >= 5) {
      streakBadge.classList.add('on-fire');
    } else {
      streakBadge.classList.remove('on-fire');
    }
  }

  // --------------------------------------------------------------------------
  // CBT Exam Mode Handlers
  // --------------------------------------------------------------------------
  function selectExamAnswer(selectedIdx) {
    state.exam.userAnswers[state.currentIdx] = selectedIdx;

    // Visual selection
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
      if (idx === selectedIdx) {
        btn.style.borderColor = '#38bdf8';
        btn.style.background = 'rgba(56, 189, 248, 0.15)';
      } else {
        btn.style.borderColor = '#293548';
        btn.style.background = 'rgba(15, 23, 42, 0.95)';
      }
    });

    updateMatrixGridState();
  }

  function toggleFlagQuestion() {
    if (state.mode !== 'EXAM') return;
    const idx = state.currentIdx;
    if (state.exam.flagged.has(idx)) {
      state.exam.flagged.delete(idx);
    } else {
      state.exam.flagged.add(idx);
    }

    const flagBtn = document.getElementById('flag-btn');
    const isFlagged = state.exam.flagged.has(idx);
    flagBtn.classList.toggle('active', isFlagged);
    flagBtn.textContent = isFlagged ? '🚩 Flagged' : '🏳️ Flag';

    updateMatrixGridState();
  }

  function renderCbtMatrix() {
    const grid = document.getElementById('matrix-grid');
    grid.innerHTML = '';

    state.exam.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'matrix-btn';
      btn.id = `matrix-btn-${idx}`;
      btn.textContent = idx + 1;
      btn.onclick = () => {
        state.currentIdx = idx;
        renderCurrentQuestion();
      };
      grid.appendChild(btn);
    });
  }

  function updateMatrixGridState() {
    if (state.mode !== 'EXAM') return;

    state.exam.questions.forEach((q, idx) => {
      const btn = document.getElementById(`matrix-btn-${idx}`);
      if (!btn) return;

      btn.className = 'matrix-btn';

      if (idx === state.currentIdx) {
        btn.classList.add('current');
      }

      if (state.exam.flagged.has(idx)) {
        btn.classList.add('flagged');
      } else if (state.exam.userAnswers[idx] !== -1) {
        btn.classList.add('answered');
      }
    });
  }

  function submitExam(force = false) {
    if (state.exam.submitted) return;

    const answeredCount = state.exam.userAnswers.filter(a => a !== -1).length;
    const totalCount = state.exam.questions.length;

    if (!force) {
      const unanswered = totalCount - answeredCount;
      const confirmMsg = unanswered > 0
        ? `You have answered ${answeredCount} of ${totalCount} questions (${unanswered} unanswered).\n\nDo you want to submit your CBT examination now?`
        : `You have answered all ${totalCount} questions!\n\nSubmit and view your regularisation result?`;

      if (!confirm(confirmMsg)) {
        return;
      }
    }

    clearInterval(state.exam.timerInterval);
    state.exam.submitted = true;

    // Calculate Scores & Breakdown by Pillar
    let correctCount = 0;
    const pillarScores = {
      IT: { correct: 0, total: 0, title: '💻 IT & Computing' },
      UNIOSUN: { correct: 0, total: 0, title: '🏛️ UNIOSUN & Osun' },
      PEDAGOGY: { correct: 0, total: 0, title: '📚 Pedagogy & Ethics' },
      APTITUDE: { correct: 0, total: 0, title: '🧠 Current Affairs & Logic' }
    };

    state.exam.questions.forEach((q, idx) => {
      const userAns = state.exam.userAnswers[idx];
      const isCorrect = userAns === q.ans;
      const sec = q.sec || 'IT';

      if (pillarScores[sec]) {
        pillarScores[sec].total++;
        if (isCorrect) pillarScores[sec].correct++;
      }

      if (isCorrect) {
        correctCount++;
      } else {
        state.missed.add(q.id);
      }
    });

    localStorage.setItem('uniosun_missed', JSON.stringify([...state.missed]));
    updateVaultBadges();

    const scorePct = Math.round((correctCount / totalCount) * 100);

    // Award XP based on exam score!
    const earnedExamXP = correctCount * 30 + (scorePct >= 70 ? 500 : 200);
    addXP(earnedExamXP);

    // Show Results Modal
    showExamResultsModal(correctCount, totalCount, scorePct, pillarScores);
  }

  function showExamResultsModal(correct, total, pct, pillars) {
    const modal = document.getElementById('results-modal');
    const verdictBadge = document.getElementById('modal-verdict-badge');
    const scorePctEl = document.getElementById('modal-score-pct');
    const scoreDetailEl = document.getElementById('modal-score-detail');
    const pillarsContainer = document.getElementById('modal-pillars-breakdown');

    scorePctEl.textContent = `${pct}%`;
    scoreDetailEl.textContent = `You scored ${correct} out of ${total} questions correctly`;

    if (pct >= 70) {
      verdictBadge.className = 'verdict-badge pass';
      verdictBadge.textContent = 'DISTINCTION — REGULARISATION CONFIRMED! 🏆';
      Confetti.burst(120);
      SoundFX.levelUp();
    } else if (pct >= 50) {
      verdictBadge.className = 'verdict-badge pass';
      verdictBadge.textContent = 'PASSED — REGULARISATION SUCCESSFUL! 🎓';
      Confetti.burst(60);
      SoundFX.streak();
    } else {
      verdictBadge.className = 'verdict-badge fail';
      verdictBadge.textContent = 'NEEDS DRILL — DRILL WEAK AREAS BEFORE CBT ⚠️';
      SoundFX.wrong();
    }

    pillarsContainer.innerHTML = '';
    Object.values(pillars).forEach(p => {
      const pPct = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
      const card = document.createElement('div');
      card.className = 'pillar-card';
      card.innerHTML = `
        <div class="pillar-card-title">${p.title}</div>
        <div class="pillar-card-score">
          <span>${p.correct} / ${p.total}</span>
          <span style="color:${pPct >= 70 ? '#34d399' : pPct >= 50 ? '#fbbf24' : '#f87171'}">${pPct}%</span>
        </div>
      `;
      pillarsContainer.appendChild(card);
    });

    modal.style.display = 'flex';
  }

  // --------------------------------------------------------------------------
  // Lifelines (50:50, Time Freeze, Hint)
  // --------------------------------------------------------------------------
  function use5050() {
    if (state.answeredInCurrent || state.lifelines.fifties <= 0) return;
    const item = state.deck[state.currentIdx];
    if (!item) return;

    state.lifelines.fifties--;
    updateLifelineButtons();
    SoundFX.lifeline();

    // Pick two incorrect options to eliminate
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== item.ans);
    const toEliminate = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);

    toEliminate.forEach(idx => {
      const btn = document.getElementById(`opt-btn-${idx}`);
      if (btn) btn.classList.add('eliminated');
    });
  }

  function useTimeFreeze() {
    if (state.answeredInCurrent || state.lifelines.freezes <= 0) return;
    state.lifelines.freezes--;
    updateLifelineButtons();
    SoundFX.lifeline();

    state.timeLeft += 30;
    updateTimerUI();
  }

  function useHint() {
    if (state.answeredInCurrent || state.lifelines.hints <= 0) return;
    state.lifelines.hints--;
    updateLifelineButtons();
    SoundFX.lifeline();

    const item = state.deck[state.currentIdx];
    const hintPanel = document.getElementById('hint-panel');
    const hintText = document.getElementById('hint-text');

    hintText.textContent = generateHint(item);
    hintPanel.style.display = 'block';
  }

  function updateLifelineButtons() {
    document.getElementById('count-5050').textContent = state.lifelines.fifties;
    document.getElementById('count-freeze').textContent = state.lifelines.freezes;
    document.getElementById('count-hint').textContent = state.lifelines.hints;

    document.getElementById('lifeline-5050').disabled = state.lifelines.fifties <= 0;
    document.getElementById('lifeline-freeze').disabled = state.lifelines.freezes <= 0;
    document.getElementById('lifeline-hint').disabled = state.lifelines.hints <= 0;
  }

  // --------------------------------------------------------------------------
  // Bookmark & Vault Functions
  // --------------------------------------------------------------------------
  function toggleBookmark() {
    const item = state.deck[state.currentIdx];
    if (!item || item.id === 0) return;

    if (state.vault.has(item.id)) {
      state.vault.delete(item.id);
    } else {
      state.vault.add(item.id);
    }

    localStorage.setItem('uniosun_vault', JSON.stringify([...state.vault]));
    updateVaultBadges();

    const isBookmarked = state.vault.has(item.id);
    const bookmarkBtn = document.getElementById('bookmark-btn');
    bookmarkBtn.classList.toggle('bookmarked', isBookmarked);
    document.getElementById('bookmark-text').textContent = isBookmarked ? 'Bookmarked' : 'Bookmark';
  }

  function updateVaultBadges() {
    const count = new Set([...state.vault, ...state.missed]).size;
    const badge1 = document.getElementById('vault-count-badge');
    const badge2 = document.getElementById('tab-vault-count');
    if (badge1) badge1.textContent = `Vault (${count})`;
    if (badge2) badge2.textContent = count;
  }

  // --------------------------------------------------------------------------
  // Navigation: Next, Prev, Shuffle
  // --------------------------------------------------------------------------
  function nextQuestion() {
    if (state.deck.length === 0) return;
    state.currentIdx = (state.currentIdx + 1) % state.deck.length;
    renderCurrentQuestion();
  }

  function prevQuestion() {
    if (state.deck.length === 0) return;
    state.currentIdx = (state.currentIdx - 1 + state.deck.length) % state.deck.length;
    renderCurrentQuestion();
  }

  function shuffleDeck() {
    state.deck.sort(() => Math.random() - 0.5);
    state.currentIdx = 0;
    renderCurrentQuestion();
  }

  // --------------------------------------------------------------------------
  // Mode & Filter Switchers
  // --------------------------------------------------------------------------
  function setMode(mode) {
    state.mode = mode;

    document.querySelectorAll('.mode-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-mode') === mode);
    });

    const filterContainer = document.getElementById('filter-container');

    if (mode === 'PRACTICE') {
      filterContainer.style.display = 'flex';
      clearInterval(state.exam.timerInterval);
      state.exam.active = false;
      loadDeck();
    } else if (mode === 'EXAM') {
      filterContainer.style.display = 'none';
      startExamMode();
    } else if (mode === 'VAULT') {
      filterContainer.style.display = 'none';
      clearInterval(state.exam.timerInterval);
      state.exam.active = false;
      loadDeck();
    }
  }

  function setFilter(cat, btn) {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    state.filterCat = cat;
    loadDeck();
  }

  // --------------------------------------------------------------------------
  // Keyboard Shortcuts
  // --------------------------------------------------------------------------
  function handleKeyDown(e) {
    // If typing in input, ignore
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const key = e.key.toUpperCase();

    // Options 1, 2, 3, 4 or A, B, C, D
    if (key === '1' || key === 'A') {
      triggerOptionPress(0);
    } else if (key === '2' || key === 'B') {
      triggerOptionPress(1);
    } else if (key === '3' || key === 'C') {
      triggerOptionPress(2);
    } else if (key === '4' || key === 'D') {
      triggerOptionPress(3);
    } else if (e.key === ' ' || e.key === 'Enter') {
      // Space or Enter for Next
      e.preventDefault();
      if (state.mode === 'PRACTICE') {
        if (state.answeredInCurrent) {
          nextQuestion();
        }
      } else {
        nextQuestion();
      }
    } else if (key === 'F') {
      use5050();
    } else if (key === 'T') {
      useTimeFreeze();
    } else if (key === 'H') {
      useHint();
    } else if (key === 'B') {
      toggleBookmark();
    } else if (e.key === 'ArrowRight') {
      nextQuestion();
    } else if (e.key === 'ArrowLeft') {
      prevQuestion();
    }
  }

  function triggerOptionPress(idx) {
    const btn = document.getElementById(`opt-btn-${idx}`);
    if (btn && !btn.disabled) {
      btn.click();
    }
  }

  // --------------------------------------------------------------------------
  // Theme Switcher (Light / Dark)
  // --------------------------------------------------------------------------
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('uniosun_theme', theme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  }

  // --------------------------------------------------------------------------
  // Quick Jump to Specific Question (1 - 200)
  // --------------------------------------------------------------------------
  function jumpToQuestion() {
    const input = document.getElementById('jump-input');
    if (!input) return;
    const num = parseInt(input.value, 10);
    if (isNaN(num) || num < 1 || num > 200) {
      alert("Please enter a question number between 1 and 200.");
      return;
    }

    if (state.mode === 'EXAM') {
      const idx = num - 1;
      if (idx < state.deck.length) {
        state.currentIdx = idx;
        renderCurrentQuestion();
      }
      return;
    }

    // In Practice mode: if not on ALL, switch to ALL so target question is in deck
    if (state.filterCat !== 'ALL') {
      const allBtn = document.querySelector('.filter-chip[data-cat="ALL"]');
      if (allBtn) setFilter('ALL', allBtn);
    }

    const targetIdx = state.deck.findIndex(q => q.id === num);
    if (targetIdx !== -1) {
      state.currentIdx = targetIdx;
      renderCurrentQuestion();
      input.value = '';
    }
  }

  // --------------------------------------------------------------------------
  // Sound FX Toggle
  // --------------------------------------------------------------------------
  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('uniosun_sound', state.soundEnabled ? 'true' : 'false');
    const icon = document.getElementById('sound-icon');
    if (icon) icon.textContent = state.soundEnabled ? '🔊' : '🔇';
  }

  // --------------------------------------------------------------------------
  // Cram Sheet Drawer
  // --------------------------------------------------------------------------
  function openCramSheet() {
    document.getElementById('cram-drawer').style.display = 'flex';
  }

  function closeCramSheet() {
    document.getElementById('cram-drawer').style.display = 'none';
  }

  // --------------------------------------------------------------------------
  // Initialization & Event Binding
  // --------------------------------------------------------------------------
  function init() {
    Confetti.init();
    applyTheme(state.theme);
    updateRankUI();
    updateLifelineButtons();
    updateVaultBadges();

    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.onclick = toggleTheme;

    // Quick Jump button and Enter key
    const jumpBtn = document.getElementById('jump-btn');
    const jumpInput = document.getElementById('jump-input');
    if (jumpBtn) jumpBtn.onclick = jumpToQuestion;
    if (jumpInput) {
      jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          jumpToQuestion();
        }
      });
    }

    // Sound toggle state
    const soundIcon = document.getElementById('sound-icon');
    if (soundIcon) soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';

    // Tabs
    document.getElementById('tab-practice').onclick = () => setMode('PRACTICE');
    document.getElementById('tab-exam').onclick = () => setMode('EXAM');
    document.getElementById('tab-vault').onclick = () => setMode('VAULT');

    // Filter Chips
    document.querySelectorAll('.filter-chip').forEach(btn => {
      btn.onclick = () => setFilter(btn.getAttribute('data-cat'), btn);
    });

    // Control Buttons
    document.getElementById('next-btn').onclick = () => nextQuestion();
    document.getElementById('prev-btn').onclick = () => prevQuestion();
    document.getElementById('shuffle-btn').onclick = () => shuffleDeck();
    document.getElementById('submit-exam-btn').onclick = () => submitExam(false);
    document.getElementById('flag-btn').onclick = () => toggleFlagQuestion();

    // Lifeline buttons
    document.getElementById('lifeline-5050').onclick = use5050;
    document.getElementById('lifeline-freeze').onclick = useTimeFreeze;
    document.getElementById('lifeline-hint').onclick = useHint;

    // Bookmarks & Sound
    document.getElementById('bookmark-btn').onclick = toggleBookmark;
    document.getElementById('sound-toggle-btn').onclick = toggleSound;

    // Cram Sheet
    document.getElementById('open-cram-btn').onclick = openCramSheet;
    document.getElementById('close-cram-btn').onclick = closeCramSheet;
    document.getElementById('cram-drawer').onclick = (e) => {
      if (e.target.id === 'cram-drawer') closeCramSheet();
    };

    // Results Modal
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

    // Header Vault Button
    document.getElementById('open-vault-btn').onclick = () => setMode('VAULT');

    // Rank Badge click info
    document.getElementById('rank-badge').onclick = () => {
      const rank = getCurrentRank(state.xp);
      alert(
        `🏛️ UNIOSUN Academic Career Progression\n\n` +
        `Current Rank: ${rank.title} (Level ${rank.level})\n` +
        `Total XP: ${state.xp.toLocaleString()}\n` +
        `Next Rank Target: ${rank.maxXp.toLocaleString()} XP\n\n` +
        `Answer quickly and build streaks to climb the hierarchy all the way to Substantive Vice-Chancellor!`
      );
    };

    // Keyboard events
    window.addEventListener('keydown', handleKeyDown);

    // Initial Load
    loadDeck();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
