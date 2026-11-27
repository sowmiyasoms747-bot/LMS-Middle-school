// Screen 09: Progress - Complete Flow Matching User Reference Images
// Flow:
// 1. Dashboard -> Click Progress (Screen 1)
// 2. Progress Overview -> Overall Progress (72%), Completed 28/40, In Progress 8, Not Started 4, Subject Progress List (Screen 2)
// 3. Subject-wise Progress -> Dropdown Selector (Science Progress), 78% Completed, Chapter Status List with 100%, 60%, 0% (Screen 3)
// 4. Chapter Progress Detail -> Science > Chapter 3: Heat (60%), Lesson-wise Checklist (Video, Notes, Quiz, Assignment, Test) (Screen 4)
// 5. Progress Reports -> Performance Summary with Vertical 5-Subject Bar Chart (78%, 66%, 60%, 82%, 70%) (Screen 5)
// 6. Detailed Report -> Summary Table (Science, Maths, Social, English, Tamil) + Export PDF (Screen 6)

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';
import { triggerConfetti } from '../components/confetti.js';

export function renderProgressScreen(container, state, app) {
  let activeTab = state.progressActiveTab || "overview"; // "overview", "subject-wise", "chapters", "reports"
  let selectedSubjectId = state.progressSelectedSubjectId || "science";
  let selectedChapterId = state.progressSelectedChapterId || "heat";
  let reportsSubTab = state.progressReportsSubTab || "summary"; // "summary", "chapter-wise", "activity"
  let timeFilter = "this-month"; // "this-month", "term-1", "all-time"

  // Comprehensive Subject Data matching Screen 2, 3, 5, 6
  const subjectsData = {
    science: {
      id: "science",
      title: "Science",
      progress: 78,
      completedChapters: 9,
      inProgressChapters: 2,
      notStartedChapters: 1,
      totalChapters: 12,
      barColor: "#0284C7",
      lightBg: "#E0F2FE",
      iconType: "flask",
      statusLabel: "Good",
      statusBadgeClass: "asg-status-graded",
      chapters: [
        { id: "nutrition", title: "Chapter 1: Nutrition in Plants", progress: 100, status: "completed", icon: "check" },
        { id: "cell", title: "Chapter 2: The Cell", progress: 100, status: "completed", icon: "check" },
        { 
          id: "heat", 
          title: "Chapter 3: Heat", 
          progress: 60, 
          status: "in_progress", 
          icon: "play",
          tasks: [
            { name: "Video Lesson", status: "Completed", icon: "check" },
            { name: "Chapter Notes", status: "Completed", icon: "check" },
            { name: "Practice Quiz", status: "Completed", icon: "play" },
            { name: "Assignment", status: "Not Submitted", icon: "circle" },
            { name: "Chapter Test", status: "Not Attempted", icon: "circle" }
          ]
        },
        { id: "acids", title: "Chapter 4: Acids, Bases and Salts", progress: 0, status: "not_started", icon: "circle" }
      ]
    },
    maths: {
      id: "maths",
      title: "Mathematics",
      progress: 66,
      completedChapters: 9,
      inProgressChapters: 3,
      notStartedChapters: 2,
      totalChapters: 14,
      barColor: "#F59E0B",
      lightBg: "#FEF3C7",
      iconType: "calculator",
      statusLabel: "On Track",
      statusBadgeClass: "asg-status-submitted",
      chapters: [
        { id: "integers", title: "Chapter 1: Integers", progress: 100, status: "completed", icon: "check" },
        { id: "fractions", title: "Chapter 2: Fractions and Decimals", progress: 85, status: "in_progress", icon: "play" },
        { id: "algebra", title: "Chapter 3: Algebraic Expressions", progress: 60, status: "in_progress", icon: "play" },
        { id: "lines", title: "Chapter 4: Lines and Angles", progress: 0, status: "not_started", icon: "circle" }
      ]
    },
    social: {
      id: "social",
      title: "Social Science",
      progress: 60,
      completedChapters: 7,
      inProgressChapters: 2,
      notStartedChapters: 2,
      totalChapters: 11,
      barColor: "#10B981",
      lightBg: "#DCFCE7",
      iconType: "globe",
      statusLabel: "On Track",
      statusBadgeClass: "asg-status-submitted",
      chapters: [
        { id: "env", title: "Chapter 1: Our Environment", progress: 100, status: "completed", icon: "check" },
        { id: "earth", title: "Chapter 2: Inside Our Earth", progress: 75, status: "in_progress", icon: "play" },
        { id: "delhi", title: "Chapter 3: The Delhi Sultans", progress: 40, status: "in_progress", icon: "play" },
        { id: "mughal", title: "Chapter 4: The Mughal Empire", progress: 0, status: "not_started", icon: "circle" }
      ]
    },
    english: {
      id: "english",
      title: "English",
      progress: 82,
      completedChapters: 8,
      inProgressChapters: 1,
      notStartedChapters: 1,
      totalChapters: 10,
      barColor: "#EC4899",
      lightBg: "#FCE7F3",
      iconType: "book",
      statusLabel: "Excellent",
      statusBadgeClass: "asg-status-graded",
      chapters: [
        { id: "three", title: "Chapter 1: Three Questions", progress: 100, status: "completed", icon: "check" },
        { id: "gift", title: "Chapter 2: A Gift of Chappals", progress: 100, status: "completed", icon: "check" },
        { id: "gopal", title: "Chapter 3: Gopal and the Hilsa Fish", progress: 70, status: "in_progress", icon: "play" },
        { id: "ashes", title: "Chapter 4: The Ashes That Made Trees Bloom", progress: 0, status: "not_started", icon: "circle" }
      ]
    },
    tamil: {
      id: "tamil",
      title: "தமிழ்",
      progress: 70,
      completedChapters: 7,
      inProgressChapters: 2,
      notStartedChapters: 1,
      totalChapters: 10,
      barColor: "#8B5CF6",
      lightBg: "#F3E8FF",
      iconType: "tamil",
      statusLabel: "Good",
      statusBadgeClass: "asg-status-graded",
      chapters: [
        { id: "engal", title: "இயல் 1: எங்கள் தமிழ்", progress: 100, status: "completed", icon: "check" },
        { id: "ondralla", title: "இயல் 2: ஒன்றல்ல இரண்டல்ல", progress: 100, status: "completed", icon: "check" },
        { id: "kadu", title: "இயல் 3: காடு", progress: 60, status: "in_progress", icon: "play" },
        { id: "vilangugal", title: "இயல் 4: விலங்குகள் உலகம்", progress: 0, status: "not_started", icon: "circle" }
      ]
    }
  };

  function getGraphic(type, size = 36) {
    switch (type) {
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      default: return GRAPHICS.scienceFlaskIcon(size);
    }
  }

  // Circular Progress Ring Generator matching Screen 2 & Screen 3
  function renderCircleProgress(percent, size = 110, strokeColor = "#10B981", label = "") {
    const r = (size - 18) / 2;
    const c = 2 * Math.PI * r;
    const offset = c * (1 - percent / 100);
    return `
      <div style="position: relative; width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform: rotate(-90deg);">
          <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#E2E8F0" stroke-width="8"/>
          <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${strokeColor}" stroke-width="8" stroke-dasharray="${c}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
        </svg>
        <div style="position: absolute; text-align: center;">
          <span style="font-size: ${size > 100 ? '22px' : '18px'}; font-weight: 900; color: #1E293B;">${percent}%</span>
          ${label ? `<div style="font-size: 11px; font-weight: 700; color: #64748B;">${label}</div>` : ''}
        </div>
      </div>
    `;
  }

  // Global window helpers for foolproof navigation across all tabs
  window.lmsProgressSetTab = function(tab) {
    activeTab = tab;
    state.progressActiveTab = tab;
    render();
  };

  window.lmsProgressSelectSubject = function(subjId) {
    selectedSubjectId = subjId;
    state.progressSelectedSubjectId = subjId;
    activeTab = "subject-wise";
    render();
  };

  window.lmsProgressOpenChapter = function(subjId, chId) {
    selectedSubjectId = subjId;
    selectedChapterId = chId;
    state.progressSelectedSubjectId = subjId;
    state.progressSelectedChapterId = chId;
    activeTab = "chapters";
    render();
  };

  window.lmsProgressSetReportsSubTab = function(subTab) {
    reportsSubTab = subTab;
    state.progressReportsSubTab = subTab;
    render();
  };

  window.lmsProgressExportPDF = function() {
    triggerConfetti(2000);
    app.showToast("📄 Generating Progress Report PDF for Class 7 (Sowmiya S.). Download starting...");
  };

  function render() {
    try {
      state.progressActiveTab = activeTab;
      state.progressSelectedSubjectId = selectedSubjectId;

      if (activeTab === "overview") {
        renderOverviewView();
      } else if (activeTab === "subject-wise") {
        renderSubjectWiseView();
      } else if (activeTab === "chapters") {
        renderChaptersView();
      } else if (activeTab === "reports") {
        renderReportsView();
      }
    } catch (err) {
      console.error("Error rendering progress view:", err);
    }
  }

  // =========================================================================
  // VIEW 1: Overview – Overall & Subject Progress (Matches Image Screen 2)
  // =========================================================================
  function renderOverviewView() {
    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Title + 4 Segmented Pill Tabs -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">My Progress</h1>
          </div>

          <!-- Segmented Pill Tabs: Overview, Subject-wise, Chapters, Reports -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow active" onclick="window.lmsProgressSetTab('overview')">Overview</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('subject-wise')">Subject-wise</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('chapters')">Chapters</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('reports')">Reports</button>
          </div>
        </div>

        <div style="max-width: 860px; margin: 20px auto 0;">
          
          <!-- Top Hero Card: Overall Progress (72%) + 3 Stat Tiles -->
          <div class="progress-top-hero-card">
            
            <!-- Circular Progress Ring (72% Overall Progress) -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 140px;">
              ${renderCircleProgress(72, 105, "#10B981")}
              <span style="font-size: 13px; font-weight: 800; color: #1E293B; margin-top: 6px;">Overall Progress</span>
            </div>

            <!-- 3 Stat Tiles (Completed 28/40, In Progress 8, Not Started 4) -->
            <div class="progress-metrics-triple-grid">
              
              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${GRAPHICS.checkDoneIcon(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">Completed</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">28 / 40 Chapters</div>
                </div>
              </div>

              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${ICONS.clock(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">In Progress</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">8 Chapters</div>
                </div>
              </div>

              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${GRAPHICS.checkTodoIcon(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">Not Started</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">4 Chapters</div>
                </div>
              </div>

            </div>

          </div>

          <!-- Subject Progress Section -->
          <div style="margin-top: 26px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <h2 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">Subject Progress</h2>
              <button style="background: none; border: none; font-size: 13.5px; font-weight: 800; color: #7C3AED; cursor: pointer;" onclick="window.lmsProgressSetTab('subject-wise')">
                View Details →
              </button>
            </div>

            <!-- 5 Subject Progress Rows -->
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${Object.values(subjectsData).map(subj => `
                <div class="progress-subject-row" onclick="window.lmsProgressSelectSubject('${subj.id}')" style="cursor: pointer;">
                  
                  <!-- Left: Icon + Title -->
                  <div style="display: flex; align-items: center; gap: 14px; width: 180px;">
                    <div class="ongoing-icon-box" style="background: ${subj.lightBg}; width: 44px; height: 44px;">
                      ${getGraphic(subj.iconType, 32)}
                    </div>
                    <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${subj.title}</span>
                  </div>

                  <!-- Middle: Rounded Horizontal Progress Bar -->
                  <div class="lu-bar-track" style="flex: 1; height: 10px; background: #F1F5F9; border-radius: 999px; overflow: hidden; margin: 0 16px;">
                    <div class="lu-bar-fill" style="width: ${subj.progress}%; height: 100%; background: ${subj.barColor}; border-radius: 999px; transition: width 0.4s ease;"></div>
                  </div>

                  <!-- Right: Percentage Value -->
                  <div style="width: 48px; text-align: right; font-size: 15px; font-weight: 800; color: #1E293B;">
                    ${subj.progress}%
                  </div>

                </div>
              `).join('')}
            </div>

          </div>

        </div>

      </div>
    `;
  }

  // =========================================================================
  // VIEW 2: Subject-wise Progress (Matches Image Screen 3)
  // =========================================================================
  function renderSubjectWiseView() {
    const subj = subjectsData[selectedSubjectId] || subjectsData.science;

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Title + 4 Segmented Pill Tabs -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">Progress</h1>
          </div>

          <!-- Segmented Pill Tabs -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('overview')">Overview</button>
            <button class="tab-pill-btn-flow active" onclick="window.lmsProgressSetTab('subject-wise')">Subject-wise</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('chapters')">Chapters</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('reports')">Reports</button>
          </div>
        </div>

        <div style="max-width: 860px; margin: 20px auto 0;">
          
          <!-- Subject Title & Dropdown Selector -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <h2 style="font-size: 19px; font-weight: 800; color: #1E293B; margin: 0;">${subj.title} Progress</h2>
            
            <select id="progress-subj-select" style="border: 1.5px solid #CBD5E1; border-radius: 12px; padding: 7px 16px; font-size: 13.5px; font-weight: 800; color: #1E293B; background: #FFFFFF; outline: none; cursor: pointer;">
              <option value="science" ${selectedSubjectId === 'science' ? 'selected' : ''}>Science</option>
              <option value="maths" ${selectedSubjectId === 'maths' ? 'selected' : ''}>Mathematics</option>
              <option value="social" ${selectedSubjectId === 'social' ? 'selected' : ''}>Social Science</option>
              <option value="english" ${selectedSubjectId === 'english' ? 'selected' : ''}>English</option>
              <option value="tamil" ${selectedSubjectId === 'tamil' ? 'selected' : ''}>தமிழ்</option>
            </select>
          </div>

          <!-- Top Stats Strip: 78% Completed + 3 Stat Tiles -->
          <div class="progress-top-hero-card" style="padding: 20px 24px; margin-bottom: 24px;">
            
            <!-- Circular Progress Ring -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 120px;">
              ${renderCircleProgress(subj.progress, 90, "#10B981")}
              <span style="font-size: 12.5px; font-weight: 800; color: #1E293B; margin-top: 4px;">Completed</span>
            </div>

            <!-- 3 Stat Tiles -->
            <div class="progress-metrics-triple-grid">
              
              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${GRAPHICS.checkDoneIcon(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">Completed</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">${subj.completedChapters} Chapters</div>
                </div>
              </div>

              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${ICONS.clock(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">In Progress</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">${subj.inProgressChapters} Chapters</div>
                </div>
              </div>

              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${GRAPHICS.checkTodoIcon(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">Not Started</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">${subj.notStartedChapters} Chapter</div>
                </div>
              </div>

            </div>

          </div>

          <!-- Chapter Progress List -->
          <div>
            <h3 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 14px;">Chapter Progress (${subj.title})</h3>

            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${subj.chapters.map(ch => {
                const isCompleted = ch.progress === 100;
                const isInProgress = ch.progress > 0 && ch.progress < 100;
                const barColor = isCompleted ? "#10B981" : isInProgress ? "#F59E0B" : "#CBD5E1";

                return `
                  <div class="ongoing-chapter-row" onclick="window.lmsProgressOpenChapter('${subj.id}', '${ch.id}')" style="cursor: pointer; padding: 14px 20px;">
                    
                    <!-- Left: Status Icon Circle + Chapter Name -->
                    <div style="display: flex; align-items: center; gap: 14px; min-width: 300px;">
                      <div class="${isInProgress ? '' : 'lu-plain-icon-box'}" style="width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; ${isCompleted ? 'background: #ECFDF5; color: #10B981;' : isInProgress ? 'background: #EFF6FF; color: #3B82F6;' : 'background: #F1F5F9; color: #94A3B8;'}">
                        ${isCompleted ? GRAPHICS.checkDoneIcon(28) : isInProgress ? '▶' : GRAPHICS.checkTodoIcon(28)}
                      </div>
                      <span style="font-size: 14.5px; font-weight: 800; color: #1E293B;">${ch.title}</span>
                    </div>

                    <!-- Middle: Progress Bar -->
                    <div style="display: flex; align-items: center; gap: 14px; width: 220px;">
                      <span style="font-size: 13.5px; font-weight: 800; color: #1E293B; width: 42px; text-align: right;">${ch.progress}%</span>
                      <div class="lu-bar-track" style="flex: 1; height: 8px; background: #F1F5F9; border-radius: 999px; overflow: hidden;">
                        <div class="lu-bar-fill" style="width: ${ch.progress}%; height: 100%; background: ${barColor}; border-radius: 999px;"></div>
                      </div>
                    </div>

                    <!-- Right: Arrow -->
                    <div style="color: #64748B; font-weight: 800; font-size: 16px;">
                      ❯
                    </div>

                  </div>
                `;
              }).join('')}
            </div>

          </div>

        </div>

      </div>
    `;

    container.querySelector("#progress-subj-select")?.addEventListener("change", (e) => {
      window.lmsProgressSelectSubject(e.target.value);
    });
  }

  // =========================================================================
  // VIEW 3: Chapter Progress Detail (Matches Image Screen 4)
  // =========================================================================
  function renderChaptersView() {
    const subj = subjectsData[selectedSubjectId] || subjectsData.science;
    const ch = subj.chapters.find(c => c.id === selectedChapterId) || subj.chapters[2] || subj.chapters[0];
    const tasks = ch.tasks || [
      { name: "Video Lesson", status: "Completed", icon: "check" },
      { name: "Chapter Notes", status: "Completed", icon: "check" },
      { name: "Practice Quiz", status: "Completed", icon: "play" },
      { name: "Assignment", status: "Not Submitted", icon: "circle" },
      { name: "Chapter Test", status: "Not Attempted", icon: "circle" }
    ];

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Breadcrumb + 4 Segmented Pill Tabs -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <button onclick="window.lmsProgressSetTab('subject-wise')" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              ← ${subj.title} > ${ch.title}
            </button>
          </div>

          <!-- Segmented Pill Tabs -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('overview')">Overview</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('subject-wise')">Subject-wise</button>
            <button class="tab-pill-btn-flow active" onclick="window.lmsProgressSetTab('chapters')">Chapters</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('reports')">Reports</button>
          </div>
        </div>

        <div style="max-width: 860px; margin: 20px auto 0;">
          
          <!-- Hero Banner Card (Screen 4: Chapter 3: Heat, Progress 60%) -->
          <div style="background: linear-gradient(135deg, #1E1B4B 0%, #312E81 100%); border-radius: 24px; padding: 24px 32px; color: #FFFFFF; display: flex; align-items: center; gap: 32px; box-shadow: 0 12px 30px rgba(30, 27, 75, 0.2); margin-bottom: 24px;">
            
            <!-- Left: 3D Heat Wave Graphic -->
            <div style="width: 140px; height: 90px; display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="position: absolute; width: 120px; height: 80px; background: radial-gradient(circle, #F59E0B 0%, rgba(245, 158, 11, 0) 70%); filter: blur(12px); opacity: 0.6;"></div>
              <div style="position: relative; z-index: 2; transform: scale(0.68);">
                ${GRAPHICS.heatWaveIllustration(200, 140)}
              </div>
            </div>

            <!-- Right: Title + Progress Bar -->
            <div style="flex: 1;">
              <h2 style="font-size: 22px; font-weight: 800; color: #FFFFFF; margin: 0 0 6px;">${ch.title}</h2>
              <div style="font-size: 13.5px; font-weight: 700; color: #FBBF24; margin-bottom: 12px;">Progress: ${ch.progress}%</div>
              
              <!-- Horizontal Golden Track -->
              <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.2); border-radius: 999px; overflow: hidden;">
                <div class="lu-bar-fill" style="width: ${ch.progress}%; height: 100%; background: linear-gradient(90deg, #F59E0B, #FBBF24); border-radius: 999px;"></div>
              </div>
            </div>

          </div>

          <!-- Tasks Checklist List -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${tasks.map(t => {
              const isComp = t.status === "Completed";
              return `
                <div class="ongoing-chapter-row" style="padding: 14px 24px;">
                  
                  <div style="display: flex; align-items: center; gap: 14px;">
                    <div class="${!isComp && t.icon === 'play' ? '' : 'lu-plain-icon-box'}" style="width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; ${isComp ? 'background: #ECFDF5; color: #10B981;' : 'background: #F1F5F9; color: #94A3B8;'}">
                      ${isComp ? GRAPHICS.checkDoneIcon(26) : t.icon === 'play' ? '▶' : GRAPHICS.checkTodoIcon(26)}
                    </div>
                    <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${t.name}</span>
                  </div>

                  <div>
                    <span class="assignment-status-pill ${isComp ? 'asg-status-graded' : 'asg-status-pending'}" style="font-size: 12.5px; padding: 5px 16px;">
                      ${t.status}
                    </span>
                  </div>

                </div>
              `;
            }).join('')}
          </div>

        </div>

      </div>
    `;
  }

  // =========================================================================
  // VIEW 4: Progress Reports & Detailed Table (Matches Image Screen 5 & 6)
  // =========================================================================
  function renderReportsView() {
    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Title + 4 Segmented Pill Tabs -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">My Progress</h1>
          </div>

          <!-- Segmented Pill Tabs -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('overview')">Overview</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('subject-wise')">Subject-wise</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('chapters')">Chapters</button>
            <button class="tab-pill-btn-flow active" onclick="window.lmsProgressSetTab('reports')">Reports</button>
          </div>
        </div>

        <div style="max-width: 860px; margin: 20px auto 0;">
          
          <!-- SCREEN 5: Performance Summary (5-Column Vertical Bar Chart) -->
          <div class="progress-bar-chart-card">
            
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
              <h2 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">Progress Report</h2>
              
              <select style="border: 1.5px solid #CBD5E1; border-radius: 12px; padding: 6px 14px; font-size: 13px; font-weight: 700; color: #1E293B; outline: none; background: #FFFFFF; cursor: pointer;">
                <option value="this-month">This Month</option>
                <option value="term-1">Term 1</option>
                <option value="all-time">All Time</option>
              </select>
            </div>

            <!-- Vertical Bar Chart Stage -->
            <div class="progress-chart-stage">
              
              <!-- Y-Axis Labels -->
              <div class="progress-chart-y-axis">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>

              <!-- 5 Columns -->
              <!-- Science (78%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('science')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">78%</span>
                <div class="progress-bar-pillar" style="height: 140px; background: #8B5CF6;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">Science</span>
              </div>

              <!-- Maths (66%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('maths')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">66%</span>
                <div class="progress-bar-pillar" style="height: 118px; background: #F59E0B;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">Maths</span>
              </div>

              <!-- Social Science (60%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('social')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">60%</span>
                <div class="progress-bar-pillar" style="height: 108px; background: #10B981;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">Social Science</span>
              </div>

              <!-- English (82%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('english')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">82%</span>
                <div class="progress-bar-pillar" style="height: 152px; background: #EC4899;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">English</span>
              </div>

              <!-- Tamil (70%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('tamil')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">70%</span>
                <div class="progress-bar-pillar" style="height: 126px; background: #3B82F6;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">தமிழ்</span>
              </div>

            </div>

          </div>

          <!-- SCREEN 6: Detailed Report -->
          <div class="progress-table-card">
            
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;">
              <h2 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">Progress Report – Detailed</h2>
              
              <button class="ongoing-continue-btn" onclick="window.lmsProgressExportPDF()" style="padding: 7px 20px; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                📥 Export PDF
              </button>
            </div>

            <!-- Sub-tabs: Summary, Chapter-wise, Activity Log -->
            <div class="tabs-nav-bar-flow" style="margin-bottom: 18px;">
              <button class="tab-pill-btn-flow ${reportsSubTab === 'summary' ? 'active' : ''}" onclick="window.lmsProgressSetReportsSubTab('summary')">Summary</button>
              <button class="tab-pill-btn-flow ${reportsSubTab === 'chapter-wise' ? 'active' : ''}" onclick="window.lmsProgressSetReportsSubTab('chapter-wise')">Chapter-wise</button>
              <button class="tab-pill-btn-flow ${reportsSubTab === 'activity' ? 'active' : ''}" onclick="window.lmsProgressSetReportsSubTab('activity')">Activity Log</button>
            </div>

            <!-- Table content based on sub-tab -->
            ${reportsSubTab === 'summary' ? renderReportsSummaryTable() : reportsSubTab === 'chapter-wise' ? renderReportsChapterTable() : renderReportsActivityLog()}

          </div>

        </div>

      </div>
    `;
  }

  // Summary Table (Matches Screen 6)
  function renderReportsSummaryTable() {
    return `
      <table class="progress-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Chapters</th>
            <th>Completed</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${Object.values(subjectsData).map(subj => `
            <tr style="cursor: pointer;" onclick="window.lmsProgressSelectSubject('${subj.id}')">
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="ongoing-icon-box" style="background: ${subj.lightBg}; width: 32px; height: 32px;">
                    ${getGraphic(subj.iconType, 22)}
                  </div>
                  <strong style="color: #1E293B;">${subj.title}</strong>
                </div>
              </td>
              <td>${subj.totalChapters}</td>
              <td>${subj.completedChapters}</td>
              <td>
                <span style="font-weight: 800; color: ${subj.barColor};">${subj.progress}%</span>
              </td>
              <td>
                <span class="assignment-status-pill ${subj.statusBadgeClass}">
                  ${subj.statusLabel}
                </span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  // Chapter-wise Breakdown Table
  function renderReportsChapterTable() {
    const subj = subjectsData[selectedSubjectId] || subjectsData.science;
    return `
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <span style="font-size: 13.5px; font-weight: 700; color: #64748B;">Showing breakdown for: <strong>${subj.title}</strong></span>
          <select id="chapter-table-subj-select" style="border: 1px solid #CBD5E1; border-radius: 8px; padding: 4px 10px; font-size: 12px; font-weight: 700; outline: none;">
            <option value="science" ${selectedSubjectId === 'science' ? 'selected' : ''}>Science</option>
            <option value="maths" ${selectedSubjectId === 'maths' ? 'selected' : ''}>Mathematics</option>
            <option value="social" ${selectedSubjectId === 'social' ? 'selected' : ''}>Social Science</option>
            <option value="english" ${selectedSubjectId === 'english' ? 'selected' : ''}>English</option>
            <option value="tamil" ${selectedSubjectId === 'tamil' ? 'selected' : ''}>தமிழ்</option>
          </select>
        </div>

        <table class="progress-table">
          <thead>
            <tr>
              <th>Chapter</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${subj.chapters.map(ch => `
              <tr>
                <td><strong>${ch.title}</strong></td>
                <td><span style="font-weight: 800; color: #7C3AED;">${ch.progress}%</span></td>
                <td>
                  <span class="assignment-status-pill ${ch.progress === 100 ? 'asg-status-graded' : ch.progress > 0 ? 'asg-status-submitted' : 'asg-status-pending'}">
                    ${ch.progress === 100 ? 'Completed' : ch.progress > 0 ? 'In Progress' : 'Not Started'}
                  </span>
                </td>
                <td>
                  <button class="btn-secondary" onclick="window.lmsProgressOpenChapter('${subj.id}', '${ch.id}')" style="padding: 4px 12px; font-size: 12px; border-radius: 999px;">
                    View
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Activity Log Table
  function renderReportsActivityLog() {
    const logs = [
      { action: "Completed Quick Quiz: The Cell", date: "Today, 02:15 PM", score: "8 / 10", points: "+80 Pts" },
      { action: "Submitted Assignment: The Cell – Worksheet", date: "Today, 11:45 AM", score: "Turned In", points: "+50 Pts" },
      { action: "Watched Video Lesson: Chapter 3: Heat", date: "Yesterday, 04:30 PM", score: "14:35 mins", points: "+20 Pts" },
      { action: "Completed Challenge: Weekly Science Challenge", date: "15 Nov 2026", score: "8 / 10", points: "+100 Pts" },
      { action: "Completed Chapter 1: Nutrition in Plants", date: "10 Nov 2026", score: "100%", points: "+50 Pts" }
    ];

    return `
      <table class="progress-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Date & Time</th>
            <th>Result / Status</th>
            <th>Reward</th>
          </tr>
        </thead>
        <tbody>
          ${logs.map(log => `
            <tr>
              <td><strong>${log.action}</strong></td>
              <td style="color: #64748B;">${log.date}</td>
              <td><span class="assignment-status-pill asg-status-submitted">${log.score}</span></td>
              <td><strong style="color: #D97706;">${log.points}</strong></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  // Initial render
  render();
}
