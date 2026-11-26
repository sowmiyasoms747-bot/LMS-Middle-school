// Screen 08: Assignments - Complete Flow Matching User Reference Images
// Flow:
// 1. Dashboard -> Click Assignments (Screen 1)
// 2. Assignments List -> All / Pending / Submitted / Graded (Screen 2)
// 3. Assignment Details -> Due Date, Questions, Marks, Instructions, 3D Clipboard & Pencil (Screen 3)
// 4. Do Assignment -> Timer 29:45, Q3 Diagram Labeling A, B, C with 3D Cell Model (Screen 4)
// 5. Submit Confirmation Modal -> Document Icon with Green Check Badge, Review/Submit (Screen 5)
// 6. Submission Success -> Big Glowing Green Check Badge, Confetti, View Submission / Back to Assignments (Screen 6)
// 7. Graded Assignment -> Golden Trophy, 8/10 Score, Correct: 8, Wrong: 2, Accuracy: 80%, View Feedback (Screen 7)

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';
import { triggerConfetti } from '../components/confetti.js';

export function renderAssignmentsScreen(container, state, app) {
  let view = state.assignmentsCurrentView || "list"; // "list", "details", "do_assignment", "success", "graded"
  let activeTab = state.assignmentsActiveTab || "all"; // "all", "pending", "submitted", "graded"
  let activeAsg = state.selectedAssignment || null;
  let timerInterval = null;
  let timeLeftSeconds = 29 * 60 + 45; // 29:45 countdown matching Screen 4
  let showSubmitModal = false;
  let answerInputs = { A: "Nucleus", B: "Cell Wall", C: "Cytoplasm" };

  // Complete Assignments Catalog matching Screen 2 & Screen 7
  const assignmentsCatalog = [
    {
      id: "asg-sci-cell",
      title: "The Cell – Worksheet",
      subject: "Science",
      chapter: "Science • Chapter 2",
      subjectId: "science",
      status: "pending", // "pending", "submitted", "graded"
      dueDate: "20 Nov, 11:59 PM",
      dueMeta: "📅 Due: 20 Nov, 11:59 PM",
      questionsCount: 10,
      totalMarks: 10,
      instructions: [
        "Answer all the questions.",
        "You can upload a single file (PDF / Image / Doc).",
        "File size should be less than 10 MB."
      ],
      question3: {
        num: 3,
        title: "Q3. Labell the parts of a cell in the given diagram.",
        inputs: [
          { label: "A.", defaultVal: "Nucleus" },
          { label: "B.", defaultVal: "Cell Wall" },
          { label: "C.", defaultVal: "Cytoplasm" }
        ]
      },
      gradedInfo: {
        score: "8 / 10",
        correct: 8,
        wrong: 2,
        accuracy: "80%",
        feedback: "Great labeling accuracy! Pay special attention to distinguishing the rigid outer cell wall from the plasma membrane."
      }
    },
    {
      id: "asg-math-fractions",
      title: "Fractions – Practice",
      subject: "Mathematics",
      chapter: "Mathematics • Chapter 3",
      subjectId: "maths",
      status: "pending",
      dueDate: "21 Nov, 11:59 PM",
      dueMeta: "📅 Due: 21 Nov, 11:59 PM",
      questionsCount: 12,
      totalMarks: 15,
      instructions: [
        "Show step-by-step working for fraction additions and reductions.",
        "Simplify all answers to their lowest terms.",
        "Upload handwritten working sheet or type answers directly."
      ],
      question3: {
        num: 3,
        title: "Q3. Calculate the sum: 3/4 + 2/3 - 1/6",
        inputs: [
          { label: "A.", defaultVal: "LCM = 12" },
          { label: "B.", defaultVal: "9/12 + 8/12 - 2/12" },
          { label: "C.", defaultVal: "15/12 = 5/4" }
        ]
      },
      gradedInfo: {
        score: "12 / 15",
        correct: 10,
        wrong: 2,
        accuracy: "83%",
        feedback: "Excellent calculation steps! Remember to convert improper fractions to mixed numbers where requested."
      }
    },
    {
      id: "asg-soc-notes",
      title: "Our Environment – Short Notes",
      subject: "Social Science",
      chapter: "Social Science • Chapter 1",
      subjectId: "social",
      status: "submitted",
      dueDate: "18 Nov, 11:59 PM",
      dueMeta: "⏱ Submitted: 18 Nov",
      questionsCount: 5,
      totalMarks: 10,
      instructions: [
        "Summarize the layers of atmosphere and lithosphere components.",
        "Include examples of biotic and abiotic components."
      ],
      question3: {
        num: 3,
        title: "Q3. List 3 differences between biotic and abiotic components.",
        inputs: [
          { label: "A.", defaultVal: "Living vs Non-living" },
          { label: "B.", defaultVal: "Plants & Animals vs Soil & Water" },
          { label: "C.", defaultVal: "Depend on each other for balance" }
        ]
      },
      gradedInfo: {
        score: "Under Review",
        correct: 0,
        wrong: 0,
        accuracy: "In Review",
        feedback: "Submitted on 18 Nov. Evaluation by teacher is in progress."
      }
    },
    {
      id: "asg-eng-tenses",
      title: "Tenses – Exercise",
      subject: "English",
      chapter: "English • Chapter 4",
      subjectId: "english",
      status: "graded",
      dueDate: "15 Nov, 11:59 PM",
      dueMeta: "8 / 10",
      questionsCount: 10,
      totalMarks: 10,
      instructions: [
        "Identify correct tenses and complete grammatical transformations."
      ],
      question3: {
        num: 3,
        title: "Q3. Convert sentence into Past Perfect Continuous Tense.",
        inputs: [
          { label: "A.", defaultVal: "She had been reading for two hours." },
          { label: "B.", defaultVal: "They had been playing since morning." },
          { label: "C.", defaultVal: "I had been studying before the bell rang." }
        ]
      },
      gradedInfo: {
        score: "8 / 10",
        correct: 8,
        wrong: 2,
        accuracy: "80%",
        feedback: "Strong grasp of past perfect tense. Practice conditional sentences and irregular verbs."
      }
    }
  ];

  if (!activeAsg) {
    activeAsg = assignmentsCatalog[0];
  }

  // Handle deep-link from Dashboard if student clicked an assignment card
  if (state.activeAssignmentId) {
    const id = state.activeAssignmentId;
    delete state.activeAssignmentId;
    const match = assignmentsCatalog.find(a => a.id === id);
    if (match) {
      activeAsg = match;
      view = match.status === "graded" ? "graded" : "details";
    }
  }

  function formatTimer(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Global window helpers for foolproof navigation across all views
  window.lmsOpenAssignment = function(id) {
    const match = assignmentsCatalog.find(a => a.id === id) || assignmentsCatalog[0];
    activeAsg = match;
    state.selectedAssignment = match;
    if (match.status === "graded") {
      view = "graded";
    } else if (match.status === "submitted") {
      view = "success";
    } else {
      view = "details";
    }
    render();
  };

  window.lmsStartAssignment = function() {
    timeLeftSeconds = 29 * 60 + 45;
    showSubmitModal = false;
    view = "do_assignment";
    render();
  };

  window.lmsAssignmentOpenSubmitModal = function() {
    showSubmitModal = true;
    render();
  };

  window.lmsAssignmentCloseSubmitModal = function() {
    showSubmitModal = false;
    render();
  };

  window.lmsAssignmentConfirmSubmit = function() {
    showSubmitModal = false;
    if (activeAsg) {
      activeAsg.status = "submitted";
      activeAsg.dueMeta = "⏱ Submitted: Today";
    }
    state.student.points += 50;
    app.updateHeaderStats();
    view = "success";
    render();
  };

  window.lmsAssignmentBackToList = function() {
    showSubmitModal = false;
    view = "list";
    render();
  };

  window.lmsAssignmentBackToDetails = function() {
    showSubmitModal = false;
    view = "details";
    render();
  };

  window.lmsAssignmentViewGraded = function(id) {
    const match = assignmentsCatalog.find(a => a.id === id) || assignmentsCatalog[0];
    activeAsg = match;
    state.selectedAssignment = match;
    view = "graded";
    render();
  };

  window.lmsAssignmentViewSubmission = function() {
    const q = activeAsg || assignmentsCatalog[0];
    app.showModal(`
      <div style="padding: 10px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">📄 Submission Details</h3>
        <p style="font-size: 13px; color: #64748B; margin-bottom: 16px;">${q.title} • ${q.chapter}</p>
        
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 14px; margin-bottom: 14px; font-size: 13px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <strong style="color: #1E293B;">Submission Status:</strong>
            <span class="assignment-status-pill asg-status-submitted">Submitted</span>
          </div>
          <div style="margin-bottom: 6px;"><strong>Submitted File:</strong> <code>The_Cell_Worksheet_Class7.pdf</code> (1.8 MB)</div>
          <div><strong>Turned in on:</strong> Today at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>

        <button class="btn-primary" style="width: 100%; border-radius: 999px; padding: 10px 0; font-weight: 700;" onclick="window.closeLmsModal()">
          Close
        </button>
      </div>
    `);
  };

  function render() {
    try {
      state.assignmentsCurrentView = view;
      state.assignmentsActiveTab = activeTab;

      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      if (view === "list") {
        renderListView();
      } else if (view === "details") {
        renderDetailsView();
      } else if (view === "do_assignment") {
        renderDoAssignmentView();
      } else if (view === "success") {
        renderSuccessView();
      } else if (view === "graded") {
        renderGradedView();
      }
    } catch (err) {
      console.error("Error rendering assignment view:", err);
    }
  }

  // =========================================================================
  // VIEW 1: Assignments List (Matches Image Screen 2)
  // =========================================================================
  function renderListView() {
    let displayedList = assignmentsCatalog;
    if (activeTab === "pending") {
      displayedList = assignmentsCatalog.filter(a => a.status === "pending");
    } else if (activeTab === "submitted") {
      displayedList = assignmentsCatalog.filter(a => a.status === "submitted");
    } else if (activeTab === "graded") {
      displayedList = assignmentsCatalog.filter(a => a.status === "graded");
    }

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Title + Segmented Pill Tabs (All, Pending, Submitted, Graded) -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">Assignments</h1>
          </div>

          <!-- Segmented Pill Tabs -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow ${activeTab === 'all' ? 'active' : ''}" data-tab="all">All</button>
            <button class="tab-pill-btn-flow ${activeTab === 'pending' ? 'active' : ''}" data-tab="pending">Pending</button>
            <button class="tab-pill-btn-flow ${activeTab === 'submitted' ? 'active' : ''}" data-tab="submitted">Submitted</button>
            <button class="tab-pill-btn-flow ${activeTab === 'graded' ? 'active' : ''}" data-tab="graded">Graded</button>
          </div>
        </div>

        <!-- Assignments List Rows Container -->
        <div style="max-width: 860px; margin: 20px auto 0;">
          <div class="ongoing-chapters-list" style="gap: 16px;">
            ${displayedList.map(asg => renderAssignmentRow(asg)).join('')}
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

    // Bind row and button clicks
    container.querySelectorAll(".asg-action-btn, .asg-row-item").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-asg-id");
        if (id && window.lmsOpenAssignment) {
          window.lmsOpenAssignment(id);
        }
      });
    });
  }

  // Row Renderer for Screen 2
  function renderAssignmentRow(asg) {
    const isPending = asg.status === "pending";
    const isSubmitted = asg.status === "submitted";
    const isGraded = asg.status === "graded";

    return `
      <div class="ongoing-chapter-row asg-row-item" data-asg-id="${asg.id}" onclick="if (window.lmsOpenAssignment) window.lmsOpenAssignment('${asg.id}');" style="cursor: pointer;">
        
        <!-- Left: Document Icon in Rounded Purple Box + Title + Subtitle -->
        <div class="ongoing-left-meta" style="min-width: 320px;">
          <div class="ongoing-icon-box lu-plain-icon-box">
            ${GRAPHICS.subjectBadgeIcon(asg.subjectId, 38)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${asg.title}</h3>
            <div style="font-size: 13px; color: #64748B; font-weight: 500; margin-top: 3px;">
              ${asg.chapter}
            </div>
          </div>
        </div>

        <!-- Center: Status Badge & Due/Score Meta -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 180px;">
          ${isPending ? `
            <span class="assignment-status-pill asg-status-pending">Pending</span>
            <span style="font-size: 12px; color: #64748B; font-weight: 600;">${asg.dueMeta}</span>
          ` : isSubmitted ? `
            <span class="assignment-status-pill asg-status-submitted">Submitted</span>
            <span style="font-size: 12px; color: #64748B; font-weight: 600;">${asg.dueMeta}</span>
          ` : `
            <span class="assignment-status-pill asg-status-graded">Graded</span>
            <span style="font-size: 13px; color: #1E293B; font-weight: 800;">${asg.dueMeta}</span>
          `}
        </div>

        <!-- Right: Action Button (Open → or View) -->
        <div>
          <button type="button" class="ongoing-continue-btn asg-action-btn" data-asg-id="${asg.id}" onclick="event.stopPropagation(); if (window.lmsOpenAssignment) window.lmsOpenAssignment('${asg.id}');" style="padding: 8px 24px; cursor: pointer;">
            ${isPending ? 'Open →' : 'View'}
          </button>
        </div>

      </div>
    `;
  }

  // =========================================================================
  // VIEW 2: Assignment Details (Matches Image Screen 3)
  // =========================================================================
  function renderDetailsView() {
    const asg = activeAsg || assignmentsCatalog[0];

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Assignment Details Title -->
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22px;">
          <button id="asg-details-back-btn" class="btn-secondary" onclick="if (window.lmsAssignmentBackToList) window.lmsAssignmentBackToList();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0;">Assignment Details</h1>
        </div>

        <!-- Main Hero Card -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-details-hero-card">
            
            <!-- Top Row: Icon + Title/Chapter + Status Badge -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <div class="ongoing-icon-box lu-plain-icon-box" style="width: 56px; height: 56px;">
                  ${GRAPHICS.subjectBadgeIcon(asg.subjectId, 52)}
                </div>
                <div>
                  <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 4px;">${asg.title}</h2>
                  <p style="font-size: 14px; color: #64748B; margin: 0; font-weight: 600;">${asg.chapter}</p>
                </div>
              </div>

              <!-- Top Right Pending Badge -->
              <div>
                <span class="assignment-status-pill asg-status-pending" style="font-size: 13px; padding: 6px 16px;">
                  Pending
                </span>
              </div>
            </div>

            <!-- 3-Stat Metric Strip: Due Date, Total Questions, Total Marks -->
            <div class="challenge-metric-strip" style="grid-template-columns: repeat(3, 1fr);">
              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #F5F3FF; color: #7C3AED;">
                  ${(ICONS.calendar || ICONS.clock)(20)}
                </div>
                <div>
                  <div style="font-size: 11.5px; color: #64748B; font-weight: 600;">Due Date</div>
                  <div style="font-size: 15px; font-weight: 800; color: #1E293B;">${asg.dueDate}</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #EFF6FF; color: #2563EB;">
                  ${(ICONS.document || ICONS.assignment)(20)}
                </div>
                <div>
                  <div style="font-size: 11.5px; color: #64748B; font-weight: 600;">Total Questions</div>
                  <div style="font-size: 15px; font-weight: 800; color: #1E293B;">${asg.questionsCount}</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FFFBEB; color: #D97706;">
                  ${ICONS.star(28)}
                </div>
                <div>
                  <div style="font-size: 11.5px; color: #64748B; font-weight: 600;">Total Marks</div>
                  <div style="font-size: 15px; font-weight: 800; color: #1E293B;">${asg.totalMarks}</div>
                </div>
              </div>
            </div>

            <!-- Two-Column Section: Instructions Checklist on Left | 3D Clipboard & Pencil on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 32px; padding: 0 8px;">
              
              <!-- Left: Instructions Checklist -->
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                  <span style="color: #3B82F6; font-size: 18px;">ℹ</span>
                  <h3 style="font-size: 16.5px; font-weight: 800; color: #1E293B; margin: 0;">Instructions</h3>
                </div>
                
                <div>
                  ${asg.instructions.map(inst => `
                    <div class="challenge-topic-item">
                      <div class="challenge-check-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span style="font-size: 14px; font-weight: 600; color: #334155;">${inst}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Right: 3D Clipboard Illustration -->
              <div style="width: 200px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 160px; height: 160px; background: radial-gradient(circle, #EDE9FE 0%, rgba(237, 233, 254, 0) 70%); filter: blur(10px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.92);">
                  ${GRAPHICS.clipboardWithPencil(170)}
                </div>
              </div>

            </div>

            <!-- Bottom Action: Start Assignment Button -->
            <div style="text-align: center;">
              <button id="start-asg-btn" class="start-challenge-main-btn" onclick="if (window.lmsStartAssignment) window.lmsStartAssignment();" style="cursor: pointer;">
                Start Assignment →
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    container.querySelector("#asg-details-back-btn")?.addEventListener("click", () => {
      view = "list";
      render();
    });

    container.querySelector("#start-asg-btn")?.addEventListener("click", () => {
      window.lmsStartAssignment();
    });
  }

  // =========================================================================
  // VIEW 3: Do Assignment - Answer Questions (Matches Image Screen 4)
  // =========================================================================
  function renderDoAssignmentView() {
    const asg = activeAsg || assignmentsCatalog[0];
    const q3 = asg.question3 || {
      num: 3,
      title: "Q3. Labell the parts of a cell in the given diagram.",
      inputs: [
        { label: "A.", defaultVal: "Nucleus" },
        { label: "B.", defaultVal: "Cell Wall" },
        { label: "C.", defaultVal: "Cytoplasm" }
      ]
    };

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Back Title + Countdown Timer Pill (29:45) -->
        <div style="max-width: 860px; margin: 0 auto 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            
            <button id="do-asg-back-btn" onclick="if (window.lmsAssignmentBackToDetails) window.lmsAssignmentBackToDetails();" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              ← ${asg.title}
            </button>

            <!-- Countdown Timer matching image 29:45 -->
            <div id="asg-timer-pill" style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1.5px solid #FEE2E2; padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 800; color: #DC2626; box-shadow: 0 2px 8px rgba(239, 68, 68, 0.1);">
              <span>⏰</span> <span id="asg-timer-display">${formatTimer(timeLeftSeconds)}</span>
            </div>

          </div>
        </div>

        <!-- Question Card -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-runner-card">
            
            <!-- Question Title -->
            <h2 style="font-size: 17px; font-weight: 800; color: #0F172A; line-height: 1.5; margin: 0 0 24px;">
              ${q3.title}
            </h2>

            <!-- Main Layout: 3D Diagram on Left | Inputs A, B, C on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 28px;">
              
              <!-- Left: 3D Biological Cell Cutaway Diagram -->
              <div style="width: 280px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 220px; height: 180px; background: radial-gradient(circle, #F3E8FF 0%, rgba(243, 232, 255, 0) 70%); filter: blur(8px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.95); filter: drop-shadow(0 10px 24px rgba(124, 58, 237, 0.2));">
                  ${GRAPHICS.cell3D(280, 210, "nucleus")}
                </div>
              </div>

              <!-- Right: Label Input Rows A, B, C -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 14px;">
                ${q3.inputs.map(item => `
                  <div class="asg-label-input-row">
                    <span class="asg-label-tag">${item.label}</span>
                    <input type="text" class="asg-text-input" data-label="${item.label}" value="${answerInputs[item.label.replace('.', '')] || item.defaultVal}" placeholder="Enter part name..." />
                  </div>
                `).join('')}

                <!-- File Attachment Box -->
                <div style="margin-top: 8px; padding: 12px 16px; background: #F8FAFC; border: 1.5px dashed #CBD5E1; border-radius: 14px; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="window.appInstance.showToast('📄 Worksheet scan attached: The_Cell_Diagram.pdf');">
                  <span style="font-size: 20px;">📎</span>
                  <div style="font-size: 12.5px; color: #64748B;">
                    <strong style="color: #7C3AED;">Attach handwritten file</strong> (Optional: PDF, PNG up to 10 MB)
                  </div>
                </div>
              </div>

            </div>

            <!-- Bottom Button Bar: Previous & Next → -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1.5px solid #F1F5F9;">
              <button id="do-asg-prev-btn" class="btn-secondary" style="border-radius: 999px; padding: 10px 24px; font-weight: 700;">
                ‹ Previous
              </button>

              <button id="do-asg-next-btn" class="ongoing-continue-btn" onclick="if (window.lmsAssignmentOpenSubmitModal) window.lmsAssignmentOpenSubmitModal();" style="padding: 10px 34px; font-size: 14.5px; cursor: pointer;">
                Next →
              </button>
            </div>

          </div>
        </div>

        <!-- Submit Confirmation Modal (Screen 5) -->
        ${showSubmitModal ? renderSubmitModal() : ''}

      </div>
    `;

    // Start Timer
    timerInterval = setInterval(() => {
      if (timeLeftSeconds > 0) {
        timeLeftSeconds--;
        const el = document.getElementById("asg-timer-display");
        if (el) el.innerText = formatTimer(timeLeftSeconds);
      }
    }, 1000);

    // Save inputs on change
    container.querySelectorAll(".asg-text-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const key = input.getAttribute("data-label").replace('.', '');
        answerInputs[key] = e.target.value;
      });
    });

    container.querySelector("#do-asg-prev-btn")?.addEventListener("click", () => {
      view = "details";
      render();
    });

    container.querySelector("#do-asg-next-btn")?.addEventListener("click", () => {
      showSubmitModal = true;
      render();
    });
  }

  // =========================================================================
  // VIEW 4: Submit Confirmation Modal (Matches Image Screen 5)
  // =========================================================================
  function renderSubmitModal() {
    return `
      <div class="quiz-modal-backdrop" id="asg-modal-overlay">
        <div class="quiz-modal-card">
          
          <!-- Top Right Close Button -->
          <button class="quiz-modal-close-btn" onclick="if (window.lmsAssignmentCloseSubmitModal) window.lmsAssignmentCloseSubmitModal();">✕</button>

          <!-- Center Document Graphic with Green Check Badge -->
          <div style="margin: 0 auto 16px;">
            ${GRAPHICS.quizSubmitDocIcon(72)}
          </div>

          <!-- Title & Subtitle -->
          <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">Submit Assignment?</h2>
          <p style="font-size: 14px; color: #64748B; margin: 0 0 20px; font-weight: 600;">You have answered 10 of 10 questions.</p>

          <!-- Action Buttons: Review Answers & Submit -->
          <div class="quiz-modal-btns">
            <button class="btn-secondary" onclick="if (window.lmsAssignmentCloseSubmitModal) window.lmsAssignmentCloseSubmitModal();" style="border-radius: 999px; padding: 11px 24px; font-weight: 700; font-size: 14px; cursor: pointer;">
              Review Answers
            </button>

            <button class="ongoing-continue-btn" onclick="if (window.lmsAssignmentConfirmSubmit) window.lmsAssignmentConfirmSubmit();" style="border-radius: 999px; padding: 11px 32px; font-size: 14.5px; cursor: pointer;">
              Submit
            </button>
          </div>

        </div>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 5: Submission Success - Confirmation (Matches Image Screen 6)
  // =========================================================================
  function renderSuccessView() {
    const asg = activeAsg || assignmentsCatalog[0];

    // Trigger celebratory confetti
    triggerConfetti();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button -->
        <div style="max-width: 540px; margin: 0 auto 18px; display: flex; align-items: center; gap: 12px;">
          <button id="asg-success-back-btn" class="btn-secondary" onclick="if (window.lmsAssignmentBackToList) window.lmsAssignmentBackToList();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; cursor: pointer;">
            ← Assignments
          </button>
        </div>

        <!-- Success Confirmation Card -->
        <div class="assignment-success-card">
          
          <!-- Big Glowing Green Checkmark Circle -->
          <div style="margin: 0 auto 16px;">
            ${GRAPHICS.successCheckBadge(96)}
          </div>

          <!-- Main Heading & Subtitle -->
          <h2 style="font-size: 24px; font-weight: 900; color: #047857; margin: 0 0 6px;">Assignment Submitted!</h2>
          <p style="font-size: 14px; color: #64748B; margin: 0; font-weight: 600;">Your assignment has been successfully submitted.</p>

          <!-- Assignment Summary Pill Box -->
          <div>
            <div class="asg-summary-pill-box">
              <div style="color: #7C3AED; font-size: 22px;">
                ${(ICONS.document || ICONS.assignment)(22)}
              </div>
              <div>
                <h4 style="font-size: 14.5px; font-weight: 800; color: #1E293B; margin: 0;">${asg.title}</h4>
                <div style="font-size: 12px; color: #64748B; font-weight: 600;">${asg.chapter}</div>
              </div>
            </div>
          </div>

          <!-- Action Buttons: View Submission & Back to Assignments -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 14px;">
            <button id="asg-view-sub-btn" class="btn-secondary" onclick="if (window.lmsAssignmentViewSubmission) window.lmsAssignmentViewSubmission();" style="border-radius: 999px; padding: 11px 24px; font-weight: 700; font-size: 14px; cursor: pointer;">
              View Submission
            </button>

            <button id="asg-back-home-btn" class="ongoing-continue-btn" onclick="if (window.lmsAssignmentBackToList) window.lmsAssignmentBackToList();" style="border-radius: 999px; padding: 11px 28px; font-size: 14px; cursor: pointer;">
              Back to Assignments
            </button>
          </div>

        </div>

      </div>
    `;

    container.querySelector("#asg-success-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "submitted";
      render();
    });

    container.querySelector("#asg-back-home-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "submitted";
      render();
    });
  }

  // =========================================================================
  // VIEW 6: Graded Assignment - View Score & Feedback (Matches Image Screen 7)
  // =========================================================================
  function renderGradedView() {
    const asg = activeAsg || assignmentsCatalog[0];
    const graded = asg.gradedInfo || {
      score: "8 / 10",
      correct: 8,
      wrong: 2,
      accuracy: "80%",
      feedback: "Great labeling accuracy! Pay special attention to distinguishing the rigid outer cell wall from the plasma membrane."
    };

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Back Button + Assignment Title + Graded Pill -->
        <div style="max-width: 620px; margin: 0 auto 18px; display: flex; align-items: center; justify-content: space-between;">
          <button id="asg-graded-back-btn" onclick="if (window.lmsAssignmentBackToList) window.lmsAssignmentBackToList();" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
            ← ${asg.title}
          </button>

          <span class="assignment-status-pill asg-status-graded" style="font-size: 13px; padding: 6px 16px;">
            Graded
          </span>
        </div>

        <!-- Celebratory Graded Card -->
        <div class="assignment-graded-card">
          
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 32px; margin-bottom: 28px;">
            
            <!-- Left: Golden Trophy + Large Score Box -->
            <div style="display: flex; flex-direction: column; align-items: center; width: 220px;">
              <div style="margin-bottom: 8px; filter: drop-shadow(0 8px 16px rgba(245, 158, 11, 0.3));">
                ${GRAPHICS.goldTrophy(76)}
              </div>
              <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 18px; padding: 12px 28px; text-align: center; width: 100%;">
                <div style="font-size: 26px; font-weight: 900; color: #1E293B; line-height: 1.1;">${graded.score}</div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700; margin-top: 2px;">Score</div>
              </div>
            </div>

            <!-- Right: Breakdown Metrics (Correct, Wrong, Accuracy) -->
            <div style="flex: 1; padding-left: 10px;">
              
              <div class="asg-graded-meta-item">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: #ECFDF5; color: #059669; display: flex; align-items: center; justify-content: center; font-size: 14px;">✔</div>
                <span style="color: #64748B;">Correct Answers :</span>
                <strong style="color: #059669;">${graded.correct}</strong>
              </div>

              <div class="asg-graded-meta-item">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: #FEE2E2; color: #DC2626; display: flex; align-items: center; justify-content: center; font-size: 14px;">✖</div>
                <span style="color: #64748B;">Wrong Answers :</span>
                <strong style="color: #DC2626;">${graded.wrong}</strong>
              </div>

              <div class="asg-graded-meta-item">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center; font-size: 13px;">⏱</div>
                <span style="color: #64748B;">Accuracy :</span>
                <strong style="color: #1E293B;">${graded.accuracy}</strong>
              </div>

            </div>

          </div>

          <!-- Bottom Action: View Answers & Feedback Button -->
          <div style="text-align: center;">
            <button id="asg-view-feedback-btn" class="start-challenge-main-btn" style="padding: 12px 36px; font-size: 14.5px; cursor: pointer;">
              View Answers & Feedback →
            </button>
          </div>

        </div>

      </div>
    `;

    container.querySelector("#asg-graded-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "graded";
      render();
    });

    container.querySelector("#asg-view-feedback-btn")?.addEventListener("click", () => {
      app.showModal(`
        <div style="padding: 10px;">
          <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">Evaluation Feedback</h3>
          <p style="font-size: 13px; color: #64748B; margin-bottom: 16px;">${asg.title} • Teacher Remarks</p>
          
          <div style="background: #F0FDF4; border: 1.5px solid #10B981; border-radius: 12px; padding: 14px; margin-bottom: 14px; font-size: 13px; color: #065F46;">
            <strong>Teacher Remark:</strong>
            <p style="margin: 6px 0 0; line-height: 1.5;">${graded.feedback}</p>
          </div>

          <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 12px; font-size: 13px; color: #334155;">
            <strong>Itemized Marks Breakdown:</strong>
            <ul style="margin: 6px 0 0 18px; line-height: 1.5;">
              <li>Q1 - Q2: Structure definitions (2/2)</li>
              <li>Q3: Cell organelle diagram labeling (3/3)</li>
              <li>Q4: Photosynthesis explanation (2/2)</li>
              <li>Q5: Osmosis and diffusion comparison (1/3)</li>
            </ul>
          </div>

          <button class="btn-primary" style="width: 100%; border-radius: 999px; padding: 10px 0; font-weight: 700; margin-top: 14px;" onclick="window.closeLmsModal()">
            Done
          </button>
        </div>
      `);
    });
  }

  // Initial render
  render();
}
