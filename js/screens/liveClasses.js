// Screen 12: Live Classes

import { ICONS } from '../components/icons.js';

export function renderLiveClassesScreen(container, state, app) {
  const { liveClasses } = state;
  let activeTab = "upcoming"; // upcoming, live, recording

  function renderView() {
    let filtered = liveClasses;
    if (activeTab === "live") {
      filtered = liveClasses.filter(c => c.status === "live");
    } else if (activeTab === "upcoming") {
      filtered = liveClasses.filter(c => c.status === "upcoming" || c.status === "live");
    } else if (activeTab === "recording") {
      filtered = liveClasses.filter(c => c.status === "recording");
    }

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Screen Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
          <div>
            <h1 style="font-size: 26px; font-weight: 800; color: #1E293B; letter-spacing: -0.5px;">Live Classes</h1>
            <p style="font-size: 14px; color: var(--text-secondary); margin-top: 2px;">
              Join interactive live sessions with your school teachers and participate in real-time polls.
            </p>
          </div>
          <span class="badge-status badge-purple" style="font-size: 13px; padding: 6px 14px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #EF4444; display: inline-block;"></span>
            1 Class Starting Soon
          </span>
        </div>

        <!-- Filter Tabs -->
        <div class="tabs-nav-bar">
          <button class="tab-pill-btn ${activeTab === 'upcoming' ? 'active' : ''}" data-tab="upcoming">Upcoming</button>
          <button class="tab-pill-btn ${activeTab === 'live' ? 'active' : ''}" data-tab="live">Live Now</button>
          <button class="tab-pill-btn ${activeTab === 'recording' ? 'active' : ''}" data-tab="recording">Recordings</button>
        </div>

        <!-- Classes Grid -->
        <div class="live-classes-grid">
          ${filtered.map(cls => `
            <div class="live-card">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <span class="badge-status ${cls.status === 'live' ? 'badge-emerald' : 'badge-purple'}">
                    ${cls.status === 'live' ? '🔴 Live Now' : cls.statusLabel}
                  </span>
                  <span style="font-size: 12.5px; color: var(--text-muted); font-weight: 600;">${cls.subject}</span>
                </div>

                <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">
                  ${cls.title}
                </h3>
                
                <div style="font-size: 13.5px; color: var(--primary); font-weight: 700; margin-bottom: 4px;">
                  ${cls.timing}
                </div>

                <div style="font-size: 13px; color: var(--text-secondary);">
                  By <strong>${cls.teacher}</strong> • ${cls.department}
                </div>
              </div>

              <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: space-between;">
                ${cls.status === 'live' ? `
                  <span style="font-size: 12px; color: #059669; font-weight: 700;">👥 ${cls.attendees} Classmates joined</span>
                  <button class="btn-primary join-live-btn" data-class-id="${cls.id}" style="padding: 8px 18px;">
                    Join Class ${ICONS.video(16)}
                  </button>
                ` : cls.status === 'recording' ? `
                  <span style="font-size: 12px; color: #64748B;">Duration: ${cls.duration}</span>
                  <button class="btn-primary" style="padding: 8px 18px; background: linear-gradient(135deg, #0284C7, #0EA5E9);">
                    Watch Recording
                  </button>
                ` : `
                  <span style="font-size: 12px; color: #64748B;">Starts in 2 hours</span>
                  <button class="btn-secondary toggle-reminder-btn" data-class-id="${cls.id}">
                    ${ICONS.bell(18)} ${cls.reminderSet ? 'Reminder Set' : 'Remind Me'}
                  </button>
                `}
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    `;

    // Tab buttons
    container.querySelectorAll(".tab-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        renderView();
      });
    });

    // Reminder toggles
    container.querySelectorAll(".toggle-reminder-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-class-id");
        const cls = liveClasses.find(c => c.id === id);
        cls.reminderSet = !cls.reminderSet;
        app.showToast(cls.reminderSet ? `Reminder set for ${cls.title}` : `Reminder removed`);
        renderView();
      });
    });

    // Join Live simulation
    container.querySelectorAll(".join-live-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        app.showModal(`
          <div style="padding: 10px; max-width: 500px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
              <div>
                <h3 style="font-size: 18px; font-weight: 800; color: #1E293B;">🔴 Science - The Cell (Live Class)</h3>
                <span style="font-size: 12.5px; color: #059669; font-weight: 700;">Host: Ms. Revathi • Biology Dept</span>
              </div>
              <span class="badge-status badge-purple">39 Students</span>
            </div>

            <!-- Virtual Classroom Screen -->
            <div style="height: 220px; background: #0F172A; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF; position: relative; margin-bottom: 16px;">
              <div style="width: 64px; height: 64px; border-radius: 50%; background: #4338CA; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 8px;">
                👩‍🏫
              </div>
              <div style="font-size: 14px; font-weight: 700;">Ms. Revathi (Sharing Screen)</div>
              <span style="font-size: 12px; color: #94A3B8;">Topic: Cell Wall vs Cell Membrane in Plants</span>
              
              <div style="position: absolute; bottom: 12px; left: 16px; background: rgba(0,0,0,0.5); padding: 4px 10px; border-radius: 6px; font-size: 11px;">
                Mic: Muted • Cam: On
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center;">
              <button class="btn-secondary" onclick="alert('Hand raised! Ms. Revathi has been notified.');">
                ✋ Raise Hand
              </button>
              <button class="btn-primary" style="background: #EF4444;" onclick="window.closeLmsModal()">
                Leave Class
              </button>
            </div>
          </div>
        `);
      });
    });
  }

  renderView();
}
