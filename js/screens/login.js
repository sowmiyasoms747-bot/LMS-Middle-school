// Screen 01: Login Screen (Exact Match to Reference Design)

import { ICONS } from '../components/icons.js';

export function renderLoginScreen(container, state, app) {
  container.innerHTML = `
    <div class="login-screen-view view-enter">
      
      <!-- Outer Soft Lavender Ambient Swirls -->
      <div class="login-bg-ambient-blob-1"></div>
      <div class="login-bg-ambient-blob-2"></div>

      <!-- The Main Login Card (Matching Image 3) -->
      <div class="login-target-card">
        
        <!-- Left Section: Form -->
        <div class="login-form-pane">
          
          <!-- Brand Logo (Icon + Text) -->
          <div class="login-brand-header">
            <img src="assets/logo-clean.png" alt="Learning Universe LMS" class="login-logo-img" />
            <div class="login-brand-text">
              <div class="login-brand-line1">Learning</div>
              <div class="login-brand-line2">Universe LMS</div>
            </div>
          </div>

          <!-- Titles -->
          <div class="login-titles">
            <h1 class="login-main-title">Student Login</h1>
            <h2 class="login-sub-title">Classes 6 – 8</h2>
          </div>

          <!-- Login Form with Rounded Pill Inputs -->
          <form id="student-login-form" class="login-form">
            
            <!-- Student ID or Email Input -->
            <div class="form-pill-group">
              <div class="pill-input-wrap">
                <span class="pill-input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <input 
                  type="text" 
                  id="login-student-id" 
                  placeholder="Student ID or Email" 
                  value="sowmiya.s@learninguniverse.edu" 
                  required
                />
              </div>
            </div>

            <!-- Password Input with Eye Toggle -->
            <div class="form-pill-group">
              <div class="pill-input-wrap">
                <span class="pill-input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <input 
                  type="password" 
                  id="login-password" 
                  placeholder="Password" 
                  value="••••••••••••" 
                  required
                />
                <button type="button" class="pill-eye-toggle" id="toggle-pwd-btn" title="Toggle password visibility">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Purple Pill Login Button -->
            <button type="submit" class="login-pill-btn" id="submit-login-btn">
              Login
            </button>

            <!-- Centered Forgot Password Link -->
            <div class="login-forgot-wrap">
              <a href="#" class="login-forgot-link" id="forgot-password-link">Forgot Password?</a>
            </div>

          </form>

          <!-- Bottom Left Soft Lavender Decorative Flourish Wave -->
          <svg class="card-bottom-left-wave" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-30 160 C20 130 40 80 110 95 C160 105 180 140 230 120 L230 160 Z" fill="#DDD6FE" fill-opacity="0.45"/>
            <path d="M-30 160 C10 140 30 105 80 115 C130 125 150 155 190 140 L190 160 Z" fill="#C4B5FD" fill-opacity="0.35"/>
          </svg>

        </div>

        <!-- Right Section: Real Students with Lavender Backdrop -->
        <div class="login-visual-pane">
          <div class="visual-wave-backdrop"></div>
          
          <img 
            src="assets/students-clean.png" 
            alt="Learning Universe LMS Students" 
            class="login-students-img"
          />
        </div>

      </div>

    </div>
  `;

  // Toggle Password
  const pwdInput = container.querySelector("#login-password");
  const toggleBtn = container.querySelector("#toggle-pwd-btn");
  let isShown = false;
  toggleBtn.addEventListener("click", () => {
    isShown = !isShown;
    pwdInput.type = isShown ? "text" : "password";
    toggleBtn.innerHTML = isShown ? ICONS.eyeOff(18) : ICONS.eye(18);
  });

  // Handle Form Submission
  const form = container.querySelector("#student-login-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    app.showToast("Welcome back, Sowmiya! Logging in...", "success");
    setTimeout(() => {
      app.navigateTo("02");
    }, 350);
  });

  // Forgot password modal
  container.querySelector("#forgot-password-link").addEventListener("click", (e) => {
    e.preventDefault();
    app.showModal(`
      <div style="text-align: center; padding: 14px;">
        <div style="font-size: 38px; margin-bottom: 8px;">🔑</div>
        <h3 style="font-size: 19px; font-weight: 800; color: #1E1B4B; margin-bottom: 8px;">Password Assistance</h3>
        <p style="font-size: 13.5px; color: #64748B; margin-bottom: 20px; line-height: 1.5;">
          For students in Classes 6 – 8, please contact your class teacher <strong>Ms. Revathi</strong> or verify via your parent's registered mobile number / email.
        </p>
        <button class="btn-primary" onclick="window.closeLmsModal()">Got It!</button>
      </div>
    `);
  });
}
