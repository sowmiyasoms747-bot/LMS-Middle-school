// Screen 05: Chapter Learning - Video Lesson & Resources
// Supports Screen 05 (In-Progress Mode) and Screen 07 (Completed Mode)

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';
import { triggerConfetti } from '../components/confetti.js';

export function renderVideoLessonScreen(container, state, app) {
  const lesson = state.currentLesson || {
    subjectId: "science",
    subjectName: "Science",
    chapterNumber: 3,
    chapterTitle: "Chapter 3: Heat",
    duration: "14:35",
    videoTitle: "Heat Transfer, Conduction & Temperature Dynamics",
    instructor: "Ms. Revathi • Physics & Chemistry Specialist",
    isCompleted: false,
    progress: 72,
    theme: "heat",
    description: "Understand the fundamentals of thermal energy, conduction, convection, radiation, and clinical vs laboratory thermometers.",
    checklist: [
      { id: "vid", title: "Video Lesson", done: true, meta: "14 mins" },
      { id: "notes", title: "Chapter Notes", done: true, meta: "PDF Downloaded" },
      { id: "concepts", title: "Key Concepts", done: false, meta: "5 Principles" },
      { id: "quiz", title: "Practice Quiz", done: false, meta: "10 Questions" },
      { id: "worksheet", title: "Worksheet", done: false, meta: "Homework" }
    ]
  };

  let isPlaying = false;
  let currentTime = 0;
  const totalSeconds = 875; // 14 mins 35 secs
  let playInterval = null;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function getVideoVisual() {
    if (lesson.theme === "heat" || lesson.chapterNumber === 3) {
      return GRAPHICS.heatWaveIllustration(340, 240);
    }
    return GRAPHICS.cell3D(340, 240);
  }

  function renderView() {
    const isComp = Boolean(lesson.isCompleted);

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Breadcrumb (< Subject > Chapter Title) matching Screen 05 / 07 -->
        <div class="lms-breadcrumb-nav">
          <span class="crumb-link" id="crumb-subject">&lt; ${lesson.subjectName}</span>
          <span style="color: #94A3B8; font-weight: 400;">&gt;</span>
          <span class="crumb-active">${lesson.chapterTitle}</span>
        </div>

        <!-- 2-Column Video Lesson Layout -->
        <div class="video-screen-layout">
          
          <!-- Left Column: Video Player & Controls -->
          <div class="video-main-col">
            <div class="video-player-container">
              
              <!-- Video Canvas Stage -->
              <div class="video-canvas-stage" id="video-stage">
                <div id="video-stage-graphic" style="transition: transform 0.4s ease; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
                  ${getVideoVisual()}
                </div>
                
                <!-- Center Play Overlay Button -->
                <div class="video-play-center-btn" id="center-play-btn" style="${isPlaying ? 'opacity: 0; pointer-events: none;' : 'opacity: 1;'}">
                  ${ICONS.play(32)}
                </div>

                <!-- Top Left Tag -->
                <div style="position: absolute; top: 16px; left: 16px; background: rgba(0,0,0,0.65); backdrop-filter: blur(8px); padding: 5px 14px; border-radius: var(--radius-pill); font-size: 12px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; gap: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: ${isComp ? '#10B981' : '#EF4444'}; display: inline-block;"></span>
                  ${isComp ? 'Completed Lesson' : '3D Interactive Lesson'}
                </div>
              </div>

              <!-- Video Controls Bar -->
              <div class="video-controls-bar">
                <!-- Timeline Scrubber -->
                <div class="video-timeline-scrubber" id="timeline-scrubber">
                  <div class="video-timeline-progress" id="timeline-bar" style="width: ${(currentTime / totalSeconds) * 100}%;">
                    <div class="video-timeline-knob"></div>
                  </div>
                </div>

                <div class="video-buttons-row">
                  <div style="display: flex; align-items: center; gap: 14px;">
                    <button class="video-ctrl-btn" id="ctrl-play-pause-btn">
                      ${isPlaying ? ICONS.pause(20) : ICONS.play(20)}
                    </button>
                    <span style="font-size: 12.5px; font-weight: 600; color: #CBD5E1;" id="time-display">
                      ${formatTime(currentTime)} / ${lesson.duration || '14:35'}
                    </span>
                  </div>

                  <div style="display: flex; align-items: center; gap: 12px;">
                    <button class="video-ctrl-btn" title="Speed">1.0x</button>
                    <button class="video-ctrl-btn" title="HD Quality">1080p</button>
                    <button class="video-ctrl-btn" id="ctrl-fullscreen-btn" title="Fullscreen">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <!-- Action Buttons Row below Video -->
            <div class="video-action-bottom-bar">
              ${!isComp ? `
                <!-- In-Progress Mode: Single prominent [▶ Continue Learning] button -->
                <button class="btn-continue-learning-pill" id="continue-learning-action-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Continue Learning
                </button>
              ` : `
                <!-- Completed Mode: [ Rewatch Lesson ] and [ View Notes ] side-by-side -->
                <div class="completed-buttons-group">
                  <button class="btn-rewatch-pill" id="rewatch-lesson-action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Rewatch Lesson
                  </button>
                  <button class="btn-notes-pill" id="view-notes-action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    View Notes
                  </button>
                </div>
              `}
            </div>

            <!-- Lesson Overview Card -->
            <div class="lms-card" style="margin-top: 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                <div>
                  <h3 style="font-size: 18px; font-weight: 800; color: #1E293B;">${lesson.videoTitle || lesson.chapterTitle}</h3>
                  <span style="font-size: 13px; color: var(--primary); font-weight: 700;">${lesson.instructor || 'Ms. Revathi • Subject Specialist'}</span>
                </div>
                <span class="badge-status ${isComp ? 'badge-emerald' : 'badge-purple'}">
                  ${isComp ? 'Completed' : 'Class 7 NCERT'}
                </span>
              </div>
              <p style="font-size: 14px; color: #475569; line-height: 1.55;">
                ${lesson.description || 'Master key concepts with interactive 3D simulations, step-by-step illustrations, and comprehensive summary notes.'}
              </p>
            </div>
          </div>

          <!-- Right Column: Chapter Progress & Lesson Checklist -->
          <div class="video-resources-col">
            <div class="lesson-resources-card">
              
              ${!isComp ? `
                <!-- In-Progress Mode Header: Chapter Progress with 72% green bar -->
                <div style="margin-bottom: 18px;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <h3 style="font-size: 16px; font-weight: 800; color: #1E293B;">Chapter Progress</h3>
                    <span style="font-size: 14px; font-weight: 800; color: #10B981;">${lesson.progress || 72}%</span>
                  </div>
                  <div class="ongoing-bar-track" style="height: 8px;">
                    <div class="ongoing-bar-fill" style="width: ${lesson.progress || 72}%;"></div>
                  </div>
                </div>
              ` : `
                <!-- Completed Mode Header: Chapter Status [✔ Completed] -->
                <div style="margin-bottom: 18px;">
                  <h3 style="font-size: 15px; font-weight: 800; color: #64748B; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Chapter Status</h3>
                  <div class="completed-status-pill" style="font-size: 13.5px; padding: 7px 20px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Completed</span>
                  </div>
                </div>
              `}

              <!-- Lesson Checklist -->
              <div class="checklist-container">
                ${(lesson.checklist || [
                  { title: "Video Lesson", done: true },
                  { title: "Chapter Notes", done: true },
                  { title: "Key Concepts", done: isComp },
                  { title: "Practice Quiz", done: isComp, score: isComp ? "Score: 9 / 10" : null },
                  { title: "Worksheet", done: isComp }
                ]).map(item => `
                  <div class="checklist-item ${item.done ? 'done' : ''}">
                    <div class="checklist-check-circle ${item.done ? 'checked' : 'unchecked'}">
                      ${item.done ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
                    </div>
                    <div style="flex: 1;">
                      <div style="font-size: 13.5px; font-weight: 700; color: ${item.done ? '#1E293B' : '#475569'};">
                        ${item.title}
                      </div>
                      ${item.score ? `<span style="font-size: 11.5px; color: #10B981; font-weight: 700;">${item.score}</span>` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Quick Practice Quiz Action Button -->
              <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E2E8F0;">
                <button class="btn-primary" id="btn-quick-quiz-action" style="width: 100%;">
                  Take Chapter Quiz ${ICONS.chevronRight(18)}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    // Breadcrumb navigation back to Screen 04
    container.querySelector("#crumb-subject")?.addEventListener("click", () => {
      app.navigateTo("04");
    });

    // Playback simulation
    const stage = container.querySelector("#video-stage");
    const centerPlay = container.querySelector("#center-play-btn");
    const ctrlPlay = container.querySelector("#ctrl-play-pause-btn");
    const timeDisplay = container.querySelector("#time-display");
    const timelineBar = container.querySelector("#timeline-bar");
    const stageGraphic = container.querySelector("#video-stage-graphic");

    function togglePlay() {
      isPlaying = !isPlaying;
      if (isPlaying) {
        if (ctrlPlay) ctrlPlay.innerHTML = ICONS.pause(20);
        if (centerPlay) {
          centerPlay.style.opacity = "0";
          centerPlay.style.pointerEvents = "none";
        }
        if (stageGraphic) stageGraphic.style.transform = "scale(1.05)";
        app.showToast(`Playing ${lesson.chapterTitle} lesson`);

        playInterval = setInterval(() => {
          currentTime += 1;
          if (currentTime >= totalSeconds) {
            currentTime = totalSeconds;
            togglePlay();
          }
          if (timeDisplay) timeDisplay.innerText = `${formatTime(currentTime)} / ${lesson.duration || '14:35'}`;
          if (timelineBar) timelineBar.style.width = `${(currentTime / totalSeconds) * 100}%`;
        }, 1000);
      } else {
        if (ctrlPlay) ctrlPlay.innerHTML = ICONS.play(20);
        if (centerPlay) {
          centerPlay.style.opacity = "1";
          centerPlay.style.pointerEvents = "auto";
        }
        if (stageGraphic) stageGraphic.style.transform = "scale(1)";
        if (playInterval) clearInterval(playInterval);
      }
    }

    centerPlay?.addEventListener("click", togglePlay);
    ctrlPlay?.addEventListener("click", togglePlay);

    // [▶ Continue Learning] button click
    const continueBtn = container.querySelector("#continue-learning-action-btn");
    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        triggerConfetti();
        lesson.isCompleted = true;
        lesson.progress = 100;
        if (lesson.checklist) {
          lesson.checklist.forEach(item => {
            item.done = true;
            if (item.id === "quiz" && !item.score) item.score = "Score: 9 / 10";
          });
        }
        app.showToast("🎉 Chapter Completed! You earned +50 Points!", "success");
        renderView();
      });
    }

    // [ Rewatch Lesson ] button click
    const rewatchBtn = container.querySelector("#rewatch-lesson-action-btn");
    if (rewatchBtn) {
      rewatchBtn.addEventListener("click", () => {
        currentTime = 0;
        if (timeDisplay) timeDisplay.innerText = `00:00 / ${lesson.duration || '14:35'}`;
        if (timelineBar) timelineBar.style.width = `0%`;
        if (!isPlaying) togglePlay();
        app.showToast("Rewatching lesson from start...");
      });
    }

    // [ View Notes ] button click
    const notesBtn = container.querySelector("#view-notes-action-btn");
    if (notesBtn) {
      notesBtn.addEventListener("click", () => {
        app.showModal(`
          <div style="padding: 10px;">
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 8px;">📄 ${lesson.chapterTitle} - Complete Study Notes</h3>
            <p style="font-size: 13.5px; color: #475569; margin-bottom: 14px; line-height: 1.5;">
              ${lesson.description || 'Comprehensive revision summaries, formulas, and visual diagrams curated for Class 7.'}
            </p>
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px; margin-bottom: 16px; font-size: 13px; color: #334155;">
              <strong>Topics Covered:</strong>
              <ul style="margin: 6px 0 0 18px; line-height: 1.5;">
                <li>Fundamental definitions & scientific principles</li>
                <li>Comparative organelle / thermal transfer tables</li>
                <li>NCERT textbook solved practice problems</li>
              </ul>
            </div>
            <button class="btn-primary" style="width: 100%;" onclick="alert('Downloading notes PDF...'); window.closeLmsModal();">
              Download Full PDF (2.4 MB)
            </button>
          </div>
        `);
      });
    }

    // Quick quiz button
    container.querySelector("#btn-quick-quiz-action")?.addEventListener("click", () => {
      app.navigateTo("06");
    });
  }

  renderView();
}
