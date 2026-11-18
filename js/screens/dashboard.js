// Screen 02: Dashboard (Home) - Exact Match to Reference Design (Image 1)

import { ICONS } from '../components/icons.js';
import { GRAPHICS } from '../components/graphics.js';

export function renderDashboardScreen(container, state, app) {
  const { student, subjects } = state;

  container.innerHTML = `
    <div class="screen-container view-enter">
      
      <!-- Main 2-Column Dashboard Grid -->
      <div class="dashboard-grid-layout" style="display: grid; grid-template-columns: 2.3fr 1fr; gap: 24px;">
        
        <!-- ========================================================
             LEFT MAIN COLUMN
             ======================================================== -->
        <div class="dashboard-left-col">
          
          <!-- Hero Learning Banner (Students on Left, Text in Middle, Books on Right) -->
          <div class="hero-learning-banner-v2">
            
            <!-- Left: Smiling Students with Backpacks -->
            <div class="hero-students-left-wrap">
              <img 
                src="assets/students-clean.png" 
                alt="Smiling Students" 
                class="hero-students-clean-img"
              />
            </div>

            <!-- Middle: Main Value Proposition & Continue Learning -->
            <div class="hero-center-content-v2">
              <span class="hero-badge-pill">Classes 6 – 8</span>
              <h2 class="hero-title-v2">
                Interactive Learning<br>for Curious Minds
              </h2>
              <p class="hero-subtitle-v2">Learn • Practice • Challenge • Grow</p>
              <button class="hero-continue-btn-v2" id="dash-continue-btn">
                Continue Learning ❯
              </button>
            </div>

          </div>

          <!-- Learning Challenges Section -->
          <div class="lms-card-v2" style="margin-top: 22px;">
            <div class="card-header-row" style="margin-bottom: 14px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: #EDE9FE; color: #7C3AED; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(124, 58, 237, 0.15);">
                  ${ICONS.target(20)}
                </div>
                <div>
                  <h3 style="font-size: 16px; font-weight: 800; color: #1E293B;">Learning Challenges</h3>
                  <p style="font-size: 12px; color: var(--text-secondary); margin-top: 1px;">
                    Complete chapter-wise challenges and build your mastery.
                  </p>
                </div>
              </div>
              <a class="card-view-all-link" id="dash-view-challenges-btn" style="color: #7C3AED; font-weight: 700; font-size: 13px;">View All ❯</a>
            </div>

            <!-- 4 Challenge Cards Grid (Science, Maths, Social, English) -->
            <div class="challenges-quad-grid">
              
              <!-- 1. Science -->
              <div class="challenge-item-card-v2" data-screen="07" data-subject="science">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                  <div class="challenge-icon-box-v2" style="background: linear-gradient(135deg, #E0F2FE 0%, #EDE9FE 100%);">
                    ${GRAPHICS.scienceFlaskIcon(42)}
                  </div>
                  <div>
                    <h4 style="font-size: 14px; font-weight: 800; color: #1E293B;">Science</h4>
                    <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">The Cell</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden;">
                    <div style="width: 60%; height: 100%; background: linear-gradient(90deg, #0284C7, #38BDF8); border-radius: 9999px;"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: #0284C7; min-width: 28px; text-align: right;">60%</span>
                  <div class="challenge-round-arrow-btn">${ICONS.chevronSmall(11, '#FFFFFF')}</div>
                </div>
              </div>

              <!-- 2. Maths -->
              <div class="challenge-item-card-v2" data-screen="07" data-subject="maths">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                  <div class="challenge-icon-box-v2" style="background: linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%);">
                    ${GRAPHICS.mathsCalcIcon(42)}
                  </div>
                  <div>
                    <h4 style="font-size: 14px; font-weight: 800; color: #1E293B;">Maths</h4>
                    <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">Fractions & Decimals</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden;">
                    <div style="width: 75%; height: 100%; background: linear-gradient(90deg, #10B981, #34D399); border-radius: 9999px;"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: #10B981; min-width: 28px; text-align: right;">75%</span>
                  <div class="challenge-round-arrow-btn">${ICONS.chevronSmall(11, '#FFFFFF')}</div>
                </div>
              </div>

              <!-- 3. Social -->
              <div class="challenge-item-card-v2" data-screen="07" data-subject="social">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                  <div class="challenge-icon-box-v2" style="background: linear-gradient(135deg, #D1FAE5 0%, #E0F2FE 100%);">
                    ${GRAPHICS.socialGlobeIcon(42)}
                  </div>
                  <div>
                    <h4 style="font-size: 14px; font-weight: 800; color: #1E293B;">Social</h4>
                    <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">Our Environment</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden;">
                    <div style="width: 40%; height: 100%; background: linear-gradient(90deg, #10B981, #059669); border-radius: 9999px;"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: #059669; min-width: 28px; text-align: right;">40%</span>
                  <div class="challenge-round-arrow-btn green-btn">${ICONS.chevronSmall(11, '#FFFFFF')}</div>
                </div>
              </div>

              <!-- 4. English -->
              <div class="challenge-item-card-v2" data-screen="07" data-subject="english">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                  <div class="challenge-icon-box-v2" style="background: linear-gradient(135deg, #FCE7F3 0%, #FDF2F8 100%);">
                    ${GRAPHICS.englishBookIcon(42)}
                  </div>
                  <div>
                    <h4 style="font-size: 14px; font-weight: 800; color: #1E293B;">English</h4>
                    <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">Reading Comprehension</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden;">
                    <div style="width: 80%; height: 100%; background: linear-gradient(90deg, #EC4899, #F43F5E); border-radius: 9999px;"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: #DB2777; min-width: 28px; text-align: right;">80%</span>
                  <div class="challenge-round-arrow-btn">${ICONS.chevronSmall(11, '#FFFFFF')}</div>
                </div>
              </div>

            </div>
          </div>

          <!-- Middle Row: 2 Promo Cards (Interactive Quizzes & Progress Insights) -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 22px;">
            
            <!-- Interactive Quizzes Card -->
            <div class="promo-card-v2" id="dash-quiz-promo-btn" style="background: #FFFFFF;">
              <div style="flex: 1; padding-right: 12px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <div style="color: #7C3AED;">
                    ${ICONS.quiz(18)}
                  </div>
                  <h4 style="font-size: 15px; font-weight: 800; color: #1E1B4B;">Interactive Quizzes</h4>
                </div>
                <p style="font-size: 12.5px; color: #64748B; margin-bottom: 14px; line-height: 1.4;">
                  Test your understanding with chapter-wise quizzes.
                </p>
                <button class="promo-pill-btn-v2" style="background: linear-gradient(135deg, #7C3AED, #9333EA);">
                  Take a Quiz ❯
                </button>
              </div>
              <div style="flex-shrink: 0;">
                ${GRAPHICS.quizClipboard3D(88, 88)}
              </div>
            </div>

            <!-- Subject Progress Insights Card -->
            <div class="promo-card-v2" id="dash-progress-promo-btn" style="background: #FFFFFF;">
              <div style="flex: 1; padding-right: 12px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <div style="color: #0284C7;">
                    ${ICONS.progress(18)}
                  </div>
                  <h4 style="font-size: 15px; font-weight: 800; color: #1E1B4B;">Subject Progress Insights</h4>
                </div>
                <p style="font-size: 12.5px; color: #64748B; margin-bottom: 14px; line-height: 1.4;">
                  Track your learning journey strong areas and improve further.
                </p>
                <button class="promo-pill-btn-v2" style="background: linear-gradient(135deg, #5B21B6, #7C3AED);">
                  View Progress ❯
                </button>
              </div>
              <div style="flex-shrink: 0;">
                ${GRAPHICS.progressChart3D(88, 88)}
              </div>
            </div>

          </div>

          <!-- Bottom Row: 2 Cards (Achievement Milestones & AI Study Buddy) -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 22px;">
            
            <!-- Achievement Milestones Card -->
            <div class="achievements-card-v2" id="dash-view-achievements-btn" style="background: #FFFFFF;">
              <div class="card-header-row" style="margin-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: #F59E0B;">${ICONS.trophy(18)}</span>
                  <h4 style="font-size: 15px; font-weight: 800; color: #1E1B4B;">Achievement Milestones</h4>
                </div>
                <a class="card-view-all-link" style="color: #7C3AED; font-weight: 700; font-size: 12.5px;">View All ❯</a>
              </div>
              <p style="font-size: 12px; color: #64748B; margin-bottom: 14px;">
                Unlock badges and celebrate your learning journey.
              </p>

              <!-- 4 Badges Shelf (3D Glossy Hexagonal Badges) -->
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center; margin-top: 6px;">
                <div class="milestone-badge-col">
                  ${GRAPHICS.badgeConsistentLearner(50)}
                  <div>
                    <h5 style="font-size: 11px; font-weight: 800; color: #1E293B; margin: 0; line-height: 1.2;">Consistent</h5>
                    <span style="font-size: 10px; color: #64748B;">Learner</span>
                  </div>
                </div>

                <div class="milestone-badge-col">
                  ${GRAPHICS.badgeQuizMaster(50)}
                  <div>
                    <h5 style="font-size: 11px; font-weight: 800; color: #1E293B; margin: 0; line-height: 1.2;">Quiz</h5>
                    <span style="font-size: 10px; color: #64748B;">Master</span>
                  </div>
                </div>

                <div class="milestone-badge-col">
                  ${GRAPHICS.badgeChapterCompleter(50)}
                  <div>
                    <h5 style="font-size: 11px; font-weight: 800; color: #1E293B; margin: 0; line-height: 1.2;">Chapter</h5>
                    <span style="font-size: 10px; color: #64748B;">Completer</span>
                  </div>
                </div>

                <div class="milestone-badge-col">
                  ${GRAPHICS.badgeSubjectExplorer(50)}
                  <div>
                    <h5 style="font-size: 11px; font-weight: 800; color: #1E293B; margin: 0; line-height: 1.2;">Subject</h5>
                    <span style="font-size: 10px; color: #64748B;">Explorer</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- AI Study Buddy Card (Matching Panel 1 in Complete Flow) -->
            <div class="ai-buddy-card-v2" style="background: #FFFFFF; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 12px;">
                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 3px;">
                    <span style="color: #7C3AED;">${ICONS.robot(16)}</span>
                    <h4 style="font-size: 16px; font-weight: 800; color: #1E1B4B; margin: 0;">AI Study Buddy</h4>
                  </div>
                  <div style="font-size: 12px; font-weight: 700; color: #7C3AED; margin-bottom: 8px;">
                    Your 24×7 Learning Companion
                  </div>

                  <!-- Checklist items -->
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 11px; color: #475569; font-weight: 600; margin-bottom: 8px;">
                    <div><span style="color: #10B981; font-weight: 800;">✔</span> Ask Questions</div>
                    <div><span style="color: #10B981; font-weight: 800;">✔</span> Get Instant Answers</div>
                    <div><span style="color: #10B981; font-weight: 800;">✔</span> Explain Concepts Simply</div>
                    <div><span style="color: #10B981; font-weight: 800;">✔</span> Practice & Revise</div>
                  </div>
                </div>

                <div style="flex-shrink: 0; cursor: pointer;" id="dash-robot-avatar-click">
                  ${GRAPHICS.aiRobotMini3D(78, 78)}
                </div>
              </div>

              <!-- Quick Actions 4 Buttons Row (Matching Panel 1) -->
              <div>
                <div style="font-size: 11px; font-weight: 800; color: #94A3B8; text-transform: uppercase; margin-bottom: 6px;">
                  Quick Actions
                </div>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 10px;">
                  <button 
                    class="dash-ai-quick-btn" 
                    id="dash-qa-doubt"
                    style="background: #FAF5FF; border: 1px solid #DDD6FE; border-radius: 12px; padding: 6px 4px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px;"
                  >
                    <span style="color: #7C3AED; font-size: 14px;">💬</span>
                    <span style="font-size: 10px; font-weight: 700; color: #6D28D9; line-height: 1.1;">Ask Doubt</span>
                  </button>

                  <button 
                    class="dash-ai-quick-btn" 
                    id="dash-qa-summarize"
                    style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 6px 4px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px;"
                  >
                    <span style="color: #059669; font-size: 14px;">📄</span>
                    <span style="font-size: 10px; font-weight: 700; color: #475569; line-height: 1.1;">Summarize</span>
                  </button>

                  <button 
                    class="dash-ai-quick-btn" 
                    id="dash-qa-quiz"
                    style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 6px 4px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px;"
                  >
                    <span style="color: #D97706; font-size: 14px;">✍️</span>
                    <span style="font-size: 10px; font-weight: 700; color: #475569; line-height: 1.1;">Practice Quiz</span>
                  </button>

                  <button 
                    class="dash-ai-quick-btn" 
                    id="dash-qa-plan"
                    style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 6px 4px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px;"
                  >
                    <span style="color: #0284C7; font-size: 14px;">📅</span>
                    <span style="font-size: 10px; font-weight: 700; color: #475569; line-height: 1.1;">Study Plan</span>
                  </button>
                </div>

                <div style="display: flex; align-items: center; gap: 8px; position: relative;">
                  <input 
                    type="text" 
                    id="dash-quick-ai-input" 
                    placeholder="Ask a question..." 
                    class="ai-quick-input-pill"
                  />
                  <button class="ai-quick-send-btn" id="dash-quick-ai-btn">
                    ${ICONS.send(14)}
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        <!-- ========================================================
             RIGHT SIDEBAR WIDGETS COLUMN
             ======================================================== -->
        <div class="dashboard-right-col">
          
          <!-- Widget 1: Today's Tasks -->
          <div class="widget-card-v2">
            <div class="card-header-row" style="margin-bottom: 14px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: #7C3AED;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </span>
                <h3 style="font-size: 15px; font-weight: 800; color: #1E293B;">Today's Tasks</h3>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              
              <!-- Task 1 (Checked Green) -->
              <div class="task-row-v2" data-screen="05">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="task-check-circle checked">✓</div>
                  <span style="font-size: 12.5px; font-weight: 700; color: #1E293B;">Watch: The Cell - Video Lesson</span>
                </div>
                <span style="color: #94A3B8; font-size: 12px;">❯</span>
              </div>

              <!-- Task 2 (Checked Green) -->
              <div class="task-row-v2" data-screen="06">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="task-check-circle checked">✓</div>
                  <span style="font-size: 12.5px; font-weight: 700; color: #1E293B;">Practice: Quick Quiz (Science)</span>
                </div>
                <span style="color: #94A3B8; font-size: 12px;">❯</span>
              </div>

              <!-- Task 3 (Unchecked Circle) -->
              <div class="task-row-v2" data-screen="08">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="task-check-circle unchecked"></div>
                  <span style="font-size: 12.5px; font-weight: 700; color: #475569;">Complete: Worksheet (Maths)</span>
                </div>
                <span style="color: #94A3B8; font-size: 12px;">❯</span>
              </div>

            </div>
          </div>

          <!-- Widget 2: Subject Progress -->
          <div class="widget-card-v2">
            <div class="card-header-row" style="margin-bottom: 14px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: #7C3AED;">${ICONS.progress(18)}</span>
                <h3 style="font-size: 15px; font-weight: 800; color: #1E293B;">Subject Progress</h3>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              
              <!-- Science -->
              <div class="progress-sub-row-v2" data-screen="04">
                <div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 8px; background: #E0F2FE;">
                  ${GRAPHICS.scienceFlaskIcon(22)}
                </div>
                <span style="font-size: 12.5px; font-weight: 700; color: #1E293B; width: 52px;">Science</span>
                <div style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden; margin: 0 8px;">
                  <div style="width: 72%; height: 100%; background: linear-gradient(90deg, #0284C7, #38BDF8); border-radius: 9999px;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 800; color: #1E293B; min-width: 28px; text-align: right;">72%</span>
              </div>

              <!-- Maths -->
              <div class="progress-sub-row-v2" data-screen="03">
                <div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 8px; background: #FEF3C7;">
                  ${GRAPHICS.mathsCalcIcon(22)}
                </div>
                <span style="font-size: 12.5px; font-weight: 700; color: #1E293B; width: 52px;">Maths</span>
                <div style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden; margin: 0 8px;">
                  <div style="width: 68%; height: 100%; background: linear-gradient(90deg, #F59E0B, #FBBF24); border-radius: 9999px;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 800; color: #1E293B; min-width: 28px; text-align: right;">68%</span>
              </div>

              <!-- Social -->
              <div class="progress-sub-row-v2" data-screen="03">
                <div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 8px; background: #D1FAE5;">
                  ${GRAPHICS.socialGlobeIcon(22)}
                </div>
                <span style="font-size: 12.5px; font-weight: 700; color: #1E293B; width: 52px;">Social</span>
                <div style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden; margin: 0 8px;">
                  <div style="width: 62%; height: 100%; background: linear-gradient(90deg, #10B981, #34D399); border-radius: 9999px;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 800; color: #1E293B; min-width: 28px; text-align: right;">62%</span>
              </div>

              <!-- English -->
              <div class="progress-sub-row-v2" data-screen="03">
                <div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 8px; background: #EDE9FE;">
                  ${GRAPHICS.englishBookIcon(22)}
                </div>
                <span style="font-size: 12.5px; font-weight: 700; color: #1E293B; width: 52px;">English</span>
                <div style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden; margin: 0 8px;">
                  <div style="width: 78%; height: 100%; background: linear-gradient(90deg, #8B5CF6, #A855F7); border-radius: 9999px;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 800; color: #1E293B; min-width: 28px; text-align: right;">78%</span>
              </div>

            </div>
          </div>

          <!-- Widget 3: Upcoming Assignments -->
          <div class="widget-card-v2">
            <div class="card-header-row" style="margin-bottom: 14px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: #7C3AED;">${ICONS.assignment(18)}</span>
                <h3 style="font-size: 15px; font-weight: 800; color: #1E293B;">Upcoming Assignments</h3>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              
              <!-- Assignment 1 -->
              <div class="asg-row-v2" data-screen="08">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="asg-icon-box" style="background: #E0F2FE; color: #0284C7;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div>
                    <div style="font-size: 12.5px; font-weight: 700; color: #1E293B;">Cell Diagram - Science</div>
                    <div style="font-size: 11px; color: #64748B;">Due: Tomorrow</div>
                  </div>
                </div>
                <span style="color: #94A3B8; font-size: 12px;">❯</span>
              </div>

              <!-- Assignment 2 -->
              <div class="asg-row-v2" data-screen="08">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="asg-icon-box" style="background: #F5F3FF; color: #7C3AED;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
                  </div>
                  <div>
                    <div style="font-size: 12.5px; font-weight: 700; color: #1E293B;">Fractions - Maths</div>
                    <div style="font-size: 11px; color: #64748B;">Due: 20 Nov</div>
                  </div>
                </div>
                <span style="color: #94A3B8; font-size: 12px;">❯</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  `;

  // Bind Listeners with safe optional chaining
  container.querySelector("#dash-continue-btn")?.addEventListener("click", () => {
    app.navigateTo("05");
  });

  container.querySelector("#dash-view-challenges-btn")?.addEventListener("click", () => {
    app.navigateTo("07");
  });

  container.querySelector("#dash-quiz-promo-btn")?.addEventListener("click", () => {
    app.navigateTo("06");
  });

  container.querySelector("#dash-progress-promo-btn")?.addEventListener("click", () => {
    app.navigateTo("09");
  });

  container.querySelector("#dash-view-achievements-btn")?.addEventListener("click", () => {
    app.navigateTo("10");
  });

  const robotAvatar = container.querySelector("#dash-robot-avatar-click");
  if (robotAvatar) {
    robotAvatar.addEventListener("click", () => {
      state.aiBuddyView = "home";
      app.navigateTo("11");
    });
  }

  // Quick Action Buttons on AI Study Buddy Card (Panel 1)
  container.querySelector("#dash-qa-doubt")?.addEventListener("click", () => {
    state.aiBuddyView = "ask_doubt";
    app.navigateTo("11");
  });

  container.querySelector("#dash-qa-summarize")?.addEventListener("click", () => {
    state.aiBuddyView = "summarize";
    app.navigateTo("11");
  });

  container.querySelector("#dash-qa-quiz")?.addEventListener("click", () => {
    state.aiBuddyView = "quiz";
    app.navigateTo("11");
  });

  container.querySelector("#dash-qa-plan")?.addEventListener("click", () => {
    state.aiBuddyView = "study_plan";
    app.navigateTo("11");
  });

  const quickAiBtn = container.querySelector("#dash-quick-ai-btn");
  const quickAiInput = container.querySelector("#dash-quick-ai-input");
  if (quickAiBtn && quickAiInput) {
    const handleQuickAiSubmit = () => {
      const val = quickAiInput.value.trim();
      if (val) {
        state.aiBuddyView = "ask_doubt";
        if (!state.aiChatHistory) state.aiChatHistory = [];
        state.aiChatHistory.push({ sender: "user", text: val });
        app.navigateTo("11");
      } else {
        state.aiBuddyView = "home";
        app.navigateTo("11");
      }
    };
    quickAiBtn.addEventListener("click", handleQuickAiSubmit);
    quickAiInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleQuickAiSubmit();
    });
  }

  // Deep links on items with data-screen attribute
  container.querySelectorAll("[data-screen]").forEach(el => {
    el.addEventListener("click", () => {
      const target = el.getAttribute("data-screen");
      const subj = el.getAttribute("data-subject");
      if (subj) {
        state.activeChallengeSubject = subj;
      }
      if (target) app.navigateTo(target);
    });
  });

  // AI quick ask
  const aiInput = container.querySelector("#dash-quick-ai-input");
  const aiBtn = container.querySelector("#dash-quick-ai-btn");
  const handleAiQuickAsk = () => {
    const val = aiInput ? aiInput.value.trim() : "";
    if (val) {
      state.pendingAiQuery = val;
    }
    app.navigateTo("11");
  };
  aiBtn?.addEventListener("click", handleAiQuickAsk);
  aiInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAiQuickAsk();
  });
}
