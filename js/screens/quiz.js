// Screen 06: Quizzes - Complete Flow Matching User Reference Images
// Flow:
// 1. Dashboard -> Click Quizzes (Screen 1)
// 2. Quizzes List -> All Quizzes, Practice, Timed, Completed (Screen 2)
// 3. Quiz Details -> Hero Card, 4 Metrics, Topics, Question Types, Start Quiz (Screen 3)
// 4. Quiz Instructions -> 3D Clipboard & Pencil, Before You Start, Start Now (Screen 4)
// 5. Take Quiz -> Questions with Live Countdown, Radio Options, 3D Cell Model (Screen 5)
// 6. Submit Confirmation Modal -> Document Icon with Green Check, Review/Submit (Screen 6)
// 7. Quiz Result -> Great Job! 8/10, Accuracy 80%, +80 Pts, 02:15 Time, View Answers/Try Again (Screen 7)
// 8. Quiz History -> Completed Tab in Quizzes List with Scores & View Buttons (Screen 8)

import { ICONS } from '../components/icons.js';
import { QUIZ_QUESTION_BANK } from '../data/quizQuestions.js';
import { GRAPHICS } from '../components/graphics.js';
import { triggerConfetti } from '../components/confetti.js';

export function renderQuizScreen(container, state, app) {
  let view = state.quizCurrentView || "list"; // "list", "details", "instructions", "runner", "result"
  let activeTab = state.quizzesActiveTab || "all"; // "all", "practice", "timed", "completed"
  let activeQuiz = state.selectedQuiz || null;
  let qIndex = 0;
  let userAnswers = {};
  let quizStartedAt = Date.now();
  let lastResult = null;
  let timerInterval = null;
  let timeLeftSeconds = 14 * 60 + 32; // 14:32 countdown like in reference image
  let showSubmitModal = false;

  // Complete Quizzes Catalog matching Screen 2 & Screen 8
  const quizzesCatalog = [
    {
      id: "quiz-sci-cell",
      title: "Science – The Cell",
      subject: "Science",
      subjectId: "science",
      chapter: "Chapter 2",
      subtitle: "Chapter 2 • 10 Questions • 15 Minutes",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      pointsEarned: 80,
      scoreText: "8 / 10",
      scorePct: "80%",
      timeTakenText: "02:15",
      difficulty: "Medium",
      type: "timed",
      completedScore: "8/10 (80%) • 10 Nov 2026",
      iconType: "flask",
      illustrationType: "cell",
      topics: [
        "Cell Wall",
        "Nucleus",
        "Chloroplast",
        "Mitochondria"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "True / False", icon: "check" },
        { type: "Short Answer", icon: "edit" }
      ],
      rules: [
        { icon: "clock", label: "10 Questions" },
        { icon: "clock", label: "15 Minutes (Timed)" },
        { icon: "star", label: "100 Points (10 per question)" },
        { icon: "rotate", label: "1 Attempt" },
        { icon: "info", label: "Auto-submit when time ends" }
      ],
      questions: [
        {
          num: 1,
          text: "What is the basic structural and functional unit of all living organisms?",
          options: ["Tissue", "Cell", "Organ", "Nucleus"],
          correct: 1,
          explanation: "The cell is the basic structural and functional unit of all known living organisms."
        },
        {
          num: 2,
          text: "Which organelle is known as the powerhouse of the cell?",
          options: ["Ribosome", "Mitochondria", "Golgi Apparatus", "Vacuole"],
          correct: 1,
          explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions."
        },
        {
          num: 3,
          text: "Which part of the cell controls all the activities?",
          options: ["Cell Wall", "Nucleus", "Chloroplast", "Mitochondria"],
          correct: 1,
          explanation: "The nucleus is the control center of the cell containing the genetic material (DNA)."
        },
        {
          num: 4,
          text: "Which structure provides shape and rigidity exclusively to plant cells?",
          options: ["Cell Wall", "Cell Membrane", "Cytoplasm", "Endoplasmic Reticulum"],
          correct: 0,
          explanation: "The cell wall is a rigid layer outside the plasma membrane found in plants, fungi, and bacteria."
        },
        {
          num: 5,
          text: "Which green pigment in chloroplasts absorbs light energy for photosynthesis?",
          options: ["Carotene", "Chlorophyll", "Xanthophyll", "Anthocyanin"],
          correct: 1,
          explanation: "Chlorophyll is the green photosynthetic pigment that captures sunlight to synthesize food."
        }
      ]
    },
    {
      id: "quiz-math-fractions",
      title: "Mathematics – Fractions",
      subject: "Mathematics",
      subjectId: "maths",
      chapter: "Chapter 3",
      subtitle: "Chapter 3 • 12 Questions • 20 Minutes",
      questionsCount: 12,
      durationMinutes: 20,
      points: 120,
      pointsEarned: 90,
      scoreText: "9 / 12",
      scorePct: "75%",
      timeTakenText: "03:40",
      difficulty: "Medium",
      type: "timed",
      completedScore: "9/12 (75%) • 08 Nov 2026",
      iconType: "calculator",
      illustrationType: "calc",
      topics: [
        "Proper & Improper Fractions",
        "Mixed Numbers",
        "Fraction Addition & Subtraction",
        "Multiplication of Fractions"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "Short Answer", icon: "edit" }
      ],
      rules: [
        { icon: "clock", label: "12 Questions" },
        { icon: "clock", label: "20 Minutes (Timed)" },
        { icon: "star", label: "120 Points (10 per question)" },
        { icon: "rotate", label: "1 Attempt" },
        { icon: "info", label: "Auto-submit when time ends" }
      ],
      questions: [
        {
          num: 1,
          text: "What is 3/4 + 2/3 in simplest form?",
          options: ["5/7", "17/12 (1 5/12)", "1", "6/12"],
          correct: 1,
          explanation: "LCM of 4 and 3 is 12: 9/12 + 8/12 = 17/12."
        }
      ]
    },
    {
      id: "quiz-soc-env",
      title: "Social Science – Our Environment",
      subject: "Social Science",
      subjectId: "social",
      chapter: "Chapter 1",
      subtitle: "Chapter 1 • 10 Questions • 15 Minutes",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      pointsEarned: 80,
      scoreText: "8 / 10",
      scorePct: "80%",
      timeTakenText: "02:45",
      difficulty: "Easy",
      type: "practice",
      completedScore: "8/10 (80%) • 02 Nov 2026",
      iconType: "globe",
      illustrationType: "globe",
      topics: [
        "Biotic and Abiotic Components",
        "Atmosphere & Weather",
        "Hydrosphere & Lithosphere",
        "Ecosystem Balance"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "True / False", icon: "check" }
      ],
      rules: [
        { icon: "clock", label: "10 Questions" },
        { icon: "clock", label: "15 Minutes (Practice)" },
        { icon: "star", label: "100 Points" },
        { icon: "rotate", label: "Unlimited Attempts" },
        { icon: "info", label: "Practice at your own pace" }
      ],
      questions: []
    },
    {
      id: "quiz-eng-tenses",
      title: "English – Tenses",
      subject: "English",
      subjectId: "english",
      chapter: "Chapter 4",
      subtitle: "Chapter 4 • 10 Questions • 15 Minutes",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      pointsEarned: 70,
      scoreText: "7 / 10",
      scorePct: "70%",
      timeTakenText: "02:10",
      difficulty: "Medium",
      type: "practice",
      completedScore: "7/10 (70%) • 05 Nov 2026",
      iconType: "book",
      illustrationType: "book",
      topics: [
        "Simple Present & Past",
        "Present Continuous",
        "Present Perfect",
        "Subject-Verb Agreement"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "Fill in the Blanks", icon: "edit" }
      ],
      rules: [
        { icon: "clock", label: "10 Questions" },
        { icon: "clock", label: "15 Minutes (Practice)" },
        { icon: "star", label: "100 Points" },
        { icon: "rotate", label: "Unlimited Attempts" },
        { icon: "info", label: "Practice grammar mastery" }
      ],
      questions: []
    },
    {
      id: "quiz-tam-letters",
      title: "தமிழ் – எழுத்துக்கள் வகைகள்",
      subject: "தமிழ்",
      subjectId: "tamil",
      chapter: "Chapter 2",
      subtitle: "Chapter 2 • 10 Questions • 15 Minutes",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      pointsEarned: 100,
      scoreText: "10 / 10",
      scorePct: "100%",
      timeTakenText: "01:55",
      difficulty: "Medium",
      type: "timed",
      completedScore: "10/10 (100%) • 03 Nov 2026",
      iconType: "tamil",
      illustrationType: "tamil",
      topics: [
        "முதல் எழுத்துக்கள்",
        "சார்பெழுத்துக்கள்",
        "உயிர்மெய் எழுத்துக்கள்",
        "ஆய்த எழுத்து விளக்கம்"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "True / False", icon: "check" }
      ],
      rules: [
        { icon: "clock", label: "10 Questions" },
        { icon: "clock", label: "15 Minutes (Timed)" },
        { icon: "star", label: "100 Points" },
        { icon: "rotate", label: "1 Attempt" },
        { icon: "info", label: "Auto-submit when time ends" }
      ],
      questions: []
    }
  ];

  // Set default active quiz
  if (!activeQuiz) {
    activeQuiz = quizzesCatalog[0];
  }

  // Handle deep-link from Subject or Lesson if student came from Chapter view
  if (state.activeQuizSubject) {
    const sId = state.activeQuizSubject;
    delete state.activeQuizSubject;
    const match = quizzesCatalog.find(q => q.subjectId === sId);
    if (match) {
      activeQuiz = match;
      view = "details";
    }
  }

  function getGraphic(type, size = 42) {
    switch (type) {
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      case "trophy": return GRAPHICS.goldTrophy(size);
      case "star": return GRAPHICS.goldStar(size);
      default: return GRAPHICS.scienceFlaskIcon(size);
    }
  }

  function getLightBg(subjectId) {
    switch (subjectId) {
      case "science": return "#E0F2FE";
      case "maths": return "#FEF3C7";
      case "social": return "#DCFCE7";
      case "english": return "#FCE7F3";
      case "tamil": return "#F3E8FF";
      default: return "#F1F5F9";
    }
  }

  // Attach the full question bank so every quiz has all its questions
  quizzesCatalog.forEach(qz => {
    const bank = QUIZ_QUESTION_BANK[qz.id];
    if (bank && bank.length) {
      qz.questions = bank;
      qz.questionsCount = bank.length;
    }
  });

  function getCurrentQuiz() {
    const id = activeQuiz && activeQuiz.id;
    return quizzesCatalog.find(x => x.id === id) || activeQuiz || quizzesCatalog[0];
  }

  function getRunQuestions() {
    const q = getCurrentQuiz();
    return QUIZ_QUESTION_BANK[q.id] || (q.questions && q.questions.length ? q.questions : QUIZ_QUESTION_BANK["quiz-sci-cell"]);
  }

  function countAnswered() {
    const total = getRunQuestions().length;
    let n = 0;
    for (let i = 0; i < total; i++) if (userAnswers[i] !== undefined) n++;
    return n;
  }

  // Start (or restart) a quiz: Question 1, nothing selected, full timer
  function startQuizRun() {
    const q = getCurrentQuiz();
    qIndex = 0;
    userAnswers = {};
    timeLeftSeconds = (q.durationMinutes || 15) * 60;
    quizStartedAt = Date.now();
    lastResult = null;
    showSubmitModal = false;
    view = "runner";
    render();
  }

  // Score the attempt from the student's real answers
  function finishQuiz() {
    const q = getCurrentQuiz();
    const questions = getRunQuestions();
    let correct = 0;
    questions.forEach((qq, i) => { if (userAnswers[i] === qq.correct) correct++; });
    const total = questions.length;
    const pct = Math.round((correct / total) * 100);
    const pointsPer = Math.round((q.points || total * 10) / total);
    const points = correct * pointsPer;
    const usedSec = Math.max(1, Math.round((Date.now() - quizStartedAt) / 1000));
    lastResult = { correct, total, pct, points, timeText: formatTimer(Math.min(usedSec, 99 * 60 + 59)), answers: Object.assign({}, userAnswers) };

    q.scoreText = correct + " / " + total;
    q.scorePct = pct + "%";
    q.pointsEarned = points;
    q.timeTakenText = lastResult.timeText;
    q.completed = true;

    state.student.points += points;
    if (app.updateHeaderStats) app.updateHeaderStats();
    showSubmitModal = false;
    view = "result";
    render();
  }

  function formatTimer(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Global window helpers for foolproof navigation across all views
  window.lmsStartQuiz = function(quizId) {
    const match = quizzesCatalog.find(q => q.id === quizId) || quizzesCatalog[0];
    activeQuiz = match;
    state.selectedQuiz = match;
    view = "details";
    render();
  };

  window.lmsQuizGoInstructions = function() {
    view = "instructions";
    render();
  };

  window.lmsQuizStartNow = function() {
    startQuizRun();
  };

  window.lmsQuizOpenSubmitModal = function() {
    if (countAnswered() < getRunQuestions().length) {
      app.showToast("Please answer all questions before submitting.");
      return;
    }
    showSubmitModal = true;
    render();
  };

  window.lmsQuizCloseSubmitModal = function() {
    showSubmitModal = false;
    render();
  };

  window.lmsQuizConfirmSubmit = function() {
    finishQuiz();
  };

  window.lmsQuizBackToList = function() {
    showSubmitModal = false;
    view = "list";
    render();
  };

  window.lmsQuizBackToDetails = function() {
    showSubmitModal = false;
    view = "details";
    render();
  };

  window.lmsQuizRestart = function() {
    startQuizRun();
  };

  window.lmsQuizViewResult = function(quizId) {
    const match = quizzesCatalog.find(q => q.id === quizId) || quizzesCatalog[0];
    activeQuiz = match;
    state.selectedQuiz = match;
    view = "result";
    render();
  };

  function render() {
    try {
      state.quizCurrentView = view;
      state.quizzesActiveTab = activeTab;

      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      if (view === "list") {
        renderListView();
      } else if (view === "details") {
        renderDetailsView();
      } else if (view === "instructions") {
        renderInstructionsView();
      } else if (view === "runner") {
        renderRunnerView();
      } else if (view === "result") {
        renderResultView();
      }
    } catch (err) {
      console.error("Error rendering quiz view:", err);
    }
  }

  // =========================================================================
  // VIEW 1: Quizzes List (Matches Image 1 Screen 2 & Image 2 Screen 2)
  // =========================================================================
  function renderListView() {
    let displayedQuizzes = quizzesCatalog;
    if (activeTab === "practice") {
      displayedQuizzes = quizzesCatalog.filter(q => q.type === "practice");
    } else if (activeTab === "timed") {
      displayedQuizzes = quizzesCatalog.filter(q => q.type === "timed");
    }

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header (Title + Segmented Pill Tabs: All Quizzes, Practice, Timed, Completed) -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">Quizzes</h1>
          </div>

          <!-- Segmented Pill Tabs matching reference image -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow ${activeTab === 'all' ? 'active' : ''}" data-tab="all">All Quizzes</button>
            <button class="tab-pill-btn-flow ${activeTab === 'practice' ? 'active' : ''}" data-tab="practice">Practice</button>
            <button class="tab-pill-btn-flow ${activeTab === 'timed' ? 'active' : ''}" data-tab="timed">Timed</button>
            <button class="tab-pill-btn-flow ${activeTab === 'completed' ? 'active' : ''}" data-tab="completed">Completed</button>
          </div>
        </div>

        <!-- Quizzes List Rows Container -->
        <div style="max-width: 860px; margin: 20px auto 0;">
          <div class="ongoing-chapters-list" style="gap: 16px;">
            ${activeTab === 'completed' ? renderCompletedRows() : renderActiveRows(displayedQuizzes)}
          </div>
        </div>

      </div>
    `;

    // Bind tab pill clicks
    container.querySelectorAll(".tab-pill-btn-flow").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        render();
      });
    });

    // Bind quiz row and Start button clicks
    container.querySelectorAll(".quiz-start-btn, .quiz-row-item").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-quiz-id");
        if (id && window.lmsStartQuiz) {
          window.lmsStartQuiz(id);
        }
      });
    });
  }

  // Active Quizzes Rows (Matches Screen 2)
  function renderActiveRows(list) {
    return list.map(q => `
      <div class="ongoing-chapter-row quiz-row-item" data-quiz-id="${q.id}" onclick="if (window.lmsStartQuiz) window.lmsStartQuiz('${q.id}');" style="cursor: pointer;">
        
        <!-- Left: Subject Icon + Title + Subtitle -->
        <div class="ongoing-left-meta" style="min-width: 340px;">
          <div class="ongoing-icon-box" style="background: ${getLightBg(q.subjectId)};">
            ${getGraphic(q.iconType, 36)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${q.title}</h3>
            <div style="font-size: 13px; color: #64748B; font-weight: 500; margin-top: 3px;">
              ${q.subtitle}
            </div>
          </div>
        </div>

        <!-- Center: Spacer -->
        <div></div>

        <!-- Right: Start → Button (Solid Purple Pill) -->
        <div>
          <button type="button" class="ongoing-continue-btn quiz-start-btn" data-quiz-id="${q.id}" onclick="event.stopPropagation(); if (window.lmsStartQuiz) window.lmsStartQuiz('${q.id}');" style="padding: 9px 26px; cursor: pointer;">
            Start →
          </button>
        </div>

      </div>
    `).join('');
  }

  // Completed Quizzes Rows (Matches Image 1 Screen 8: Quiz History)
  function renderCompletedRows() {
    return quizzesCatalog.map(q => `
      <div class="ongoing-chapter-row" style="cursor: pointer;" onclick="if (window.lmsQuizViewResult) window.lmsQuizViewResult('${q.id}');">
        
        <!-- Left: Subject Icon + Title -->
        <div class="ongoing-left-meta" style="min-width: 320px;">
          <div class="ongoing-icon-box" style="background: ${getLightBg(q.subjectId)};">
            ${getGraphic(q.iconType, 36)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${q.title}</h3>
          </div>
        </div>

        <!-- Center: Score & Date -->
        <div style="font-size: 13.5px; font-weight: 800; color: #1E293B;">
          ${q.completedScore}
        </div>

        <!-- Right: View Button (Solid Purple Pill) -->
        <div>
          <button type="button" class="ongoing-continue-btn" onclick="event.stopPropagation(); if (window.lmsQuizViewResult) window.lmsQuizViewResult('${q.id}');" style="padding: 7px 22px; font-size: 13px; cursor: pointer;">
            View
          </button>
        </div>

      </div>
    `).join('');
  }

  // =========================================================================
  // VIEW 2: Quiz Details (Matches Image 1 Screen 3 & Image 2 Screen 3)
  // =========================================================================
  function renderDetailsView() {
    const q = getCurrentQuiz();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Quiz Details Title -->
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22px;">
          <button id="quiz-details-back-btn" class="btn-secondary" onclick="if (window.lmsQuizBackToList) window.lmsQuizBackToList();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0;">Quiz Details</h1>
        </div>

        <!-- Main Hero Card (Large rounded purple-tinted card) -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-details-hero-card">
            
            <!-- Top Row: Icon + Title/Chapter on Left, 3D Illustration on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <div class="ongoing-icon-box" style="width: 56px; height: 56px; background: ${getLightBg(q.subjectId)};">
                  ${getGraphic(q.iconType, 42)}
                </div>
                <div>
                  <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 4px;">${q.title}</h2>
                  <p style="font-size: 14px; color: #64748B; margin: 0; font-weight: 600;">${q.chapter}</p>
                </div>
              </div>

              <!-- Right: 3D Biological Cell or Subject Graphic -->
              <div style="width: 140px; height: 90px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 120px; height: 75px; background: radial-gradient(circle, #EDE9FE 0%, rgba(237, 233, 254, 0) 70%); filter: blur(8px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.68);">
                  ${GRAPHICS.cell3D(180, 140, "nucleus")}
                </div>
              </div>
            </div>

            <!-- 4-Stat Metric Strip: 10 Questions, 15 Minutes, 100 Points, Medium Difficulty -->
            <div class="challenge-metric-strip">
              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #F5F3FF; color: #7C3AED;">
                  ${(ICONS.document || ICONS.assignment)(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${q.questionsCount}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Questions</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FDF2F8; color: #EC4899;">
                  ${ICONS.clock(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${q.durationMinutes}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Minutes</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FFFBEB; color: #D97706;">
                  ${ICONS.star(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${q.points}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Points</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #E0F2FE; color: #0284C7;">
                  ${(ICONS.barChart || ICONS.progress)(20)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${q.difficulty}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Difficulty</div>
                </div>
              </div>
            </div>

            <!-- Two Columns: Topics Covered on Left | Question Types on Right -->
            <div style="display: flex; justify-content: space-between; gap: 40px; margin-bottom: 32px; padding: 0 8px;">
              
              <!-- Left: Topics Covered Checklist -->
              <div style="flex: 1;">
                <h3 style="font-size: 16.5px; font-weight: 800; color: #1E293B; margin: 0 0 16px;">Topics Covered</h3>
                <div>
                  ${q.topics.map(t => `
                    <div class="challenge-topic-item">
                      <div class="challenge-check-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span>${t}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Middle subtle divider -->
              <div style="width: 1px; background: #E2E8F0; align-self: stretch;"></div>

              <!-- Right: Question Types Supported -->
              <div style="flex: 1; padding-left: 12px;">
                <h3 style="font-size: 16.5px; font-weight: 800; color: #1E293B; margin: 0 0 16px;">Question Types</h3>
                <div>
                  <div class="quiz-type-item">
                    <div class="quiz-type-box">🔲</div>
                    <span>MCQ</span>
                  </div>
                  <div class="quiz-type-item">
                    <div class="quiz-type-box">☑</div>
                    <span>True / False</span>
                  </div>
                  <div class="quiz-type-item">
                    <div class="quiz-type-box">📝</div>
                    <span>Short Answer</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Bottom Action: Start Quiz Button -->
            <div style="text-align: center;">
              <button id="start-quiz-details-btn" class="start-challenge-main-btn" onclick="if (window.lmsQuizGoInstructions) window.lmsQuizGoInstructions();" style="cursor: pointer;">
                Start Quiz →
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    // Bind clicks
    container.querySelector("#quiz-details-back-btn")?.addEventListener("click", () => {
      view = "list";
      render();
    });

    container.querySelector("#start-quiz-details-btn")?.addEventListener("click", () => {
      view = "instructions";
      render();
    });
  }

  // =========================================================================
  // VIEW 3: Quiz Instructions (Matches Image 1 Screen 4 & Image 3 Screen 4)
  // =========================================================================
  function renderInstructionsView() {
    const q = getCurrentQuiz();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Quiz Instructions Title -->
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22px;">
          <button id="quiz-instructions-back-btn" class="btn-secondary" onclick="if (window.lmsQuizBackToDetails) window.lmsQuizBackToDetails();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0;">Quiz Instructions</h1>
        </div>

        <!-- Main Card: 3D Clipboard & Pencil on Left, Before You Start on Right -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="quiz-instruction-card">
            
            <!-- Left: 3D Clipboard with Checklist & Pencil Illustration -->
            <div style="width: 220px; display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="position: absolute; width: 180px; height: 180px; background: radial-gradient(circle, #EDE9FE 0%, rgba(237, 233, 254, 0) 70%); filter: blur(10px);"></div>
              <div style="position: relative; z-index: 2;">
                ${GRAPHICS.clipboardWithPencil(190)}
              </div>
            </div>

            <!-- Right: "Before You Start" Rules Checklist with Purple Circles -->
            <div class="quiz-rules-col">
              <h2 style="font-size: 20px; font-weight: 800; color: #1E293B; margin: 0 0 20px;">Before You Start</h2>
              
              <div class="quiz-rule-row">
                <div class="quiz-rule-circle lu-plain-icon-box">${ICONS.clock(30)}</div>
                <span>10 Questions</span>
              </div>

              <div class="quiz-rule-row">
                <div class="quiz-rule-circle lu-plain-icon-box">${ICONS.clock(30)}</div>
                <span>15 Minutes (Timed)</span>
              </div>

              <div class="quiz-rule-row">
                <div class="quiz-rule-circle lu-plain-icon-box">${ICONS.star(30)}</div>
                <span>100 Points (10 per question)</span>
              </div>

              <div class="quiz-rule-row">
                <div class="quiz-rule-circle">🔄</div>
                <span>1 Attempt</span>
              </div>

              <div class="quiz-rule-row">
                <div class="quiz-rule-circle" style="color: #3B82F6;">ℹ</div>
                <span>Auto-submit when time ends</span>
              </div>
            </div>

          </div>

          <!-- Bottom Action: Start Now Button -->
          <div style="text-align: center;">
            <button id="start-now-btn" class="start-challenge-main-btn" onclick="if (window.lmsQuizStartNow) window.lmsQuizStartNow();" style="cursor: pointer; padding: 12px 42px; font-size: 15px;">
              Start Now →
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind clicks
    container.querySelector("#quiz-instructions-back-btn")?.addEventListener("click", () => {
      view = "details";
      render();
    });

    container.querySelector("#start-now-btn")?.addEventListener("click", () => {
      startQuizRun();
    });
  }

  // =========================================================================
  // VIEW 4: Take Quiz / Question Runner (Matches Image 1 Screen 5 & Image 3 Screen 5)
  // =========================================================================
  function renderRunnerView() {
    const q = getCurrentQuiz();
    const questions = getRunQuestions();
    if (qIndex >= questions.length) qIndex = questions.length - 1;

    const currentQ = questions[qIndex] || questions[0];
    const totalQuestions = questions.length;
    const isLastQuestion = qIndex === totalQuestions - 1;
    const answeredCount = countAnswered();
    const progressPercent = Math.round(((qIndex + 1) / totalQuestions) * 100);

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Back Button + Quiz Title + Countdown Timer Pill -->
        <div style="max-width: 860px; margin: 0 auto 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
            
            <button id="quiz-runner-back-btn" onclick="if (window.lmsQuizBackToDetails) window.lmsQuizBackToDetails();" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              ← ${q.title}
            </button>

            <!-- Countdown Timer matching image 14:32 -->
            <div id="quiz-timer-pill" style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1.5px solid #FEE2E2; padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 800; color: #DC2626; box-shadow: 0 2px 8px rgba(239, 68, 68, 0.1);">
              <span>⏰</span> <span id="quiz-timer-display">${formatTimer(timeLeftSeconds)}</span>
            </div>

          </div>

          <!-- Question Index & Purple Progress Bar Track -->
          <div>
            <div style="font-size: 13.5px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">
              Question ${qIndex + 1} of ${totalQuestions}
              <span style="float: right; color: #7C3AED;">${answeredCount} / ${totalQuestions} answered</span>
            </div>
            <div style="width: 100%; height: 8px; background: #EDE9FE; border-radius: 999px; overflow: hidden;">
              <div style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, #7C3AED, #9333EA); border-radius: 999px; transition: width 0.3s ease;"></div>
            </div>
          </div>
        </div>

        <!-- Question Card (White rounded card with question, options, and 3D cell illustration) -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-runner-card">
            
            <!-- Question Heading -->
            <h2 style="font-size: 17px; font-weight: 800; color: #0F172A; line-height: 1.5; margin: 0 0 24px;">
              Q${qIndex + 1}. ${currentQ.text}
            </h2>

            <!-- Main Layout: Options on Left, 3D Biological Cell Cutaway on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 28px;">
              
              <!-- Left: Radio Option Buttons -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
                ${currentQ.options.map((opt, idx) => {
                  const isSelected = userAnswers[qIndex] === idx;
                  return `
                    <button class="quiz-runner-option ${isSelected ? 'selected' : ''}" data-idx="${idx}" onclick="event.stopPropagation();">
                      <div class="quiz-runner-circle">
                        ${isSelected ? `
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        ` : ''}
                      </div>
                      <span>${opt}</span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Right: 3D Biological Cell Illustration matching reference -->
              <div style="width: 260px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 200px; height: 160px; background: radial-gradient(circle, #F3E8FF 0%, rgba(243, 232, 255, 0) 70%); filter: blur(8px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.9); filter: drop-shadow(0 10px 24px rgba(124, 58, 237, 0.2));">
                  ${q.subjectId === "science" || !q.subjectId ? GRAPHICS.cell3D(260, 200, "nucleus") : GRAPHICS.getSubjectIcon(({ maths: "calculator", social: "globe", english: "book", tamil: "tamil" })[q.subjectId] || "flask", 150)}
                </div>
              </div>

            </div>

            <!-- Bottom Button Bar: Previous & Next / Submit -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1.5px solid #F1F5F9;">
              <button id="quiz-runner-prev-btn" class="btn-secondary" style="border-radius: 999px; padding: 10px 24px; font-weight: 700;" ${qIndex === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                ‹ Previous
              </button>

              <button id="quiz-runner-next-btn" class="ongoing-continue-btn" style="padding: 10px 32px; font-size: 14.5px;">
                ${isLastQuestion ? 'Submit Quiz ✓' : 'Next →'}
              </button>
            </div>

          </div>
        </div>

        <!-- Submit Quiz Confirmation Modal (Screen 6) -->
        ${showSubmitModal ? renderSubmitModal() : ''}

      </div>
    `;

    // Start Live Timer
    timerInterval = setInterval(() => {
      if (timeLeftSeconds > 0) {
        timeLeftSeconds--;
        const el = document.getElementById("quiz-timer-display");
        if (el) el.innerText = formatTimer(timeLeftSeconds);
        if (timeLeftSeconds === 0 && view === "runner") {
          app.showToast("Time is up! Your quiz has been submitted.");
          finishQuiz();
        }
      }
    }, 1000);

    // Bind Back button
    container.querySelector("#quiz-runner-back-btn")?.addEventListener("click", () => {
      view = "details";
      render();
    });

    // Bind Option buttons
    container.querySelectorAll(".quiz-runner-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        userAnswers[qIndex] = idx;
        render();
      });
    });

    // Bind Previous button
    container.querySelector("#quiz-runner-prev-btn")?.addEventListener("click", () => {
      if (qIndex > 0) {
        qIndex--;
        render();
      }
    });

    // Bind Next button -> Opens Submit Confirmation Modal (Image 1 Screen 6)
    container.querySelector("#quiz-runner-next-btn")?.addEventListener("click", () => {
      if (userAnswers[qIndex] === undefined) {
        app.showToast("Please choose an answer to continue.");
        return;
      }
      if (!isLastQuestion) {
        qIndex++;
        render();
        return;
      }
      // Last question: every question must be answered before submitting
      const firstUnanswered = questions.findIndex((_, i) => userAnswers[i] === undefined);
      if (firstUnanswered !== -1) {
        app.showToast("Please answer Question " + (firstUnanswered + 1) + " before submitting.");
        qIndex = firstUnanswered;
        render();
        return;
      }
      showSubmitModal = true;
      render();
    });
  }

  // =========================================================================
  // VIEW 5: Submit Confirmation Modal (Matches Image 1 Screen 6 & Image 3 Screen 6)
  // =========================================================================
  function renderSubmitModal() {
    return `
      <div class="quiz-modal-backdrop" id="quiz-modal-overlay">
        <div class="quiz-modal-card">
          
          <!-- Top Right Close ✕ Button -->
          <button class="quiz-modal-close-btn" onclick="if (window.lmsQuizCloseSubmitModal) window.lmsQuizCloseSubmitModal();">✕</button>

          <!-- Center Document Graphic with Green Check Badge -->
          <div style="margin: 0 auto 16px;">
            ${GRAPHICS.quizSubmitDocIcon(72)}
          </div>

          <!-- Modal Title & Question Count -->
          <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">Submit Quiz?</h2>
          <p style="font-size: 14px; color: #64748B; margin: 0 0 20px; font-weight: 600;">You have answered ${countAnswered()} of ${getRunQuestions().length} questions.</p>

          <!-- Action Buttons: Review Answers & Submit -->
          <div class="quiz-modal-btns">
            <button class="btn-secondary" onclick="if (window.lmsQuizCloseSubmitModal) window.lmsQuizCloseSubmitModal();" style="border-radius: 999px; padding: 11px 24px; font-weight: 700; font-size: 14px; cursor: pointer;">
              Review Answers
            </button>

            <button class="ongoing-continue-btn" onclick="if (window.lmsQuizConfirmSubmit) window.lmsQuizConfirmSubmit();" style="border-radius: 999px; padding: 11px 32px; font-size: 14.5px; cursor: pointer;">
              Submit
            </button>
          </div>

        </div>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 6: Quiz Result (Matches Image 1 Screen 7 & Image 3 Screen 7)
  // =========================================================================
  function renderResultView() {
    const q = getCurrentQuiz();

    // Trigger celebratory confetti burst!
    triggerConfetti();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Quiz Title -->
        <div style="max-width: 580px; margin: 0 auto 18px; display: flex; align-items: center; gap: 12px;">
          <button id="quiz-result-back-btn" class="btn-secondary" onclick="if (window.lmsQuizBackToList) window.lmsQuizBackToList();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; cursor: pointer;">
            ← ${q.title}
          </button>
        </div>

        <!-- Center Celebratory Result Card -->
        <div class="challenge-result-card">
          
          <!-- Top: Large 3D Golden Trophy with Confetti Sparks -->
          <div style="margin: 0 auto 12px; filter: drop-shadow(0 12px 24px rgba(245, 158, 11, 0.35)); transform: scale(1.15);">
            ${GRAPHICS.goldTrophy(92)}
          </div>

          <!-- Great Job! Heading -->
          <h2 style="font-size: 26px; font-weight: 900; color: ${lastResult && lastResult.pct < 50 ? '#F59E0B' : '#10B981'}; margin: 0 0 6px;">${!lastResult || lastResult.pct >= 80 ? 'Great Job!' : lastResult.pct >= 50 ? 'Good Effort!' : 'Keep Practicing!'}</h2>
          <div style="font-size: 14px; color: #64748B; font-weight: 600;">You Scored</div>

          <!-- Score Display 8 / 10 -->
          <div class="challenge-score-display">${q.scoreText || "8 / 10"}</div>

          <!-- 3 Stat Tiles: Accuracy, Points Earned, Time Taken -->
          <div class="challenge-result-stats-row">
            
            <div class="challenge-result-stat-box">
              <span style="font-size: 20px;">🎯</span>
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${q.scorePct || "80%"}</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Accuracy</span>
            </div>

            <div class="challenge-result-stat-box">
              ${ICONS.star(24)}
              <span style="font-size: 15px; font-weight: 800; color: #D97706;">+${q.pointsEarned || 80}</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Points Earned</span>
            </div>

            <div class="challenge-result-stat-box">
              ${ICONS.clock(24)}
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${q.timeTakenText || "02:15"}</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Time Taken</span>
            </div>

          </div>

          <!-- Bottom Action Buttons: View Answers & Try Again -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 14px;">
            <button id="quiz-view-answers-btn" class="btn-secondary" style="border-radius: 999px; padding: 12px 28px; font-weight: 700; font-size: 14px; cursor: pointer;">
              View Answers
            </button>

            <button id="quiz-try-again-btn" class="ongoing-continue-btn" onclick="if (window.lmsQuizRestart) window.lmsQuizRestart();" style="padding: 12px 32px; font-size: 14.5px; cursor: pointer;">
              Try Again
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind Back button
    container.querySelector("#quiz-result-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "completed";
      render();
    });

    // Bind View Answers button -> opens answers modal
    container.querySelector("#quiz-view-answers-btn")?.addEventListener("click", () => {
      const reviewQs = getRunQuestions();
      const given = (lastResult && lastResult.answers) || userAnswers;
      const rows = reviewQs.map((qq, i) => {
        const ans = given[i];
        const ok = ans === qq.correct;
        const yourText = ans === undefined ? "Not answered" : qq.options[ans];
        return `
          <div style="background: ${ok ? '#F0FDF4' : '#FEF2F2'}; border: 1.5px solid ${ok ? '#10B981' : '#F87171'}; border-radius: 14px; padding: 14px; margin-bottom: 12px;">
            <div style="font-weight: 700; font-size: 13.5px; color: ${ok ? '#065F46' : '#991B1B'};">Q${i + 1}. ${qq.text}</div>
            <div style="font-size: 13px; color: ${ok ? '#047857' : '#B91C1C'}; margin-top: 4px;"><strong>Your Answer:</strong> ${ok ? '✔' : '✘'} ${yourText} ${ok ? '(Correct)' : ''}</div>
            ${ok ? '' : `<div style="font-size: 13px; color: #047857; margin-top: 2px;"><strong>Correct Answer:</strong> ${qq.options[qq.correct]}</div>`}
            <div style="font-size: 12px; color: #475569; margin-top: 6px;">${qq.explanation || ''}</div>
          </div>
        `;
      }).join('');
      app.showModal(`
        <div style="padding: 8px; max-height: 70vh; overflow-y: auto;">
          <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 14px;">Answer Review – ${q.title}</h3>
          ${rows}
          <button class="btn-primary" style="width: 100%; border-radius: 999px; padding: 10px 0; font-weight: 700; margin-top: 10px;" onclick="window.closeLmsModal()">
            Done
          </button>
        </div>
      `);
    });

    // Bind Try Again button
    container.querySelector("#quiz-try-again-btn")?.addEventListener("click", () => {
      startQuizRun();
    });
  }

  // Initial render
  render();
}
