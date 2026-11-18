// High-Fidelity 3D-styled SVG Illustrations matching Learning Universe LMS reference designs

export const GRAPHICS = {
  // Cheerful Indian school students (Boy & Girl in uniform) with colorful books & gradient backdrop
  studentIllustration: (width = 380, height = 300) => `
    <svg width="${width}" height="${height}" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-student-illustration">
      <defs>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E0E7FF" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#EDE9FE" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="haloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#A78BFA" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#C084FC" stop-opacity="0.0"/>
        </linearGradient>
        <linearGradient id="skinBoy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
        <linearGradient id="skinGirl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE68A"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
        <linearGradient id="uniformBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E3A8A"/>
          <stop offset="100%" stop-color="#1E40AF"/>
        </linearGradient>
        <linearGradient id="uniformTie" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#DC2626"/>
          <stop offset="100%" stop-color="#991B1B"/>
        </linearGradient>
        <linearGradient id="bookCover1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>
        <linearGradient id="bookCover2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F43F5E"/>
          <stop offset="100%" stop-color="#E11D48"/>
        </linearGradient>
        <linearGradient id="bookCover3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10B981"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <!-- Soft ambient backdrop aura -->
      <circle cx="210" cy="160" r="130" fill="url(#haloGrad)" filter="url(#softGlow)"/>
      <ellipse cx="200" cy="270" rx="170" ry="25" fill="#C7D2FE" fill-opacity="0.35"/>

      <!-- Floating colorful learning sparks -->
      <g class="floating-spark-1">
        <circle cx="60" cy="90" r="16" fill="#FEE2E2"/>
        <path d="M54 90L66 90M60 84L60 96" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round"/>
      </g>
      <g class="floating-spark-2">
        <circle cx="340" cy="80" r="18" fill="#FEF3C7"/>
        <polygon points="340,68 344,76 352,78 346,84 348,92 340,88 332,92 334,84 328,78 336,76" fill="#F59E0B"/>
      </g>
      <g class="floating-spark-3">
        <circle cx="70" cy="190" r="12" fill="#E0F2FE"/>
        <circle cx="70" cy="190" r="5" fill="#0284C7"/>
      </g>

      <!-- BOY STUDENT (Left) -->
      <g id="boy-student" transform="translate(60, 40)">
        <!-- Boy Hair (Wavy black) -->
        <path d="M70,80 C50,60 60,25 95,20 C125,18 135,45 135,75 C120,70 100,65 80,72 Z" fill="#18181B"/>
        <path d="M68,60 C60,45 70,30 90,28 C105,25 125,30 130,55" stroke="#27272A" stroke-width="6" stroke-linecap="round"/>

        <!-- Boy Face -->
        <path d="M72,60 C72,40 120,40 120,60 C120,95 105,115 95,115 C85,115 72,95 72,60 Z" fill="url(#skinBoy)"/>
        
        <!-- Boy Neck -->
        <rect x="88" y="105" width="18" height="20" fill="#EAB308" rx="4"/>

        <!-- Boy Features -->
        <!-- Eyes -->
        <ellipse cx="86" cy="65" rx="3" ry="4" fill="#18181B"/>
        <ellipse cx="106" cy="65" rx="3" ry="4" fill="#18181B"/>
        <circle cx="87" cy="63" r="1" fill="#FFFFFF"/>
        <circle cx="107" cy="63" r="1" fill="#FFFFFF"/>
        <!-- Eyebrows -->
        <path d="M82,58 Q87,54 92,58" stroke="#18181B" stroke-width="2" stroke-linecap="round"/>
        <path d="M102,58 Q107,54 112,58" stroke="#18181B" stroke-width="2" stroke-linecap="round"/>
        <!-- Smile -->
        <path d="M89,82 Q96,92 103,82" stroke="#B91C1C" stroke-width="2.5" fill="#FFFFFF" stroke-linecap="round"/>

        <!-- Boy Uniform Shirt (White) & Collar -->
        <path d="M60,120 L132,120 L145,210 L50,210 Z" fill="#FFFFFF"/>
        <path d="M60,120 L96,150 L80,120 Z" fill="#E2E8F0"/>
        <path d="M132,120 L96,150 L112,120 Z" fill="#E2E8F0"/>

        <!-- School Tie (Navy/Crimson striped) -->
        <polygon points="93,135 99,135 101,180 96,192 91,180" fill="url(#uniformTie)"/>
        <line x1="93" y1="145" x2="99" y2="149" stroke="#FEF08A" stroke-width="2"/>
        <line x1="93" y1="160" x2="100" y2="164" stroke="#FEF08A" stroke-width="2"/>
        <line x1="93" y1="175" x2="99" y2="179" stroke="#FEF08A" stroke-width="2"/>

        <!-- Boy Navy Blazer / Sweater vest -->
        <path d="M50,135 L75,135 L88,180 L70,210 L45,210 Z" fill="url(#uniformBlue)"/>
        <path d="M142,135 L117,135 L104,180 L122,210 L147,210 Z" fill="url(#uniformBlue)"/>
      </g>

      <!-- GIRL STUDENT (Right) -->
      <g id="girl-student" transform="translate(170, 55)">
        <!-- Girl Hair (Neat with high ponytail & side braids) -->
        <path d="M85,35 C65,20 135,15 130,55 C145,60 150,85 135,100 C130,120 120,135 110,140 C110,120 120,95 110,85 C95,90 75,70 85,35 Z" fill="#18181B"/>
        <path d="M65,55 C65,30 115,25 115,55 C115,75 105,80 85,80 Z" fill="#27272A"/>
        <!-- Hair Ribbon -->
        <circle cx="128" cy="45" r="7" fill="#EC4899"/>

        <!-- Girl Face -->
        <path d="M65,52 C65,35 110,35 110,52 C110,88 98,105 88,105 C78,105 65,88 65,52 Z" fill="url(#skinGirl)"/>
        
        <!-- Girl Neck -->
        <rect x="80" y="98" width="16" height="18" fill="#F59E0B" rx="3"/>

        <!-- Girl Features -->
        <!-- Eyes -->
        <ellipse cx="78" cy="60" rx="3" ry="3.5" fill="#18181B"/>
        <ellipse cx="98" cy="60" rx="3" ry="3.5" fill="#18181B"/>
        <circle cx="79" cy="59" r="1.2" fill="#FFFFFF"/>
        <circle cx="99" cy="59" r="1.2" fill="#FFFFFF"/>
        <!-- Eyebrows -->
        <path d="M74,53 Q78,50 82,53" stroke="#18181B" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M94,53 Q98,50 102,53" stroke="#18181B" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Smile with dimples -->
        <path d="M81,76 Q88,86 95,76" stroke="#BE123C" stroke-width="2.5" fill="#FFFFFF" stroke-linecap="round"/>

        <!-- Uniform Pinafore / Shirt -->
        <path d="M50,112 L125,112 L135,195 L40,195 Z" fill="#FFFFFF"/>
        <path d="M55,112 L88,140 L70,112 Z" fill="#E2E8F0"/>
        <path d="M120,112 L88,140 L105,112 Z" fill="#E2E8F0"/>

        <!-- Navy School Pinafore Straps -->
        <path d="M55,120 L75,120 L78,195 L50,195 Z" fill="url(#uniformBlue)"/>
        <path d="M120,120 L100,120 L98,195 L125,195 Z" fill="url(#uniformBlue)"/>

        <!-- Little school crest badge -->
        <circle cx="65" cy="150" r="5" fill="#F59E0B"/>
      </g>

      <!-- 3D Colorful Stacked Books at Bottom -->
      <g id="books-stack" transform="translate(100, 240)">
        <!-- Book 1 (Bottom, Emerald Green) -->
        <path d="M30,30 L170,30 L160,52 L20,52 Z" fill="url(#bookCover3)"/>
        <path d="M170,30 L185,38 L175,60 L160,52 Z" fill="#065F46"/>
        <path d="M20,52 L160,52 L175,60 L35,60 Z" fill="#FFFFFF"/>
        <line x1="25" y1="56" x2="165" y2="56" stroke="#E5E7EB" stroke-width="2"/>

        <!-- Book 2 (Middle, Cyan Blue) -->
        <path d="M40,12 L160,12 L150,30 L30,30 Z" fill="url(#bookCover1)"/>
        <path d="M160,12 L175,18 L165,36 L150,30 Z" fill="#0369A1"/>
        <path d="M30,30 L150,30 L165,36 L45,36 Z" fill="#F8FAFC"/>

        <!-- Book 3 (Top, Rose Red) -->
        <path d="M50,-3 L150,-3 L142,12 L42,12 Z" fill="url(#bookCover2)"/>
        <path d="M150,-3 L162,2 L154,17 L142,12 Z" fill="#9F1239"/>
        <path d="M42,12 L142,12 L154,17 L54,17 Z" fill="#FFFFFF"/>

        <!-- Bookmark ribbon hanging down -->
        <path d="M110,12 L110,40 L115,35 L120,40 L120,12 Z" fill="#FDE047"/>
      </g>
    </svg>
  `,

  // 3D Biological Cell Cutaway graphic with glowing Nucleus, Mitochondria, Cell Wall
  cell3D: (width = 320, height = 220, highlight = null) => `
    <svg width="${width}" height="${height}" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="interactive-cell-model">
      <defs>
        <radialGradient id="cellOuterGrad" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="60%" stop-color="#0284C7"/>
          <stop offset="100%" stop-color="#0369A1"/>
        </radialGradient>
        <radialGradient id="cytoplasmGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#BAE6FD"/>
          <stop offset="70%" stop-color="#7DD3FC"/>
          <stop offset="100%" stop-color="#38BDF8"/>
        </radialGradient>
        <radialGradient id="nucleusGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#F472B6"/>
          <stop offset="45%" stop-color="#C084FC"/>
          <stop offset="80%" stop-color="#9333EA"/>
          <stop offset="100%" stop-color="#6B21A8"/>
        </radialGradient>
        <radialGradient id="nucleolusGrad" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#FDE047"/>
          <stop offset="60%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#D97706"/>
        </radialGradient>
        <radialGradient id="mitoGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FB7185"/>
          <stop offset="100%" stop-color="#E11D48"/>
        </radialGradient>
        <radialGradient id="chloroGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#4ADE80"/>
          <stop offset="100%" stop-color="#16A34A"/>
        </radialGradient>
        <filter id="nucleusGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <!-- Cell Outer Cutaway 3D Shell -->
      <path d="M180,20 C270,20 330,75 330,135 C330,195 265,240 180,240 C95,240 30,195 30,135 C30,75 90,20 180,20 Z" 
            fill="url(#cellOuterGrad)" stroke="#0284C7" stroke-width="6"/>

      <!-- Interior Cytoplasm Basin with 3D depth rim -->
      <path d="M180,35 C255,35 310,80 310,135 C310,185 250,225 180,225 C110,225 50,185 50,135 C50,80 105,35 180,35 Z" 
            fill="url(#cytoplasmGrad)"/>

      <!-- Organelle: Endoplasmic Reticulum (Wavy Folded Ribbons) -->
      <g opacity="0.85" stroke="#A855F7" stroke-width="4" stroke-linecap="round" fill="none">
        <path d="M130,85 C115,75 105,95 95,85 C85,75 80,95 70,88"/>
        <path d="M125,95 C110,88 100,105 90,98 C80,90 75,108 65,100"/>
        <path d="M135,108 C120,105 110,118 100,112 C90,108 85,120 75,115"/>
      </g>

      <!-- Organelle: Mitochondria 1 (Powerhouse) -->
      <g transform="translate(240, 80) rotate(25)" class="organelle-mito" data-organelle="mitochondria">
        <ellipse cx="0" cy="0" rx="22" ry="12" fill="url(#mitoGrad)" stroke="#BE123C" stroke-width="1.5"/>
        <path d="M-15,0 Q-10,-6 -5,0 Q0,6 5,0 Q10,-6 15,0" stroke="#FFF1F2" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>

      <!-- Organelle: Mitochondria 2 -->
      <g transform="translate(100, 175) rotate(-30)" class="organelle-mito" data-organelle="mitochondria">
        <ellipse cx="0" cy="0" rx="20" ry="11" fill="url(#mitoGrad)" stroke="#BE123C" stroke-width="1.5"/>
        <path d="M-14,0 Q-9,-5 -4,0 Q1,5 6,0 Q11,-5 14,0" stroke="#FFF1F2" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      </g>

      <!-- Organelle: Chloroplasts (in plant cells) -->
      <g transform="translate(245, 160) rotate(-15)" class="organelle-chloro" data-organelle="chloroplast">
        <ellipse cx="0" cy="0" rx="22" ry="13" fill="url(#chloroGrad)" stroke="#15803D" stroke-width="1.5"/>
        <circle cx="-8" cy="0" r="3" fill="#BBF7D0"/>
        <circle cx="0" cy="0" r="3" fill="#BBF7D0"/>
        <circle cx="8" cy="0" r="3" fill="#BBF7D0"/>
      </g>

      <!-- Organelle: Golgi Apparatus -->
      <g transform="translate(160, 185)" stroke="#F97316" stroke-width="3" stroke-linecap="round" fill="none">
        <path d="M-25,0 C-10,6 10,6 25,0"/>
        <path d="M-22,6 C-8,12 8,12 22,6"/>
        <path d="M-18,12 C-6,17 6,17 18,12"/>
      </g>

      <!-- Vacuole (Clean fluid bubble) -->
      <ellipse cx="115" cy="135" rx="16" ry="12" fill="#E0F2FE" fill-opacity="0.8" stroke="#38BDF8" stroke-width="1.5"/>
      <ellipse cx="112" cy="132" rx="5" ry="3" fill="#FFFFFF" fill-opacity="0.6"/>

      <!-- CENTER NUCLEUS (The Control Center!) -->
      <g id="organelle-nucleus" class="organelle-nucleus-group ${highlight === 'nucleus' ? 'active-highlight' : ''}" 
         filter="url(#nucleusGlow)">
        <!-- Outer nuclear membrane -->
        <circle cx="180" cy="125" r="46" fill="url(#nucleusGrad)" stroke="#E9D5FF" stroke-width="3"/>
        <!-- Inner chromatin granules -->
        <circle cx="165" cy="115" r="3" fill="#E9D5FF" fill-opacity="0.7"/>
        <circle cx="195" cy="115" r="2.5" fill="#E9D5FF" fill-opacity="0.7"/>
        <circle cx="170" cy="140" r="2.5" fill="#E9D5FF" fill-opacity="0.7"/>
        <circle cx="192" cy="138" r="3" fill="#E9D5FF" fill-opacity="0.7"/>
        <!-- Nucleolus (Dense inner core) -->
        <circle cx="180" cy="125" r="17" fill="url(#nucleolusGrad)" stroke="#FDE68A" stroke-width="2"/>
        <circle cx="176" cy="122" r="5" fill="#FFFFFF" fill-opacity="0.5"/>
      </g>

      <!-- Labeled Callouts / Pins -->
      <g id="labels" opacity="0.95">
        <!-- Nucleus Label Pointer -->
        <line x1="180" y1="79" x2="180" y2="48" stroke="#7C3AED" stroke-width="2" stroke-dasharray="3 3"/>
        <circle cx="180" cy="48" r="3" fill="#7C3AED"/>
        <rect x="150" y="26" width="60" height="20" rx="10" fill="#7C3AED"/>
        <text x="180" y="40" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui">Nucleus</text>
      </g>
    </svg>
  `,

  // 3D Erlenmeyer Science Flask with bubbling cyan & purple potion & floating sparks
  flask3D: (width = 120, height = 120) => `
    <svg width="${width}" height="${height}" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="science-flask-graphic">
      <defs>
        <linearGradient id="flaskGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/>
          <stop offset="40%" stop-color="#E0F2FE" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.3"/>
        </linearGradient>
        <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="50%" stop-color="#818CF8"/>
          <stop offset="100%" stop-color="#9333EA"/>
        </linearGradient>
        <filter id="flaskGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <!-- Glowing aura -->
      <circle cx="70" cy="85" r="45" fill="#C084FC" fill-opacity="0.2" filter="url(#flaskGlow)"/>

      <!-- Liquid inside flask -->
      <path d="M42,90 L98,90 L115,116 C118,122 114,128 106,128 L34,128 C26,128 22,122 25,116 Z" 
            fill="url(#liquidGrad)"/>
      <!-- Liquid wave top surface -->
      <ellipse cx="70" cy="90" rx="28" ry="7" fill="#67E8F9"/>

      <!-- Glass Flask Body -->
      <path d="M58,25 L82,25 L82,45 L118,112 C122,120 117,130 108,130 L32,130 C23,130 18,120 22,112 L58,45 Z" 
            stroke="url(#flaskGlass)" stroke-width="4" fill="url(#flaskGlass)" fill-opacity="0.15"/>
      <!-- Lip / rim -->
      <rect x="54" y="20" width="32" height="6" rx="3" fill="#E0F2FE" stroke="#38BDF8" stroke-width="1.5"/>

      <!-- Bubbles floating up -->
      <circle cx="65" cy="108" r="4" fill="#FFFFFF" fill-opacity="0.8"/>
      <circle cx="78" cy="115" r="3" fill="#FFFFFF" fill-opacity="0.7"/>
      <circle cx="72" cy="75" r="3.5" fill="#38BDF8" fill-opacity="0.8" class="animate-bounce-slow"/>
      <circle cx="82" cy="60" r="2.5" fill="#818CF8" fill-opacity="0.8"/>
      <circle cx="60" cy="48" r="2" fill="#C084FC" fill-opacity="0.8"/>

      <!-- Sparkles -->
      <path d="M102,40 L105,48 L113,51 L105,54 L102,62 L99,54 L91,51 L99,48 Z" fill="#FBBF24"/>
      <circle cx="34" cy="65" r="2" fill="#38BDF8"/>
    </svg>
  `,

  // 3D Calculator & Compass for Mathematics
  calculator3D: (width = 120, height = 120) => `
    <svg width="${width}" height="${height}" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="maths-calc-graphic">
      <defs>
        <linearGradient id="calcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FBBF24"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
        <linearGradient id="calcScreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
      </defs>
      <!-- Drop Shadow -->
      <rect x="35" y="25" width="70" height="90" rx="14" fill="#D97706" fill-opacity="0.3"/>
      <!-- Main body -->
      <rect x="35" y="20" width="70" height="92" rx="14" fill="url(#calcGrad)" stroke="#FDE68A" stroke-width="2"/>
      <!-- Screen -->
      <rect x="43" y="28" width="54" height="24" rx="6" fill="url(#calcScreen)"/>
      <text x="91" y="44" fill="#34D399" font-size="12" font-weight="700" text-anchor="end" font-family="monospace">128.5</text>
      <!-- Buttons Grid -->
      <rect x="44" y="58" width="12" height="10" rx="3" fill="#FFFFFF"/>
      <rect x="60" y="58" width="12" height="10" rx="3" fill="#FFFFFF"/>
      <rect x="76" y="58" width="12" height="10" rx="3" fill="#FEF3C7"/>

      <rect x="44" y="72" width="12" height="10" rx="3" fill="#FFFFFF"/>
      <rect x="60" y="72" width="12" height="10" rx="3" fill="#FFFFFF"/>
      <rect x="76" y="72" width="12" height="10" rx="3" fill="#FEF3C7"/>

      <rect x="44" y="86" width="12" height="10" rx="3" fill="#FFFFFF"/>
      <rect x="60" y="86" width="12" height="10" rx="3" fill="#EF4444"/>
      <rect x="76" y="86" width="12" height="10" rx="3" fill="#10B981"/>

      <!-- Geometry Compass Ruler floating in front -->
      <g transform="translate(85, 20) rotate(35)">
        <polygon points="0,0 6,80 0,76 -6,80" fill="#94A3B8"/>
        <circle cx="0" cy="8" r="7" fill="#64748B"/>
        <line x1="-15" y1="35" x2="15" y2="35" stroke="#CBD5E1" stroke-width="2"/>
      </g>
    </svg>
  `,

  // 3D Globe for Social Science
  globe3D: (width = 120, height = 120) => `
    <svg width="${width}" height="${height}" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-globe-graphic">
      <defs>
        <linearGradient id="globeOcean" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="60%" stop-color="#0284C7"/>
          <stop offset="100%" stop-color="#0369A1"/>
        </linearGradient>
        <linearGradient id="globeLand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ADE80"/>
          <stop offset="100%" stop-color="#15803D"/>
        </linearGradient>
      </defs>
      <!-- Base Stand -->
      <path d="M50,122 L90,122 L85,115 L55,115 Z" fill="#64748B"/>
      <rect x="66" y="95" width="8" height="22" fill="#94A3B8"/>
      <!-- Semi-circular arm -->
      <path d="M30,68 C30,95 50,112 70,112 C90,112 110,95 110,68" stroke="#CBD5E1" stroke-width="5" fill="none"/>
      <!-- Globe Sphere -->
      <circle cx="70" cy="65" r="38" fill="url(#globeOcean)" stroke="#0284C7" stroke-width="1.5"/>
      <!-- Continents (Stylized Green landmasses) -->
      <path d="M50,55 C55,48 70,45 75,55 C78,62 70,72 62,75 C52,72 45,62 50,55 Z" fill="url(#globeLand)"/>
      <path d="M80,68 C85,65 98,68 95,78 C92,85 82,88 80,80 Z" fill="url(#globeLand)"/>
      <path d="M60,82 C65,80 72,82 70,90 C68,96 58,95 60,82 Z" fill="url(#globeLand)"/>
      <!-- Latitude/Longitude lines -->
      <ellipse cx="70" cy="65" rx="38" ry="12" stroke="#BAE6FD" stroke-width="1" stroke-dasharray="3 2" fill="none"/>
      <!-- Shiny light reflection -->
      <ellipse cx="58" cy="48" rx="10" ry="5" fill="#FFFFFF" fill-opacity="0.4" transform="rotate(-30 58 48)"/>
    </svg>
  `,

  // 3D Open Book with feather quill for English
  bookQuill3D: (width = 120, height = 120) => `
    <svg width="${width}" height="${height}" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" class="english-book-graphic">
      <defs>
        <linearGradient id="engCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F472B6"/>
          <stop offset="100%" stop-color="#DB2777"/>
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <ellipse cx="70" cy="115" rx="50" ry="10" fill="#F43F5E" fill-opacity="0.15"/>
      <!-- Open Book Base -->
      <path d="M70,85 C55,80 32,80 20,86 L20,52 C32,46 55,46 70,52 Z" fill="#FFFFFF" stroke="#FBCFE8" stroke-width="1.5"/>
      <path d="M70,85 C85,80 108,80 120,86 L120,52 C108,46 85,46 70,52 Z" fill="#FDF2F8" stroke="#FBCFE8" stroke-width="1.5"/>
      <!-- Spine & Cover border -->
      <path d="M20,86 C32,80 55,80 70,85 C85,80 108,80 120,86 L120,91 C108,85 85,85 70,90 C55,85 32,85 20,91 Z" fill="url(#engCover)"/>
      <!-- Text Lines -->
      <line x1="28" y1="58" x2="58" y2="58" stroke="#F472B6" stroke-width="2" stroke-linecap="round"/>
      <line x1="28" y1="66" x2="60" y2="66" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="28" y1="74" x2="52" y2="74" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>

      <line x1="78" y1="58" x2="110" y2="58" stroke="#F472B6" stroke-width="2" stroke-linecap="round"/>
      <line x1="78" y1="66" x2="112" y2="66" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="78" y1="74" x2="102" y2="74" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Feather Quill pen -->
      <g transform="translate(95, 25) rotate(20)">
        <path d="M0,0 C15,-15 35,-25 40,-45 C28,-30 18,-20 0,-15 C10,-20 18,-30 20,-40 C10,-30 5,-20 -5,-10 L-20,20 L0,0 Z" 
              fill="#F43F5E"/>
        <line x1="-20" y1="20" x2="30" y2="-35" stroke="#FDE047" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // Cute 3D AI Study Buddy Robot Mascot
  aiRobot3D: (width = 160, height = 160) => `
    <svg width="${width}" height="${height}" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="ai-study-buddy-robot">
      <defs>
        <linearGradient id="botBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="60%" stop-color="#EDE9FE"/>
          <stop offset="100%" stop-color="#DDD6FE"/>
        </linearGradient>
        <linearGradient id="botVisor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E1B4B"/>
          <stop offset="100%" stop-color="#312E81"/>
        </linearGradient>
        <linearGradient id="botEar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8B5CF6"/>
          <stop offset="100%" stop-color="#6D28D9"/>
        </linearGradient>
        <filter id="eyeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <!-- Ambient Shadow -->
      <ellipse cx="80" cy="145" rx="45" ry="10" fill="#7C3AED" fill-opacity="0.15"/>

      <!-- Floating Antenna with glowing sphere -->
      <line x1="80" y1="36" x2="80" y2="18" stroke="#8B5CF6" stroke-width="4" stroke-linecap="round"/>
      <circle cx="80" cy="15" r="7" fill="#38BDF8" filter="url(#eyeGlow)"/>
      <circle cx="78" cy="13" r="2.5" fill="#FFFFFF"/>

      <!-- Robot Head -->
      <rect x="35" y="36" width="90" height="70" rx="30" fill="url(#botBody)" stroke="#C4B5FD" stroke-width="2"/>
      
      <!-- Cyan Ear Headphones -->
      <rect x="25" y="55" width="12" height="28" rx="6" fill="url(#botEar)"/>
      <rect x="123" y="55" width="12" height="28" rx="6" fill="url(#botEar)"/>
      <circle cx="31" cy="69" r="3" fill="#67E8F9"/>
      <circle cx="129" cy="69" r="3" fill="#67E8F9"/>

      <!-- Dark Digital Visor Screen -->
      <rect x="44" y="47" width="72" height="42" rx="18" fill="url(#botVisor)"/>

      <!-- Glowing Cyan LED Eyes (Friendly rounded arches) -->
      <g filter="url(#eyeGlow)" class="robot-eyes">
        <path d="M58,68 C58,62 68,62 68,68" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
        <path d="M92,68 C92,62 102,62 102,68" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
        <!-- Cheek blush -->
        <circle cx="53" cy="74" r="3" fill="#F472B6" fill-opacity="0.6"/>
        <circle cx="107" cy="74" r="3" fill="#F472B6" fill-opacity="0.6"/>
      </g>

      <!-- Robot Torso -->
      <path d="M50,110 L110,110 L116,138 C116,142 110,146 104,146 L56,146 C50,146 44,142 44,138 Z" 
            fill="url(#botBody)" stroke="#C4B5FD" stroke-width="2"/>
      <!-- Glowing chest power heart / star -->
      <circle cx="80" cy="128" r="8" fill="#8B5CF6"/>
      <polygon points="80,123 82,127 86,128 83,130 84,134 80,132 76,134 77,130 74,128 78,127" fill="#FDE047"/>

      <!-- Waving Left Arm -->
      <g class="animate-wave">
        <path d="M44,116 C30,110 22,96 18,85" stroke="url(#botEar)" stroke-width="7" stroke-linecap="round"/>
        <circle cx="18" cy="85" r="7" fill="#67E8F9"/>
      </g>
      <!-- Right Arm Resting -->
      <path d="M116,116 C125,122 130,132 128,140" stroke="url(#botEar)" stroke-width="7" stroke-linecap="round"/>
      <circle cx="128" cy="140" r="6" fill="#67E8F9"/>
    </svg>
  `,

  // 3D Stacked Books with Pencil Holder and Green Plant Leaves (Sidebar bottom decoration)
  sidebarBooksPlant: (width = 180, height = 140) => `
    <svg width="${width}" height="${height}" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-books-plant-graphic">
      <defs>
        <linearGradient id="sbBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>
        <linearGradient id="sbYellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FBBF24"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
        <linearGradient id="sbRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FB7185"/>
          <stop offset="100%" stop-color="#E11D48"/>
        </linearGradient>
        <linearGradient id="sbCup" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#818CF8"/>
          <stop offset="100%" stop-color="#4F46E5"/>
        </linearGradient>
        <linearGradient id="sbLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ADE80"/>
          <stop offset="100%" stop-color="#16A34A"/>
        </linearGradient>
      </defs>

      <!-- Soft ambient shadow -->
      <ellipse cx="100" cy="148" rx="85" ry="10" fill="#CBD5E1" fill-opacity="0.4"/>

      <!-- Plant Leaves on the left -->
      <g transform="translate(30, 70)">
        <!-- Stem -->
        <path d="M25,65 Q18,35 15,10" stroke="#15803D" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Leaf 1 (Top) -->
        <path d="M15,10 C5,5 0,-15 15,-20 C25,-15 25,5 15,10 Z" fill="url(#sbLeaf)"/>
        <!-- Leaf 2 (Left) -->
        <path d="M20,35 C5,30 -10,25 -5,40 C0,50 15,45 20,35 Z" fill="url(#sbLeaf)"/>
        <!-- Leaf 3 (Right) -->
        <path d="M22,25 C35,15 45,20 40,32 C35,42 25,32 22,25 Z" fill="url(#sbLeaf)"/>
      </g>

      <!-- Stack of 3D Books -->
      <g transform="translate(50, 75)">
        <!-- Book 1 (Bottom, Red/Coral) -->
        <path d="M10,48 L105,48 L95,68 L0,68 Z" fill="url(#sbRed)"/>
        <path d="M105,48 L116,55 L106,75 L95,68 Z" fill="#9F1239"/>
        <path d="M0,68 L95,68 L106,75 L11,75 Z" fill="#FFFFFF"/>
        <line x1="8" y1="72" x2="98" y2="72" stroke="#E2E8F0" stroke-width="1.5"/>

        <!-- Book 2 (Middle, Yellow/Gold) -->
        <path d="M14,30 L100,30 L90,48 L4,48 Z" fill="url(#sbYellow)"/>
        <path d="M100,30 L111,37 L101,55 L90,48 Z" fill="#D97706"/>
        <path d="M4,48 L90,48 L101,55 L15,55 Z" fill="#FFFFFF"/>

        <!-- Book 3 (Top, Blue/Cyan) -->
        <path d="M18,12 L96,12 L87,30 L9,30 Z" fill="url(#sbBlue)"/>
        <path d="M96,12 L106,18 L97,36 L87,30 Z" fill="#0369A1"/>
        <path d="M9,30 L87,30 L97,36 L19,36 Z" fill="#FFFFFF"/>

        <!-- White page bookmark ribbon -->
        <path d="M60,30 L60,52 L64,48 L68,52 L68,30 Z" fill="#FFFFFF"/>
      </g>

      <!-- Pen Cup Holder on the right -->
      <g transform="translate(135, 95)">
        <!-- Cup Body -->
        <rect x="0" y="20" width="28" height="35" rx="6" fill="url(#sbCup)"/>
        <ellipse cx="14" cy="20" rx="14" ry="4" fill="#312E81"/>
        
        <!-- Pencils sticking out -->
        <!-- Pencil 1 (Yellow) -->
        <rect x="5" y="-5" width="4" height="28" rx="1" fill="#FBBF24" transform="rotate(-12 5 -5)"/>
        <polygon points="5,-5 9,-5 7,-10" fill="#FCD34D" transform="rotate(-12 5 -5)"/>
        <polygon points="6.5,-8 7.5,-8 7,-10" fill="#1E293B" transform="rotate(-12 5 -5)"/>

        <!-- Pencil 2 (Pink/Red) -->
        <rect x="16" y="0" width="4" height="24" rx="1" fill="#F43F5E" transform="rotate(10 16 0)"/>
        <polygon points="16,0 20,0 18,-5" fill="#FDA4AF" transform="rotate(10 16 0)"/>
        <polygon points="17.5,-3 18.5,-3 18,-5" fill="#1E293B" transform="rotate(10 16 0)"/>
      </g>
    </svg>
  `,

  // 3D Books decoration (Pink on Yellow) matching Reference Design for Hero Banner
  heroRightBooks: (width = 96, height = 80) => `
    <svg width="${width}" height="${height}" viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-3d-books-svg">
      <defs>
        <linearGradient id="hrbPinkCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDA4AF"/>
          <stop offset="40%" stop-color="#FB7185"/>
          <stop offset="100%" stop-color="#E11D48"/>
        </linearGradient>
        <linearGradient id="hrbYellowCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A"/>
          <stop offset="40%" stop-color="#FBBF24"/>
          <stop offset="100%" stop-color="#D97706"/>
        </linearGradient>
        <linearGradient id="hrbPagesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#F1F5F9"/>
        </linearGradient>
      </defs>

      <!-- Soft Ambient Shadow -->
      <ellipse cx="50" cy="74" rx="42" ry="7" fill="#6366F1" fill-opacity="0.18"/>

      <!-- BOTTOM BOOK: Golden-Yellow Hardcover Book -->
      <path d="M12 56 L78 56 C82 56 86 59 86 63 L86 67 C86 71 82 74 78 74 L12 74 C8 74 4 71 4 67 L4 63 C4 59 8 56 12 56 Z" fill="#B45309"/>
      <path d="M74 54 C78 54 84 57 84 62 L84 68 C84 72 78 74 74 74 Z" fill="#92400E"/>
      <path d="M14 53 L74 53 L74 67 L14 67 Z" fill="url(#hrbPagesGrad)"/>
      <line x1="16" y1="57" x2="72" y2="57" stroke="#E2E8F0" stroke-width="1"/>
      <line x1="16" y1="62" x2="72" y2="62" stroke="#E2E8F0" stroke-width="1"/>
      <path d="M10 49 L76 49 C80 49 84 52 84 55 L84 57 C84 60 80 62 76 62 L10 62 C6 62 2 60 2 57 L2 55 C2 52 6 49 10 49 Z" fill="url(#hrbYellowCover)" stroke="#FDE68A" stroke-width="1"/>
      <path d="M14 51 L72 51" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>

      <!-- TOP BOOK: Pink / Rose-Magenta Hardcover Book -->
      <ellipse cx="48" cy="48" rx="36" ry="4" fill="#9A3412" fill-opacity="0.25"/>
      <path d="M18 34 L82 34 C86 34 90 37 90 41 L90 45 C90 49 86 52 82 52 L18 52 C14 52 10 49 10 45 L10 41 C10 37 14 34 18 34 Z" fill="#9F1239"/>
      <path d="M78 32 C82 32 88 35 88 40 L88 46 C88 50 82 52 78 52 Z" fill="#881337"/>
      <path d="M20 31 L78 31 L78 45 L20 45 Z" fill="url(#hrbPagesGrad)"/>
      <line x1="22" y1="35" x2="76" y2="35" stroke="#FCE7F3" stroke-width="1"/>
      <line x1="22" y1="40" x2="76" y2="40" stroke="#FCE7F3" stroke-width="1"/>
      <path d="M16 27 L80 27 C84 27 88 30 88 33 L88 35 C88 38 84 40 80 40 L16 40 C12 40 8 38 8 35 L8 33 C8 30 12 27 16 27 Z" fill="url(#hrbPinkCover)" stroke="#FECDD3" stroke-width="1"/>
      <path d="M20 29 L76 29" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/>
    </svg>
  `,

  // 3D Illustrated Quiz Clipboard with checklist & pencil
  quizClipboard3D: (width = 90, height = 90) => `
    <svg width="${width}" height="${height}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="qcBoard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC"/>
          <stop offset="100%" stop-color="#E2E8F0"/>
        </linearGradient>
        <linearGradient id="qcClip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C084FC"/>
          <stop offset="100%" stop-color="#7C3AED"/>
        </linearGradient>
        <linearGradient id="qcPencil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCD34D"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
      </defs>
      <!-- Shadow -->
      <rect x="24" y="20" width="56" height="70" rx="10" fill="#7C3AED" fill-opacity="0.15" transform="rotate(-6 24 20)"/>
      
      <!-- Clipboard Paper/Base -->
      <rect x="20" y="16" width="56" height="72" rx="10" fill="url(#qcBoard)" stroke="#CBD5E1" stroke-width="1.5" transform="rotate(-6 20 16)"/>
      
      <!-- Top Metal Clip -->
      <rect x="34" y="10" width="28" height="12" rx="4" fill="url(#qcClip)" transform="rotate(-6 34 10)"/>
      <circle cx="48" cy="14" r="3" fill="#FFFFFF" transform="rotate(-6 48 14)"/>

      <!-- Checklist items -->
      <g transform="rotate(-6 20 16)">
        <!-- Check 1 -->
        <circle cx="32" cy="38" r="4" fill="#10B981"/>
        <path d="M30 38 L31.5 39.5 L34 36.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="64" y2="38" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Check 2 -->
        <circle cx="32" cy="50" r="4" fill="#10B981"/>
        <path d="M30 50 L31.5 51.5 L34 48.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="40" y1="50" x2="60" y2="50" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Check 3 -->
        <circle cx="32" cy="62" r="4" fill="#C4B5FD"/>
        <line x1="40" y1="62" x2="56" y2="62" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round"/>
      </g>

      <!-- 3D Pencil angled across -->
      <g transform="translate(60, 48) rotate(35)">
        <rect x="0" y="0" width="8" height="38" rx="2" fill="url(#qcPencil)"/>
        <polygon points="0,38 8,38 4,46" fill="#FDE68A"/>
        <polygon points="2.5,43 5.5,43 4,46" fill="#1E293B"/>
        <rect x="0" y="-5" width="8" height="5" rx="1.5" fill="#FB7185"/>
      </g>
    </svg>
  `,

  // 3D Ascending Bar Chart with rising upward trend arrow
  progressChart3D: (width = 90, height = 90) => `
    <svg width="${width}" height="${height}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pcBar1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#BAE6FD"/>
          <stop offset="100%" stop-color="#38BDF8"/>
        </linearGradient>
        <linearGradient id="pcBar2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>
        <linearGradient id="pcBar3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284C7"/>
          <stop offset="100%" stop-color="#0369A1"/>
        </linearGradient>
        <linearGradient id="pcArrow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06B6D4"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>
      </defs>
      
      <!-- Base Shadow -->
      <ellipse cx="50" cy="88" rx="42" ry="6" fill="#BAE6FD" fill-opacity="0.4"/>

      <!-- Bar 1 (Short) -->
      <rect x="18" y="58" width="16" height="26" rx="4" fill="url(#pcBar1)"/>
      <!-- Bar 2 (Medium) -->
      <rect x="42" y="42" width="16" height="42" rx="4" fill="url(#pcBar2)"/>
      <!-- Bar 3 (Tall) -->
      <rect x="66" y="24" width="16" height="60" rx="4" fill="url(#pcBar3)"/>

      <!-- 3D Isometric top facets -->
      <path d="M18 58 L24 53 L40 53 L34 58 Z" fill="#E0F2FE"/>
      <path d="M42 42 L48 37 L64 37 L58 42 Z" fill="#BAE6FD"/>
      <path d="M66 24 L72 19 L88 19 L82 24 Z" fill="#7DD3FC"/>

      <!-- Ascending Trend Arrow Line -->
      <path d="M14 62 Q45 42 78 18" stroke="#06B6D4" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <polygon points="76,14 85,15 82,24" fill="#0284C7"/>

      <!-- Glowing sparkles -->
      <circle cx="86" cy="14" r="2.5" fill="#FBBF24"/>
      <circle cx="48" cy="34" r="1.5" fill="#38BDF8"/>
    </svg>
  `,

  // Cute 3D Mini Robot Mascot for AI Study Buddy widget
  aiRobotMini3D: (width = 80, height = 80) => `
    <svg width="${width}" height="${height}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="armBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="60%" stop-color="#EDE9FE"/>
          <stop offset="100%" stop-color="#DDD6FE"/>
        </linearGradient>
        <linearGradient id="armVisor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E1B4B"/>
          <stop offset="100%" stop-color="#312E81"/>
        </linearGradient>
      </defs>
      <!-- Base Shadow -->
      <ellipse cx="50" cy="92" rx="30" ry="6" fill="#7C3AED" fill-opacity="0.15"/>

      <!-- Antenna -->
      <line x1="50" y1="24" x2="50" y2="12" stroke="#8B5CF6" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="50" cy="10" r="4.5" fill="#38BDF8"/>
      <circle cx="48.5" cy="8.5" r="1.5" fill="#FFFFFF"/>

      <!-- Robot Head -->
      <rect x="22" y="24" width="56" height="44" rx="18" fill="url(#armBody)" stroke="#C4B5FD" stroke-width="1.5"/>
      <!-- Blue Ear headphones -->
      <rect x="15" y="36" width="8" height="18" rx="4" fill="#7C3AED"/>
      <rect x="77" y="36" width="8" height="18" rx="4" fill="#7C3AED"/>

      <!-- Visor -->
      <rect x="28" y="31" width="44" height="26" rx="11" fill="url(#armVisor)"/>
      <!-- Cyan glowing eyes -->
      <ellipse cx="40" cy="44" rx="4" ry="4" fill="#38BDF8"/>
      <ellipse cx="60" cy="44" rx="4" ry="4" fill="#38BDF8"/>
      <circle cx="38.5" cy="42.5" r="1.2" fill="#FFFFFF"/>
      <circle cx="58.5" cy="42.5" r="1.2" fill="#FFFFFF"/>
      <!-- Pink Blush -->
      <circle cx="34" cy="48" r="2" fill="#F472B6" fill-opacity="0.7"/>
      <circle cx="66" cy="48" r="2" fill="#F472B6" fill-opacity="0.7"/>

      <!-- Torso -->
      <path d="M32 70 L68 70 L72 88 C72 90 68 92 64 92 L36 92 C32 92 28 90 28 88 Z" fill="url(#armBody)" stroke="#C4B5FD" stroke-width="1.5"/>
      <!-- Chest star/core -->
      <circle cx="50" cy="80" r="5" fill="#8B5CF6"/>
      <circle cx="50" cy="80" r="2" fill="#FDE047"/>

      <!-- Waving Left Hand -->
      <path d="M28 74 Q18 68 14 58" stroke="#7C3AED" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="14" cy="58" r="4" fill="#67E8F9"/>

      <!-- Right Hand resting -->
      <path d="M72 74 Q80 80 82 86" stroke="#7C3AED" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="82" cy="86" r="3.5" fill="#67E8F9"/>
    </svg>
  `,

  // ========================================================
  // ANIMATED 3D SUBJECT ICONS (Learning Challenges & Widgets)
  // ========================================================

  // 1. Science Flask Icon - Cartoon 3D Erlenmeyer flask with dark outline, bubbling liquid, reflections
  scienceFlaskIcon: (size = 42) => `
    <div class="anim-icon-wrap anim-science-wrap" style="width: ${size}px; height: ${size}px;" title="Science">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="anim-subject-svg svg-flask">
        <defs>
          <linearGradient id="sciGlassGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
            <stop offset="35%" stop-color="#E0F2FE" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#BAE6FD" stop-opacity="0.35"/>
          </linearGradient>
          <linearGradient id="sciLiquidGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38BDF8"/>
            <stop offset="45%" stop-color="#6366F1"/>
            <stop offset="100%" stop-color="#9333EA"/>
          </linearGradient>
          <filter id="sciGlow_${size}" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="glow"/>
            <feComposite in="SourceGraphic" in2="glow" operator="over"/>
          </filter>
        </defs>
        <!-- Soft Shadow Base -->
        <ellipse cx="32" cy="58" rx="18" ry="4" fill="#6366F1" fill-opacity="0.22"/>
        <!-- Liquid Body Inside Flask -->
        <path d="M21 38 L43 38 L51 52 C52.5 54.5 50.8 57 47.5 57 L16.5 57 C13.2 57 11.5 54.5 13 52 Z" fill="url(#sciLiquidGrad_${size})"/>
        <!-- Meniscus Surface with cyan glow -->
        <ellipse cx="32" cy="38" rx="11" ry="3.5" fill="#67E8F9"/>
        <!-- Flask Outer Wall with Dark Cartoon Stroke -->
        <path d="M26 12 L38 12 L38 22 L52 48 C54.8 53.5 51 58 45 58 L19 58 C13 58 9.2 53.5 12 48 L26 22 Z" 
              fill="url(#sciGlassGrad_${size})" stroke="#1E1B4B" stroke-width="3.2" stroke-linejoin="round"/>
        <!-- Rim at Top -->
        <rect x="23.5" y="8.5" width="17" height="4.5" rx="2.25" fill="#E0F2FE" stroke="#1E1B4B" stroke-width="2.6"/>
        <!-- Gloss Reflection Streak -->
        <path d="M16 48 L24 33" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
        <circle cx="15" cy="51" r="1.5" fill="#FFFFFF"/>
        <!-- Bubbles Floating Up -->
        <circle cx="26" cy="47" r="2.5" fill="#FFFFFF" fill-opacity="0.9" class="svg-bubble b1"/>
        <circle cx="36" cy="50" r="2" fill="#FFFFFF" fill-opacity="0.85" class="svg-bubble b2"/>
        <circle cx="31" cy="31" r="2.2" fill="#38BDF8" class="svg-bubble b3"/>
        <circle cx="37" cy="22" r="1.8" fill="#818CF8" class="svg-bubble b4"/>
        <circle cx="28" cy="16" r="1.5" fill="#C084FC" class="svg-bubble b1"/>
        <!-- Golden Sparkle on Rim -->
        <path d="M42 6 L43.5 9.5 L47 11 L43.5 12.5 L42 16 L40.5 12.5 L37 11 L40.5 9.5 Z" fill="#FBBF24"/>
      </svg>
    </div>
  `,

  // 2. Mathematics Calculator Icon - Chunky 3D amber calculator with colorful keys, LCD & drafting compass
  mathsCalcIcon: (size = 42) => `
    <div class="anim-icon-wrap anim-maths-wrap" style="width: ${size}px; height: ${size}px;" title="Maths">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="anim-subject-svg svg-calc">
        <defs>
          <linearGradient id="mathBodyGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="35%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <linearGradient id="mathScreenGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0F172A"/>
            <stop offset="100%" stop-color="#1E293B"/>
          </linearGradient>
        </defs>
        <!-- Shadow Base -->
        <rect x="15" y="16" width="34" height="44" rx="8" fill="#B45309" fill-opacity="0.25"/>
        
        <!-- Geometry Drafting Compass behind calculator -->
        <g transform="translate(43, 9) rotate(26)">
          <line x1="0" y1="0" x2="-8" y2="44" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
          <line x1="0" y1="0" x2="8" y2="44" stroke="#64748B" stroke-width="3" stroke-linecap="round"/>
          <circle cx="0" cy="0" r="4.5" fill="#CBD5E1" stroke="#1E1B4B" stroke-width="2"/>
          <polygon points="-9,44 -7,44 -8,48" fill="#1E293B"/>
          <polygon points="7,44 9,44 8,48" fill="#64748B"/>
        </g>

        <!-- Calculator 3D Body -->
        <rect x="12" y="12" width="36" height="48" rx="9" fill="url(#mathBodyGrad_${size})" stroke="#1E1B4B" stroke-width="3.2"/>
        <!-- Top Bevel Highlight -->
        <rect x="14.5" y="14.5" width="31" height="4" rx="2" fill="#FEF08A" fill-opacity="0.85"/>
        
        <!-- LCD Display -->
        <rect x="16.5" y="18" width="27" height="12" rx="3.5" fill="url(#mathScreenGrad_${size})" stroke="#1E1B4B" stroke-width="1.8"/>
        <text x="40.5" y="27" fill="#34D399" font-size="8" font-weight="900" text-anchor="end" font-family="'SF Mono', Consolas, monospace" class="svg-display-text">128</text>
        <circle cx="19.5" cy="24" r="1" fill="#34D399"/>

        <!-- Keypad Grid (3x3) -->
        <!-- Row 1 -->
        <rect x="17" y="33" width="7" height="5.5" rx="1.8" fill="#FFFFFF" stroke="#1E1B4B" stroke-width="1.2"/>
        <rect x="26.5" y="33" width="7" height="5.5" rx="1.8" fill="#FFFFFF" stroke="#1E1B4B" stroke-width="1.2"/>
        <rect x="36" y="33" width="7" height="5.5" rx="1.8" fill="#FEF08A" stroke="#1E1B4B" stroke-width="1.2"/>

        <!-- Row 2 -->
        <rect x="17" y="41" width="7" height="5.5" rx="1.8" fill="#FFFFFF" stroke="#1E1B4B" stroke-width="1.2"/>
        <rect x="26.5" y="41" width="7" height="5.5" rx="1.8" fill="#FFFFFF" stroke="#1E1B4B" stroke-width="1.2"/>
        <rect x="36" y="41" width="7" height="5.5" rx="1.8" fill="#FEF08A" stroke="#1E1B4B" stroke-width="1.2"/>

        <!-- Row 3 -->
        <rect x="17" y="49" width="7" height="5.5" rx="1.8" fill="#EF4444" stroke="#1E1B4B" stroke-width="1.2"/>
        <rect x="26.5" y="49" width="7" height="5.5" rx="1.8" fill="#FFFFFF" stroke="#1E1B4B" stroke-width="1.2"/>
        <rect x="36" y="49" width="7" height="5.5" rx="1.8" fill="#10B981" stroke="#1E1B4B" stroke-width="1.2"/>

        <!-- Floating 3D Pi (π) Symbol on top-left -->
        <g class="float-math-pi" transform="translate(6, 6)">
          <ellipse cx="6" cy="12" rx="6" ry="2" fill="#B45309" fill-opacity="0.3"/>
          <text x="6" y="11" text-anchor="middle" font-size="11" font-weight="900" fill="#F59E0B" font-family="'Plus Jakarta Sans', serif">π</text>
        </g>

        <!-- Floating 3D Square Root x (√x) Symbol on top-right -->
        <g class="float-math-sqrt" transform="translate(46, 6)">
          <ellipse cx="6" cy="12" rx="7" ry="2" fill="#B45309" fill-opacity="0.3"/>
          <text x="6" y="11" text-anchor="middle" font-size="10" font-weight="900" fill="#F59E0B" font-family="'Plus Jakarta Sans', serif">√x</text>
        </g>

        <!-- Math Operator Spark -->
        <text x="49" y="19" fill="#D97706" font-size="10" font-weight="900" font-family="system-ui">÷</text>
      </svg>
    </div>
  `,

  // 3. Social Science Globe Icon - 3D Celestial Blue & Emerald Globe on Metallic Curved Stand
  socialGlobeIcon: (size = 42) => `
    <div class="anim-icon-wrap anim-social-wrap" style="width: ${size}px; height: ${size}px;" title="Social Science">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="anim-subject-svg svg-globe">
        <defs>
          <linearGradient id="socOceanGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38BDF8"/>
            <stop offset="45%" stop-color="#0284C7"/>
            <stop offset="100%" stop-color="#0369A1"/>
          </linearGradient>
          <linearGradient id="socLandGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4ADE80"/>
            <stop offset="100%" stop-color="#15803D"/>
          </linearGradient>
        </defs>
        <!-- Shadow Base -->
        <ellipse cx="32" cy="58" rx="16" ry="3.5" fill="#0284C7" fill-opacity="0.25"/>

        <!-- Sturdy Metallic Stand -->
        <ellipse cx="32" cy="56" rx="14" ry="4" fill="#64748B" stroke="#1E1B4B" stroke-width="2.5"/>
        <path d="M30 46 L34 46 L34 56 L30 56 Z" fill="#94A3B8" stroke="#1E1B4B" stroke-width="2.2"/>
        
        <!-- Curved Metallic Arm holding globe -->
        <path d="M14 31 C14 43 22 50 32 50 C42 50 50 43 50 31" fill="none" stroke="#64748B" stroke-width="3.6" stroke-linecap="round"/>
        <path d="M15 31 C15 42 22.5 48.5 32 48.5 C41.5 48.5 49 42 49 31" fill="none" stroke="#CBD5E1" stroke-width="1.6" stroke-linecap="round"/>

        <!-- Globe Sphere -->
        <circle cx="32" cy="29" r="18" fill="url(#socOceanGrad_${size})" stroke="#1E1B4B" stroke-width="3.2"/>

        <!-- Continents (Emerald green landmasses) -->
        <path d="M22 23 C25 18 33 16 36 21 C38 25 33 30 28 32 C23 31 19 27 22 23 Z" fill="url(#socLandGrad_${size})"/>
        <path d="M38 28 C42 26 48 29 46 35 C44 39 39 40 37 36 Z" fill="url(#socLandGrad_${size})"/>
        <path d="M26 38 C29 36 34 38 33 43 C31 46 25 45 26 38 Z" fill="#15803D"/>

        <!-- Latitude/Longitude Coordinates Lines -->
        <ellipse cx="32" cy="29" rx="18" ry="6" fill="none" stroke="#BAE6FD" stroke-width="1.1" stroke-dasharray="3 2"/>
        <ellipse cx="32" cy="29" rx="7" ry="18" fill="none" stroke="#BAE6FD" stroke-width="1.1" stroke-dasharray="3 2"/>

        <!-- Gloss Reflection Streak on Upper Globe -->
        <path d="M24 18 C28 15 34 15 37 17" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="21" cy="22" r="1.5" fill="#FFFFFF"/>

        <!-- Axis Pin at Top -->
        <line x1="32" y1="9" x2="32" y2="12" stroke="#1E1B4B" stroke-width="3" stroke-linecap="round"/>
        <circle cx="32" cy="9" r="2.5" fill="#FBBF24" stroke="#1E1B4B" stroke-width="1.8"/>
      </svg>
    </div>
  `,

  // 4. English Book Icon - Dynamic 3D Fanning Open Book with Moving Pages & Floating ABC (Matching Reference Image)
  englishBookIcon: (size = 42) => `
    <div class="anim-icon-wrap anim-fanning-book-wrap anim-english-wrap" style="width: ${size}px; height: ${Math.round(size * 0.86)}px;" title="English" data-subject="english">
      <svg width="${size}" height="${Math.round(size * 0.86)}" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg" class="fanning-book-svg fanning-book-english">
        <defs>
          <linearGradient id="engCoverGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E11D48"/>
            <stop offset="100%" stop-color="#BE123C"/>
          </linearGradient>
          <linearGradient id="pageIvoryLight_${size}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#FFFDF5"/>
          </linearGradient>
          <linearGradient id="pageIvoryWarm_${size}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFFDF7"/>
            <stop offset="100%" stop-color="#FEF3C7"/>
          </linearGradient>
          <linearGradient id="flipPageGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="65%" stop-color="#FFFBEB"/>
            <stop offset="100%" stop-color="#FDE68A"/>
          </linearGradient>
        </defs>

        <!-- Ambient Ground Shadow -->
        <ellipse cx="60" cy="89" rx="46" ry="5.5" fill="#1E1B4B" fill-opacity="0.16"/>

        <!-- Hardcover Base & Trim -->
        <path d="M60 85 C42 85 22 81 8 75 L6 80 C22 86 42 90 60 90 C78 90 98 86 114 80 L112 75 C98 81 78 85 60 85 Z" fill="#881337"/>
        <path d="M60 84 C42 84 24 80 8 74 L18 53 C32 59 46 62 60 63 Z" fill="url(#engCoverGrad_${size})" stroke="#991B1B" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M60 84 C78 84 96 80 112 74 L102 53 C88 59 74 62 60 63 Z" fill="url(#engCoverGrad_${size})" stroke="#991B1B" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M53 84 C53 89 67 89 67 84 C67 80 53 80 53 84 Z" fill="#881337" stroke="#991B1B" stroke-width="1.5"/>

        <!-- Base Open Pages Stack -->
        <path d="M60 81 C44 81 28 77 12 72 L20 53 C34 58 47 61 60 62 Z" fill="url(#pageIvoryLight_${size})" stroke="#991B1B" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M57 64 C46 63 35 60 23 56 L16 69 C29 73 43 76 57 77 Z" fill="none" stroke="#FDE68A" stroke-width="0.9"/>
        <line x1="26" y1="59" x2="52" y2="66" stroke="#FCD34D" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="23" y1="64" x2="49" y2="71" stroke="#FCD34D" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="20" y1="69" x2="44" y2="76" stroke="#FCD34D" stroke-width="1.3" stroke-linecap="round"/>

        <path d="M60 81 C76 81 92 77 108 72 L100 53 C86 58 73 61 60 62 Z" fill="url(#pageIvoryLight_${size})" stroke="#991B1B" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M63 64 C74 63 85 60 97 56 L104 69 C91 73 77 76 63 77 Z" fill="none" stroke="#FDE68A" stroke-width="0.9"/>
        <line x1="94" y1="59" x2="68" y2="66" stroke="#FCD34D" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="97" y1="64" x2="71" y2="71" stroke="#FCD34D" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="100" y1="69" x2="76" y2="76" stroke="#FCD34D" stroke-width="1.3" stroke-linecap="round"/>

        <!-- Fanning Pages (Isometric 3D Arc matching reference) -->
        <g class="fanning-sheet sheet-left-low">
          <path d="M60 79 L22 48 L36 30 L60 72 Z" fill="url(#pageIvoryWarm_${size})" stroke="#991B1B" stroke-width="1.4" stroke-linejoin="round"/>
          <line x1="30" y1="46" x2="46" y2="42" stroke="#F59E0B" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="34" y1="53" x2="51" y2="49" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <g class="fanning-sheet sheet-right-low">
          <path d="M60 79 L98 48 L84 30 L60 72 Z" fill="url(#pageIvoryWarm_${size})" stroke="#991B1B" stroke-width="1.4" stroke-linejoin="round"/>
          <line x1="90" y1="46" x2="74" y2="42" stroke="#F59E0B" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="86" y1="53" x2="69" y2="49" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <g class="fanning-sheet sheet-left-mid">
          <path d="M60 78 L34 33 L49 20 L60 71 Z" fill="url(#pageIvoryLight_${size})" stroke="#991B1B" stroke-width="1.4" stroke-linejoin="round"/>
          <line x1="42" y1="34" x2="50" y2="31" stroke="#F59E0B" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="44" y1="42" x2="52" y2="39" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <!-- Dynamic Moving Page 1 (Flutters on hover, flips on click) -->
        <g class="fanning-sheet fanning-flip-page-1" style="transform-origin: 60px 76px;">
          <path d="M60 77 L48 19 L58 14 L60 70 Z" fill="url(#flipPageGrad_${size})" stroke="#991B1B" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M51 24 L56 21 L58 57 L53 59 Z" fill="none" stroke="#FDE68A" stroke-width="0.8"/>
          <line x1="53" y1="27" x2="56" y2="25" stroke="#D97706" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="53" y1="35" x2="57" y2="33" stroke="#F59E0B" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="54" y1="43" x2="58" y2="41" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <!-- Dynamic Moving Page 2 (Flutters on hover, flips on click) -->
        <g class="fanning-sheet fanning-flip-page-2" style="transform-origin: 60px 76px;">
          <path d="M60 77 L72 19 L62 14 L60 70 Z" fill="url(#flipPageGrad_${size})" stroke="#991B1B" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M69 24 L64 21 L62 57 L67 59 Z" fill="none" stroke="#FDE68A" stroke-width="0.8"/>
          <line x1="67" y1="27" x2="64" y2="25" stroke="#D97706" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="67" y1="35" x2="63" y2="33" stroke="#F59E0B" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="66" y1="43" x2="62" y2="41" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <g class="fanning-sheet sheet-right-mid">
          <path d="M60 78 L86 33 L71 20 L60 71 Z" fill="url(#pageIvoryLight_${size})" stroke="#991B1B" stroke-width="1.4" stroke-linejoin="round"/>
          <line x1="78" y1="34" x2="70" y2="31" stroke="#F59E0B" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="76" y1="42" x2="68" y2="39" stroke="#FDE68A" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <!-- Golden Spine Bookmark Ribbon -->
        <path d="M58 73 L58 93 L60 91 L62 93 L62 73 Z" fill="#FBBF24" stroke="#991B1B" stroke-width="1"/>

        <!-- Floating 3D Alphabet Letters ABC above fanning pages -->
        <g class="float-fanning-letters">
          <g class="fanning-letter-a" transform="translate(32, 2)">
            <ellipse cx="6" cy="14" rx="5" ry="1.8" fill="#BE123C" fill-opacity="0.2"/>
            <text x="6" y="11" text-anchor="middle" font-size="14" font-weight="900" fill="#F43F5E" font-family="'Plus Jakarta Sans', sans-serif">A</text>
          </g>
          <g class="fanning-letter-b" transform="translate(54, -3)">
            <ellipse cx="6" cy="14" rx="5" ry="1.8" fill="#6D28D9" fill-opacity="0.2"/>
            <text x="6" y="10" text-anchor="middle" font-size="16" font-weight="900" fill="#8B5CF6" font-family="'Plus Jakarta Sans', sans-serif">B</text>
          </g>
          <g class="fanning-letter-c" transform="translate(76, 2)">
            <ellipse cx="6" cy="14" rx="5" ry="1.8" fill="#0284C7" fill-opacity="0.2"/>
            <text x="6" y="11" text-anchor="middle" font-size="14" font-weight="900" fill="#0EA5E9" font-family="'Plus Jakarta Sans', sans-serif">C</text>
          </g>
          <!-- Golden Magic Sparks -->
          <path d="M22 14 L23.5 17 L26 18 L23.5 19 L22 22 L20.5 19 L18 18 L20.5 17 Z" fill="#FBBF24"/>
          <path d="M98 14 L99.5 17 L102 18 L99.5 19 L98 22 L96.5 19 L94 18 L96.5 17 Z" fill="#FBBF24"/>
        </g>
      </svg>
    </div>
  `,

  // ========================================================
  // 3D GLOSSY HEXAGONAL ACHIEVEMENT BADGES (Milestones)
  // ========================================================

  // Badge 1: Consistent Learner - 3D Purple Hexagon with Flame Emblem
  badgeConsistentLearner: (size = 54) => `
    <div class="badge-hex-anim" style="width: ${size}px; height: ${size}px;" title="Consistent Learner">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hexPurpleGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#C4B5FD"/>
            <stop offset="30%" stop-color="#8B5CF6"/>
            <stop offset="100%" stop-color="#5B21B6"/>
          </linearGradient>
          <linearGradient id="flameGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="50%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#EF4444"/>
          </linearGradient>
        </defs>
        <!-- Drop Shadow -->
        <polygon points="32,8 57,21 57,47 32,59 7,47 7,21" fill="#4C1D95" fill-opacity="0.3"/>
        <!-- Main 3D Hexagon Body -->
        <polygon points="32,5 56,18 56,44 32,57 8,44 8,18" fill="url(#hexPurpleGrad_${size})" stroke="#DDD6FE" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Top Half Gloss Highlight -->
        <path d="M32 5 L56 18 L56 31 C56 31 43 25 32 25 C21 25 8 31 8 31 L8 18 Z" fill="#FFFFFF" fill-opacity="0.35"/>
        
        <!-- Glowing Flame & Bookmark Emblem -->
        <circle cx="32" cy="31" r="14" fill="#6D28D9" fill-opacity="0.6"/>
        <!-- Ribbon Bookmark -->
        <path d="M28 20 L36 20 L36 38 L32 35 L28 38 Z" fill="#FBBF24" stroke="#78350F" stroke-width="1.2"/>
        <!-- Flame -->
        <path d="M32 18 C35 24 38 27 38 31 C38 34.5 35.3 37 32 37 C28.7 37 26 34.5 26 31 C26 27 29 24 32 18 Z" fill="url(#flameGrad_${size})"/>
        <path d="M32 24 C33.5 27 35 29 35 31 C35 33 33.7 34.5 32 34.5 C30.3 34.5 29 33 29 31 C29 29 30.5 27 32 24 Z" fill="#FFFFFF" fill-opacity="0.8"/>
      </svg>
    </div>
  `,

  // Badge 2: Quiz Master - 3D Gold Hexagon with Golden Trophy Cup
  badgeQuizMaster: (size = 54) => `
    <div class="badge-hex-anim" style="width: ${size}px; height: ${size}px;" title="Quiz Master">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hexGoldGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A"/>
            <stop offset="35%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#B45309"/>
          </linearGradient>
          <linearGradient id="trophyGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="30%" stop-color="#FDE047"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
        </defs>
        <!-- Drop Shadow -->
        <polygon points="32,8 57,21 57,47 32,59 7,47 7,21" fill="#78350F" fill-opacity="0.3"/>
        <!-- Main 3D Hexagon Body -->
        <polygon points="32,5 56,18 56,44 32,57 8,44 8,18" fill="url(#hexGoldGrad_${size})" stroke="#FEF9C3" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Top Half Gloss Highlight -->
        <path d="M32 5 L56 18 L56 31 C56 31 43 25 32 25 C21 25 8 31 8 31 L8 18 Z" fill="#FFFFFF" fill-opacity="0.4"/>

        <!-- Center 3D Golden Trophy Cup -->
        <circle cx="32" cy="31" r="14" fill="#92400E" fill-opacity="0.4"/>
        
        <!-- Trophy Handles -->
        <path d="M21 24 C17 24 17 31 22 31" fill="none" stroke="#FEF08A" stroke-width="2" stroke-linecap="round"/>
        <path d="M43 24 C47 24 47 31 42 31" fill="none" stroke="#FEF08A" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Trophy Cup Body -->
        <path d="M22 21 L42 21 L40 32 C39 36 35 38 32 38 C29 38 25 36 24 32 Z" fill="url(#trophyGrad_${size})" stroke="#78350F" stroke-width="1.4"/>
        <!-- Trophy Stem & Base -->
        <rect x="30" y="38" width="4" height="4" fill="#FDE047" stroke="#78350F" stroke-width="1"/>
        <rect x="25" y="42" width="14" height="3" rx="1.5" fill="#FEF08A" stroke="#78350F" stroke-width="1.2"/>
        
        <!-- Star on Trophy -->
        <path d="M32 24 L33.2 26.8 L36 27.2 L34 29 L34.5 32 L32 30.5 L29.5 32 L30 29 L28 27.2 L30.8 26.8 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  `,

  // Badge 3: Chapter Completer - 3D Cyan Hexagon with Open Book & Ribbon
  badgeChapterCompleter: (size = 54) => `
    <div class="badge-hex-anim" style="width: ${size}px; height: ${size}px;" title="Chapter Completer">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hexCyanGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#BAE6FD"/>
            <stop offset="35%" stop-color="#0284C7"/>
            <stop offset="100%" stop-color="#075985"/>
          </linearGradient>
        </defs>
        <!-- Drop Shadow -->
        <polygon points="32,8 57,21 57,47 32,59 7,47 7,21" fill="#0C4A6E" fill-opacity="0.3"/>
        <!-- Main 3D Hexagon Body -->
        <polygon points="32,5 56,18 56,44 32,57 8,44 8,18" fill="url(#hexCyanGrad_${size})" stroke="#E0F2FE" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Top Half Gloss Highlight -->
        <path d="M32 5 L56 18 L56 31 C56 31 43 25 32 25 C21 25 8 31 8 31 L8 18 Z" fill="#FFFFFF" fill-opacity="0.38"/>

        <!-- Center 3D Open Book -->
        <circle cx="32" cy="31" r="14" fill="#0369A1" fill-opacity="0.5"/>
        
        <!-- Open Pages -->
        <path d="M32 38 C28 35 22 35 18 37 L18 25 C22 23 28 23 32 25 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.2"/>
        <path d="M32 38 C36 35 42 35 46 37 L46 25 C42 23 36 23 32 25 Z" fill="#F0F9FF" stroke="#0F172A" stroke-width="1.2"/>
        
        <!-- Bookmark Ribbon -->
        <path d="M31 25 L31 41 L32.5 39 L34 41 L34 25 Z" fill="#F59E0B"/>
        <!-- Page lines -->
        <line x1="21" y1="28" x2="28" y2="28" stroke="#38BDF8" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="21" y1="32" x2="28" y2="32" stroke="#94A3B8" stroke-width="1" stroke-linecap="round"/>
        <line x1="36" y1="28" x2="43" y2="28" stroke="#38BDF8" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="36" y1="32" x2="43" y2="32" stroke="#94A3B8" stroke-width="1" stroke-linecap="round"/>
      </svg>
    </div>
  `,

  // Badge 4: Subject Explorer - 3D Amber/Orange Hexagon with Compass Star
  badgeSubjectExplorer: (size = 54) => `
    <div class="badge-hex-anim" style="width: ${size}px; height: ${size}px;" title="Subject Explorer">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hexAmbGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FED7AA"/>
            <stop offset="35%" stop-color="#F97316"/>
            <stop offset="100%" stop-color="#C2410C"/>
          </linearGradient>
        </defs>
        <!-- Drop Shadow -->
        <polygon points="32,8 57,21 57,47 32,59 7,47 7,21" fill="#7C2D12" fill-opacity="0.3"/>
        <!-- Main 3D Hexagon Body -->
        <polygon points="32,5 56,18 56,44 32,57 8,44 8,18" fill="url(#hexAmbGrad_${size})" stroke="#FFEDD5" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Top Half Gloss Highlight -->
        <path d="M32 5 L56 18 L56 31 C56 31 43 25 32 25 C21 25 8 31 8 31 L8 18 Z" fill="#FFFFFF" fill-opacity="0.4"/>

        <!-- Center 8-Point Compass Star / Target -->
        <circle cx="32" cy="31" r="14" fill="#9A3412" fill-opacity="0.5"/>
        <circle cx="32" cy="31" r="11" fill="none" stroke="#FEF08A" stroke-width="1.2" stroke-dasharray="2 2"/>
        
        <!-- 4 Major Compass Points -->
        <polygon points="32,18 34,28 32,31 30,28" fill="#FFFFFF"/>
        <polygon points="32,44 34,34 32,31 30,34" fill="#FEF08A"/>
        <polygon points="45,31 35,33 32,31 35,29" fill="#FEF08A"/>
        <polygon points="19,31 29,33 32,31 29,29" fill="#FFFFFF"/>
        
        <!-- Center Gold Hub -->
        <circle cx="32" cy="31" r="3" fill="#FDE047" stroke="#78350F" stroke-width="1"/>
      </svg>
    </div>
  `,

  // 5. Tamil Subject 3D Book Icon - Dynamic 3D Fanning Open Book with Moving Pages & Leaves (Matching Reference Image)
  tamilSubjectIcon: (size = 96) => `
    <div class="anim-icon-wrap anim-fanning-book-wrap anim-tamil-wrap" style="width: ${size}px; height: ${Math.round(size * 0.86)}px;" title="தமிழ்" data-subject="tamil">
      <svg width="${size}" height="${Math.round(size * 0.86)}" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg" class="fanning-book-svg fanning-book-tamil">
        <defs>
          <linearGradient id="tamCoverGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9333EA"/>
            <stop offset="100%" stop-color="#7E22CE"/>
          </linearGradient>
          <linearGradient id="tamIvoryLight_${size}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#FAF5FF"/>
          </linearGradient>
          <linearGradient id="tamIvoryWarm_${size}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFFDF7"/>
            <stop offset="100%" stop-color="#F3E8FF"/>
          </linearGradient>
          <linearGradient id="tamFlipGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="65%" stop-color="#FAF5FF"/>
            <stop offset="100%" stop-color="#E9D5FF"/>
          </linearGradient>
        </defs>

        <!-- Ambient Ground Shadow -->
        <ellipse cx="60" cy="89" rx="46" ry="5.5" fill="#7C3AED" fill-opacity="0.18"/>

        <!-- Hardcover Base & Trim -->
        <path d="M60 85 C42 85 22 81 8 75 L6 80 C22 86 42 90 60 90 C78 90 98 86 114 80 L112 75 C98 81 78 85 60 85 Z" fill="#581C87"/>
        <path d="M60 84 C42 84 24 80 8 74 L18 53 C32 59 46 62 60 63 Z" fill="url(#tamCoverGrad_${size})" stroke="#6B21A8" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M60 84 C78 84 96 80 112 74 L102 53 C88 59 74 62 60 63 Z" fill="url(#tamCoverGrad_${size})" stroke="#6B21A8" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M53 84 C53 89 67 89 67 84 C67 80 53 80 53 84 Z" fill="#581C87" stroke="#6B21A8" stroke-width="1.5"/>

        <!-- Base Open Pages Stack -->
        <path d="M60 81 C44 81 28 77 12 72 L20 53 C34 58 47 61 60 62 Z" fill="url(#tamIvoryLight_${size})" stroke="#6B21A8" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M57 64 C46 63 35 60 23 56 L16 69 C29 73 43 76 57 77 Z" fill="none" stroke="#E9D5FF" stroke-width="0.9"/>
        <line x1="26" y1="59" x2="52" y2="66" stroke="#C084FC" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="23" y1="64" x2="49" y2="71" stroke="#C084FC" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="20" y1="69" x2="44" y2="76" stroke="#C084FC" stroke-width="1.3" stroke-linecap="round"/>

        <path d="M60 81 C76 81 92 77 108 72 L100 53 C86 58 73 61 60 62 Z" fill="url(#tamIvoryLight_${size})" stroke="#6B21A8" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M63 64 C74 63 85 60 97 56 L104 69 C91 73 77 76 63 77 Z" fill="none" stroke="#E9D5FF" stroke-width="0.9"/>
        <line x1="94" y1="59" x2="68" y2="66" stroke="#C084FC" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="97" y1="64" x2="71" y2="71" stroke="#C084FC" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="100" y1="69" x2="76" y2="76" stroke="#C084FC" stroke-width="1.3" stroke-linecap="round"/>

        <!-- Fanning Pages (Isometric 3D Arc matching reference) -->
        <g class="fanning-sheet sheet-left-low">
          <path d="M60 79 L22 48 L36 30 L60 72 Z" fill="url(#tamIvoryWarm_${size})" stroke="#6B21A8" stroke-width="1.4" stroke-linejoin="round"/>
          <line x1="30" y1="46" x2="46" y2="42" stroke="#A855F7" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="34" y1="53" x2="51" y2="49" stroke="#E9D5FF" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <g class="fanning-sheet sheet-right-low">
          <path d="M60 79 L98 48 L84 30 L60 72 Z" fill="url(#tamIvoryWarm_${size})" stroke="#6B21A8" stroke-width="1.4" stroke-linejoin="round"/>
          <line x1="90" y1="46" x2="74" y2="42" stroke="#A855F7" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="86" y1="53" x2="69" y2="49" stroke="#E9D5FF" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <g class="fanning-sheet sheet-left-mid">
          <path d="M60 78 L34 33 L49 20 L60 71 Z" fill="url(#tamIvoryLight_${size})" stroke="#6B21A8" stroke-width="1.4" stroke-linejoin="round"/>
          <line x1="42" y1="34" x2="50" y2="31" stroke="#A855F7" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="44" y1="42" x2="52" y2="39" stroke="#E9D5FF" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <!-- Dynamic Moving Page 1 (Flutters on hover, flips on click) -->
        <g class="fanning-sheet fanning-flip-page-1" style="transform-origin: 60px 76px;">
          <path d="M60 77 L48 19 L58 14 L60 70 Z" fill="url(#tamFlipGrad_${size})" stroke="#6B21A8" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M51 24 L56 21 L58 57 L53 59 Z" fill="none" stroke="#E9D5FF" stroke-width="0.8"/>
          <line x1="53" y1="27" x2="56" y2="25" stroke="#9333EA" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="53" y1="35" x2="57" y2="33" stroke="#C084FC" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="54" y1="43" x2="58" y2="41" stroke="#E9D5FF" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <!-- Dynamic Moving Page 2 (Flutters on hover, flips on click) -->
        <g class="fanning-sheet fanning-flip-page-2" style="transform-origin: 60px 76px;">
          <path d="M60 77 L72 19 L62 14 L60 70 Z" fill="url(#tamFlipGrad_${size})" stroke="#6B21A8" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M69 24 L64 21 L62 57 L67 59 Z" fill="none" stroke="#E9D5FF" stroke-width="0.8"/>
          <line x1="67" y1="27" x2="64" y2="25" stroke="#9333EA" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="67" y1="35" x2="63" y2="33" stroke="#C084FC" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="66" y1="43" x2="62" y2="41" stroke="#E9D5FF" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <g class="fanning-sheet sheet-right-mid">
          <path d="M60 78 L86 33 L71 20 L60 71 Z" fill="url(#tamIvoryLight_${size})" stroke="#6B21A8" stroke-width="1.4" stroke-linejoin="round"/>
          <line x1="78" y1="34" x2="70" y2="31" stroke="#A855F7" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="76" y1="42" x2="68" y2="39" stroke="#E9D5FF" stroke-width="1.2" stroke-linecap="round"/>
        </g>

        <!-- Golden Spine Bookmark Ribbon -->
        <path d="M58 73 L58 93 L60 91 L62 93 L62 73 Z" fill="#FBBF24" stroke="#6B21A8" stroke-width="1"/>

        <!-- Sprouting Green Leaves on Top & Golden/Purple Tamil Script -->
        <g class="float-fanning-tamil">
          <!-- Sprouting green leaves at top-right -->
          <path d="M68 12 C75 4 87 6 91 15 C84 20 73 19 68 12 Z" fill="#22C55E" stroke="#15803D" stroke-width="1.2"/>
          <path d="M68 12 C70 4 63 1 57 4 C59 11 64 12 68 12 Z" fill="#4ADE80"/>
          <!-- Tamil typography 'தமிழ்' floating gracefully above center-right page -->
          <g transform="translate(54, 4)">
            <text x="14" y="9" text-anchor="middle" font-size="14" font-weight="900" fill="#9333EA" font-family="'Noto Sans Tamil', 'Latha', 'Mukta Malar', 'Plus Jakarta Sans', sans-serif">தமிழ்</text>
          </g>
          <!-- Golden Sparkles -->
          <path d="M24 16 L25.5 19 L28 20 L25.5 21 L24 24 L22.5 21 L20 20 L22.5 19 Z" fill="#FBBF24"/>
          <path d="M96 20 L97.5 22 L99 23 L97.5 24 L96 26 L94.5 24 L93 23 L94.5 22 Z" fill="#FBBF24"/>
        </g>
      </svg>
    </div>
  `,

  // 6. Tamil Letter Glyph Icon - Rounded Violet 3D container with Tamil 'க' (for In-Progress and Completed rows)
  tamilLetterIcon: (size = 46) => `
    <div class="anim-icon-wrap anim-tamil-wrap" style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;" title="தமிழ்">
      <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tamIconBg_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F3E8FF"/>
            <stop offset="100%" stop-color="#E9D5FF"/>
          </linearGradient>
          <linearGradient id="tamGlyphGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9333EA"/>
            <stop offset="100%" stop-color="#6B21A8"/>
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#tamIconBg_${size})"/>
        <!-- Tamil Letter 'க' 3D Shadow -->
        <text x="24.5" y="32.5" text-anchor="middle" font-size="25" font-weight="900" fill="#7E22CE" fill-opacity="0.25" font-family="'Noto Sans Tamil', 'Latha', 'Mukta Malar', 'Plus Jakarta Sans', sans-serif">க</text>
        <!-- Tamil Letter 'க' Main Glyph -->
        <text x="24" y="31.5" text-anchor="middle" font-size="25" font-weight="900" fill="url(#tamGlyphGrad_${size})" font-family="'Noto Sans Tamil', 'Latha', 'Mukta Malar', 'Plus Jakarta Sans', sans-serif">க</text>
        <!-- Gloss highlight -->
        <path d="M10 8 C18 6 30 6 38 8 C28 14 20 14 10 8 Z" fill="#FFFFFF" fill-opacity="0.5"/>
      </svg>
    </div>
  `,

  // 7. Heat & Thermodynamics 3D Graphic (for Chapter 3: Heat Video Lesson)
  heatWaveIllustration: (width = 340, height = 240) => `
    <svg width="${width}" height="${height}" viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="heat-3d-illustration">
      <defs>
        <radialGradient id="heatBgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1E1B4B"/>
          <stop offset="60%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
        <linearGradient id="flameOrange" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#EA580C"/>
          <stop offset="40%" stop-color="#F97316"/>
          <stop offset="80%" stop-color="#FBBF24"/>
          <stop offset="100%" stop-color="#FEF08A"/>
        </linearGradient>
        <linearGradient id="coolCyan" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#0284C7"/>
          <stop offset="50%" stop-color="#06B6D4"/>
          <stop offset="100%" stop-color="#67E8F9"/>
        </linearGradient>
        <filter id="thermalGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="glow"/>
          <feComposite in="SourceGraphic" in2="glow" operator="over"/>
        </filter>
      </defs>

      <!-- Thermal Backdrop Stage -->
      <rect width="340" height="240" rx="16" fill="url(#heatBgGrad)"/>

      <!-- Ambient Heat Auras -->
      <circle cx="105" cy="120" r="75" fill="#F97316" fill-opacity="0.25" filter="url(#thermalGlow)"/>
      <circle cx="235" cy="120" r="75" fill="#06B6D4" fill-opacity="0.2" filter="url(#thermalGlow)"/>

      <!-- Fiery Thermal Wave on Left (Hot Zone) -->
      <path d="M60 180 C50 150 70 120 90 100 C110 80 120 50 110 30 C130 60 140 100 120 130 C105 155 85 170 60 180 Z" 
            fill="url(#flameOrange)" filter="url(#thermalGlow)"/>
      <path d="M80 180 C70 155 85 130 100 115 C115 100 125 75 120 55 C135 80 140 115 125 140 C115 160 100 172 80 180 Z" 
            fill="#FEF08A" opacity="0.8"/>

      <!-- Cool Convection Waves on Right (Cold Zone) -->
      <path d="M280 180 C290 150 270 120 250 100 C230 80 220 50 230 30 C210 60 200 100 220 130 C235 155 255 170 280 180 Z" 
            fill="url(#coolCyan)" filter="url(#thermalGlow)"/>

      <!-- Central Laboratory Thermometer -->
      <!-- Outer Glass Tube -->
      <rect x="162" y="40" width="16" height="130" rx="8" fill="#FFFFFF" fill-opacity="0.2" stroke="#FFFFFF" stroke-width="2.5"/>
      <!-- Bulb at Bottom -->
      <circle cx="170" cy="175" r="18" fill="#EF4444" stroke="#FFFFFF" stroke-width="2.5"/>
      <!-- Mercury Column Inside -->
      <rect x="166" y="80" width="8" height="90" rx="4" fill="#EF4444"/>
      <!-- Thermometer Graduation Marks -->
      <line x1="180" y1="60" x2="185" y2="60" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="180" y1="75" x2="188" y2="75" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <line x1="180" y1="90" x2="185" y2="90" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="180" y1="105" x2="188" y2="105" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <line x1="180" y1="120" x2="185" y2="120" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="180" y1="135" x2="188" y2="135" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <line x1="180" y1="150" x2="185" y2="150" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>

      <!-- Glass Bulb Reflection Highlights -->
      <ellipse cx="166" cy="170" rx="5" ry="8" fill="#FFFFFF" fill-opacity="0.6"/>
      <path d="M165 48 L165 140" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="8 6" opacity="0.7"/>

      <!-- Temperature Heat Sparks -->
      <circle cx="95" cy="85" r="3" fill="#FBBF24" class="svg-bubble b1"/>
      <circle cx="130" cy="115" r="2.5" fill="#EF4444" class="svg-bubble b2"/>
      <circle cx="215" cy="95" r="2.5" fill="#67E8F9" class="svg-bubble b3"/>
      <circle cx="245" cy="130" r="3" fill="#38BDF8" class="svg-bubble b4"/>

      <!-- Degree Celsius Tag -->
      <text x="170" y="32" text-anchor="middle" fill="#FBBF24" font-size="12" font-weight="900" font-family="'Plus Jakarta Sans', sans-serif">100°C</text>
    </svg>
  `,

  // 3D Standalone Golden Trophy Cup (for Challenges & Milestones)
  goldTrophy: (size = 48) => `
    <div class="anim-trophy-wrap" style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tropGold_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A"/>
            <stop offset="35%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#B45309"/>
          </linearGradient>
          <linearGradient id="tropBase_${size}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#92400E"/>
            <stop offset="100%" stop-color="#451A03"/>
          </linearGradient>
          <linearGradient id="tropHighlight_${size}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <!-- Ambient Shadow -->
        <ellipse cx="50" cy="92" rx="28" ry="4.5" fill="#451A03" fill-opacity="0.2"/>
        
        <!-- Handles -->
        <path d="M28 32 C14 32 12 52 28 58 C30 58 31 56 31 54 C18 50 18 36 28 36 Z" fill="url(#tropGold_${size})" stroke="#78350F" stroke-width="2"/>
        <path d="M72 32 C86 32 88 52 72 58 C70 58 69 56 69 54 C82 50 82 36 72 36 Z" fill="url(#tropGold_${size})" stroke="#78350F" stroke-width="2"/>

        <!-- Trophy Cup Body -->
        <path d="M27 22 L73 22 L68 52 C65 64 57 70 50 70 C43 70 35 64 32 52 Z" fill="url(#tropGold_${size})" stroke="#78350F" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Inner Rim -->
        <ellipse cx="50" cy="22" rx="23" ry="5" fill="#FDE047" stroke="#78350F" stroke-width="2"/>
        <ellipse cx="50" cy="22" rx="19" ry="3.5" fill="#CA8A04"/>

        <!-- Gloss Highlight -->
        <path d="M34 26 C36 40 40 56 46 64 C42 60 38 48 36 30 Z" fill="url(#tropHighlight_${size})"/>

        <!-- Star on Front -->
        <path d="M50 34 L52.5 40 L59 40.5 L54 44.5 L55.5 51 L50 47.5 L44.5 51 L46 44.5 L41 40.5 L47.5 40 Z" fill="#FFFFFF" stroke="#B45309" stroke-width="1.2"/>

        <!-- Stem -->
        <path d="M46 70 L54 70 L55 78 L45 78 Z" fill="url(#tropGold_${size})" stroke="#78350F" stroke-width="2"/>
        
        <!-- Base Tiers -->
        <path d="M38 78 L62 78 L65 84 L35 84 Z" fill="url(#tropGold_${size})" stroke="#78350F" stroke-width="2"/>
        <rect x="30" y="84" width="40" height="7" rx="2" fill="url(#tropBase_${size})" stroke="#78350F" stroke-width="2"/>
        <rect x="40" y="86" width="20" height="3" rx="1" fill="#FEF08A"/>
      </svg>
    </div>
  `,

  // 3D Standalone Gold Star Icon
  goldStar: (size = 48) => `
    <div class="anim-star-wrap" style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="starGold_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A"/>
            <stop offset="40%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
        </defs>
        <!-- Shadow -->
        <ellipse cx="32" cy="56" rx="18" ry="3.5" fill="#451A03" fill-opacity="0.18"/>
        <!-- 3D Star Body -->
        <path d="M32 6 L39 21 L56 23 L43 35 L47 52 L32 43 L17 52 L21 35 L8 23 L25 21 Z" fill="url(#starGold_${size})" stroke="#B45309" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Face Highlight -->
        <path d="M32 10 L37 22 L49 24 L39 33 L32 40 Z" fill="#FFFFFF" fill-opacity="0.45"/>
      </svg>
    </div>
  `,

  // 3D Clipboard with checklist & yellow pencil matching Quiz Instructions Screen 4
  clipboardWithPencil: (size = 180) => `
    <div style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center; position: relative;">
      <svg width="${size}" height="${size}" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="clipBoardBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#C084FC"/>
            <stop offset="100%" stop-color="#7C3AED"/>
          </linearGradient>
          <linearGradient id="clipMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F1F5F9"/>
            <stop offset="50%" stop-color="#94A3B8"/>
            <stop offset="100%" stop-color="#64748B"/>
          </linearGradient>
          <linearGradient id="pencilWood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="100%" stop-color="#EAB308"/>
          </linearGradient>
          <filter id="clipDropShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#7C3AED" flood-opacity="0.22"/>
          </filter>
        </defs>

        <!-- Ambient aura -->
        <circle cx="80" cy="80" r="65" fill="#F5F3FF" opacity="0.8"/>

        <!-- Purple Clipboard Base -->
        <g filter="url(#clipDropShadow)">
          <rect x="26" y="22" width="86" height="116" rx="14" fill="url(#clipBoardBg)"/>
          
          <!-- Top metallic clip -->
          <rect x="52" y="14" width="34" height="15" rx="5" fill="url(#clipMetal)"/>
          <circle cx="69" cy="21" r="3" fill="#475569"/>

          <!-- White paper sheet -->
          <rect x="33" y="30" width="72" height="100" rx="8" fill="#FFFFFF"/>

          <!-- Checklist Rows -->
          <!-- Row 1 -->
          <circle cx="44" cy="48" r="4.5" fill="#EDE9FE"/>
          <path d="M42 48 L43.5 49.5 L46.5 46" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="52" y="46" width="42" height="4" rx="2" fill="#E2E8F0"/>

          <!-- Row 2 -->
          <circle cx="44" cy="64" r="4.5" fill="#EDE9FE"/>
          <path d="M42 64 L43.5 65.5 L46.5 62" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="52" y="62" width="38" height="4" rx="2" fill="#E2E8F0"/>

          <!-- Row 3 -->
          <circle cx="44" cy="80" r="4.5" fill="#EDE9FE"/>
          <path d="M42 80 L43.5 81.5 L46.5 78" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="52" y="78" width="44" height="4" rx="2" fill="#E2E8F0"/>

          <!-- Row 4 -->
          <circle cx="44" cy="96" r="4.5" fill="#EDE9FE"/>
          <path d="M42 96 L43.5 97.5 L46.5 94" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="52" y="94" width="34" height="4" rx="2" fill="#E2E8F0"/>
        </g>

        <!-- 3D Yellow Pencil angled across -->
        <g transform="rotate(-30 108 85)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.18))">
          <!-- Eraser -->
          <rect x="94" y="32" width="12" height="8" rx="2" fill="#F472B6"/>
          <rect x="94" y="38" width="12" height="4" fill="#94A3B8"/>
          <!-- Pencil Body -->
          <rect x="94" y="42" width="12" height="46" rx="1" fill="url(#pencilWood)"/>
          <line x1="98" y1="42" x2="98" y2="88" stroke="#CA8A04" stroke-width="1"/>
          <!-- Wooden Tip -->
          <polygon points="94,88 106,88 100,102" fill="#FDE68A"/>
          <!-- Graphite Lead -->
          <polygon points="98,97 102,97 100,102" fill="#334155"/>
        </g>

        <!-- Sparkles -->
        <path d="M125 35 L127 40 L132 41 L127 43 L125 48 L123 43 L118 41 L123 40 Z" fill="#FBBF24"/>
        <circle cx="28" cy="40" r="2.5" fill="#C084FC"/>
        <circle cx="120" cy="115" r="3" fill="#818CF8"/>
      </svg>
    </div>
  `,

  // Purple Document Icon with Green Check Badge for Submit Quiz Modal Screen 6
  quizSubmitDocIcon: (size = 72) => `
    <div style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center; position: relative;">
      <svg width="${size}" height="${size}" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="subDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#DDD6FE"/>
            <stop offset="100%" stop-color="#C084FC"/>
          </linearGradient>
          <filter id="subDocShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#7C3AED" flood-opacity="0.18"/>
          </filter>
        </defs>
        <!-- Document page -->
        <g filter="url(#subDocShadow)">
          <path d="M16 12 C16 8.7 18.7 6 22 6 L44 6 L56 18 L56 60 C56 63.3 53.3 66 50 66 L22 66 C18.7 66 16 63.3 16 60 Z" fill="#FFFFFF" stroke="#8B5CF6" stroke-width="2.5"/>
          <path d="M44 6 L44 18 L56 18 Z" fill="url(#subDocGrad)" stroke="#8B5CF6" stroke-width="2.5" stroke-linejoin="round"/>
          
          <!-- Document lines -->
          <rect x="24" y="24" width="24" height="3" rx="1.5" fill="#8B5CF6"/>
          <rect x="24" y="32" width="22" height="3" rx="1.5" fill="#C4B5FD"/>
          <rect x="24" y="40" width="18" height="3" rx="1.5" fill="#C4B5FD"/>
        </g>
        
        <!-- Green circle badge with white checkmark at bottom right -->
        <circle cx="50" cy="52" r="13" fill="#10B981" stroke="#FFFFFF" stroke-width="2.5"/>
        <path d="M45 52 L48.5 55.5 L55.5 48.5" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `,

  // Big Glowing Green Checkmark Circle with Confetti for Assignment Submission Success Screen 6
  successCheckBadge: (size = 96) => `
    <div style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center; position: relative;">
      <svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="succGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#34D399"/>
            <stop offset="100%" stop-color="#10B981"/>
          </linearGradient>
          <filter id="succGlow_${size}" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#10B981" flood-opacity="0.32"/>
          </filter>
        </defs>
        <!-- Ambient ring -->
        <circle cx="48" cy="48" r="44" fill="#ECFDF5"/>
        <!-- Main green circle with shadow -->
        <circle cx="48" cy="48" r="35" fill="url(#succGrad_${size})" filter="url(#succGlow_${size})"/>
        <!-- Thick white checkmark -->
        <path d="M35 48 L44 57 L61 40" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Floating colorful sparks -->
        <circle cx="20" cy="26" r="3" fill="#F59E0B"/>
        <circle cx="76" cy="22" r="3.5" fill="#3B82F6"/>
        <circle cx="82" cy="64" r="3" fill="#EC4899"/>
        <circle cx="16" cy="68" r="2.5" fill="#8B5CF6"/>
        <path d="M48 6 L50 11 L48 16 L46 11 Z" fill="#FBBF24"/>
      </svg>
    </div>
  `,

  // Badge: Quick Learner - 3D Blue/Purple Hexagon with Soaring Rocket
  badgeQuickLearner: (size = 54) => `
    <div class="badge-hex-anim" style="width: ${size}px; height: ${size}px;" title="Quick Learner">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hexRocketGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#A78BFA"/>
            <stop offset="30%" stop-color="#6366F1"/>
            <stop offset="100%" stop-color="#4338CA"/>
          </linearGradient>
          <linearGradient id="rocketBody_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#E2E8F0"/>
          </linearGradient>
          <linearGradient id="rocketFlame_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FBBF24"/>
            <stop offset="100%" stop-color="#EF4444"/>
          </linearGradient>
        </defs>
        <!-- Shadow -->
        <polygon points="32,8 57,21 57,47 32,59 7,47 7,21" fill="#312E81" fill-opacity="0.3"/>
        <!-- Main Hexagon Body -->
        <polygon points="32,5 56,18 56,44 32,57 8,44 8,18" fill="url(#hexRocketGrad_${size})" stroke="#C7D2FE" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Gloss Highlight -->
        <path d="M32 5 L56 18 L56 31 C56 31 43 25 32 25 C21 25 8 31 8 31 L8 18 Z" fill="#FFFFFF" fill-opacity="0.32"/>
        
        <!-- Center Emblem Circle -->
        <circle cx="32" cy="31" r="14" fill="#3730A3" fill-opacity="0.6"/>

        <!-- Rocket Flame -->
        <path d="M22 41 C24 40 26 42 27 45 C25 44 23 44 21 46 C21 44 21 42 22 41 Z" fill="url(#rocketFlame_${size})"/>
        <!-- Rocket Body (rotated angled at 45 deg) -->
        <g transform="rotate(45 32 31)">
          <!-- Rocket Nose & Body -->
          <path d="M32 17 C35 22 36 29 36 34 L28 34 C28 29 29 22 32 17 Z" fill="url(#rocketBody_${size})"/>
          <!-- Red Nose Cone -->
          <path d="M32 17 C34 20 34.5 22 34.5 24 L29.5 24 C29.5 22 30 20 32 17 Z" fill="#EF4444"/>
          <!-- Porthole Window -->
          <circle cx="32" cy="27" r="2.8" fill="#38BDF8" stroke="#1E293B" stroke-width="0.8"/>
          <!-- Wings / Fins -->
          <path d="M28 30 L24 35 L28 34 Z" fill="#EF4444"/>
          <path d="M36 30 L40 35 L36 34 Z" fill="#EF4444"/>
        </g>
      </svg>
    </div>
  `,

  // Badge: Assignment Star - 3D Blue/Purple Hexagon with Clipboard & Star
  badgeAssignmentStar: (size = 54) => `
    <div class="badge-hex-anim" style="width: ${size}px; height: ${size}px;" title="Assignment Star">
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hexAsgGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#93C5FD"/>
            <stop offset="35%" stop-color="#3B82F6"/>
            <stop offset="100%" stop-color="#1D4ED8"/>
          </linearGradient>
        </defs>
        <!-- Shadow -->
        <polygon points="32,8 57,21 57,47 32,59 7,47 7,21" fill="#1E3A8A" fill-opacity="0.3"/>
        <!-- Main Hexagon Body -->
        <polygon points="32,5 56,18 56,44 32,57 8,44 8,18" fill="url(#hexAsgGrad_${size})" stroke="#BFDBFE" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Gloss -->
        <path d="M32 5 L56 18 L56 31 C56 31 43 25 32 25 C21 25 8 31 8 31 L8 18 Z" fill="#FFFFFF" fill-opacity="0.32"/>
        
        <!-- Center Emblem Circle -->
        <circle cx="32" cy="31" r="14" fill="#1E40AF" fill-opacity="0.6"/>

        <!-- Mini Clipboard -->
        <rect x="23" y="20" width="18" height="23" rx="3" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.2"/>
        <rect x="28" y="18" width="8" height="4" rx="1.5" fill="#64748B"/>
        <line x1="26" y1="26" x2="33" y2="26" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="26" y1="30" x2="35" y2="30" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="26" y1="34" x2="31" y2="34" stroke="#CBD5E1" stroke-width="1.5" stroke-linecap="round"/>
        
        <!-- Golden Star on top -->
        <path d="M36 29 L37.5 33 L42 33.5 L38.5 36.5 L39.5 41 L36 38.5 L32.5 41 L33.5 36.5 L30 33.5 L34.5 33 Z" fill="#FBBF24" stroke="#B45309" stroke-width="1"/>
      </svg>
    </div>
  `,

  // Gold Ribbon Medal for Certificates Screen 5
  certificateMedal: (size = 48) => `
    <div style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
      <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="certGold_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="50%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <linearGradient id="ribbonRed_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F43F5E"/>
            <stop offset="100%" stop-color="#BE123C"/>
          </linearGradient>
        </defs>
        <!-- Ribbon Tails -->
        <path d="M19 28 L14 44 L22 40 L25 44 L23 28 Z" fill="url(#ribbonRed_${size})"/>
        <path d="M29 28 L34 44 L26 40 L23 44 L25 28 Z" fill="url(#ribbonRed_${size})"/>
        <!-- Gold Medallion Outer Circle -->
        <circle cx="24" cy="20" r="16" fill="url(#certGold_${size})" stroke="#B45309" stroke-width="1.5"/>
        <circle cx="24" cy="20" r="13" fill="#FEF08A" stroke="#CA8A04" stroke-width="1"/>
        <!-- Star Emblem -->
        <path d="M24 12 L26 17 L31 17.5 L27 21 L28.5 26 L24 23 L19.5 26 L21 21 L17 17.5 L22 17 Z" fill="#D97706"/>
      </svg>
    </div>
  `,

  // Target / Bullseye Graphic for Next Achievement Card
  targetBullseye: (size = 48) => `
    <div style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
      <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="targViolet_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8B5CF6"/>
            <stop offset="100%" stop-color="#6D28D9"/>
          </linearGradient>
          <linearGradient id="targOrange_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#EA580C"/>
          </linearGradient>
          <filter id="targShadow_${size}" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#6D28D9" flood-opacity="0.3"/>
          </filter>
        </defs>
        <!-- Outer Violet Ring -->
        <circle cx="24" cy="24" r="21" fill="url(#targViolet_${size})" filter="url(#targShadow_${size})"/>
        <!-- Ring 2 White -->
        <circle cx="24" cy="24" r="15" fill="#FFFFFF"/>
        <!-- Ring 3 Orange -->
        <circle cx="24" cy="24" r="10" fill="url(#targOrange_${size})"/>
        <!-- Bullseye Center Yellow -->
        <circle cx="24" cy="24" r="5" fill="#FEF08A"/>
        <!-- Little Sparkle -->
        <circle cx="24" cy="24" r="2" fill="#D97706"/>
        <path d="M36 12 L38 10 M38 12 L36 10" stroke="#FDE047" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  `,

  // 3D Golden Crown for Rank 1 Podium
  goldenCrown: (size = 28) => `
    <div style="width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
      <svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crownGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="50%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
          <filter id="crownGlow_${size}" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#F59E0B" flood-opacity="0.4"/>
          </filter>
        </defs>
        <!-- Crown Body -->
        <path d="M4 23 L6 11 L12 17 L16 8 L20 17 L26 11 L28 23 Z" fill="url(#crownGrad_${size})" stroke="#B45309" stroke-width="1.2" stroke-linejoin="round" filter="url(#crownGlow_${size})"/>
        <!-- Base Band -->
        <path d="M4 23 C4 23 16 25 28 23 L27 26 C27 26 16 28 5 26 Z" fill="#B45309"/>
        <!-- Jewels on tips -->
        <circle cx="6" cy="11" r="2" fill="#FEF08A" stroke="#B45309" stroke-width="0.8"/>
        <circle cx="16" cy="8" r="2.5" fill="#EF4444" stroke="#991B1B" stroke-width="0.8"/>
        <circle cx="26" cy="11" r="2" fill="#FEF08A" stroke="#B45309" stroke-width="0.8"/>
        <!-- Center Gem on band -->
        <circle cx="16" cy="24.5" r="1.8" fill="#3B82F6"/>
        <circle cx="10" cy="24" r="1.3" fill="#EF4444"/>
        <circle cx="22" cy="24" r="1.3" fill="#10B981"/>
      </svg>
    </div>
  `,

  aiRobotAvatarCircle: (size = 44) => `
    <div style="width: ${size}px; height: ${size}px; border-radius: 50%; background: linear-gradient(135deg, #F5F3FF, #EDE9FE); border: 2px solid #DDD6FE; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.12); flex-shrink: 0; overflow: hidden;">
      ${GRAPHICS.aiRobotMini3D(size * 0.9, size * 0.9)}
    </div>
  `,

  getSubjectIcon: (type, size = 42) => {
    switch (type) {
      case "trophy": return GRAPHICS.goldTrophy(size);
      case "star": return GRAPHICS.goldStar(size);
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      case "tamilLetter": return GRAPHICS.tamilLetterIcon(size);
      default: return GRAPHICS.scienceFlaskIcon(size);
    }
  }
};
