// Screen 04: Subject - Chapter List (e.g. Science)
// Matching Reference Screen 04: "Subject Detail (Example: Science)"

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';

export function renderChapterListScreen(container, state, app) {
  const currentSubject = state.subjects.find(s => s.id === (state.activeSubjectId || "science")) || state.subjects[0];
  let activeTab = "chapters"; // chapters, resources, practice, notes

  function renderView() {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Breadcrumb Navigation (My Learning > Subject Name) -->
        <div class="lms-breadcrumb-nav">
          <span class="crumb-link" id="crumb-my-learning">My Learning</span>
          <span style="color: #94A3B8; font-weight: 400;">&gt;</span>
          <span class="crumb-active">${currentSubject.title}</span>
        </div>

        <!-- Subject Hero Banner -->
        <div class="subject-hero-banner" style="background: ${currentSubject.id === 'science' ? 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)' : currentSubject.bgGradient};">
          <div style="display: flex; align-items: center; gap: 24px;">
            <div style="background: rgba(255,255,255,0.15); padding: 14px; border-radius: var(--radius-xl); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
              ${GRAPHICS.getSubjectIcon(currentSubject.iconType, 70)}
            </div>
            <div>
              <span class="badge-status" style="background: rgba(255,255,255,0.2); color: #FFFFFF; border: none; margin-bottom: 8px;">
                ${currentSubject.classGrade} • ${currentSubject.chaptersCount} Chapters
              </span>
              <h1 style="font-size: 28px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px; margin-top: 2px;">
                ${currentSubject.title}
              </h1>
              <p style="font-size: 13.5px; color: #E0E7FF; max-width: 520px; margin-top: 4px; line-height: 1.45;">
                ${currentSubject.description}
              </p>
            </div>
          </div>

          <!-- Circular Progress Gauge (e.g. 72% or 100%) -->
          <div style="display: flex; flex-direction: column; align-items: center;">
            <div class="circular-progress-wrap">
              <svg width="90" height="90" viewBox="0 0 100 100" class="circular-progress-svg">
                <circle cx="50" cy="50" r="40" class="circular-progress-bg"/>
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  class="circular-progress-fill"
                  stroke-dasharray="251.2"
                  stroke-dashoffset="${251.2 * (1 - currentSubject.progress / 100)}"
                />
              </svg>
              <div class="circular-progress-label">${currentSubject.progress}%</div>
            </div>
            <span style="font-size: 12px; font-weight: 700; color: #E0E7FF; margin-top: 6px;">Overall Progress</span>
          </div>
        </div>

        <!-- Sub Tabs (Chapters | Resources | Practice | Notes) -->
        <div class="tabs-nav-bar">
          <button class="tab-pill-btn ${activeTab === 'chapters' ? 'active' : ''}" data-subtab="chapters">Chapters</button>
          <button class="tab-pill-btn ${activeTab === 'resources' ? 'active' : ''}" data-subtab="resources">Resources</button>
          <button class="tab-pill-btn ${activeTab === 'practice' ? 'active' : ''}" data-subtab="practice">Practice</button>
          <button class="tab-pill-btn ${activeTab === 'notes' ? 'active' : ''}" data-subtab="notes">Notes</button>
        </div>

        <!-- Content Area based on Tab -->
        ${activeTab === 'chapters' ? `
          <!-- Chapter List Items -->
          <div class="chapter-items-container">
            ${currentSubject.chapters.map(ch => {
              let iconHtml = '';
              let badgeHtml = '';

              if (ch.status === 'completed') {
                iconHtml = `<div class="chapter-status-dot" style="background: #ECFDF5; color: #059669;">${ICONS.checkCircle(20)}</div>`;
                badgeHtml = `
                  <span class="completed-status-pill" style="font-size: 12px; padding: 4px 14px;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Completed
                  </span>
                `;
              } else if (ch.status === 'in-progress') {
                iconHtml = `<div class="chapter-status-dot" style="background: #EDE9FE; color: #7C3AED;">${ICONS.play(18)}</div>`;
                badgeHtml = `
                  <span class="badge-status badge-purple" style="font-size: 12px; padding: 5px 14px; font-weight: 700;">
                    In Progress ❯
                  </span>
                `;
              } else {
                iconHtml = `<div class="chapter-status-dot" style="background: #F1F5F9; color: #94A3B8;">${ICONS.clock(18)}</div>`;
                badgeHtml = `<span class="badge-status badge-gray" style="font-size: 12px; padding: 5px 14px;">Not Started</span>`;
              }

              return `
                <div class="chapter-row-item ${ch.isCurrent ? 'chapter-current-active' : ''}" data-chapter-id="${ch.id}" data-chapter-num="${ch.number}" data-chapter-status="${ch.status}">
                  <div class="chapter-left-meta">
                    ${iconHtml}
                    <div>
                      <h4 class="chapter-title-text" style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Chapter ${ch.number}: ${ch.title}</h4>
                      <span class="chapter-lessons-sub" style="font-size: 12.5px; color: #64748B;">${ch.lessonsCount || 4} Lessons • ${ch.quizzesCount || 1} Quiz • ${ch.duration || '45 mins'}</span>
                    </div>
                  </div>

                  <div style="display: flex; align-items: center; gap: 16px;">
                    ${badgeHtml}
                    <div style="color: var(--text-muted);">${ICONS.chevronRight(18)}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <!-- Resources / Practice / Notes Tab Mock -->
          <div class="lms-card" style="text-align: center; padding: 48px 24px;">
            <div style="font-size: 36px; margin-bottom: 12px;">📁</div>
            <h3 style="font-size: 18px; font-weight: 800; color: #1E293B;">
              ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} for ${currentSubject.title}
            </h3>
            <p style="font-size: 13.5px; color: var(--text-secondary); max-width: 480px; margin: 8px auto 20px;">
              Curated study materials, revision flashcards, PDF summaries, and worksheets for Class 7 students.
            </p>
            <button class="btn-primary" id="open-current-chapter-btn">
              Open Chapter 3: Heat Video Lesson →
            </button>
          </div>
        `}

      </div>
    `;

    // Breadcrumb navigation to Screen 03
    container.querySelector("#crumb-my-learning")?.addEventListener("click", () => {
      app.navigateTo("03");
    });

    // Subtabs
    container.querySelectorAll(".tab-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-subtab");
        renderView();
      });
    });

    // Chapter row clicks
    container.querySelectorAll(".chapter-row-item").forEach(item => {
      item.addEventListener("click", () => {
        const chNum = parseInt(item.getAttribute("data-chapter-num"), 10);
        const status = item.getAttribute("data-chapter-status");
        openChapterLesson(currentSubject.id, chNum, status === 'completed');
      });
    });

    const openCurrentBtn = container.querySelector("#open-current-chapter-btn");
    if (openCurrentBtn) {
      openCurrentBtn.addEventListener("click", () => {
        openChapterLesson(currentSubject.id, 3, false);
      });
    }
  }

  function openChapterLesson(subjectId, chapterNum, isCompleted) {
    state.activeSubjectId = subjectId;
    state.activeChapterNumber = chapterNum;

    const catalogKey = `${subjectId}-ch-${chapterNum}`;
    let lessonData = state.lessonsCatalog && state.lessonsCatalog[catalogKey];

    if (!lessonData) {
      const subj = state.subjects.find(s => s.id === subjectId) || state.subjects[0];
      const ch = (subj.chapters || []).find(c => c.number === chapterNum) || { title: `Chapter ${chapterNum}` };
      lessonData = {
        subjectId: subj.id,
        subjectName: subj.title,
        chapterNumber: chapterNum,
        chapterTitle: `Chapter ${chapterNum}: ${ch.title}`,
        duration: "14:35",
        videoTitle: `${ch.title} - Core Concepts & Practice`,
        instructor: "Ms. Revathi • Subject Specialist",
        isCompleted: isCompleted,
        progress: isCompleted ? 100 : 72,
        theme: subjectId === 'science' && chapterNum === 3 ? 'heat' : subjectId,
        description: `Explore the key principles and lesson exercises for ${ch.title}.`,
        checklist: [
          { id: "vid", title: "Video Lesson", done: true, meta: "14 mins" },
          { id: "notes", title: "Chapter Notes", done: true, meta: "PDF Downloaded" },
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
