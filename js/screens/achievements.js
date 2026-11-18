// Screen 10: Achievements - Complete Flow (Classes 6 – 8) Student View
// Matching Reference Design:
// 1. Dashboard -> Click Achievements
// 2. Achievements -> View Badges, Milestones, Certificates, Leaderboard
// 3. Badge Detail -> View Earned Badge Info (Quick Learner, +50 pts, 08 Nov 2026)
// 4. Milestones -> Track & Complete Bigger Goals (10 Chapters, 7-Day Streak, 80%+ Quizzes)
// 5. Certificates -> View & Download Earned Certificates (Science Excellence, Quiz Champion, Assignment Pro)
// 6. Leaderboard -> See Your Rank & Top Performers (Class 7 Month Podium: Karthik R., Sowmiya S., Iniya M.)

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';
import { triggerConfetti } from '../components/confetti.js';

export function renderAchievementsScreen(container, state, app) {
  let activeTab = state.achievementsActiveTab || "all"; // "all", "badges", "milestones", "certificates", "leaderboard"
  let view = state.achievementsView || "list"; // "list", "badge_details"
  let selectedBadgeId = state.achievementsSelectedBadgeId || "quick_learner";
  let selectedClass = state.achievementsSelectedClass || "Class 7";

  // Badges Data Dictionary
  const badgesData = {
    quick_learner: {
      id: "quick_learner",
      title: "Quick Learner",
      subtitle: "Awarded for completing 5 chapters in any subject.",
      points: 50,
      achievedDate: "08 Nov 2026",
      status: "Earned",
      earned: true,
      category: "Learning",
      iconRenderer: (size) => GRAPHICS.badgeQuickLearner ? GRAPHICS.badgeQuickLearner(size) : `<div style="font-size: ${size * 0.6}px;">🚀</div>`
    },
    quiz_master: {
      id: "quiz_master",
      title: "Quiz Master",
      subtitle: "Awarded for scoring 90%+ in 3 consecutive quizzes.",
      points: 50,
      achievedDate: "04 Nov 2026",
      status: "Earned",
      earned: true,
      category: "Quizzes",
      iconRenderer: (size) => GRAPHICS.badgeQuizMaster ? GRAPHICS.badgeQuizMaster(size) : `<div style="font-size: ${size * 0.6}px;">🏆</div>`
    },
    asg_star: {
      id: "asg_star",
      title: "Assignment Star",
      subtitle: "Awarded for submitting 5 assignments on time with top grades.",
      points: 50,
      achievedDate: "29 Oct 2026",
      status: "Earned",
      earned: true,
      category: "Assignments",
      iconRenderer: (size) => GRAPHICS.badgeAssignmentStar ? GRAPHICS.badgeAssignmentStar(size) : `<div style="font-size: ${size * 0.6}px;">⭐</div>`
    },
    consistent_learner: {
      id: "consistent_learner",
      title: "Consistent Learner",
      subtitle: "Awarded for maintaining a study streak for 7 consecutive days.",
      points: 50,
      achievedDate: "15 Oct 2026",
      status: "Earned",
      earned: true,
      category: "Streaks",
      iconRenderer: (size) => GRAPHICS.badgeConsistentLearner ? GRAPHICS.badgeConsistentLearner(size) : `<div style="font-size: ${size * 0.6}px;">🔥</div>`
    },
    chapter_completer: {
      id: "chapter_completer",
      title: "Chapter Completer",
      subtitle: "Awarded for completing all chapters in Mathematics.",
      points: 50,
      achievedDate: "20 Oct 2026",
      status: "Earned",
      earned: true,
      category: "Learning",
      iconRenderer: (size) => GRAPHICS.badgeChapterCompleter ? GRAPHICS.badgeChapterCompleter(size) : `<div style="font-size: ${size * 0.6}px;">📖</div>`
    },
    subject_explorer: {
      id: "subject_explorer",
      title: "Subject Explorer",
      subtitle: "Awarded for studying chapters across all 5 subjects.",
      points: 50,
      achievedDate: "12 Oct 2026",
      status: "Earned",
      earned: true,
      category: "Learning",
      iconRenderer: (size) => GRAPHICS.badgeSubjectExplorer ? GRAPHICS.badgeSubjectExplorer(size) : `<div style="font-size: ${size * 0.6}px;">🧭</div>`
    },
    speed_demon: {
      id: "speed_demon",
      title: "Speed Demon",
      subtitle: "Complete a timed quiz in under 5 minutes with 100% accuracy.",
      points: 50,
      achievedDate: "Locked",
      status: "Locked",
      earned: false,
      category: "Quizzes",
      iconRenderer: (size) => `<div style="width:${size}px; height:${size}px; border-radius:50%; background:#F1F5F9; display:flex; align-items:center; justify-content:center; font-size:${size*0.5}px; border:2px dashed #CBD5E1;">⚡</div>`
    },
    perfectionist: {
      id: "perfectionist",
      title: "Perfectionist",
      subtitle: "Score 100% in 5 weekly challenges without any retries.",
      points: 100,
      achievedDate: "Locked",
      status: "Locked",
      earned: false,
      category: "Challenges",
      iconRenderer: (size) => `<div style="width:${size}px; height:${size}px; border-radius:50%; background:#F1F5F9; display:flex; align-items:center; justify-content:center; font-size:${size*0.5}px; border:2px dashed #CBD5E1;">🎯</div>`
    }
  };

  // Milestones Data
  const milestonesList = [
    {
      id: "m_chapters",
      title: "Complete 10 Chapters",
      current: 10,
      total: 10,
      completed: true,
      statusLabel: "Completed ✔",
      iconBg: "#FFEDD5",
      iconColor: "#EA580C",
      iconType: "book"
    },
    {
      id: "m_streak",
      title: "Maintain 7-Day Streak",
      current: 7,
      total: 7,
      completed: true,
      statusLabel: "Completed ✔",
      iconBg: "#FEF3C7",
      iconColor: "#D97706",
      iconType: "flame"
    },
    {
      id: "m_quizzes",
      title: "Score 80%+ in 5 Quizzes",
      current: 3,
      total: 5,
      completed: false,
      statusLabel: "In Progress",
      iconBg: "#F3E8FF",
      iconColor: "#7C3AED",
      iconType: "chart"
    },
    {
      id: "m_assignments",
      title: "Submit 10 Assignments",
      current: 8,
      total: 10,
      completed: false,
      statusLabel: "In Progress",
      iconBg: "#E0F2FE",
      iconColor: "#0284C7",
      iconType: "clipboard"
    }
  ];

  // Certificates Data
  const certificatesList = [
    {
      id: "cert_science",
      title: "Science Excellence",
      subtitle: "Completed all Science chapters",
      date: "05 Nov 2026",
      code: "LU-SCI-2026-0842",
      recipient: "Sowmiya S.",
      grade: "Class 7",
      score: "98% Aggregate",
      instructor: "Dr. A. Ramanujan",
      principal: "M. Soundararajan"
    },
    {
      id: "cert_quiz",
      title: "Quiz Champion",
      subtitle: "Scored 80%+ in 5 quizzes",
      date: "01 Nov 2026",
      code: "LU-QC-2026-0619",
      recipient: "Sowmiya S.",
      grade: "Class 7",
      score: "Top 5% in Class",
      instructor: "Prof. K. Swaminathan",
      principal: "M. Soundararajan"
    },
    {
      id: "cert_assignment",
      title: "Assignment Pro",
      subtitle: "Submitted 10 assignments",
      date: "28 Oct 2026",
      code: "LU-AP-2026-0504",
      recipient: "Sowmiya S.",
      grade: "Class 7",
      score: "100% On-Time Completion",
      instructor: "Mrs. Revathi Priya",
      principal: "M. Soundararajan"
    }
  ];

  // Leaderboard Data (Classes 6-8)
  const leaderboardData = {
    "Class 7": {
      podium: [
        { rank: 2, name: "Sowmiya S.", points: "2,100 Points", isUser: true, initial: "SS", color: "#6366F1", avatar: "assets/student-avatar.jpg" },
        { rank: 1, name: "Karthik R.", points: "2,450 Points", isUser: false, initial: "KR", color: "#F59E0B", avatar: "" },
        { rank: 3, name: "Iniya M.", points: "1,980 Points", isUser: false, initial: "IM", color: "#EC4899", avatar: "" }
      ],
      runnersUp: [
        { rank: 4, name: "Pranav K.", points: "1,860 Points", initial: "PK", color: "#06B6D4" },
        { rank: 5, name: "Harini J.", points: "1,820 Points", initial: "HJ", color: "#10B981" },
        { rank: 6, name: "Ananya S.", points: "1,750 Points", initial: "AS", color: "#8B5CF6" },
        { rank: 7, name: "Vijay K.", points: "1,690 Points", initial: "VK", color: "#F97316" }
      ]
    },
    "Class 6": {
      podium: [
        { rank: 2, name: "Dinesh B.", points: "2,200 Points", isUser: false, initial: "DB", color: "#6366F1" },
        { rank: 1, name: "Varun T.", points: "2,380 Points", isUser: false, initial: "VT", color: "#F59E0B" },
        { rank: 3, name: "Nisha P.", points: "1,910 Points", isUser: false, initial: "NP", color: "#EC4899" }
      ],
      runnersUp: [
        { rank: 4, name: "Akash R.", points: "1,780 Points", initial: "AR", color: "#06B6D4" },
        { rank: 5, name: "Bhavani S.", points: "1,710 Points", initial: "BS", color: "#10B981" }
      ]
    },
    "Class 8": {
      podium: [
        { rank: 2, name: "Rohit N.", points: "2,510 Points", isUser: false, initial: "RN", color: "#6366F1" },
        { rank: 1, name: "Meera V.", points: "2,650 Points", isUser: false, initial: "MV", color: "#F59E0B" },
        { rank: 3, name: "Siddharth C.", points: "2,420 Points", isUser: false, initial: "SC", color: "#EC4899" }
      ],
      runnersUp: [
        { rank: 4, name: "Kavya M.", points: "2,290 Points", initial: "KM", color: "#06B6D4" },
        { rank: 5, name: "Aditya S.", points: "2,210 Points", initial: "AS", color: "#10B981" }
      ]
    }
  };

  // Helper: Open Certificate Modal (Screen 5 View Action)
  window.lmsViewCertificateModal = function(certId) {
    const cert = certificatesList.find(c => c.id === certId) || certificatesList[0];
    triggerConfetti(2000);

    app.showModal(`
      <div class="cert-modal-frame view-enter">
        <div style="display: flex; justify-content: center; margin-bottom: 12px;">
          ${GRAPHICS.certificateMedal ? GRAPHICS.certificateMedal(72) : `<div style="font-size: 54px;">🏅</div>`}
        </div>
        
        <span style="font-size: 11px; letter-spacing: 2px; font-weight: 800; color: #B45309; text-transform: uppercase;">
          Learning Universe LMS • Official Certificate
        </span>
        
        <h2 style="font-size: 26px; font-weight: 900; color: #1E1B4B; margin: 10px 0 6px; letter-spacing: -0.5px;">
          Certificate of Achievement
        </h2>
        
        <p style="font-size: 13.5px; color: #64748B; margin: 0 0 16px;">
          This is proudly presented to
        </p>

        <div style="font-size: 24px; font-weight: 800; color: #7C3AED; font-family: 'Plus Jakarta Sans', sans-serif; border-bottom: 2px dashed #DDD6FE; padding-bottom: 8px; max-width: 340px; margin: 0 auto 16px;">
          ${cert.recipient}
        </div>

        <p style="font-size: 14px; color: #334155; max-width: 480px; margin: 0 auto 18px; line-height: 1.5;">
          For outstanding performance and dedication in successfully completing <strong>${cert.title}</strong> (${cert.subtitle}) with exceptional marks (<strong>${cert.score}</strong>).
        </p>

        <!-- Certificate Metadata Row -->
        <div style="display: flex; justify-content: space-around; align-items: center; border-top: 1.5px solid #F1F5F9; border-bottom: 1.5px solid #F1F5F9; padding: 14px 10px; margin: 20px 0;">
          <div>
            <span style="font-size: 11px; color: #94A3B8; text-transform: uppercase; font-weight: 700;">Issue Date</span>
            <div style="font-size: 13.5px; font-weight: 800; color: #1E293B;">${cert.date}</div>
          </div>
          <div>
            <span style="font-size: 11px; color: #94A3B8; text-transform: uppercase; font-weight: 700;">Verification ID</span>
            <div style="font-size: 13.5px; font-weight: 800; color: #7C3AED;">${cert.code}</div>
          </div>
          <div>
            <span style="font-size: 11px; color: #94A3B8; text-transform: uppercase; font-weight: 700;">Principal</span>
            <div style="font-size: 13.5px; font-weight: 800; color: #1E293B;">${cert.principal}</div>
          </div>
        </div>

        <!-- Buttons -->
        <div style="display: flex; justify-content: center; gap: 14px; margin-top: 24px;">
          <button class="btn-primary" onclick="window.lmsDownloadCertificate('${cert.id}')">
            ${ICONS.download ? ICONS.download(16) : ''} Download PDF
          </button>
          <button class="btn-secondary" onclick="window.closeLmsModal()">
            Close
          </button>
        </div>
      </div>
    `);
  };

  // Helper: Download Certificate
  window.lmsDownloadCertificate = function(certId) {
    const cert = certificatesList.find(c => c.id === certId) || certificatesList[0];
    app.showToast(`Downloading Certificate for ${cert.title}...`);
    setTimeout(() => {
      app.showToast("Certificate downloaded successfully! 📄");
    }, 1200);
  };

  // Global Navigation Handlers
  window.lmsAchievementsSetTab = function(tabName) {
    state.achievementsActiveTab = tabName;
    state.achievementsView = "list";
    renderAchievementsScreen(container, state, app);
  };

  window.lmsOpenBadgeDetails = function(badgeId) {
    state.achievementsView = "badge_details";
    state.achievementsSelectedBadgeId = badgeId;
    renderAchievementsScreen(container, state, app);
  };

  window.lmsAchievementsBackToList = function() {
    state.achievementsView = "list";
    renderAchievementsScreen(container, state, app);
  };

  window.lmsAchievementsSetClass = function(className) {
    state.achievementsSelectedClass = className;
    renderAchievementsScreen(container, state, app);
  };

  // Render Tabs Bar
  function renderTabsBar() {
    const tabs = [
      { id: "all", label: "All" },
      { id: "badges", label: "Badges" },
      { id: "milestones", label: "Milestones" },
      { id: "certificates", label: "Certificates" },
      { id: "leaderboard", label: "Leaderboard" }
    ];

    return `
      <div class="tabs-nav-bar" style="margin-bottom: 24px; border-bottom: none; display: flex; align-items: center; gap: 10px;">
        ${tabs.map(t => `
          <button 
            class="tab-pill-btn ${activeTab === t.id ? 'active' : ''}" 
            onclick="window.lmsAchievementsSetTab('${t.id}')"
            style="padding: 9px 24px; border-radius: 999px; font-weight: 700; font-size: 14px;"
          >
            ${t.label}
          </button>
        `).join('')}
      </div>
    `;
  }

  // SCREEN 3: BADGE DETAILS VIEW
  if (view === "badge_details") {
    const badge = badgesData[selectedBadgeId] || badgesData.quick_learner;

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Back Navigation & Header -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
          <button class="btn-secondary" onclick="window.lmsAchievementsBackToList()" style="border-radius: 999px; padding: 8px 18px; font-weight: 700;">
            ← Back
          </button>
          <h1 style="font-size: 24px; font-weight: 800; color: #1E293B; margin: 0;">Badge Details</h1>
        </div>

        <!-- Badge Detail Hero Card (Matching Panel 3 in Reference Flow) -->
        <div class="badge-detail-hero-card">
          <div class="badge-detail-confetti-bg"></div>

          <!-- Large 3D Badge Graphic with Aura -->
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; position: relative;">
            <div style="filter: drop-shadow(0 12px 24px rgba(124, 58, 237, 0.25)); animation: floatSlow 3s ease-in-out infinite;">
              ${badge.iconRenderer(115)}
            </div>
          </div>

          <!-- Badge Info & Details -->
          <div style="flex: 1; z-index: 2;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <h2 style="font-size: 28px; font-weight: 900; color: #1E1B4B; margin: 0; letter-spacing: -0.5px;">
                ${badge.title}
              </h2>
              <span class="badge-status badge-emerald" style="font-size: 13px; font-weight: 800; padding: 6px 14px; border-radius: 999px;">
                ✔ ${badge.status}
              </span>
            </div>

            <p style="font-size: 15px; color: #475569; margin: 0 0 24px; line-height: 1.5; max-width: 540px;">
              ${badge.subtitle}
            </p>

            <!-- Stat Boxes Grid (Achieved On & Points Earned) -->
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 26px;">
              <div class="badge-stat-box">
                <div style="width: 42px; height: 42px; border-radius: 12px; background: #EDE9FE; display: flex; align-items: center; justify-content: center; color: #7C3AED;">
                  ${ICONS.calendar ? ICONS.calendar(22) : '📅'}
                </div>
                <div>
                  <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">Achieved On</div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${badge.achievedDate}</div>
                </div>
              </div>

              <div class="badge-stat-box">
                <div style="width: 42px; height: 42px; border-radius: 12px; background: #FEF3C7; display: flex; align-items: center; justify-content: center; color: #D97706;">
                  ${ICONS.trophy ? ICONS.trophy(22) : '🏆'}
                </div>
                <div>
                  <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">Points Earned</div>
                  <div style="font-size: 16px; font-weight: 800; color: #D97706;">+${badge.points} Points</div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; align-items: center; gap: 14px;">
              <button class="btn-primary" id="btn-share-badge" style="border-radius: 999px; padding: 10px 24px;">
                ${ICONS.share ? ICONS.share(16) : ''} Share Badge
              </button>
              <button class="btn-secondary" onclick="window.lmsAchievementsBackToList()" style="border-radius: 999px; padding: 10px 22px;">
                Back to Achievements
              </button>
            </div>

          </div>

        </div>

      </div>
    `;

    // Share button listener
    container.querySelector("#btn-share-badge")?.addEventListener("click", () => {
      triggerConfetti(1500);
      app.showToast(`Badge "${badge.title}" shared with your classmates! 🎉`);
    });

    return;
  }

  // MAIN SCREENS (2, 4, 5, 6 BASED ON TAB)
  let contentHtml = "";

  // 1. ALL TAB (Screen 2)
  if (activeTab === "all") {
    contentHtml = `
      <!-- My Badges Shelf Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
        <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0;">
          My Badges (12 Earned)
        </h3>
        <button 
          onclick="window.lmsAchievementsSetTab('badges')" 
          style="background: none; border: none; color: #7C3AED; font-weight: 700; font-size: 13.5px; cursor: pointer; display: flex; align-items: center; gap: 4px;"
        >
          View All →
        </button>
      </div>

      <!-- 4 Badges Grid Shelf (Quick Learner, Quiz Master, Assignment Star, Consistent Learner) -->
      <div class="badges-quad-shelf">
        
        <!-- Tile 1: Quick Learner -->
        <div class="badge-tile-card" onclick="window.lmsOpenBadgeDetails('quick_learner')">
          ${GRAPHICS.badgeQuickLearner ? GRAPHICS.badgeQuickLearner(64) : '🚀'}
          <div class="badge-tile-title">Quick Learner</div>
          <span style="font-size: 11px; color: #64748B; margin-top: 4px;">+50 Points</span>
        </div>

        <!-- Tile 2: Quiz Master -->
        <div class="badge-tile-card" onclick="window.lmsOpenBadgeDetails('quiz_master')">
          ${GRAPHICS.badgeQuizMaster ? GRAPHICS.badgeQuizMaster(64) : '🏆'}
          <div class="badge-tile-title">Quiz Master</div>
          <span style="font-size: 11px; color: #64748B; margin-top: 4px;">+50 Points</span>
        </div>

        <!-- Tile 3: Assignment Star -->
        <div class="badge-tile-card" onclick="window.lmsOpenBadgeDetails('asg_star')">
          ${GRAPHICS.badgeAssignmentStar ? GRAPHICS.badgeAssignmentStar(64) : '⭐'}
          <div class="badge-tile-title">Assignment Star</div>
          <span style="font-size: 11px; color: #64748B; margin-top: 4px;">+50 Points</span>
        </div>

        <!-- Tile 4: Consistent Learner -->
        <div class="badge-tile-card" onclick="window.lmsOpenBadgeDetails('consistent_learner')">
          ${GRAPHICS.badgeConsistentLearner ? GRAPHICS.badgeConsistentLearner(64) : '🔥'}
          <div class="badge-tile-title">Consistent Learner</div>
          <span style="font-size: 11px; color: #64748B; margin-top: 4px;">+50 Points</span>
        </div>

      </div>

      <!-- Progress to Next Achievement Card -->
      <div style="margin-top: 28px;">
        <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">
          Progress to Next Achievement
        </h3>

        <div class="progress-next-ach-card">
          <!-- Bullseye / Target Icon -->
          <div style="flex-shrink: 0;">
            ${GRAPHICS.targetBullseye ? GRAPHICS.targetBullseye(54) : `<div style="font-size: 38px;">🎯</div>`}
          </div>

          <!-- Title and Description -->
          <div style="flex: 1;">
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Chapter Explorer</div>
            <div style="font-size: 13.5px; color: #64748B; margin-top: 2px;">
              Complete 3 more chapters to unlock!
            </div>
          </div>

          <!-- Progress Bar & Count -->
          <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 170px;">
            <div style="font-size: 13.5px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">
              7 / 10 Chapters
            </div>
            <div style="width: 170px; height: 8px; background: #E2E8F0; border-radius: 999px; overflow: hidden;">
              <div style="width: 70%; height: 100%; background: #10B981; border-radius: 999px;"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2. BADGES TAB
  else if (activeTab === "badges") {
    const allBadgesList = Object.values(badgesData);

    contentHtml = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
        <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0;">
          All Badges (${allBadgesList.filter(b => b.earned).length} Unlocked)
        </h3>
        <span style="font-size: 13px; color: #64748B;">Click any badge to view criteria & rewards</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
        ${allBadgesList.map(b => `
          <div 
            class="badge-tile-card" 
            onclick="window.lmsOpenBadgeDetails('${b.id}')"
            style="${b.earned ? '' : 'opacity: 0.65; background: #F8FAFC;'}"
          >
            ${b.iconRenderer(62)}
            <div class="badge-tile-title">${b.title}</div>
            <span style="font-size: 11px; color: ${b.earned ? '#059669' : '#64748B'}; margin-top: 4px; font-weight: 700;">
              ${b.earned ? '✔ Earned (+50 pts)' : '🔒 Locked'}
            </span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 3. MILESTONES TAB (Screen 4)
  else if (activeTab === "milestones") {
    contentHtml = `
      <div style="margin-bottom: 16px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">
          Learning Milestones
        </h3>
        <p style="font-size: 13.5px; color: #64748B; margin-top: 2px;">
          Reach major learning targets across chapters, streaks, and quizzes to earn extra badges.
        </p>
      </div>

      <div class="milestones-flow-list">
        ${milestonesList.map(m => {
          const pct = Math.round((m.current / m.total) * 100);
          return `
            <div class="milestone-item-row">
              <!-- Icon wrap -->
              <div class="milestone-icon-wrap" style="background: ${m.iconBg}; color: ${m.iconColor};">
                ${m.iconType === 'book' ? (ICONS.book ? ICONS.book(24) : '📖') : 
                  m.iconType === 'flame' ? (ICONS.flame ? ICONS.flame(24) : '🔥') : 
                  m.iconType === 'chart' ? (ICONS.chart ? ICONS.chart(24) : '📊') : 
                  (ICONS.clipboard ? ICONS.clipboard(24) : '📋')}
              </div>

              <!-- Title -->
              <div style="flex: 1;">
                <div style="font-size: 15px; font-weight: 800; color: #1E293B;">
                  ${m.title}
                </div>
              </div>

              <!-- Progress bar & ratio -->
              <div style="display: flex; align-items: center; gap: 14px; min-width: 220px;">
                <div style="flex: 1; height: 8px; background: #E2E8F0; border-radius: 999px; overflow: hidden;">
                  <div style="width: ${pct}%; height: 100%; background: ${m.completed ? '#10B981' : '#7C3AED'}; border-radius: 999px;"></div>
                </div>
                <span style="font-size: 13.5px; font-weight: 800; color: #1E293B; min-width: 44px; text-align: right;">
                  ${m.current} / ${m.total}
                </span>
              </div>

              <!-- Status badge -->
              <div style="min-width: 110px; text-align: right;">
                <span class="badge-status ${m.completed ? 'badge-emerald' : 'badge-purple'}" style="font-size: 12.5px; font-weight: 800; padding: 5px 14px; border-radius: 999px;">
                  ${m.statusLabel}
                </span>
              </div>

            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // 4. CERTIFICATES TAB (Screen 5)
  else if (activeTab === "certificates") {
    contentHtml = `
      <div style="margin-bottom: 16px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">
          My Certificates (${certificatesList.length})
        </h3>
        <p style="font-size: 13.5px; color: #64748B; margin-top: 2px;">
          Official certificates of achievement awarded for completing subjects and hitting mastery milestones.
        </p>
      </div>

      <div class="certificates-flow-list">
        ${certificatesList.map(cert => `
          <div class="certificate-item-row">
            <!-- Medallion Icon -->
            <div style="flex-shrink: 0;">
              ${GRAPHICS.certificateMedal ? GRAPHICS.certificateMedal(46) : `<div style="font-size: 34px;">🏅</div>`}
            </div>

            <!-- Title & Subtitle -->
            <div style="flex: 1;">
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">
                ${cert.title}
              </div>
              <div style="font-size: 13px; color: #64748B; margin-top: 2px;">
                ${cert.subtitle}
              </div>
            </div>

            <!-- Date -->
            <div style="font-size: 13.5px; font-weight: 600; color: #64748B; min-width: 100px;">
              ${cert.date}
            </div>

            <!-- View Action Button -->
            <div>
              <button 
                class="btn-primary" 
                onclick="window.lmsViewCertificateModal('${cert.id}')"
                style="padding: 7px 20px; font-size: 13px; border-radius: 999px; background: #7C3AED;"
              >
                View
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 5. LEADERBOARD TAB (Screen 6)
  else if (activeTab === "leaderboard") {
    const classData = leaderboardData[selectedClass] || leaderboardData["Class 7"];
    const podium = classData.podium;
    const runnersUp = classData.runnersUp;

    // Podium ranks order: Rank 2 on Left, Rank 1 in Center, Rank 3 on Right
    const rank2 = podium.find(p => p.rank === 2);
    const rank1 = podium.find(p => p.rank === 1);
    const rank3 = podium.find(p => p.rank === 3);

    contentHtml = `
      <!-- Leaderboard Header with Class Dropdown -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">
            Class Leaderboard – This Month
          </h3>
          <p style="font-size: 13.5px; color: #64748B; margin-top: 2px;">
            See top performing students based on total points earned this month.
          </p>
        </div>

        <!-- Class Selector Dropdown -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <select 
            id="lb-class-selector" 
            onchange="window.lmsAchievementsSetClass(this.value)"
            style="background: #FFFFFF; border: 1.5px solid #CBD5E1; border-radius: 999px; padding: 7px 16px; font-size: 13.5px; font-weight: 700; color: #1E293B; outline: none; cursor: pointer;"
          >
            <option value="Class 7" ${selectedClass === "Class 7" ? "selected" : ""}>Class 7</option>
            <option value="Class 6" ${selectedClass === "Class 6" ? "selected" : ""}>Class 6</option>
            <option value="Class 8" ${selectedClass === "Class 8" ? "selected" : ""}>Class 8</option>
          </select>
        </div>
      </div>

      <!-- 3D Podium Container -->
      <div class="leaderboard-podium-wrap">
        
        <!-- Podium Rank 2 (Left) -->
        <div class="podium-col">
          <div class="podium-avatar-wrap">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: #6366F1; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; border: 3px solid #CBD5E1; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              ${rank2.initial}
            </div>
          </div>
          <div style="font-size: 14.5px; font-weight: 800; color: #1E293B; margin-bottom: 2px;">
            ${rank2.name} ${rank2.isUser ? '<span style="color:#7C3AED;">(You)</span>' : ''}
          </div>
          <div style="font-size: 12.5px; font-weight: 700; color: #64748B; margin-bottom: 12px;">
            ${rank2.points}
          </div>
          <div class="podium-step-pillar rank-2">
            <div class="podium-rank-num" style="color: #64748B;">2</div>
          </div>
        </div>

        <!-- Podium Rank 1 (Center with Golden Crown) -->
        <div class="podium-col" style="z-index: 2;">
          <div class="podium-avatar-wrap">
            <div class="podium-crown-badge">
              ${GRAPHICS.goldenCrown ? GRAPHICS.goldenCrown(32) : '👑'}
            </div>
            <div style="width: 74px; height: 74px; border-radius: 50%; background: #F59E0B; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; border: 3.5px solid #FDE047; box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35);">
              ${rank1.initial}
            </div>
          </div>
          <div style="font-size: 16px; font-weight: 900; color: #1E293B; margin-bottom: 2px;">
            ${rank1.name}
          </div>
          <div style="font-size: 13.5px; font-weight: 800; color: #D97706; margin-bottom: 12px;">
            ${rank1.points}
          </div>
          <div class="podium-step-pillar rank-1">
            <div class="podium-rank-num" style="color: #D97706;">1</div>
          </div>
        </div>

        <!-- Podium Rank 3 (Right) -->
        <div class="podium-col">
          <div class="podium-avatar-wrap">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: #EC4899; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; border: 3px solid #FDBA74; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              ${rank3.initial}
            </div>
          </div>
          <div style="font-size: 14.5px; font-weight: 800; color: #1E293B; margin-bottom: 2px;">
            ${rank3.name}
          </div>
          <div style="font-size: 12.5px; font-weight: 700; color: #64748B; margin-bottom: 12px;">
            ${rank3.points}
          </div>
          <div class="podium-step-pillar rank-3">
            <div class="podium-rank-num" style="color: #EA580C;">3</div>
          </div>
        </div>

      </div>

      <!-- Runner-ups List (Rank 4, 5, etc.) -->
      <div class="leaderboard-runner-list">
        ${runnersUp.map(r => `
          <div class="leaderboard-row-card">
            <!-- Rank Badge -->
            <div class="leaderboard-rank-badge">
              ${r.rank}
            </div>

            <!-- Avatar -->
            <div style="width: 38px; height: 38px; border-radius: 50%; background: ${r.color}; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; flex-shrink: 0;">
              ${r.initial}
            </div>

            <!-- Name -->
            <div style="flex: 1; font-size: 14.5px; font-weight: 800; color: #1E293B;">
              ${r.name}
            </div>

            <!-- Points -->
            <div style="font-size: 14px; font-weight: 800; color: #1E293B;">
              ${r.points}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Render Full Screen
  container.innerHTML = `
    <div class="screen-container view-enter">
      
      <!-- Top Title -->
      <div style="margin-bottom: 20px;">
        <h1 style="font-size: 26px; font-weight: 800; color: #1E293B; letter-spacing: -0.5px; margin: 0 0 4px;">
          Achievements
        </h1>
        <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">
          Unlock badges, complete milestones, earn official certificates, and track your leaderboard standing.
        </p>
      </div>

      <!-- Tabs Bar -->
      ${renderTabsBar()}

      <!-- Dynamic Content Area -->
      <div id="achievements-tab-content">
        ${contentHtml}
      </div>

    </div>
  `;
}

if (typeof window !== "undefined") {
  window.renderAchievementsScreen = renderAchievementsScreen;
}

