# Script to generate exact fanning book matching media_1794986501122_5281823f.jpg
import math
import subprocess
import os

def generate_svg(theme="english", size=120):
    if theme == "english":
        cover_col = "#DC2626"
        cover_edge = "#EF4444"
        cover_dark = "#991B1B"
        line_col = "#B91C1C"
        accent_col = "#F43F5E"
        panel_fill = "#FEF3C7"
        text_line_col = "#F59E0B"
    else: # tamil
        cover_col = "#7E22CE"
        cover_edge = "#9333EA"
        cover_dark = "#581C87"
        line_col = "#6B21A8"
        accent_col = "#A855F7"
        panel_fill = "#F3E8FF"
        text_line_col = "#C084FC"

    uid = f"{theme}_{size}"

    svg = f'''
    <div class="anim-icon-wrap anim-fanning-book-wrap anim-{theme}-wrap" style="width: {size}px; height: {int(size * 0.88)}px; position: relative;" title="{theme.capitalize()} Book" data-subject="{theme}">
      <svg width="{size}" height="{int(size * 0.88)}" viewBox="0 0 130 102" fill="none" xmlns="http://www.w3.org/2000/svg" class="fanning-book-svg fanning-book-{theme}">
        <defs>
          <linearGradient id="covGrad_{uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="{cover_edge}"/>
            <stop offset="100%" stop-color="{cover_col}"/>
          </linearGradient>
          <linearGradient id="pageIvory_{uid}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#FFFDF7"/>
          </linearGradient>
          <linearGradient id="pageWarm_{uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="60%" stop-color="#FFFBEB"/>
            <stop offset="100%" stop-color="{panel_fill}"/>
          </linearGradient>
          <filter id="softShadow_{uid}" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#0F172A" flood-opacity="0.12"/>
          </filter>
        </defs>

        <!-- Ambient Ground Shadow -->
        <ellipse cx="65" cy="95" rx="52" ry="5" fill="#0F172A" fill-opacity="0.15"/>

        <!-- ================= 1. COVER THICKNESS & OUTER CASING ================= -->
        <!-- Red Cover Casing visible under bottom curve -->
        <path d="M65 89 C45 89 25 93 10 95 C6 95 4 93 5 90 C12 87 35 84 65 84 C95 84 118 87 125 90 C126 93 124 95 120 95 C105 93 85 89 65 89 Z"
              fill="{cover_dark}" stroke="{line_col}" stroke-width="1.2"/>
        
        <!-- Left Cover Wing Underneath -->
        <path d="M65 87 C42 87 22 90 7 92 L14 62 C28 65 46 67 65 68 Z"
              fill="url(#covGrad_{uid})" stroke="{line_col}" stroke-width="1.6" stroke-linejoin="round"/>
        
        <!-- Right Cover Wing Underneath -->
        <path d="M65 87 C88 87 108 90 123 92 L116 62 C102 65 84 67 65 68 Z"
              fill="url(#covGrad_{uid})" stroke="{line_col}" stroke-width="1.6" stroke-linejoin="round"/>

        <!-- Center Rounded Spine Tab / Joint -->
        <path d="M57 87 C57 93 73 93 73 87 C73 83 57 83 57 87 Z"
              fill="{cover_col}" stroke="{line_col}" stroke-width="1.6"/>

        <!-- ================= 2. BASE PAGES LYING FLAT WITH MULTI-PAGE EDGES ================= -->
        <!-- Left multi-page edge lines (Thickness) -->
        <path d="M8 89 C24 85 44 83 65 84" stroke="{line_col}" stroke-width="1" stroke-linecap="round" fill="none"/>
        <path d="M10 86 C26 83 45 81 65 82" stroke="{line_col}" stroke-width="1" stroke-linecap="round" fill="none"/>
        <path d="M12 83 C28 80 46 79 65 80" stroke="{line_col}" stroke-width="1" stroke-linecap="round" fill="none"/>

        <!-- Right multi-page edge lines (Thickness) -->
        <path d="M122 89 C106 85 86 83 65 84" stroke="{line_col}" stroke-width="1" stroke-linecap="round" fill="none"/>
        <path d="M120 86 C104 83 85 81 65 82" stroke="{line_col}" stroke-width="1" stroke-linecap="round" fill="none"/>
        <path d="M118 83 C102 80 84 79 65 80" stroke="{line_col}" stroke-width="1" stroke-linecap="round" fill="none"/>

        <!-- Left Base Page Top Surface -->
        <path d="M65 81 C46 80 28 78 13 81 L20 59 C35 62 50 64 65 65 Z"
              fill="url(#pageIvory_{uid})" stroke="{line_col}" stroke-width="1.6" stroke-linejoin="round"/>
        <!-- Left base page yellow printed panel & text lines -->
        <path d="M18 78 L24 62 L40 64 L34 80 Z" fill="{panel_fill}" fill-opacity="0.6"/>
        <line x1="42" y1="67" x2="58" y2="69" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="40" y1="72" x2="56" y2="74" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="38" y1="77" x2="54" y2="78" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="20" y1="80" x2="30" y2="80" stroke="{text_line_col}" stroke-width="1.3" stroke-linecap="round"/>

        <!-- Right Base Page Top Surface -->
        <path d="M65 81 C84 80 102 78 117 81 L110 59 C95 62 80 64 65 65 Z"
              fill="url(#pageIvory_{uid})" stroke="{line_col}" stroke-width="1.6" stroke-linejoin="round"/>
        <!-- Right base page yellow printed panel & text lines -->
        <path d="M112 78 L106 62 L90 64 L96 80 Z" fill="{panel_fill}" fill-opacity="0.6"/>
        <line x1="72" y1="67" x2="88" y2="69" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="74" y1="72" x2="90" y2="74" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="76" y1="77" x2="92" y2="78" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="100" y1="80" x2="110" y2="80" stroke="{text_line_col}" stroke-width="1.3" stroke-linecap="round"/>


        <!-- ================= 3. FANNING PAGES STANDING IN PERSPECTIVE (Matching Reference) ================= -->

        <!-- Leaf 1: Left Low Angle (~25 deg) -->
        <g class="fanning-leaf leaf-left-low">
          <path d="M65 81 L21 54 L36 33 L65 74 Z" fill="url(#pageIvory_{uid})" stroke="{line_col}" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M26 50 L37 36 L48 42 L37 56 Z" fill="{panel_fill}" fill-opacity="0.8"/>
          <line x1="42" y1="46" x2="56" y2="54" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
          <line x1="40" y1="52" x2="54" y2="60" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
        </g>

        <!-- Leaf 2: Left Mid Angle (~48 deg) -->
        <g class="fanning-leaf leaf-left-mid">
          <path d="M65 80 L35 37 L51 21 L65 73 Z" fill="url(#pageIvory_{uid})" stroke="{line_col}" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M39 34 L50 24 L56 32 L45 42 Z" fill="{panel_fill}" fill-opacity="0.8"/>
          <line x1="47" y1="36" x2="57" y2="46" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
          <line x1="49" y1="43" x2="59" y2="53" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
        </g>

        <!-- Leaf 3: Left High / Center Steep Angle (~70 deg) [MOVING PAGE 1 - Flutter & Flip] -->
        <g class="fanning-leaf fanning-moving-page-1" style="transform-origin: 65px 79px;">
          <path d="M65 79 L51 22 L63 14 L65 71 Z" fill="url(#pageWarm_{uid})" stroke="{line_col}" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M54 23 L61 17 L63 32 L56 38 Z" fill="{panel_fill}"/>
          <line x1="56" y1="28" x2="61" y2="24" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
          <line x1="57" y1="34" x2="62" y2="30" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
          <line x1="58" y1="42" x2="63" y2="38" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
        </g>

        <!-- Leaf 4: Center Tall Upright (~88-90 deg) [MOVING PAGE 2 - Flutter & Flip] -->
        <g class="fanning-leaf fanning-moving-page-2" style="transform-origin: 65px 79px;">
          <path d="M65 78 L63 8 L67 8 L65 71 Z" fill="#FFFFFF" stroke="{line_col}" stroke-width="1.5" stroke-linejoin="round"/>
          <line x1="64" y1="18" x2="66" y2="18" stroke="{text_line_col}" stroke-width="1.3" stroke-linecap="round"/>
          <line x1="64" y1="28" x2="66" y2="28" stroke="{text_line_col}" stroke-width="1.3" stroke-linecap="round"/>
          <line x1="64" y1="38" x2="66" y2="38" stroke="{text_line_col}" stroke-width="1.3" stroke-linecap="round"/>
        </g>

        <!-- Leaf 5: Right High Angle (~65 deg) - Tall Back Facing Right -->
        <g class="fanning-leaf leaf-right-high">
          <path d="M65 79 L80 16 L90 28 L65 73 Z" fill="url(#pageIvory_{uid})" stroke="{line_col}" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M78 22 L86 31 L78 48 L70 39 Z" fill="{panel_fill}" fill-opacity="0.8"/>
          <line x1="75" y1="32" x2="82" y2="26" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
          <line x1="77" y1="38" x2="84" y2="32" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
          <line x1="74" y1="45" x2="81" y2="39" stroke="{text_line_col}" stroke-width="1.4" stroke-linecap="round"/>
        </g>

        <!-- Leaf 6: Right Mid/Low Angle (~42 deg) - Wide Open Perspective -->
        <g class="fanning-leaf leaf-right-mid">
          <path d="M65 80 L96 34 L111 53 L65 75 Z" fill="url(#pageIvory_{uid})" stroke="{line_col}" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M92 38 L104 53 L90 62 L78 47 Z" fill="{panel_fill}" fill-opacity="0.8"/>
          <line x1="84" y1="48" x2="98" y2="40" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="86" y1="54" x2="100" y2="46" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="82" y1="60" x2="96" y2="52" stroke="{text_line_col}" stroke-width="1.5" stroke-linecap="round"/>
        </g>

        <!-- ================= 4. THEME OVERLAYS ================= -->
        {get_decor(theme)}

      </svg>
    </div>
    '''
    return svg

def get_decor(theme):
    if theme == "english":
        return '''
        <!-- English Theme: Floating 3D ABC Letters & Golden Magic Sparks -->
        <g class="float-fanning-letters">
          <!-- Letter A -->
          <g class="fanning-letter-a" transform="translate(36, 4)">
            <ellipse cx="6" cy="14" rx="5" ry="1.8" fill="#BE123C" fill-opacity="0.2"/>
            <text x="6" y="11" text-anchor="middle" font-size="14" font-weight="900" fill="#F43F5E" font-family="'Plus Jakarta Sans', sans-serif">A</text>
          </g>
          <!-- Letter B (Peak) -->
          <g class="fanning-letter-b" transform="translate(59, -3)">
            <ellipse cx="6" cy="14" rx="5" ry="1.8" fill="#6D28D9" fill-opacity="0.2"/>
            <text x="6" y="10" text-anchor="middle" font-size="16" font-weight="900" fill="#8B5CF6" font-family="'Plus Jakarta Sans', sans-serif">B</text>
          </g>
          <!-- Letter C -->
          <g class="fanning-letter-c" transform="translate(82, 4)">
            <ellipse cx="6" cy="14" rx="5" ry="1.8" fill="#0284C7" fill-opacity="0.2"/>
            <text x="6" y="11" text-anchor="middle" font-size="14" font-weight="900" fill="#0EA5E9" font-family="'Plus Jakarta Sans', sans-serif">C</text>
          </g>
          <!-- Golden Sparks -->
          <path d="M22 18 L23.5 21 L26 22 L23.5 23 L22 26 L20.5 23 L18 22 L20.5 21 Z" fill="#FBBF24"/>
          <path d="M106 18 L107.5 21 L110 22 L107.5 23 L106 26 L104.5 23 L102 22 L104.5 21 Z" fill="#FBBF24"/>
        </g>
        '''
    else:
        return '''
        <!-- Tamil Theme: Sprouting Leaves & Golden/Violet Tamil Script -->
        <g class="float-fanning-tamil">
          <!-- Green Sprouting Leaves at top right -->
          <path d="M74 14 C81 6 93 8 97 17 C90 22 79 21 74 14 Z" fill="#22C55E" stroke="#15803D" stroke-width="1.2"/>
          <path d="M74 14 C76 6 69 3 63 6 C65 13 70 14 74 14 Z" fill="#4ADE80"/>
          <!-- Tamil typography 'தமிழ்' floating above -->
          <g transform="translate(58, 2)">
            <text x="14" y="10" text-anchor="middle" font-size="14" font-weight="900" fill="#9333EA" font-family="'Noto Sans Tamil', 'Latha', 'Mukta Malar', 'Plus Jakarta Sans', sans-serif">தமிழ்</text>
          </g>
          <!-- Golden Sparks -->
          <path d="M26 18 L27.5 21 L30 22 L27.5 23 L26 26 L24.5 23 L22 22 L24.5 21 Z" fill="#FBBF24"/>
          <path d="M104 22 L105.5 24 L107 25 L105.5 26 L104 28 L102.5 26 L101 25 L102.5 24 Z" fill="#FBBF24"/>
        </g>
        '''

# Create HTML test harness
html = f'''<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Fanning Book Preview</title>
<style>
  body {{
    background: #F1F5F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 40px;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }}
  .row {{
    display: flex;
    gap: 40px;
    align-items: center;
  }}
  .card {{
    background: #FFFFFF;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }}
  .card:hover {{
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(99,102,241,0.15);
  }}

  /* Hover Flutter Animations */
  .anim-fanning-book-wrap {{
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }}
  .card:hover .anim-fanning-book-wrap,
  .anim-fanning-book-wrap:hover {{
    transform: scale(1.06);
  }}

  .fanning-moving-page-1,
  .fanning-moving-page-2 {{
    transform-origin: 65px 79px;
    transition: transform 0.3s ease;
  }}

  /* Smooth flutter on hover */
  .card:hover .fanning-moving-page-1,
  .anim-fanning-book-wrap:hover .fanning-moving-page-1 {{
    animation: bookPageFlutter1 1.6s ease-in-out infinite alternate;
  }}
  .card:hover .fanning-moving-page-2,
  .anim-fanning-book-wrap:hover .fanning-moving-page-2 {{
    animation: bookPageFlutter2 1.9s ease-in-out infinite alternate;
  }}

  @keyframes bookPageFlutter1 {{
    0% {{
      transform: rotate(0deg);
    }}
    50% {{
      transform: rotate(-10deg) skewY(-2deg);
    }}
    100% {{
      transform: rotate(6deg) skewY(1deg);
    }}
  }}

  @keyframes bookPageFlutter2 {{
    0% {{
      transform: rotate(0deg);
    }}
    50% {{
      transform: rotate(8deg) skewY(2deg);
    }}
    100% {{
      transform: rotate(-7deg) skewY(-1deg);
    }}
  }}

  /* Click full page flip cycle */
  .page-turning-active .fanning-moving-page-1 {{
    animation: bookPageFlipCycle1 1.0s cubic-bezier(0.25, 1, 0.5, 1) forwards !important;
  }}
  .page-turning-active .fanning-moving-page-2 {{
    animation: bookPageFlipCycle2 1.15s cubic-bezier(0.25, 1, 0.5, 1) forwards !important;
  }}

  @keyframes bookPageFlipCycle1 {{
    0% {{
      transform: rotate(0deg) scaleX(1);
    }}
    35% {{
      transform: rotate(-45deg) scaleX(0.6) skewY(-10deg);
    }}
    65% {{
      transform: rotate(-85deg) scaleX(0.4) skewY(-15deg);
    }}
    85% {{
      transform: rotate(-110deg) scaleX(0.7) skewY(-5deg);
    }}
    100% {{
      transform: rotate(0deg) scaleX(1);
    }}
  }}

  @keyframes bookPageFlipCycle2 {{
    0% {{
      transform: rotate(0deg) scaleX(1);
    }}
    30% {{
      transform: rotate(20deg) scaleX(0.85);
    }}
    55% {{
      transform: rotate(-50deg) scaleX(0.4) skewY(-12deg);
    }}
    80% {{
      transform: rotate(-95deg) scaleX(0.7) skewY(-6deg);
    }}
    100% {{
      transform: rotate(0deg) scaleX(1);
    }}
  }}

</style>
</head>
<body>
  <div class="row">
    <div class="card" id="card-eng">
      {generate_svg("english", 150)}
      <h3 style="margin: 16px 0 4px; color: #1E293B;">English</h3>
      <p style="margin: 0; color: #64748B; font-size: 14px;">10 Chapters</p>
    </div>
    <div class="card" id="card-tam">
      {generate_svg("tamil", 150)}
      <h3 style="margin: 16px 0 4px; color: #1E293B;">தமிழ்</h3>
      <p style="margin: 0; color: #64748B; font-size: 14px;">10 Chapters</p>
    </div>
  </div>

  <script>
    document.querySelectorAll('.card').forEach(card => {{
      card.addEventListener('click', () => {{
        const wrap = card.querySelector('.anim-fanning-book-wrap');
        wrap.classList.add('page-turning-active');
        setTimeout(() => {{
          wrap.classList.remove('page-turning-active');
        }}, 1200);
      }});
    }});
  </script>
</body>
</html>
'''

with open('scratch/preview_books.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('Wrote scratch/preview_books.html successfully')
