// Screen 07: Learning Challenges - Exact Workflow Matching User Images
// Flow:
// 1. Challenges List (All, Live, Upcoming, Completed)
// 2. Challenge Details (Hero Card, Topics, Metrics, Start Challenge button)
// 3. Take Challenge (Interactive Questions with Radio Options, 3D Organelle Graphics, Timer, Progress)
// 4. Challenge Result (Great Job! 8/10, Accuracy, Points Earned, Time Taken, Confetti)
// 5. Leaderboard (Podium Rank 1-3 with Crown & Laurel Wreaths, Runner-up ranks)
// 6. Completed Tab in Challenges List

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';
import { triggerConfetti } from '../components/confetti.js';

export function renderChallengesScreen(container, state, app) {
  let view = state.challengeCurrentView || "list"; // "list", "details", "runner", "result", "leaderboard"
  let activeTab = state.challengesActiveTab || "all"; // "all", "live", "upcoming", "completed"
  let activeChallenge = state.selectedChallenge || null;
  let qIndex = 0;
  let userAnswers = {};
  let timerInterval = null;
  let timeLeftSeconds = 14 * 60 + 32; // 14:32 countdown like in image

  // Comprehensive Challenges List matching Image 1 & Image 2
  const challengesCatalog = [
    {
      id: "ch-sci-weekly",
      title: "Weekly Science Challenge",
      subject: "Science",
      subjectId: "science",
      iconType: "trophy",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      attempts: 3,
      status: "live", // "live", "upcoming", "completed"
      subtitle: "10 Questions • 15 Minutes",
      detailsTagline: "Test your Science knowledge and earn points!",
      topics: [
        "The Cell",
        "Nutrition in Plants",
        "Heat",
        "Acids, Bases and Salts"
      ],
      completedScore: "10 Nov 2026 • Score: 8/10",
      questions: [
        {
          num: 1,
          text: "What is the basic structural and functional unit of all living organisms?",
          options: ["Tissue", "Cell", "Organ", "Nucleus"],
          correct: 1,
          illustration: "cell"
        },
        {
          num: 2,
          text: "Which process do green plants use to synthesize food using sunlight?",
          options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
          correct: 1,
          illustration: "cell"
        },
        {
          num: 3,
          text: "Which part of the cell controls all the activities?",
          options: ["Cell Wall", "Nucleus", "Chloroplast", "Mitochondria"],
          correct: 1,
          illustration: "cell"
        },
        {
          num: 4,
          text: "What mode of heat transfer requires no medium and travels through a vacuum?",
          options: ["Conduction", "Convection", "Radiation", "Insulation"],
          correct: 2,
          illustration: "cell"
        },
        {
          num: 5,
          text: "Which of the following turns blue litmus paper red?",
          options: ["Baking Soda", "Hydrochloric Acid", "Soap Solution", "Distilled Water"],
          correct: 1,
          illustration: "cell"
        }
      ]
    },
    {
      id: "ch-math-speed",
      title: "Maths Speed Challenge",
      subject: "Mathematics",
      subjectId: "maths",
      iconType: "star",
      questionsCount: 15,
      durationMinutes: 20,
      points: 150,
      attempts: 2,
      status: "live",
      subtitle: "15 Questions • 20 Minutes",
      detailsTagline: "Sharpen calculation speed across Fractions, Integers & Decimals!",
      topics: [
        "Fractions & Decimals",
        "Integers Operations",
        "Algebraic Expressions",
        "Ratio and Proportion"
      ],
      completedScore: "08 Nov 2026 • Score: 9/15",
      questions: [
        {
          num: 1,
          text: "What is the sum of 3/4 and 2/3?",
          options: ["5/7", "17/12 (or 1 5/12)", "1", "6/12"],
          correct: 1,
          illustration: "calc"
        },
        {
          num: 2,
          text: "Evaluate: (-15) + (-28) = ?",
          options: ["-43", "43", "-13", "13"],
          correct: 0,
          illustration: "calc"
        }
      ]
    },
    {
      id: "ch-soc-env",
      title: "Social Science Challenge",
      subject: "Social Science",
      subjectId: "social",
      iconType: "globe",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      attempts: 3,
      status: "upcoming",
      subtitle: "10 Questions • 15 Minutes",
      detailsTagline: "Explore Earth's atmosphere, dynasties and civic rights!",
      topics: [
        "Our Environment",
        "Atmospheric Layers",
        "Mughal Empire",
        "Democratic Institutions"
      ],
      completedScore: "02 Nov 2026 • Score: 8/10",
      questions: []
    },
    {
      id: "ch-eng-gram",
      title: "English Grammar Challenge",
      subject: "English",
      subjectId: "english",
      iconType: "book",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      attempts: 3,
      status: "upcoming",
      subtitle: "10 Questions • 15 Minutes",
      detailsTagline: "Master tenses, active/passive voice, and vocabulary!",
      topics: [
        "Tenses & Modals",
        "Subject-Verb Agreement",
        "Reading Comprehension",
        "Figures of Speech"
      ],
      completedScore: "05 Nov 2026 • Score: 7/10",
      questions: []
    }
  ];

  // Set default selected challenge if none
  if (!activeChallenge) {
    activeChallenge = challengesCatalog[0];
  }

  // Handle deep-link from Dashboard if student clicked a challenge card
  if (state.activeChallengeSubject) {
    const sId = state.activeChallengeSubject;
    delete state.activeChallengeSubject;
    const match = challengesCatalog.find(c => c.subjectId === sId);
    if (match) {
      activeChallenge = match;
      view = "details";
    }
  }

  function getGraphic(type, size = 42) {
    switch (type) {
      case "trophy": return GRAPHICS.goldTrophy(size);
      case "star": return GRAPHICS.goldStar(size);
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      default: return GRAPHICS.goldTrophy(size);
    }
  }

  function formatTime(totalSec) {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Attach window helpers for bulletproof click delegation and inline handlers
  window.lmsAttemptChallenge = function(id) {
    const match = challengesCatalog.find(c => c.id === id) || challengesCatalog[0];
    activeChallenge = match;
    state.selectedChallenge = match;
    view = "details";
    render();
  };

  window.lmsStartChallenge = function() {
    qIndex = 2; // Default to Question 3 of 10 to match reference image
    userAnswers = { 2: 1 }; // Default select "Nucleus"
    timeLeftSeconds = 14 * 60 + 32;
    view = "runner";
    render();
  };

  window.lmsBackToChallenges = function() {
    view = "list";
    render();
  };

  window.lmsGoLeaderboard = function() {
    view = "leaderboard";
    render();
  };

  function render() {
    try {
      state.challengeCurrentView = view;
      state.challengesActiveTab = activeTab;

      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      if (view === "list") {
        renderListView();
      } else if (view === "details") {
        renderDetailsView();
      } else if (view === "runner") {
        renderRunnerView();
      } else if (view === "result") {
        renderResultView();
      } else if (view === "leaderboard") {
        renderLeaderboardView();
      }
    } catch (err) {
      console.error("Error rendering challenges view:", err);
    }
  }

  // =========================================================================
  // VIEW 1: Challenges List (Matches 1st Image, Left Screen)
  // =========================================================================
  function renderListView() {
    let displayedChallenges = challengesCatalog;
    if (activeTab === "live") {
      displayedChallenges = challengesCatalog.filter(c => c.status === "live");
    } else if (activeTab === "upcoming") {
      displayedChallenges = challengesCatalog.filter(c => c.status === "upcoming");
    } else if (activeTab === "completed") {
      displayedChallenges = challengesCatalog; // All completed entries displayed
    }

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header (Title + Segmented Pill Tabs) -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">Challenges</h1>
          </div>

          <!-- Segmented Pill Tabs: All Challenges, Live, Upcoming, Completed -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow ${activeTab === 'all' ? 'active' : ''}" data-tab="all">All Challenges</button>
            <button class="tab-pill-btn-flow ${activeTab === 'live' ? 'active' : ''}" data-tab="live">Live</button>
            <button class="tab-pill-btn-flow ${activeTab === 'upcoming' ? 'active' : ''}" data-tab="upcoming">Upcoming</button>
            <button class="tab-pill-btn-flow ${activeTab === 'completed' ? 'active' : ''}" data-tab="completed">Completed</button>
          </div>
        </div>

        <!-- Challenges Rows List (Matching 1st Image Left Screen) -->
        <div style="max-width: 860px; margin: 20px auto 0;">
          <div class="ongoing-chapters-list" style="gap: 16px;">
            ${activeTab === 'completed' ? renderCompletedRows() : renderActiveRows(displayedChallenges)}
          </div>
        </div>

      </div>
    `;

    // Bind tab pill buttons
    container.querySelectorAll(".tab-pill-btn-flow").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        render();
      });
    });

    // Bind Attempt button clicks directly
    container.querySelectorAll(".challenge-attempt-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = btn.getAttribute("data-challenge-id");
        const match = challengesCatalog.find(c => c.id === id) || challengesCatalog[0];
        activeChallenge = match;
        state.selectedChallenge = match;
        view = "details";
        render();
      });
    });

    // Bind Challenge Row clicks
    container.querySelectorAll(".challenge-row-item").forEach(row => {
      row.addEventListener("click", (e) => {
        if (e.target.closest(".challenge-notify-btn")) return;
        const id = row.getAttribute("data-challenge-id");
        const match = challengesCatalog.find(c => c.id === id) || challengesCatalog[0];
        activeChallenge = match;
        state.selectedChallenge = match;
        view = "details";
        render();
      });
    });

    // Bind Notify Me buttons
    container.querySelectorAll(".challenge-notify-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = btn.getAttribute("data-challenge-id");
        const match = challengesCatalog.find(c => c.id === id);
        if (match) {
          match.notified = !match.notified;
          if (match.notified) {
            btn.classList.add("reminded");
            btn.innerHTML = `✔ Subscribed`;
            app.showToast(`🔔 We'll notify you when ${match.title} goes live!`);
          } else {
            btn.classList.remove("reminded");
            btn.innerHTML = `Notify Me`;
            app.showToast(`Notification cancelled.`);
          }
        }
      });
    });
  }

  function renderActiveRows(list) {
    return list.map(ch => `
      <div class="ongoing-chapter-row challenge-row-item" data-challenge-id="${ch.id}" onclick="if (!event.target.closest('.challenge-notify-btn')) { if (window.lmsAttemptChallenge) window.lmsAttemptChallenge('${ch.id}'); }" style="cursor: pointer;">
        
        <!-- Left: 3D Trophy/Star/Globe/Book Icon + Title + Questions/Duration Meta -->
        <div class="ongoing-left-meta" style="min-width: 320px;">
          <div class="ongoing-icon-box" style="background: ${getLightBg(ch.subjectId)};">
            ${getGraphic(ch.iconType, 36)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${ch.title}</h3>
            <div style="font-size: 13px; color: #64748B; font-weight: 500; margin-top: 3px;">
              ${ch.subtitle}
            </div>
          </div>
        </div>

        <!-- Center: Status Badge (Live or Upcoming) -->
        <div>
          ${ch.status === 'live' ? `
            <span style="display: inline-flex; align-items: center; gap: 6px; background: #FEE2E2; color: #DC2626; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 999px;">
              <span style="font-size: 13px;">🔥</span> Live
            </span>
          ` : `
            <span style="display: inline-flex; align-items: center; gap: 6px; background: #F5F3FF; color: #7C3AED; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 999px; border: 1px solid #DDD6FE;">
              <span style="font-size: 12px;">📅</span> Upcoming
            </span>
          `}
        </div>

        <!-- Right: Action Button (Attempt → or Notify Me) -->
        <div>
          ${ch.status === 'live' ? `
            <button type="button" class="ongoing-continue-btn challenge-attempt-btn" data-challenge-id="${ch.id}" data-action="attempt" onclick="event.stopPropagation(); if (window.lmsAttemptChallenge) window.lmsAttemptChallenge('${ch.id}');" style="padding: 9px 24px; cursor: pointer;">
              Attempt →
            </button>
          ` : `
            <button type="button" class="upcoming-remind-btn challenge-notify-btn ${ch.notified ? 'reminded' : ''}" data-challenge-id="${ch.id}" style="cursor: pointer;">
              ${ch.notified ? '✔ Subscribed' : 'Notify Me'}
            </button>
          `}
        </div>

      </div>
    `).join('');
  }

  // Matches 2nd Image Screen 7 (Completed Tab)
  function renderCompletedRows() {
    return challengesCatalog.map(ch => `
      <div class="ongoing-chapter-row" style="cursor: pointer;" onclick="window.appInstance.showToast('Challenge already completed! View in Leaderboard.');">
        
        <!-- Left: 3D Icon + Title + Score Date -->
        <div class="ongoing-left-meta" style="min-width: 320px;">
          <div class="ongoing-icon-box" style="background: ${getLightBg(ch.subjectId)};">
            ${getGraphic(ch.iconType, 36)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${ch.title}</h3>
            <div style="font-size: 12.5px; color: #64748B; font-weight: 500; margin-top: 3px;">
              ${ch.completedScore}
            </div>
          </div>
        </div>

        <!-- Center: Spacer -->
        <div></div>

        <!-- Right: Completed Soft Green Badge -->
        <div>
          <div class="completed-status-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Completed</span>
          </div>
        </div>

      </div>
    `).join('');
  }

  // =========================================================================
  // VIEW 2: Challenge Details (Matches 1st Image, Right Screen)
  // =========================================================================
  function renderDetailsView() {
    const ch = activeChallenge || state.selectedChallenge || challengesCatalog[0];
    activeChallenge = ch;
    state.selectedChallenge = ch;

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Challenge Details Title -->
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22px;">
          <button id="challenge-details-back-btn" class="btn-secondary" onclick="if (window.lmsBackToChallenges) window.lmsBackToChallenges();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0;">Challenge Details</h1>
        </div>

        <!-- Main Hero Card (Large rounded purple-tinted card) -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-details-hero-card">
            
            <!-- Top Row: 3D Trophy + Title/Tagline + Live Badge -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <div style="filter: drop-shadow(0 6px 14px rgba(245, 158, 11, 0.25));">
                  ${GRAPHICS.goldTrophy(56)}
                </div>
                <div>
                  <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 4px;">${ch.title}</h2>
                  <p style="font-size: 14px; color: #64748B; margin: 0;">${ch.detailsTagline}</p>
                </div>
              </div>

              <!-- Live Badge -->
              <div>
                <span style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; color: #DC2626; font-size: 13px; font-weight: 800; padding: 6px 16px; border-radius: 999px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.12); border: 1px solid #FEE2E2;">
                  <span style="font-size: 14px;">🔥</span> Live
                </span>
              </div>
            </div>

            <!-- 4-Stat Metric Strip (10 Questions, 15 Minutes, 100 Points, 3 Attempts) -->
            <div class="challenge-metric-strip">
              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #F5F3FF; color: #7C3AED;">
                  ${(ICONS.document || ICONS.assignment)(20)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${ch.questionsCount}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Questions</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FDF2F8; color: #EC4899;">
                  ${ICONS.clock(20)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${ch.durationMinutes}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Minutes</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FFFBEB; color: #D97706;">
                  ${ICONS.star(20)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${ch.points}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Points</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #EDE9FE; color: #6D28D9;">
                  ${ICONS.target(20)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${ch.attempts}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Attempts</div>
                </div>
              </div>
            </div>

            <!-- Body Two-Column: Topics Checklist on Left, 3D Trophy on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 32px; margin-bottom: 32px;">
              
              <!-- Left: Challenge Topics Checklist -->
              <div style="flex: 1;">
                <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0 0 16px;">Challenge Topics</h3>
                <div>
                  ${ch.topics.map(topic => `
                    <div class="challenge-topic-item">
                      <div class="challenge-check-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span>${topic}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Right: Large 3D Trophy Illustration with Soft Ambient Cloud -->
              <div style="width: 220px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 170px; height: 170px; border-radius: 50%; background: radial-gradient(circle, #EDE9FE 0%, rgba(237, 233, 254, 0) 70%); filter: blur(10px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(1.1); filter: drop-shadow(0 14px 28px rgba(245, 158, 11, 0.28));">
                  ${GRAPHICS.goldTrophy(135)}
                </div>
              </div>

            </div>

            <!-- Bottom Action: Start Challenge Button -->
            <div style="text-align: center;">
              <button id="start-challenge-btn" class="start-challenge-main-btn" onclick="if (window.lmsStartChallenge) window.lmsStartChallenge();" style="cursor: pointer;">
                Start Challenge →
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    // Bind Back button
    container.querySelector("#challenge-details-back-btn")?.addEventListener("click", () => {
      view = "list";
      render();
    });

    // Bind Start Challenge button -> Starts Question Runner (Image 2 Screen 4)
    container.querySelector("#start-challenge-btn")?.addEventListener("click", () => {
      qIndex = 2; // Default to Question 3 of 10 to match the exact question shown in the user's reference image!
      userAnswers = { 2: 1 }; // Default select "Nucleus" matching reference image
      timeLeftSeconds = 14 * 60 + 32;
      view = "runner";
      render();
    });
  }

  // =========================================================================
  // VIEW 3: Take Challenge / Question Runner (Matches 2nd Image, Screen 4)
  // =========================================================================
  function renderRunnerView() {
    const ch = activeChallenge || state.selectedChallenge || challengesCatalog[0];
    activeChallenge = ch;
    state.selectedChallenge = ch;
    const questions = ch.questions && ch.questions.length ? ch.questions : [
      {
        num: 3,
        text: "Which part of the cell controls all the activities?",
        options: ["Cell Wall", "Nucleus", "Chloroplast", "Mitochondria"],
        correct: 1,
        illustration: "cell"
      }
    ];

    const currentQ = questions[qIndex] || questions[0];
    const totalQuestions = 10; // 10 questions as shown in reference
    const progressPercent = Math.round(((qIndex + 1) / totalQuestions) * 100);

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Back Title + Question Count + Progress Bar + Timer -->
        <div style="max-width: 860px; margin: 0 auto 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
            
            <button id="runner-back-btn" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              ← ${ch.title}
            </button>

            <!-- Countdown Timer matching image 14:32 -->
            <div id="runner-timer-pill" style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1.5px solid #FEE2E2; padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 800; color: #DC2626; box-shadow: 0 2px 8px rgba(239, 68, 68, 0.1);">
              <span>⏰</span> <span id="timer-display">${formatTime(timeLeftSeconds)}</span>
            </div>

          </div>

          <!-- Question Index & Purple Progress Bar Track -->
          <div>
            <div style="font-size: 13.5px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">
              Question ${qIndex + 1} of ${totalQuestions}
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
                    <button class="challenge-radio-option ${isSelected ? 'selected' : ''}" data-idx="${idx}">
                      <div class="challenge-radio-circle">
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
                  ${GRAPHICS.cell3D(260, 200, "nucleus")}
                </div>
              </div>

            </div>

            <!-- Bottom Button Bar: Previous & Next / Submit -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1.5px solid #F1F5F9;">
              <button id="runner-prev-btn" class="btn-secondary" style="border-radius: 999px; padding: 10px 24px; font-weight: 700;" ${qIndex === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                ‹ Previous
              </button>

              <button id="runner-next-btn" class="ongoing-continue-btn" style="padding: 10px 32px; font-size: 14.5px;">
                ${qIndex === questions.length - 1 ? 'Submit Challenge →' : 'Next ›'}
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    // Start Live Timer
    timerInterval = setInterval(() => {
      if (timeLeftSeconds > 0) {
        timeLeftSeconds--;
        const el = document.getElementById("timer-display");
        if (el) el.innerText = formatTime(timeLeftSeconds);
      }
    }, 1000);

    // Bind Back button
    container.querySelector("#runner-back-btn")?.addEventListener("click", () => {
      view = "details";
      render();
    });

    // Bind Radio Options
    container.querySelectorAll(".challenge-radio-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        userAnswers[qIndex] = idx;
        render();
      });
    });

    // Bind Previous button
    container.querySelector("#runner-prev-btn")?.addEventListener("click", () => {
      if (qIndex > 0) {
        qIndex--;
        render();
      }
    });

    // Bind Next / Submit button -> Transitions to Result Screen (Image 2 Screen 5)
    container.querySelector("#runner-next-btn")?.addEventListener("click", () => {
      if (qIndex < questions.length - 1) {
        qIndex++;
        render();
      } else {
        // Award points and show result
        state.student.points += 100;
        view = "result";
        render();
      }
    });
  }

  // =========================================================================
  // VIEW 4: Challenge Result (Matches 2nd Image, Screen 5)
  // =========================================================================
  function renderResultView() {
    // Trigger celebratory confetti burst!
    triggerConfetti();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button -->
        <div style="max-width: 580px; margin: 0 auto 18px; display: flex; align-items: center; gap: 12px;">
          <button id="result-back-btn" class="btn-secondary" onclick="if (window.lmsBackToChallenges) window.lmsBackToChallenges();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0; font-size: 20px;">Challenge Result</h1>
        </div>

        <!-- Center Result Card (Celebratory Trophy + Score + 3 Stats) -->
        <div class="challenge-result-card">
          
          <!-- Top: Large 3D Golden Trophy with Confetti Sparks -->
          <div style="margin: 0 auto 12px; filter: drop-shadow(0 12px 24px rgba(245, 158, 11, 0.35)); transform: scale(1.15);">
            ${GRAPHICS.goldTrophy(92)}
          </div>

          <!-- Great Job! Heading -->
          <h2 style="font-size: 26px; font-weight: 900; color: #10B981; margin: 0 0 6px;">Great Job!</h2>
          <div style="font-size: 14px; color: #64748B; font-weight: 600;">You Scored</div>

          <!-- Score Display 8 / 10 -->
          <div class="challenge-score-display">8 / 10</div>

          <!-- 3 Stat Tiles (Accuracy, Points Earned, Time Taken) -->
          <div class="challenge-result-stats-row">
            
            <div class="challenge-result-stat-box">
              <span style="font-size: 20px;">🎯</span>
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">80%</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Accuracy</span>
            </div>

            <div class="challenge-result-stat-box">
              <span style="font-size: 20px;">⭐</span>
              <span style="font-size: 15px; font-weight: 800; color: #D97706;">+100</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Points Earned</span>
            </div>

            <div class="challenge-result-stat-box">
              <span style="font-size: 20px;">⏱</span>
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">02:30</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Time Taken</span>
            </div>

          </div>

          <!-- Bottom Action Buttons: View Answers & See Leaderboard → -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 14px;">
            <button id="view-answers-btn" class="btn-secondary" style="border-radius: 999px; padding: 12px 28px; font-weight: 700; font-size: 14px; cursor: pointer;">
              View Answers
            </button>

            <button id="see-leaderboard-btn" class="ongoing-continue-btn" onclick="if (window.lmsGoLeaderboard) window.lmsGoLeaderboard();" style="padding: 12px 32px; font-size: 14.5px; cursor: pointer;">
              See Leaderboard →
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind Back button
    container.querySelector("#result-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "completed";
      render();
    });

    // Bind View Answers button
    container.querySelector("#view-answers-btn")?.addEventListener("click", () => {
      app.showModal(`
        <div style="padding: 8px;">
          <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 14px;">Answer Review</h3>
          <div style="background: #F0FDF4; border: 1.5px solid #10B981; border-radius: 14px; padding: 14px; margin-bottom: 12px;">
            <div style="font-weight: 700; font-size: 13.5px; color: #065F46;">Q3. Which part of the cell controls all the activities?</div>
            <div style="font-size: 13px; color: #047857; margin-top: 4px;"><strong>Your Answer:</strong> ✔ Nucleus (Correct)</div>
            <div style="font-size: 12px; color: #475569; margin-top: 6px;">The nucleus acts as the command center containing the cell's genetic code (DNA).</div>
          </div>
          <button class="btn-primary" style="width: 100%; border-radius: 999px; padding: 10px 0; font-weight: 700;" onclick="window.closeLmsModal()">
            Done
          </button>
        </div>
      `);
    });

    // Bind See Leaderboard button -> Transitions to Leaderboard View (Image 2 Screen 6)
    container.querySelector("#see-leaderboard-btn")?.addEventListener("click", () => {
      view = "leaderboard";
      render();
    });
  }

  // =========================================================================
  // VIEW 5: Leaderboard (Matches 2nd Image, Screen 6)
  // =========================================================================
  function renderLeaderboardView() {
    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Challenge Title -->
        <div style="max-width: 680px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: space-between;">
          <button id="leaderboard-back-btn" onclick="if (window.lmsBackToChallenges) window.lmsBackToChallenges();" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
            ← ${activeChallenge.title}
          </button>

          <!-- Tab Pills: Leaderboard | My Rank -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow active" style="padding: 6px 18px;">Leaderboard</button>
            <button class="tab-pill-btn-flow" style="padding: 6px 18px;" onclick="window.appInstance.showToast('You are currently Rank 2 with 9/10 score!');">My Rank</button>
          </div>
        </div>

        <div class="leaderboard-stage">
          
          <!-- Top 3 Podium Row -->
          <div class="leaderboard-podium-row">
            
            <!-- Rank 2: Sowmiya S. (Left) -->
            <div class="podium-slot">
              <div class="podium-badge-number badge-rank-2">2</div>
              <img src="assets/student-avatar.jpg" alt="Sowmiya" class="podium-avatar" />
              <div style="font-size: 14.5px; font-weight: 800; color: #1E293B;">Sowmiya S.</div>
              <div style="font-size: 13px; font-weight: 800; color: #7C3AED; margin-top: 2px;">9 / 10</div>
            </div>

            <!-- Rank 1: Karthik R. (Center, Elevated with Crown) -->
            <div class="podium-slot podium-slot-1">
              <div class="podium-crown">👑</div>
              <div class="podium-badge-number badge-rank-1">1</div>
              <div style="width: 62px; height: 62px; border-radius: 50%; background: linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; color: #78350F; border: 3px solid #FFFFFF; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3); margin-bottom: 8px;">
                KR
              </div>
              <div style="font-size: 15.5px; font-weight: 900; color: #1E293B;">Karthik R.</div>
              <div style="font-size: 14px; font-weight: 900; color: #D97706; margin-top: 2px;">10 / 10</div>
            </div>

            <!-- Rank 3: Iniya M. (Right) -->
            <div class="podium-slot">
              <div class="podium-badge-number badge-rank-3">3</div>
              <div style="width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #FBCFE8 0%, #EC4899 100%); display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 900; color: #831843; border: 2.5px solid #FFFFFF; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin-bottom: 8px;">
                IM
              </div>
              <div style="font-size: 14.5px; font-weight: 800; color: #1E293B;">Iniya M.</div>
              <div style="font-size: 13px; font-weight: 800; color: #7C3AED; margin-top: 2px;">8 / 10</div>
            </div>

          </div>

          <!-- Runner-up Table (Ranks 4 and 5) -->
          <div class="leaderboard-runners-list">
            
            <div class="leaderboard-runner-row">
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="font-size: 14px; font-weight: 800; color: #64748B; width: 18px;">4</span>
                <span style="font-size: 14.5px; font-weight: 700; color: #1E293B;">Pranav K.</span>
              </div>
              <span style="font-size: 14px; font-weight: 800; color: #1E293B;">8 / 10</span>
            </div>

            <div class="leaderboard-runner-row">
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="font-size: 14px; font-weight: 800; color: #64748B; width: 18px;">5</span>
                <span style="font-size: 14.5px; font-weight: 700; color: #1E293B;">Harini J.</span>
              </div>
              <span style="font-size: 14px; font-weight: 800; color: #1E293B;">7 / 10</span>
            </div>

          </div>

          <!-- Bottom Action: Return to Challenges in Completed Tab -->
          <div style="text-align: center; margin-top: 28px;">
            <button id="leaderboard-finish-btn" class="start-challenge-main-btn" onclick="if (window.lmsBackToChallenges) window.lmsBackToChallenges();" style="padding: 12px 36px; font-size: 15px; cursor: pointer;">
              Back to Challenges →
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind Back / Finish buttons -> Goes back to list view with Completed tab active!
    container.querySelector("#leaderboard-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "completed";
      render();
    });

    container.querySelector("#leaderboard-finish-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "completed";
      render();
    });
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

  // Initial render
  render();
}
