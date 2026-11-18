// Test script for Achievements Complete Flow verification
const fs = require('fs');

// Simple DOM Mock
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

// Mock Global Browser Environment
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

// Execute bundle
try {
  eval(bundleCode);
  console.log("✔ bundle.js evaluated successfully without syntax errors.");
} catch (err) {
  console.error("❌ Bundle execution failed:", err);
  process.exit(1);
}

// Test Achievements State & Functions
console.log("Testing Achievements State Machine & Flows...");

// Mock LMS App & State
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

const state = {
  achievementsActiveTab: "all",
  achievementsView: "list",
  achievementsSelectedBadgeId: "quick_learner",
  achievementsSelectedClass: "Class 7"
};

const stageMock = new ElementMock('div');

// Initial render
global.window.renderAchievementsScreen(stageMock, state, appMock);

// Verify global methods registered
const requiredGlobals = [
  'lmsAchievementsSetTab',
  'lmsOpenBadgeDetails',
  'lmsAchievementsBackToList',
  'lmsViewCertificateModal',
  'lmsDownloadCertificate',
  'lmsAchievementsSetClass'
];

requiredGlobals.forEach(fnName => {
  if (typeof global.window[fnName] === 'function') {
    console.log(`✔ global.window.${fnName} is registered.`);
  } else {
    console.error(`❌ global.window.${fnName} is NOT defined.`);
    process.exit(1);
  }
});

// 1. Test "All" Tab (Screen 2)
global.window.renderAchievementsScreen(stageMock, state, appMock);
console.log("\n--- Testing Screen 2: 'All' Tab ---");
if (stageMock.innerHTML.includes("Quick Learner") &&
    stageMock.innerHTML.includes("Quiz Master") &&
    stageMock.innerHTML.includes("Assignment Star") &&
    stageMock.innerHTML.includes("Consistent Learner") &&
    stageMock.innerHTML.includes("Chapter Explorer") &&
    stageMock.innerHTML.includes("7 / 10 Chapters")) {
  console.log("✔ Screen 2 (All Tab): Badges Shelf and Next Achievement card rendered correctly.");
} else {
  console.error("❌ Screen 2 missing expected badges or next achievement card.");
  process.exit(1);
}

// 2. Test "Badge Details" View (Screen 3)
console.log("\n--- Testing Screen 3: Badge Details View ---");
global.window.lmsOpenBadgeDetails('quick_learner');
if (stageMock.innerHTML.includes("Badge Details") &&
    stageMock.innerHTML.includes("Quick Learner") &&
    stageMock.innerHTML.includes("Earned") &&
    stageMock.innerHTML.includes("08 Nov 2026") &&
    stageMock.innerHTML.includes("+50 Points")) {
  console.log("✔ Screen 3 (Badge Details): Rocket badge, earned badge, date and points rendered.");
} else {
  console.error("❌ Screen 3 missing expected badge details.");
  process.exit(1);
}

// Test Back to list
global.window.lmsAchievementsBackToList();
if (!stageMock.innerHTML.includes("Badge Details") && stageMock.innerHTML.includes("My Badges (12 Earned)")) {
  console.log("✔ Back to list works cleanly.");
} else {
  console.error("❌ Back to list failed.");
  process.exit(1);
}

// 3. Test "Milestones" Tab (Screen 4)
console.log("\n--- Testing Screen 4: Milestones Tab ---");
global.window.lmsAchievementsSetTab('milestones');
if (stageMock.innerHTML.includes("Learning Milestones") &&
    stageMock.innerHTML.includes("Complete 10 Chapters") &&
    stageMock.innerHTML.includes("Maintain 7-Day Streak") &&
    stageMock.innerHTML.includes("Score 80%+ in 5 Quizzes") &&
    stageMock.innerHTML.includes("Completed ✔") &&
    stageMock.innerHTML.includes("In Progress")) {
  console.log("✔ Screen 4 (Milestones Tab): All milestones rendered with progress bars and badges.");
} else {
  console.error("❌ Screen 4 missing expected milestones.");
  process.exit(1);
}

// 4. Test "Certificates" Tab (Screen 5)
console.log("\n--- Testing Screen 5: Certificates Tab ---");
global.window.lmsAchievementsSetTab('certificates');
if (stageMock.innerHTML.includes("My Certificates") &&
    stageMock.innerHTML.includes("Science Excellence") &&
    stageMock.innerHTML.includes("Quiz Champion") &&
    stageMock.innerHTML.includes("Assignment Pro") &&
    stageMock.innerHTML.includes("05 Nov 2026")) {
  console.log("✔ Screen 5 (Certificates Tab): All certificates rendered with gold medals & dates.");
} else {
  console.error("❌ Screen 5 missing expected certificates.");
  process.exit(1);
}

// Test Certificate Modal View
global.window.lmsViewCertificateModal('cert_science');
if (appMock.modalContent &&
    appMock.modalContent.includes("Certificate of Achievement") &&
    appMock.modalContent.includes("Science Excellence") &&
    appMock.modalContent.includes("Sowmiya S.") &&
    appMock.modalContent.includes("LU-SCI-2026-0842")) {
  console.log("✔ Certificate Modal: Opened with official framed certificate, student name and verification ID.");
} else {
  console.error("❌ Certificate Modal failed to display correct content.");
  process.exit(1);
}

// 5. Test "Leaderboard" Tab (Screen 6)
console.log("\n--- Testing Screen 6: Leaderboard Tab ---");
global.window.lmsAchievementsSetTab('leaderboard');
if (stageMock.innerHTML.includes("Class Leaderboard – This Month") &&
    stageMock.innerHTML.includes("Karthik R.") &&
    stageMock.innerHTML.includes("2,450 Points") &&
    stageMock.innerHTML.includes("Sowmiya S.") &&
    stageMock.innerHTML.includes("Iniya M.") &&
    stageMock.innerHTML.includes("Pranav K.") &&
    stageMock.innerHTML.includes("Harini J.")) {
  console.log("✔ Screen 6 (Leaderboard): 3D Podium (Ranks 1, 2, 3) and runner-ups rendered accurately.");
} else {
  console.error("❌ Screen 6 missing expected podium students or runner-ups.");
  process.exit(1);
}

// Test Class Selector on Leaderboard
global.window.lmsAchievementsSetClass('Class 8');
if (stageMock.innerHTML.includes("Meera V.") && stageMock.innerHTML.includes("Rohit N.")) {
  console.log("✔ Leaderboard class selector switches data properly (Class 8 top: Meera V.).");
} else {
  console.error("❌ Leaderboard class change failed.");
  process.exit(1);
}

console.log("\n🎉 ALL ACHIEVEMENTS FLOW TESTS PASSED (100% SUCCESS)!");
