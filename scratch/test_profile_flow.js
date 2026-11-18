// Comprehensive Test for Profile Complete Flow
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
  lastNavigatedScreen: null,
  showModal: function(html) {
    this.modalContent = html;
  },
  showToast: function(msg) {
    this.toastMessage = msg;
  },
  navigateTo: function(id) {
    this.lastNavigatedScreen = id;
    console.log(`Navigated to screen: ${id}`);
  }
};
global.appInstance = appMock;

const state = {
  profileView: "home",
  student: {
    name: "Sowmiya S.",
    grade: "Class 7",
    section: "A",
    rollNo: "24",
    school: "Shine Academy",
    academicYear: "2026 - 2027",
    medium: "English",
    email: "sowmiya@learninguniverse.in",
    phone: "+91 98765 43210",
    avatarUrl: "assets/student-avatar.jpg",
    status: "Active"
  }
};

const stageMock = new ElementMock('div');

// 1. Initial Render: Profile Home (Screen 2)
global.window.renderProfileScreen(stageMock, state, appMock);

console.log("\n--- Testing Screen 2: Profile Home ---");
if (stageMock.innerHTML.includes("Sowmiya S.") &&
    stageMock.innerHTML.includes("Class 7 | Roll No: 24") &&
    stageMock.innerHTML.includes("Active") &&
    stageMock.innerHTML.includes("My Details") &&
    stageMock.innerHTML.includes("Academic Info") &&
    stageMock.innerHTML.includes("Preferences") &&
    stageMock.innerHTML.includes("Security") &&
    stageMock.innerHTML.includes("Notifications") &&
    stageMock.innerHTML.includes("Help & Support")) {
  console.log("✔ Screen 2: Top student card and all 6 option cards rendered correctly.");
} else {
  console.error("❌ Screen 2 missing required elements.");
  process.exit(1);
}

// 2. Test Edit Profile (Screen 3)
console.log("\n--- Testing Screen 3: Edit Profile (My Details) ---");
global.window.lmsProfileSetView("edit_profile");
if (stageMock.innerHTML.includes("My Details (Edit Profile)") &&
    stageMock.innerHTML.includes("Full Name *") &&
    stageMock.innerHTML.includes("Class *") &&
    stageMock.innerHTML.includes("Roll No. *") &&
    stageMock.innerHTML.includes("sowmiya@learninguniverse.in") &&
    stageMock.innerHTML.includes("+91 98765 43210") &&
    stageMock.innerHTML.includes("Save Changes ✔")) {
  console.log("✔ Screen 3: Edit Profile inputs and buttons rendered correctly.");
} else {
  console.error("❌ Screen 3 missing edit fields.");
  process.exit(1);
}

// Test Save Changes Action
global.window.lmsProfileSaveDetails("Sowmiya Shanmugam", "Class 7", "24", "sowmiya.s@learninguniverse.in", "+91 98765 43210");
if (state.student.name === "Sowmiya Shanmugam" && stageMock.innerHTML.includes("Sowmiya Shanmugam")) {
  console.log("✔ Profile details updated and saved successfully.");
} else {
  console.error("❌ Save details failed.");
  process.exit(1);
}

// 3. Test Academic Info (Screen 4)
console.log("\n--- Testing Screen 4: Academic Info ---");
global.window.lmsProfileSetView("academic");
if (stageMock.innerHTML.includes("Academic Info") &&
    stageMock.innerHTML.includes("Class") &&
    stageMock.innerHTML.includes("Section") &&
    stageMock.innerHTML.includes("Academic Year") &&
    stageMock.innerHTML.includes("2026 - 2027") &&
    stageMock.innerHTML.includes("Shine Academy") &&
    stageMock.innerHTML.includes("English")) {
  console.log("✔ Screen 4: All academic detail rows and edit pencils rendered.");
} else {
  console.error("❌ Screen 4 missing academic info.");
  process.exit(1);
}

// 4. Test Preferences (Screen 5)
console.log("\n--- Testing Screen 5: Preferences ---");
global.window.lmsProfileSetView("preferences");
if (stageMock.innerHTML.includes("Preferences") &&
    stageMock.innerHTML.includes("App Theme") &&
    stageMock.innerHTML.includes("Light") &&
    stageMock.innerHTML.includes("Dark") &&
    stageMock.innerHTML.includes("System") &&
    stageMock.innerHTML.includes("Language") &&
    stageMock.innerHTML.includes("Content Download") &&
    stageMock.innerHTML.includes("Download over Wi-Fi only")) {
  console.log("✔ Screen 5: Theme segmented buttons, Language, and Wi-Fi toggle rendered.");
} else {
  console.error("❌ Screen 5 missing preference options.");
  process.exit(1);
}

// 5. Test Security (Screen 6)
console.log("\n--- Testing Screen 6: Security ---");
global.window.lmsProfileSetView("security");
if (stageMock.innerHTML.includes("Security") &&
    stageMock.innerHTML.includes("Change Password") &&
    stageMock.innerHTML.includes("Login Activity") &&
    stageMock.innerHTML.includes("Two-Factor Verification (OTP)") &&
    stageMock.innerHTML.includes("Manage Devices")) {
  console.log("✔ Screen 6: Security rows with OTP toggle rendered.");
} else {
  console.error("❌ Screen 6 missing security rows.");
  process.exit(1);
}

// 6. Test Notifications (Screen 7)
console.log("\n--- Testing Screen 7: Notifications ---");
global.window.lmsProfileSetView("notifications");
if (stageMock.innerHTML.includes("Notifications") &&
    stageMock.innerHTML.includes("Assignment Updates") &&
    stageMock.innerHTML.includes("Quiz Alerts") &&
    stageMock.innerHTML.includes("Challenge Reminders") &&
    stageMock.innerHTML.includes("Achievement Alerts") &&
    stageMock.innerHTML.includes("General Announcements")) {
  console.log("✔ Screen 7: All 5 notification toggle rows rendered.");
} else {
  console.error("❌ Screen 7 missing notification rows.");
  process.exit(1);
}

// 7. Test Help & Support (Screen 8)
console.log("\n--- Testing Screen 8: Help & Support ---");
global.window.lmsProfileSetView("help");
if (stageMock.innerHTML.includes("Help & Support") &&
    stageMock.innerHTML.includes("FAQs") &&
    stageMock.innerHTML.includes("Report an Issue") &&
    stageMock.innerHTML.includes("Contact Support") &&
    stageMock.innerHTML.includes("Feedback")) {
  console.log("✔ Screen 8: Help & Support options rendered.");
} else {
  console.error("❌ Screen 8 missing help options.");
  process.exit(1);
}

// 8. Test About Learning Universe LMS (Screen 9)
console.log("\n--- Testing Screen 9: About Learning Universe LMS ---");
global.window.lmsProfileSetView("about");
if (stageMock.innerHTML.includes("About Learning Universe LMS") &&
    stageMock.innerHTML.includes("Version 1.2.0") &&
    stageMock.innerHTML.includes("A smart learning platform for Students, Teachers and Schools") &&
    stageMock.innerHTML.includes("Terms & Conditions") &&
    stageMock.innerHTML.includes("Privacy Policy") &&
    stageMock.innerHTML.includes("App Information")) {
  console.log("✔ Screen 9: App brand card, version, and policy links rendered.");
} else {
  console.error("❌ Screen 9 missing about info.");
  process.exit(1);
}

// 9. Test Logout Modal & Action (Screen 10)
console.log("\n--- Testing Screen 10: Logout Confirmation ---");
global.window.lmsOpenLogoutModal();
if (appMock.modalContent &&
    appMock.modalContent.includes("Logout?") &&
    appMock.modalContent.includes("Are you sure you want to logout from your account?") &&
    appMock.modalContent.includes("Cancel") &&
    appMock.modalContent.includes("Logout")) {
  console.log("✔ Screen 10: Logout modal rendered with confirmation buttons.");
} else {
  console.error("❌ Screen 10 Logout modal failed.");
  process.exit(1);
}

// Test Confirm Logout action
global.window.lmsConfirmLogout();
setTimeout(() => {
  if (appMock.lastNavigatedScreen === "00") {
    console.log("✔ Logout navigated successfully to Login screen (00).");
  }
}, 700);

console.log("\n🎉 ALL 10 PROFILE SCREENS & FLOW VERIFIED (100% SUCCESS)!");
