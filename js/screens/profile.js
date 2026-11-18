// Screen 13: Profile - Complete Flow (Classes 6 – 8) Student View
// Matching Reference Flow:
// 1. Dashboard -> Click Profile
// 2. Profile Home -> View & Manage Your Profile (Top student card + 6 options: My Details, Academic Info, Preferences, Security, Notifications, Help & Support)
// 3. Edit Profile -> Update Personal Information (Name, Class, Roll No, Email, Parent Mobile, Cancel / Save Changes)
// 4. Academic Info -> View / Update Study Details (Class, Section, Academic Year, School, Medium with edit pencil)
// 5. Preferences -> Theme & App Settings (Light/Dark/System theme pills, Language dropdown, Wi-Fi download toggle)
// 6. Security -> Password, OTP & Devices (Change Password, Login Activity, 2FA OTP toggle, Manage Devices)
// 7. Notifications -> Choose What to Receive (Assignment Updates, Quiz Alerts, Challenge Reminders, Achievement Alerts, General Announcements)
// 8. Help & Support -> Get Assistance Quickly (FAQs, Report an Issue, Contact Support, Feedback)
// 9. About Learning Universe LMS -> Brand Logo, Version 1.2.0, Terms, Privacy Policy, App Info
// 10. Logout -> Confirm & Exit Modal (Cancel, Logout -> Login Screen 00)

import { ICONS } from '../components/icons.js';
import { triggerConfetti } from '../components/confetti.js';

export function renderProfileScreen(container, state, app) {
  let view = state.profileView || "home"; // "home", "edit_profile", "academic", "preferences", "security", "notifications", "help", "about"

  // Ensure student data model exists with comprehensive fields
  if (!state.student) {
    state.student = {};
  }
  const s = state.student;
  s.name = s.name || "Sowmiya S.";
  s.grade = s.grade || "Class 7";
  s.section = s.section || "A";
  s.rollNo = s.rollNo || "24";
  s.school = s.school || "Shine Academy";
  s.academicYear = s.academicYear || "2026 - 2027";
  s.medium = s.medium || "English";
  s.email = s.email || "sowmiya@learninguniverse.in";
  s.phone = s.phone || "+91 98765 43210";
  s.avatarUrl = s.avatarUrl || "assets/student-avatar.jpg";
  s.status = s.status || "Active";
  s.theme = s.theme || "light";
  s.language = s.language || "English";
  s.downloadWifiOnly = s.downloadWifiOnly !== undefined ? s.downloadWifiOnly : true;
  s.twoFactorAuth = s.twoFactorAuth !== undefined ? s.twoFactorAuth : true;

  if (!s.notifications) {
    s.notifications = {
      assignmentUpdates: true,
      quizAlerts: true,
      challengeReminders: true,
      achievementAlerts: true,
      generalAnnouncements: true
    };
  }

  // Global Navigation Handlers
  window.lmsProfileSetView = function(viewName) {
    state.profileView = viewName;
    renderProfileScreen(container, state, app);
  };

  window.lmsProfileSaveDetails = function(name, grade, rollNo, email, phone) {
    s.name = name || s.name;
    s.grade = grade || s.grade;
    s.rollNo = rollNo || s.rollNo;
    s.email = email || s.email;
    s.phone = phone || s.phone;

    triggerConfetti(1500);
    app.showToast("Profile details updated successfully! ✔");
    state.profileView = "home";
    renderProfileScreen(container, state, app);
  };

  window.lmsProfileSetTheme = function(themeName) {
    s.theme = themeName;
    app.showToast(`Theme changed to ${themeName.charAt(0).toUpperCase() + themeName.slice(1)}`);
    renderProfileScreen(container, state, app);
  };

  window.lmsProfileToggleWifi = function(val) {
    s.downloadWifiOnly = val;
    app.showToast(`Download over Wi-Fi only: ${val ? 'Enabled' : 'Disabled'}`);
  };

  window.lmsProfileToggle2FA = function(val) {
    s.twoFactorAuth = val;
    app.showToast(`Two-Factor Verification (OTP): ${val ? 'Enabled' : 'Disabled'}`);
  };

  window.lmsProfileToggleNotification = function(key, val) {
    if (s.notifications) {
      s.notifications[key] = val;
      app.showToast("Notification settings saved!");
    }
  };

  window.lmsProfileEditAcademic = function(field) {
    const currentVal = s[field] || "";
    const promptVal = prompt(`Enter new value for ${field}:`, currentVal);
    if (promptVal && promptVal.trim()) {
      s[field] = promptVal.trim();
      app.showToast(`${field} updated to "${promptVal.trim()}"!`);
      renderProfileScreen(container, state, app);
    }
  };

  // Screen 10: Logout Confirmation Modal
  window.lmsOpenLogoutModal = function() {
    app.showModal(`
      <div style="text-align: center; padding: 24px 16px;">
        <div style="width: 64px; height: 64px; border-radius: 18px; background: #FEE2E2; color: #EF4444; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
          ${ICONS.logout ? ICONS.logout(32) : '🚪'}
        </div>
        <h2 style="font-size: 22px; font-weight: 800; color: #1E1B4B; margin: 0 0 8px;">
          Logout?
        </h2>
        <p style="font-size: 14px; color: #64748B; margin: 0 0 24px;">
          Are you sure you want to logout from your account?
        </p>
        <div style="display: flex; justify-content: center; gap: 14px;">
          <button class="btn-secondary" onclick="window.closeLmsModal()" style="border-radius: 999px; padding: 10px 24px;">
            Cancel
          </button>
          <button 
            class="btn-primary" 
            onclick="window.closeLmsModal(); window.lmsConfirmLogout();" 
            style="background: linear-gradient(135deg, #7C3AED, #9333EA); border-radius: 999px; padding: 10px 28px;"
          >
            Logout
          </button>
        </div>
      </div>
    `);
  };

  window.lmsConfirmLogout = function() {
    app.showToast("Logged out successfully. See you soon! 👋");
    setTimeout(() => {
      app.navigateTo("00"); // Return to Login Screen
    }, 600);
  };

  // Helper Header
  function renderSubHeader(titleText) {
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <button 
            class="btn-secondary" 
            onclick="window.lmsProfileSetView('home')" 
            style="border-radius: 999px; padding: 8px 18px; font-weight: 700;"
          >
            ← Back
          </button>
          <h1 style="font-size: 24px; font-weight: 800; color: #1E293B; margin: 0; letter-spacing: -0.5px;">
            ${titleText}
          </h1>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 1: PROFILE HOME (Panel 2)
  // =========================================================================
  if (view === "home") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px;">
          <h1 style="font-size: 26px; font-weight: 800; color: #1E293B; margin: 0; letter-spacing: -0.5px;">
            Profile
          </h1>
          <button 
            class="btn-secondary" 
            onclick="window.lmsOpenLogoutModal()" 
            style="border-radius: 999px; padding: 7px 18px; color: #DC2626; border-color: #FECACA; font-weight: 700; font-size: 13px;"
          >
            ${ICONS.logout ? ICONS.logout(14) : '🚪'} Logout
          </button>
        </div>

        <!-- Top Profile Card (Panel 2) -->
        <div class="profile-home-top-card">
          <div class="profile-avatar-wrap">
            <img src="${s.avatarUrl}" alt="${s.name}" class="profile-avatar-img" />
            <div class="profile-avatar-camera-badge" onclick="window.lmsProfileSetView('edit_profile')" title="Change Photo">
              ${ICONS.camera ? ICONS.camera(14) : '📷'}
            </div>
          </div>

          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 4px;">
              <h2 style="font-size: 24px; font-weight: 900; color: #1E1B4B; margin: 0; letter-spacing: -0.5px;">
                ${s.name}
              </h2>
              <span class="badge-status badge-emerald" style="font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 999px;">
                ✔ ${s.status}
              </span>
            </div>
            <div style="font-size: 14.5px; font-weight: 600; color: #64748B;">
              ${s.grade} | Roll No: ${s.rollNo}
            </div>
          </div>

          <button 
            class="btn-primary" 
            onclick="window.lmsProfileSetView('edit_profile')"
            style="border-radius: 999px; padding: 9px 22px; font-size: 13.5px;"
          >
            ${ICONS.edit ? ICONS.edit(14) : '✏️'} Edit Profile
          </button>
        </div>

        <!-- 6 Action Cards Grid (Panel 2) -->
        <div class="profile-options-grid">
          
          <!-- 1. My Details -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('edit_profile')">
            <div class="profile-option-icon-box" style="background: #FAF5FF; color: #7C3AED;">
              ${ICONS.user ? ICONS.user(28) : '👤'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">My Details</div>
            <span style="font-size: 12.5px; color: #64748B;">Personal info & contacts</span>
          </div>

          <!-- 2. Academic Info -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('academic')">
            <div class="profile-option-icon-box" style="background: #EFF6FF; color: #2563EB;">
              ${ICONS.book ? ICONS.book(28) : '🎓'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Academic Info</div>
            <span style="font-size: 12.5px; color: #64748B;">School, section & year</span>
          </div>

          <!-- 3. Preferences -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('preferences')">
            <div class="profile-option-icon-box" style="background: #FAF5FF; color: #7C3AED;">
              ${ICONS.sliders ? ICONS.sliders(28) : '⚙️'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Preferences</div>
            <span style="font-size: 12.5px; color: #64748B;">Theme, language & sync</span>
          </div>

          <!-- 4. Security -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('security')">
            <div class="profile-option-icon-box" style="background: #EDE9FE; color: #6D28D9;">
              ${ICONS.shield ? ICONS.shield(28) : '🛡️'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Security</div>
            <span style="font-size: 12.5px; color: #64748B;">Password, OTP & devices</span>
          </div>

          <!-- 5. Notifications -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('notifications')">
            <div class="profile-option-icon-box" style="background: #FAF5FF; color: #7C3AED;">
              ${ICONS.bell ? ICONS.bell(28) : '🔔'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Notifications</div>
            <span style="font-size: 12.5px; color: #64748B;">Alerts & reminder settings</span>
          </div>

          <!-- 6. Help & Support -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('help')">
            <div class="profile-option-icon-box" style="background: #E0F2FE; color: #0284C7;">
              ${ICONS.headset ? ICONS.headset(28) : '🎧'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Help & Support</div>
            <span style="font-size: 12.5px; color: #64748B;">FAQs, teacher desk & feedback</span>
          </div>

        </div>

        <!-- Bottom Links Row: About LMS & Logout -->
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #F1F5F9; padding-top: 18px;">
          <button 
            onclick="window.lmsProfileSetView('about')" 
            style="background: none; border: none; font-size: 13.5px; font-weight: 700; color: #7C3AED; cursor: pointer; display: flex; align-items: center; gap: 6px;"
          >
            ℹ️ About Learning Universe LMS (v1.2.0) →
          </button>
          
          <button 
            onclick="window.lmsOpenLogoutModal()" 
            style="background: none; border: none; font-size: 13.5px; font-weight: 700; color: #EF4444; cursor: pointer; display: flex; align-items: center; gap: 6px;"
          >
            ${ICONS.logout ? ICONS.logout(16) : '🚪'} Logout from Account
          </button>
        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 2: EDIT PROFILE (Panel 3 - My Details)
  // =========================================================================
  if (view === "edit_profile") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderSubHeader("My Details (Edit Profile)")}

        <!-- Form Card (Panel 3) -->
        <div class="ai-form-card-v2" style="max-width: 720px; margin: 0 auto;">
          
          <div style="display: flex; gap: 32px; align-items: flex-start;">
            
            <!-- Photo with Camera Badge -->
            <div class="profile-avatar-wrap" style="width: 100px; height: 100px; margin-top: 10px;">
              <img src="${s.avatarUrl}" alt="${s.name}" class="profile-avatar-img" style="width: 100px; height: 100px;" />
              <div 
                class="profile-avatar-camera-badge" 
                style="width: 32px; height: 32px; bottom: 2px; right: 2px;"
                onclick="appInstance.showToast('Select a new profile image 📷')"
              >
                ${ICONS.camera ? ICONS.camera(16) : '📷'}
              </div>
            </div>

            <!-- Form Fields -->
            <div style="flex: 1; display: flex; flex-direction: column; gap: 16px;">
              
              <!-- Full Name -->
              <div>
                <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                  Full Name *
                </label>
                <input type="text" id="prof-name-input" class="profile-edit-input" value="${s.name}" />
              </div>

              <!-- Class & Roll No (2-Column Row) -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div>
                  <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                    Class *
                  </label>
                  <select id="prof-class-input" class="profile-edit-input">
                    <option value="Class 7" ${s.grade === "Class 7" ? "selected" : ""}>Class 7</option>
                    <option value="Class 6" ${s.grade === "Class 6" ? "selected" : ""}>Class 6</option>
                    <option value="Class 8" ${s.grade === "Class 8" ? "selected" : ""}>Class 8</option>
                  </select>
                </div>

                <div>
                  <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                    Roll No. *
                  </label>
                  <input type="text" id="prof-roll-input" class="profile-edit-input" value="${s.rollNo}" />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                  Email
                </label>
                <input type="email" id="prof-email-input" class="profile-edit-input" value="${s.email}" />
              </div>

              <!-- Parent Mobile -->
              <div>
                <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                  Mobile (Parent)
                </label>
                <input type="tel" id="prof-phone-input" class="profile-edit-input" value="${s.phone}" />
              </div>

              <!-- Action Buttons -->
              <div style="display: flex; justify-content: flex-end; gap: 14px; margin-top: 14px;">
                <button 
                  class="btn-secondary" 
                  onclick="window.lmsProfileSetView('home')"
                  style="border-radius: 999px; padding: 10px 24px;"
                >
                  Cancel
                </button>
                <button 
                  class="btn-primary" 
                  id="btn-save-profile-changes"
                  style="border-radius: 999px; padding: 10px 28px;"
                >
                  Save Changes ✔
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    `;

    container.querySelector("#btn-save-profile-changes")?.addEventListener("click", () => {
      const name = container.querySelector("#prof-name-input")?.value;
      const grade = container.querySelector("#prof-class-input")?.value;
      const roll = container.querySelector("#prof-roll-input")?.value;
      const email = container.querySelector("#prof-email-input")?.value;
      const phone = container.querySelector("#prof-phone-input")?.value;
      window.lmsProfileSaveDetails(name, grade, roll, email, phone);
    });

    return;
  }

  // =========================================================================
  // VIEW 3: ACADEMIC INFO (Panel 4)
  // =========================================================================
  if (view === "academic") {
    const academicFields = [
      { id: "grade", label: "Class", val: s.grade, icon: "🏫" },
      { id: "section", label: "Section", val: s.section, icon: "🔤" },
      { id: "academicYear", label: "Academic Year", val: s.academicYear, icon: "📅" },
      { id: "school", label: "School / Institution", val: s.school, icon: "🏫" },
      { id: "medium", label: "Medium", val: s.medium, icon: "🌐" }
    ];

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderSubHeader("Academic Info")}

        <div style="max-width: 680px; margin: 0 auto;">
          ${academicFields.map(f => `
            <div class="profile-setting-row-card">
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 20px;">${f.icon}</span>
                <span style="font-size: 15px; font-weight: 700; color: #1E293B;">
                  ${f.label}
                </span>
              </div>

              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 14.5px; font-weight: 800; color: #475569;">
                  ${f.val}
                </span>
                <button 
                  onclick="window.lmsProfileEditAcademic('${f.id}')"
                  style="background: #F1F5F9; border: none; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; color: #7C3AED; cursor: pointer; transition: background 0.2s;"
                  title="Edit ${f.label}"
                >
                  ${ICONS.edit ? ICONS.edit(14) : '✏️'}
                </button>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 4: PREFERENCES (Panel 5)
  // =========================================================================
  if (view === "preferences") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderSubHeader("Preferences")}

        <div style="max-width: 680px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
          
          <!-- App Theme Row -->
          <div class="profile-setting-row-card" style="flex-direction: column; align-items: flex-start; gap: 12px;">
            <div style="font-size: 15px; font-weight: 800; color: #1E293B;">
              App Theme
            </div>
            
            <div class="profile-theme-segmented-bar">
              <button 
                class="profile-theme-pill-btn ${s.theme === 'light' ? 'active' : ''}" 
                onclick="window.lmsProfileSetTheme('light')"
              >
                ${ICONS.sun ? ICONS.sun(14) : '☀️'} Light
              </button>
              <button 
                class="profile-theme-pill-btn ${s.theme === 'dark' ? 'active' : ''}" 
                onclick="window.lmsProfileSetTheme('dark')"
              >
                ${ICONS.moon ? ICONS.moon(14) : '🌙'} Dark
              </button>
              <button 
                class="profile-theme-pill-btn ${s.theme === 'system' ? 'active' : ''}" 
                onclick="window.lmsProfileSetTheme('system')"
              >
                ${ICONS.monitor ? ICONS.monitor(14) : '💻'} System
              </button>
            </div>
          </div>

          <!-- Language Row -->
          <div class="profile-setting-row-card">
            <div>
              <div style="font-size: 15px; font-weight: 800; color: #1E293B;">Language</div>
              <div style="font-size: 12.5px; color: #64748B;">Choose your preferred display language</div>
            </div>

            <select 
              class="ai-select-styled" 
              style="width: 160px; padding: 8px 14px;"
              onchange="appInstance.showToast('Language updated to ' + this.value);"
            >
              <option value="English" ${s.language === "English" ? "selected" : ""}>English</option>
              <option value="Tamil" ${s.language === "Tamil" ? "selected" : ""}>தமிழ் Tamil</option>
              <option value="Hindi" ${s.language === "Hindi" ? "selected" : ""}>हिन्दी Hindi</option>
            </select>
          </div>

          <!-- Content Download Row -->
          <div class="profile-setting-row-card">
            <div>
              <div style="font-size: 15px; font-weight: 800; color: #1E293B;">Content Download</div>
              <div style="font-size: 12.5px; color: #64748B;">Download over Wi-Fi only</div>
            </div>

            <label class="lms-toggle-switch">
              <input 
                type="checkbox" 
                ${s.downloadWifiOnly ? "checked" : ""}
                onchange="window.lmsProfileToggleWifi(this.checked)"
              />
              <span class="lms-toggle-slider"></span>
            </label>
          </div>

        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 5: SECURITY (Panel 6)
  // =========================================================================
  if (view === "security") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderSubHeader("Security")}

        <div style="max-width: 680px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px;">
          
          <!-- Change Password -->
          <div 
            class="profile-setting-row-card" 
            style="cursor: pointer;"
            onclick="appInstance.showToast('Password reset link sent to parent email 📧');"
          >
            <div style="display: flex; align-items: center; gap: 14px;">
              <span style="font-size: 20px;">🔑</span>
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">Change Password</span>
            </div>
            <span style="font-size: 16px; color: #94A3B8;">❯</span>
          </div>

          <!-- Login Activity -->
          <div 
            class="profile-setting-row-card" 
            style="cursor: pointer;"
            onclick="appInstance.showModal('<div style=\\'padding:20px; text-align:center;\\'><h3>Recent Login Activity</h3><p style=\\'color:#64748B; font-size:13px;\\'>Last active: Today at 3:45 PM (Windows / Chrome)<br>Location: Chennai, Tamil Nadu</p><button class=\\'btn-primary\\' onclick=\\'window.closeLmsModal()\\'>OK</button></div>');"
          >
            <div style="display: flex; align-items: center; gap: 14px;">
              <span style="font-size: 20px;">💻</span>
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">Login Activity</span>
            </div>
            <span style="font-size: 16px; color: #94A3B8;">❯</span>
          </div>

          <!-- Two-Factor Verification (OTP) -->
          <div class="profile-setting-row-card">
            <div style="display: flex; align-items: center; gap: 14px;">
              <span style="font-size: 20px;">🛡️</span>
              <div>
                <span style="font-size: 15px; font-weight: 800; color: #1E293B;">Two-Factor Verification (OTP)</span>
                <div style="font-size: 12px; color: #64748B;">Requires OTP code on parent mobile at login</div>
              </div>
            </div>

            <label class="lms-toggle-switch">
              <input 
                type="checkbox" 
                ${s.twoFactorAuth ? "checked" : ""}
                onchange="window.lmsProfileToggle2FA(this.checked)"
              />
              <span class="lms-toggle-slider"></span>
            </label>
          </div>

          <!-- Manage Devices -->
          <div 
            class="profile-setting-row-card" 
            style="cursor: pointer;"
            onclick="appInstance.showToast('You are currently logged in on 1 trusted device (School Laptop).');"
          >
            <div style="display: flex; align-items: center; gap: 14px;">
              <span style="font-size: 20px;">📱</span>
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">Manage Devices</span>
            </div>
            <span style="font-size: 16px; color: #94A3B8;">❯</span>
          </div>

        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 6: NOTIFICATIONS (Panel 7)
  // =========================================================================
  if (view === "notifications") {
    const notifRows = [
      { id: "assignmentUpdates", label: "Assignment Updates", icon: "📄" },
      { id: "quizAlerts", label: "Quiz Alerts", icon: "🏆" },
      { id: "challengeReminders", label: "Challenge Reminders", icon: "⏰" },
      { id: "achievementAlerts", label: "Achievement Alerts", icon: "⭐" },
      { id: "generalAnnouncements", label: "General Announcements", icon: "📢" }
    ];

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderSubHeader("Notifications")}

        <div style="max-width: 680px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px;">
          ${notifRows.map(r => `
            <div class="profile-setting-row-card">
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 20px;">${r.icon}</span>
                <span style="font-size: 15px; font-weight: 800; color: #1E293B;">
                  ${r.label}
                </span>
              </div>

              <label class="lms-toggle-switch">
                <input 
                  type="checkbox" 
                  ${s.notifications[r.id] ? "checked" : ""}
                  onchange="window.lmsProfileToggleNotification('${r.id}', this.checked)"
                />
                <span class="lms-toggle-slider"></span>
              </label>
            </div>
          `).join('')}
        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 7: HELP & SUPPORT (Panel 8)
  // =========================================================================
  if (view === "help") {
    const helpOptions = [
      { 
        id: "faq", 
        label: "FAQs", 
        icon: "❓",
        action: () => app.showModal(`<div style="padding:20px;"><h3>Frequently Asked Questions</h3><p style="font-size:13.5px; color:#475569;"><strong>Q: How do I earn badges?</strong><br>A: Complete lessons, quizzes, and maintain streaks.<br><br><strong>Q: Can I re-attempt quizzes?</strong><br>A: Yes, practice mode allows unlimited retries.</p><button class="btn-primary" onclick="window.closeLmsModal()">Got It</button></div>`)
      },
      { 
        id: "report", 
        label: "Report an Issue", 
        icon: "⚠️",
        action: () => app.showToast("Bug reporting form opened. Our tech team will assist you! 🛠️")
      },
      { 
        id: "contact", 
        label: "Contact Support", 
        icon: "💬",
        action: () => app.showToast("Teacher & Help Desk desk: support@learninguniverse.in 📞")
      },
      { 
        id: "feedback", 
        label: "Feedback", 
        icon: "📝",
        action: () => app.showToast("Thank you for sharing your learning feedback! ⭐")
      }
    ];

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderSubHeader("Help & Support")}

        <div style="max-width: 680px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px;">
          ${helpOptions.map((h, i) => `
            <div 
              class="profile-setting-row-card" 
              style="cursor: pointer;"
              id="help-item-${i}"
            >
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 20px;">${h.icon}</span>
                <span style="font-size: 15px; font-weight: 800; color: #1E293B;">
                  ${h.label}
                </span>
              </div>
              <span style="font-size: 16px; color: #94A3B8;">❯</span>
            </div>
          `).join('')}
        </div>

      </div>
    `;

    helpOptions.forEach((h, i) => {
      container.querySelector(`#help-item-${i}`)?.addEventListener("click", h.action);
    });

    return;
  }

  // =========================================================================
  // VIEW 8: ABOUT LEARNING UNIVERSE LMS (Panel 9)
  // =========================================================================
  if (view === "about") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderSubHeader("About Learning Universe LMS")}

        <div style="max-width: 680px; margin: 0 auto;">
          
          <!-- Brand Info Card -->
          <div class="ai-form-card-v2" style="text-align: center; padding: 32px 24px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: center; margin-bottom: 12px;">
              <img src="assets/logo-clean.png" alt="Logo" style="height: 52px; width: auto;" />
            </div>
            
            <h2 style="font-size: 22px; font-weight: 900; color: #1E1B4B; margin: 0 0 4px;">
              Learning Universe LMS
            </h2>
            
            <span style="font-size: 13px; font-weight: 800; color: #7C3AED; display: inline-block; margin-bottom: 10px;">
              Version 1.2.0
            </span>
            
            <p style="font-size: 14px; color: #64748B; max-width: 440px; margin: 0 auto; line-height: 1.5;">
              A smart learning platform for Students, Teachers and Schools.
            </p>
          </div>

          <!-- Policy Rows -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div 
              class="profile-setting-row-card" 
              style="cursor: pointer;"
              onclick="appInstance.showToast('Terms & Conditions: Standard Academic Learning Usage.');"
            >
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 20px;">📄</span>
                <span style="font-size: 15px; font-weight: 800; color: #1E293B;">Terms & Conditions</span>
              </div>
              <span style="font-size: 16px; color: #94A3B8;">❯</span>
            </div>

            <div 
              class="profile-setting-row-card" 
              style="cursor: pointer;"
              onclick="appInstance.showToast('Privacy Policy: Strict Student Data Protection & Safety Compliant.');"
            >
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 20px;">🛡️</span>
                <span style="font-size: 15px; font-weight: 800; color: #1E293B;">Privacy Policy</span>
              </div>
              <span style="font-size: 16px; color: #94A3B8;">❯</span>
            </div>

            <div 
              class="profile-setting-row-card" 
              style="cursor: pointer;"
              onclick="appInstance.showToast('Learning Universe LMS Platform • Built with Antigravity Architecture.');"
            >
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 20px;">ℹ️</span>
                <span style="font-size: 15px; font-weight: 800; color: #1E293B;">App Information</span>
              </div>
              <span style="font-size: 16px; color: #94A3B8;">❯</span>
            </div>
          </div>

        </div>

      </div>
    `;
    return;
  }
}

if (typeof window !== "undefined") {
  window.renderProfileScreen = renderProfileScreen;
}
