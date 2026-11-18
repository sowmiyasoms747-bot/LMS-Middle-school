// Learning Universe LMS - Master Application Controller & State Engine

import { LMS_DATA } from './data/lmsData.js';
import { ICONS } from './components/icons.js';
import { triggerConfetti } from './components/confetti.js';

// Screens
import { renderLoginScreen } from './screens/login.js';
import { renderDashboardScreen } from './screens/dashboard.js';
import { renderSubjectsScreen } from './screens/subjects.js';
import { renderChapterListScreen } from './screens/chapterList.js';
import { renderVideoLessonScreen } from './screens/videoLesson.js';
import { renderQuizScreen } from './screens/quiz.js';
import { renderChallengesScreen } from './screens/challenges.js';
import { renderAssignmentsScreen } from './screens/assignments.js';
import { renderProgressScreen } from './screens/progress.js';
import { renderAchievementsScreen } from './screens/achievements.js';
import { renderAiBuddyScreen } from './screens/aiBuddy.js';
import { renderLiveClassesScreen } from './screens/liveClasses.js';
import { renderProfileScreen } from './screens/profile.js';

class LMSApp {
  constructor() {
    this.state = JSON.parse(JSON.stringify(LMS_DATA));
    const hashScreen = (typeof window !== 'undefined' && window.location && window.location.hash) 
      ? window.location.hash.replace('#', '') 
      : '';
    this.currentScreen = hashScreen || "02"; // Default to 02 Dashboard (Home Page)
    this.tourRunning = false;
    this.tourTimer = null;

    this.screensConfig = [
      { id: "01", name: "Login", title: "01 Login", fn: renderLoginScreen, isStandalone: true },
      { id: "02", name: "Dashboard", title: "02 Dashboard (Home)", fn: renderDashboardScreen, sidebarNav: "home" },
      { id: "03", name: "My Learning", title: "03 My Learning – Subjects", fn: renderSubjectsScreen, sidebarNav: "mylearning" },
      { id: "04", name: "Chapter List", title: "04 Subject – Chapter List", fn: renderChapterListScreen, sidebarNav: "mylearning" },
      { id: "05", name: "Video Lesson", title: "05 Video Lesson", fn: renderVideoLessonScreen, sidebarNav: "mylearning" },
      { id: "06", name: "Interactive Quiz", title: "06 Interactive Quiz", fn: renderQuizScreen, sidebarNav: "quizzes" },
      { id: "07", name: "Challenges", title: "07 Learning Challenges", fn: renderChallengesScreen, sidebarNav: "challenges" },
      { id: "08", name: "Assignments", title: "08 Assignments", fn: renderAssignmentsScreen, sidebarNav: "assignments" },
      { id: "09", name: "Progress", title: "09 Subject Progress (Analytics)", fn: renderProgressScreen, sidebarNav: "progress" },
      { id: "10", name: "Achievements", title: "10 Achievement Milestones", fn: renderAchievementsScreen, sidebarNav: "achievements" },
      { id: "11", name: "AI Study Buddy", title: "11 AI Study Buddy", fn: renderAiBuddyScreen, sidebarNav: "aibuddy" },
      { id: "12", name: "Live Classes", title: "12 Live Classes", fn: renderLiveClassesScreen, sidebarNav: "liveclasses" },
      { id: "13", name: "Profile", title: "13 Profile & Settings", fn: renderProfileScreen, sidebarNav: "profile" }
    ];

    window.appInstance = this;
    window.closeLmsModal = () => this.closeModal();
  }

  init() {
    this.renderFlowNavigator();
    this.renderAppShell();
    this.navigateTo(this.currentScreen);
    this.bindGlobalEvents();
  }

  // Renders the Top Flow Navigator with all 13 screens overview bar
  renderFlowNavigator() {
    const nav = document.getElementById("flow-navigator");
    if (!nav) return;

    nav.innerHTML = `
      <div class="flow-navigator-wrapper">
        <div class="flow-navigator-inner">
          
          <div class="flow-brand-badge">
            <img src="assets/logo-clean.png" alt="Logo" style="height: 22px; width: auto; object-fit: contain;" />
            <span>Classes 6–8 Desktop UI Flow</span>
          </div>

          <div class="flow-pill-list" id="flow-pill-list">
            ${this.screensConfig.map(s => `
              <button class="flow-pill-btn ${this.currentScreen === s.id ? 'active' : ''}" data-screen-id="${s.id}">
                <span class="flow-pill-num">${s.id}</span>
                <span>${s.name}</span>
              </button>
            `).join('')}
          </div>

          <div class="flow-nav-actions">
            <button class="flow-nav-arrow-btn" id="flow-prev-screen-btn" title="Previous Screen">
              ${ICONS.chevronLeft(14)} Prev
            </button>
            <button class="flow-nav-arrow-btn" id="flow-next-screen-btn" title="Next Screen">
              Next ${ICONS.chevronRight(14)}
            </button>
            <button class="tour-btn" id="flow-tour-btn">
              ▶ Auto Tour
            </button>
          </div>

        </div>
      </div>
    `;

    // Bind clicks to flow buttons
    nav.querySelectorAll(".flow-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-screen-id");
        this.navigateTo(id);
      });
    });

    nav.querySelector("#flow-prev-screen-btn")?.addEventListener("click", () => this.navigateRelative(-1));
    nav.querySelector("#flow-next-screen-btn")?.addEventListener("click", () => this.navigateRelative(1));
    nav.querySelector("#flow-tour-btn")?.addEventListener("click", () => this.toggleTour());
  }

  // Renders the Sidebar and Top Header shell
  renderAppShell() {
    const shell = document.getElementById("lms-shell-root");
    if (!shell) return;

    shell.innerHTML = `
      <div class="lms-app-shell" id="lms-shell">
        
        <!-- Sidebar Navigation -->
        <aside class="lms-sidebar" id="lms-sidebar">
          
          <!-- Brand Logo -->
          <a class="sidebar-logo" id="sidebar-brand-btn" style="padding: 10px 14px 22px 10px; display: flex; align-items: center; gap: 10px;">
            <img src="assets/logo-clean.png" alt="Logo" style="height: 40px; width: auto; object-fit: contain;" />
            <div class="logo-text-wrap">
              <span class="logo-brand-title" style="font-size: 15px; font-weight: 800; color: #1E1B4B; line-height: 1.15;">Learning</span>
              <span class="logo-brand-sub" style="font-size: 14.5px; font-weight: 800; color: #1E1B4B; line-height: 1.15;">Universe LMS</span>
            </div>
          </a>

          <!-- Nav Items -->
          <ul class="sidebar-nav-list">
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="home" data-target-screen="02">
                ${ICONS.home(18)}
                <span>Home</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="mylearning" data-target-screen="03">
                ${ICONS.book(18)}
                <span>My Learning</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="challenges" data-target-screen="07">
                ${ICONS.target(18)}
                <span>Challenges</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="quizzes" data-target-screen="06">
                ${ICONS.quiz(18)}
                <span>Quizzes</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="assignments" data-target-screen="08">
                ${ICONS.assignment(18)}
                <span>Assignments</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="progress" data-target-screen="09">
                ${ICONS.progress(18)}
                <span>Progress</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="achievements" data-target-screen="10">
                ${ICONS.trophy(18)}
                <span>Achievements</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="aibuddy" data-target-screen="11">
                ${ICONS.robot(18)}
                <span>AI Study Buddy</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="profile" data-target-screen="13">
                ${ICONS.user(18)}
                <span>Profile</span>
              </button>
            </li>
          </ul>

          <!-- Sidebar Bottom Knowledge Tree Illustration (Matching Image 4) -->
          <div class="sidebar-bottom-illustration" title="Learning Universe - Tree of Knowledge">
            <img 
              src="assets/knowledge-tree.png" 
              alt="Tree of Knowledge" 
              class="sidebar-bottom-img"
              onerror="this.onerror=null; this.parentElement.innerHTML = GRAPHICS.sidebarBooksPlant(220, 150);"
            />
          </div>

        </aside>

        <!-- Main Viewport Area -->
        <main class="lms-main-viewport">
          
          <!-- Top Header Bar -->
          <header class="lms-top-header" id="lms-header">
            
            <!-- Search Bar -->
            <div class="header-search-box">
              <span class="search-icon-inside">${ICONS.search(18)}</span>
              <input 
                type="text" 
                class="search-input-field" 
                id="global-search-input" 
                placeholder="Search lessons, chapters, quizzes..." 
                autocomplete="off"
              />
              <div id="search-dropdown" style="display: none; position: absolute; top: 46px; left: 0; right: 0; background: #FFFFFF; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 1px solid #E2E8F0; padding: 8px; z-index: 999;"></div>
            </div>

            <!-- Stats Chips & Profile -->
            <div class="header-stats-group">
              
              <!-- 7 Day Streak Pill -->
              <div class="stat-pill stat-pill-streak" id="header-streak-pill" title="7 Day Active Streak!">
                ${ICONS.flame(16)}
                <span id="header-streak-text">7 Day Streak</span>
              </div>

              <!-- 240 Points Pill -->
              <div class="stat-pill stat-pill-points" id="header-points-pill" title="Total Reward Points">
                ${ICONS.star(16)}
                <span id="header-points-text">${this.state.student.points} Points</span>
              </div>

              <!-- Notifications Bell -->
              <div class="stat-pill" id="header-bell-btn" style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 7px 10px;" title="Notifications">
                <span style="position: relative; display: flex;">
                  ${ICONS.bell(18)}
                  <span style="position: absolute; top: -2px; right: -2px; width: 7px; height: 7px; background: #EF4444; border-radius: 50%;"></span>
                </span>
              </div>

              <!-- Profile Chip -->
              <div class="header-user-chip" id="header-user-btn" title="View Profile">
                <div class="user-avatar-mini">
                  <img src="${this.state.student.avatarUrl}" alt="${this.state.student.name}" />
                </div>
                <div class="user-meta-text">
                  <span class="user-name-title">${this.state.student.name}</span>
                  <span class="user-grade-sub">${this.state.student.grade}</span>
                </div>
                <span style="color: var(--text-muted);">${ICONS.chevronDown(14)}</span>
              </div>

            </div>

          </header>

          <!-- Breadcrumb Navigation (Clean breadcrumbs matching Reference: My Learning > Science) -->
          <div class="lms-global-breadcrumb" id="lms-global-breadcrumb" style="display: none; padding: 14px 28px 0 28px;"></div>

          <!-- Active Screen Content Stage -->
          <div id="screen-stage"></div>

        </main>

      </div>
    `;

    // Bind sidebar clicks
    shell.querySelectorAll(".sidebar-link").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetScreen = btn.getAttribute("data-target-screen");
        if (targetScreen) this.navigateTo(targetScreen);
      });
    });

    shell.querySelector("#sidebar-brand-btn")?.addEventListener("click", () => {
      this.navigateTo("02");
    });

    shell.querySelector("#header-user-btn")?.addEventListener("click", () => {
      this.navigateTo("13");
    });

    shell.querySelector("#header-streak-pill")?.addEventListener("click", () => {
      this.navigateTo("10");
    });

    shell.querySelector("#header-points-pill")?.addEventListener("click", () => {
      this.navigateTo("07");
    });

    shell.querySelector("#header-bell-btn")?.addEventListener("click", () => {
      this.showToast("🔔 1 upcoming live class in 2 hours: Science - The Cell");
    });

    this.bindSearchBox();
  }

  bindSearchBox() {
    const input = document.getElementById("global-search-input");
    const dropdown = document.getElementById("search-dropdown");
    if (!input || !dropdown) return;

    input.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        dropdown.style.display = "none";
        return;
      }

      const matches = [
        { title: "Science Chapter 2: The Cell", type: "Video Lesson", screen: "05" },
        { title: "Cell Division Quick Quiz", type: "Interactive Quiz", screen: "06" },
        { title: "Mathematics: Fractions & Decimals", type: "Subject", screen: "04" },
        { title: "Cell Diagram Homework Submission", type: "Assignment", screen: "08" },
        { title: "Live Class: Biology with Ms. Revathi", type: "Live Session", screen: "12" },
        { title: "Ask AI Buddy: Plant vs Animal Cells", type: "AI Tutor", screen: "11" }
      ].filter(item => item.title.toLowerCase().includes(q));

      if (matches.length === 0) {
        dropdown.innerHTML = `<div style="padding: 10px; font-size: 13px; color: #64748B;">No lessons matching "${q}"</div>`;
      } else {
        dropdown.innerHTML = matches.map(m => `
          <div class="search-result-row" data-screen="${m.screen}" style="padding: 8px 12px; border-radius: 8px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 13px; transition: background 0.15s;">
            <div>
              <strong style="color: #1E293B;">${m.title}</strong>
              <div style="font-size: 11px; color: var(--primary); font-weight: 700;">${m.type}</div>
            </div>
            ${ICONS.chevronRight(14)}
          </div>
        `).join('');

        dropdown.querySelectorAll(".search-result-row").forEach(row => {
          row.addEventListener("mouseenter", () => row.style.background = "#F1F5F9");
          row.addEventListener("mouseleave", () => row.style.background = "transparent");
          row.addEventListener("click", () => {
            const sc = row.getAttribute("data-screen");
            dropdown.style.display = "none";
            input.value = "";
            this.navigateTo(sc);
          });
        });
      }

      dropdown.style.display = "block";
    });

    document.addEventListener("click", (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  }

  // Navigate to any of the 13 screens
  navigateTo(screenId) {
    const config = this.screensConfig.find(s => s.id === screenId);
    if (!config) return;

    this.currentScreen = screenId;
    try {
      if (typeof window !== 'undefined' && window.location && window.location.hash !== '#' + screenId) {
        if (typeof history !== 'undefined' && history.replaceState) {
          history.replaceState(null, '', '#' + screenId);
        } else {
          window.location.hash = '#' + screenId;
        }
      }
    } catch (e) {
      // Ignore security restriction on file:// protocol
    }
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update Top Flow Navigator buttons
    document.querySelectorAll(".flow-pill-btn").forEach(btn => {
      const id = btn.getAttribute("data-screen-id");
      if (id === screenId) {
        btn.classList.add("active");
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        btn.classList.remove("active");
      }
    });

    // Update Sidebar & Header visibility
    const sidebar = document.getElementById("lms-sidebar");
    const header = document.getElementById("lms-header");

    if (config.isStandalone) {
      if (sidebar) sidebar.style.display = "none";
      if (header) header.style.display = "none";
    } else {
      if (sidebar) sidebar.style.display = "flex";
      if (header) header.style.display = "flex";
    }

    // Update active state in sidebar
    if (config.sidebarNav) {
      document.querySelectorAll(".sidebar-link").forEach(link => {
        const nav = link.getAttribute("data-nav");
        if (nav === config.sidebarNav) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }

    // Render the screen
    const stage = document.getElementById("screen-stage");
    if (stage) {
      stage.innerHTML = "";
      config.fn(stage, this.state, this);
    }

    // Update global breadcrumbs
    this.updateBreadcrumb(screenId);
  }

  updateBreadcrumb(screenId) {
    const bc = document.getElementById("lms-global-breadcrumb");
    if (!bc) return;

    if (screenId === "02" || screenId === "01" || screenId === "04") {
      bc.style.display = "none";
      bc.innerHTML = "";
      return;
    }

    const currentSubId = this.state.activeSubjectId || "science";
    const subObj = this.state.subjects.find(s => s.id === currentSubId) || this.state.subjects[0];
    const subTitle = subObj ? subObj.title : "Science";

    let crumbs = [];
    if (screenId === "03") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "My Learning", active: true }
      ];
    } else if (screenId === "04") {
      crumbs = [
        { label: "My Learning", screen: "03" },
        { label: subTitle, active: true }
      ];
    } else if (screenId === "05") {
      crumbs = [
        { label: "My Learning", screen: "03" },
        { label: subTitle, screen: "04" },
        { label: "Video Lesson", active: true }
      ];
    } else if (screenId === "06") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Quizzes", active: true }
      ];
    } else if (screenId === "07") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Challenges", active: true }
      ];
    } else if (screenId === "08") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Assignments", active: true }
      ];
    } else if (screenId === "09") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Progress", active: true }
      ];
    } else if (screenId === "10") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Achievements", active: true }
      ];
    } else if (screenId === "11") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "AI Study Buddy", active: true }
      ];
    } else if (screenId === "12") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Live Classes", active: true }
      ];
    } else if (screenId === "13") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Profile", active: true }
      ];
    }

    bc.innerHTML = `
      <div class="lms-breadcrumb-nav" style="margin-bottom: 0;">
        ${crumbs.map((c, i) => {
          if (c.active) {
            return `<span class="crumb-active">${c.label}</span>`;
          }
          return `
            <span class="crumb-link" data-screen-target="${c.screen}">${c.label}</span>
            <span style="color: #94A3B8; font-weight: 400; margin: 0 4px;">&gt;</span>
          `;
        }).join('')}
      </div>
    `;

    bc.querySelectorAll(".crumb-link").forEach(link => {
      link.addEventListener("click", () => {
        const target = link.getAttribute("data-screen-target");
        if (target) this.navigateTo(target);
      });
    });

    bc.style.display = "block";
  }

  navigateRelative(offset) {
    const currentIndex = this.screensConfig.findIndex(s => s.id === this.currentScreen);
    let nextIndex = currentIndex + offset;
    if (nextIndex < 0) nextIndex = this.screensConfig.length - 1;
    if (nextIndex >= this.screensConfig.length) nextIndex = 0;
    this.navigateTo(this.screensConfig[nextIndex].id);
  }

  toggleTour() {
    const tourBtn = document.getElementById("flow-tour-btn");
    if (this.tourRunning) {
      this.tourRunning = false;
      if (this.tourTimer) clearInterval(this.tourTimer);
      if (tourBtn) {
        tourBtn.innerHTML = "▶ Auto Tour";
        tourBtn.style.background = "#10B981";
      }
      this.showToast("Tour paused");
    } else {
      this.tourRunning = true;
      if (tourBtn) {
        tourBtn.innerHTML = "⏹ Stop Tour";
        tourBtn.style.background = "#EF4444";
      }
      this.showToast("Auto-Tour started! Switching screens every 4 seconds...");

      let index = this.screensConfig.findIndex(s => s.id === this.currentScreen);
      this.tourTimer = setInterval(() => {
        index = (index + 1) % this.screensConfig.length;
        this.navigateTo(this.screensConfig[index].id);
      }, 4000);
    }
  }

  updateHeaderStats() {
    const pointsEl = document.getElementById("header-points-text");
    if (pointsEl) pointsEl.innerText = `${this.state.student.points} Points`;
    const streakEl = document.getElementById("header-streak-text");
    if (streakEl) streakEl.innerText = `${this.state.student.streakDays} Day Streak`;
  }

  showToast(message, type = "info") {
    const existing = document.querySelector(".lms-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "lms-toast";
    toast.innerHTML = `
      <span>${type === 'success' ? '🎉' : '✨'}</span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  showModal(contentHtml) {
    this.closeModal();

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "lms-active-modal";
    overlay.innerHTML = `
      <div class="modal-dialog">
        <div style="display: flex; justify-content: flex-end; margin-bottom: -10px;">
          <button style="background: none; border: none; cursor: pointer; color: #94A3B8; padding: 4px;" onclick="window.closeLmsModal()">
            ${ICONS.close(20)}
          </button>
        </div>
        ${contentHtml}
      </div>
    `;

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) this.closeModal();
    });

    document.body.appendChild(overlay);
  }

  closeModal() {
    const active = document.getElementById("lms-active-modal");
    if (active) active.remove();
  }

  bindGlobalEvents() {
    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeModal();
    });

    // Hash change routing
    window.addEventListener("hashchange", () => {
      const h = window.location.hash.replace('#', '');
      if (h && h !== this.currentScreen) {
        this.navigateTo(h);
      }
    });

    // Global Interactive 3D Fanning Book Page Turning on Click
    document.addEventListener("click", (e) => {
      const book = e.target.closest(".anim-fanning-book-wrap");
      if (book) {
        book.classList.add("page-turning-active");
        setTimeout(() => {
          book.classList.remove("page-turning-active");
        }, 1250);
      }
    });
  }
}

// Bootstrap Application
document.addEventListener("DOMContentLoaded", () => {
  const app = new LMSApp();
  app.init();
});
