// Screen 03: My Learning - Page Flow (Classes 6–8)
// Matches exact Reference Screen 01 ("1 My Learning – All Subjects"), Screen 02 ("2 In Progress – Ongoing Chapters"), and Screen 03 ("3 Completed – Finished Chapters")

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';

export function renderSubjectsScreen(container, state, app) {
  const { subjects, ongoingChapters, finishedChapters } = state;
  let activeTab = state.myLearningActiveTab || "all"; // "all", "in-progress", "completed"

  // Subject icons supplied in assets/MY learning (cropped copies in /ui)
  const SUBJECT_ICON_IMAGES = {
    flask: "science",
    calculator: "maths",
    globe: "social",
    book: "english",
    tamil: "tamil",
    tamilLetter: "tamil"
  };

  function getGraphic(type, size = 96) {
    const imgName = SUBJECT_ICON_IMAGES[type];
    if (imgName) {
      return `<img class="subject-icon-img" src="assets/MY%20learning/ui/${imgName}.png" alt="${imgName}" style="width:${size}px;height:${size}px;object-fit:contain;" />`;
    }
    switch (type) {
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      case "tamilLetter": return GRAPHICS.tamilLetterIcon(size);
      default: return GRAPHICS.scienceFlaskIcon(size);
    }
  }

  function renderView() {
    state.myLearningActiveTab = activeTab;

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header Matching Screen 01 Reference (Clean 'My Learning' Title + Segmented Pill Tabs) -->
        <div class="my-learning-top-header">
          <h1 class="my-learning-heading">My Learning</h1>
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow ${activeTab === 'all' ? 'active' : ''}" data-tab="all">All Subjects</button>
            <button class="tab-pill-btn-flow ${activeTab === 'in-progress' ? 'active' : ''}" data-tab="in-progress">In Progress</button>
            <button class="tab-pill-btn-flow ${activeTab === 'completed' ? 'active' : ''}" data-tab="completed">Completed</button>
          </div>
        </div>

        <!-- Dynamic Content depending on active tab -->
        <div id="tab-stage-content">
          ${renderTabContent()}
        </div>

      </div>
    `;

    // Bind segmented tab buttons
    container.querySelectorAll(".tab-pill-btn-flow").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        renderView();
      });
    });

    // Bind item clicks based on active view
    if (activeTab === "all") {
      // Interactive Book Icon Direct Click (Flips pages in-place without navigating away)
      container.querySelectorAll(".anim-fanning-book-wrap").forEach(bookWrap => {
        bookWrap.addEventListener("click", (e) => {
          e.stopPropagation();
          bookWrap.classList.add("page-turning-active");
          setTimeout(() => {
            bookWrap.classList.remove("page-turning-active");
          }, 1250);
        });
      });

      // Subject Card Click (Triggers flip animation then navigates to chapters)
      container.querySelectorAll(".subject-card-3d-flow").forEach(card => {
        card.addEventListener("click", () => {
          const bookWrap = card.querySelector(".anim-fanning-book-wrap");
          if (bookWrap) {
            bookWrap.classList.add("page-turning-active");
          }
          const id = card.getAttribute("data-subject-id");
          state.activeSubjectId = id;
          setTimeout(() => {
            app.navigateTo("04"); // Navigate to Screen 04: Subject Chapter List
          }, 350);
        });
      });
    } else if (activeTab === "in-progress") {
      // Also enable in-place page flipping on any book icons in list
      container.querySelectorAll(".anim-fanning-book-wrap").forEach(bookWrap => {
        bookWrap.addEventListener("click", (e) => {
          e.stopPropagation();
          bookWrap.classList.add("page-turning-active");
          setTimeout(() => {
            bookWrap.classList.remove("page-turning-active");
          }, 1250);
        });
      });

      container.querySelectorAll(".ongoing-continue-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const subId = btn.getAttribute("data-subject-id");
          const chNum = parseInt(btn.getAttribute("data-chapter-num"), 10);
          openChapterLesson(subId, chNum, false);
        });
      });
      container.querySelectorAll(".ongoing-chapter-row").forEach(row => {
        row.addEventListener("click", () => {
          const subId = row.getAttribute("data-subject-id");
          const chNum = parseInt(row.getAttribute("data-chapter-num"), 10);
          openChapterLesson(subId, chNum, false);
        });
      });
    } else if (activeTab === "completed") {
      container.querySelectorAll(".completed-chapter-row").forEach(row => {
        row.addEventListener("click", () => {
          const subId = row.getAttribute("data-subject-id");
          const chNum = parseInt(row.getAttribute("data-chapter-num"), 10);
          openChapterLesson(subId, chNum, true);
        });
      });
    }
  }

  function renderCard(subj) {
    if (!subj) return '';
    return `
      <div class="subject-card-3d-flow subject-theme-${subj.id}" data-subject-id="${subj.id}">
        <!-- 3D Graphic Stage with Ambient Glow Aura -->
        <div class="subject-3d-stage">
          <div class="subject-3d-graphic-wrap">
            ${getGraphic(subj.iconType, 96)}
          </div>
        </div>

        <!-- Card Bottom Metadata -->
        <div class="subject-card-bottom-info">
          <h3 class="subject-card-title-flow">${subj.title}</h3>
          <div class="subject-card-chapters-flow">${subj.chaptersCount} Chapters</div>

          <!-- Centered Compact Progress Bar & Value (Matching Reference) -->
          <div class="subject-card-prog-wrap">
            <div class="subject-card-prog-track">
              <div class="subject-card-prog-bar" style="width: ${subj.progress}%;"></div>
            </div>
            <span class="subject-card-prog-val">${subj.progress}%</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderTabContent() {
    if (activeTab === "all") {
      // 1. All Subjects Tab: 5 subject cards in grid matching Screen 01 (3 on Top, 2 Centered on Bottom)
      return `
        <div class="subjects-deck-flow-container">
          <!-- Top Row: 3 Cards (Science, Mathematics, Social Science) -->
          <div class="subjects-deck-flow-row-top">
            ${renderCard(subjects[0])}
            ${renderCard(subjects[1])}
            ${renderCard(subjects[2])}
          </div>
          <!-- Bottom Row: 2 Cards Centered (English, Tamil) -->
          <div class="subjects-deck-flow-row-bottom">
            ${renderCard(subjects[3])}
            ${renderCard(subjects[4])}
          </div>
        </div>
      `;
    } else if (activeTab === "in-progress") {
      // 2. In Progress Tab: Ongoing Chapters list with [Continue] buttons matching Screen 02
      return `
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="ongoing-chapters-list">
            ${ongoingChapters.map(ch => `
              <div class="ongoing-chapter-row" data-subject-id="${ch.subjectId}" data-chapter-num="${ch.chapterNumber}">
                
                <!-- Left: 3D Icon + Subject & Chapter Meta -->
                <div class="ongoing-left-meta">
                  <div class="ongoing-icon-box" style="background: ${getLightBg(ch.subjectId)};">
                    ${getGraphic(ch.iconType || getIconType(ch.subjectId), 34)}
                  </div>
                  <div class="ongoing-text-wrap">
                    <div class="ongoing-subject-title">${ch.subjectTitle}</div>
                    <div class="ongoing-chapter-name">${ch.chapterTitle}</div>
                  </div>
                </div>

                <!-- Center: Green Progress Bar + Percentage -->
                <div class="ongoing-progress-cluster">
                  <div class="ongoing-bar-track">
                    <div class="ongoing-bar-fill" style="width: ${ch.progress}%;"></div>
                  </div>
                  <div class="ongoing-percent-label">${ch.progress}%</div>
                </div>

                <!-- Right: Purple [ Continue ] Button -->
                <button class="ongoing-continue-btn" data-subject-id="${ch.subjectId}" data-chapter-num="${ch.chapterNumber}">
                  Continue
                </button>

              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      // 3. Completed Tab: Finished Chapters list with green [✔ Completed] badges matching Screen 03
      return `
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="completed-chapters-list">
            ${finishedChapters.map(ch => `
              <div class="completed-chapter-row" data-subject-id="${ch.subjectId}" data-chapter-num="${ch.chapterNumber}">
                
                <!-- Left: 3D Icon + Subject & Chapter Meta -->
                <div class="ongoing-left-meta">
                  <div class="ongoing-icon-box" style="background: ${getLightBg(ch.subjectId)};">
                    ${getGraphic(ch.iconType || getIconType(ch.subjectId), 34)}
                  </div>
                  <div class="ongoing-text-wrap">
                    <div class="ongoing-subject-title">${ch.subjectTitle}</div>
                    <div class="ongoing-chapter-name">${ch.chapterTitle}</div>
                  </div>
                </div>

                <!-- Right: Green [✔ Completed] Badge -->
                <div class="completed-status-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Completed</span>
                </div>

              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  function getLightBg(subjectId) {
    const s = subjects.find(sub => sub.id === subjectId);
    return s ? s.lightBg : 'rgba(124, 58, 237, 0.08)';
  }

  function getIconType(subjectId) {
    const s = subjects.find(sub => sub.id === subjectId);
    return s ? s.iconType : 'flask';
  }

  function openChapterLesson(subjectId, chapterNum, isCompleted) {
    state.activeSubjectId = subjectId;
    state.activeChapterNumber = chapterNum;

    const catalogKey = `${subjectId}-ch-${chapterNum}`;
    let lessonData = state.lessonsCatalog && state.lessonsCatalog[catalogKey];

    if (!lessonData) {
      const subj = subjects.find(s => s.id === subjectId) || subjects[0];
      const ch = (subj.chapters || []).find(c => c.number === chapterNum) || { title: `Chapter ${chapterNum}` };
      lessonData = {
        subjectId: subj.id,
        subjectName: subj.title,
        chapterNumber: chapterNum,
        chapterTitle: `Chapter ${chapterNum}: ${ch.title || ''}`,
        duration: "14:30",
        videoTitle: `${ch.title} - Core Concepts & Practice`,
        instructor: "Ms. Revathi • Subject Specialist",
        isCompleted: isCompleted,
        progress: isCompleted ? 100 : 72,
        theme: subjectId === 'science' && chapterNum === 3 ? 'heat' : subjectId,
        description: `Explore the key principles and lesson exercises for ${ch.title}.`,
        checklist: [
          { id: "vid", title: "Video Lesson", done: true, meta: "14 mins" },
          { id: "notes", title: "Chapter Notes", done: true, meta: "PDF" },
          { id: "concepts", title: "Key Concepts", done: isCompleted, meta: "Concepts" },
          { id: "quiz", title: "Practice Quiz", done: isCompleted, score: isCompleted ? "Score: 9 / 10" : null, meta: "Quiz" },
          { id: "worksheet", title: "Worksheet", done: isCompleted, meta: "Assignment" }
        ]
      };
    }

    lessonData.isCompleted = isCompleted;
    state.currentLesson = lessonData;
    app.navigateTo("05");
  }

  renderView();
}
