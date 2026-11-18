// Screen 11: AI Study Buddy - Complete Flow (Classes 6 – 8) Student View
// Matching Reference Flow:
// 1. Dashboard -> Click AI Study Buddy (with Quick Actions)
// 2. AI Study Buddy Home -> Choose a Learning Option (6 Options: Ask Doubt, Explain Concept, Summarize Chapter, Generate Practice Quiz, Create Study Plan, Revise for Exam)
// 3. Ask Doubt -> Get Instant, Simple Explanation (Q: nucleus function, formatted points, thumbs up/down, Save, Share, Ask Another Doubt)
// 4. Summarize Chapter -> Select Subject & Chapter -> Generate Summary (Key points with checkmarks, Save to Notes)
// 5. Generate Practice Quiz -> Subject, Chapter, Questions, Difficulty -> Create Custom Quizzes
// 6. Study Plan -> Goal, Duration -> Personalized 7-Day Learning Schedule with interactive checklist
// 7. Revise for Exam -> Important Questions, PYQs, Quick Revision Notes, Formula Sheet

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';
import { triggerConfetti } from '../components/confetti.js';

export function renderAiBuddyScreen(container, state, app) {
  let view = state.aiBuddyView || "home"; // "home", "ask_doubt", "summarize", "quiz", "study_plan", "revise"

  // Pre-populate chat history if empty or not set
  if (!state.aiChatHistory || state.aiChatHistory.length === 0) {
    state.aiChatHistory = [
      {
        sender: "user",
        text: "What is the function of the nucleus in a cell?"
      },
      {
        sender: "bot",
        text: `The nucleus is the control center of the cell.\nIt:\n• Controls all the activities of the cell.\n• Contains the cell's genetic material (DNA).\n• Helps in growth, repair and reproduction.\n\nIn short, it directs and regulates the cell's functions.`,
        saved: false,
        liked: null
      }
    ];
  }

  // State for Summarize
  let selectedSubject = state.aiSelectedSubject || "Science";
  let selectedChapter = state.aiSelectedChapter || "The Cell";
  let summaryGenerated = state.aiSummaryGenerated !== undefined ? state.aiSummaryGenerated : true;

  // State for Quiz Generator
  let quizSubject = state.aiQuizSubject || "Mathematics";
  let quizChapter = state.aiQuizChapter || "Fractions";
  let quizNumQuestions = state.aiQuizNumQuestions || "10 Questions";
  let quizDifficulty = state.aiQuizDifficulty || "Medium";

  // State for Study Plan
  let planGoal = state.aiPlanGoal || "Chapter Revision";
  let planDuration = state.aiPlanDuration || "7 Days";
  if (!state.aiPlanCompletedDays) {
    state.aiPlanCompletedDays = [1];
  }
  let planCompletedDays = state.aiPlanCompletedDays;

  // Subject -> Chapters mapping
  const subjectChapters = {
    "Science": ["The Cell", "Nutrition in Plants", "Heat", "Acids, Bases and Salts", "Respiration in Organisms"],
    "Mathematics": ["Fractions", "Integers", "Algebraic Expressions", "Lines and Angles", "Data Handling"],
    "Social Science": ["Our Environment", "Inside Our Earth", "The Delhi Sultans", "The Mughal Empire"],
    "English": ["Tenses", "Nouns & Pronouns", "Active and Passive Voice", "Direct and Indirect Speech"],
    "Tamil": ["இலக்கியம் (Literature)", "எழுத்துக்கள் வகைகள் (Letter Types)", "கவிதை பேழை (Poetry)"]
  };

  // Summaries dictionary
  const chapterSummaries = {
    "The Cell": [
      "The cell is the basic structural and functional unit of life.",
      "It has three primary parts: cell membrane, cytoplasm, and nucleus.",
      "The nucleus holds genetic material (DNA) and directs all cellular activities.",
      "Plant cells contain a rigid cell wall and chloroplasts; animal cells do not.",
      "Mitochondria are the powerhouses that generate cellular energy (ATP)."
    ],
    "Nutrition in Plants": [
      "Autotrophs like green plants prepare food via photosynthesis using sunlight, chlorophyll, CO₂, and water.",
      "Chlorophyll in leaves captures solar radiant energy.",
      "Heterotrophs and parasites (like Cuscuta) absorb nutrition from host organisms.",
      "Insectivorous plants (e.g., Pitcher plant) trap insects for supplemental nitrogen."
    ],
    "Heat": [
      "Heat is a form of thermal energy transferred due to temperature difference.",
      "Conduction is the primary mode of heat transfer in solids.",
      "Convection transfers heat through bulk movement in liquids and gases.",
      "Radiation does not require any physical medium and travels through a vacuum."
    ],
    "Fractions": [
      "A fraction represents part of a whole (Numerator / Denominator).",
      "Proper fractions have numerator < denominator; improper have numerator ≥ denominator.",
      "To add or subtract unlike fractions, first find the common denominator (LCM).",
      "To divide by a fraction, multiply by its reciprocal (invert and multiply)."
    ]
  };

  // Global Navigation Handlers
  window.lmsAiSetView = function(viewName) {
    state.aiBuddyView = viewName;
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiAskDoubt = function(doubtText) {
    if (!doubtText) return;
    state.aiChatHistory.push({ sender: "user", text: doubtText });
    state.aiBuddyView = "ask_doubt";
    renderAiBuddyScreen(container, state, app);

    // Generate intelligent contextual response
    setTimeout(() => {
      let botReply = "";
      const lower = doubtText.toLowerCase();

      if (lower.includes("cell") && lower.includes("nucleus")) {
        botReply = `The nucleus is the control center of the cell.\nIt:\n• Controls all the activities of the cell.\n• Contains the cell's genetic material (DNA).\n• Helps in growth, repair and reproduction.\n\nIn short, it directs and regulates the cell's functions.`;
      } else if (lower.includes("plant") && lower.includes("animal")) {
        botReply = `Great question! Here is how Plant and Animal Cells differ:\n• Plant cells have a rigid outer Cell Wall; animal cells have only a cell membrane.\n• Plant cells have green Chloroplasts for photosynthesis; animal cells do not.\n• Plant cells typically have one large central vacuole, while animal cells have small, temporary vacuoles.`;
      } else if (lower.includes("photosynthesis")) {
        botReply = `Photosynthesis is the process by which green plants make food.\nFormula: Carbon Dioxide + Water + Sunlight → Glucose + Oxygen.\nChlorophyll in the leaves absorbs sunlight energy to convert minerals into food for the plant.`;
      } else if (lower.includes("fraction") || lower.includes("divide")) {
        botReply = `To divide fractions, follow the "Keep, Change, Flip" rule:\n1. Keep the first fraction as it is.\n2. Change the division sign (÷) to multiplication (×).\n3. Flip the second fraction upside down (its reciprocal).\nExample: 1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3!`;
      } else if (lower.includes("heat") || lower.includes("conduction")) {
        botReply = `Heat flows from a hotter body to a colder body in 3 ways:\n1. Conduction (in solids through vibrating atoms).\n2. Convection (in liquids and gases via fluid currents).\n3. Radiation (via infrared waves without any medium, like Sun rays).`;
      } else {
        botReply = `That is an excellent study question on "${doubtText}"! 🌟\nHere are the key takeaways:\n• Remember the core definition and how it connects to everyday examples.\n• Break complex problems down into step-by-step principles.\n• You can also generate an instant Practice Quiz or Chapter Summary from the menu!`;
      }

      state.aiChatHistory.push({ sender: "bot", text: botReply, saved: false, liked: null });
      renderAiBuddyScreen(container, state, app);
    }, 600);
  };

  window.lmsAiToggleLike = function(idx, isLiked) {
    if (state.aiChatHistory[idx]) {
      state.aiChatHistory[idx].liked = isLiked;
      app.showToast(isLiked ? "Thanks for your feedback! 👍" : "We'll improve our answer! 👎");
      renderAiBuddyScreen(container, state, app);
    }
  };

  window.lmsAiSaveAnswer = function(idx) {
    if (state.aiChatHistory[idx]) {
      state.aiChatHistory[idx].saved = true;
      app.showToast("Answer saved to your Study Notes! 📝");
      renderAiBuddyScreen(container, state, app);
    }
  };

  window.lmsAiShareAnswer = function(idx) {
    triggerConfetti(1200);
    app.showToast("Answer copied to share with classmates! 🔗");
  };

  window.lmsAiAskAnother = function() {
    const inputEl = container.querySelector("#ai-bottom-input");
    if (inputEl) {
      inputEl.focus();
    } else {
      window.lmsAiSetView("home");
    }
  };

  window.lmsAiChangeSubject = function(subj) {
    state.aiSelectedSubject = subj;
    const chapters = subjectChapters[subj] || ["Chapter 1"];
    state.aiSelectedChapter = chapters[0];
    state.aiSummaryGenerated = false;
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiChangeChapter = function(ch) {
    state.aiSelectedChapter = ch;
    state.aiSummaryGenerated = false;
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiGenerateSummary = function() {
    state.aiSummaryGenerated = true;
    triggerConfetti(1500);
    app.showToast(`Summary generated for ${state.aiSelectedChapter || selectedChapter}! ✨`);
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiCreateQuiz = function() {
    triggerConfetti(2000);
    app.showModal(`
      <div style="text-align: center; padding: 24px 20px;">
        <div style="margin-bottom: 14px;">
          ${GRAPHICS.quizClipboard3D ? GRAPHICS.quizClipboard3D(84, 84) : '📝'}
        </div>
        <h2 style="font-size: 22px; font-weight: 800; color: #1E1B4B; margin-bottom: 6px;">
          AI Practice Quiz Ready!
        </h2>
        <p style="font-size: 14px; color: #64748B; margin-bottom: 18px;">
          Generated <strong>${quizNumQuestions}</strong> on <strong>${quizSubject} – ${quizChapter}</strong> (${quizDifficulty} Level).
        </p>
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 16px; padding: 14px 20px; text-align: left; margin-bottom: 24px; font-size: 13.5px; color: #334155;">
          <div>✔ <strong>Subject:</strong> ${quizSubject}</div>
          <div style="margin-top: 4px;">✔ <strong>Chapter:</strong> ${quizChapter}</div>
          <div style="margin-top: 4px;">✔ <strong>Target Time:</strong> 15 Minutes</div>
          <div style="margin-top: 4px;">✔ <strong>Points to Earn:</strong> +50 Points</div>
        </div>
        <div style="display: flex; justify-content: center; gap: 12px;">
          <button class="btn-primary" onclick="window.closeLmsModal(); window.appInstance.navigateTo('06');">
            Attempt Quiz Now →
          </button>
          <button class="btn-secondary" onclick="window.closeLmsModal()">
            Later
          </button>
        </div>
      </div>
    `);
  };

  window.lmsAiTogglePlanDay = function(dayNum) {
    if (!state.aiPlanCompletedDays) state.aiPlanCompletedDays = [];
    const idx = state.aiPlanCompletedDays.indexOf(dayNum);
    if (idx > -1) {
      state.aiPlanCompletedDays.splice(idx, 1);
    } else {
      state.aiPlanCompletedDays.push(dayNum);
      triggerConfetti(1000);
      app.showToast(`Day ${dayNum} marked as completed! 🎯`);
    }
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiOpenReviseModal = function(topicType) {
    let title = "Important Questions";
    let desc = "Top high-yield questions for upcoming exams with detailed model answers.";
    let items = [
      "Q1: Explain the structure of plant cell vs animal cell with diagram. (5 Marks)",
      "Q2: What is the function of the nucleus and cell membrane? (3 Marks)",
      "Q3: Name the powerhouse of the cell and explain its role. (2 Marks)",
      "Q4: Define autotrophic nutrition with chemical equation of photosynthesis. (3 Marks)"
    ];

    if (topicType === "pyq") {
      title = "Previous Year Questions";
      desc = "Solved past 5 years question bank for Class 7 Science and Maths.";
      items = [
        "2025 Board Prep: Describe heat transfer through conduction, convection and radiation. (5 Marks)",
        "2024 Exam: Solve and simplify (3/4 ÷ 5/8) + (1/2 × 2/3). (3 Marks)",
        "2023 Exam: What are stomata? State two functions of stomata in leaves. (3 Marks)"
      ];
    } else if (topicType === "notes") {
      title = "Quick Revision Notes";
      desc = "High-speed concept cheat sheet for last-minute recall.";
      items = [
        "Cell: Structural unit of life discovered by Robert Hooke.",
        "Nucleus: Contains chromosomes with DNA (genes).",
        "Heat: Thermal energy flows from high temp to low temp.",
        "Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂."
      ];
    } else if (topicType === "formula") {
      title = "Formula Sheet";
      desc = "All essential mathematical formulas, science laws, and units.";
      items = [
        "Fractions: a/b ÷ c/d = a/b × d/c",
        "Speed = Distance / Time (Unit: m/s or km/h)",
        "Temperature conversion: °F = (°C × 9/5) + 32",
        "Perimeter of Rectangle = 2 × (Length + Breadth); Area = L × B"
      ];
    }

    app.showModal(`
      <div style="padding: 24px 20px;">
        <h2 style="font-size: 22px; font-weight: 800; color: #1E1B4B; margin-bottom: 6px;">${title}</h2>
        <p style="font-size: 13.5px; color: #64748B; margin-bottom: 18px;">${desc}</p>
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 16px; padding: 18px; margin-bottom: 22px;">
          ${items.map(it => `
            <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; font-size: 14px; color: #1E293B;">
              <span style="color: #7C3AED; font-weight: 800;">•</span>
              <div style="line-height: 1.45;">${it}</div>
            </div>
          `).join('')}
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 12px;">
          <button class="btn-primary" onclick="appInstance.showToast('Downloaded PDF Study Notes! 📄'); window.closeLmsModal();">
            Download PDF
          </button>
          <button class="btn-secondary" onclick="window.closeLmsModal()">
            Close
          </button>
        </div>
      </div>
    `);
  };

  // Helper: Back Button & Header
  function renderHeader(titleText, showBack = true) {
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          ${showBack ? `
            <button 
              class="btn-secondary" 
              onclick="window.lmsAiSetView('home')" 
              style="border-radius: 999px; padding: 8px 18px; font-weight: 700;"
            >
              ← Back
            </button>
          ` : ''}
          <h1 style="font-size: 24px; font-weight: 800; color: #1E293B; margin: 0; letter-spacing: -0.5px;">
            ${titleText}
          </h1>
        </div>
        <div class="stat-pill stat-pill-points" style="font-size: 13px; padding: 6px 14px;">
          🤖 24×7 AI Tutor Active
        </div>
      </div>
    `;
  }

  // Helper: Bottom Chat Input Bar (Screen 2 & 3)
  function renderBottomInputBar(placeholder = "Type your question here...") {
    return `
      <div class="ai-bottom-chat-bar">
        <input 
          type="text" 
          id="ai-bottom-input" 
          class="ai-bottom-chat-input" 
          placeholder="${placeholder}"
          onkeydown="if(event.key === 'Enter') { window.lmsAiAskDoubt(this.value); this.value = ''; }"
        />
        <button 
          class="ai-mic-btn" 
          title="Voice Doubt Input"
          onclick="appInstance.showToast('Listening... Speak your doubt clearly 🎙️');"
        >
          ${ICONS.mic ? ICONS.mic(18) : '🎙️'}
        </button>
        <button 
          class="ai-send-round-btn" 
          title="Send Doubt"
          onclick="const el = document.getElementById('ai-bottom-input'); if(el && el.value.trim()){ window.lmsAiAskDoubt(el.value); el.value = ''; }"
        >
          ${ICONS.send ? ICONS.send(18) : '➔'}
        </button>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 1: HOME (Panel 2 - Choose a Learning Option)
  // =========================================================================
  if (view === "home") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderHeader("AI Study Buddy", false)}

        <!-- Greeting Hero Banner (Panel 2) -->
        <div class="ai-greeting-hero-banner">
          ${GRAPHICS.aiRobotAvatarCircle ? GRAPHICS.aiRobotAvatarCircle(68) : `<div style="font-size: 42px;">🤖</div>`}
          <div class="ai-speech-bubble-hero" style="flex: 1;">
            <div style="font-size: 17px; font-weight: 800; color: #1E1B4B; margin-bottom: 4px;">
              Hi Sowmiya! 👋
            </div>
            <div style="font-size: 14.5px; color: #475569; font-weight: 600;">
              I'm your AI Study Buddy. How can I help you today?
            </div>
          </div>
        </div>

        <!-- 6 Learning Option Cards Grid (Screen 2) -->
        <div class="ai-options-grid-shelf">
          
          <!-- Option 1: Ask a Doubt -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('ask_doubt')">
            <div class="ai-option-icon-box" style="background: #F3E8FF; color: #7C3AED;">
              ${ICONS.chatBubble ? ICONS.chatBubble(24) : '💬'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Ask a Doubt</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Instant simple answers</div>
            </div>
          </div>

          <!-- Option 2: Explain Concept -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('ask_doubt')">
            <div class="ai-option-icon-box" style="background: #FEF3C7; color: #D97706;">
              ${ICONS.lightbulb ? ICONS.lightbulb(24) : '💡'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Explain Concept</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Step-by-step analogies</div>
            </div>
          </div>

          <!-- Option 3: Summarize a Chapter -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('summarize')">
            <div class="ai-option-icon-box" style="background: #DCFCE7; color: #059669;">
              ${ICONS.document ? ICONS.document(24) : '📄'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Summarize a Chapter</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Key points in bullets</div>
            </div>
          </div>

          <!-- Option 4: Generate Practice Quiz -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('quiz')">
            <div class="ai-option-icon-box" style="background: #F3E8FF; color: #7C3AED;">
              ${ICONS.quiz ? ICONS.quiz(24) : '✍️'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Generate Practice Quiz</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Custom practice tests</div>
            </div>
          </div>

          <!-- Option 5: Create Study Plan -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('study_plan')">
            <div class="ai-option-icon-box" style="background: #E0F2FE; color: #0284C7;">
              ${ICONS.calendar ? ICONS.calendar(24) : '📅'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Create Study Plan</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Target-based schedules</div>
            </div>
          </div>

          <!-- Option 6: Revise for Exam -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('revise')">
            <div class="ai-option-icon-box" style="background: #FFEDD5; color: #EA580C;">
              ${ICONS.star ? ICONS.star(24) : '⭐'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Revise for Exam</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">PYQs, Formulas & Notes</div>
            </div>
          </div>

        </div>

        <!-- Bottom Input Bar -->
        ${renderBottomInputBar("Type your question here...")}

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 2: ASK DOUBT (Panel 3 - Instant Simple Explanation)
  // =========================================================================
  if (view === "ask_doubt") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("AI Study Buddy", true)}

        <!-- Chat Conversation Thread (Panel 3) -->
        <div class="ai-chat-thread-v2" id="ai-chat-thread-box">
          ${state.aiChatHistory.map((msg, idx) => {
            if (msg.sender === "user") {
              return `
                <div class="ai-msg-row-user">
                  <div class="ai-msg-bubble-user">
                    ${msg.text}
                  </div>
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #6366F1; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    SS
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="ai-msg-row-bot">
                  ${GRAPHICS.aiRobotAvatarCircle ? GRAPHICS.aiRobotAvatarCircle(44) : `<div style="font-size: 32px;">🤖</div>`}
                  
                  <div class="ai-msg-card-bot">
                    <div style="font-size: 15px; color: #1E293B; line-height: 1.65; white-space: pre-line;">
                      ${msg.text}
                    </div>

                    <!-- Bottom Action Toolbar -->
                    <div class="ai-bot-action-toolbar">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <button 
                          class="ai-action-btn-pill" 
                          onclick="window.lmsAiToggleLike(${idx}, true)"
                          style="${msg.liked === true ? 'background:#DCFCE7; color:#059669; border-color:#86EFAC;' : ''}"
                        >
                          ${ICONS.thumbsUp ? ICONS.thumbsUp(14) : '👍'} Helpful
                        </button>
                        <button 
                          class="ai-action-btn-pill" 
                          onclick="window.lmsAiToggleLike(${idx}, false)"
                          style="${msg.liked === false ? 'background:#FEE2E2; color:#DC2626; border-color:#FECACA;' : ''}"
                        >
                          ${ICONS.thumbsDown ? ICONS.thumbsDown(14) : '👎'}
                        </button>
                        <button 
                          class="ai-action-btn-pill" 
                          onclick="window.lmsAiSaveAnswer(${idx})"
                          style="${msg.saved ? 'background:#EDE9FE; color:#7C3AED; border-color:#DDD6FE;' : ''}"
                        >
                          ${ICONS.save ? ICONS.save(14) : '💾'} ${msg.saved ? 'Saved' : 'Save'}
                        </button>
                        <button 
                          class="ai-action-btn-pill" 
                          onclick="window.lmsAiShareAnswer(${idx})"
                        >
                          ${ICONS.share ? ICONS.share(14) : '↗'} Share
                        </button>
                      </div>

                      <div>
                        <button 
                          class="btn-primary" 
                          onclick="window.lmsAiAskAnother()"
                          style="border-radius: 999px; padding: 7px 18px; font-size: 13px;"
                        >
                          Ask Another Doubt
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              `;
            }
          }).join('')}
        </div>

        <!-- Bottom Input Bar -->
        ${renderBottomInputBar("Ask another question or follow-up doubt...")}

      </div>
    `;

    // Auto scroll chat to bottom
    const box = container.querySelector("#ai-chat-thread-box");
    if (box) box.scrollTop = box.scrollHeight;
    return;
  }

  // =========================================================================
  // VIEW 3: SUMMARIZE CHAPTER (Panel 4)
  // =========================================================================
  if (view === "summarize") {
    const chapters = subjectChapters[selectedSubject] || ["The Cell"];
    const summaryPoints = chapterSummaries[selectedChapter] || chapterSummaries["The Cell"];

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("Summarize Chapter", true)}

        <!-- Form Card (Panel 4) -->
        <div class="ai-form-card-v2">
          
          <!-- Select Subject -->
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 8px;">
              Select Subject
            </label>
            <select 
              class="ai-select-styled"
              onchange="window.lmsAiChangeSubject(this.value)"
            >
              <option value="Science" ${selectedSubject === "Science" ? "selected" : ""}>🧪 Science</option>
              <option value="Mathematics" ${selectedSubject === "Mathematics" ? "selected" : ""}>🔢 Mathematics</option>
              <option value="Social Science" ${selectedSubject === "Social Science" ? "selected" : ""}>🌍 Social Science</option>
              <option value="English" ${selectedSubject === "English" ? "selected" : ""}>📖 English</option>
              <option value="Tamil" ${selectedSubject === "Tamil" ? "selected" : ""}>தமிழ் Tamil</option>
            </select>
          </div>

          <!-- Select Chapter -->
          <div style="margin-bottom: 24px;">
            <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 8px;">
              Select Chapter
            </label>
            <select 
              class="ai-select-styled"
              onchange="window.lmsAiChangeChapter(this.value)"
            >
              ${chapters.map(ch => `
                <option value="${ch}" ${selectedChapter === ch ? "selected" : ""}>${ch}</option>
              `).join('')}
            </select>
          </div>

          <!-- Action Button -->
          <div style="display: flex; justify-content: center;">
            <button 
              class="btn-primary" 
              onclick="window.lmsAiGenerateSummary()"
              style="padding: 12px 36px; font-size: 15px; border-radius: 999px;"
            >
              Generate Summary ✨
            </button>
          </div>

        </div>

        <!-- Generated Summary Result Card (Screen 4) -->
        ${summaryGenerated ? `
          <div class="ai-summary-result-box view-enter">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; border-bottom: 1px solid #F1F5F9; padding-bottom: 14px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; border-radius: 12px; background: #F3E8FF; color: #7C3AED; display: flex; align-items: center; justify-content: center;">
                  ${ICONS.document ? ICONS.document(22) : '📄'}
                </div>
                <div>
                  <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0;">
                    Chapter Summary – ${selectedChapter}
                  </h3>
                  <span style="font-size: 12.5px; color: #64748B;">Generated by AI Study Buddy for quick recall</span>
                </div>
              </div>

              <div style="display: flex; gap: 8px;">
                <button 
                  class="btn-secondary" 
                  onclick="appInstance.showToast('Summary saved to your study notes! 📝')"
                  style="border-radius: 999px; padding: 6px 16px; font-size: 12.5px;"
                >
                  Save to Notes 📝
                </button>
                <button 
                  class="btn-primary" 
                  onclick="appInstance.showToast('Downloading Summary PDF... 📄')"
                  style="border-radius: 999px; padding: 6px 16px; font-size: 12.5px;"
                >
                  Download PDF
                </button>
              </div>
            </div>

            <!-- Bullet Points with Green Checkmarks -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${summaryPoints.map(pt => `
                <div class="ai-summary-check-row">
                  <div style="width: 22px; height: 22px; border-radius: 50%; background: #DCFCE7; color: #10B981; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 13px; font-weight: 900; margin-top: 1px;">
                    ✔
                  </div>
                  <div>${pt}</div>
                </div>
              `).join('')}
            </div>

          </div>
        ` : ''}

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 4: GENERATE PRACTICE QUIZ (Panel 5)
  // =========================================================================
  if (view === "quiz") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("Generate Practice Quiz", true)}

        <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; align-items: center;">
          
          <!-- Form Card (Panel 5) -->
          <div class="ai-form-card-v2" style="margin-bottom: 0;">
            
            <!-- Subject Field -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                Subject
              </label>
              <select 
                class="ai-select-styled" 
                id="ai-quiz-subj-sel"
                onchange="window.renderAiBuddyScreen(container, { ...state, aiQuizSubject: this.value }, app)"
              >
                <option value="Mathematics" ${quizSubject === "Mathematics" ? "selected" : ""}>🔢 Mathematics</option>
                <option value="Science" ${quizSubject === "Science" ? "selected" : ""}>🧪 Science</option>
                <option value="Social Science" ${quizSubject === "Social Science" ? "selected" : ""}>🌍 Social Science</option>
                <option value="English" ${quizSubject === "English" ? "selected" : ""}>📖 English</option>
              </select>
            </div>

            <!-- Chapter Field -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                Chapter
              </label>
              <select class="ai-select-styled" id="ai-quiz-ch-sel">
                ${(subjectChapters[quizSubject] || ["Fractions"]).map(ch => `
                  <option value="${ch}" ${quizChapter === ch ? "selected" : ""}>${ch}</option>
                `).join('')}
              </select>
            </div>

            <!-- Number of Questions -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                No. of Questions
              </label>
              <select class="ai-select-styled" id="ai-quiz-num-sel">
                <option value="5 Questions" ${quizNumQuestions === "5 Questions" ? "selected" : ""}>5 Questions</option>
                <option value="10 Questions" ${quizNumQuestions === "10 Questions" ? "selected" : ""}>10 Questions</option>
                <option value="15 Questions" ${quizNumQuestions === "15 Questions" ? "selected" : ""}>15 Questions</option>
              </select>
            </div>

            <!-- Difficulty -->
            <div style="margin-bottom: 24px;">
              <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                Difficulty
              </label>
              <select class="ai-select-styled" id="ai-quiz-diff-sel">
                <option value="Easy" ${quizDifficulty === "Easy" ? "selected" : ""}>🟢 Easy</option>
                <option value="Medium" ${quizDifficulty === "Medium" ? "selected" : ""}>🟡 Medium</option>
                <option value="Hard" ${quizDifficulty === "Hard" ? "selected" : ""}>🔴 Hard</option>
              </select>
            </div>

            <!-- Action Button -->
            <button 
              class="btn-primary" 
              onclick="window.lmsAiCreateQuiz()"
              style="width: 100%; padding: 12px; font-size: 15px; border-radius: 999px;"
            >
              Create Quiz
            </button>

          </div>

          <!-- 3D Graphic Presentation on Right -->
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px;">
            <div style="filter: drop-shadow(0 12px 24px rgba(124, 58, 237, 0.18));">
              ${GRAPHICS.quizClipboard3D ? GRAPHICS.quizClipboard3D(135, 135) : '📝'}
            </div>
            <h4 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 16px 0 4px;">
              Smart AI Question Generation
            </h4>
            <p style="font-size: 13px; color: #64748B; max-width: 280px; margin: 0; line-height: 1.45;">
              Automatically curates MCQs, True/False and conceptual questions matching your syllabus.
            </p>
          </div>

        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 5: STUDY PLAN (Panel 6)
  // =========================================================================
  if (view === "study_plan") {
    const totalDays = 7;
    const completedCount = planCompletedDays.length;
    const pct = Math.round((completedCount / totalDays) * 100);

    const planTasks = [
      { day: 1, title: "Day 1", desc: "Read: The Cell (Overview)" },
      { day: 2, title: "Day 2", desc: "Notes & Key Points" },
      { day: 3, title: "Day 3", desc: "Practice Quiz (10 Questions)" },
      { day: 4, title: "Day 4", desc: "Video Lesson: Cell Organelles" },
      { day: 5, title: "Day 5", desc: "Diagram Practice: Plant vs Animal Cell" },
      { day: 6, title: "Day 6", desc: "Chapter Worksheet & Doubt Clearing" },
      { day: 7, title: "Day 7", desc: "Weekly Challenge & Revision Test" }
    ];

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("Study Plan", true)}

        <div style="margin-bottom: 20px;">
          <p style="font-size: 14px; color: #64748B; margin: 0;">
            Get a personalized study plan based on your goals.
          </p>
        </div>

        <!-- Setup Form Card (Panel 6) -->
        <div class="ai-form-card-v2" style="padding: 22px 28px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 18px; align-items: flex-end;">
            
            <!-- Goal -->
            <div>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                ${ICONS.target ? ICONS.target(16) : '🎯'} Goal
              </label>
              <select class="ai-select-styled">
                <option value="Chapter Revision">Chapter Revision</option>
                <option value="Exam Preparation">Exam Preparation</option>
                <option value="Daily Homework">Daily Homework</option>
                <option value="Concept Mastery">Concept Mastery</option>
              </select>
            </div>

            <!-- Duration -->
            <div>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                ${ICONS.calendar ? ICONS.calendar(16) : '📅'} Duration
              </label>
              <select class="ai-select-styled">
                <option value="7 Days">7 Days</option>
                <option value="3 Days">3 Days</option>
                <option value="14 Days">14 Days</option>
                <option value="30 Days">30 Days</option>
              </select>
            </div>

            <!-- Button -->
            <div>
              <button 
                class="btn-primary" 
                onclick="triggerConfetti(1500); appInstance.showToast('Study Plan refreshed for the next 7 days! 🎯');"
                style="padding: 12px 28px; border-radius: 999px;"
              >
                Create Study Plan
              </button>
            </div>

          </div>
        </div>

        <!-- Your 7-Day Study Plan Card -->
        <div class="ai-form-card-v2" style="margin-bottom: 0;">
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;">
            <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0;">
              Your 7-Day Study Plan
            </h3>
            <span style="font-size: 13px; font-weight: 800; color: #7C3AED;">
              ${completedCount} of ${totalDays} Days Completed (${pct}%)
            </span>
          </div>

          <!-- Progress Bar -->
          <div style="height: 8px; background: #E2E8F0; border-radius: 999px; overflow: hidden; margin-bottom: 20px;">
            <div style="width: ${pct}%; height: 100%; background: #10B981; border-radius: 999px; transition: width 0.3s ease;"></div>
          </div>

          <!-- Daily Checklist Rows -->
          <div>
            ${planTasks.map(t => {
              const isDone = planCompletedDays.includes(t.day);
              return `
                <div 
                  class="ai-study-plan-row" 
                  onclick="window.lmsAiTogglePlanDay(${t.day})"
                  style="cursor: pointer; ${isDone ? 'background: #F0FDF4; border-color: #86EFAC;' : ''}"
                >
                  <input 
                    type="checkbox" 
                    ${isDone ? "checked" : ""} 
                    style="width: 18px; height: 18px; accent-color: #10B981; cursor: pointer;"
                  />
                  <div style="min-width: 60px; font-size: 14px; font-weight: 800; color: #1E293B;">
                    ${t.title}
                  </div>
                  <div style="flex: 1; font-size: 14px; color: ${isDone ? '#047857' : '#475569'}; font-weight: 600; text-decoration: ${isDone ? 'line-through' : 'none'};">
                    ${t.desc}
                  </div>
                  <div style="font-size: 12px; font-weight: 700; color: ${isDone ? '#059669' : '#94A3B8'};">
                    ${isDone ? '✔ Done' : 'Pending'}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 6: REVISE FOR EXAM (Panel 7)
  // =========================================================================
  if (view === "revise") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("Revise for Exam", true)}

        <div style="margin-bottom: 22px;">
          <p style="font-size: 14.5px; color: #64748B; margin: 0;">
            Choose what you want to revise.
          </p>
        </div>

        <div style="display: flex; gap: 28px; align-items: center;">
          
          <!-- 4 Cards Grid (Panel 7) -->
          <div class="ai-revise-grid-quad">
            
            <!-- Card 1: Important Questions -->
            <div class="ai-revise-card" onclick="window.lmsAiOpenReviseModal('important')">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #FEF3C7; color: #D97706; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 900; margin-bottom: 14px;">
                ?
              </div>
              <h4 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">
                Important Questions
              </h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0;">
                High-yield exam questions with answers
              </p>
            </div>

            <!-- Card 2: Previous Year Questions -->
            <div class="ai-revise-card" onclick="window.lmsAiOpenReviseModal('pyq')">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #F3E8FF; color: #7C3AED; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 14px;">
                ${ICONS.clipboard ? ICONS.clipboard(26) : '📝'}
              </div>
              <h4 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">
                Previous Year Questions
              </h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0;">
                Past 5 years question papers
              </p>
            </div>

            <!-- Card 3: Quick Revision Notes -->
            <div class="ai-revise-card" onclick="window.lmsAiOpenReviseModal('notes')">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #EDE9FE; color: #6D28D9; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 14px;">
                ${ICONS.document ? ICONS.document(26) : '📚'}
              </div>
              <h4 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">
                Quick Revision Notes
              </h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0;">
                Rapid concept summary cards
              </p>
            </div>

            <!-- Card 4: Formula Sheet -->
            <div class="ai-revise-card" onclick="window.lmsAiOpenReviseModal('formula')">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #FFEDD5; color: #EA580C; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; margin-bottom: 14px;">
                π
              </div>
              <h4 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">
                Formula Sheet
              </h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0;">
                Key formulas, laws & definitions
              </p>
            </div>

          </div>

          <!-- 3D Graphic on Right -->
          <div style="flex-shrink: 0; text-align: center; padding: 20px 10px;">
            <div style="filter: drop-shadow(0 12px 24px rgba(124, 58, 237, 0.2));">
              ${GRAPHICS.quizClipboard3D ? GRAPHICS.quizClipboard3D(140, 140) : '📝'}
            </div>
            <div style="font-size: 14.5px; font-weight: 800; color: #1E1B4B; margin-top: 14px;">
              Ready for Tests & Exams!
            </div>
            <div style="font-size: 12px; color: #64748B; max-width: 200px; margin-top: 4px;">
              Revision tools updated weekly based on class progress.
            </div>
          </div>

        </div>

      </div>
    `;
    return;
  }
}

if (typeof window !== "undefined") {
  window.renderAiBuddyScreen = renderAiBuddyScreen;
}
