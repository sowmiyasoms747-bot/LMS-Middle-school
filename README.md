# Learning Universe LMS — Classes 6 to 8 Complete Desktop UI Flow

A high-fidelity, interactive, and responsive student-side Learning Management System (LMS) web application inspired by the reference design for Classes 6 – 8.

---

## 🌟 Included Screens (All 13 Flows Implemented)

| # | Screen Name | Description & Interactive Features |
|---|-------------|-------------------------------------|
| **01** | **Login** | Student ID/Email input, password with show/hide toggle, vibrant purple gradient login button, school students uniform illustration, and demo one-click login. |
| **02** | **Dashboard (Home)** | Hero banner with *"Interactive Learning for Curious Minds"*, Today's Tasks checklist, Learning Challenges pills, Quizzes & Progress Promo boxes, Subject progress bars, Upcoming Assignments, and AI Buddy mini widget. |
| **03** | **My Learning — Subjects** | Filter tabs (*All Subjects*, *In Progress*, *Completed*), 3D subject cards for Science, Mathematics, Social Science, and English with animated progress meters. |
| **04** | **Subject — Chapter List** | Deep dive into Science (Class 7 • 12 Chapters), 3D flask hero banner with 72% circular radial gauge, sub-tabs (*Chapters*, *Resources*, *Practice*, *Notes*), and chapter items (*Nutrition in Plants*, *The Cell*, *Heat*, *Acids, Bases & Salts*). |
| **05** | **Video Lesson** | Interactive 3D biological cell player, custom scrub bar with play/pause simulation, timecode (`0:03 / 14:25`), speed & fullscreen controls, and lesson resources sidebar (*PDF Notes*, *Key Concepts*, *Practice Quiz*). |
| **06** | **Interactive Quiz** | Quick Quiz – The Cell with ticking countdown timer (`09:24`), Question 2 of 10, multiple-choice selection with instant answer feedback & explanation, diagram reference graphic, and confetti celebration! |
| **07** | **Learning Challenges** | Chapter challenges with star points (*The Cell +50 pts*, *Science Weekly +100 pts*, *Revision +150 pts*), interactive challenge test modal, and real-time score updates. |
| **08** | **Assignments** | Tabs (*To Do (2)*, *Submitted*, *Graded*), *Cell Diagram - Science* & *Fractions - Maths* with modal drag-and-drop file upload simulator, and graded teacher feedback. |
| **09** | **Subject Progress (Analytics)** | Syllabus progress breakdown bars (Science 72%, Maths 68%, Social 62%, English 78%), 70% overall completion gauge (*28/40 Chapters*), and weekly study hours analytics. |
| **10** | **Achievement Milestones** | Badge shelf (*Consistent Learner*, *Quiz Master*, *Chapter Completer*, *Subject Explorer*), 7-day streak celebration, and celebratory modal with confetti particle animation. |
| **11** | **AI Study Buddy** | Cute 3D robot mascot (*Buddy Bot*), greeting speech bubble, quick question prompt chips (*"Explain The Cell"*, *"Plant vs Animal Cell?"*, *"Divide fractions?"*), real-time interactive chat with animated typing indicator. |
| **12** | **Live Classes** | Filter tabs (*Upcoming*, *Live Now*, *Recordings*), *Science - The Cell* with Ms. Revathi (*Join Class* with simulated live classroom webcam and whiteboard modal), and *Maths - Fractions* reminder toggle. |
| **13** | **Profile & Settings** | Student identity card (*Sowmiya S. • Class 7 Section A*), roll number, school info, interactive tabs for *My Details*, *Password & Security*, *Notifications*, *Help & Support*, and working *Logout* flow. |

---

## 🎨 Design System & Visual Accuracy

- **Color Palette**:
  - **Primary**: Deep Royal Violet (`#7C3AED` to `#9333EA`) with glowing lavender accents.
  - **Science**: Electric Cyan / Ocean Blue (`#0284C7` / `#38BDF8`).
  - **Mathematics**: Amber Gold (`#F59E0B` / `#F97316`).
  - **Social Science**: Emerald / Mint Green (`#10B981` / `#059669`).
  - **English**: Coral Pink / Magenta (`#EC4899` / `#DB2777`).
- **3D SVG Illustrations**: Hand-crafted 3D cell cutaways, science flask with bubbling potion, math calculator with compass, social science globe, and AI mascot robot.
- **Micro-Interactions**: Smooth card hover elevation, button ripple & glow effects, ticking quiz countdown, animated typing indicator, and canvas-based celebration confetti.
- **Flow Navigator**: A sticky top navigation bar with 13 numbered pills (`01` to `13`) and an **Auto-Tour** mode that smoothly walks through the full presentation flow.

---

## 🚀 How to Run

Because this project is built with clean vanilla HTML5, CSS3, and modern modular ES6 JavaScript, **no build step or external npm packages are required**:

1. **Directly open in browser**:
   Double click `index.html` or open `file:///c:/Users/Admin/Downloads/LMS/index.html` in Chrome / Edge.

2. **Or run via Python HTTP Server**:
   ```bash
   cd c:\Users\Admin\Downloads\LMS
   python -m http.server 3000
   ```
   Then navigate to `http://localhost:3000` in your browser.
