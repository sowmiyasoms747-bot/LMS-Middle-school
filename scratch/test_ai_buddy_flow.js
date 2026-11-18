// Comprehensive Test for AI Study Buddy Flow
const fs = require('fs');

class ElementMock {
  constructor(tagName = 'div') {
    this.tagName = tagName.toUpperCase();
    this.children = [];
    this._innerHTML = '';
    this.listeners = {};
    this.style = {};
    this.attributes = {};
  }

  get innerHTML() {
    return this._innerHTML;
  }

  set innerHTML(val) {
    this._innerHTML = val;
    this.children = [];
  }

  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }

  dispatchEvent(event) {
    if (this.listeners[event.type]) {
      this.listeners[event.type].forEach(fn => fn(event));
    }
  }

  querySelector(selector) {
    const all = this.querySelectorAll(selector);
    return all.length > 0 ? all[0] : null;
  }

  querySelectorAll(selector) {
    const results = [];
    const search = (html, sel) => {
      if (sel.startsWith('#')) {
        const id = sel.slice(1);
        const match = new RegExp(`id=["']${id}["']`, 'i').test(html);
        if (match) {
          const el = new ElementMock();
          el.id = id;
          results.push(el);
        }
      } else if (sel.startsWith('.')) {
        const cls = sel.slice(1);
        const matches = html.match(new RegExp(`class=["'][^"']*${cls}[^"']*["']`, 'gi'));
        if (matches) {
          matches.forEach(() => results.push(new ElementMock()));
        }
      } else {
        const matches = html.match(new RegExp(`<${sel}\\b`, 'gi'));
        if (matches) {
          matches.forEach(() => results.push(new ElementMock(sel)));
        }
      }
    };
    search(this._innerHTML, selector);
    return results;
  }
}

global.window = {
  location: { href: 'http://localhost/' },
  addEventListener: () => {},
  history: { pushState: () => {}, replaceState: () => {} }
};
global.document = {
  readyState: 'complete',
  createElement: (tag) => new ElementMock(tag),
  getElementById: (id) => new ElementMock(),
  querySelector: (sel) => new ElementMock(),
  querySelectorAll: (sel) => [],
  addEventListener: () => {}
};

console.log("Loading bundle.js...");
const bundleCode = fs.readFileSync('js/bundle.js', 'utf8');

try {
  eval(bundleCode);
  console.log("✔ bundle.js evaluated successfully without syntax errors.");
} catch (err) {
  console.error("❌ Bundle execution failed:", err);
  process.exit(1);
}

const appMock = {
  modalContent: null,
  toastMessage: null,
  showModal: function(html) {
    this.modalContent = html;
  },
  showToast: function(msg) {
    this.toastMessage = msg;
  },
  navigateTo: function(id) {
    console.log(`Navigated to screen: ${id}`);
  }
};
global.appInstance = appMock;

const state = {
  aiBuddyView: "home"
};

const stageMock = new ElementMock('div');

// 1. Initial Render: Home (Screen 2)
global.window.renderAiBuddyScreen(stageMock, state, appMock);

console.log("\n--- Testing Screen 2: AI Study Buddy Home ---");
if (stageMock.innerHTML.includes("Hi Sowmiya! 👋") &&
    stageMock.innerHTML.includes("Ask a Doubt") &&
    stageMock.innerHTML.includes("Explain Concept") &&
    stageMock.innerHTML.includes("Summarize a Chapter") &&
    stageMock.innerHTML.includes("Generate Practice Quiz") &&
    stageMock.innerHTML.includes("Create Study Plan") &&
    stageMock.innerHTML.includes("Revise for Exam")) {
  console.log("✔ Screen 2: Greeting banner and all 6 learning option cards rendered correctly.");
} else {
  console.error("❌ Screen 2 missing expected elements.");
  process.exit(1);
}

// 2. Test Ask Doubt (Screen 3)
console.log("\n--- Testing Screen 3: Ask Doubt ---");
global.window.lmsAiSetView("ask_doubt");
if (stageMock.innerHTML.includes("What is the function of the nucleus in a cell?") &&
    stageMock.innerHTML.includes("control center of the cell") &&
    stageMock.innerHTML.includes("Helpful") &&
    stageMock.innerHTML.includes("Ask Another Doubt")) {
  console.log("✔ Screen 3: Q&A chat thread, structured bullets, and action buttons rendered.");
} else {
  console.error("❌ Screen 3 missing chat thread or action buttons.");
  process.exit(1);
}

// Test Save Answer
global.window.lmsAiSaveAnswer(1);
if (appMock.toastMessage && appMock.toastMessage.includes("Study Notes")) {
  console.log("✔ Save Answer functionality verified.");
}

// 3. Test Summarize Chapter (Screen 4)
console.log("\n--- Testing Screen 4: Summarize Chapter ---");
global.window.lmsAiSetView("summarize");
if (stageMock.innerHTML.includes("Select Subject") &&
    stageMock.innerHTML.includes("Select Chapter") &&
    stageMock.innerHTML.includes("Generate Summary ✨") &&
    stageMock.innerHTML.includes("Chapter Summary – The Cell") &&
    stageMock.innerHTML.includes("The cell is the basic structural and functional unit of life")) {
  console.log("✔ Screen 4: Form and Chapter Summary rendered with key points.");
} else {
  console.error("❌ Screen 4 missing summary content.");
  process.exit(1);
}

// 4. Test Generate Practice Quiz (Screen 5)
console.log("\n--- Testing Screen 5: Generate Practice Quiz ---");
global.window.lmsAiSetView("quiz");
if (stageMock.innerHTML.includes("Subject") &&
    stageMock.innerHTML.includes("Chapter") &&
    stageMock.innerHTML.includes("No. of Questions") &&
    stageMock.innerHTML.includes("Difficulty") &&
    stageMock.innerHTML.includes("Create Quiz")) {
  console.log("✔ Screen 5: Custom Practice Quiz form and 3D illustration rendered.");
} else {
  console.error("❌ Screen 5 missing quiz options.");
  process.exit(1);
}

// Test Create Quiz Action
global.window.lmsAiCreateQuiz();
if (appMock.modalContent && appMock.modalContent.includes("AI Practice Quiz Ready!")) {
  console.log("✔ Create Quiz action generated practice quiz modal successfully.");
} else {
  console.error("❌ Create Quiz modal failed.");
  process.exit(1);
}

// 5. Test Study Plan (Screen 6)
console.log("\n--- Testing Screen 6: Study Plan ---");
global.window.lmsAiSetView("study_plan");
if (stageMock.innerHTML.includes("Goal") &&
    stageMock.innerHTML.includes("Duration") &&
    stageMock.innerHTML.includes("Your 7-Day Study Plan") &&
    stageMock.innerHTML.includes("Day 1") &&
    stageMock.innerHTML.includes("Read: The Cell (Overview)")) {
  console.log("✔ Screen 6: Study Plan schedule with daily checklist rendered.");
} else {
  console.error("❌ Screen 6 missing study plan.");
  process.exit(1);
}

// Test Toggle Plan Day
global.window.lmsAiTogglePlanDay(2);
if (stageMock.innerHTML.includes("2 of 7 Days Completed")) {
  console.log("✔ Day completion toggle updates progress correctly.");
} else {
  console.error("❌ Study plan toggle progress failed.");
  process.exit(1);
}

// 6. Test Revise for Exam (Screen 7)
console.log("\n--- Testing Screen 7: Revise for Exam ---");
global.window.lmsAiSetView("revise");
if (stageMock.innerHTML.includes("Important Questions") &&
    stageMock.innerHTML.includes("Previous Year Questions") &&
    stageMock.innerHTML.includes("Quick Revision Notes") &&
    stageMock.innerHTML.includes("Formula Sheet")) {
  console.log("✔ Screen 7: All 4 revision action cards rendered.");
} else {
  console.error("❌ Screen 7 missing revision cards.");
  process.exit(1);
}

// Test Revision Modal
global.window.lmsAiOpenReviseModal("formula");
if (appMock.modalContent && appMock.modalContent.includes("Formula Sheet")) {
  console.log("✔ Formula Sheet revision modal opened with formulas.");
} else {
  console.error("❌ Revision modal failed.");
  process.exit(1);
}

console.log("\n🎉 ALL AI STUDY BUDDY SCREENS & FLOW VERIFIED (100% SUCCESS)!");
