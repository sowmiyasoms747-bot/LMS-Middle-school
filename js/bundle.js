// Learning Universe LMS - Unified Offline Bundle (No CORS restriction)
(function() {
"use strict";

// ===== Module: js/data/lmsData.js =====
// LMS Data Store & Content for Learning Universe LMS (Classes 6-8)
const LMS_DATA = {
  student: {
    name: "Sowmiya S.",
    grade: "Class 7",
    section: "Section A",
    rollNo: "LU-2024-0742",
    school: "Greenwood Public School",
    email: "sowmiya.s@learninguniverse.edu",
    phone: "+91 98765 43210",
    streakDays: 7,
    points: 240,
    avatarUrl: "assets/student-avatar.jpg",
    completedChapters: 28,
    totalChapters: 40,
    overallProgress: 70,
    weeklyStudyHours: "14h 30m"
  },

  subjects: [
    {
      id: "science",
      title: "Science",
      classGrade: "Class 7",
      chaptersCount: 12,
      progress: 72,
      color: "#0EA5E9",
      bgGradient: "linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)",
      lightBg: "rgba(14, 165, 233, 0.08)",
      borderColor: "#BAE6FD",
      accentColor: "#0284C7",
      iconType: "flask",
      description: "Explore the fascinating world of cells, living organisms, heat, acids, and physical phenomena.",
      chapters: [
        {
          id: "ch-1",
          number: 1,
          title: "Nutrition in Plants",
          status: "completed", // completed, in-progress, not-started
          statusLabel: "Completed",
          badgeColor: "emerald",
          lessonsCount: 4,
          quizzesCount: 2,
          duration: "45 mins"
        },
        {
          id: "ch-2",
          number: 2,
          title: "The Cell",
          status: "completed",
          statusLabel: "Completed",
          badgeColor: "emerald",
          lessonsCount: 5,
          quizzesCount: 1,
          duration: "1 hour 15 mins"
        },
        {
          id: "ch-3",
          number: 3,
          title: "Heat",
          status: "in-progress",
          statusLabel: "In Progress",
          badgeColor: "purple",
          progress: 72,
          lessonsCount: 3,
          quizzesCount: 1,
          duration: "50 mins",
          isCurrent: true
        },
        {
          id: "ch-4",
          number: 4,
          title: "Acids, Bases and Salts",
          status: "not-started",
          statusLabel: "Not Started",
          badgeColor: "gray",
          lessonsCount: 4,
          quizzesCount: 2,
          duration: "1 hour"
        },
        {
          id: "ch-5",
          number: 5,
          title: "Physical and Chemical Changes",
          status: "not-started",
          statusLabel: "Not Started",
          badgeColor: "gray",
          lessonsCount: 4,
          quizzesCount: 1,
          duration: "55 mins"
        }
      ]
    },
    {
      id: "maths",
      title: "Mathematics",
      classGrade: "Class 7",
      chaptersCount: 14,
      progress: 60,
      color: "#F59E0B",
      bgGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      lightBg: "rgba(245, 158, 11, 0.08)",
      borderColor: "#FDE68A",
      accentColor: "#D97706",
      iconType: "calculator",
      description: "Master integers, fractions, algebraic expressions, lines and angles with interactive solving.",
      chapters: [
        { id: "m-1", number: 1, title: "Integers & Operations", status: "completed", statusLabel: "Completed", badgeColor: "emerald", lessonsCount: 4, quizzesCount: 2 },
        { id: "m-2", number: 2, title: "Fractions", status: "completed", statusLabel: "Completed", badgeColor: "emerald", lessonsCount: 6, quizzesCount: 2 },
        { id: "m-3", number: 3, title: "Data Handling", status: "not-started", statusLabel: "Not Started", badgeColor: "gray", lessonsCount: 3, quizzesCount: 1 },
        { id: "m-4", number: 4, title: "Simple Equations", status: "not-started", statusLabel: "Not Started", badgeColor: "gray", lessonsCount: 5, quizzesCount: 2 },
        { id: "m-5", number: 5, title: "Algebra", status: "in-progress", statusLabel: "In Progress", badgeColor: "purple", progress: 60, lessonsCount: 5, quizzesCount: 2, isCurrent: true }
      ]
    },
    {
      id: "social",
      title: "Social Science",
      classGrade: "Class 7",
      chaptersCount: 11,
      progress: 60,
      color: "#10B981",
      bgGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      lightBg: "rgba(168, 85, 247, 0.08)",
      borderColor: "#A7F3D0",
      accentColor: "#059669",
      iconType: "globe",
      description: "Discover our environment, earth layers, medieval empires, equality, and civic responsibilities.",
      chapters: [
        { id: "s-1", number: 1, title: "Our Environment", status: "completed", statusLabel: "Completed", badgeColor: "emerald", lessonsCount: 3, quizzesCount: 1 },
        { id: "s-2", number: 2, title: "Inside Our Earth", status: "not-started", statusLabel: "Not Started", badgeColor: "gray", lessonsCount: 4, quizzesCount: 1 },
        { id: "s-3", number: 3, title: "The Delhi Sultans", status: "not-started", statusLabel: "Not Started", badgeColor: "gray", lessonsCount: 4, quizzesCount: 1 },
        { id: "s-4", number: 4, title: "Understanding Media", status: "not-started", statusLabel: "Not Started", badgeColor: "gray", lessonsCount: 3, quizzesCount: 1 }
      ]
    },
    {
      id: "english",
      title: "English",
      classGrade: "Class 7",
      chaptersCount: 10,
      progress: 72,
      color: "#EC4899",
      bgGradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
      lightBg: "rgba(236, 72, 153, 0.08)",
      borderColor: "#FBCFE8",
      accentColor: "#DB2777",
      iconType: "book",
      description: "Hone comprehension, prose, poetry, grammar, writing skills, and vocabulary.",
      chapters: [
        { id: "e-1", number: 1, title: "Nouns", status: "completed", statusLabel: "Completed", badgeColor: "emerald", lessonsCount: 3, quizzesCount: 1 },
        { id: "e-2", number: 2, title: "Pronouns", status: "completed", statusLabel: "Completed", badgeColor: "emerald", lessonsCount: 4, quizzesCount: 1 },
        { id: "e-3", number: 3, title: "Verbs", status: "not-started", statusLabel: "Not Started", badgeColor: "gray", lessonsCount: 3, quizzesCount: 1 },
        { id: "e-4", number: 4, title: "Tenses", status: "in-progress", statusLabel: "In Progress", badgeColor: "purple", progress: 72, lessonsCount: 4, quizzesCount: 1, isCurrent: true }
      ]
    },
    {
      id: "tamil",
      title: "தமிழ்",
      classGrade: "Class 7",
      chaptersCount: 10,
      progress: 72,
      color: "#9333EA",
      bgGradient: "linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)",
      lightBg: "rgba(168, 85, 247, 0.08)",
      borderColor: "#DDD6FE",
      accentColor: "#7C3AED",
      iconType: "tamil",
      description: "கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக - தமிழ் மொழி, செய்யுள், உரைநடை மற்றும் இலக்கணம்.",
      chapters: [
        { id: "ta-1", number: 1, title: "எழுத்துக்கள்", status: "completed", statusLabel: "Completed", badgeColor: "emerald", lessonsCount: 4, quizzesCount: 1 },
        { id: "ta-2", number: 2, title: "இன்பத்தமிழ்", status: "completed", statusLabel: "Completed", badgeColor: "emerald", lessonsCount: 3, quizzesCount: 1 },
        { id: "ta-3", number: 3, title: "இலக்கியம்", status: "in-progress", statusLabel: "In Progress", badgeColor: "purple", progress: 56, lessonsCount: 4, quizzesCount: 2, isCurrent: true },
        { id: "ta-4", number: 4, title: "செய்யுள்", status: "not-started", statusLabel: "Not Started", badgeColor: "gray", lessonsCount: 3, quizzesCount: 1 }
      ]
    }
  ],

  // Ongoing chapters displayed under Screen 03 Tab 2: "In Progress - Ongoing Chapters"
  ongoingChapters: [
    {
      id: "ongoing-sci-3",
      subjectId: "science",
      subjectTitle: "Science",
      chapterNumber: 3,
      chapterTitle: "Chapter 3: Heat",
      progress: 72,
      iconType: "flask",
      accentColor: "#0284C7"
    },
    {
      id: "ongoing-math-5",
      subjectId: "maths",
      subjectTitle: "Mathematics",
      chapterNumber: 5,
      chapterTitle: "Chapter 5: Algebra",
      progress: 60,
      iconType: "calculator",
      accentColor: "#D97706"
    },
    {
      id: "ongoing-eng-4",
      subjectId: "english",
      subjectTitle: "English",
      chapterNumber: 4,
      chapterTitle: "Chapter 4: Tenses",
      progress: 72,
      iconType: "book",
      accentColor: "#DB2777"
    },
    {
      id: "ongoing-tam-3",
      subjectId: "tamil",
      subjectTitle: "தமிழ்",
      chapterNumber: 3,
      chapterTitle: "Chapter 3: இலக்கியம்",
      progress: 56,
      iconType: "tamilLetter",
      accentColor: "#7C3AED"
    }
  ],

  // Finished chapters displayed under Screen 03 Tab 3: "Completed - Finished Chapters"
  finishedChapters: [
    {
      id: "fin-sci-1",
      subjectId: "science",
      subjectTitle: "Science",
      chapterNumber: 1,
      chapterTitle: "Chapter 1: Nutrition in Plants",
      iconType: "flask",
      status: "Completed"
    },
    {
      id: "fin-math-2",
      subjectId: "maths",
      subjectTitle: "Mathematics",
      chapterNumber: 2,
      chapterTitle: "Chapter 2: Fractions",
      iconType: "calculator",
      status: "Completed"
    },
    {
      id: "fin-soc-1",
      subjectId: "social",
      subjectTitle: "Social Science",
      chapterNumber: 1,
      chapterTitle: "Chapter 1: Our Environment",
      iconType: "globe",
      status: "Completed"
    },
    {
      id: "fin-eng-1",
      subjectId: "english",
      subjectTitle: "English",
      chapterNumber: 1,
      chapterTitle: "Chapter 1: Nouns",
      iconType: "book",
      status: "Completed"
    },
    {
      id: "fin-tam-1",
      subjectId: "tamil",
      subjectTitle: "தமிழ்",
      chapterNumber: 1,
      chapterTitle: "Chapter 1: எழுத்துக்கள்",
      iconType: "tamilLetter",
      status: "Completed"
    }
  ],

  // Catalog of detailed lessons for Screen 05 (In-Progress Chapter vs Completed Chapter)
  lessonsCatalog: {
    "science-ch-3": {
      subjectId: "science",
      subjectName: "Science",
      chapterNumber: 3,
      chapterTitle: "Chapter 3: Heat",
      duration: "14:35",
      videoTitle: "Heat Transfer, Conduction & Temperature Dynamics",
      instructor: "Ms. Revathi • Physics & Chemistry Specialist",
      isCompleted: false,
      progress: 72,
      theme: "heat",
      description: "Understand the fundamentals of thermal energy, conduction, convection, radiation, and clinical vs laboratory thermometers.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "14 mins • Watched" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "PDF Downloaded" },
        { id: "concepts", title: "Key Concepts", done: false, meta: "5 Principles to review" },
        { id: "quiz", title: "Practice Quiz", done: false, meta: "10 Questions pending" },
        { id: "worksheet", title: "Worksheet", done: false, meta: "Homework pending" }
      ]
    },
    "science-ch-2": {
      subjectId: "science",
      subjectName: "Science",
      chapterNumber: 2,
      chapterTitle: "Chapter 2: The Cell",
      duration: "14:25",
      videoTitle: "Cell - Structure and Fundamental Units of Life",
      instructor: "Ms. Revathi • Biology Specialist",
      isCompleted: true,
      progress: 100,
      theme: "cell",
      description: "In this interactive lesson, learn the fundamental architectural units of living organisms, plant vs. animal cell structure, and the critical role played by the nucleus and cell organelles.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "Completed" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "Completed" },
        { id: "concepts", title: "Key Concepts", done: true, meta: "Completed" },
        { id: "quiz", title: "Practice Quiz", done: true, score: "Score: 9 / 10", meta: "Completed" },
        { id: "worksheet", title: "Worksheet", done: true, meta: "Submitted (25/25)" }
      ]
    },
    "science-ch-1": {
      subjectId: "science",
      subjectName: "Science",
      chapterNumber: 1,
      chapterTitle: "Chapter 1: Nutrition in Plants",
      duration: "15:00",
      videoTitle: "Photosynthesis, Autotrophic & Heterotrophic Nutrition",
      instructor: "Ms. Revathi • Biology Specialist",
      isCompleted: true,
      progress: 100,
      theme: "cell",
      description: "Explore the modes of nutrition in green plants, chlorophyll synthesis, stomata function, and nutrient cycling.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "Completed" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "Completed" },
        { id: "concepts", title: "Key Concepts", done: true, meta: "Completed" },
        { id: "quiz", title: "Practice Quiz", done: true, score: "Score: 10 / 10", meta: "Completed" },
        { id: "worksheet", title: "Worksheet", done: true, meta: "Submitted (25/25)" }
      ]
    },
    "maths-ch-5": {
      subjectId: "maths",
      subjectName: "Mathematics",
      chapterNumber: 5,
      chapterTitle: "Chapter 5: Algebra",
      duration: "18:20",
      videoTitle: "Algebraic Expressions, Variables & Linear Solutions",
      instructor: "Mr. Karthik • Mathematics Specialist",
      isCompleted: false,
      progress: 60,
      theme: "maths",
      description: "Master terms, factors, coefficients, monomials, binomials, and solving simple linear algebraic equations.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "18 mins • Watched" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "PDF Downloaded" },
        { id: "concepts", title: "Key Concepts", done: false, meta: "Variables & Expressions" },
        { id: "quiz", title: "Practice Quiz", done: false, meta: "10 Questions pending" },
        { id: "worksheet", title: "Worksheet", done: false, meta: "Homework pending" }
      ]
    },
    "maths-ch-2": {
      subjectId: "maths",
      subjectName: "Mathematics",
      chapterNumber: 2,
      chapterTitle: "Chapter 2: Fractions",
      duration: "16:40",
      videoTitle: "Fractions & Decimals Operations",
      instructor: "Mr. Karthik • Mathematics Specialist",
      isCompleted: true,
      progress: 100,
      theme: "maths",
      description: "Operations on proper, improper, mixed fractions and decimal place values.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "Completed" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "Completed" },
        { id: "concepts", title: "Key Concepts", done: true, meta: "Completed" },
        { id: "quiz", title: "Practice Quiz", done: true, score: "Score: 10 / 10", meta: "Completed" },
        { id: "worksheet", title: "Worksheet", done: true, meta: "Submitted (25/25)" }
      ]
    },
    "social-ch-1": {
      subjectId: "social",
      subjectName: "Social Science",
      chapterNumber: 1,
      chapterTitle: "Chapter 1: Our Environment",
      duration: "15:10",
      videoTitle: "Ecosystems, Lithosphere, Atmosphere & Hydrosphere",
      instructor: "Mr. Karthik • Social Studies Specialist",
      isCompleted: true,
      progress: 100,
      theme: "social",
      description: "Natural and human-made components of our environment, biodiversity, and conservation.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "Completed" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "Completed" },
        { id: "concepts", title: "Key Concepts", done: true, meta: "Completed" },
        { id: "quiz", title: "Practice Quiz", done: true, score: "Score: 9 / 10", meta: "Completed" },
        { id: "worksheet", title: "Worksheet", done: true, meta: "Submitted (25/25)" }
      ]
    },
    "english-ch-4": {
      subjectId: "english",
      subjectName: "English",
      chapterNumber: 4,
      chapterTitle: "Chapter 4: Tenses",
      duration: "14:15",
      videoTitle: "Present, Past & Future Tenses in Spoken & Written English",
      instructor: "Dr. Ananya • Language Specialist",
      isCompleted: false,
      progress: 72,
      theme: "english",
      description: "Master simple, continuous, and perfect tenses with real-world sentence examples.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "14 mins • Watched" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "PDF Downloaded" },
        { id: "concepts", title: "Key Concepts", done: false, meta: "Verb Forms & Rules" },
        { id: "quiz", title: "Practice Quiz", done: false, meta: "10 Questions pending" },
        { id: "worksheet", title: "Worksheet", done: false, meta: "Homework pending" }
      ]
    },
    "english-ch-1": {
      subjectId: "english",
      subjectName: "English",
      chapterNumber: 1,
      chapterTitle: "Chapter 1: Nouns",
      duration: "12:50",
      videoTitle: "Common, Proper, Collective & Abstract Nouns",
      instructor: "Dr. Ananya • Language Specialist",
      isCompleted: true,
      progress: 100,
      theme: "english",
      description: "Classification of nouns, countability, gender, and grammatical rules.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "Completed" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "Completed" },
        { id: "concepts", title: "Key Concepts", done: true, meta: "Completed" },
        { id: "quiz", title: "Practice Quiz", done: true, score: "Score: 10 / 10", meta: "Completed" },
        { id: "worksheet", title: "Worksheet", done: true, meta: "Submitted (25/25)" }
      ]
    },
    "tamil-ch-3": {
      subjectId: "tamil",
      subjectName: "தமிழ்",
      chapterNumber: 3,
      chapterTitle: "Chapter 3: இலக்கியம்",
      duration: "15:45",
      videoTitle: "திருக்குறள் - அறத்துப்பால் மற்றும் கல்விச் சிறப்பு",
      instructor: "புலவர் முனைவர் சுந்தரம் • தமிழ்த்துறை",
      isCompleted: false,
      progress: 56,
      theme: "tamil",
      description: "திருக்குறளின் சிறப்புகள், கல்வி, ஒழுக்கமுடைமை மற்றும் அறிவுடைமை அதிகாரங்களின் நயவுரை.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "15 mins • பார்த்தாயிற்று" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "பாடக் குறிப்புகள் பதிவிறக்கம்" },
        { id: "concepts", title: "Key Concepts", done: false, meta: "குறட்பாக்கள் அறிதல்" },
        { id: "quiz", title: "Practice Quiz", done: false, meta: "பயிற்சி வினாக்கள் நிலுவை" },
        { id: "worksheet", title: "Worksheet", done: false, meta: "பயிற்சித் தாள் நிலுவை" }
      ]
    },
    "tamil-ch-1": {
      subjectId: "tamil",
      subjectName: "தமிழ்",
      chapterNumber: 1,
      chapterTitle: "Chapter 1: எழுத்துக்கள்",
      duration: "13:30",
      videoTitle: "முதல் எழுத்துக்கள் மற்றும் சார்பெழுத்துக்கள் விளக்கம்",
      instructor: "புலவர் முனைவர் சுந்தரம் • தமிழ்த்துறை",
      isCompleted: true,
      progress: 100,
      theme: "tamil",
      description: "உயிர், மெய், உயிர்மெய் மற்றும் ஆய்த எழுத்துக்களின் இலக்கண விதிகள்.",
      checklist: [
        { id: "vid", title: "Video Lesson", done: true, meta: "Completed" },
        { id: "notes", title: "Chapter Notes", done: true, meta: "Completed" },
        { id: "concepts", title: "Key Concepts", done: true, meta: "Completed" },
        { id: "quiz", title: "Practice Quiz", done: true, score: "Score: 10 / 10", meta: "Completed" },
        { id: "worksheet", title: "Worksheet", done: true, meta: "Submitted (25/25)" }
      ]
    }
  },

  currentLesson: {
    subjectId: "science",
    subjectName: "Science",
    chapterNumber: 3,
    chapterTitle: "Chapter 3: Heat",
    duration: "14:35",
    videoTitle: "Heat Transfer, Conduction & Temperature Dynamics",
    instructor: "Ms. Revathi • Physics & Chemistry Specialist",
    isCompleted: false,
    progress: 72,
    theme: "heat",
    description: "Understand the fundamentals of thermal energy, conduction, convection, radiation, and clinical vs laboratory thermometers.",
    keyConcepts: [
      { term: "Heat", definition: "A form of energy transferred between systems or objects with different temperatures." },
      { term: "Temperature", definition: "The degree or intensity of heat present in a substance or object." },
      { term: "Conduction", definition: "Heat transfer through direct molecular contact without bulk motion of matter." },
      { term: "Convection", definition: "Heat transfer by the bulk movement of fluid fluids (liquids and gases)." },
      { term: "Radiation", definition: "Emission of energy as electromagnetic waves without requiring a medium." }
    ],
    resources: [
      { id: "video", title: "Video Lesson", type: "video", active: true, duration: "14 mins" },
      { id: "pdf", title: "Chapter Notes (PDF)", type: "pdf", active: false, size: "2.1 MB", pages: 10 },
      { id: "concepts", title: "Key Concepts", type: "concepts", active: false, count: "5 Key Terms" },
      { id: "quiz", title: "Practice Quiz", type: "quiz", active: false, questions: 10 },
      { id: "worksheet", title: "Worksheet", type: "worksheet", active: false, marks: "25 Marks" }
    ],
    checklist: [
      { id: "vid", title: "Video Lesson", done: true, meta: "14 mins • Watched" },
      { id: "notes", title: "Chapter Notes", done: true, meta: "PDF Downloaded" },
      { id: "concepts", title: "Key Concepts", done: false, meta: "5 Principles to review" },
      { id: "quiz", title: "Practice Quiz", done: false, meta: "10 Questions pending" },
      { id: "worksheet", title: "Worksheet", done: false, meta: "Homework pending" }
    ]
  },

  quizQuestions: [
    {
      id: 1,
      question: "What is the basic structural and functional unit of life?",
      options: ["Tissue", "Organ", "Cell", "Molecule"],
      correctIndex: 2,
      explanation: "The cell is universally recognized as the fundamental structural and functional unit of all living beings."
    },
    {
      id: 2,
      question: "Which part of the cell controls the activities of the cell?",
      options: ["Cell Wall", "Nucleus", "Chloroplast", "Mitochondria"],
      correctIndex: 1,
      explanation: "The nucleus acts as the control center or 'brain' of the cell, housing DNA and regulating growth, metabolism, and reproduction.",
      highlightOrganelle: "nucleus"
    },
    {
      id: 3,
      question: "Which organelle is famously known as the 'Powerhouse of the Cell'?",
      options: ["Ribosome", "Golgi Apparatus", "Mitochondria", "Vacuole"],
      correctIndex: 2,
      explanation: "Mitochondria generate chemical energy in the form of ATP through cellular respiration."
    },
    {
      id: 4,
      question: "Which of the following structures is found ONLY in plant cells?",
      options: ["Cell Membrane", "Cell Wall & Chloroplast", "Cytoplasm", "Nucleus"],
      correctIndex: 1,
      explanation: "Plant cells possess a rigid cellulose cell wall and green chloroplasts for photosynthesis, which are absent in animal cells."
    },
    {
      id: 5,
      question: "The jelly-like fluid occupying the space between the cell membrane and nucleus is called:",
      options: ["Nucleoplasm", "Cytoplasm", "Protoplasm", "Chlorophyll"],
      correctIndex: 1,
      explanation: "Cytoplasm is the gelatinous substance where cellular organelles are suspended and metabolic activities take place."
    }
  ],

  challenges: [
    {
      id: "ch-cell",
      title: "The Cell - Challenge",
      subtitle: "Complete quiz with 80% or above.",
      subject: "Science",
      points: 50,
      icon: "target",
      color: "#8B5CF6",
      bgGradient: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
      completed: false,
      requirement: "Answer at least 4 out of 5 questions correctly in under 5 minutes."
    },
    {
      id: "ch-weekly",
      title: "Science Weekly Challenge",
      subtitle: "Answer 10 mixed questions.",
      subject: "Science",
      points: 100,
      icon: "trophy",
      color: "#F59E0B",
      bgGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      completed: false,
      requirement: "Complete questions spanning Nutrition, Cells, and Heat concepts."
    },
    {
      id: "ch-revision",
      title: "Revision Challenge",
      subtitle: "Revise 3 chapters and take a test.",
      subject: "All Subjects",
      points: 150,
      icon: "zap",
      color: "#10B981",
      bgGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      completed: false,
      requirement: "Comprehensive revision covering Science, Mathematics, and English."
    },
    {
      id: "ch-streak",
      title: "7-Day Streak Keeper",
      subtitle: "Maintain daily attendance for a full week.",
      subject: "Habit",
      points: 80,
      icon: "flame",
      color: "#EC4899",
      bgGradient: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
      completed: true,
      requirement: "You've successfully completed 7 consecutive days of active learning!"
    }
  ],

  assignments: [
    {
      id: "asg-1",
      title: "Cell Diagram - Science",
      subject: "Science",
      dueDate: "Tomorrow",
      dueFormatted: "Due: Tomorrow • 10 Marks",
      marks: 10,
      status: "todo", // todo, submitted, graded
      statusBadge: "To Do",
      icon: "document",
      instructions: "Draw and color a neat cross-section diagram of a plant cell. Label at least 6 key organelles including Nucleus, Cell Wall, Chloroplast, Vacuole, Cytoplasm, and Mitochondria.",
      submissionFile: null
    },
    {
      id: "asg-2",
      title: "Fractions - Maths",
      subject: "Mathematics",
      dueDate: "20 Nov",
      dueFormatted: "Due: 20 Nov • 10 Marks",
      marks: 10,
      status: "todo",
      statusBadge: "To Do",
      icon: "calculator",
      instructions: "Solve NCERT Exercise 2.3 questions 1 to 10 on division and multiplication of mixed fractions. Show step-by-step working.",
      submissionFile: null
    },
    {
      id: "asg-3",
      title: "Our Environment Poster",
      subject: "Social Science",
      dueDate: "14 Nov",
      dueFormatted: "Submitted on 14 Nov",
      marks: 10,
      score: 9.5,
      status: "graded",
      statusBadge: "Graded (9.5/10)",
      teacherFeedback: "Excellent creativity and accurate ecosystem trophic level illustrations!",
      icon: "globe"
    },
    {
      id: "asg-4",
      title: "English Essay - My Dream City",
      subject: "English",
      dueDate: "10 Nov",
      dueFormatted: "Submitted on 10 Nov",
      marks: 15,
      score: 14,
      status: "graded",
      statusBadge: "Graded (14/15)",
      teacherFeedback: "Vivid imagery and strong grammatical command throughout.",
      icon: "book"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Consistent Learner",
      subtitle: "7 Days Streak",
      icon: "flame",
      iconColor: "#7C3AED",
      badgeGradient: "linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)",
      unlocked: true,
      unlockedDate: "Today",
      description: "Logged in and completed lessons 7 days in a row without breaking streak!"
    },
    {
      id: "ach-2",
      title: "Quiz Master",
      subtitle: "Completed 5 Quizzes",
      icon: "trophy",
      iconColor: "#D97706",
      badgeGradient: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
      unlocked: true,
      unlockedDate: "Yesterday",
      description: "Achieved an aggregate score above 85% across 5 subject quizzes."
    },
    {
      id: "ach-3",
      title: "Chapter Completer",
      subtitle: "Finished 3 Chapters",
      icon: "ribbon",
      iconColor: "#0284C7",
      badgeGradient: "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)",
      unlocked: true,
      unlockedDate: "3 days ago",
      description: "Successfully finished all video lessons, notes, and worksheets in 3 chapters."
    },
    {
      id: "ach-4",
      title: "Subject Explorer",
      subtitle: "Learned Across Subjects",
      icon: "compass",
      iconColor: "#059669",
      badgeGradient: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
      unlocked: true,
      unlockedDate: "Last week",
      description: "Explored lessons across Science, Mathematics, English, and Social Science."
    },
    {
      id: "ach-5",
      title: "Speed Demon",
      subtitle: "Quiz in < 3 Minutes",
      icon: "zap",
      iconColor: "#EC4899",
      badgeGradient: "linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)",
      unlocked: false,
      progress: "1 / 2 completed",
      description: "Complete 2 timed quizzes with 100% accuracy in under 3 minutes."
    },
    {
      id: "ach-6",
      title: "Perfect Centum",
      subtitle: "100% on 3 Tests",
      icon: "star",
      iconColor: "#F59E0B",
      badgeGradient: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
      unlocked: false,
      progress: "2 / 3 tests",
      description: "Score full marks on 3 unit assessments."
    }
  ],

  liveClasses: [
    {
      id: "live-1",
      title: "Science - The Cell",
      subject: "Science",
      timing: "Today, 11:00 AM - 11:40 AM",
      teacher: "Ms. Revathi",
      department: "Biology Dept",
      status: "live", // live, upcoming, completed
      statusLabel: "Live Now",
      btnLabel: "Join Class",
      attendees: 38
    },
    {
      id: "live-2",
      title: "Maths - Fractions",
      subject: "Mathematics",
      timing: "Tomorrow, 02:00 PM - 02:40 PM",
      teacher: "Mr. Karthik",
      department: "Mathematics Dept",
      status: "upcoming",
      statusLabel: "Upcoming",
      btnLabel: "Set Reminder",
      reminderSet: true
    },
    {
      id: "live-3",
      title: "Social - Our Environment & Ecosystem",
      subject: "Social Science",
      timing: "20 Nov, 10:00 AM - 10:45 AM",
      teacher: "Mrs. Anitha",
      department: "Social Sciences",
      status: "upcoming",
      statusLabel: "Upcoming",
      btnLabel: "Set Reminder",
      reminderSet: false
    },
    {
      id: "live-4",
      title: "English - Creative Essay Workshop",
      subject: "English",
      timing: "Recorded (16 Nov)",
      teacher: "Dr. Priya Roy",
      department: "Language & Literature",
      status: "recording",
      statusLabel: "Recorded",
      btnLabel: "Watch Recording",
      duration: "42 mins"
    }
  ],

  aiBuddyResponses: {
    "Explain The Cell": "Hello Sowmiya! 🧬 **The Cell** is the smallest structural and functional unit of life. Think of a cell like a bustling miniature city:\n\n• **Nucleus**: The City Hall (controls all activities & holds DNA)\n• **Mitochondria**: The Power Station (creates energy/ATP)\n• **Cell Membrane**: The Security Gate (controls what enters & leaves)\n• **Cytoplasm**: The City Parks & Roads (jelly fluid where organelles float)\n\nPlant cells also have a sturdy **Cell Wall** and green **Chloroplasts** for making food via photosynthesis!",
    
    "Difference between plant and animal cell?": "Great question! Here are the 3 major differences:\n\n1. 🌿 **Cell Wall**: Present in plant cells for rigidity; absent in animal cells.\n2. 🍃 **Chloroplasts**: Present in plant cells to capture sunlight; absent in animal cells.\n3. 💧 **Vacuole**: Plants have one gigantic central vacuole, while animals have small, temporary vacuoles.\n4. 🔄 **Shape**: Plant cells are typically rectangular and rigid, while animal cells have flexible, rounded shapes.",
    
    "Give a short summary": "Here is a quick revision summary of **Chapter 2: The Cell**:\n\n• Cells were first discovered by Robert Hooke in 1665.\n• Living organisms are classified as **Unicellular** (Amoeba, Paramecium) or **Multicellular** (Plants, Humans).\n• The **Nucleus** contains chromosomes carrying genes that pass traits from parents to offspring.\n• Remembering cell organelles helps you ace both your diagram assignment and quick quiz!",

    "How to divide fractions?": "Remember the golden rule for dividing fractions: **KCF - Keep, Change, Flip!** 🍕\n\n1. **Keep** the first fraction as it is.\n2. **Change** the division sign (÷) to multiplication (×).\n3. **Flip** the second fraction upside down (its reciprocal).\n\n*Example:* (2/3) ÷ (4/5) = (2/3) × (5/4) = 10/12 = **5/6**!"
  }
};

// ===== Module: js/data/quizQuestions.js =====
// Quiz Question Bank for Learning Universe LMS (Classes 6-8)
// Each quiz has exactly as many questions as its "questionsCount".
// correct = index of the right option (0-based).
const QUIZ_QUESTION_BANK = {
  // ---------------------------------------------------------------------
  // Science – The Cell (10)
  // ---------------------------------------------------------------------
  "quiz-sci-cell": [
    { text: "What is the basic structural and functional unit of all living organisms?", options: ["Tissue", "Cell", "Organ", "Nucleus"], correct: 1, explanation: "The cell is the basic structural and functional unit of all known living organisms." },
    { text: "Which organelle is known as the powerhouse of the cell?", options: ["Ribosome", "Mitochondria", "Golgi Apparatus", "Vacuole"], correct: 1, explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions." },
    { text: "Which part of the cell controls all the activities?", options: ["Cell Wall", "Nucleus", "Chloroplast", "Mitochondria"], correct: 1, explanation: "The nucleus is the control center of the cell containing the genetic material (DNA)." },
    { text: "Which structure provides shape and rigidity exclusively to plant cells?", options: ["Cell Wall", "Cell Membrane", "Cytoplasm", "Endoplasmic Reticulum"], correct: 0, explanation: "The cell wall is a rigid layer outside the cell membrane found in plant cells." },
    { text: "Which green pigment in chloroplasts absorbs light energy for photosynthesis?", options: ["Carotene", "Chlorophyll", "Xanthophyll", "Anthocyanin"], correct: 1, explanation: "Chlorophyll is the green pigment that captures sunlight to make food." },
    { text: "The jelly-like substance between the cell membrane and the nucleus is called:", options: ["Cytoplasm", "Protoplasm", "Nucleolus", "Plasma"], correct: 0, explanation: "Cytoplasm is the jelly-like substance in which the cell organelles are found." },
    { text: "Which part of the cell allows only some substances to pass in and out?", options: ["Cell Wall", "Cell Membrane", "Vacuole", "Nucleus"], correct: 1, explanation: "The cell membrane is selectively permeable – it controls what enters and leaves the cell." },
    { text: "Large vacuoles are commonly found in:", options: ["Animal cells", "Plant cells", "Bacteria only", "Nerve cells"], correct: 1, explanation: "Plant cells usually have one large central vacuole; animal cells have small ones or none." },
    { text: "Which instrument is used to observe cells?", options: ["Telescope", "Periscope", "Microscope", "Stethoscope"], correct: 2, explanation: "Cells are too small to see with the naked eye, so we use a microscope." },
    { text: "Organisms made of only one cell are called:", options: ["Multicellular", "Unicellular", "Tissues", "Organs"], correct: 1, explanation: "Unicellular organisms like Amoeba and Paramecium are made of a single cell." }
  ],

  // ---------------------------------------------------------------------
  // Mathematics – Fractions (12)
  // ---------------------------------------------------------------------
  "quiz-math-fractions": [
    { text: "What is 3/4 + 2/3 in simplest form?", options: ["5/7", "17/12 (1 5/12)", "1", "6/12"], correct: 1, explanation: "LCM of 4 and 3 is 12: 9/12 + 8/12 = 17/12." },
    { text: "What is 2/5 × 3/4?", options: ["6/20 = 3/10", "5/9", "8/15", "6/9"], correct: 0, explanation: "Multiply numerators and denominators: (2×3)/(5×4) = 6/20 = 3/10." },
    { text: "What is 1/2 ÷ 1/4?", options: ["1/8", "2", "1/2", "4"], correct: 1, explanation: "Dividing by a fraction = multiplying by its reciprocal: 1/2 × 4/1 = 2." },
    { text: "Which fraction is equivalent to 2/3?", options: ["4/9", "6/9", "3/2", "2/6"], correct: 1, explanation: "Multiply numerator and denominator by 3: 2/3 = 6/9." },
    { text: "Convert 7/4 into a mixed fraction.", options: ["1 3/4", "1 1/4", "3 1/4", "2 1/4"], correct: 0, explanation: "7 ÷ 4 = 1 remainder 3, so 7/4 = 1 3/4." },
    { text: "What is 5/6 − 1/3?", options: ["4/3", "1/2", "4/6", "2/3"], correct: 1, explanation: "1/3 = 2/6, so 5/6 − 2/6 = 3/6 = 1/2." },
    { text: "Which is the largest fraction?", options: ["2/5", "3/8", "1/2", "3/7"], correct: 2, explanation: "1/2 = 0.5, which is greater than 0.4, 0.375 and about 0.43." },
    { text: "What is 3/4 of 20?", options: ["12", "15", "16", "5"], correct: 1, explanation: "20 ÷ 4 = 5, and 5 × 3 = 15." },
    { text: "A fraction whose numerator is smaller than its denominator is called a:", options: ["Proper fraction", "Improper fraction", "Mixed fraction", "Unit fraction"], correct: 0, explanation: "In a proper fraction the numerator is less than the denominator, e.g. 3/5." },
    { text: "What is the reciprocal of 5/8?", options: ["8/5", "5/8", "1/8", "−5/8"], correct: 0, explanation: "The reciprocal is found by swapping the numerator and the denominator: 8/5." },
    { text: "What is 2 1/2 × 4?", options: ["8", "9", "10", "12"], correct: 2, explanation: "2 1/2 = 5/2, and 5/2 × 4 = 20/2 = 10." },
    { text: "Simplify 18/24.", options: ["2/3", "3/4", "9/16", "6/8"], correct: 1, explanation: "Divide numerator and denominator by their HCF 6: 18/24 = 3/4." }
  ],

  // ---------------------------------------------------------------------
  // Social Science – Our Environment (10)
  // ---------------------------------------------------------------------
  "quiz-soc-env": [
    { text: "Which of these is a natural component of the environment?", options: ["Bridges", "Buildings", "Rivers", "Roads"], correct: 2, explanation: "Rivers are part of the natural environment; bridges, buildings and roads are human-made." },
    { text: "The solid crust or hard top layer of the Earth is called the:", options: ["Hydrosphere", "Lithosphere", "Atmosphere", "Biosphere"], correct: 1, explanation: "The lithosphere is the solid crust made of rocks and minerals." },
    { text: "The domain of water on Earth is called the:", options: ["Hydrosphere", "Lithosphere", "Biosphere", "Troposphere"], correct: 0, explanation: "The hydrosphere includes oceans, rivers, lakes, ice and groundwater." },
    { text: "The thin layer of air that surrounds the Earth is the:", options: ["Lithosphere", "Hydrosphere", "Atmosphere", "Biosphere"], correct: 2, explanation: "The atmosphere is the blanket of air surrounding the Earth." },
    { text: "The narrow zone where land, water and air interact to support life is the:", options: ["Biosphere", "Stratosphere", "Lithosphere", "Exosphere"], correct: 0, explanation: "The biosphere is the zone of life where all living organisms are found." },
    { text: "A system formed by living organisms interacting with each other and their surroundings is called a(n):", options: ["Habitat", "Ecosystem", "Community", "Environment"], correct: 1, explanation: "An ecosystem is a community of living things interacting with their physical environment." },
    { text: "Which gas makes up the largest part of the atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correct: 2, explanation: "Nitrogen makes up about 78% of the air around us." },
    { text: "Which of these is a human-made environment?", options: ["Forest", "Mountain", "Park built in a city", "Ocean"], correct: 2, explanation: "A park built by people in a city is part of the human-made environment." },
    { text: "Which day is celebrated as World Environment Day?", options: ["5 June", "22 April", "15 August", "2 October"], correct: 0, explanation: "World Environment Day is celebrated every year on 5 June." },
    { text: "Which is the best way to protect our environment?", options: ["Cutting more trees", "Using more plastic bags", "Reduce, Reuse and Recycle", "Burning garbage"], correct: 2, explanation: "Reducing, reusing and recycling saves resources and reduces pollution." }
  ],

  // ---------------------------------------------------------------------
  // English – Tenses (10)
  // ---------------------------------------------------------------------
  "quiz-eng-tenses": [
    { text: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1, explanation: "Simple present with he/she/it takes -s or -es: 'She goes'." },
    { text: "They ___ football right now.", options: ["play", "played", "are playing", "have played"], correct: 2, explanation: "'Right now' shows an action happening at this moment – present continuous." },
    { text: "I ___ my homework yesterday.", options: ["finish", "finished", "have finished", "will finish"], correct: 1, explanation: "'Yesterday' points to a completed past action – simple past." },
    { text: "We ___ visit our grandparents next Sunday.", options: ["will", "did", "were", "have"], correct: 0, explanation: "'Next Sunday' is in the future – simple future: 'will visit'." },
    { text: "He ___ already ___ his lunch.", options: ["has, eaten", "have, eat", "had, eat", "is, eating"], correct: 0, explanation: "Present perfect with he: 'has' + past participle 'eaten'." },
    { text: "When I reached the station, the train ___.", options: ["leaves", "has left", "had left", "will leave"], correct: 2, explanation: "Past perfect shows the action finished before another past action." },
    { text: "Identify the tense: 'Riya was reading a book.'", options: ["Simple past", "Past continuous", "Present continuous", "Past perfect"], correct: 1, explanation: "'was + verb-ing' forms the past continuous tense." },
    { text: "The sun ___ in the east.", options: ["rise", "rises", "rose", "is rising"], correct: 1, explanation: "Universal truths use the simple present: 'The sun rises'." },
    { text: "By next year, she ___ her course.", options: ["completes", "will have completed", "completed", "has completed"], correct: 1, explanation: "Future perfect: an action that will be finished before a future time." },
    { text: "Choose the past participle of 'write'.", options: ["wrote", "writed", "written", "writing"], correct: 2, explanation: "write – wrote – written." }
  ],

  // ---------------------------------------------------------------------
  // தமிழ் – எழுத்துக்கள் வகைகள் (10)
  // ---------------------------------------------------------------------
  "quiz-tam-letters": [
    { text: "தமிழில் உயிர் எழுத்துக்கள் எத்தனை?", options: ["10", "12", "18", "30"], correct: 1, explanation: "அ முதல் ஔ வரை 12 உயிர் எழுத்துக்கள் உள்ளன." },
    { text: "தமிழில் மெய் எழுத்துக்கள் எத்தனை?", options: ["12", "16", "18", "216"], correct: 2, explanation: "க் முதல் ன் வரை 18 மெய் எழுத்துக்கள் உள்ளன." },
    { text: "உயிர்மெய் எழுத்துக்கள் மொத்தம் எத்தனை?", options: ["216", "247", "18", "108"], correct: 0, explanation: "12 உயிர் × 18 மெய் = 216 உயிர்மெய் எழுத்துக்கள்." },
    { text: "தமிழ் எழுத்துக்கள் மொத்தம் எத்தனை?", options: ["216", "230", "247", "250"], correct: 2, explanation: "12 உயிர் + 18 மெய் + 216 உயிர்மெய் + 1 ஆய்தம் = 247." },
    { text: "ஆய்த எழுத்து எது?", options: ["ஃ", "ஔ", "ங்", "ழ்"], correct: 0, explanation: "'ஃ' ஆய்த எழுத்து எனப்படும்." },
    { text: "வல்லின எழுத்துக்கள் எவை?", options: ["ங ஞ ண ந ம ன", "க ச ட த ப ற", "ய ர ல வ ழ ள", "அ இ உ எ ஒ"], correct: 1, explanation: "க ச ட த ப ற – இவை ஆறும் வல்லின எழுத்துக்கள்." },
    { text: "மெல்லின எழுத்துக்கள் எவை?", options: ["ங ஞ ண ந ம ன", "க ச ட த ப ற", "ய ர ல வ ழ ள", "ஆ ஈ ஊ ஏ ஓ"], correct: 0, explanation: "ங ஞ ண ந ம ன – இவை ஆறும் மெல்லின எழுத்துக்கள்." },
    { text: "இடையின எழுத்துக்கள் எவை?", options: ["க ச ட த ப ற", "ங ஞ ண ந ம ன", "ய ர ல வ ழ ள", "அ ஆ இ ஈ உ ஊ"], correct: 2, explanation: "ய ர ல வ ழ ள – இவை ஆறும் இடையின எழுத்துக்கள்." },
    { text: "குறில் எழுத்துக்கள் எத்தனை?", options: ["5", "7", "12", "6"], correct: 0, explanation: "அ இ உ எ ஒ – இவை ஐந்தும் குறில் எழுத்துக்கள்." },
    { text: "நெடில் எழுத்துக்கள் எத்தனை?", options: ["5", "6", "7", "12"], correct: 2, explanation: "ஆ ஈ ஊ ஏ ஐ ஓ ஔ – இவை ஏழும் நெடில் எழுத்துக்கள்." }
  ]
};

// ===== Module: js/data/challengeQuestions.js =====
// Challenge Question Bank for Learning Challenges (Classes 6-8)
// Each challenge has exactly as many questions as its "questionsCount".
// correct = index of the right option (0-based).
const CHALLENGE_QUESTION_BANK = {
  // Weekly Science Challenge – mixed chapters (10)
  "ch-sci-weekly": [
    { text: "What is the basic structural and functional unit of all living organisms?", options: ["Tissue", "Cell", "Organ", "Nucleus"], correct: 1, explanation: "The cell is the basic unit of life." },
    { text: "Which process do green plants use to make food using sunlight?", options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"], correct: 1, explanation: "Photosynthesis uses sunlight, water and carbon dioxide to make food." },
    { text: "Which part of the cell controls all the activities?", options: ["Cell Wall", "Nucleus", "Chloroplast", "Mitochondria"], correct: 1, explanation: "The nucleus is the control centre of the cell." },
    { text: "Which mode of heat transfer needs no medium and can travel through a vacuum?", options: ["Conduction", "Convection", "Radiation", "Insulation"], correct: 2, explanation: "Heat from the Sun reaches us by radiation through empty space." },
    { text: "Which of the following turns blue litmus paper red?", options: ["Baking Soda", "Hydrochloric Acid", "Soap Solution", "Distilled Water"], correct: 1, explanation: "Acids turn blue litmus red." },
    { text: "Plants like Cuscuta (Amarbel) that take food from other plants are called:", options: ["Autotrophs", "Parasites", "Saprotrophs", "Insectivorous"], correct: 1, explanation: "Cuscuta is a parasite that grows on a host plant." },
    { text: "The normal human body temperature is:", options: ["37 °C", "40 °C", "32 °C", "100 °C"], correct: 0, explanation: "Normal body temperature is about 37 °C (98.6 °F)." },
    { text: "Which substance turns red litmus paper blue?", options: ["Lemon juice", "Vinegar", "Lime water", "Orange juice"], correct: 2, explanation: "Lime water is a base, and bases turn red litmus blue." },
    { text: "Tiny pores on the surface of leaves are called:", options: ["Stomata", "Veins", "Roots", "Petals"], correct: 0, explanation: "Stomata allow gases to move in and out of the leaf." },
    { text: "Woollen clothes keep us warm in winter because wool is a:", options: ["Good conductor of heat", "Poor conductor of heat", "Source of heat", "Reflector of light"], correct: 1, explanation: "Wool traps air, and air is a poor conductor of heat." }
  ],

  // Maths Speed Challenge (15)
  "ch-math-speed": [
    { text: "What is the sum of 3/4 and 2/3?", options: ["5/7", "17/12 (or 1 5/12)", "1", "6/12"], correct: 1, explanation: "9/12 + 8/12 = 17/12." },
    { text: "Evaluate: (−15) + (−28) = ?", options: ["−43", "43", "−13", "13"], correct: 0, explanation: "Adding two negatives: −(15 + 28) = −43." },
    { text: "What is (−6) × (−7)?", options: ["−42", "42", "−13", "13"], correct: 1, explanation: "Negative × negative = positive: 42." },
    { text: "What is 0.25 written as a fraction?", options: ["1/2", "1/4", "2/5", "1/25"], correct: 1, explanation: "0.25 = 25/100 = 1/4." },
    { text: "Solve: x + 7 = 15", options: ["x = 7", "x = 8", "x = 22", "x = 15"], correct: 1, explanation: "x = 15 − 7 = 8." },
    { text: "What is 2.5 × 4?", options: ["8", "10", "6.5", "1"], correct: 1, explanation: "2.5 × 4 = 10." },
    { text: "What is the value of 2³?", options: ["6", "8", "9", "5"], correct: 1, explanation: "2 × 2 × 2 = 8." },
    { text: "What is 15% of 200?", options: ["15", "30", "20", "45"], correct: 1, explanation: "15/100 × 200 = 30." },
    { text: "The sum of the angles of a triangle is:", options: ["90°", "180°", "270°", "360°"], correct: 1, explanation: "The angles of any triangle add up to 180°." },
    { text: "What is (−36) ÷ 4?", options: ["9", "−9", "−8", "8"], correct: 1, explanation: "Negative ÷ positive = negative: −9." },
    { text: "Solve: 3y = 21", options: ["y = 6", "y = 7", "y = 18", "y = 24"], correct: 1, explanation: "y = 21 ÷ 3 = 7." },
    { text: "What is 1.2 + 0.85?", options: ["2.05", "1.97", "2.5", "1.105"], correct: 0, explanation: "Line up the decimal points: 1.20 + 0.85 = 2.05." },
    { text: "The perimeter of a square of side 6 cm is:", options: ["12 cm", "24 cm", "36 cm", "18 cm"], correct: 1, explanation: "Perimeter = 4 × side = 4 × 6 = 24 cm." },
    { text: "The ratio 12 : 18 in simplest form is:", options: ["2 : 3", "3 : 2", "4 : 6", "6 : 9"], correct: 0, explanation: "Divide both by 6: 2 : 3." },
    { text: "What is the area of a rectangle 8 cm long and 5 cm wide?", options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"], correct: 2, explanation: "Area = length × breadth = 8 × 5 = 40 cm²." }
  ],

  // Social Science Challenge (10)
  "ch-soc-env": [
    { text: "Which layer of the Earth do we live on?", options: ["Mantle", "Core", "Crust", "Outer core"], correct: 2, explanation: "We live on the crust, the thin outermost layer." },
    { text: "Rocks formed by the cooling of molten magma are called:", options: ["Sedimentary rocks", "Igneous rocks", "Metamorphic rocks", "Fossil rocks"], correct: 1, explanation: "Igneous rocks form when molten magma cools and becomes solid." },
    { text: "Which gas layer protects us from harmful ultraviolet rays of the Sun?", options: ["Oxygen", "Ozone", "Nitrogen", "Carbon dioxide"], correct: 1, explanation: "The ozone layer absorbs harmful UV rays." },
    { text: "The layer of the atmosphere closest to the Earth is the:", options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"], correct: 2, explanation: "Almost all weather happens in the troposphere." },
    { text: "A sudden shaking of the Earth's surface is called a(n):", options: ["Volcano", "Earthquake", "Tsunami", "Landslide"], correct: 1, explanation: "An earthquake is caused by movement of the Earth's plates." },
    { text: "The process by which water changes into water vapour is called:", options: ["Condensation", "Evaporation", "Precipitation", "Freezing"], correct: 1, explanation: "Heat from the Sun causes evaporation." },
    { text: "Which is the largest ocean in the world?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], correct: 2, explanation: "The Pacific Ocean is the largest and deepest ocean." },
    { text: "The periodic rise and fall of sea water twice a day is called:", options: ["Waves", "Tides", "Currents", "Floods"], correct: 1, explanation: "Tides are caused mainly by the Moon's gravitational pull." },
    { text: "Forests whose trees shed their leaves in a particular season are called:", options: ["Evergreen forests", "Deciduous forests", "Grasslands", "Desert vegetation"], correct: 1, explanation: "Deciduous (monsoon) trees shed their leaves in the dry season." },
    { text: "Which instrument is used to measure air pressure?", options: ["Thermometer", "Barometer", "Rain gauge", "Anemometer"], correct: 1, explanation: "A barometer measures atmospheric pressure." }
  ],

  // English Grammar Challenge (10)
  "ch-eng-gram": [
    { text: "Identify the noun: \"The happy boy played in the garden.\"", options: ["happy", "played", "garden", "in"], correct: 2, explanation: "\"Garden\" is the name of a place, so it is a noun." },
    { text: "Choose the correct article: \"___ elephant is a big animal.\"", options: ["A", "An", "The", "No article"], correct: 1, explanation: "Use \"an\" before words beginning with a vowel sound." },
    { text: "Which word is an adjective? \"She wore a beautiful dress.\"", options: ["She", "wore", "beautiful", "dress"], correct: 2, explanation: "\"Beautiful\" describes the dress, so it is an adjective." },
    { text: "Choose the correct preposition: \"The book is ___ the table.\"", options: ["on", "at", "of", "for"], correct: 0, explanation: "\"On\" shows the book is resting on the surface of the table." },
    { text: "Pick the correct plural of \"child\".", options: ["childs", "childes", "children", "childrens"], correct: 2, explanation: "\"Child\" has an irregular plural: \"children\"." },
    { text: "Identify the adverb: \"He ran quickly to school.\"", options: ["He", "ran", "quickly", "school"], correct: 2, explanation: "\"Quickly\" tells us how he ran, so it is an adverb." },
    { text: "Choose the correct pronoun: \"___ are going to the park.\"", options: ["Me", "Us", "We", "Our"], correct: 2, explanation: "\"We\" is the subject pronoun." },
    { text: "Which sentence is correct?", options: ["She don't like apples.", "She doesn't like apples.", "She not like apples.", "She doesn't likes apples."], correct: 1, explanation: "With \"she\", use \"doesn't\" + the base verb \"like\"." },
    { text: "Find the conjunction: \"I was tired, but I finished my work.\"", options: ["tired", "but", "finished", "work"], correct: 1, explanation: "\"But\" joins two contrasting ideas, so it is a conjunction." },
    { text: "What is the opposite (antonym) of \"brave\"?", options: ["bold", "cowardly", "strong", "fearless"], correct: 1, explanation: "\"Cowardly\" is the opposite of \"brave\"." }
  ]
};

// ===== Module: js/components/icons.js =====
// Reusable Crisp SVG Icons for Learning Universe LMS
const ICONS = {
  // Brand Logo with open book & rainbow radiant pages
  calendar: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  `,

  crossCircle: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  `,

  brandLogo: (size = 36) => `
    <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="luPageLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06B6D4"/>
          <stop offset="100%" stop-color="#3B82F6"/>
        </linearGradient>
        <linearGradient id="luPageRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EC4899"/>
          <stop offset="100%" stop-color="#8B5CF6"/>
        </linearGradient>
        <linearGradient id="luSparks" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#EF4444"/>
        </linearGradient>
      </defs>
      <!-- Book spine & pages -->
      <path d="M24 16C21 12 11 12 6 15V36C12 33 20 33 24 37C28 33 36 33 42 36V15C37 12 27 12 24 16Z" fill="#FFFFFF" fill-opacity="0.15"/>
      <!-- Left wings -->
      <path d="M24 37C20 33 12 33 6 36V16C11 13 20 13 24 17V37Z" fill="url(#luPageLeft)"/>
      <path d="M24 34C20 31 13 31 8 33V18C13 16 20 16 24 19V34Z" fill="#67E8F9" fill-opacity="0.6"/>
      <!-- Right wings -->
      <path d="M24 37C28 33 36 33 42 36V16C37 13 28 13 24 17V37Z" fill="url(#luPageRight)"/>
      <path d="M24 34C28 31 35 31 40 33V18C35 16 28 16 24 19V34Z" fill="#F472B6" fill-opacity="0.6"/>
      <!-- Glowing center spark -->
      <path d="M24 6L25.8 11.2L31 13L25.8 14.8L24 20L22.2 14.8L17 13L22.2 11.2L24 6Z" fill="url(#luSparks)"/>
      <circle cx="15" cy="8" r="2" fill="#FBBF24"/>
      <circle cx="33" cy="8" r="2" fill="#38BDF8"/>
    </svg>
  `,

  home: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  `,

  book: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  `,

  target: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="2.2" fill="currentColor"/>
    </svg>
  `,

  quiz: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 11l3 3L22 4"></path>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  `,

  document: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,

  assignment: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,

  progress: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  `,

  barChart: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  `,

  checkSquare: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  `,

  infoCircle: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  `,

  rotateCw: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
    </svg>
  `,

  editDoc: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  `,

  trophy: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  `,

  robot: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
  `,

  user: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  `,

  video: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  `,

  flame: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-vivid-flame">
      <defs>
        <linearGradient id="vividFlameGrad_${size}" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#EA580C"/>
          <stop offset="45%" stop-color="#F97316"/>
          <stop offset="100%" stop-color="#FBBF24"/>
        </linearGradient>
        <linearGradient id="vividFlameInner_${size}" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#FEF08A"/>
        </linearGradient>
      </defs>
      <!-- Outer Flame -->
      <path d="M12 2C10.5 4.5 9 6.8 9 9C9 10.2 9.5 11.2 10.2 12C8.5 12.2 7 13.5 7 15.5C7 18.5 9.2 21 12 21C14.8 21 17 18.5 17 15.5C17 13.8 15.8 12.2 14.5 11C14 7.5 16 5.5 12 2Z" fill="url(#vividFlameGrad_${size})"/>
      <!-- Inner Flame Core -->
      <path d="M12 11.5C11.2 12.5 10.5 13.8 10.5 15.2C10.5 16.8 11.2 18.5 12 18.5C12.8 18.5 13.5 16.8 13.5 15.2C13.5 13.5 12.8 12.5 12 11.5Z" fill="url(#vividFlameInner_${size})"/>
    </svg>
  `,

  star: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-vivid-star">
      <defs>
        <linearGradient id="vividStarGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047"/>
          <stop offset="50%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#D97706"/>
        </linearGradient>
      </defs>
      <!-- 3D Gold Star Body -->
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#vividStarGrad_${size})" stroke="#D97706" stroke-width="0.8" stroke-linejoin="round"/>
      <!-- Top Left Shimmer Facet -->
      <polygon points="12 2 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" fill="#FFFFFF" fill-opacity="0.32"/>
    </svg>
  `,

  search: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,

  bell: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  `,

  chevronRight: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  `,

  chevronSmall: (size = 12, color = "#FFFFFF") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  `,

  chevronLeft: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  `,

  chevronDown: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,

  checkCircle: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  `,

  play: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  `,

  pause: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  `,

  clock: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,

  lock: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,

  eye: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `,

  eyeOff: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  `,

  send: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  `,

  logout: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  `,

  shield: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  `,

  help: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  `,

  upload: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  `,

  sparkles: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    </svg>
  `,

  close: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `,

  mic: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="22"></line>
    </svg>
  `,

  thumbsUp: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 10v12"></path>
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4.5a2 2 0 0 0 1.66-.89L13.8 2.5a2 2 0 0 1 3.2 2Z"></path>
    </svg>
  `,

  thumbsDown: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 14V2"></path>
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5a2 2 0 0 0-1.66.89L10.2 21.5a2 2 0 0 1-3.2-2Z"></path>
    </svg>
  `,

  chatBubble: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,

  lightbulb: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="9" y1="18" x2="15" y2="18"></line>
      <line x1="10" y1="22" x2="14" y2="22"></line>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5h6.18z"></path>
    </svg>
  `,

  save: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
      <polyline points="17 21 17 13 7 13 7 21"></polyline>
      <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
  `,

  camera: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  `,

  sliders: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="4" y1="21" x2="4" y2="14"></line>
      <line x1="4" y1="10" x2="4" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="3"></line>
      <line x1="20" y1="21" x2="20" y2="16"></line>
      <line x1="20" y1="12" x2="20" y2="3"></line>
      <line x1="1" y1="14" x2="7" y2="14"></line>
      <line x1="9" y1="8" x2="15" y2="8"></line>
      <line x1="17" y1="16" x2="23" y2="16"></line>
    </svg>
  `,

  headset: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </svg>
  `,

  edit: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `,

  sun: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `,

  moon: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `,

  monitor: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  `,

  key: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21 2-2 2m-1.5 1.5L16 7l-1.5-1.5L13 7l-1.5-1.5L10 7l-2-2"></path>
      <circle cx="7.5" cy="15.5" r="5.5"></circle>
    </svg>
  `,

  smartphone: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  `
};

// ==========================================================================
// User-supplied glossy icons (assets/more icons/ui) override the line icons
// everywhere they are used (header chips, metric tiles, option tiles...).
// ==========================================================================
const LU_MORE_ICON_DIR = "assets/more%20icons/ui/";
const luMoreIcon = (file, alt) => (size = 20) =>
  `<img class="lu-icon-img lu-glossy-icon" src="${LU_MORE_ICON_DIR}${file}.png" alt="${alt}" draggable="false" style="width:${size}px;height:${size}px;object-fit:contain;display:inline-block;vertical-align:middle;flex-shrink:0;" />`;

Object.assign(ICONS, {
  flame: luMoreIcon("flame", "Streak"),
  star: luMoreIcon("star", "Points"),
  bell: luMoreIcon("bell", "Notifications"),
  clock: luMoreIcon("stopwatch", "Time"),
  stopwatch: luMoreIcon("stopwatch", "Time"),
  document: luMoreIcon("document", "Document"),
  chatBubble: luMoreIcon("ask_doubt_bubble", "Ask a doubt"),
  lightbulb: luMoreIcon("lightbulb", "Idea"),
  sliders: luMoreIcon("settings_sliders", "Preferences"),
  shield: luMoreIcon("shield", "Security"),
  headset: luMoreIcon("headset", "Help & Support"),
  video: luMoreIcon("video_camera", "Video")
});

// More supplied icons (assets/dashboard/ui) for the remaining outline icons
const LU_DASH_ICON_DIR = "assets/dashboard/ui/";
const luDashIcon = (file, alt) => (size = 20) =>
  `<img class="lu-icon-img lu-glossy-icon" src="${LU_DASH_ICON_DIR}${file}.png" alt="${alt}" draggable="false" style="width:${size}px;height:${size}px;object-fit:contain;display:inline-block;vertical-align:middle;flex-shrink:0;" />`;

Object.assign(ICONS, {
  target: luDashIcon("learning_challenges_target", "Target"),
  trophy: luDashIcon("achievement_trophy", "Trophy"),
  calendar: luDashIcon("today_tasks_calendar", "Calendar"),
  clipboard: luDashIcon("interactive_quiz_clipboard", "Clipboard"),
  assignment: luDashIcon("nav_assignments", "Assignment"),
  quiz: luDashIcon("nav_quizzes", "Quiz"),
  book: luDashIcon("my_learning_book", "Book"),
  chart: luDashIcon("nav_progress", "Progress"),
  barChart: luDashIcon("nav_progress", "Progress"),
  progress: luDashIcon("nav_progress", "Progress"),
  checkCircle: luDashIcon("completed_check", "Done"),
  robot: luDashIcon("ai_study_buddy_robot", "AI Study Buddy"),
  user: luDashIcon("learning_profile", "Profile"),
  home: luDashIcon("nav_home", "Home"),
  send: luDashIcon("ai_send_button", "Send")
});

// Final supplied icons (assets/more icons/ui)
Object.assign(ICONS, {
  classmates: luMoreIcon("classmates", "Classmates"),
  retry: luMoreIcon("retry_arrows", "Attempts"),
  devices: luMoreIcon("devices", "Devices"),
  school: luMoreIcon("school", "School"),
  key: luMoreIcon("key", "Password"),
  liveDot: luMoreIcon("live_dot", "Live"),
  lockedSpeedBadge: luMoreIcon("badge_locked_speed", "Locked badge")
});

// Swap a known emoji for its supplied icon (unknown emoji are kept as text)
const LU_EMOJI_ICON_MAP = {
  "📅": "calendar", "🏆": "trophy", "⏰": "clock", "⏱": "clock", "⏱️": "clock",
  "⭐": "star", "📢": "bell", "🔔": "bell", "📄": "document", "📝": "document",
  "❓": "chatBubble", "💬": "chatBubble", "🛡️": "shield", "🛡": "shield",
  "🎯": "target", "📖": "book", "📚": "book", "🔥": "flame", "💡": "lightbulb",
  "🎧": "headset", "⚙️": "sliders", "🎥": "video", "📊": "chart", "📋": "clipboard",
  "👥": "classmates", "🔄": "retry", "💻": "devices", "📱": "devices", "🏫": "school",
  "🔤": "school", "🌐": "school", "🔑": "key", "🔴": "liveDot"
};
ICONS.fromEmoji = function (emoji, size = 20) {
  const key = LU_EMOJI_ICON_MAP[emoji];
  if (key && ICONS[key]) return ICONS[key](size);
  return `<span style="font-size:${Math.round(size * 0.85)}px;line-height:1;">${emoji}</span>`;
};
ICONS.withIcons = function (text, size = 14) {
  let out = String(text || "");
  Object.keys(LU_EMOJI_ICON_MAP).sort((a, b) => b.length - a.length).forEach(e => {
    if (out.indexOf(e) !== -1) out = out.split(e).join(ICONS.fromEmoji(e, size));
  });
  return out;
};

// ===== Module: js/components/confetti.js =====
// Canvas Confetti Engine for Learning Universe LMS Celebrations
function triggerConfetti(duration = 2500) {
  try {
    if (typeof document === 'undefined' || !document.createElement) return;
    let canvas = document.getElementById("confetti-canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "confetti-canvas";
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "999999";
      if (document.body && document.body.appendChild) {
        document.body.appendChild(canvas);
      }
    }

    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = (typeof window !== 'undefined' ? window.innerWidth : 800) || 800;
    canvas.height = (typeof window !== 'undefined' ? window.innerHeight : 600) || 600;

    const colors = ["#7C3AED", "#EC4899", "#3B82F6", "#10B981", "#F59E0B", "#F43F5E", "#06B6D4"];
    const piecesCount = 120;
    const pieces = [];

    for (let i = 0; i < piecesCount; i++) {
      pieces.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.4 + (Math.random() - 0.5) * 100,
        w: Math.random() * 10 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 18,
        vy: Math.random() * -14 - 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.35,
        drag: 0.96,
        opacity: 1
      });
    }

    const startTime = Date.now();

    function render() {
      const elapsed = Date.now() - startTime;
      if (elapsed > duration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= p.drag;
        p.rotation += p.rotationSpeed;

        if (elapsed > duration - 800) {
          p.opacity = Math.max(0, (duration - elapsed) / 800);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(render);
      }
    }

    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(render);
    }
  } catch (e) {
    // Graceful fallback
  }
}

// ===== Module: js/components/graphics.js =====
// High-Fidelity 3D-styled SVG Illustrations matching Learning Universe LMS reference designs
const GRAPHICS = {
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
        <linearGradient id="pcBar1_${width}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7DD3FC"/>
          <stop offset="100%" stop-color="#38BDF8"/>
        </linearGradient>
        <linearGradient id="pcBar2_${width}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#0284C7"/>
        </linearGradient>
        <linearGradient id="pcBar3_${width}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284C7"/>
          <stop offset="100%" stop-color="#0369A1"/>
        </linearGradient>
      </defs>
      
      <!-- Base Shadow (Matching Reference) -->
      <ellipse cx="44" cy="82" rx="36" ry="6.5" fill="#DDF4FF" fill-opacity="0.8"/>

      <!-- Bar 1 (Short - Light Blue) -->
      <rect x="14" y="52" width="14" height="28" rx="7" fill="url(#pcBar1_${width})"/>
      <!-- Bar 2 (Medium - Cyan Blue) -->
      <rect x="34" y="38" width="14" height="42" rx="7" fill="url(#pcBar2_${width})"/>
      <!-- Bar 3 (Tall - Deep Blue) -->
      <rect x="54" y="20" width="14" height="60" rx="7" fill="url(#pcBar3_${width})"/>

      <!-- Cyan Ascending Trend Arrow (Matching Reference) -->
      <path d="M8 58 Q34 40 68 18" stroke="#00B4D8" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <polygon points="62,13 74,16 67,26" fill="#0284C7"/>

      <!-- Golden Sphere at Arrow Tip (Matching Reference) -->
      <circle cx="74" cy="15" r="4.5" fill="#FBBF24" stroke="#F59E0B" stroke-width="1.2"/>
      <circle cx="73" cy="13.5" r="1.2" fill="#FFFFFF"/>

      <!-- Sparkle Cyan Dot -->
      <circle cx="34" cy="33" r="2" fill="#38BDF8"/>
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
          <linearGradient id="lampGrad_${size}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A"/>
            <stop offset="50%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
        </defs>
        <!-- Drop Shadow -->
        <polygon points="32,8 57,21 57,47 32,59 7,47 7,21" fill="#4C1D95" fill-opacity="0.3"/>
        <!-- Main 3D Hexagon Body -->
        <polygon points="32,5 56,18 56,44 32,57 8,44 8,18" fill="url(#hexPurpleGrad_${size})" stroke="#DDD6FE" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Top Half Gloss Highlight -->
        <path d="M32 5 L56 18 L56 31 C56 31 43 25 32 25 C21 25 8 31 8 31 L8 18 Z" fill="#FFFFFF" fill-opacity="0.35"/>
        
        <!-- Glowing Core Circle -->
        <circle cx="32" cy="31" r="14" fill="#6D28D9" fill-opacity="0.6"/>
        
        <!-- Glowing Lantern / Lamp (Knowledge Flame) -->
        <rect x="28" y="20" width="8" height="3" rx="1.5" fill="#FDE047"/>
        <line x1="32" y1="18" x2="32" y2="20" stroke="#FDE047" stroke-width="1.5"/>
        <path d="M26 23 L38 23 C40 28 40 34 37 38 L27 38 C24 34 24 28 26 23 Z" fill="url(#lampGrad_${size})" stroke="#FEF08A" stroke-width="1.2"/>
        <path d="M32 25 C33.5 28 34.5 30 34.5 32 C34.5 33.5 33.5 35 32 35 C30.5 35 29.5 33.5 29.5 32 C29.5 30 30.5 28 32 25 Z" fill="#FFFFFF"/>
        <rect x="27" y="38" width="10" height="3" rx="1" fill="#D97706" stroke="#FEF08A" stroke-width="0.8"/>
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

// ==========================================================================
// User-supplied icon set overrides (assets/dashboard/ui + assets/MY learning/ui)
// Every screen calls GRAPHICS.*, so swapping these here applies the
// supplied icons across the whole website.
// ==========================================================================
const LU_ICON_DIR = "assets/dashboard/ui/";
const LU_SUBJECT_DIR = "assets/MY%20learning/ui/";

function luIconImg(src, w, h = w, alt = "") {
  return `<img class="lu-icon-img" src="${src}" alt="${alt}" draggable="false" style="width:${w}px;height:${h}px;object-fit:contain;display:inline-block;vertical-align:middle;flex-shrink:0;" />`;
}

const luSq = (file, alt) => (size = 48) => luIconImg(LU_ICON_DIR + file, size, size, alt);
const luRect = (file, alt) => (w = 90, h = w) => luIconImg(LU_ICON_DIR + file, w, h, alt);

Object.assign(GRAPHICS, {
  // Subjects
  scienceFlaskIcon: luSq("science_flask.png", "Science"),
  mathsCalcIcon: luSq("maths_calculator.png", "Maths"),
  socialGlobeIcon: luSq("social_globe.png", "Social Science"),
  englishBookIcon: luSq("english_book.png", "English"),
  tamilSubjectIcon: (size = 96) => luIconImg(LU_SUBJECT_DIR + "tamil.png", size, size, "Tamil"),
  tamilLetterIcon: (size = 46) => luIconImg(LU_SUBJECT_DIR + "tamil.png", size, size, "Tamil"),
  flask3D: luRect("science_flask.png", "Science"),
  calculator3D: luRect("maths_calculator.png", "Maths"),
  globe3D: luRect("social_globe.png", "Social Science"),
  bookQuill3D: luRect("english_book.png", "English"),

  // Quizzes, progress, challenges
  quizClipboard3D: luRect("interactive_quiz_clipboard.png", "Quiz"),
  clipboardWithPencil: luSq("interactive_quiz_clipboard.png", "Quiz"),
  progressChart3D: luRect("subject_progress_insights.png", "Progress"),
  targetBullseye: luSq("learning_challenges_target.png", "Challenge"),
  goldTrophy: luSq("achievement_trophy.png", "Trophy"),
  successCheckBadge: luSq("completed_check.png", "Completed"),

  // Badges
  badgeQuizMaster: luSq("quiz_master_badge.png", "Quiz Master"),
  badgeChapterCompleter: luSq("chapter_completer_badge.png", "Chapter Completer"),

  // AI Study Buddy (aiRobotAvatarCircle reuses aiRobotMini3D)
  aiRobot3D: luRect("ai_study_buddy_robot.png", "AI Study Buddy"),
  aiRobotMini3D: luRect("ai_study_buddy_robot.png", "AI Study Buddy"),

  // Round subject badges (assignments, small rows)
  subjectBadgeIcon: (subjectId, size = 30) => {
    const map = { science: "science_subject", maths: "maths_subject", social: "social_subject", english: "english_subject" };
    if (subjectId === "tamil") return luIconImg(LU_SUBJECT_DIR + "tamil.png", size, size, "Tamil");
    return luIconImg(LU_ICON_DIR + (map[subjectId] || "upcoming_tasks") + ".png", size, size, subjectId || "Assignment");
  },

  // Status ticks
  checkDoneIcon: luSq("completed_check.png", "Done"),
  checkTodoIcon: luSq("empty_checkbox.png", "To do"),

  // Misc supplied icons
  calendarIcon: luSq("today_tasks_calendar.png", "Calendar"),
  quizPencilIcon: luSq("interactive_quiz_pencil.png", "Quiz"),
  sendButtonIcon: luSq("ai_send_button.png", "Send"),
  profileIcon: luSq("learning_profile.png", "Profile"),
  learningBookIcon: luSq("my_learning_book.png", "Learning"),

  // Decorative books
  sidebarBooksPlant: (w = 180, h = 140) => luIconImg(LU_ICON_DIR + "books_plant.png", w, h, "Books"),
  heroRightBooks: (w = 96, h = 80) => luIconImg(LU_ICON_DIR + "books_plant.png", w, h, "Books")
});

// Badges, certificate, crown (assets/more icons/ui)
const LU_MORE_DIR = "assets/more%20icons/ui/";
const luMore = (file, alt) => (size = 54) => luIconImg(LU_MORE_DIR + file + ".png", size, size, alt);
Object.assign(GRAPHICS, {
  badgeConsistentLearner: luMore("badge_consistent_learner", "Consistent Learner"),
  badgeAssignmentStar: luMore("badge_assignment_star", "Assignment Star"),
  badgeQuickLearner: luMore("badge_quick_learner", "Quick Learner"),
  badgeSubjectExplorer: luMore("badge_subject_explorer", "Subject Explorer"),
  certificateMedal: luMore("certificate", "Certificate"),
  goldenCrown: luMore("crown", "Crown")
});

// ===== Module: js/screens/dashboard.js =====
// Screen 02: Dashboard (Home) - Exact Match to Reference Design (Image 1)
function renderDashboardScreen(container, state, app) {
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
                src="assets/dashboard/ui/students.png" 
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

            <!-- Right: Books & Plant illustration -->
            <div class="hero-right-books-wrap dash-hero-books">
              <img src="assets/dashboard/ui/books_plant.png" alt="Books and plant" class="dash-hero-books-img" />
            </div>

          </div>

          <!-- Learning Challenges Section -->
          <div class="lms-card-v2" style="margin-top: 22px;">
            <div class="card-header-row" style="margin-bottom: 14px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img class="dash-ic" src="assets/dashboard/ui/learning_challenges_target.png" alt="Learning Challenges" style="width:34px;height:34px;object-fit:contain;" />
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
                  <div class="challenge-icon-box-v2" style="background: #EFF6FF;">
                    <img class="dash-ic" src="assets/dashboard/ui/science_flask.png" alt="" style="width:36px;height:36px;object-fit:contain;" />
                  </div>
                  <div>
                    <h4 style="font-size: 14px; font-weight: 800; color: #1E293B;">Science</h4>
                    <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">The Cell</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div class="lu-bar-track" style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden;">
                    <div class="lu-bar-fill" style="width: 60%; height: 100%; background: linear-gradient(90deg, #0284C7, #38BDF8); border-radius: 9999px;"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: #0284C7; min-width: 28px; text-align: right;">60%</span>
                  <img class="dash-next-arrow" src="assets/dashboard/ui/next_arrow.png" alt="Open" style="width:28px;height:28px;object-fit:contain;" />
                </div>
              </div>

              <!-- 2. Maths -->
              <div class="challenge-item-card-v2" data-screen="07" data-subject="maths">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                  <div class="challenge-icon-box-v2" style="background: linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%);">
                    <img class="dash-ic" src="assets/dashboard/ui/maths_calculator.png" alt="" style="width:36px;height:36px;object-fit:contain;" />
                  </div>
                  <div>
                    <h4 style="font-size: 14px; font-weight: 800; color: #1E293B;">Maths</h4>
                    <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">Fractions & Decimals</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div class="lu-bar-track" style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden;">
                    <div class="lu-bar-fill" style="width: 75%; height: 100%; background: linear-gradient(90deg, #10B981, #34D399); border-radius: 9999px;"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: #10B981; min-width: 28px; text-align: right;">75%</span>
                  <img class="dash-next-arrow" src="assets/dashboard/ui/next_arrow.png" alt="Open" style="width:28px;height:28px;object-fit:contain;" />
                </div>
              </div>

              <!-- 3. Social -->
              <div class="challenge-item-card-v2" data-screen="07" data-subject="social">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                  <div class="challenge-icon-box-v2" style="background: linear-gradient(135deg, #D1FAE5 0%, #E0F2FE 100%);">
                    <img class="dash-ic" src="assets/dashboard/ui/social_globe.png" alt="" style="width:36px;height:36px;object-fit:contain;" />
                  </div>
                  <div>
                    <h4 style="font-size: 14px; font-weight: 800; color: #1E293B;">Social</h4>
                    <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">Our Environment</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div class="lu-bar-track" style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden;">
                    <div class="lu-bar-fill" style="width: 40%; height: 100%; background: linear-gradient(90deg, #10B981, #059669); border-radius: 9999px;"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: #059669; min-width: 28px; text-align: right;">40%</span>
                  <img class="dash-next-arrow" src="assets/dashboard/ui/next_arrow.png" alt="Open" style="width:28px;height:28px;object-fit:contain;" />
                </div>
              </div>

              <!-- 4. English -->
              <div class="challenge-item-card-v2" data-screen="07" data-subject="english">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                  <div class="challenge-icon-box-v2" style="background: linear-gradient(135deg, #FCE7F3 0%, #FDF2F8 100%);">
                    <img class="dash-ic" src="assets/dashboard/ui/english_book.png" alt="" style="width:36px;height:36px;object-fit:contain;" />
                  </div>
                  <div>
                    <h4 style="font-size: 14px; font-weight: 800; color: #1E293B;">English</h4>
                    <span style="font-size: 11.5px; color: #64748B; font-weight: 500;">Reading Comprehension</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div class="lu-bar-track" style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden;">
                    <div class="lu-bar-fill" style="width: 80%; height: 100%; background: linear-gradient(90deg, #EC4899, #F43F5E); border-radius: 9999px;"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 800; color: #DB2777; min-width: 28px; text-align: right;">80%</span>
                  <img class="dash-next-arrow" src="assets/dashboard/ui/next_arrow.png" alt="Open" style="width:28px;height:28px;object-fit:contain;" />
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
                  <img class="dash-ic" src="assets/dashboard/ui/interactive_quiz_pencil.png" alt="" style="width:24px;height:24px;object-fit:contain;" />
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
                <img class="dash-promo-art" src="assets/dashboard/ui/interactive_quiz_clipboard.png" alt="Interactive Quizzes" style="width:88px;height:88px;object-fit:contain;" />
              </div>
            </div>

            <!-- Subject Progress Insights Card -->
            <div class="promo-card-v2" id="dash-progress-promo-btn" style="background: #FFFFFF;">
              <div style="flex: 1; padding-right: 12px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <img class="dash-ic" src="assets/dashboard/ui/nav_progress.png" alt="" style="width:22px;height:22px;object-fit:contain;" />
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
                <img class="dash-promo-art" src="assets/dashboard/ui/subject_progress_insights.png" alt="Progress Insights" style="width:88px;height:88px;object-fit:contain;" />
              </div>
            </div>

          </div>

          <!-- Bottom Row: 2 Cards (Achievement Milestones & AI Study Buddy) -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 22px;">
            
            <!-- Achievement Milestones Card -->
            <div class="achievements-card-v2" id="dash-view-achievements-btn" style="background: #FFFFFF;">
              <div class="card-header-row" style="margin-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <img class="dash-ic" src="assets/dashboard/ui/achievement_trophy.png" alt="" style="width:24px;height:24px;object-fit:contain;" />
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
                  <img class="dash-badge" src="assets/dashboard/ui/quiz_master_badge.png" alt="Quiz Master" style="width:50px;height:50px;object-fit:contain;" />
                  <div>
                    <h5 style="font-size: 11px; font-weight: 800; color: #1E293B; margin: 0; line-height: 1.2;">Quiz</h5>
                    <span style="font-size: 10px; color: #64748B;">Master</span>
                  </div>
                </div>

                <div class="milestone-badge-col">
                  <img class="dash-badge" src="assets/dashboard/ui/chapter_completer_badge.png" alt="Chapter Completer" style="width:50px;height:50px;object-fit:contain;" />
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
                    <img class="dash-ic" src="assets/dashboard/ui/ai_study_buddy_robot.png" alt="" style="width:24px;height:24px;object-fit:contain;" />
                    <h4 style="font-size: 16px; font-weight: 800; color: #1E1B4B; margin: 0;">AI Study Buddy</h4>
                  </div>
                  <div style="font-size: 12px; font-weight: 700; color: #7C3AED; margin-bottom: 8px;">
                    Your 24×7 Learning Companion
                  </div>

                  <!-- Checklist items -->
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 11px; color: #475569; font-weight: 600; margin-bottom: 8px;">
                    <div>${GRAPHICS.checkDoneIcon(13)} Ask Questions</div>
                    <div>${GRAPHICS.checkDoneIcon(13)} Get Instant Answers</div>
                    <div>${GRAPHICS.checkDoneIcon(13)} Explain Concepts Simply</div>
                    <div>${GRAPHICS.checkDoneIcon(13)} Practice & Revise</div>
                  </div>
                </div>

                <div style="flex-shrink: 0; cursor: pointer;" id="dash-robot-avatar-click">
                  <img class="dash-robot-art" src="assets/dashboard/ui/ai_study_buddy_robot.png" alt="AI Study Buddy" style="width:78px;height:78px;object-fit:contain;" />
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
                    ${ICONS.chatBubble(18)}
                    <span style="font-size: 10px; font-weight: 700; color: #6D28D9; line-height: 1.1;">Ask Doubt</span>
                  </button>

                  <button 
                    class="dash-ai-quick-btn" 
                    id="dash-qa-summarize"
                    style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 6px 4px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px;"
                  >
                    ${ICONS.document(18)}
                    <span style="font-size: 10px; font-weight: 700; color: #475569; line-height: 1.1;">Summarize</span>
                  </button>

                  <button 
                    class="dash-ai-quick-btn" 
                    id="dash-qa-quiz"
                    style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 6px 4px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px;"
                  >
                    ${GRAPHICS.quizPencilIcon(18)}
                    <span style="font-size: 10px; font-weight: 700; color: #475569; line-height: 1.1;">Practice Quiz</span>
                  </button>

                  <button 
                    class="dash-ai-quick-btn" 
                    id="dash-qa-plan"
                    style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 6px 4px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px;"
                  >
                    ${GRAPHICS.calendarIcon(18)}
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
                  <button class="ai-quick-send-btn dash-send-img-btn" id="dash-quick-ai-btn" title="Send">
                    <img class="dash-ic" src="assets/dashboard/ui/ai_send_button.png" alt="Send" style="width:34px;height:34px;object-fit:contain;" />
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
                <img class="dash-ic" src="assets/dashboard/ui/today_tasks_calendar.png" alt="" style="width:24px;height:24px;object-fit:contain;" />
                <h3 style="font-size: 15px; font-weight: 800; color: #1E293B;">Today's Tasks</h3>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              
              <!-- Task 1 (Checked Green) -->
              <div class="task-row-v2" data-screen="05">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img class="dash-check" src="assets/dashboard/ui/completed_check.png" alt="Done" style="width:22px;height:22px;object-fit:contain;" />
                  <span style="font-size: 12.5px; font-weight: 700; color: #1E293B;">Watch: The Cell - Video Lesson</span>
                </div>
                <span style="color: #94A3B8; font-size: 12px;">❯</span>
              </div>

              <!-- Task 2 (Checked Green) -->
              <div class="task-row-v2" data-screen="06">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img class="dash-check" src="assets/dashboard/ui/completed_check.png" alt="Done" style="width:22px;height:22px;object-fit:contain;" />
                  <span style="font-size: 12.5px; font-weight: 700; color: #1E293B;">Practice: Quick Quiz (Science)</span>
                </div>
                <span style="color: #94A3B8; font-size: 12px;">❯</span>
              </div>

              <!-- Task 3 (Unchecked Circle) -->
              <div class="task-row-v2" data-screen="08">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img class="dash-check" src="assets/dashboard/ui/empty_checkbox.png" alt="To do" style="width:22px;height:22px;object-fit:contain;" />
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
                <img class="dash-ic" src="assets/dashboard/ui/subject_progress_insights.png" alt="" style="width:24px;height:24px;object-fit:contain;" />
                <h3 style="font-size: 15px; font-weight: 800; color: #1E293B;">Subject Progress</h3>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              
              <!-- Science -->
              <div class="progress-sub-row-v2" data-screen="04">
                <img class="dash-ic" src="assets/dashboard/ui/science_subject.png" alt="" style="width:30px;height:30px;object-fit:contain;" />
                <span style="font-size: 12.5px; font-weight: 700; color: #1E293B; width: 52px;">Science</span>
                <div class="lu-bar-track" style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden; margin: 0 8px;">
                  <div class="lu-bar-fill" style="width: 72%; height: 100%; background: linear-gradient(90deg, #0284C7, #38BDF8); border-radius: 9999px;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 800; color: #1E293B; min-width: 28px; text-align: right;">72%</span>
              </div>

              <!-- Maths -->
              <div class="progress-sub-row-v2" data-screen="03">
                <img class="dash-ic" src="assets/dashboard/ui/maths_subject.png" alt="" style="width:30px;height:30px;object-fit:contain;" />
                <span style="font-size: 12.5px; font-weight: 700; color: #1E293B; width: 52px;">Maths</span>
                <div class="lu-bar-track" style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden; margin: 0 8px;">
                  <div class="lu-bar-fill" style="width: 68%; height: 100%; background: linear-gradient(90deg, #F59E0B, #FBBF24); border-radius: 9999px;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 800; color: #1E293B; min-width: 28px; text-align: right;">68%</span>
              </div>

              <!-- Social -->
              <div class="progress-sub-row-v2" data-screen="03">
                <img class="dash-ic" src="assets/dashboard/ui/social_subject.png" alt="" style="width:30px;height:30px;object-fit:contain;" />
                <span style="font-size: 12.5px; font-weight: 700; color: #1E293B; width: 52px;">Social</span>
                <div class="lu-bar-track" style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden; margin: 0 8px;">
                  <div class="lu-bar-fill" style="width: 62%; height: 100%; background: linear-gradient(90deg, #10B981, #34D399); border-radius: 9999px;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 800; color: #1E293B; min-width: 28px; text-align: right;">62%</span>
              </div>

              <!-- English -->
              <div class="progress-sub-row-v2" data-screen="03">
                <img class="dash-ic" src="assets/dashboard/ui/english_subject.png" alt="" style="width:30px;height:30px;object-fit:contain;" />
                <span style="font-size: 12.5px; font-weight: 700; color: #1E293B; width: 52px;">English</span>
                <div class="lu-bar-track" style="flex: 1; height: 7px; background: #F1F5F9; border-radius: 9999px; overflow: hidden; margin: 0 8px;">
                  <div class="lu-bar-fill" style="width: 78%; height: 100%; background: linear-gradient(90deg, #8B5CF6, #A855F7); border-radius: 9999px;"></div>
                </div>
                <span style="font-size: 12px; font-weight: 800; color: #1E293B; min-width: 28px; text-align: right;">78%</span>
              </div>

            </div>
          </div>

          <!-- Widget 3: Upcoming Assignments -->
          <div class="widget-card-v2">
            <div class="card-header-row" style="margin-bottom: 14px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <img class="dash-ic" src="assets/dashboard/ui/upcoming_tasks.png" alt="" style="width:24px;height:24px;object-fit:contain;" />
                <h3 style="font-size: 15px; font-weight: 800; color: #1E293B;">Upcoming Assignments</h3>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              
              <!-- Assignment 1 -->
              <div class="asg-row-v2" data-screen="08">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img class="dash-ic" src="assets/dashboard/ui/science_subject.png" alt="" style="width:32px;height:32px;object-fit:contain;" />
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
                  <img class="dash-ic" src="assets/dashboard/ui/maths_subject.png" alt="" style="width:32px;height:32px;object-fit:contain;" />
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

// ===== Module: js/screens/subjects.js =====
// Screen 03: My Learning - Page Flow (Classes 6–8)
// Matches exact Reference Screen 01 ("1 My Learning – All Subjects"), Screen 02 ("2 In Progress – Ongoing Chapters"), and Screen 03 ("3 Completed – Finished Chapters")
function renderSubjectsScreen(container, state, app) {
  const { subjects, ongoingChapters, finishedChapters } = state;
  let activeTab = state.myLearningActiveTab || "all"; // "all", "in-progress", "completed"

  // Subject icons supplied in assets/MY learning (cropped copies in /ui)
  const SUBJECT_ICON_IMAGES = {
    flask: "science",
    calculator: "maths",
    globe: "social",
    book: "english",
    tamil: "tamil",
    tamilLetter: "tamil"
  };

  function getGraphic(type, size = 96) {
    const imgName = SUBJECT_ICON_IMAGES[type];
    if (imgName) {
      return `<img class="subject-icon-img" src="assets/MY%20learning/ui/${imgName}.png" alt="${imgName}" style="width:${size}px;height:${size}px;object-fit:contain;" />`;
    }
    switch (type) {
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      case "tamilLetter": return GRAPHICS.tamilLetterIcon(size);
      default: return GRAPHICS.scienceFlaskIcon(size);
    }
  }

  function renderView() {
    state.myLearningActiveTab = activeTab;

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header Matching Screen 01 Reference (Clean 'My Learning' Title + Segmented Pill Tabs) -->
        <div class="my-learning-top-header">
          <h1 class="my-learning-heading">My Learning</h1>
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow ${activeTab === 'all' ? 'active' : ''}" data-tab="all">All Subjects</button>
            <button class="tab-pill-btn-flow ${activeTab === 'in-progress' ? 'active' : ''}" data-tab="in-progress">In Progress</button>
            <button class="tab-pill-btn-flow ${activeTab === 'completed' ? 'active' : ''}" data-tab="completed">Completed</button>
          </div>
        </div>

        <!-- Dynamic Content depending on active tab -->
        <div id="tab-stage-content">
          ${renderTabContent()}
        </div>

      </div>
    `;

    // Bind segmented tab buttons
    container.querySelectorAll(".tab-pill-btn-flow").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        renderView();
      });
    });

    // Bind item clicks based on active view
    if (activeTab === "all") {
      // Interactive Book Icon Direct Click (Flips pages in-place without navigating away)
      container.querySelectorAll(".anim-fanning-book-wrap").forEach(bookWrap => {
        bookWrap.addEventListener("click", (e) => {
          e.stopPropagation();
          bookWrap.classList.add("page-turning-active");
          setTimeout(() => {
            bookWrap.classList.remove("page-turning-active");
          }, 1250);
        });
      });

      // Subject Card Click (Triggers flip animation then navigates to chapters)
      container.querySelectorAll(".subject-card-3d-flow").forEach(card => {
        card.addEventListener("click", () => {
          const bookWrap = card.querySelector(".anim-fanning-book-wrap");
          if (bookWrap) {
            bookWrap.classList.add("page-turning-active");
          }
          const id = card.getAttribute("data-subject-id");
          state.activeSubjectId = id;
          setTimeout(() => {
            app.navigateTo("04"); // Navigate to Screen 04: Subject Chapter List
          }, 350);
        });
      });
    } else if (activeTab === "in-progress") {
      // Also enable in-place page flipping on any book icons in list
      container.querySelectorAll(".anim-fanning-book-wrap").forEach(bookWrap => {
        bookWrap.addEventListener("click", (e) => {
          e.stopPropagation();
          bookWrap.classList.add("page-turning-active");
          setTimeout(() => {
            bookWrap.classList.remove("page-turning-active");
          }, 1250);
        });
      });

      container.querySelectorAll(".ongoing-continue-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const subId = btn.getAttribute("data-subject-id");
          const chNum = parseInt(btn.getAttribute("data-chapter-num"), 10);
          openChapterLesson(subId, chNum, false);
        });
      });
      container.querySelectorAll(".ongoing-chapter-row").forEach(row => {
        row.addEventListener("click", () => {
          const subId = row.getAttribute("data-subject-id");
          const chNum = parseInt(row.getAttribute("data-chapter-num"), 10);
          openChapterLesson(subId, chNum, false);
        });
      });
    } else if (activeTab === "completed") {
      container.querySelectorAll(".completed-chapter-row").forEach(row => {
        row.addEventListener("click", () => {
          const subId = row.getAttribute("data-subject-id");
          const chNum = parseInt(row.getAttribute("data-chapter-num"), 10);
          openChapterLesson(subId, chNum, true);
        });
      });
    }
  }

  function renderCard(subj) {
    if (!subj) return '';
    return `
      <div class="subject-card-3d-flow subject-theme-${subj.id}" data-subject-id="${subj.id}">
        <!-- 3D Graphic Stage with Ambient Glow Aura -->
        <div class="subject-3d-stage">
          <div class="subject-3d-graphic-wrap">
            ${getGraphic(subj.iconType, 96)}
          </div>
        </div>

        <!-- Card Bottom Metadata -->
        <div class="subject-card-bottom-info">
          <h3 class="subject-card-title-flow">${subj.title}</h3>
          <div class="subject-card-chapters-flow">${subj.chaptersCount} Chapters</div>

          <!-- Centered Compact Progress Bar & Value (Matching Reference) -->
          <div class="subject-card-prog-wrap">
            <div class="subject-card-prog-track">
              <div class="subject-card-prog-bar" style="width: ${subj.progress}%;"></div>
            </div>
            <span class="subject-card-prog-val">${subj.progress}%</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderTabContent() {
    if (activeTab === "all") {
      // 1. All Subjects Tab: 5 subject cards in grid matching Screen 01 (3 on Top, 2 Centered on Bottom)
      return `
        <div class="subjects-deck-flow-container">
          <!-- Top Row: 3 Cards (Science, Mathematics, Social Science) -->
          <div class="subjects-deck-flow-row-top">
            ${renderCard(subjects[0])}
            ${renderCard(subjects[1])}
            ${renderCard(subjects[2])}
          </div>
          <!-- Bottom Row: 2 Cards Centered (English, Tamil) -->
          <div class="subjects-deck-flow-row-bottom">
            ${renderCard(subjects[3])}
            ${renderCard(subjects[4])}
          </div>
        </div>
      `;
    } else if (activeTab === "in-progress") {
      // 2. In Progress Tab: Ongoing Chapters list with [Continue] buttons matching Screen 02
      return `
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="ongoing-chapters-list">
            ${ongoingChapters.map(ch => `
              <div class="ongoing-chapter-row" data-subject-id="${ch.subjectId}" data-chapter-num="${ch.chapterNumber}">
                
                <!-- Left: 3D Icon + Subject & Chapter Meta -->
                <div class="ongoing-left-meta">
                  <div class="ongoing-icon-box" style="background: ${getLightBg(ch.subjectId)};">
                    ${getGraphic(ch.iconType || getIconType(ch.subjectId), 34)}
                  </div>
                  <div class="ongoing-text-wrap">
                    <div class="ongoing-subject-title">${ch.subjectTitle}</div>
                    <div class="ongoing-chapter-name">${ch.chapterTitle}</div>
                  </div>
                </div>

                <!-- Center: Green Progress Bar + Percentage -->
                <div class="ongoing-progress-cluster">
                  <div class="ongoing-bar-track">
                    <div class="ongoing-bar-fill" style="width: ${ch.progress}%;"></div>
                  </div>
                  <div class="ongoing-percent-label">${ch.progress}%</div>
                </div>

                <!-- Right: Purple [ Continue ] Button -->
                <button class="ongoing-continue-btn" data-subject-id="${ch.subjectId}" data-chapter-num="${ch.chapterNumber}">
                  Continue
                </button>

              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      // 3. Completed Tab: Finished Chapters list with green [✔ Completed] badges matching Screen 03
      return `
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="completed-chapters-list">
            ${finishedChapters.map(ch => `
              <div class="completed-chapter-row" data-subject-id="${ch.subjectId}" data-chapter-num="${ch.chapterNumber}">
                
                <!-- Left: 3D Icon + Subject & Chapter Meta -->
                <div class="ongoing-left-meta">
                  <div class="ongoing-icon-box" style="background: ${getLightBg(ch.subjectId)};">
                    ${getGraphic(ch.iconType || getIconType(ch.subjectId), 34)}
                  </div>
                  <div class="ongoing-text-wrap">
                    <div class="ongoing-subject-title">${ch.subjectTitle}</div>
                    <div class="ongoing-chapter-name">${ch.chapterTitle}</div>
                  </div>
                </div>

                <!-- Right: Green [✔ Completed] Badge -->
                <div class="completed-status-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Completed</span>
                </div>

              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  function getLightBg(subjectId) {
    const s = subjects.find(sub => sub.id === subjectId);
    return s ? s.lightBg : 'rgba(124, 58, 237, 0.08)';
  }

  function getIconType(subjectId) {
    const s = subjects.find(sub => sub.id === subjectId);
    return s ? s.iconType : 'flask';
  }

  function openChapterLesson(subjectId, chapterNum, isCompleted) {
    state.activeSubjectId = subjectId;
    state.activeChapterNumber = chapterNum;

    const catalogKey = `${subjectId}-ch-${chapterNum}`;
    let lessonData = state.lessonsCatalog && state.lessonsCatalog[catalogKey];

    if (!lessonData) {
      const subj = subjects.find(s => s.id === subjectId) || subjects[0];
      const ch = (subj.chapters || []).find(c => c.number === chapterNum) || { title: `Chapter ${chapterNum}` };
      lessonData = {
        subjectId: subj.id,
        subjectName: subj.title,
        chapterNumber: chapterNum,
        chapterTitle: `Chapter ${chapterNum}: ${ch.title || ''}`,
        duration: "14:30",
        videoTitle: `${ch.title} - Core Concepts & Practice`,
        instructor: "Ms. Revathi • Subject Specialist",
        isCompleted: isCompleted,
        progress: isCompleted ? 100 : 72,
        theme: subjectId === 'science' && chapterNum === 3 ? 'heat' : subjectId,
        description: `Explore the key principles and lesson exercises for ${ch.title}.`,
        checklist: [
          { id: "vid", title: "Video Lesson", done: true, meta: "14 mins" },
          { id: "notes", title: "Chapter Notes", done: true, meta: "PDF" },
          { id: "concepts", title: "Key Concepts", done: isCompleted, meta: "Concepts" },
          { id: "quiz", title: "Practice Quiz", done: isCompleted, score: isCompleted ? "Score: 9 / 10" : null, meta: "Quiz" },
          { id: "worksheet", title: "Worksheet", done: isCompleted, meta: "Assignment" }
        ]
      };
    }

    lessonData.isCompleted = isCompleted;
    state.currentLesson = lessonData;
    app.navigateTo("05");
  }

  renderView();
}

// ===== Module: js/screens/chapterList.js =====
// Screen 04: Subject - Chapter List (e.g. Science)
// Matching Reference Screen 04: "Subject Detail (Example: Science)"
function renderChapterListScreen(container, state, app) {
  const currentSubject = state.subjects.find(s => s.id === (state.activeSubjectId || "science")) || state.subjects[0];
  let activeTab = "chapters"; // chapters, resources, practice, notes

  function renderView() {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Breadcrumb Navigation (My Learning > Subject Name) -->
        <div class="lms-breadcrumb-nav">
          <span class="crumb-link" id="crumb-my-learning">My Learning</span>
          <span style="color: #94A3B8; font-weight: 400;">&gt;</span>
          <span class="crumb-active">${currentSubject.title}</span>
        </div>

        <!-- Subject Hero Banner -->
        <div class="subject-hero-banner" ${currentSubject.id === 'science' ? '' : `style="background: ${currentSubject.bgGradient};"`}>
          <div style="display: flex; align-items: center; gap: 24px;">
            <div style="background: rgba(255,255,255,0.15); padding: 14px; border-radius: var(--radius-xl); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
              ${GRAPHICS.getSubjectIcon(currentSubject.iconType, 70)}
            </div>
            <div>
              <span class="badge-status" style="background: rgba(255,255,255,0.2); color: #FFFFFF; border: none; margin-bottom: 8px;">
                ${currentSubject.classGrade} • ${currentSubject.chaptersCount} Chapters
              </span>
              <h1 style="font-size: 28px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px; margin-top: 2px;">
                ${currentSubject.title}
              </h1>
              <p style="font-size: 13.5px; color: #E0E7FF; max-width: 520px; margin-top: 4px; line-height: 1.45;">
                ${currentSubject.description}
              </p>
            </div>
          </div>

          <!-- Circular Progress Gauge (e.g. 72% or 100%) -->
          <div style="display: flex; flex-direction: column; align-items: center;">
            <div class="circular-progress-wrap">
              <svg width="90" height="90" viewBox="0 0 100 100" class="circular-progress-svg">
                <circle cx="50" cy="50" r="40" class="circular-progress-bg"/>
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  class="circular-progress-fill"
                  stroke-dasharray="251.2"
                  stroke-dashoffset="${251.2 * (1 - currentSubject.progress / 100)}"
                />
              </svg>
              <div class="circular-progress-label">${currentSubject.progress}%</div>
            </div>
            <span style="font-size: 12px; font-weight: 700; color: #E0E7FF; margin-top: 6px;">Overall Progress</span>
          </div>
        </div>

        <!-- Sub Tabs (Chapters | Resources | Practice | Notes) -->
        <div class="tabs-nav-bar">
          <button class="tab-pill-btn ${activeTab === 'chapters' ? 'active' : ''}" data-subtab="chapters">Chapters</button>
          <button class="tab-pill-btn ${activeTab === 'resources' ? 'active' : ''}" data-subtab="resources">Resources</button>
          <button class="tab-pill-btn ${activeTab === 'practice' ? 'active' : ''}" data-subtab="practice">Practice</button>
          <button class="tab-pill-btn ${activeTab === 'notes' ? 'active' : ''}" data-subtab="notes">Notes</button>
        </div>

        <!-- Content Area based on Tab -->
        ${activeTab === 'chapters' ? `
          <!-- Chapter List Items -->
          <div class="chapter-items-container">
            ${currentSubject.chapters.map(ch => {
              let iconHtml = '';
              let badgeHtml = '';

              if (ch.status === 'completed') {
                iconHtml = `<div class="chapter-status-dot lu-plain-icon-box">${GRAPHICS.checkDoneIcon(28)}</div>`;
                badgeHtml = `
                  <span class="completed-status-pill" style="font-size: 12px; padding: 4px 14px;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Completed
                  </span>
                `;
              } else if (ch.status === 'in-progress') {
                iconHtml = `<div class="chapter-status-dot" style="background: #EDE9FE; color: #7C3AED;">${ICONS.play(18)}</div>`;
                badgeHtml = `
                  <span class="badge-status badge-purple" style="font-size: 12px; padding: 5px 14px; font-weight: 700;">
                    In Progress ❯
                  </span>
                `;
              } else {
                iconHtml = `<div class="chapter-status-dot lu-plain-icon-box">${GRAPHICS.checkTodoIcon(28)}</div>`;
                badgeHtml = `<span class="badge-status badge-gray" style="font-size: 12px; padding: 5px 14px;">Not Started</span>`;
              }

              return `
                <div class="chapter-row-item ${ch.isCurrent ? 'chapter-current-active' : ''}" data-chapter-id="${ch.id}" data-chapter-num="${ch.number}" data-chapter-status="${ch.status}">
                  <div class="chapter-left-meta">
                    ${iconHtml}
                    <div>
                      <h4 class="chapter-title-text" style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Chapter ${ch.number}: ${ch.title}</h4>
                      <span class="chapter-lessons-sub" style="font-size: 12.5px; color: #64748B;">${ch.lessonsCount || 4} Lessons • ${ch.quizzesCount || 1} Quiz • ${ch.duration || '45 mins'}</span>
                    </div>
                  </div>

                  <div style="display: flex; align-items: center; gap: 16px;">
                    ${badgeHtml}
                    <div style="color: var(--text-muted);">${ICONS.chevronRight(18)}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <!-- Resources / Practice / Notes Tab Mock -->
          <div class="lms-card" style="text-align: center; padding: 48px 24px;">
            <div style="margin-bottom: 12px;">${ICONS.document(48)}</div>
            <h3 style="font-size: 18px; font-weight: 800; color: #1E293B;">
              ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} for ${currentSubject.title}
            </h3>
            <p style="font-size: 13.5px; color: var(--text-secondary); max-width: 480px; margin: 8px auto 20px;">
              Curated study materials, revision flashcards, PDF summaries, and worksheets for Class 7 students.
            </p>
            <button class="btn-primary" id="open-current-chapter-btn">
              Open Chapter 3: Heat Video Lesson →
            </button>
          </div>
        `}

      </div>
    `;

    // Breadcrumb navigation to Screen 03
    container.querySelector("#crumb-my-learning")?.addEventListener("click", () => {
      app.navigateTo("03");
    });

    // Subtabs
    container.querySelectorAll(".tab-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-subtab");
        renderView();
      });
    });

    // Chapter row clicks
    container.querySelectorAll(".chapter-row-item").forEach(item => {
      item.addEventListener("click", () => {
        const chNum = parseInt(item.getAttribute("data-chapter-num"), 10);
        const status = item.getAttribute("data-chapter-status");
        openChapterLesson(currentSubject.id, chNum, status === 'completed');
      });
    });

    const openCurrentBtn = container.querySelector("#open-current-chapter-btn");
    if (openCurrentBtn) {
      openCurrentBtn.addEventListener("click", () => {
        openChapterLesson(currentSubject.id, 3, false);
      });
    }
  }

  function openChapterLesson(subjectId, chapterNum, isCompleted) {
    state.activeSubjectId = subjectId;
    state.activeChapterNumber = chapterNum;

    const catalogKey = `${subjectId}-ch-${chapterNum}`;
    let lessonData = state.lessonsCatalog && state.lessonsCatalog[catalogKey];

    if (!lessonData) {
      const subj = state.subjects.find(s => s.id === subjectId) || state.subjects[0];
      const ch = (subj.chapters || []).find(c => c.number === chapterNum) || { title: `Chapter ${chapterNum}` };
      lessonData = {
        subjectId: subj.id,
        subjectName: subj.title,
        chapterNumber: chapterNum,
        chapterTitle: `Chapter ${chapterNum}: ${ch.title}`,
        duration: "14:35",
        videoTitle: `${ch.title} - Core Concepts & Practice`,
        instructor: "Ms. Revathi • Subject Specialist",
        isCompleted: isCompleted,
        progress: isCompleted ? 100 : 72,
        theme: subjectId === 'science' && chapterNum === 3 ? 'heat' : subjectId,
        description: `Explore the key principles and lesson exercises for ${ch.title}.`,
        checklist: [
          { id: "vid", title: "Video Lesson", done: true, meta: "14 mins" },
          { id: "notes", title: "Chapter Notes", done: true, meta: "PDF Downloaded" },
          { id: "concepts", title: "Key Concepts", done: isCompleted, meta: "Concepts" },
          { id: "quiz", title: "Practice Quiz", done: isCompleted, score: isCompleted ? "Score: 9 / 10" : null, meta: "Quiz" },
          { id: "worksheet", title: "Worksheet", done: isCompleted, meta: "Assignment" }
        ]
      };
    }

    lessonData.isCompleted = isCompleted;
    state.currentLesson = lessonData;
    app.navigateTo("05");
  }

  renderView();
}

// ===== Module: js/screens/videoLesson.js =====
// Screen 05: Chapter Learning - Video Lesson & Resources
// Supports Screen 05 (In-Progress Mode) and Screen 07 (Completed Mode)
function renderVideoLessonScreen(container, state, app) {
  const lesson = state.currentLesson || {
    subjectId: "science",
    subjectName: "Science",
    chapterNumber: 3,
    chapterTitle: "Chapter 3: Heat",
    duration: "14:35",
    videoTitle: "Heat Transfer, Conduction & Temperature Dynamics",
    instructor: "Ms. Revathi • Physics & Chemistry Specialist",
    isCompleted: false,
    progress: 72,
    theme: "heat",
    description: "Understand the fundamentals of thermal energy, conduction, convection, radiation, and clinical vs laboratory thermometers.",
    checklist: [
      { id: "vid", title: "Video Lesson", done: true, meta: "14 mins" },
      { id: "notes", title: "Chapter Notes", done: true, meta: "PDF Downloaded" },
      { id: "concepts", title: "Key Concepts", done: false, meta: "5 Principles" },
      { id: "quiz", title: "Practice Quiz", done: false, meta: "10 Questions" },
      { id: "worksheet", title: "Worksheet", done: false, meta: "Homework" }
    ]
  };

  let isPlaying = false;
  let currentTime = 0;
  const totalSeconds = 875; // 14 mins 35 secs
  let playInterval = null;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function getVideoVisual() {
    if (lesson.theme === "heat" || lesson.chapterNumber === 3) {
      return GRAPHICS.heatWaveIllustration(340, 240);
    }
    return GRAPHICS.cell3D(340, 240);
  }

  function renderView() {
    const isComp = Boolean(lesson.isCompleted);

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Breadcrumb (< Subject > Chapter Title) matching Screen 05 / 07 -->
        <div class="lms-breadcrumb-nav">
          <span class="crumb-link" id="crumb-subject">&lt; ${lesson.subjectName}</span>
          <span style="color: #94A3B8; font-weight: 400;">&gt;</span>
          <span class="crumb-active">${lesson.chapterTitle}</span>
        </div>

        <!-- 2-Column Video Lesson Layout -->
        <div class="video-screen-layout">
          
          <!-- Left Column: Video Player & Controls -->
          <div class="video-main-col">
            <div class="video-player-container">
              
              <!-- Video Canvas Stage -->
              <div class="video-canvas-stage" id="video-stage">
                <div id="video-stage-graphic" style="transition: transform 0.4s ease; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
                  ${getVideoVisual()}
                </div>
                
                <!-- Center Play Overlay Button -->
                <div class="video-play-center-btn" id="center-play-btn" style="${isPlaying ? 'opacity: 0; pointer-events: none;' : 'opacity: 1;'}">
                  ${ICONS.play(32)}
                </div>

                <!-- Top Left Tag -->
                <div style="position: absolute; top: 16px; left: 16px; background: rgba(0,0,0,0.65); backdrop-filter: blur(8px); padding: 5px 14px; border-radius: var(--radius-pill); font-size: 12px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; gap: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: ${isComp ? '#10B981' : '#EF4444'}; display: inline-block;"></span>
                  ${isComp ? 'Completed Lesson' : '3D Interactive Lesson'}
                </div>
              </div>

              <!-- Video Controls Bar -->
              <div class="video-controls-bar">
                <!-- Timeline Scrubber -->
                <div class="video-timeline-scrubber" id="timeline-scrubber">
                  <div class="video-timeline-progress" id="timeline-bar" style="width: ${(currentTime / totalSeconds) * 100}%;">
                    <div class="video-timeline-knob"></div>
                  </div>
                </div>

                <div class="video-buttons-row">
                  <div style="display: flex; align-items: center; gap: 14px;">
                    <button class="video-ctrl-btn" id="ctrl-play-pause-btn">
                      ${isPlaying ? ICONS.pause(20) : ICONS.play(20)}
                    </button>
                    <span style="font-size: 12.5px; font-weight: 600; color: #CBD5E1;" id="time-display">
                      ${formatTime(currentTime)} / ${lesson.duration || '14:35'}
                    </span>
                  </div>

                  <div style="display: flex; align-items: center; gap: 12px;">
                    <button class="video-ctrl-btn" title="Speed">1.0x</button>
                    <button class="video-ctrl-btn" title="HD Quality">1080p</button>
                    <button class="video-ctrl-btn" id="ctrl-fullscreen-btn" title="Fullscreen">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <!-- Action Buttons Row below Video -->
            <div class="video-action-bottom-bar">
              ${!isComp ? `
                <!-- In-Progress Mode: Single prominent [▶ Continue Learning] button -->
                <button class="btn-continue-learning-pill" id="continue-learning-action-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Continue Learning
                </button>
              ` : `
                <!-- Completed Mode: [ Rewatch Lesson ] and [ View Notes ] side-by-side -->
                <div class="completed-buttons-group">
                  <button class="btn-rewatch-pill" id="rewatch-lesson-action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    Rewatch Lesson
                  </button>
                  <button class="btn-notes-pill" id="view-notes-action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    View Notes
                  </button>
                </div>
              `}
            </div>

            <!-- Lesson Overview Card -->
            <div class="lms-card" style="margin-top: 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                <div>
                  <h3 style="font-size: 18px; font-weight: 800; color: #1E293B;">${lesson.videoTitle || lesson.chapterTitle}</h3>
                  <span style="font-size: 13px; color: var(--primary); font-weight: 700;">${lesson.instructor || 'Ms. Revathi • Subject Specialist'}</span>
                </div>
                <span class="badge-status ${isComp ? 'badge-emerald' : 'badge-purple'}">
                  ${isComp ? 'Completed' : 'Class 7 NCERT'}
                </span>
              </div>
              <p style="font-size: 14px; color: #475569; line-height: 1.55;">
                ${lesson.description || 'Master key concepts with interactive 3D simulations, step-by-step illustrations, and comprehensive summary notes.'}
              </p>
            </div>
          </div>

          <!-- Right Column: Chapter Progress & Lesson Checklist -->
          <div class="video-resources-col">
            <div class="lesson-resources-card">
              
              ${!isComp ? `
                <!-- In-Progress Mode Header: Chapter Progress with 72% green bar -->
                <div style="margin-bottom: 18px;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <h3 style="font-size: 16px; font-weight: 800; color: #1E293B;">Chapter Progress</h3>
                    <span style="font-size: 14px; font-weight: 800; color: #10B981;">${lesson.progress || 72}%</span>
                  </div>
                  <div class="ongoing-bar-track" style="height: 8px;">
                    <div class="ongoing-bar-fill" style="width: ${lesson.progress || 72}%;"></div>
                  </div>
                </div>
              ` : `
                <!-- Completed Mode Header: Chapter Status [✔ Completed] -->
                <div style="margin-bottom: 18px;">
                  <h3 style="font-size: 15px; font-weight: 800; color: #64748B; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Chapter Status</h3>
                  <div class="completed-status-pill" style="font-size: 13.5px; padding: 7px 20px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Completed</span>
                  </div>
                </div>
              `}

              <!-- Lesson Checklist -->
              <div class="checklist-container">
                ${(lesson.checklist || [
                  { title: "Video Lesson", done: true },
                  { title: "Chapter Notes", done: true },
                  { title: "Key Concepts", done: isComp },
                  { title: "Practice Quiz", done: isComp, score: isComp ? "Score: 9 / 10" : null },
                  { title: "Worksheet", done: isComp }
                ]).map(item => `
                  <div class="checklist-item ${item.done ? 'done' : ''}">
                    <div class="lu-plain-icon-box" style="display:flex;">
                      ${item.done ? GRAPHICS.checkDoneIcon(22) : GRAPHICS.checkTodoIcon(22)}
                    </div>
                    <div style="flex: 1;">
                      <div style="font-size: 13.5px; font-weight: 700; color: ${item.done ? '#1E293B' : '#475569'};">
                        ${item.title}
                      </div>
                      ${item.score ? `<span style="font-size: 11.5px; color: #10B981; font-weight: 700;">${item.score}</span>` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Quick Practice Quiz Action Button -->
              <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E2E8F0;">
                <button class="btn-primary" id="btn-quick-quiz-action" style="width: 100%;">
                  Take Chapter Quiz ${ICONS.chevronRight(18)}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    // Breadcrumb navigation back to Screen 04
    container.querySelector("#crumb-subject")?.addEventListener("click", () => {
      app.navigateTo("04");
    });

    // Playback simulation
    const stage = container.querySelector("#video-stage");
    const centerPlay = container.querySelector("#center-play-btn");
    const ctrlPlay = container.querySelector("#ctrl-play-pause-btn");
    const timeDisplay = container.querySelector("#time-display");
    const timelineBar = container.querySelector("#timeline-bar");
    const stageGraphic = container.querySelector("#video-stage-graphic");

    function togglePlay() {
      isPlaying = !isPlaying;
      if (isPlaying) {
        if (ctrlPlay) ctrlPlay.innerHTML = ICONS.pause(20);
        if (centerPlay) {
          centerPlay.style.opacity = "0";
          centerPlay.style.pointerEvents = "none";
        }
        if (stageGraphic) stageGraphic.style.transform = "scale(1.05)";
        app.showToast(`Playing ${lesson.chapterTitle} lesson`);

        playInterval = setInterval(() => {
          currentTime += 1;
          if (currentTime >= totalSeconds) {
            currentTime = totalSeconds;
            togglePlay();
          }
          if (timeDisplay) timeDisplay.innerText = `${formatTime(currentTime)} / ${lesson.duration || '14:35'}`;
          if (timelineBar) timelineBar.style.width = `${(currentTime / totalSeconds) * 100}%`;
        }, 1000);
      } else {
        if (ctrlPlay) ctrlPlay.innerHTML = ICONS.play(20);
        if (centerPlay) {
          centerPlay.style.opacity = "1";
          centerPlay.style.pointerEvents = "auto";
        }
        if (stageGraphic) stageGraphic.style.transform = "scale(1)";
        if (playInterval) clearInterval(playInterval);
      }
    }

    centerPlay?.addEventListener("click", togglePlay);
    ctrlPlay?.addEventListener("click", togglePlay);

    // [▶ Continue Learning] button click
    const continueBtn = container.querySelector("#continue-learning-action-btn");
    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        triggerConfetti();
        lesson.isCompleted = true;
        lesson.progress = 100;
        if (lesson.checklist) {
          lesson.checklist.forEach(item => {
            item.done = true;
            if (item.id === "quiz" && !item.score) item.score = "Score: 9 / 10";
          });
        }
        app.showToast("🎉 Chapter Completed! You earned +50 Points!", "success");
        renderView();
      });
    }

    // [ Rewatch Lesson ] button click
    const rewatchBtn = container.querySelector("#rewatch-lesson-action-btn");
    if (rewatchBtn) {
      rewatchBtn.addEventListener("click", () => {
        currentTime = 0;
        if (timeDisplay) timeDisplay.innerText = `00:00 / ${lesson.duration || '14:35'}`;
        if (timelineBar) timelineBar.style.width = `0%`;
        if (!isPlaying) togglePlay();
        app.showToast("Rewatching lesson from start...");
      });
    }

    // [ View Notes ] button click
    const notesBtn = container.querySelector("#view-notes-action-btn");
    if (notesBtn) {
      notesBtn.addEventListener("click", () => {
        app.showModal(`
          <div style="padding: 10px;">
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 8px;">📄 ${lesson.chapterTitle} - Complete Study Notes</h3>
            <p style="font-size: 13.5px; color: #475569; margin-bottom: 14px; line-height: 1.5;">
              ${lesson.description || 'Comprehensive revision summaries, formulas, and visual diagrams curated for Class 7.'}
            </p>
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px; margin-bottom: 16px; font-size: 13px; color: #334155;">
              <strong>Topics Covered:</strong>
              <ul style="margin: 6px 0 0 18px; line-height: 1.5;">
                <li>Fundamental definitions & scientific principles</li>
                <li>Comparative organelle / thermal transfer tables</li>
                <li>NCERT textbook solved practice problems</li>
              </ul>
            </div>
            <button class="btn-primary" style="width: 100%;" onclick="alert('Downloading notes PDF...'); window.closeLmsModal();">
              Download Full PDF (2.4 MB)
            </button>
          </div>
        `);
      });
    }

    // Quick quiz button
    container.querySelector("#btn-quick-quiz-action")?.addEventListener("click", () => {
      app.navigateTo("06");
    });
  }

  renderView();
}

// ===== Module: js/screens/quiz.js =====
// Screen 06: Quizzes - Complete Flow Matching User Reference Images
// Flow:
// 1. Dashboard -> Click Quizzes (Screen 1)
// 2. Quizzes List -> All Quizzes, Practice, Timed, Completed (Screen 2)
// 3. Quiz Details -> Hero Card, 4 Metrics, Topics, Question Types, Start Quiz (Screen 3)
// 4. Quiz Instructions -> 3D Clipboard & Pencil, Before You Start, Start Now (Screen 4)
// 5. Take Quiz -> Questions with Live Countdown, Radio Options, 3D Cell Model (Screen 5)
// 6. Submit Confirmation Modal -> Document Icon with Green Check, Review/Submit (Screen 6)
// 7. Quiz Result -> Great Job! 8/10, Accuracy 80%, +80 Pts, 02:15 Time, View Answers/Try Again (Screen 7)
// 8. Quiz History -> Completed Tab in Quizzes List with Scores & View Buttons (Screen 8)
function renderQuizScreen(container, state, app) {
  let view = state.quizCurrentView || "list"; // "list", "details", "instructions", "runner", "result"
  let activeTab = state.quizzesActiveTab || "all"; // "all", "practice", "timed", "completed"
  let activeQuiz = state.selectedQuiz || null;
  let qIndex = 0;
  let userAnswers = {};
  let quizStartedAt = Date.now();
  let lastResult = null;
  let timerInterval = null;
  let timeLeftSeconds = 14 * 60 + 32; // 14:32 countdown like in reference image
  let showSubmitModal = false;

  // Complete Quizzes Catalog matching Screen 2 & Screen 8
  const quizzesCatalog = [
    {
      id: "quiz-sci-cell",
      title: "Science – The Cell",
      subject: "Science",
      subjectId: "science",
      chapter: "Chapter 2",
      subtitle: "Chapter 2 • 10 Questions • 15 Minutes",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      pointsEarned: 80,
      scoreText: "8 / 10",
      scorePct: "80%",
      timeTakenText: "02:15",
      difficulty: "Medium",
      type: "timed",
      completedScore: "8/10 (80%) • 10 Nov 2026",
      iconType: "flask",
      illustrationType: "cell",
      topics: [
        "Cell Wall",
        "Nucleus",
        "Chloroplast",
        "Mitochondria"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "True / False", icon: "check" },
        { type: "Short Answer", icon: "edit" }
      ],
      rules: [
        { icon: "clock", label: "10 Questions" },
        { icon: "clock", label: "15 Minutes (Timed)" },
        { icon: "star", label: "100 Points (10 per question)" },
        { icon: "rotate", label: "1 Attempt" },
        { icon: "info", label: "Auto-submit when time ends" }
      ],
      questions: [
        {
          num: 1,
          text: "What is the basic structural and functional unit of all living organisms?",
          options: ["Tissue", "Cell", "Organ", "Nucleus"],
          correct: 1,
          explanation: "The cell is the basic structural and functional unit of all known living organisms."
        },
        {
          num: 2,
          text: "Which organelle is known as the powerhouse of the cell?",
          options: ["Ribosome", "Mitochondria", "Golgi Apparatus", "Vacuole"],
          correct: 1,
          explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions."
        },
        {
          num: 3,
          text: "Which part of the cell controls all the activities?",
          options: ["Cell Wall", "Nucleus", "Chloroplast", "Mitochondria"],
          correct: 1,
          explanation: "The nucleus is the control center of the cell containing the genetic material (DNA)."
        },
        {
          num: 4,
          text: "Which structure provides shape and rigidity exclusively to plant cells?",
          options: ["Cell Wall", "Cell Membrane", "Cytoplasm", "Endoplasmic Reticulum"],
          correct: 0,
          explanation: "The cell wall is a rigid layer outside the plasma membrane found in plants, fungi, and bacteria."
        },
        {
          num: 5,
          text: "Which green pigment in chloroplasts absorbs light energy for photosynthesis?",
          options: ["Carotene", "Chlorophyll", "Xanthophyll", "Anthocyanin"],
          correct: 1,
          explanation: "Chlorophyll is the green photosynthetic pigment that captures sunlight to synthesize food."
        }
      ]
    },
    {
      id: "quiz-math-fractions",
      title: "Mathematics – Fractions",
      subject: "Mathematics",
      subjectId: "maths",
      chapter: "Chapter 3",
      subtitle: "Chapter 3 • 12 Questions • 20 Minutes",
      questionsCount: 12,
      durationMinutes: 20,
      points: 120,
      pointsEarned: 90,
      scoreText: "9 / 12",
      scorePct: "75%",
      timeTakenText: "03:40",
      difficulty: "Medium",
      type: "timed",
      completedScore: "9/12 (75%) • 08 Nov 2026",
      iconType: "calculator",
      illustrationType: "calc",
      topics: [
        "Proper & Improper Fractions",
        "Mixed Numbers",
        "Fraction Addition & Subtraction",
        "Multiplication of Fractions"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "Short Answer", icon: "edit" }
      ],
      rules: [
        { icon: "clock", label: "12 Questions" },
        { icon: "clock", label: "20 Minutes (Timed)" },
        { icon: "star", label: "120 Points (10 per question)" },
        { icon: "rotate", label: "1 Attempt" },
        { icon: "info", label: "Auto-submit when time ends" }
      ],
      questions: [
        {
          num: 1,
          text: "What is 3/4 + 2/3 in simplest form?",
          options: ["5/7", "17/12 (1 5/12)", "1", "6/12"],
          correct: 1,
          explanation: "LCM of 4 and 3 is 12: 9/12 + 8/12 = 17/12."
        }
      ]
    },
    {
      id: "quiz-soc-env",
      title: "Social Science – Our Environment",
      subject: "Social Science",
      subjectId: "social",
      chapter: "Chapter 1",
      subtitle: "Chapter 1 • 10 Questions • 15 Minutes",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      pointsEarned: 80,
      scoreText: "8 / 10",
      scorePct: "80%",
      timeTakenText: "02:45",
      difficulty: "Easy",
      type: "practice",
      completedScore: "8/10 (80%) • 02 Nov 2026",
      iconType: "globe",
      illustrationType: "globe",
      topics: [
        "Biotic and Abiotic Components",
        "Atmosphere & Weather",
        "Hydrosphere & Lithosphere",
        "Ecosystem Balance"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "True / False", icon: "check" }
      ],
      rules: [
        { icon: "clock", label: "10 Questions" },
        { icon: "clock", label: "15 Minutes (Practice)" },
        { icon: "star", label: "100 Points" },
        { icon: "rotate", label: "Unlimited Attempts" },
        { icon: "info", label: "Practice at your own pace" }
      ],
      questions: []
    },
    {
      id: "quiz-eng-tenses",
      title: "English – Tenses",
      subject: "English",
      subjectId: "english",
      chapter: "Chapter 4",
      subtitle: "Chapter 4 • 10 Questions • 15 Minutes",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      pointsEarned: 70,
      scoreText: "7 / 10",
      scorePct: "70%",
      timeTakenText: "02:10",
      difficulty: "Medium",
      type: "practice",
      completedScore: "7/10 (70%) • 05 Nov 2026",
      iconType: "book",
      illustrationType: "book",
      topics: [
        "Simple Present & Past",
        "Present Continuous",
        "Present Perfect",
        "Subject-Verb Agreement"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "Fill in the Blanks", icon: "edit" }
      ],
      rules: [
        { icon: "clock", label: "10 Questions" },
        { icon: "clock", label: "15 Minutes (Practice)" },
        { icon: "star", label: "100 Points" },
        { icon: "rotate", label: "Unlimited Attempts" },
        { icon: "info", label: "Practice grammar mastery" }
      ],
      questions: []
    },
    {
      id: "quiz-tam-letters",
      title: "தமிழ் – எழுத்துக்கள் வகைகள்",
      subject: "தமிழ்",
      subjectId: "tamil",
      chapter: "Chapter 2",
      subtitle: "Chapter 2 • 10 Questions • 15 Minutes",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      pointsEarned: 100,
      scoreText: "10 / 10",
      scorePct: "100%",
      timeTakenText: "01:55",
      difficulty: "Medium",
      type: "timed",
      completedScore: "10/10 (100%) • 03 Nov 2026",
      iconType: "tamil",
      illustrationType: "tamil",
      topics: [
        "முதல் எழுத்துக்கள்",
        "சார்பெழுத்துக்கள்",
        "உயிர்மெய் எழுத்துக்கள்",
        "ஆய்த எழுத்து விளக்கம்"
      ],
      questionTypes: [
        { type: "MCQ", icon: "mcq" },
        { type: "True / False", icon: "check" }
      ],
      rules: [
        { icon: "clock", label: "10 Questions" },
        { icon: "clock", label: "15 Minutes (Timed)" },
        { icon: "star", label: "100 Points" },
        { icon: "rotate", label: "1 Attempt" },
        { icon: "info", label: "Auto-submit when time ends" }
      ],
      questions: []
    }
  ];

  // Set default active quiz
  if (!activeQuiz) {
    activeQuiz = quizzesCatalog[0];
  }

  // Handle deep-link from Subject or Lesson if student came from Chapter view
  if (state.activeQuizSubject) {
    const sId = state.activeQuizSubject;
    delete state.activeQuizSubject;
    const match = quizzesCatalog.find(q => q.subjectId === sId);
    if (match) {
      activeQuiz = match;
      view = "details";
    }
  }

  function getGraphic(type, size = 42) {
    switch (type) {
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      case "trophy": return GRAPHICS.goldTrophy(size);
      case "star": return GRAPHICS.goldStar(size);
      default: return GRAPHICS.scienceFlaskIcon(size);
    }
  }

  function getLightBg(subjectId) {
    switch (subjectId) {
      case "science": return "#E0F2FE";
      case "maths": return "#FEF3C7";
      case "social": return "#DCFCE7";
      case "english": return "#FCE7F3";
      case "tamil": return "#F3E8FF";
      default: return "#F1F5F9";
    }
  }

  // Attach the full question bank so every quiz has all its questions
  quizzesCatalog.forEach(qz => {
    const bank = QUIZ_QUESTION_BANK[qz.id];
    if (bank && bank.length) {
      qz.questions = bank;
      qz.questionsCount = bank.length;
    }
  });

  function getCurrentQuiz() {
    const id = activeQuiz && activeQuiz.id;
    return quizzesCatalog.find(x => x.id === id) || activeQuiz || quizzesCatalog[0];
  }

  function getRunQuestions() {
    const q = getCurrentQuiz();
    return QUIZ_QUESTION_BANK[q.id] || (q.questions && q.questions.length ? q.questions : QUIZ_QUESTION_BANK["quiz-sci-cell"]);
  }

  function countAnswered() {
    const total = getRunQuestions().length;
    let n = 0;
    for (let i = 0; i < total; i++) if (userAnswers[i] !== undefined) n++;
    return n;
  }

  // Start (or restart) a quiz: Question 1, nothing selected, full timer
  function startQuizRun() {
    const q = getCurrentQuiz();
    qIndex = 0;
    userAnswers = {};
    timeLeftSeconds = (q.durationMinutes || 15) * 60;
    quizStartedAt = Date.now();
    lastResult = null;
    showSubmitModal = false;
    view = "runner";
    render();
  }

  // Score the attempt from the student's real answers
  function finishQuiz() {
    const q = getCurrentQuiz();
    const questions = getRunQuestions();
    let correct = 0;
    questions.forEach((qq, i) => { if (userAnswers[i] === qq.correct) correct++; });
    const total = questions.length;
    const pct = Math.round((correct / total) * 100);
    const pointsPer = Math.round((q.points || total * 10) / total);
    const points = correct * pointsPer;
    const usedSec = Math.max(1, Math.round((Date.now() - quizStartedAt) / 1000));
    lastResult = { correct, total, pct, points, timeText: formatTimer(Math.min(usedSec, 99 * 60 + 59)), answers: Object.assign({}, userAnswers) };

    q.scoreText = correct + " / " + total;
    q.scorePct = pct + "%";
    q.pointsEarned = points;
    q.timeTakenText = lastResult.timeText;
    q.completed = true;

    state.student.points += points;
    if (app.updateHeaderStats) app.updateHeaderStats();
    showSubmitModal = false;
    view = "result";
    render();
  }

  function formatTimer(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Global window helpers for foolproof navigation across all views
  window.lmsStartQuiz = function(quizId) {
    const match = quizzesCatalog.find(q => q.id === quizId) || quizzesCatalog[0];
    activeQuiz = match;
    state.selectedQuiz = match;
    view = "details";
    render();
  };

  window.lmsQuizGoInstructions = function() {
    view = "instructions";
    render();
  };

  window.lmsQuizStartNow = function() {
    startQuizRun();
  };

  window.lmsQuizOpenSubmitModal = function() {
    if (countAnswered() < getRunQuestions().length) {
      app.showToast("Please answer all questions before submitting.");
      return;
    }
    showSubmitModal = true;
    render();
  };

  window.lmsQuizCloseSubmitModal = function() {
    showSubmitModal = false;
    render();
  };

  window.lmsQuizConfirmSubmit = function() {
    finishQuiz();
  };

  window.lmsQuizBackToList = function() {
    showSubmitModal = false;
    view = "list";
    render();
  };

  window.lmsQuizBackToDetails = function() {
    showSubmitModal = false;
    view = "details";
    render();
  };

  window.lmsQuizRestart = function() {
    startQuizRun();
  };

  window.lmsQuizViewResult = function(quizId) {
    const match = quizzesCatalog.find(q => q.id === quizId) || quizzesCatalog[0];
    activeQuiz = match;
    state.selectedQuiz = match;
    view = "result";
    render();
  };

  function render() {
    try {
      state.quizCurrentView = view;
      state.quizzesActiveTab = activeTab;

      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      if (view === "list") {
        renderListView();
      } else if (view === "details") {
        renderDetailsView();
      } else if (view === "instructions") {
        renderInstructionsView();
      } else if (view === "runner") {
        renderRunnerView();
      } else if (view === "result") {
        renderResultView();
      }
    } catch (err) {
      console.error("Error rendering quiz view:", err);
    }
  }

  // =========================================================================
  // VIEW 1: Quizzes List (Matches Image 1 Screen 2 & Image 2 Screen 2)
  // =========================================================================
  function renderListView() {
    let displayedQuizzes = quizzesCatalog;
    if (activeTab === "practice") {
      displayedQuizzes = quizzesCatalog.filter(q => q.type === "practice");
    } else if (activeTab === "timed") {
      displayedQuizzes = quizzesCatalog.filter(q => q.type === "timed");
    }

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header (Title + Segmented Pill Tabs: All Quizzes, Practice, Timed, Completed) -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">Quizzes</h1>
          </div>

          <!-- Segmented Pill Tabs matching reference image -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow ${activeTab === 'all' ? 'active' : ''}" data-tab="all">All Quizzes</button>
            <button class="tab-pill-btn-flow ${activeTab === 'practice' ? 'active' : ''}" data-tab="practice">Practice</button>
            <button class="tab-pill-btn-flow ${activeTab === 'timed' ? 'active' : ''}" data-tab="timed">Timed</button>
            <button class="tab-pill-btn-flow ${activeTab === 'completed' ? 'active' : ''}" data-tab="completed">Completed</button>
          </div>
        </div>

        <!-- Quizzes List Rows Container -->
        <div style="max-width: 860px; margin: 20px auto 0;">
          <div class="ongoing-chapters-list" style="gap: 16px;">
            ${activeTab === 'completed' ? renderCompletedRows() : renderActiveRows(displayedQuizzes)}
          </div>
        </div>

      </div>
    `;

    // Bind tab pill clicks
    container.querySelectorAll(".tab-pill-btn-flow").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        render();
      });
    });

    // Bind quiz row and Start button clicks
    container.querySelectorAll(".quiz-start-btn, .quiz-row-item").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-quiz-id");
        if (id && window.lmsStartQuiz) {
          window.lmsStartQuiz(id);
        }
      });
    });
  }

  // Active Quizzes Rows (Matches Screen 2)
  function renderActiveRows(list) {
    return list.map(q => `
      <div class="ongoing-chapter-row quiz-row-item" data-quiz-id="${q.id}" onclick="if (window.lmsStartQuiz) window.lmsStartQuiz('${q.id}');" style="cursor: pointer;">
        
        <!-- Left: Subject Icon + Title + Subtitle -->
        <div class="ongoing-left-meta" style="min-width: 340px;">
          <div class="ongoing-icon-box" style="background: ${getLightBg(q.subjectId)};">
            ${getGraphic(q.iconType, 36)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${q.title}</h3>
            <div style="font-size: 13px; color: #64748B; font-weight: 500; margin-top: 3px;">
              ${q.subtitle}
            </div>
          </div>
        </div>

        <!-- Center: Spacer -->
        <div></div>

        <!-- Right: Start → Button (Solid Purple Pill) -->
        <div>
          <button type="button" class="ongoing-continue-btn quiz-start-btn" data-quiz-id="${q.id}" onclick="event.stopPropagation(); if (window.lmsStartQuiz) window.lmsStartQuiz('${q.id}');" style="padding: 9px 26px; cursor: pointer;">
            Start →
          </button>
        </div>

      </div>
    `).join('');
  }

  // Completed Quizzes Rows (Matches Image 1 Screen 8: Quiz History)
  function renderCompletedRows() {
    return quizzesCatalog.map(q => `
      <div class="ongoing-chapter-row" style="cursor: pointer;" onclick="if (window.lmsQuizViewResult) window.lmsQuizViewResult('${q.id}');">
        
        <!-- Left: Subject Icon + Title -->
        <div class="ongoing-left-meta" style="min-width: 320px;">
          <div class="ongoing-icon-box" style="background: ${getLightBg(q.subjectId)};">
            ${getGraphic(q.iconType, 36)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${q.title}</h3>
          </div>
        </div>

        <!-- Center: Score & Date -->
        <div style="font-size: 13.5px; font-weight: 800; color: #1E293B;">
          ${q.completedScore}
        </div>

        <!-- Right: View Button (Solid Purple Pill) -->
        <div>
          <button type="button" class="ongoing-continue-btn" onclick="event.stopPropagation(); if (window.lmsQuizViewResult) window.lmsQuizViewResult('${q.id}');" style="padding: 7px 22px; font-size: 13px; cursor: pointer;">
            View
          </button>
        </div>

      </div>
    `).join('');
  }

  // =========================================================================
  // VIEW 2: Quiz Details (Matches Image 1 Screen 3 & Image 2 Screen 3)
  // =========================================================================
  function renderDetailsView() {
    const q = getCurrentQuiz();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Quiz Details Title -->
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22px;">
          <button id="quiz-details-back-btn" class="btn-secondary" onclick="if (window.lmsQuizBackToList) window.lmsQuizBackToList();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0;">Quiz Details</h1>
        </div>

        <!-- Main Hero Card (Large rounded purple-tinted card) -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-details-hero-card">
            
            <!-- Top Row: Icon + Title/Chapter on Left, 3D Illustration on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <div class="ongoing-icon-box" style="width: 56px; height: 56px; background: ${getLightBg(q.subjectId)};">
                  ${getGraphic(q.iconType, 42)}
                </div>
                <div>
                  <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 4px;">${q.title}</h2>
                  <p style="font-size: 14px; color: #64748B; margin: 0; font-weight: 600;">${q.chapter}</p>
                </div>
              </div>

              <!-- Right: 3D Biological Cell or Subject Graphic -->
              <div style="width: 140px; height: 90px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 120px; height: 75px; background: radial-gradient(circle, #EDE9FE 0%, rgba(237, 233, 254, 0) 70%); filter: blur(8px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.68);">
                  ${GRAPHICS.cell3D(180, 140, "nucleus")}
                </div>
              </div>
            </div>

            <!-- 4-Stat Metric Strip: 10 Questions, 15 Minutes, 100 Points, Medium Difficulty -->
            <div class="challenge-metric-strip">
              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #F5F3FF; color: #7C3AED;">
                  ${(ICONS.document || ICONS.assignment)(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${q.questionsCount}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Questions</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FDF2F8; color: #EC4899;">
                  ${ICONS.clock(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${q.durationMinutes}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Minutes</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FFFBEB; color: #D97706;">
                  ${ICONS.star(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${q.points}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Points</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #E0F2FE; color: #0284C7;">
                  ${(ICONS.barChart || ICONS.progress)(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${q.difficulty}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Difficulty</div>
                </div>
              </div>
            </div>

            <!-- Two Columns: Topics Covered on Left | Question Types on Right -->
            <div style="display: flex; justify-content: space-between; gap: 40px; margin-bottom: 32px; padding: 0 8px;">
              
              <!-- Left: Topics Covered Checklist -->
              <div style="flex: 1;">
                <h3 style="font-size: 16.5px; font-weight: 800; color: #1E293B; margin: 0 0 16px;">Topics Covered</h3>
                <div>
                  ${q.topics.map(t => `
                    <div class="challenge-topic-item">
                      <div class="challenge-check-icon lu-plain-icon-box">${GRAPHICS.checkDoneIcon(22)}</div>
                      <span>${t}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Middle subtle divider -->
              <div style="width: 1px; background: #E2E8F0; align-self: stretch;"></div>

              <!-- Right: Question Types Supported -->
              <div style="flex: 1; padding-left: 12px;">
                <h3 style="font-size: 16.5px; font-weight: 800; color: #1E293B; margin: 0 0 16px;">Question Types</h3>
                <div>
                  <div class="quiz-type-item">
                    <div class="quiz-type-box lu-plain-icon-box">${GRAPHICS.checkTodoIcon(26)}</div>
                    <span>MCQ</span>
                  </div>
                  <div class="quiz-type-item">
                    <div class="quiz-type-box lu-plain-icon-box">${GRAPHICS.checkDoneIcon(26)}</div>
                    <span>True / False</span>
                  </div>
                  <div class="quiz-type-item">
                    <div class="quiz-type-box lu-plain-icon-box">${ICONS.document(26)}</div>
                    <span>Short Answer</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Bottom Action: Start Quiz Button -->
            <div style="text-align: center;">
              <button id="start-quiz-details-btn" class="start-challenge-main-btn" onclick="if (window.lmsQuizGoInstructions) window.lmsQuizGoInstructions();" style="cursor: pointer;">
                Start Quiz →
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    // Bind clicks
    container.querySelector("#quiz-details-back-btn")?.addEventListener("click", () => {
      view = "list";
      render();
    });

    container.querySelector("#start-quiz-details-btn")?.addEventListener("click", () => {
      view = "instructions";
      render();
    });
  }

  // =========================================================================
  // VIEW 3: Quiz Instructions (Matches Image 1 Screen 4 & Image 3 Screen 4)
  // =========================================================================
  function renderInstructionsView() {
    const q = getCurrentQuiz();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Quiz Instructions Title -->
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22px;">
          <button id="quiz-instructions-back-btn" class="btn-secondary" onclick="if (window.lmsQuizBackToDetails) window.lmsQuizBackToDetails();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0;">Quiz Instructions</h1>
        </div>

        <!-- Main Card: 3D Clipboard & Pencil on Left, Before You Start on Right -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="quiz-instruction-card">
            
            <!-- Left: 3D Clipboard with Checklist & Pencil Illustration -->
            <div style="width: 220px; display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="position: absolute; width: 180px; height: 180px; background: radial-gradient(circle, #EDE9FE 0%, rgba(237, 233, 254, 0) 70%); filter: blur(10px);"></div>
              <div style="position: relative; z-index: 2;">
                ${GRAPHICS.clipboardWithPencil(190)}
              </div>
            </div>

            <!-- Right: "Before You Start" Rules Checklist with Purple Circles -->
            <div class="quiz-rules-col">
              <h2 style="font-size: 20px; font-weight: 800; color: #1E293B; margin: 0 0 20px;">Before You Start</h2>
              
              <div class="quiz-rule-row">
                <div class="quiz-rule-circle lu-plain-icon-box">${ICONS.clock(30)}</div>
                <span>10 Questions</span>
              </div>

              <div class="quiz-rule-row">
                <div class="quiz-rule-circle lu-plain-icon-box">${ICONS.clock(30)}</div>
                <span>15 Minutes (Timed)</span>
              </div>

              <div class="quiz-rule-row">
                <div class="quiz-rule-circle lu-plain-icon-box">${ICONS.star(30)}</div>
                <span>100 Points (10 per question)</span>
              </div>

              <div class="quiz-rule-row">
                <div class="quiz-rule-circle lu-plain-icon-box">${ICONS.retry(30)}</div>
                <span>1 Attempt</span>
              </div>

              <div class="quiz-rule-row">
                <div class="quiz-rule-circle" style="color: #3B82F6;">ℹ</div>
                <span>Auto-submit when time ends</span>
              </div>
            </div>

          </div>

          <!-- Bottom Action: Start Now Button -->
          <div style="text-align: center;">
            <button id="start-now-btn" class="start-challenge-main-btn" onclick="if (window.lmsQuizStartNow) window.lmsQuizStartNow();" style="cursor: pointer; padding: 12px 42px; font-size: 15px;">
              Start Now →
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind clicks
    container.querySelector("#quiz-instructions-back-btn")?.addEventListener("click", () => {
      view = "details";
      render();
    });

    container.querySelector("#start-now-btn")?.addEventListener("click", () => {
      startQuizRun();
    });
  }

  // =========================================================================
  // VIEW 4: Take Quiz / Question Runner (Matches Image 1 Screen 5 & Image 3 Screen 5)
  // =========================================================================
  function renderRunnerView() {
    const q = getCurrentQuiz();
    const questions = getRunQuestions();
    if (qIndex >= questions.length) qIndex = questions.length - 1;

    const currentQ = questions[qIndex] || questions[0];
    const totalQuestions = questions.length;
    const isLastQuestion = qIndex === totalQuestions - 1;
    const answeredCount = countAnswered();
    const progressPercent = Math.round(((qIndex + 1) / totalQuestions) * 100);

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Back Button + Quiz Title + Countdown Timer Pill -->
        <div style="max-width: 860px; margin: 0 auto 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
            
            <button id="quiz-runner-back-btn" onclick="if (window.lmsQuizBackToDetails) window.lmsQuizBackToDetails();" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              ← ${q.title}
            </button>

            <!-- Countdown Timer matching image 14:32 -->
            <div id="quiz-timer-pill" style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1.5px solid #FEE2E2; padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 800; color: #DC2626; box-shadow: 0 2px 8px rgba(239, 68, 68, 0.1);">
              ${ICONS.clock(18)} <span id="quiz-timer-display">${formatTimer(timeLeftSeconds)}</span>
            </div>

          </div>

          <!-- Question Index & Purple Progress Bar Track -->
          <div>
            <div style="font-size: 13.5px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">
              Question ${qIndex + 1} of ${totalQuestions}
              <span style="float: right; color: #7C3AED;">${answeredCount} / ${totalQuestions} answered</span>
            </div>
            <div class="lu-bar-track" style="width: 100%; height: 8px; background: #EDE9FE; border-radius: 999px; overflow: hidden;">
              <div class="lu-bar-fill" style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, #7C3AED, #9333EA); border-radius: 999px; transition: width 0.3s ease;"></div>
            </div>
          </div>
        </div>

        <!-- Question Card (White rounded card with question, options, and 3D cell illustration) -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-runner-card">
            
            <!-- Question Heading -->
            <h2 style="font-size: 17px; font-weight: 800; color: #0F172A; line-height: 1.5; margin: 0 0 24px;">
              Q${qIndex + 1}. ${currentQ.text}
            </h2>

            <!-- Main Layout: Options on Left, 3D Biological Cell Cutaway on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 28px;">
              
              <!-- Left: Radio Option Buttons -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
                ${currentQ.options.map((opt, idx) => {
                  const isSelected = userAnswers[qIndex] === idx;
                  return `
                    <button class="quiz-runner-option ${isSelected ? 'selected' : ''}" data-idx="${idx}" onclick="event.stopPropagation();">
                      <div class="quiz-runner-circle">
                        ${isSelected ? `
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        ` : ''}
                      </div>
                      <span>${opt}</span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Right: 3D Biological Cell Illustration matching reference -->
              <div style="width: 260px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 200px; height: 160px; background: radial-gradient(circle, #F3E8FF 0%, rgba(243, 232, 255, 0) 70%); filter: blur(8px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.9); filter: drop-shadow(0 10px 24px rgba(124, 58, 237, 0.2));">
                  ${q.subjectId === "science" || !q.subjectId ? GRAPHICS.cell3D(260, 200, "nucleus") : GRAPHICS.getSubjectIcon(({ maths: "calculator", social: "globe", english: "book", tamil: "tamil" })[q.subjectId] || "flask", 150)}
                </div>
              </div>

            </div>

            <!-- Bottom Button Bar: Previous & Next / Submit -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1.5px solid #F1F5F9;">
              <button id="quiz-runner-prev-btn" class="btn-secondary" style="border-radius: 999px; padding: 10px 24px; font-weight: 700;" ${qIndex === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                ‹ Previous
              </button>

              <button id="quiz-runner-next-btn" class="ongoing-continue-btn" style="padding: 10px 32px; font-size: 14.5px;">
                ${isLastQuestion ? 'Submit Quiz ✓' : 'Next →'}
              </button>
            </div>

          </div>
        </div>

        <!-- Submit Quiz Confirmation Modal (Screen 6) -->
        ${showSubmitModal ? renderSubmitModal() : ''}

      </div>
    `;

    // Start Live Timer
    timerInterval = setInterval(() => {
      if (timeLeftSeconds > 0) {
        timeLeftSeconds--;
        const el = document.getElementById("quiz-timer-display");
        if (el) el.innerText = formatTimer(timeLeftSeconds);
        if (timeLeftSeconds === 0 && view === "runner") {
          app.showToast("Time is up! Your quiz has been submitted.");
          finishQuiz();
        }
      }
    }, 1000);

    // Bind Back button
    container.querySelector("#quiz-runner-back-btn")?.addEventListener("click", () => {
      view = "details";
      render();
    });

    // Bind Option buttons
    container.querySelectorAll(".quiz-runner-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        userAnswers[qIndex] = idx;
        render();
      });
    });

    // Bind Previous button
    container.querySelector("#quiz-runner-prev-btn")?.addEventListener("click", () => {
      if (qIndex > 0) {
        qIndex--;
        render();
      }
    });

    // Bind Next button -> Opens Submit Confirmation Modal (Image 1 Screen 6)
    container.querySelector("#quiz-runner-next-btn")?.addEventListener("click", () => {
      if (userAnswers[qIndex] === undefined) {
        app.showToast("Please choose an answer to continue.");
        return;
      }
      if (!isLastQuestion) {
        qIndex++;
        render();
        return;
      }
      // Last question: every question must be answered before submitting
      const firstUnanswered = questions.findIndex((_, i) => userAnswers[i] === undefined);
      if (firstUnanswered !== -1) {
        app.showToast("Please answer Question " + (firstUnanswered + 1) + " before submitting.");
        qIndex = firstUnanswered;
        render();
        return;
      }
      showSubmitModal = true;
      render();
    });
  }

  // =========================================================================
  // VIEW 5: Submit Confirmation Modal (Matches Image 1 Screen 6 & Image 3 Screen 6)
  // =========================================================================
  function renderSubmitModal() {
    return `
      <div class="quiz-modal-backdrop" id="quiz-modal-overlay">
        <div class="quiz-modal-card">
          
          <!-- Top Right Close ✕ Button -->
          <button class="quiz-modal-close-btn" onclick="if (window.lmsQuizCloseSubmitModal) window.lmsQuizCloseSubmitModal();">✕</button>

          <!-- Center Document Graphic with Green Check Badge -->
          <div style="margin: 0 auto 16px;">
            ${GRAPHICS.quizSubmitDocIcon(72)}
          </div>

          <!-- Modal Title & Question Count -->
          <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">Submit Quiz?</h2>
          <p style="font-size: 14px; color: #64748B; margin: 0 0 20px; font-weight: 600;">You have answered ${countAnswered()} of ${getRunQuestions().length} questions.</p>

          <!-- Action Buttons: Review Answers & Submit -->
          <div class="quiz-modal-btns">
            <button class="btn-secondary" onclick="if (window.lmsQuizCloseSubmitModal) window.lmsQuizCloseSubmitModal();" style="border-radius: 999px; padding: 11px 24px; font-weight: 700; font-size: 14px; cursor: pointer;">
              Review Answers
            </button>

            <button class="ongoing-continue-btn" onclick="if (window.lmsQuizConfirmSubmit) window.lmsQuizConfirmSubmit();" style="border-radius: 999px; padding: 11px 32px; font-size: 14.5px; cursor: pointer;">
              Submit
            </button>
          </div>

        </div>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 6: Quiz Result (Matches Image 1 Screen 7 & Image 3 Screen 7)
  // =========================================================================
  function renderResultView() {
    const q = getCurrentQuiz();

    // Trigger celebratory confetti burst!
    triggerConfetti();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Quiz Title -->
        <div style="max-width: 580px; margin: 0 auto 18px; display: flex; align-items: center; gap: 12px;">
          <button id="quiz-result-back-btn" class="btn-secondary" onclick="if (window.lmsQuizBackToList) window.lmsQuizBackToList();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; cursor: pointer;">
            ← ${q.title}
          </button>
        </div>

        <!-- Center Celebratory Result Card -->
        <div class="challenge-result-card">
          
          <!-- Top: Large 3D Golden Trophy with Confetti Sparks -->
          <div style="margin: 0 auto 12px; filter: drop-shadow(0 12px 24px rgba(245, 158, 11, 0.35)); transform: scale(1.15);">
            ${GRAPHICS.goldTrophy(92)}
          </div>

          <!-- Great Job! Heading -->
          <h2 style="font-size: 26px; font-weight: 900; color: ${lastResult && lastResult.pct < 50 ? '#F59E0B' : '#10B981'}; margin: 0 0 6px;">${!lastResult || lastResult.pct >= 80 ? 'Great Job!' : lastResult.pct >= 50 ? 'Good Effort!' : 'Keep Practicing!'}</h2>
          <div style="font-size: 14px; color: #64748B; font-weight: 600;">You Scored</div>

          <!-- Score Display 8 / 10 -->
          <div class="challenge-score-display">${q.scoreText || "8 / 10"}</div>

          <!-- 3 Stat Tiles: Accuracy, Points Earned, Time Taken -->
          <div class="challenge-result-stats-row">
            
            <div class="challenge-result-stat-box">
              ${ICONS.target(24)}
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${q.scorePct || "80%"}</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Accuracy</span>
            </div>

            <div class="challenge-result-stat-box">
              ${ICONS.star(24)}
              <span style="font-size: 15px; font-weight: 800; color: #D97706;">+${q.pointsEarned || 80}</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Points Earned</span>
            </div>

            <div class="challenge-result-stat-box">
              ${ICONS.clock(24)}
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${q.timeTakenText || "02:15"}</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Time Taken</span>
            </div>

          </div>

          <!-- Bottom Action Buttons: View Answers & Try Again -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 14px;">
            <button id="quiz-view-answers-btn" class="btn-secondary" style="border-radius: 999px; padding: 12px 28px; font-weight: 700; font-size: 14px; cursor: pointer;">
              View Answers
            </button>

            <button id="quiz-try-again-btn" class="ongoing-continue-btn" onclick="if (window.lmsQuizRestart) window.lmsQuizRestart();" style="padding: 12px 32px; font-size: 14.5px; cursor: pointer;">
              Try Again
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind Back button
    container.querySelector("#quiz-result-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "completed";
      render();
    });

    // Bind View Answers button -> opens answers modal
    container.querySelector("#quiz-view-answers-btn")?.addEventListener("click", () => {
      const reviewQs = getRunQuestions();
      const given = (lastResult && lastResult.answers) || userAnswers;
      const rows = reviewQs.map((qq, i) => {
        const ans = given[i];
        const ok = ans === qq.correct;
        const yourText = ans === undefined ? "Not answered" : qq.options[ans];
        return `
          <div style="background: ${ok ? '#F0FDF4' : '#FEF2F2'}; border: 1.5px solid ${ok ? '#10B981' : '#F87171'}; border-radius: 14px; padding: 14px; margin-bottom: 12px;">
            <div style="font-weight: 700; font-size: 13.5px; color: ${ok ? '#065F46' : '#991B1B'};">Q${i + 1}. ${qq.text}</div>
            <div style="font-size: 13px; color: ${ok ? '#047857' : '#B91C1C'}; margin-top: 4px;"><strong>Your Answer:</strong> ${ok ? '✔' : '✘'} ${yourText} ${ok ? '(Correct)' : ''}</div>
            ${ok ? '' : `<div style="font-size: 13px; color: #047857; margin-top: 2px;"><strong>Correct Answer:</strong> ${qq.options[qq.correct]}</div>`}
            <div style="font-size: 12px; color: #475569; margin-top: 6px;">${qq.explanation || ''}</div>
          </div>
        `;
      }).join('');
      app.showModal(`
        <div style="padding: 8px; max-height: 70vh; overflow-y: auto;">
          <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 14px;">Answer Review – ${q.title}</h3>
          ${rows}
          <button class="btn-primary" style="width: 100%; border-radius: 999px; padding: 10px 0; font-weight: 700; margin-top: 10px;" onclick="window.closeLmsModal()">
            Done
          </button>
        </div>
      `);
    });

    // Bind Try Again button
    container.querySelector("#quiz-try-again-btn")?.addEventListener("click", () => {
      startQuizRun();
    });
  }

  // Initial render
  render();
}

// ===== Module: js/screens/challenges.js =====
// Screen 07: Learning Challenges - Exact Workflow Matching User Images
// Flow:
// 1. Challenges List (All, Live, Upcoming, Completed)
// 2. Challenge Details (Hero Card, Topics, Metrics, Start Challenge button)
// 3. Take Challenge (Interactive Questions with Radio Options, 3D Organelle Graphics, Timer, Progress)
// 4. Challenge Result (Great Job! 8/10, Accuracy, Points Earned, Time Taken, Confetti)
// 5. Leaderboard (Podium Rank 1-3 with Crown & Laurel Wreaths, Runner-up ranks)
// 6. Completed Tab in Challenges List
function renderChallengesScreen(container, state, app) {
  let view = state.challengeCurrentView || "list"; // "list", "details", "runner", "result", "leaderboard"
  let activeTab = state.challengesActiveTab || "all"; // "all", "live", "upcoming", "completed"
  let activeChallenge = state.selectedChallenge || null;
  let qIndex = 0;
  let userAnswers = {};
  let challengeStartedAt = Date.now();
  let lastChallengeResult = null;
  let timerInterval = null;
  let timeLeftSeconds = 14 * 60 + 32; // 14:32 countdown like in image

  // Comprehensive Challenges List matching Image 1 & Image 2
  const challengesCatalog = [
    {
      id: "ch-sci-weekly",
      title: "Weekly Science Challenge",
      subject: "Science",
      subjectId: "science",
      iconType: "flask",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      attempts: 3,
      status: "live", // "live", "upcoming", "completed"
      subtitle: "10 Questions • 15 Minutes",
      detailsTagline: "Test your Science knowledge and earn points!",
      topics: [
        "The Cell",
        "Nutrition in Plants",
        "Heat",
        "Acids, Bases and Salts"
      ],
      completedScore: "10 Nov 2026 • Score: 8/10",
      questions: [
        {
          num: 1,
          text: "What is the basic structural and functional unit of all living organisms?",
          options: ["Tissue", "Cell", "Organ", "Nucleus"],
          correct: 1,
          illustration: "cell"
        },
        {
          num: 2,
          text: "Which process do green plants use to synthesize food using sunlight?",
          options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
          correct: 1,
          illustration: "cell"
        },
        {
          num: 3,
          text: "Which part of the cell controls all the activities?",
          options: ["Cell Wall", "Nucleus", "Chloroplast", "Mitochondria"],
          correct: 1,
          illustration: "cell"
        },
        {
          num: 4,
          text: "What mode of heat transfer requires no medium and travels through a vacuum?",
          options: ["Conduction", "Convection", "Radiation", "Insulation"],
          correct: 2,
          illustration: "cell"
        },
        {
          num: 5,
          text: "Which of the following turns blue litmus paper red?",
          options: ["Baking Soda", "Hydrochloric Acid", "Soap Solution", "Distilled Water"],
          correct: 1,
          illustration: "cell"
        }
      ]
    },
    {
      id: "ch-math-speed",
      title: "Maths Speed Challenge",
      subject: "Mathematics",
      subjectId: "maths",
      iconType: "calculator",
      questionsCount: 15,
      durationMinutes: 20,
      points: 150,
      attempts: 2,
      status: "live",
      subtitle: "15 Questions • 20 Minutes",
      detailsTagline: "Sharpen calculation speed across Fractions, Integers & Decimals!",
      topics: [
        "Fractions & Decimals",
        "Integers Operations",
        "Algebraic Expressions",
        "Ratio and Proportion"
      ],
      completedScore: "08 Nov 2026 • Score: 9/15",
      questions: [
        {
          num: 1,
          text: "What is the sum of 3/4 and 2/3?",
          options: ["5/7", "17/12 (or 1 5/12)", "1", "6/12"],
          correct: 1,
          illustration: "calc"
        },
        {
          num: 2,
          text: "Evaluate: (-15) + (-28) = ?",
          options: ["-43", "43", "-13", "13"],
          correct: 0,
          illustration: "calc"
        }
      ]
    },
    {
      id: "ch-soc-env",
      title: "Social Science Challenge",
      subject: "Social Science",
      subjectId: "social",
      iconType: "globe",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      attempts: 3,
      status: "upcoming",
      subtitle: "10 Questions • 15 Minutes",
      detailsTagline: "Explore Earth's atmosphere, dynasties and civic rights!",
      topics: [
        "Our Environment",
        "Atmospheric Layers",
        "Mughal Empire",
        "Democratic Institutions"
      ],
      completedScore: "02 Nov 2026 • Score: 8/10",
      questions: []
    },
    {
      id: "ch-eng-gram",
      title: "English Grammar Challenge",
      subject: "English",
      subjectId: "english",
      iconType: "book",
      questionsCount: 10,
      durationMinutes: 15,
      points: 100,
      attempts: 3,
      status: "upcoming",
      subtitle: "10 Questions • 15 Minutes",
      detailsTagline: "Master tenses, active/passive voice, and vocabulary!",
      topics: [
        "Tenses & Modals",
        "Subject-Verb Agreement",
        "Reading Comprehension",
        "Figures of Speech"
      ],
      completedScore: "05 Nov 2026 • Score: 7/10",
      questions: []
    }
  ];

  // Set default selected challenge if none
  if (!activeChallenge) {
    activeChallenge = challengesCatalog[0];
  }

  // Handle deep-link from Dashboard if student clicked a challenge card
  if (state.activeChallengeSubject) {
    const sId = state.activeChallengeSubject;
    delete state.activeChallengeSubject;
    const match = challengesCatalog.find(c => c.subjectId === sId);
    if (match) {
      activeChallenge = match;
      view = "details";
    }
  }

  function getGraphic(type, size = 42) {
    switch (type) {
      case "trophy": return GRAPHICS.goldTrophy(size);
      case "star": return GRAPHICS.goldStar(size);
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      default: return GRAPHICS.goldTrophy(size);
    }
  }

  // Attach full question banks
  challengesCatalog.forEach(c => {
    const bank = CHALLENGE_QUESTION_BANK[c.id];
    if (bank && bank.length) {
      c.questions = bank;
      c.questionsCount = bank.length;
    }
  });

  function getCurrentChallenge() {
    const id = (activeChallenge && activeChallenge.id) || (state.selectedChallenge && state.selectedChallenge.id);
    return challengesCatalog.find(c => c.id === id) || activeChallenge || challengesCatalog[0];
  }

  function getChallengeQuestions() {
    const ch = getCurrentChallenge();
    return CHALLENGE_QUESTION_BANK[ch.id] || (ch.questions && ch.questions.length ? ch.questions : CHALLENGE_QUESTION_BANK["ch-sci-weekly"]);
  }

  function startChallengeRun() {
    const ch = getCurrentChallenge();
    activeChallenge = ch;
    state.selectedChallenge = ch;
    qIndex = 0;
    userAnswers = {};
    timeLeftSeconds = (ch.durationMinutes || 15) * 60;
    challengeStartedAt = Date.now();
    lastChallengeResult = null;
    view = "runner";
    render();
  }

  function finishChallenge() {
    const ch = getCurrentChallenge();
    const questions = getChallengeQuestions();
    let correct = 0;
    questions.forEach((qq, i) => { if (userAnswers[i] === qq.correct) correct++; });
    const total = questions.length;
    const pct = Math.round((correct / total) * 100);
    const points = Math.round(((ch.points || total * 10) * correct) / total);
    const usedSec = Math.max(1, Math.round((Date.now() - challengeStartedAt) / 1000));
    lastChallengeResult = { correct, total, pct, points, timeText: formatTime(Math.min(usedSec, 99 * 60 + 59)), answers: Object.assign({}, userAnswers) };
    ch.completed = true;
    ch.scoreText = correct + " / " + total;
    state.student.points += points;
    if (app.updateHeaderStats) app.updateHeaderStats();
    view = "result";
    render();
  }

  function formatTime(totalSec) {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Attach window helpers for bulletproof click delegation and inline handlers
  window.lmsAttemptChallenge = function(id) {
    const match = challengesCatalog.find(c => c.id === id) || challengesCatalog[0];
    activeChallenge = match;
    state.selectedChallenge = match;
    view = "details";
    render();
  };

  window.lmsStartChallenge = function() {
    startChallengeRun();
  };

  window.lmsBackToChallenges = function() {
    view = "list";
    render();
  };

  window.lmsGoLeaderboard = function() {
    view = "leaderboard";
    render();
  };

  function render() {
    try {
      state.challengeCurrentView = view;
      state.challengesActiveTab = activeTab;

      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      if (view === "list") {
        renderListView();
      } else if (view === "details") {
        renderDetailsView();
      } else if (view === "runner") {
        renderRunnerView();
      } else if (view === "result") {
        renderResultView();
      } else if (view === "leaderboard") {
        renderLeaderboardView();
      }
    } catch (err) {
      console.error("Error rendering challenges view:", err);
    }
  }

  // =========================================================================
  // VIEW 1: Challenges List (Matches 1st Image, Left Screen)
  // =========================================================================
  function renderListView() {
    let displayedChallenges = challengesCatalog;
    if (activeTab === "live") {
      displayedChallenges = challengesCatalog.filter(c => c.status === "live");
    } else if (activeTab === "upcoming") {
      displayedChallenges = challengesCatalog.filter(c => c.status === "upcoming");
    } else if (activeTab === "completed") {
      displayedChallenges = challengesCatalog; // All completed entries displayed
    }

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header (Title + Segmented Pill Tabs) -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">Challenges</h1>
          </div>

          <!-- Segmented Pill Tabs: All Challenges, Live, Upcoming, Completed -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow ${activeTab === 'all' ? 'active' : ''}" data-tab="all">All Challenges</button>
            <button class="tab-pill-btn-flow ${activeTab === 'live' ? 'active' : ''}" data-tab="live">Live</button>
            <button class="tab-pill-btn-flow ${activeTab === 'upcoming' ? 'active' : ''}" data-tab="upcoming">Upcoming</button>
            <button class="tab-pill-btn-flow ${activeTab === 'completed' ? 'active' : ''}" data-tab="completed">Completed</button>
          </div>
        </div>

        <!-- Challenges Rows List (Matching 1st Image Left Screen) -->
        <div style="max-width: 860px; margin: 20px auto 0;">
          <div class="ongoing-chapters-list" style="gap: 16px;">
            ${activeTab === 'completed' ? renderCompletedRows() : renderActiveRows(displayedChallenges)}
          </div>
        </div>

      </div>
    `;

    // Bind tab pill buttons
    container.querySelectorAll(".tab-pill-btn-flow").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        render();
      });
    });

    // Bind Attempt button clicks directly
    container.querySelectorAll(".challenge-attempt-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = btn.getAttribute("data-challenge-id");
        const match = challengesCatalog.find(c => c.id === id) || challengesCatalog[0];
        activeChallenge = match;
        state.selectedChallenge = match;
        view = "details";
        render();
      });
    });

    // Bind Challenge Row clicks
    container.querySelectorAll(".challenge-row-item").forEach(row => {
      row.addEventListener("click", (e) => {
        if (e.target.closest(".challenge-notify-btn")) return;
        const id = row.getAttribute("data-challenge-id");
        const match = challengesCatalog.find(c => c.id === id) || challengesCatalog[0];
        activeChallenge = match;
        state.selectedChallenge = match;
        view = "details";
        render();
      });
    });

    // Bind Notify Me buttons
    container.querySelectorAll(".challenge-notify-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = btn.getAttribute("data-challenge-id");
        const match = challengesCatalog.find(c => c.id === id);
        if (match) {
          match.notified = !match.notified;
          if (match.notified) {
            btn.classList.add("reminded");
            btn.innerHTML = `✔ Subscribed`;
            app.showToast(`🔔 We'll notify you when ${match.title} goes live!`);
          } else {
            btn.classList.remove("reminded");
            btn.innerHTML = `Notify Me`;
            app.showToast(`Notification cancelled.`);
          }
        }
      });
    });
  }

  function renderActiveRows(list) {
    return list.map(ch => `
      <div class="ongoing-chapter-row challenge-row-item" data-challenge-id="${ch.id}" onclick="if (!event.target.closest('.challenge-notify-btn')) { if (window.lmsAttemptChallenge) window.lmsAttemptChallenge('${ch.id}'); }" style="cursor: pointer;">
        
        <!-- Left: 3D Trophy/Star/Globe/Book Icon + Title + Questions/Duration Meta -->
        <div class="ongoing-left-meta" style="min-width: 320px;">
          <div class="ongoing-icon-box" style="background: ${getLightBg(ch.subjectId)};">
            ${getGraphic(ch.iconType, 36)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${ch.title}</h3>
            <div style="font-size: 13px; color: #64748B; font-weight: 500; margin-top: 3px;">
              ${ch.subtitle}
            </div>
          </div>
        </div>

        <!-- Center: Status Badge (Live or Upcoming) -->
        <div>
          ${ch.status === 'live' ? `
            <span style="display: inline-flex; align-items: center; gap: 6px; background: #FEE2E2; color: #DC2626; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 999px;">
              ${ICONS.flame(15)} Live
            </span>
          ` : `
            <span style="display: inline-flex; align-items: center; gap: 6px; background: #F5F3FF; color: #7C3AED; font-size: 12px; font-weight: 800; padding: 4px 12px; border-radius: 999px; border: 1px solid #DDD6FE;">
              ${ICONS.calendar(14)} Upcoming
            </span>
          `}
        </div>

        <!-- Right: Action Button (Attempt → or Notify Me) -->
        <div>
          ${ch.status === 'live' ? `
            <button type="button" class="ongoing-continue-btn challenge-attempt-btn" data-challenge-id="${ch.id}" data-action="attempt" onclick="event.stopPropagation(); if (window.lmsAttemptChallenge) window.lmsAttemptChallenge('${ch.id}');" style="padding: 9px 24px; cursor: pointer;">
              Attempt →
            </button>
          ` : `
            <button type="button" class="upcoming-remind-btn challenge-notify-btn ${ch.notified ? 'reminded' : ''}" data-challenge-id="${ch.id}" style="cursor: pointer;">
              ${ch.notified ? '✔ Subscribed' : 'Notify Me'}
            </button>
          `}
        </div>

      </div>
    `).join('');
  }

  // Matches 2nd Image Screen 7 (Completed Tab)
  function renderCompletedRows() {
    return challengesCatalog.map(ch => `
      <div class="ongoing-chapter-row" style="cursor: pointer;" onclick="window.appInstance.showToast('Challenge already completed! View in Leaderboard.');">
        
        <!-- Left: 3D Icon + Title + Score Date -->
        <div class="ongoing-left-meta" style="min-width: 320px;">
          <div class="ongoing-icon-box" style="background: ${getLightBg(ch.subjectId)};">
            ${getGraphic(ch.iconType, 36)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${ch.title}</h3>
            <div style="font-size: 12.5px; color: #64748B; font-weight: 500; margin-top: 3px;">
              ${ch.completedScore}
            </div>
          </div>
        </div>

        <!-- Center: Spacer -->
        <div></div>

        <!-- Right: Completed Soft Green Badge -->
        <div>
          <div class="completed-status-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Completed</span>
          </div>
        </div>

      </div>
    `).join('');
  }

  // =========================================================================
  // VIEW 2: Challenge Details (Matches 1st Image, Right Screen)
  // =========================================================================
  function renderDetailsView() {
    const ch = activeChallenge || state.selectedChallenge || challengesCatalog[0];
    activeChallenge = ch;
    state.selectedChallenge = ch;

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Challenge Details Title -->
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22px;">
          <button id="challenge-details-back-btn" class="btn-secondary" onclick="if (window.lmsBackToChallenges) window.lmsBackToChallenges();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0;">Challenge Details</h1>
        </div>

        <!-- Main Hero Card (Large rounded purple-tinted card) -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-details-hero-card">
            
            <!-- Top Row: 3D Trophy + Title/Tagline + Live Badge -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <div style="filter: drop-shadow(0 6px 14px rgba(245, 158, 11, 0.25));">
                  ${GRAPHICS.goldTrophy(56)}
                </div>
                <div>
                  <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 4px;">${ch.title}</h2>
                  <p style="font-size: 14px; color: #64748B; margin: 0;">${ch.detailsTagline}</p>
                </div>
              </div>

              <!-- Live Badge -->
              <div>
                <span style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; color: #DC2626; font-size: 13px; font-weight: 800; padding: 6px 16px; border-radius: 999px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.12); border: 1px solid #FEE2E2;">
                  ${ICONS.flame(16)} Live
                </span>
              </div>
            </div>

            <!-- 4-Stat Metric Strip (10 Questions, 15 Minutes, 100 Points, 3 Attempts) -->
            <div class="challenge-metric-strip">
              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #F5F3FF; color: #7C3AED;">
                  ${(ICONS.document || ICONS.assignment)(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${ch.questionsCount}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Questions</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FDF2F8; color: #EC4899;">
                  ${ICONS.clock(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${ch.durationMinutes}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Minutes</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FFFBEB; color: #D97706;">
                  ${ICONS.star(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${ch.points}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Points</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #EDE9FE; color: #6D28D9;">
                  ${ICONS.target(28)}
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${ch.attempts}</div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 600;">Attempts</div>
                </div>
              </div>
            </div>

            <!-- Body Two-Column: Topics Checklist on Left, 3D Trophy on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 32px; margin-bottom: 32px;">
              
              <!-- Left: Challenge Topics Checklist -->
              <div style="flex: 1;">
                <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0 0 16px;">Challenge Topics</h3>
                <div>
                  ${ch.topics.map(topic => `
                    <div class="challenge-topic-item">
                      <div class="challenge-check-icon lu-plain-icon-box">${GRAPHICS.checkDoneIcon(22)}</div>
                      <span>${topic}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Right: Large 3D Trophy Illustration with Soft Ambient Cloud -->
              <div style="width: 220px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 170px; height: 170px; border-radius: 50%; background: radial-gradient(circle, #EDE9FE 0%, rgba(237, 233, 254, 0) 70%); filter: blur(10px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(1.1); filter: drop-shadow(0 14px 28px rgba(245, 158, 11, 0.28));">
                  ${GRAPHICS.goldTrophy(135)}
                </div>
              </div>

            </div>

            <!-- Bottom Action: Start Challenge Button -->
            <div style="text-align: center;">
              <button id="start-challenge-btn" class="start-challenge-main-btn" onclick="if (window.lmsStartChallenge) window.lmsStartChallenge();" style="cursor: pointer;">
                Start Challenge →
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    // Bind Back button
    container.querySelector("#challenge-details-back-btn")?.addEventListener("click", () => {
      view = "list";
      render();
    });

    // Bind Start Challenge button -> Starts Question Runner (Image 2 Screen 4)
    container.querySelector("#start-challenge-btn")?.addEventListener("click", () => {
      startChallengeRun();
    });
  }

  // =========================================================================
  // VIEW 3: Take Challenge / Question Runner (Matches 2nd Image, Screen 4)
  // =========================================================================
  function renderRunnerView() {
    const ch = getCurrentChallenge();
    activeChallenge = ch;
    state.selectedChallenge = ch;
    const questions = getChallengeQuestions();
    if (qIndex >= questions.length) qIndex = questions.length - 1;

    const currentQ = questions[qIndex] || questions[0];
    const totalQuestions = questions.length;
    const isLastQuestion = qIndex === totalQuestions - 1;
    const answeredCount = questions.filter((_, i) => userAnswers[i] !== undefined).length;
    const progressPercent = Math.round(((qIndex + 1) / totalQuestions) * 100);

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Back Title + Question Count + Progress Bar + Timer -->
        <div style="max-width: 860px; margin: 0 auto 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
            
            <button id="runner-back-btn" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              ← ${ch.title}
            </button>

            <!-- Countdown Timer matching image 14:32 -->
            <div id="runner-timer-pill" style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1.5px solid #FEE2E2; padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 800; color: #DC2626; box-shadow: 0 2px 8px rgba(239, 68, 68, 0.1);">
              ${ICONS.clock(18)} <span id="timer-display">${formatTime(timeLeftSeconds)}</span>
            </div>

          </div>

          <!-- Question Index & Purple Progress Bar Track -->
          <div>
            <div style="font-size: 13.5px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">
              Question ${qIndex + 1} of ${totalQuestions}
              <span style="float: right; color: #7C3AED;">${answeredCount} / ${totalQuestions} answered</span>
            </div>
            <div class="lu-bar-track" style="width: 100%; height: 8px; background: #EDE9FE; border-radius: 999px; overflow: hidden;">
              <div class="lu-bar-fill" style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, #7C3AED, #9333EA); border-radius: 999px; transition: width 0.3s ease;"></div>
            </div>
          </div>
        </div>

        <!-- Question Card (White rounded card with question, options, and 3D cell illustration) -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-runner-card">
            
            <!-- Question Heading -->
            <h2 style="font-size: 17px; font-weight: 800; color: #0F172A; line-height: 1.5; margin: 0 0 24px;">
              Q${qIndex + 1}. ${currentQ.text}
            </h2>

            <!-- Main Layout: Options on Left, 3D Biological Cell Cutaway on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 28px;">
              
              <!-- Left: Radio Option Buttons -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
                ${currentQ.options.map((opt, idx) => {
                  const isSelected = userAnswers[qIndex] === idx;
                  return `
                    <button class="challenge-radio-option ${isSelected ? 'selected' : ''}" data-idx="${idx}">
                      <div class="challenge-radio-circle">
                        ${isSelected ? `
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        ` : ''}
                      </div>
                      <span>${opt}</span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Right: 3D Biological Cell Illustration matching reference -->
              <div style="width: 260px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 200px; height: 160px; background: radial-gradient(circle, #F3E8FF 0%, rgba(243, 232, 255, 0) 70%); filter: blur(8px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.9); filter: drop-shadow(0 10px 24px rgba(124, 58, 237, 0.2));">
                  ${ch.subjectId === "science" || !ch.subjectId ? GRAPHICS.cell3D(260, 200, "nucleus") : GRAPHICS.getSubjectIcon(({ maths: "calculator", social: "globe", english: "book", tamil: "tamil" })[ch.subjectId] || "flask", 150)}
                </div>
              </div>

            </div>

            <!-- Bottom Button Bar: Previous & Next / Submit -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1.5px solid #F1F5F9;">
              <button id="runner-prev-btn" class="btn-secondary" style="border-radius: 999px; padding: 10px 24px; font-weight: 700;" ${qIndex === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                ‹ Previous
              </button>

              <button id="runner-next-btn" class="ongoing-continue-btn" style="padding: 10px 32px; font-size: 14.5px;">
                ${isLastQuestion ? 'Submit Challenge ✓' : 'Next ›'}
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    // Start Live Timer
    timerInterval = setInterval(() => {
      if (timeLeftSeconds > 0) {
        timeLeftSeconds--;
        const el = document.getElementById("timer-display");
        if (el) el.innerText = formatTime(timeLeftSeconds);
        if (timeLeftSeconds === 0 && view === "runner") {
          app.showToast("Time is up! Your challenge has been submitted.");
          finishChallenge();
        }
      }
    }, 1000);

    // Bind Back button
    container.querySelector("#runner-back-btn")?.addEventListener("click", () => {
      view = "details";
      render();
    });

    // Bind Radio Options
    container.querySelectorAll(".challenge-radio-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        userAnswers[qIndex] = idx;
        render();
      });
    });

    // Bind Previous button
    container.querySelector("#runner-prev-btn")?.addEventListener("click", () => {
      if (qIndex > 0) {
        qIndex--;
        render();
      }
    });

    // Bind Next / Submit button -> Transitions to Result Screen (Image 2 Screen 5)
    container.querySelector("#runner-next-btn")?.addEventListener("click", () => {
      if (userAnswers[qIndex] === undefined) {
        app.showToast("Please choose an answer to continue.");
        return;
      }
      if (!isLastQuestion) {
        qIndex++;
        render();
        return;
      }
      const firstUnanswered = questions.findIndex((_, i) => userAnswers[i] === undefined);
      if (firstUnanswered !== -1) {
        app.showToast("Please answer Question " + (firstUnanswered + 1) + " before submitting.");
        qIndex = firstUnanswered;
        render();
        return;
      }
      finishChallenge();
    });
  }

  // =========================================================================
  // VIEW 4: Challenge Result (Matches 2nd Image, Screen 5)
  // =========================================================================
  function renderResultView() {
    const resultCh = getCurrentChallenge();
    const R = lastChallengeResult || { correct: 8, total: 10, pct: 80, points: resultCh.points || 100, timeText: "02:30", answers: null };

    // Trigger celebratory confetti burst!
    triggerConfetti();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button -->
        <div style="max-width: 580px; margin: 0 auto 18px; display: flex; align-items: center; gap: 12px;">
          <button id="result-back-btn" class="btn-secondary" onclick="if (window.lmsBackToChallenges) window.lmsBackToChallenges();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0; font-size: 20px;">Challenge Result</h1>
        </div>

        <!-- Center Result Card (Celebratory Trophy + Score + 3 Stats) -->
        <div class="challenge-result-card">
          
          <!-- Top: Large 3D Golden Trophy with Confetti Sparks -->
          <div style="margin: 0 auto 12px; filter: drop-shadow(0 12px 24px rgba(245, 158, 11, 0.35)); transform: scale(1.15);">
            ${GRAPHICS.goldTrophy(92)}
          </div>

          <!-- Great Job! Heading -->
          <h2 style="font-size: 26px; font-weight: 900; color: ${R.pct < 50 ? '#F59E0B' : '#10B981'}; margin: 0 0 6px;">${R.pct >= 80 ? 'Great Job!' : R.pct >= 50 ? 'Good Effort!' : 'Keep Practicing!'}</h2>
          <div style="font-size: 14px; color: #64748B; font-weight: 600;">You Scored</div>

          <!-- Score Display -->
          <div class="challenge-score-display">${R.correct} / ${R.total}</div>

          <!-- 3 Stat Tiles (Accuracy, Points Earned, Time Taken) -->
          <div class="challenge-result-stats-row">
            
            <div class="challenge-result-stat-box">
              ${ICONS.target(24)}
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${R.pct}%</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Accuracy</span>
            </div>

            <div class="challenge-result-stat-box">
              ${ICONS.star(24)}
              <span style="font-size: 15px; font-weight: 800; color: #D97706;">+${R.points}</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Points Earned</span>
            </div>

            <div class="challenge-result-stat-box">
              ${ICONS.clock(24)}
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${R.timeText}</span>
              <span style="font-size: 11.5px; color: #64748B; font-weight: 600;">Time Taken</span>
            </div>

          </div>

          <!-- Bottom Action Buttons: View Answers & See Leaderboard → -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 14px;">
            <button id="view-answers-btn" class="btn-secondary" style="border-radius: 999px; padding: 12px 28px; font-weight: 700; font-size: 14px; cursor: pointer;">
              View Answers
            </button>

            <button id="see-leaderboard-btn" class="ongoing-continue-btn" onclick="if (window.lmsGoLeaderboard) window.lmsGoLeaderboard();" style="padding: 12px 32px; font-size: 14.5px; cursor: pointer;">
              See Leaderboard →
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind Back button
    container.querySelector("#result-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "completed";
      render();
    });

    // Bind View Answers button
    container.querySelector("#view-answers-btn")?.addEventListener("click", () => {
      const reviewQs = getChallengeQuestions();
      const given = (R.answers) || userAnswers;
      const rows = reviewQs.map((qq, i) => {
        const ans = given[i];
        const ok = ans === qq.correct;
        const yourText = ans === undefined ? "Not answered" : qq.options[ans];
        return `
          <div style="background: ${ok ? '#F0FDF4' : '#FEF2F2'}; border: 1.5px solid ${ok ? '#10B981' : '#F87171'}; border-radius: 14px; padding: 14px; margin-bottom: 12px;">
            <div style="font-weight: 700; font-size: 13.5px; color: ${ok ? '#065F46' : '#991B1B'};">Q${i + 1}. ${qq.text}</div>
            <div style="font-size: 13px; color: ${ok ? '#047857' : '#B91C1C'}; margin-top: 4px;"><strong>Your Answer:</strong> ${ok ? '✔' : '✘'} ${yourText} ${ok ? '(Correct)' : ''}</div>
            ${ok ? '' : `<div style="font-size: 13px; color: #047857; margin-top: 2px;"><strong>Correct Answer:</strong> ${qq.options[qq.correct]}</div>`}
            <div style="font-size: 12px; color: #475569; margin-top: 6px;">${qq.explanation || ''}</div>
          </div>
        `;
      }).join('');
      app.showModal(`
        <div style="padding: 8px; max-height: 70vh; overflow-y: auto;">
          <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 14px;">Answer Review – ${resultCh.title}</h3>
          ${rows}
          <button class="btn-primary" style="width: 100%; border-radius: 999px; padding: 10px 0; font-weight: 700; margin-top: 10px;" onclick="window.closeLmsModal()">
            Done
          </button>
        </div>
      `);
    });

    // Bind See Leaderboard button -> Transitions to Leaderboard View (Image 2 Screen 6)
    container.querySelector("#see-leaderboard-btn")?.addEventListener("click", () => {
      view = "leaderboard";
      render();
    });
  }

  // =========================================================================
  // VIEW 5: Leaderboard (Matches 2nd Image, Screen 6)
  // =========================================================================
  function renderLeaderboardView() {
    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Challenge Title -->
        <div style="max-width: 680px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: space-between;">
          <button id="leaderboard-back-btn" onclick="if (window.lmsBackToChallenges) window.lmsBackToChallenges();" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
            ← ${activeChallenge.title}
          </button>

          <!-- Tab Pills: Leaderboard | My Rank -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow active" style="padding: 6px 18px;">Leaderboard</button>
            <button class="tab-pill-btn-flow" style="padding: 6px 18px;" onclick="window.appInstance.showToast('You are currently Rank 2 with 9/10 score!');">My Rank</button>
          </div>
        </div>

        <div class="leaderboard-stage">
          
          <!-- Top 3 Podium Row -->
          <div class="leaderboard-podium-row">
            
            <!-- Rank 2: Sowmiya S. (Left) -->
            <div class="podium-slot">
              <div class="podium-badge-number badge-rank-2">2</div>
              <img src="assets/student-avatar.jpg" alt="Sowmiya" class="podium-avatar" />
              <div style="font-size: 14.5px; font-weight: 800; color: #1E293B;">Sowmiya S.</div>
              <div style="font-size: 13px; font-weight: 800; color: #7C3AED; margin-top: 2px;">9 / 10</div>
            </div>

            <!-- Rank 1: Karthik R. (Center, Elevated with Crown) -->
            <div class="podium-slot podium-slot-1">
              <div class="podium-crown">${GRAPHICS.goldenCrown(30)}</div>
              <div class="podium-badge-number badge-rank-1">1</div>
              <div style="width: 62px; height: 62px; border-radius: 50%; background: linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; color: #78350F; border: 3px solid #FFFFFF; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3); margin-bottom: 8px;">
                KR
              </div>
              <div style="font-size: 15.5px; font-weight: 900; color: #1E293B;">Karthik R.</div>
              <div style="font-size: 14px; font-weight: 900; color: #D97706; margin-top: 2px;">10 / 10</div>
            </div>

            <!-- Rank 3: Iniya M. (Right) -->
            <div class="podium-slot">
              <div class="podium-badge-number badge-rank-3">3</div>
              <div style="width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #FBCFE8 0%, #EC4899 100%); display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 900; color: #831843; border: 2.5px solid #FFFFFF; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); margin-bottom: 8px;">
                IM
              </div>
              <div style="font-size: 14.5px; font-weight: 800; color: #1E293B;">Iniya M.</div>
              <div style="font-size: 13px; font-weight: 800; color: #7C3AED; margin-top: 2px;">8 / 10</div>
            </div>

          </div>

          <!-- Runner-up Table (Ranks 4 and 5) -->
          <div class="leaderboard-runners-list">
            
            <div class="leaderboard-runner-row">
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="font-size: 14px; font-weight: 800; color: #64748B; width: 18px;">4</span>
                <span style="font-size: 14.5px; font-weight: 700; color: #1E293B;">Pranav K.</span>
              </div>
              <span style="font-size: 14px; font-weight: 800; color: #1E293B;">8 / 10</span>
            </div>

            <div class="leaderboard-runner-row">
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="font-size: 14px; font-weight: 800; color: #64748B; width: 18px;">5</span>
                <span style="font-size: 14.5px; font-weight: 700; color: #1E293B;">Harini J.</span>
              </div>
              <span style="font-size: 14px; font-weight: 800; color: #1E293B;">7 / 10</span>
            </div>

          </div>

          <!-- Bottom Action: Return to Challenges in Completed Tab -->
          <div style="text-align: center; margin-top: 28px;">
            <button id="leaderboard-finish-btn" class="start-challenge-main-btn" onclick="if (window.lmsBackToChallenges) window.lmsBackToChallenges();" style="padding: 12px 36px; font-size: 15px; cursor: pointer;">
              Back to Challenges →
            </button>
          </div>

        </div>

      </div>
    `;

    // Bind Back / Finish buttons -> Goes back to list view with Completed tab active!
    container.querySelector("#leaderboard-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "completed";
      render();
    });

    container.querySelector("#leaderboard-finish-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "completed";
      render();
    });
  }

  function getLightBg(subjectId) {
    switch (subjectId) {
      case "science": return "#E0F2FE";
      case "maths": return "#FEF3C7";
      case "social": return "#DCFCE7";
      case "english": return "#FCE7F3";
      case "tamil": return "#F3E8FF";
      default: return "#F1F5F9";
    }
  }

  // Initial render
  render();
}

// ===== Module: js/screens/assignments.js =====
// Screen 08: Assignments - Complete Flow Matching User Reference Images
// Flow:
// 1. Dashboard -> Click Assignments (Screen 1)
// 2. Assignments List -> All / Pending / Submitted / Graded (Screen 2)
// 3. Assignment Details -> Due Date, Questions, Marks, Instructions, 3D Clipboard & Pencil (Screen 3)
// 4. Do Assignment -> Timer 29:45, Q3 Diagram Labeling A, B, C with 3D Cell Model (Screen 4)
// 5. Submit Confirmation Modal -> Document Icon with Green Check Badge, Review/Submit (Screen 5)
// 6. Submission Success -> Big Glowing Green Check Badge, Confetti, View Submission / Back to Assignments (Screen 6)
// 7. Graded Assignment -> Golden Trophy, 8/10 Score, Correct: 8, Wrong: 2, Accuracy: 80%, View Feedback (Screen 7)
function renderAssignmentsScreen(container, state, app) {
  let view = state.assignmentsCurrentView || "list"; // "list", "details", "do_assignment", "success", "graded"
  let activeTab = state.assignmentsActiveTab || "all"; // "all", "pending", "submitted", "graded"
  let activeAsg = state.selectedAssignment || null;
  let timerInterval = null;
  let timeLeftSeconds = 29 * 60 + 45; // 29:45 countdown matching Screen 4
  let showSubmitModal = false;
  let answerInputs = { A: "Nucleus", B: "Cell Wall", C: "Cytoplasm" };

  // Complete Assignments Catalog matching Screen 2 & Screen 7
  const assignmentsCatalog = [
    {
      id: "asg-sci-cell",
      title: "The Cell – Worksheet",
      subject: "Science",
      chapter: "Science • Chapter 2",
      subjectId: "science",
      status: "pending", // "pending", "submitted", "graded"
      dueDate: "20 Nov, 11:59 PM",
      dueMeta: "📅 Due: 20 Nov, 11:59 PM",
      questionsCount: 10,
      totalMarks: 10,
      instructions: [
        "Answer all the questions.",
        "You can upload a single file (PDF / Image / Doc).",
        "File size should be less than 10 MB."
      ],
      question3: {
        num: 3,
        title: "Q3. Labell the parts of a cell in the given diagram.",
        inputs: [
          { label: "A.", defaultVal: "Nucleus" },
          { label: "B.", defaultVal: "Cell Wall" },
          { label: "C.", defaultVal: "Cytoplasm" }
        ]
      },
      gradedInfo: {
        score: "8 / 10",
        correct: 8,
        wrong: 2,
        accuracy: "80%",
        feedback: "Great labeling accuracy! Pay special attention to distinguishing the rigid outer cell wall from the plasma membrane."
      }
    },
    {
      id: "asg-math-fractions",
      title: "Fractions – Practice",
      subject: "Mathematics",
      chapter: "Mathematics • Chapter 3",
      subjectId: "maths",
      status: "pending",
      dueDate: "21 Nov, 11:59 PM",
      dueMeta: "📅 Due: 21 Nov, 11:59 PM",
      questionsCount: 12,
      totalMarks: 15,
      instructions: [
        "Show step-by-step working for fraction additions and reductions.",
        "Simplify all answers to their lowest terms.",
        "Upload handwritten working sheet or type answers directly."
      ],
      question3: {
        num: 3,
        title: "Q3. Calculate the sum: 3/4 + 2/3 - 1/6",
        inputs: [
          { label: "A.", defaultVal: "LCM = 12" },
          { label: "B.", defaultVal: "9/12 + 8/12 - 2/12" },
          { label: "C.", defaultVal: "15/12 = 5/4" }
        ]
      },
      gradedInfo: {
        score: "12 / 15",
        correct: 10,
        wrong: 2,
        accuracy: "83%",
        feedback: "Excellent calculation steps! Remember to convert improper fractions to mixed numbers where requested."
      }
    },
    {
      id: "asg-soc-notes",
      title: "Our Environment – Short Notes",
      subject: "Social Science",
      chapter: "Social Science • Chapter 1",
      subjectId: "social",
      status: "submitted",
      dueDate: "18 Nov, 11:59 PM",
      dueMeta: "⏱ Submitted: 18 Nov",
      questionsCount: 5,
      totalMarks: 10,
      instructions: [
        "Summarize the layers of atmosphere and lithosphere components.",
        "Include examples of biotic and abiotic components."
      ],
      question3: {
        num: 3,
        title: "Q3. List 3 differences between biotic and abiotic components.",
        inputs: [
          { label: "A.", defaultVal: "Living vs Non-living" },
          { label: "B.", defaultVal: "Plants & Animals vs Soil & Water" },
          { label: "C.", defaultVal: "Depend on each other for balance" }
        ]
      },
      gradedInfo: {
        score: "Under Review",
        correct: 0,
        wrong: 0,
        accuracy: "In Review",
        feedback: "Submitted on 18 Nov. Evaluation by teacher is in progress."
      }
    },
    {
      id: "asg-eng-tenses",
      title: "Tenses – Exercise",
      subject: "English",
      chapter: "English • Chapter 4",
      subjectId: "english",
      status: "graded",
      dueDate: "15 Nov, 11:59 PM",
      dueMeta: "8 / 10",
      questionsCount: 10,
      totalMarks: 10,
      instructions: [
        "Identify correct tenses and complete grammatical transformations."
      ],
      question3: {
        num: 3,
        title: "Q3. Convert sentence into Past Perfect Continuous Tense.",
        inputs: [
          { label: "A.", defaultVal: "She had been reading for two hours." },
          { label: "B.", defaultVal: "They had been playing since morning." },
          { label: "C.", defaultVal: "I had been studying before the bell rang." }
        ]
      },
      gradedInfo: {
        score: "8 / 10",
        correct: 8,
        wrong: 2,
        accuracy: "80%",
        feedback: "Strong grasp of past perfect tense. Practice conditional sentences and irregular verbs."
      }
    }
  ];

  if (!activeAsg) {
    activeAsg = assignmentsCatalog[0];
  }

  // Handle deep-link from Dashboard if student clicked an assignment card
  if (state.activeAssignmentId) {
    const id = state.activeAssignmentId;
    delete state.activeAssignmentId;
    const match = assignmentsCatalog.find(a => a.id === id);
    if (match) {
      activeAsg = match;
      view = match.status === "graded" ? "graded" : "details";
    }
  }

  function formatTimer(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Global window helpers for foolproof navigation across all views
  window.lmsOpenAssignment = function(id) {
    const match = assignmentsCatalog.find(a => a.id === id) || assignmentsCatalog[0];
    activeAsg = match;
    state.selectedAssignment = match;
    if (match.status === "graded") {
      view = "graded";
    } else if (match.status === "submitted") {
      view = "success";
    } else {
      view = "details";
    }
    render();
  };

  window.lmsStartAssignment = function() {
    timeLeftSeconds = 29 * 60 + 45;
    showSubmitModal = false;
    view = "do_assignment";
    render();
  };

  window.lmsAssignmentOpenSubmitModal = function() {
    showSubmitModal = true;
    render();
  };

  window.lmsAssignmentCloseSubmitModal = function() {
    showSubmitModal = false;
    render();
  };

  window.lmsAssignmentConfirmSubmit = function() {
    showSubmitModal = false;
    if (activeAsg) {
      activeAsg.status = "submitted";
      activeAsg.dueMeta = "⏱ Submitted: Today";
    }
    state.student.points += 50;
    app.updateHeaderStats();
    view = "success";
    render();
  };

  window.lmsAssignmentBackToList = function() {
    showSubmitModal = false;
    view = "list";
    render();
  };

  window.lmsAssignmentBackToDetails = function() {
    showSubmitModal = false;
    view = "details";
    render();
  };

  window.lmsAssignmentViewGraded = function(id) {
    const match = assignmentsCatalog.find(a => a.id === id) || assignmentsCatalog[0];
    activeAsg = match;
    state.selectedAssignment = match;
    view = "graded";
    render();
  };

  window.lmsAssignmentViewSubmission = function() {
    const q = activeAsg || assignmentsCatalog[0];
    app.showModal(`
      <div style="padding: 10px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">${ICONS.document(24)} Submission Details</h3>
        <p style="font-size: 13px; color: #64748B; margin-bottom: 16px;">${q.title} • ${q.chapter}</p>
        
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 14px; margin-bottom: 14px; font-size: 13px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <strong style="color: #1E293B;">Submission Status:</strong>
            <span class="assignment-status-pill asg-status-submitted">Submitted</span>
          </div>
          <div style="margin-bottom: 6px;"><strong>Submitted File:</strong> <code>The_Cell_Worksheet_Class7.pdf</code> (1.8 MB)</div>
          <div><strong>Turned in on:</strong> Today at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>

        <button class="btn-primary" style="width: 100%; border-radius: 999px; padding: 10px 0; font-weight: 700;" onclick="window.closeLmsModal()">
          Close
        </button>
      </div>
    `);
  };

  function render() {
    try {
      state.assignmentsCurrentView = view;
      state.assignmentsActiveTab = activeTab;

      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      if (view === "list") {
        renderListView();
      } else if (view === "details") {
        renderDetailsView();
      } else if (view === "do_assignment") {
        renderDoAssignmentView();
      } else if (view === "success") {
        renderSuccessView();
      } else if (view === "graded") {
        renderGradedView();
      }
    } catch (err) {
      console.error("Error rendering assignment view:", err);
    }
  }

  // =========================================================================
  // VIEW 1: Assignments List (Matches Image Screen 2)
  // =========================================================================
  function renderListView() {
    let displayedList = assignmentsCatalog;
    if (activeTab === "pending") {
      displayedList = assignmentsCatalog.filter(a => a.status === "pending");
    } else if (activeTab === "submitted") {
      displayedList = assignmentsCatalog.filter(a => a.status === "submitted");
    } else if (activeTab === "graded") {
      displayedList = assignmentsCatalog.filter(a => a.status === "graded");
    }

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Title + Segmented Pill Tabs (All, Pending, Submitted, Graded) -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">Assignments</h1>
          </div>

          <!-- Segmented Pill Tabs -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow ${activeTab === 'all' ? 'active' : ''}" data-tab="all">All</button>
            <button class="tab-pill-btn-flow ${activeTab === 'pending' ? 'active' : ''}" data-tab="pending">Pending</button>
            <button class="tab-pill-btn-flow ${activeTab === 'submitted' ? 'active' : ''}" data-tab="submitted">Submitted</button>
            <button class="tab-pill-btn-flow ${activeTab === 'graded' ? 'active' : ''}" data-tab="graded">Graded</button>
          </div>
        </div>

        <!-- Assignments List Rows Container -->
        <div style="max-width: 860px; margin: 20px auto 0;">
          <div class="ongoing-chapters-list" style="gap: 16px;">
            ${displayedList.map(asg => renderAssignmentRow(asg)).join('')}
          </div>
        </div>

      </div>
    `;

    // Bind tab pill clicks
    container.querySelectorAll(".tab-pill-btn-flow").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        render();
      });
    });

    // Bind row and button clicks
    container.querySelectorAll(".asg-action-btn, .asg-row-item").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-asg-id");
        if (id && window.lmsOpenAssignment) {
          window.lmsOpenAssignment(id);
        }
      });
    });
  }

  // Row Renderer for Screen 2
  function renderAssignmentRow(asg) {
    const isPending = asg.status === "pending";
    const isSubmitted = asg.status === "submitted";
    const isGraded = asg.status === "graded";

    return `
      <div class="ongoing-chapter-row asg-row-item" data-asg-id="${asg.id}" onclick="if (window.lmsOpenAssignment) window.lmsOpenAssignment('${asg.id}');" style="cursor: pointer;">
        
        <!-- Left: Document Icon in Rounded Purple Box + Title + Subtitle -->
        <div class="ongoing-left-meta" style="min-width: 320px;">
          <div class="ongoing-icon-box lu-plain-icon-box">
            ${GRAPHICS.subjectBadgeIcon(asg.subjectId, 38)}
          </div>
          <div class="ongoing-text-wrap">
            <h3 style="font-size: 15.5px; font-weight: 800; color: #1E293B; margin: 0;">${asg.title}</h3>
            <div style="font-size: 13px; color: #64748B; font-weight: 500; margin-top: 3px;">
              ${asg.chapter}
            </div>
          </div>
        </div>

        <!-- Center: Status Badge & Due/Score Meta -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 180px;">
          ${isPending ? `
            <span class="assignment-status-pill asg-status-pending">Pending</span>
            <span style="font-size: 12px; color: #64748B; font-weight: 600;">${ICONS.withIcons(asg.dueMeta, 14)}</span>
          ` : isSubmitted ? `
            <span class="assignment-status-pill asg-status-submitted">Submitted</span>
            <span style="font-size: 12px; color: #64748B; font-weight: 600;">${ICONS.withIcons(asg.dueMeta, 14)}</span>
          ` : `
            <span class="assignment-status-pill asg-status-graded">Graded</span>
            <span style="font-size: 13px; color: #1E293B; font-weight: 800;">${ICONS.withIcons(asg.dueMeta, 14)}</span>
          `}
        </div>

        <!-- Right: Action Button (Open → or View) -->
        <div>
          <button type="button" class="ongoing-continue-btn asg-action-btn" data-asg-id="${asg.id}" onclick="event.stopPropagation(); if (window.lmsOpenAssignment) window.lmsOpenAssignment('${asg.id}');" style="padding: 8px 24px; cursor: pointer;">
            ${isPending ? 'Open →' : 'View'}
          </button>
        </div>

      </div>
    `;
  }

  // =========================================================================
  // VIEW 2: Assignment Details (Matches Image Screen 3)
  // =========================================================================
  function renderDetailsView() {
    const asg = activeAsg || assignmentsCatalog[0];

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button and Assignment Details Title -->
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 22px;">
          <button id="asg-details-back-btn" class="btn-secondary" onclick="if (window.lmsAssignmentBackToList) window.lmsAssignmentBackToList();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
            ← Back
          </button>
          <h1 class="my-learning-heading" style="margin: 0;">Assignment Details</h1>
        </div>

        <!-- Main Hero Card -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-details-hero-card">
            
            <!-- Top Row: Icon + Title/Chapter + Status Badge -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <div class="ongoing-icon-box lu-plain-icon-box" style="width: 56px; height: 56px;">
                  ${GRAPHICS.subjectBadgeIcon(asg.subjectId, 52)}
                </div>
                <div>
                  <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 4px;">${asg.title}</h2>
                  <p style="font-size: 14px; color: #64748B; margin: 0; font-weight: 600;">${asg.chapter}</p>
                </div>
              </div>

              <!-- Top Right Pending Badge -->
              <div>
                <span class="assignment-status-pill asg-status-pending" style="font-size: 13px; padding: 6px 16px;">
                  Pending
                </span>
              </div>
            </div>

            <!-- 3-Stat Metric Strip: Due Date, Total Questions, Total Marks -->
            <div class="challenge-metric-strip" style="grid-template-columns: repeat(3, 1fr);">
              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #F5F3FF; color: #7C3AED;">
                  ${(ICONS.calendar || ICONS.clock)(28)}
                </div>
                <div>
                  <div style="font-size: 11.5px; color: #64748B; font-weight: 600;">Due Date</div>
                  <div style="font-size: 15px; font-weight: 800; color: #1E293B;">${asg.dueDate}</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #EFF6FF; color: #2563EB;">
                  ${(ICONS.document || ICONS.assignment)(28)}
                </div>
                <div>
                  <div style="font-size: 11.5px; color: #64748B; font-weight: 600;">Total Questions</div>
                  <div style="font-size: 15px; font-weight: 800; color: #1E293B;">${asg.questionsCount}</div>
                </div>
              </div>

              <div class="challenge-metric-item">
                <div class="challenge-metric-icon-box" style="background: #FFFBEB; color: #D97706;">
                  ${ICONS.star(28)}
                </div>
                <div>
                  <div style="font-size: 11.5px; color: #64748B; font-weight: 600;">Total Marks</div>
                  <div style="font-size: 15px; font-weight: 800; color: #1E293B;">${asg.totalMarks}</div>
                </div>
              </div>
            </div>

            <!-- Two-Column Section: Instructions Checklist on Left | 3D Clipboard & Pencil on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 32px; padding: 0 8px;">
              
              <!-- Left: Instructions Checklist -->
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                  <span style="color: #3B82F6; font-size: 18px;">ℹ</span>
                  <h3 style="font-size: 16.5px; font-weight: 800; color: #1E293B; margin: 0;">Instructions</h3>
                </div>
                
                <div>
                  ${asg.instructions.map(inst => `
                    <div class="challenge-topic-item">
                      <div class="challenge-check-icon lu-plain-icon-box">${GRAPHICS.checkDoneIcon(22)}</div>
                      <span style="font-size: 14px; font-weight: 600; color: #334155;">${inst}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Right: 3D Clipboard Illustration -->
              <div style="width: 200px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 160px; height: 160px; background: radial-gradient(circle, #EDE9FE 0%, rgba(237, 233, 254, 0) 70%); filter: blur(10px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.92);">
                  ${GRAPHICS.clipboardWithPencil(170)}
                </div>
              </div>

            </div>

            <!-- Bottom Action: Start Assignment Button -->
            <div style="text-align: center;">
              <button id="start-asg-btn" class="start-challenge-main-btn" onclick="if (window.lmsStartAssignment) window.lmsStartAssignment();" style="cursor: pointer;">
                Start Assignment →
              </button>
            </div>

          </div>
        </div>

      </div>
    `;

    container.querySelector("#asg-details-back-btn")?.addEventListener("click", () => {
      view = "list";
      render();
    });

    container.querySelector("#start-asg-btn")?.addEventListener("click", () => {
      window.lmsStartAssignment();
    });
  }

  // =========================================================================
  // VIEW 3: Do Assignment - Answer Questions (Matches Image Screen 4)
  // =========================================================================
  function renderDoAssignmentView() {
    const asg = activeAsg || assignmentsCatalog[0];
    const q3 = asg.question3 || {
      num: 3,
      title: "Q3. Labell the parts of a cell in the given diagram.",
      inputs: [
        { label: "A.", defaultVal: "Nucleus" },
        { label: "B.", defaultVal: "Cell Wall" },
        { label: "C.", defaultVal: "Cytoplasm" }
      ]
    };

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Back Title + Countdown Timer Pill (29:45) -->
        <div style="max-width: 860px; margin: 0 auto 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            
            <button id="do-asg-back-btn" onclick="if (window.lmsAssignmentBackToDetails) window.lmsAssignmentBackToDetails();" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              ← ${asg.title}
            </button>

            <!-- Countdown Timer matching image 29:45 -->
            <div id="asg-timer-pill" style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1.5px solid #FEE2E2; padding: 6px 16px; border-radius: 999px; font-size: 14px; font-weight: 800; color: #DC2626; box-shadow: 0 2px 8px rgba(239, 68, 68, 0.1);">
              ${ICONS.clock(18)} <span id="asg-timer-display">${formatTimer(timeLeftSeconds)}</span>
            </div>

          </div>
        </div>

        <!-- Question Card -->
        <div style="max-width: 860px; margin: 0 auto;">
          <div class="challenge-runner-card">
            
            <!-- Question Title -->
            <h2 style="font-size: 17px; font-weight: 800; color: #0F172A; line-height: 1.5; margin: 0 0 24px;">
              ${q3.title}
            </h2>

            <!-- Main Layout: 3D Diagram on Left | Inputs A, B, C on Right -->
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 28px;">
              
              <!-- Left: 3D Biological Cell Cutaway Diagram -->
              <div style="width: 280px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; width: 220px; height: 180px; background: radial-gradient(circle, #F3E8FF 0%, rgba(243, 232, 255, 0) 70%); filter: blur(8px);"></div>
                <div style="position: relative; z-index: 2; transform: scale(0.95); filter: drop-shadow(0 10px 24px rgba(124, 58, 237, 0.2));">
                  ${GRAPHICS.cell3D(280, 210, "nucleus")}
                </div>
              </div>

              <!-- Right: Label Input Rows A, B, C -->
              <div style="flex: 1; display: flex; flex-direction: column; gap: 14px;">
                ${q3.inputs.map(item => `
                  <div class="asg-label-input-row">
                    <span class="asg-label-tag">${item.label}</span>
                    <input type="text" class="asg-text-input" data-label="${item.label}" value="${answerInputs[item.label.replace('.', '')] || item.defaultVal}" placeholder="Enter part name..." />
                  </div>
                `).join('')}

                <!-- File Attachment Box -->
                <div style="margin-top: 8px; padding: 12px 16px; background: #F8FAFC; border: 1.5px dashed #CBD5E1; border-radius: 14px; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="window.appInstance.showToast('📄 Worksheet scan attached: The_Cell_Diagram.pdf');">
                  ${ICONS.document(24)}
                  <div style="font-size: 12.5px; color: #64748B;">
                    <strong style="color: #7C3AED;">Attach handwritten file</strong> (Optional: PDF, PNG up to 10 MB)
                  </div>
                </div>
              </div>

            </div>

            <!-- Bottom Button Bar: Previous & Next → -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1.5px solid #F1F5F9;">
              <button id="do-asg-prev-btn" class="btn-secondary" style="border-radius: 999px; padding: 10px 24px; font-weight: 700;">
                ‹ Previous
              </button>

              <button id="do-asg-next-btn" class="ongoing-continue-btn" onclick="if (window.lmsAssignmentOpenSubmitModal) window.lmsAssignmentOpenSubmitModal();" style="padding: 10px 34px; font-size: 14.5px; cursor: pointer;">
                Next →
              </button>
            </div>

          </div>
        </div>

        <!-- Submit Confirmation Modal (Screen 5) -->
        ${showSubmitModal ? renderSubmitModal() : ''}

      </div>
    `;

    // Start Timer
    timerInterval = setInterval(() => {
      if (timeLeftSeconds > 0) {
        timeLeftSeconds--;
        const el = document.getElementById("asg-timer-display");
        if (el) el.innerText = formatTimer(timeLeftSeconds);
      }
    }, 1000);

    // Save inputs on change
    container.querySelectorAll(".asg-text-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const key = input.getAttribute("data-label").replace('.', '');
        answerInputs[key] = e.target.value;
      });
    });

    container.querySelector("#do-asg-prev-btn")?.addEventListener("click", () => {
      view = "details";
      render();
    });

    container.querySelector("#do-asg-next-btn")?.addEventListener("click", () => {
      showSubmitModal = true;
      render();
    });
  }

  // =========================================================================
  // VIEW 4: Submit Confirmation Modal (Matches Image Screen 5)
  // =========================================================================
  function renderSubmitModal() {
    return `
      <div class="quiz-modal-backdrop" id="asg-modal-overlay">
        <div class="quiz-modal-card">
          
          <!-- Top Right Close Button -->
          <button class="quiz-modal-close-btn" onclick="if (window.lmsAssignmentCloseSubmitModal) window.lmsAssignmentCloseSubmitModal();">✕</button>

          <!-- Center Document Graphic with Green Check Badge -->
          <div style="margin: 0 auto 16px;">
            ${GRAPHICS.quizSubmitDocIcon(72)}
          </div>

          <!-- Title & Subtitle -->
          <h2 style="font-size: 22px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">Submit Assignment?</h2>
          <p style="font-size: 14px; color: #64748B; margin: 0 0 20px; font-weight: 600;">You have answered 10 of 10 questions.</p>

          <!-- Action Buttons: Review Answers & Submit -->
          <div class="quiz-modal-btns">
            <button class="btn-secondary" onclick="if (window.lmsAssignmentCloseSubmitModal) window.lmsAssignmentCloseSubmitModal();" style="border-radius: 999px; padding: 11px 24px; font-weight: 700; font-size: 14px; cursor: pointer;">
              Review Answers
            </button>

            <button class="ongoing-continue-btn" onclick="if (window.lmsAssignmentConfirmSubmit) window.lmsAssignmentConfirmSubmit();" style="border-radius: 999px; padding: 11px 32px; font-size: 14.5px; cursor: pointer;">
              Submit
            </button>
          </div>

        </div>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 5: Submission Success - Confirmation (Matches Image Screen 6)
  // =========================================================================
  function renderSuccessView() {
    const asg = activeAsg || assignmentsCatalog[0];

    // Trigger celebratory confetti
    triggerConfetti();

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header with Back Button -->
        <div style="max-width: 540px; margin: 0 auto 18px; display: flex; align-items: center; gap: 12px;">
          <button id="asg-success-back-btn" class="btn-secondary" onclick="if (window.lmsAssignmentBackToList) window.lmsAssignmentBackToList();" style="border-radius: 999px; padding: 7px 18px; font-weight: 700; cursor: pointer;">
            ← Assignments
          </button>
        </div>

        <!-- Success Confirmation Card -->
        <div class="assignment-success-card">
          
          <!-- Big Glowing Green Checkmark Circle -->
          <div style="margin: 0 auto 16px;">
            ${GRAPHICS.successCheckBadge(96)}
          </div>

          <!-- Main Heading & Subtitle -->
          <h2 style="font-size: 24px; font-weight: 900; color: #047857; margin: 0 0 6px;">Assignment Submitted!</h2>
          <p style="font-size: 14px; color: #64748B; margin: 0; font-weight: 600;">Your assignment has been successfully submitted.</p>

          <!-- Assignment Summary Pill Box -->
          <div>
            <div class="asg-summary-pill-box">
              <div style="color: #7C3AED; font-size: 22px;">
                ${(ICONS.document || ICONS.assignment)(22)}
              </div>
              <div>
                <h4 style="font-size: 14.5px; font-weight: 800; color: #1E293B; margin: 0;">${asg.title}</h4>
                <div style="font-size: 12px; color: #64748B; font-weight: 600;">${asg.chapter}</div>
              </div>
            </div>
          </div>

          <!-- Action Buttons: View Submission & Back to Assignments -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 14px;">
            <button id="asg-view-sub-btn" class="btn-secondary" onclick="if (window.lmsAssignmentViewSubmission) window.lmsAssignmentViewSubmission();" style="border-radius: 999px; padding: 11px 24px; font-weight: 700; font-size: 14px; cursor: pointer;">
              View Submission
            </button>

            <button id="asg-back-home-btn" class="ongoing-continue-btn" onclick="if (window.lmsAssignmentBackToList) window.lmsAssignmentBackToList();" style="border-radius: 999px; padding: 11px 28px; font-size: 14px; cursor: pointer;">
              Back to Assignments
            </button>
          </div>

        </div>

      </div>
    `;

    container.querySelector("#asg-success-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "submitted";
      render();
    });

    container.querySelector("#asg-back-home-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "submitted";
      render();
    });
  }

  // =========================================================================
  // VIEW 6: Graded Assignment - View Score & Feedback (Matches Image Screen 7)
  // =========================================================================
  function renderGradedView() {
    const asg = activeAsg || assignmentsCatalog[0];
    const graded = asg.gradedInfo || {
      score: "8 / 10",
      correct: 8,
      wrong: 2,
      accuracy: "80%",
      feedback: "Great labeling accuracy! Pay special attention to distinguishing the rigid outer cell wall from the plasma membrane."
    };

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Back Button + Assignment Title + Graded Pill -->
        <div style="max-width: 620px; margin: 0 auto 18px; display: flex; align-items: center; justify-content: space-between;">
          <button id="asg-graded-back-btn" onclick="if (window.lmsAssignmentBackToList) window.lmsAssignmentBackToList();" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
            ← ${asg.title}
          </button>

          <span class="assignment-status-pill asg-status-graded" style="font-size: 13px; padding: 6px 16px;">
            Graded
          </span>
        </div>

        <!-- Celebratory Graded Card -->
        <div class="assignment-graded-card">
          
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 32px; margin-bottom: 28px;">
            
            <!-- Left: Golden Trophy + Large Score Box -->
            <div style="display: flex; flex-direction: column; align-items: center; width: 220px;">
              <div style="margin-bottom: 8px; filter: drop-shadow(0 8px 16px rgba(245, 158, 11, 0.3));">
                ${GRAPHICS.goldTrophy(76)}
              </div>
              <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 18px; padding: 12px 28px; text-align: center; width: 100%;">
                <div style="font-size: 26px; font-weight: 900; color: #1E293B; line-height: 1.1;">${graded.score}</div>
                <div style="font-size: 12px; color: #64748B; font-weight: 700; margin-top: 2px;">Score</div>
              </div>
            </div>

            <!-- Right: Breakdown Metrics (Correct, Wrong, Accuracy) -->
            <div style="flex: 1; padding-left: 10px;">
              
              <div class="asg-graded-meta-item">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: #ECFDF5; color: #059669; display: flex; align-items: center; justify-content: center; font-size: 14px;">✔</div>
                <span style="color: #64748B;">Correct Answers :</span>
                <strong style="color: #059669;">${graded.correct}</strong>
              </div>

              <div class="asg-graded-meta-item">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: #FEE2E2; color: #DC2626; display: flex; align-items: center; justify-content: center; font-size: 14px;">✖</div>
                <span style="color: #64748B;">Wrong Answers :</span>
                <strong style="color: #DC2626;">${graded.wrong}</strong>
              </div>

              <div class="asg-graded-meta-item">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center; font-size: 13px;">⏱</div>
                <span style="color: #64748B;">Accuracy :</span>
                <strong style="color: #1E293B;">${graded.accuracy}</strong>
              </div>

            </div>

          </div>

          <!-- Bottom Action: View Answers & Feedback Button -->
          <div style="text-align: center;">
            <button id="asg-view-feedback-btn" class="start-challenge-main-btn" style="padding: 12px 36px; font-size: 14.5px; cursor: pointer;">
              View Answers & Feedback →
            </button>
          </div>

        </div>

      </div>
    `;

    container.querySelector("#asg-graded-back-btn")?.addEventListener("click", () => {
      view = "list";
      activeTab = "graded";
      render();
    });

    container.querySelector("#asg-view-feedback-btn")?.addEventListener("click", () => {
      app.showModal(`
        <div style="padding: 10px;">
          <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">Evaluation Feedback</h3>
          <p style="font-size: 13px; color: #64748B; margin-bottom: 16px;">${asg.title} • Teacher Remarks</p>
          
          <div style="background: #F0FDF4; border: 1.5px solid #10B981; border-radius: 12px; padding: 14px; margin-bottom: 14px; font-size: 13px; color: #065F46;">
            <strong>Teacher Remark:</strong>
            <p style="margin: 6px 0 0; line-height: 1.5;">${graded.feedback}</p>
          </div>

          <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 12px; font-size: 13px; color: #334155;">
            <strong>Itemized Marks Breakdown:</strong>
            <ul style="margin: 6px 0 0 18px; line-height: 1.5;">
              <li>Q1 - Q2: Structure definitions (2/2)</li>
              <li>Q3: Cell organelle diagram labeling (3/3)</li>
              <li>Q4: Photosynthesis explanation (2/2)</li>
              <li>Q5: Osmosis and diffusion comparison (1/3)</li>
            </ul>
          </div>

          <button class="btn-primary" style="width: 100%; border-radius: 999px; padding: 10px 0; font-weight: 700; margin-top: 14px;" onclick="window.closeLmsModal()">
            Done
          </button>
        </div>
      `);
    });
  }

  // Initial render
  render();
}

// ===== Module: js/screens/progress.js =====
// Screen 09: Progress - Complete Flow Matching User Reference Images
// Flow:
// 1. Dashboard -> Click Progress (Screen 1)
// 2. Progress Overview -> Overall Progress (72%), Completed 28/40, In Progress 8, Not Started 4, Subject Progress List (Screen 2)
// 3. Subject-wise Progress -> Dropdown Selector (Science Progress), 78% Completed, Chapter Status List with 100%, 60%, 0% (Screen 3)
// 4. Chapter Progress Detail -> Science > Chapter 3: Heat (60%), Lesson-wise Checklist (Video, Notes, Quiz, Assignment, Test) (Screen 4)
// 5. Progress Reports -> Performance Summary with Vertical 5-Subject Bar Chart (78%, 66%, 60%, 82%, 70%) (Screen 5)
// 6. Detailed Report -> Summary Table (Science, Maths, Social, English, Tamil) + Export PDF (Screen 6)
function renderProgressScreen(container, state, app) {
  let activeTab = state.progressActiveTab || "overview"; // "overview", "subject-wise", "chapters", "reports"
  let selectedSubjectId = state.progressSelectedSubjectId || "science";
  let selectedChapterId = state.progressSelectedChapterId || "heat";
  let reportsSubTab = state.progressReportsSubTab || "summary"; // "summary", "chapter-wise", "activity"
  let timeFilter = "this-month"; // "this-month", "term-1", "all-time"

  // Comprehensive Subject Data matching Screen 2, 3, 5, 6
  const subjectsData = {
    science: {
      id: "science",
      title: "Science",
      progress: 78,
      completedChapters: 9,
      inProgressChapters: 2,
      notStartedChapters: 1,
      totalChapters: 12,
      barColor: "#0284C7",
      lightBg: "#E0F2FE",
      iconType: "flask",
      statusLabel: "Good",
      statusBadgeClass: "asg-status-graded",
      chapters: [
        { id: "nutrition", title: "Chapter 1: Nutrition in Plants", progress: 100, status: "completed", icon: "check" },
        { id: "cell", title: "Chapter 2: The Cell", progress: 100, status: "completed", icon: "check" },
        { 
          id: "heat", 
          title: "Chapter 3: Heat", 
          progress: 60, 
          status: "in_progress", 
          icon: "play",
          tasks: [
            { name: "Video Lesson", status: "Completed", icon: "check" },
            { name: "Chapter Notes", status: "Completed", icon: "check" },
            { name: "Practice Quiz", status: "Completed", icon: "play" },
            { name: "Assignment", status: "Not Submitted", icon: "circle" },
            { name: "Chapter Test", status: "Not Attempted", icon: "circle" }
          ]
        },
        { id: "acids", title: "Chapter 4: Acids, Bases and Salts", progress: 0, status: "not_started", icon: "circle" }
      ]
    },
    maths: {
      id: "maths",
      title: "Mathematics",
      progress: 66,
      completedChapters: 9,
      inProgressChapters: 3,
      notStartedChapters: 2,
      totalChapters: 14,
      barColor: "#F59E0B",
      lightBg: "#FEF3C7",
      iconType: "calculator",
      statusLabel: "On Track",
      statusBadgeClass: "asg-status-submitted",
      chapters: [
        { id: "integers", title: "Chapter 1: Integers", progress: 100, status: "completed", icon: "check" },
        { id: "fractions", title: "Chapter 2: Fractions and Decimals", progress: 85, status: "in_progress", icon: "play" },
        { id: "algebra", title: "Chapter 3: Algebraic Expressions", progress: 60, status: "in_progress", icon: "play" },
        { id: "lines", title: "Chapter 4: Lines and Angles", progress: 0, status: "not_started", icon: "circle" }
      ]
    },
    social: {
      id: "social",
      title: "Social Science",
      progress: 60,
      completedChapters: 7,
      inProgressChapters: 2,
      notStartedChapters: 2,
      totalChapters: 11,
      barColor: "#10B981",
      lightBg: "#DCFCE7",
      iconType: "globe",
      statusLabel: "On Track",
      statusBadgeClass: "asg-status-submitted",
      chapters: [
        { id: "env", title: "Chapter 1: Our Environment", progress: 100, status: "completed", icon: "check" },
        { id: "earth", title: "Chapter 2: Inside Our Earth", progress: 75, status: "in_progress", icon: "play" },
        { id: "delhi", title: "Chapter 3: The Delhi Sultans", progress: 40, status: "in_progress", icon: "play" },
        { id: "mughal", title: "Chapter 4: The Mughal Empire", progress: 0, status: "not_started", icon: "circle" }
      ]
    },
    english: {
      id: "english",
      title: "English",
      progress: 82,
      completedChapters: 8,
      inProgressChapters: 1,
      notStartedChapters: 1,
      totalChapters: 10,
      barColor: "#EC4899",
      lightBg: "#FCE7F3",
      iconType: "book",
      statusLabel: "Excellent",
      statusBadgeClass: "asg-status-graded",
      chapters: [
        { id: "three", title: "Chapter 1: Three Questions", progress: 100, status: "completed", icon: "check" },
        { id: "gift", title: "Chapter 2: A Gift of Chappals", progress: 100, status: "completed", icon: "check" },
        { id: "gopal", title: "Chapter 3: Gopal and the Hilsa Fish", progress: 70, status: "in_progress", icon: "play" },
        { id: "ashes", title: "Chapter 4: The Ashes That Made Trees Bloom", progress: 0, status: "not_started", icon: "circle" }
      ]
    },
    tamil: {
      id: "tamil",
      title: "தமிழ்",
      progress: 70,
      completedChapters: 7,
      inProgressChapters: 2,
      notStartedChapters: 1,
      totalChapters: 10,
      barColor: "#8B5CF6",
      lightBg: "#F3E8FF",
      iconType: "tamil",
      statusLabel: "Good",
      statusBadgeClass: "asg-status-graded",
      chapters: [
        { id: "engal", title: "இயல் 1: எங்கள் தமிழ்", progress: 100, status: "completed", icon: "check" },
        { id: "ondralla", title: "இயல் 2: ஒன்றல்ல இரண்டல்ல", progress: 100, status: "completed", icon: "check" },
        { id: "kadu", title: "இயல் 3: காடு", progress: 60, status: "in_progress", icon: "play" },
        { id: "vilangugal", title: "இயல் 4: விலங்குகள் உலகம்", progress: 0, status: "not_started", icon: "circle" }
      ]
    }
  };

  function getGraphic(type, size = 36) {
    switch (type) {
      case "flask": return GRAPHICS.scienceFlaskIcon(size);
      case "calculator": return GRAPHICS.mathsCalcIcon(size);
      case "globe": return GRAPHICS.socialGlobeIcon(size);
      case "book": return GRAPHICS.englishBookIcon(size);
      case "tamil": return GRAPHICS.tamilSubjectIcon(size);
      default: return GRAPHICS.scienceFlaskIcon(size);
    }
  }

  // Circular Progress Ring Generator matching Screen 2 & Screen 3
  function renderCircleProgress(percent, size = 110, strokeColor = "#10B981", label = "") {
    const r = (size - 18) / 2;
    const c = 2 * Math.PI * r;
    const offset = c * (1 - percent / 100);
    return `
      <div style="position: relative; width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform: rotate(-90deg);">
          <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#E2E8F0" stroke-width="8"/>
          <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${strokeColor}" stroke-width="8" stroke-dasharray="${c}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
        </svg>
        <div style="position: absolute; text-align: center;">
          <span style="font-size: ${size > 100 ? '22px' : '18px'}; font-weight: 900; color: #1E293B;">${percent}%</span>
          ${label ? `<div style="font-size: 11px; font-weight: 700; color: #64748B;">${label}</div>` : ''}
        </div>
      </div>
    `;
  }

  // Global window helpers for foolproof navigation across all tabs
  window.lmsProgressSetTab = function(tab) {
    activeTab = tab;
    state.progressActiveTab = tab;
    render();
  };

  window.lmsProgressSelectSubject = function(subjId) {
    selectedSubjectId = subjId;
    state.progressSelectedSubjectId = subjId;
    activeTab = "subject-wise";
    render();
  };

  window.lmsProgressOpenChapter = function(subjId, chId) {
    selectedSubjectId = subjId;
    selectedChapterId = chId;
    state.progressSelectedSubjectId = subjId;
    state.progressSelectedChapterId = chId;
    activeTab = "chapters";
    render();
  };

  window.lmsProgressSetReportsSubTab = function(subTab) {
    reportsSubTab = subTab;
    state.progressReportsSubTab = subTab;
    render();
  };

  window.lmsProgressExportPDF = function() {
    triggerConfetti(2000);
    app.showToast("📄 Generating Progress Report PDF for Class 7 (Sowmiya S.). Download starting...");
  };

  function render() {
    try {
      state.progressActiveTab = activeTab;
      state.progressSelectedSubjectId = selectedSubjectId;

      if (activeTab === "overview") {
        renderOverviewView();
      } else if (activeTab === "subject-wise") {
        renderSubjectWiseView();
      } else if (activeTab === "chapters") {
        renderChaptersView();
      } else if (activeTab === "reports") {
        renderReportsView();
      }
    } catch (err) {
      console.error("Error rendering progress view:", err);
    }
  }

  // =========================================================================
  // VIEW 1: Overview – Overall & Subject Progress (Matches Image Screen 2)
  // =========================================================================
  function renderOverviewView() {
    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Title + 4 Segmented Pill Tabs -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">My Progress</h1>
          </div>

          <!-- Segmented Pill Tabs: Overview, Subject-wise, Chapters, Reports -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow active" onclick="window.lmsProgressSetTab('overview')">Overview</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('subject-wise')">Subject-wise</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('chapters')">Chapters</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('reports')">Reports</button>
          </div>
        </div>

        <div style="max-width: 860px; margin: 20px auto 0;">
          
          <!-- Top Hero Card: Overall Progress (72%) + 3 Stat Tiles -->
          <div class="progress-top-hero-card">
            
            <!-- Circular Progress Ring (72% Overall Progress) -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 140px;">
              ${renderCircleProgress(72, 105, "#10B981")}
              <span style="font-size: 13px; font-weight: 800; color: #1E293B; margin-top: 6px;">Overall Progress</span>
            </div>

            <!-- 3 Stat Tiles (Completed 28/40, In Progress 8, Not Started 4) -->
            <div class="progress-metrics-triple-grid">
              
              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${GRAPHICS.checkDoneIcon(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">Completed</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">28 / 40 Chapters</div>
                </div>
              </div>

              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${ICONS.clock(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">In Progress</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">8 Chapters</div>
                </div>
              </div>

              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${GRAPHICS.checkTodoIcon(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">Not Started</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">4 Chapters</div>
                </div>
              </div>

            </div>

          </div>

          <!-- Subject Progress Section -->
          <div style="margin-top: 26px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <h2 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">Subject Progress</h2>
              <button style="background: none; border: none; font-size: 13.5px; font-weight: 800; color: #7C3AED; cursor: pointer;" onclick="window.lmsProgressSetTab('subject-wise')">
                View Details →
              </button>
            </div>

            <!-- 5 Subject Progress Rows -->
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${Object.values(subjectsData).map(subj => `
                <div class="progress-subject-row" onclick="window.lmsProgressSelectSubject('${subj.id}')" style="cursor: pointer;">
                  
                  <!-- Left: Icon + Title -->
                  <div style="display: flex; align-items: center; gap: 14px; width: 180px;">
                    <div class="ongoing-icon-box" style="background: ${subj.lightBg}; width: 44px; height: 44px;">
                      ${getGraphic(subj.iconType, 32)}
                    </div>
                    <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${subj.title}</span>
                  </div>

                  <!-- Middle: Rounded Horizontal Progress Bar -->
                  <div class="lu-bar-track" style="flex: 1; height: 10px; background: #F1F5F9; border-radius: 999px; overflow: hidden; margin: 0 16px;">
                    <div class="lu-bar-fill" style="width: ${subj.progress}%; height: 100%; background: ${subj.barColor}; border-radius: 999px; transition: width 0.4s ease;"></div>
                  </div>

                  <!-- Right: Percentage Value -->
                  <div style="width: 48px; text-align: right; font-size: 15px; font-weight: 800; color: #1E293B;">
                    ${subj.progress}%
                  </div>

                </div>
              `).join('')}
            </div>

          </div>

        </div>

      </div>
    `;
  }

  // =========================================================================
  // VIEW 2: Subject-wise Progress (Matches Image Screen 3)
  // =========================================================================
  function renderSubjectWiseView() {
    const subj = subjectsData[selectedSubjectId] || subjectsData.science;

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Title + 4 Segmented Pill Tabs -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">Progress</h1>
          </div>

          <!-- Segmented Pill Tabs -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('overview')">Overview</button>
            <button class="tab-pill-btn-flow active" onclick="window.lmsProgressSetTab('subject-wise')">Subject-wise</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('chapters')">Chapters</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('reports')">Reports</button>
          </div>
        </div>

        <div style="max-width: 860px; margin: 20px auto 0;">
          
          <!-- Subject Title & Dropdown Selector -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <h2 style="font-size: 19px; font-weight: 800; color: #1E293B; margin: 0;">${subj.title} Progress</h2>
            
            <select id="progress-subj-select" style="border: 1.5px solid #CBD5E1; border-radius: 12px; padding: 7px 16px; font-size: 13.5px; font-weight: 800; color: #1E293B; background: #FFFFFF; outline: none; cursor: pointer;">
              <option value="science" ${selectedSubjectId === 'science' ? 'selected' : ''}>Science</option>
              <option value="maths" ${selectedSubjectId === 'maths' ? 'selected' : ''}>Mathematics</option>
              <option value="social" ${selectedSubjectId === 'social' ? 'selected' : ''}>Social Science</option>
              <option value="english" ${selectedSubjectId === 'english' ? 'selected' : ''}>English</option>
              <option value="tamil" ${selectedSubjectId === 'tamil' ? 'selected' : ''}>தமிழ்</option>
            </select>
          </div>

          <!-- Top Stats Strip: 78% Completed + 3 Stat Tiles -->
          <div class="progress-top-hero-card" style="padding: 20px 24px; margin-bottom: 24px;">
            
            <!-- Circular Progress Ring -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 120px;">
              ${renderCircleProgress(subj.progress, 90, "#10B981")}
              <span style="font-size: 12.5px; font-weight: 800; color: #1E293B; margin-top: 4px;">Completed</span>
            </div>

            <!-- 3 Stat Tiles -->
            <div class="progress-metrics-triple-grid">
              
              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${GRAPHICS.checkDoneIcon(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">Completed</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">${subj.completedChapters} Chapters</div>
                </div>
              </div>

              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${ICONS.clock(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">In Progress</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">${subj.inProgressChapters} Chapters</div>
                </div>
              </div>

              <div class="progress-metric-box">
                <div class="progress-metric-icon-circle lu-plain-icon-box">${GRAPHICS.checkTodoIcon(34)}</div>
                <div>
                  <div style="font-size: 12px; color: #64748B; font-weight: 700;">Not Started</div>
                  <div style="font-size: 15px; font-weight: 900; color: #1E293B; margin-top: 2px;">${subj.notStartedChapters} Chapter</div>
                </div>
              </div>

            </div>

          </div>

          <!-- Chapter Progress List -->
          <div>
            <h3 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 14px;">Chapter Progress (${subj.title})</h3>

            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${subj.chapters.map(ch => {
                const isCompleted = ch.progress === 100;
                const isInProgress = ch.progress > 0 && ch.progress < 100;
                const barColor = isCompleted ? "#10B981" : isInProgress ? "#F59E0B" : "#CBD5E1";

                return `
                  <div class="ongoing-chapter-row" onclick="window.lmsProgressOpenChapter('${subj.id}', '${ch.id}')" style="cursor: pointer; padding: 14px 20px;">
                    
                    <!-- Left: Status Icon Circle + Chapter Name -->
                    <div style="display: flex; align-items: center; gap: 14px; min-width: 300px;">
                      <div class="${isInProgress ? '' : 'lu-plain-icon-box'}" style="width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; ${isCompleted ? 'background: #ECFDF5; color: #10B981;' : isInProgress ? 'background: #EFF6FF; color: #3B82F6;' : 'background: #F1F5F9; color: #94A3B8;'}">
                        ${isCompleted ? GRAPHICS.checkDoneIcon(28) : isInProgress ? '▶' : GRAPHICS.checkTodoIcon(28)}
                      </div>
                      <span style="font-size: 14.5px; font-weight: 800; color: #1E293B;">${ch.title}</span>
                    </div>

                    <!-- Middle: Progress Bar -->
                    <div style="display: flex; align-items: center; gap: 14px; width: 220px;">
                      <span style="font-size: 13.5px; font-weight: 800; color: #1E293B; width: 42px; text-align: right;">${ch.progress}%</span>
                      <div class="lu-bar-track" style="flex: 1; height: 8px; background: #F1F5F9; border-radius: 999px; overflow: hidden;">
                        <div class="lu-bar-fill" style="width: ${ch.progress}%; height: 100%; background: ${barColor}; border-radius: 999px;"></div>
                      </div>
                    </div>

                    <!-- Right: Arrow -->
                    <div style="color: #64748B; font-weight: 800; font-size: 16px;">
                      ❯
                    </div>

                  </div>
                `;
              }).join('')}
            </div>

          </div>

        </div>

      </div>
    `;

    container.querySelector("#progress-subj-select")?.addEventListener("change", (e) => {
      window.lmsProgressSelectSubject(e.target.value);
    });
  }

  // =========================================================================
  // VIEW 3: Chapter Progress Detail (Matches Image Screen 4)
  // =========================================================================
  function renderChaptersView() {
    const subj = subjectsData[selectedSubjectId] || subjectsData.science;
    const ch = subj.chapters.find(c => c.id === selectedChapterId) || subj.chapters[2] || subj.chapters[0];
    const tasks = ch.tasks || [
      { name: "Video Lesson", status: "Completed", icon: "check" },
      { name: "Chapter Notes", status: "Completed", icon: "check" },
      { name: "Practice Quiz", status: "Completed", icon: "play" },
      { name: "Assignment", status: "Not Submitted", icon: "circle" },
      { name: "Chapter Test", status: "Not Attempted", icon: "circle" }
    ];

    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Breadcrumb + 4 Segmented Pill Tabs -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <button onclick="window.lmsProgressSetTab('subject-wise')" style="background: none; border: none; font-size: 17px; font-weight: 800; color: #1E293B; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
              ← ${subj.title} > ${ch.title}
            </button>
          </div>

          <!-- Segmented Pill Tabs -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('overview')">Overview</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('subject-wise')">Subject-wise</button>
            <button class="tab-pill-btn-flow active" onclick="window.lmsProgressSetTab('chapters')">Chapters</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('reports')">Reports</button>
          </div>
        </div>

        <div style="max-width: 860px; margin: 20px auto 0;">
          
          <!-- Hero Banner Card (Screen 4: Chapter 3: Heat, Progress 60%) -->
          <div style="background: linear-gradient(135deg, #1E1B4B 0%, #312E81 100%); border-radius: 24px; padding: 24px 32px; color: #FFFFFF; display: flex; align-items: center; gap: 32px; box-shadow: 0 12px 30px rgba(30, 27, 75, 0.2); margin-bottom: 24px;">
            
            <!-- Left: 3D Heat Wave Graphic -->
            <div style="width: 140px; height: 90px; display: flex; align-items: center; justify-content: center; position: relative;">
              <div style="position: absolute; width: 120px; height: 80px; background: radial-gradient(circle, #F59E0B 0%, rgba(245, 158, 11, 0) 70%); filter: blur(12px); opacity: 0.6;"></div>
              <div style="position: relative; z-index: 2; transform: scale(0.68);">
                ${GRAPHICS.heatWaveIllustration(200, 140)}
              </div>
            </div>

            <!-- Right: Title + Progress Bar -->
            <div style="flex: 1;">
              <h2 style="font-size: 22px; font-weight: 800; color: #FFFFFF; margin: 0 0 6px;">${ch.title}</h2>
              <div style="font-size: 13.5px; font-weight: 700; color: #FBBF24; margin-bottom: 12px;">Progress: ${ch.progress}%</div>
              
              <!-- Horizontal Golden Track -->
              <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.2); border-radius: 999px; overflow: hidden;">
                <div class="lu-bar-fill" style="width: ${ch.progress}%; height: 100%; background: linear-gradient(90deg, #F59E0B, #FBBF24); border-radius: 999px;"></div>
              </div>
            </div>

          </div>

          <!-- Tasks Checklist List -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${tasks.map(t => {
              const isComp = t.status === "Completed";
              return `
                <div class="ongoing-chapter-row" style="padding: 14px 24px;">
                  
                  <div style="display: flex; align-items: center; gap: 14px;">
                    <div class="${!isComp && t.icon === 'play' ? '' : 'lu-plain-icon-box'}" style="width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; ${isComp ? 'background: #ECFDF5; color: #10B981;' : 'background: #F1F5F9; color: #94A3B8;'}">
                      ${isComp ? GRAPHICS.checkDoneIcon(26) : t.icon === 'play' ? '▶' : GRAPHICS.checkTodoIcon(26)}
                    </div>
                    <span style="font-size: 15px; font-weight: 800; color: #1E293B;">${t.name}</span>
                  </div>

                  <div>
                    <span class="assignment-status-pill ${isComp ? 'asg-status-graded' : 'asg-status-pending'}" style="font-size: 12.5px; padding: 5px 16px;">
                      ${t.status}
                    </span>
                  </div>

                </div>
              `;
            }).join('')}
          </div>

        </div>

      </div>
    `;
  }

  // =========================================================================
  // VIEW 4: Progress Reports & Detailed Table (Matches Image Screen 5 & 6)
  // =========================================================================
  function renderReportsView() {
    container.innerHTML = `
      <div class="screen-container view-enter" style="padding-top: 6px;">
        
        <!-- Header: Title + 4 Segmented Pill Tabs -->
        <div class="my-learning-top-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <h1 class="my-learning-heading">My Progress</h1>
          </div>

          <!-- Segmented Pill Tabs -->
          <div class="tabs-nav-bar-flow">
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('overview')">Overview</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('subject-wise')">Subject-wise</button>
            <button class="tab-pill-btn-flow" onclick="window.lmsProgressSetTab('chapters')">Chapters</button>
            <button class="tab-pill-btn-flow active" onclick="window.lmsProgressSetTab('reports')">Reports</button>
          </div>
        </div>

        <div style="max-width: 860px; margin: 20px auto 0;">
          
          <!-- SCREEN 5: Performance Summary (5-Column Vertical Bar Chart) -->
          <div class="progress-bar-chart-card">
            
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
              <h2 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">Progress Report</h2>
              
              <select style="border: 1.5px solid #CBD5E1; border-radius: 12px; padding: 6px 14px; font-size: 13px; font-weight: 700; color: #1E293B; outline: none; background: #FFFFFF; cursor: pointer;">
                <option value="this-month">This Month</option>
                <option value="term-1">Term 1</option>
                <option value="all-time">All Time</option>
              </select>
            </div>

            <!-- Vertical Bar Chart Stage -->
            <div class="progress-chart-stage">
              
              <!-- Y-Axis Labels -->
              <div class="progress-chart-y-axis">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>

              <!-- 5 Columns -->
              <!-- Science (78%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('science')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">78%</span>
                <div class="progress-bar-pillar" style="height: 140px; background: #8B5CF6;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">Science</span>
              </div>

              <!-- Maths (66%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('maths')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">66%</span>
                <div class="progress-bar-pillar" style="height: 118px; background: #F59E0B;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">Maths</span>
              </div>

              <!-- Social Science (60%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('social')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">60%</span>
                <div class="progress-bar-pillar" style="height: 108px; background: #10B981;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">Social Science</span>
              </div>

              <!-- English (82%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('english')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">82%</span>
                <div class="progress-bar-pillar" style="height: 152px; background: #EC4899;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">English</span>
              </div>

              <!-- Tamil (70%) -->
              <div class="progress-chart-column" onclick="window.lmsProgressSelectSubject('tamil')">
                <span style="font-size: 12.5px; font-weight: 800; color: #1E293B;">70%</span>
                <div class="progress-bar-pillar" style="height: 126px; background: #3B82F6;"></div>
                <span style="font-size: 12px; font-weight: 700; color: #64748B; margin-top: 6px;">தமிழ்</span>
              </div>

            </div>

          </div>

          <!-- SCREEN 6: Detailed Report -->
          <div class="progress-table-card">
            
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;">
              <h2 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">Progress Report – Detailed</h2>
              
              <button class="ongoing-continue-btn" onclick="window.lmsProgressExportPDF()" style="padding: 7px 20px; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                📥 Export PDF
              </button>
            </div>

            <!-- Sub-tabs: Summary, Chapter-wise, Activity Log -->
            <div class="tabs-nav-bar-flow" style="margin-bottom: 18px;">
              <button class="tab-pill-btn-flow ${reportsSubTab === 'summary' ? 'active' : ''}" onclick="window.lmsProgressSetReportsSubTab('summary')">Summary</button>
              <button class="tab-pill-btn-flow ${reportsSubTab === 'chapter-wise' ? 'active' : ''}" onclick="window.lmsProgressSetReportsSubTab('chapter-wise')">Chapter-wise</button>
              <button class="tab-pill-btn-flow ${reportsSubTab === 'activity' ? 'active' : ''}" onclick="window.lmsProgressSetReportsSubTab('activity')">Activity Log</button>
            </div>

            <!-- Table content based on sub-tab -->
            ${reportsSubTab === 'summary' ? renderReportsSummaryTable() : reportsSubTab === 'chapter-wise' ? renderReportsChapterTable() : renderReportsActivityLog()}

          </div>

        </div>

      </div>
    `;
  }

  // Summary Table (Matches Screen 6)
  function renderReportsSummaryTable() {
    return `
      <table class="progress-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Chapters</th>
            <th>Completed</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${Object.values(subjectsData).map(subj => `
            <tr style="cursor: pointer;" onclick="window.lmsProgressSelectSubject('${subj.id}')">
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="ongoing-icon-box" style="background: ${subj.lightBg}; width: 32px; height: 32px;">
                    ${getGraphic(subj.iconType, 22)}
                  </div>
                  <strong style="color: #1E293B;">${subj.title}</strong>
                </div>
              </td>
              <td>${subj.totalChapters}</td>
              <td>${subj.completedChapters}</td>
              <td>
                <span style="font-weight: 800; color: ${subj.barColor};">${subj.progress}%</span>
              </td>
              <td>
                <span class="assignment-status-pill ${subj.statusBadgeClass}">
                  ${subj.statusLabel}
                </span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  // Chapter-wise Breakdown Table
  function renderReportsChapterTable() {
    const subj = subjectsData[selectedSubjectId] || subjectsData.science;
    return `
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <span style="font-size: 13.5px; font-weight: 700; color: #64748B;">Showing breakdown for: <strong>${subj.title}</strong></span>
          <select id="chapter-table-subj-select" style="border: 1px solid #CBD5E1; border-radius: 8px; padding: 4px 10px; font-size: 12px; font-weight: 700; outline: none;">
            <option value="science" ${selectedSubjectId === 'science' ? 'selected' : ''}>Science</option>
            <option value="maths" ${selectedSubjectId === 'maths' ? 'selected' : ''}>Mathematics</option>
            <option value="social" ${selectedSubjectId === 'social' ? 'selected' : ''}>Social Science</option>
            <option value="english" ${selectedSubjectId === 'english' ? 'selected' : ''}>English</option>
            <option value="tamil" ${selectedSubjectId === 'tamil' ? 'selected' : ''}>தமிழ்</option>
          </select>
        </div>

        <table class="progress-table">
          <thead>
            <tr>
              <th>Chapter</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${subj.chapters.map(ch => `
              <tr>
                <td><strong>${ch.title}</strong></td>
                <td><span style="font-weight: 800; color: #7C3AED;">${ch.progress}%</span></td>
                <td>
                  <span class="assignment-status-pill ${ch.progress === 100 ? 'asg-status-graded' : ch.progress > 0 ? 'asg-status-submitted' : 'asg-status-pending'}">
                    ${ch.progress === 100 ? 'Completed' : ch.progress > 0 ? 'In Progress' : 'Not Started'}
                  </span>
                </td>
                <td>
                  <button class="btn-secondary" onclick="window.lmsProgressOpenChapter('${subj.id}', '${ch.id}')" style="padding: 4px 12px; font-size: 12px; border-radius: 999px;">
                    View
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Activity Log Table
  function renderReportsActivityLog() {
    const logs = [
      { action: "Completed Quick Quiz: The Cell", date: "Today, 02:15 PM", score: "8 / 10", points: "+80 Pts" },
      { action: "Submitted Assignment: The Cell – Worksheet", date: "Today, 11:45 AM", score: "Turned In", points: "+50 Pts" },
      { action: "Watched Video Lesson: Chapter 3: Heat", date: "Yesterday, 04:30 PM", score: "14:35 mins", points: "+20 Pts" },
      { action: "Completed Challenge: Weekly Science Challenge", date: "15 Nov 2026", score: "8 / 10", points: "+100 Pts" },
      { action: "Completed Chapter 1: Nutrition in Plants", date: "10 Nov 2026", score: "100%", points: "+50 Pts" }
    ];

    return `
      <table class="progress-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Date & Time</th>
            <th>Result / Status</th>
            <th>Reward</th>
          </tr>
        </thead>
        <tbody>
          ${logs.map(log => `
            <tr>
              <td><strong>${log.action}</strong></td>
              <td style="color: #64748B;">${log.date}</td>
              <td><span class="assignment-status-pill asg-status-submitted">${log.score}</span></td>
              <td><strong style="color: #D97706;">${log.points}</strong></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  // Initial render
  render();
}

// ===== Module: js/screens/achievements.js =====
// Screen 10: Achievements - Complete Flow (Classes 6 – 8) Student View
// Matching Reference Design:
// 1. Dashboard -> Click Achievements
// 2. Achievements -> View Badges, Milestones, Certificates, Leaderboard
// 3. Badge Detail -> View Earned Badge Info (Quick Learner, +50 pts, 08 Nov 2026)
// 4. Milestones -> Track & Complete Bigger Goals (10 Chapters, 7-Day Streak, 80%+ Quizzes)
// 5. Certificates -> View & Download Earned Certificates (Science Excellence, Quiz Champion, Assignment Pro)
// 6. Leaderboard -> See Your Rank & Top Performers (Class 7 Month Podium: Karthik R., Sowmiya S., Iniya M.)
function renderAchievementsScreen(container, state, app) {
  let activeTab = state.achievementsActiveTab || "all"; // "all", "badges", "milestones", "certificates", "leaderboard"
  let view = state.achievementsView || "list"; // "list", "badge_details"
  let selectedBadgeId = state.achievementsSelectedBadgeId || "quick_learner";
  let selectedClass = state.achievementsSelectedClass || "Class 7";

  // Badges Data Dictionary
  const badgesData = {
    quick_learner: {
      id: "quick_learner",
      title: "Quick Learner",
      subtitle: "Awarded for completing 5 chapters in any subject.",
      points: 50,
      achievedDate: "08 Nov 2026",
      status: "Earned",
      earned: true,
      category: "Learning",
      iconRenderer: (size) => GRAPHICS.badgeQuickLearner ? GRAPHICS.badgeQuickLearner(size) : `<div style="font-size: ${size * 0.6}px;">🚀</div>`
    },
    quiz_master: {
      id: "quiz_master",
      title: "Quiz Master",
      subtitle: "Awarded for scoring 90%+ in 3 consecutive quizzes.",
      points: 50,
      achievedDate: "04 Nov 2026",
      status: "Earned",
      earned: true,
      category: "Quizzes",
      iconRenderer: (size) => GRAPHICS.badgeQuizMaster ? GRAPHICS.badgeQuizMaster(size) : `<div style="font-size: ${size * 0.6}px;">🏆</div>`
    },
    asg_star: {
      id: "asg_star",
      title: "Assignment Star",
      subtitle: "Awarded for submitting 5 assignments on time with top grades.",
      points: 50,
      achievedDate: "29 Oct 2026",
      status: "Earned",
      earned: true,
      category: "Assignments",
      iconRenderer: (size) => GRAPHICS.badgeAssignmentStar ? GRAPHICS.badgeAssignmentStar(size) : `<div style="font-size: ${size * 0.6}px;">⭐</div>`
    },
    consistent_learner: {
      id: "consistent_learner",
      title: "Consistent Learner",
      subtitle: "Awarded for maintaining a study streak for 7 consecutive days.",
      points: 50,
      achievedDate: "15 Oct 2026",
      status: "Earned",
      earned: true,
      category: "Streaks",
      iconRenderer: (size) => GRAPHICS.badgeConsistentLearner ? GRAPHICS.badgeConsistentLearner(size) : `<div style="font-size: ${size * 0.6}px;">🔥</div>`
    },
    chapter_completer: {
      id: "chapter_completer",
      title: "Chapter Completer",
      subtitle: "Awarded for completing all chapters in Mathematics.",
      points: 50,
      achievedDate: "20 Oct 2026",
      status: "Earned",
      earned: true,
      category: "Learning",
      iconRenderer: (size) => GRAPHICS.badgeChapterCompleter ? GRAPHICS.badgeChapterCompleter(size) : `<div style="font-size: ${size * 0.6}px;">📖</div>`
    },
    subject_explorer: {
      id: "subject_explorer",
      title: "Subject Explorer",
      subtitle: "Awarded for studying chapters across all 5 subjects.",
      points: 50,
      achievedDate: "12 Oct 2026",
      status: "Earned",
      earned: true,
      category: "Learning",
      iconRenderer: (size) => GRAPHICS.badgeSubjectExplorer ? GRAPHICS.badgeSubjectExplorer(size) : `<div style="font-size: ${size * 0.6}px;">🧭</div>`
    },
    speed_demon: {
      id: "speed_demon",
      title: "Speed Demon",
      subtitle: "Complete a timed quiz in under 5 minutes with 100% accuracy.",
      points: 50,
      achievedDate: "Locked",
      status: "Locked",
      earned: false,
      category: "Quizzes",
      iconRenderer: (size) => ICONS.lockedSpeedBadge(size)
    },
    perfectionist: {
      id: "perfectionist",
      title: "Perfectionist",
      subtitle: "Score 100% in 5 weekly challenges without any retries.",
      points: 100,
      achievedDate: "Locked",
      status: "Locked",
      earned: false,
      category: "Challenges",
      iconRenderer: (size) => `<div style="width:${size}px; height:${size}px; border-radius:50%; background:#F1F5F9; display:flex; align-items:center; justify-content:center; font-size:${size*0.5}px; border:2px dashed #CBD5E1;"><span style="filter: grayscale(1); opacity: 0.55; display: inline-flex;">${ICONS.target(Math.round(size * 0.55))}</span></div>`
    }
  };

  // Milestones Data
  const milestonesList = [
    {
      id: "m_chapters",
      title: "Complete 10 Chapters",
      current: 10,
      total: 10,
      completed: true,
      statusLabel: "Completed ✔",
      iconBg: "#FFEDD5",
      iconColor: "#EA580C",
      iconType: "book"
    },
    {
      id: "m_streak",
      title: "Maintain 7-Day Streak",
      current: 7,
      total: 7,
      completed: true,
      statusLabel: "Completed ✔",
      iconBg: "#FEF3C7",
      iconColor: "#D97706",
      iconType: "flame"
    },
    {
      id: "m_quizzes",
      title: "Score 80%+ in 5 Quizzes",
      current: 3,
      total: 5,
      completed: false,
      statusLabel: "In Progress",
      iconBg: "#F3E8FF",
      iconColor: "#7C3AED",
      iconType: "chart"
    },
    {
      id: "m_assignments",
      title: "Submit 10 Assignments",
      current: 8,
      total: 10,
      completed: false,
      statusLabel: "In Progress",
      iconBg: "#E0F2FE",
      iconColor: "#0284C7",
      iconType: "clipboard"
    }
  ];

  // Certificates Data
  const certificatesList = [
    {
      id: "cert_science",
      title: "Science Excellence",
      subtitle: "Completed all Science chapters",
      date: "05 Nov 2026",
      code: "LU-SCI-2026-0842",
      recipient: "Sowmiya S.",
      grade: "Class 7",
      score: "98% Aggregate",
      instructor: "Dr. A. Ramanujan",
      principal: "M. Soundararajan"
    },
    {
      id: "cert_quiz",
      title: "Quiz Champion",
      subtitle: "Scored 80%+ in 5 quizzes",
      date: "01 Nov 2026",
      code: "LU-QC-2026-0619",
      recipient: "Sowmiya S.",
      grade: "Class 7",
      score: "Top 5% in Class",
      instructor: "Prof. K. Swaminathan",
      principal: "M. Soundararajan"
    },
    {
      id: "cert_assignment",
      title: "Assignment Pro",
      subtitle: "Submitted 10 assignments",
      date: "28 Oct 2026",
      code: "LU-AP-2026-0504",
      recipient: "Sowmiya S.",
      grade: "Class 7",
      score: "100% On-Time Completion",
      instructor: "Mrs. Revathi Priya",
      principal: "M. Soundararajan"
    }
  ];

  // Leaderboard Data (Classes 6-8)
  const leaderboardData = {
    "Class 7": {
      podium: [
        { rank: 2, name: "Sowmiya S.", points: "2,100 Points", isUser: true, initial: "SS", color: "#6366F1", avatar: "assets/student-avatar.jpg" },
        { rank: 1, name: "Karthik R.", points: "2,450 Points", isUser: false, initial: "KR", color: "#F59E0B", avatar: "" },
        { rank: 3, name: "Iniya M.", points: "1,980 Points", isUser: false, initial: "IM", color: "#EC4899", avatar: "" }
      ],
      runnersUp: [
        { rank: 4, name: "Pranav K.", points: "1,860 Points", initial: "PK", color: "#06B6D4" },
        { rank: 5, name: "Harini J.", points: "1,820 Points", initial: "HJ", color: "#10B981" },
        { rank: 6, name: "Ananya S.", points: "1,750 Points", initial: "AS", color: "#8B5CF6" },
        { rank: 7, name: "Vijay K.", points: "1,690 Points", initial: "VK", color: "#F97316" }
      ]
    },
    "Class 6": {
      podium: [
        { rank: 2, name: "Dinesh B.", points: "2,200 Points", isUser: false, initial: "DB", color: "#6366F1" },
        { rank: 1, name: "Varun T.", points: "2,380 Points", isUser: false, initial: "VT", color: "#F59E0B" },
        { rank: 3, name: "Nisha P.", points: "1,910 Points", isUser: false, initial: "NP", color: "#EC4899" }
      ],
      runnersUp: [
        { rank: 4, name: "Akash R.", points: "1,780 Points", initial: "AR", color: "#06B6D4" },
        { rank: 5, name: "Bhavani S.", points: "1,710 Points", initial: "BS", color: "#10B981" }
      ]
    },
    "Class 8": {
      podium: [
        { rank: 2, name: "Rohit N.", points: "2,510 Points", isUser: false, initial: "RN", color: "#6366F1" },
        { rank: 1, name: "Meera V.", points: "2,650 Points", isUser: false, initial: "MV", color: "#F59E0B" },
        { rank: 3, name: "Siddharth C.", points: "2,420 Points", isUser: false, initial: "SC", color: "#EC4899" }
      ],
      runnersUp: [
        { rank: 4, name: "Kavya M.", points: "2,290 Points", initial: "KM", color: "#06B6D4" },
        { rank: 5, name: "Aditya S.", points: "2,210 Points", initial: "AS", color: "#10B981" }
      ]
    }
  };

  // Helper: Open Certificate Modal (Screen 5 View Action)
  window.lmsViewCertificateModal = function(certId) {
    const cert = certificatesList.find(c => c.id === certId) || certificatesList[0];
    triggerConfetti(2000);

    app.showModal(`
      <div class="cert-modal-frame view-enter">
        <div style="display: flex; justify-content: center; margin-bottom: 12px;">
          ${GRAPHICS.certificateMedal ? GRAPHICS.certificateMedal(72) : `<div style="font-size: 54px;">🏅</div>`}
        </div>
        
        <span style="font-size: 11px; letter-spacing: 2px; font-weight: 800; color: #B45309; text-transform: uppercase;">
          Learning Universe LMS • Official Certificate
        </span>
        
        <h2 style="font-size: 26px; font-weight: 900; color: #1E1B4B; margin: 10px 0 6px; letter-spacing: -0.5px;">
          Certificate of Achievement
        </h2>
        
        <p style="font-size: 13.5px; color: #64748B; margin: 0 0 16px;">
          This is proudly presented to
        </p>

        <div style="font-size: 24px; font-weight: 800; color: #7C3AED; font-family: 'Plus Jakarta Sans', sans-serif; border-bottom: 2px dashed #DDD6FE; padding-bottom: 8px; max-width: 340px; margin: 0 auto 16px;">
          ${cert.recipient}
        </div>

        <p style="font-size: 14px; color: #334155; max-width: 480px; margin: 0 auto 18px; line-height: 1.5;">
          For outstanding performance and dedication in successfully completing <strong>${cert.title}</strong> (${cert.subtitle}) with exceptional marks (<strong>${cert.score}</strong>).
        </p>

        <!-- Certificate Metadata Row -->
        <div style="display: flex; justify-content: space-around; align-items: center; border-top: 1.5px solid #F1F5F9; border-bottom: 1.5px solid #F1F5F9; padding: 14px 10px; margin: 20px 0;">
          <div>
            <span style="font-size: 11px; color: #94A3B8; text-transform: uppercase; font-weight: 700;">Issue Date</span>
            <div style="font-size: 13.5px; font-weight: 800; color: #1E293B;">${cert.date}</div>
          </div>
          <div>
            <span style="font-size: 11px; color: #94A3B8; text-transform: uppercase; font-weight: 700;">Verification ID</span>
            <div style="font-size: 13.5px; font-weight: 800; color: #7C3AED;">${cert.code}</div>
          </div>
          <div>
            <span style="font-size: 11px; color: #94A3B8; text-transform: uppercase; font-weight: 700;">Principal</span>
            <div style="font-size: 13.5px; font-weight: 800; color: #1E293B;">${cert.principal}</div>
          </div>
        </div>

        <!-- Buttons -->
        <div style="display: flex; justify-content: center; gap: 14px; margin-top: 24px;">
          <button class="btn-primary" onclick="window.lmsDownloadCertificate('${cert.id}')">
            ${ICONS.download ? ICONS.download(16) : ''} Download PDF
          </button>
          <button class="btn-secondary" onclick="window.closeLmsModal()">
            Close
          </button>
        </div>
      </div>
    `);
  };

  // Helper: Download Certificate
  window.lmsDownloadCertificate = function(certId) {
    const cert = certificatesList.find(c => c.id === certId) || certificatesList[0];
    app.showToast(`Downloading Certificate for ${cert.title}...`);
    setTimeout(() => {
      app.showToast("Certificate downloaded successfully! 📄");
    }, 1200);
  };

  // Global Navigation Handlers
  window.lmsAchievementsSetTab = function(tabName) {
    state.achievementsActiveTab = tabName;
    state.achievementsView = "list";
    renderAchievementsScreen(container, state, app);
  };

  window.lmsOpenBadgeDetails = function(badgeId) {
    state.achievementsView = "badge_details";
    state.achievementsSelectedBadgeId = badgeId;
    renderAchievementsScreen(container, state, app);
  };

  window.lmsAchievementsBackToList = function() {
    state.achievementsView = "list";
    renderAchievementsScreen(container, state, app);
  };

  window.lmsAchievementsSetClass = function(className) {
    state.achievementsSelectedClass = className;
    renderAchievementsScreen(container, state, app);
  };

  // Render Tabs Bar
  function renderTabsBar() {
    const tabs = [
      { id: "all", label: "All" },
      { id: "badges", label: "Badges" },
      { id: "milestones", label: "Milestones" },
      { id: "certificates", label: "Certificates" },
      { id: "leaderboard", label: "Leaderboard" }
    ];

    return `
      <div class="tabs-nav-bar" style="margin-bottom: 24px; border-bottom: none; display: flex; align-items: center; gap: 10px;">
        ${tabs.map(t => `
          <button 
            class="tab-pill-btn ${activeTab === t.id ? 'active' : ''}" 
            onclick="window.lmsAchievementsSetTab('${t.id}')"
            style="padding: 9px 24px; border-radius: 999px; font-weight: 700; font-size: 14px;"
          >
            ${t.label}
          </button>
        `).join('')}
      </div>
    `;
  }

  // SCREEN 3: BADGE DETAILS VIEW
  if (view === "badge_details") {
    const badge = badgesData[selectedBadgeId] || badgesData.quick_learner;

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Back Navigation & Header -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
          <button class="btn-secondary" onclick="window.lmsAchievementsBackToList()" style="border-radius: 999px; padding: 8px 18px; font-weight: 700;">
            ← Back
          </button>
          <h1 style="font-size: 24px; font-weight: 800; color: #1E293B; margin: 0;">Badge Details</h1>
        </div>

        <!-- Badge Detail Hero Card (Matching Panel 3 in Reference Flow) -->
        <div class="badge-detail-hero-card">
          <div class="badge-detail-confetti-bg"></div>

          <!-- Large 3D Badge Graphic with Aura -->
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; position: relative;">
            <div style="filter: drop-shadow(0 12px 24px rgba(124, 58, 237, 0.25)); animation: floatSlow 3s ease-in-out infinite;">
              ${badge.iconRenderer(115)}
            </div>
          </div>

          <!-- Badge Info & Details -->
          <div style="flex: 1; z-index: 2;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <h2 style="font-size: 28px; font-weight: 900; color: #1E1B4B; margin: 0; letter-spacing: -0.5px;">
                ${badge.title}
              </h2>
              <span class="badge-status badge-emerald" style="font-size: 13px; font-weight: 800; padding: 6px 14px; border-radius: 999px;">
                ✔ ${badge.status}
              </span>
            </div>

            <p style="font-size: 15px; color: #475569; margin: 0 0 24px; line-height: 1.5; max-width: 540px;">
              ${badge.subtitle}
            </p>

            <!-- Stat Boxes Grid (Achieved On & Points Earned) -->
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 26px;">
              <div class="badge-stat-box">
                <div style="width: 42px; height: 42px; border-radius: 12px; background: #EDE9FE; display: flex; align-items: center; justify-content: center; color: #7C3AED;">
                  ${ICONS.calendar ? ICONS.calendar(22) : '📅'}
                </div>
                <div>
                  <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">Achieved On</div>
                  <div style="font-size: 16px; font-weight: 800; color: #1E293B;">${badge.achievedDate}</div>
                </div>
              </div>

              <div class="badge-stat-box">
                <div style="width: 42px; height: 42px; border-radius: 12px; background: #FEF3C7; display: flex; align-items: center; justify-content: center; color: #D97706;">
                  ${ICONS.trophy ? ICONS.trophy(22) : '🏆'}
                </div>
                <div>
                  <div style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">Points Earned</div>
                  <div style="font-size: 16px; font-weight: 800; color: #D97706;">+${badge.points} Points</div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; align-items: center; gap: 14px;">
              <button class="btn-primary" id="btn-share-badge" style="border-radius: 999px; padding: 10px 24px;">
                ${ICONS.share ? ICONS.share(16) : ''} Share Badge
              </button>
              <button class="btn-secondary" onclick="window.lmsAchievementsBackToList()" style="border-radius: 999px; padding: 10px 22px;">
                Back to Achievements
              </button>
            </div>

          </div>

        </div>

      </div>
    `;

    // Share button listener
    container.querySelector("#btn-share-badge")?.addEventListener("click", () => {
      triggerConfetti(1500);
      app.showToast(`Badge "${badge.title}" shared with your classmates! 🎉`);
    });

    return;
  }

  // MAIN SCREENS (2, 4, 5, 6 BASED ON TAB)
  let contentHtml = "";

  // 1. ALL TAB (Screen 2)
  if (activeTab === "all") {
    contentHtml = `
      <!-- My Badges Shelf Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
        <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0;">
          My Badges (12 Earned)
        </h3>
        <button 
          onclick="window.lmsAchievementsSetTab('badges')" 
          style="background: none; border: none; color: #7C3AED; font-weight: 700; font-size: 13.5px; cursor: pointer; display: flex; align-items: center; gap: 4px;"
        >
          View All →
        </button>
      </div>

      <!-- 4 Badges Grid Shelf (Quick Learner, Quiz Master, Assignment Star, Consistent Learner) -->
      <div class="badges-quad-shelf">
        
        <!-- Tile 1: Quick Learner -->
        <div class="badge-tile-card" onclick="window.lmsOpenBadgeDetails('quick_learner')">
          ${GRAPHICS.badgeQuickLearner ? GRAPHICS.badgeQuickLearner(64) : '🚀'}
          <div class="badge-tile-title">Quick Learner</div>
          <span style="font-size: 11px; color: #64748B; margin-top: 4px;">+50 Points</span>
        </div>

        <!-- Tile 2: Quiz Master -->
        <div class="badge-tile-card" onclick="window.lmsOpenBadgeDetails('quiz_master')">
          ${GRAPHICS.badgeQuizMaster ? GRAPHICS.badgeQuizMaster(64) : '🏆'}
          <div class="badge-tile-title">Quiz Master</div>
          <span style="font-size: 11px; color: #64748B; margin-top: 4px;">+50 Points</span>
        </div>

        <!-- Tile 3: Assignment Star -->
        <div class="badge-tile-card" onclick="window.lmsOpenBadgeDetails('asg_star')">
          ${GRAPHICS.badgeAssignmentStar ? GRAPHICS.badgeAssignmentStar(64) : '⭐'}
          <div class="badge-tile-title">Assignment Star</div>
          <span style="font-size: 11px; color: #64748B; margin-top: 4px;">+50 Points</span>
        </div>

        <!-- Tile 4: Consistent Learner -->
        <div class="badge-tile-card" onclick="window.lmsOpenBadgeDetails('consistent_learner')">
          ${GRAPHICS.badgeConsistentLearner ? GRAPHICS.badgeConsistentLearner(64) : '🔥'}
          <div class="badge-tile-title">Consistent Learner</div>
          <span style="font-size: 11px; color: #64748B; margin-top: 4px;">+50 Points</span>
        </div>

      </div>

      <!-- Progress to Next Achievement Card -->
      <div style="margin-top: 28px;">
        <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">
          Progress to Next Achievement
        </h3>

        <div class="progress-next-ach-card">
          <!-- Bullseye / Target Icon -->
          <div style="flex-shrink: 0;">
            ${GRAPHICS.targetBullseye ? GRAPHICS.targetBullseye(54) : `<div style="font-size: 38px;">🎯</div>`}
          </div>

          <!-- Title and Description -->
          <div style="flex: 1;">
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Chapter Explorer</div>
            <div style="font-size: 13.5px; color: #64748B; margin-top: 2px;">
              Complete 3 more chapters to unlock!
            </div>
          </div>

          <!-- Progress Bar & Count -->
          <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 170px;">
            <div style="font-size: 13.5px; font-weight: 800; color: #1E293B; margin-bottom: 6px;">
              7 / 10 Chapters
            </div>
            <div class="lu-bar-track" style="width: 170px; height: 8px; background: #E2E8F0; border-radius: 999px; overflow: hidden;">
              <div class="lu-bar-fill" style="width: 70%; height: 100%; background: #10B981; border-radius: 999px;"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 2. BADGES TAB
  else if (activeTab === "badges") {
    const allBadgesList = Object.values(badgesData);

    contentHtml = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
        <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0;">
          All Badges (${allBadgesList.filter(b => b.earned).length} Unlocked)
        </h3>
        <span style="font-size: 13px; color: #64748B;">Click any badge to view criteria & rewards</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
        ${allBadgesList.map(b => `
          <div 
            class="badge-tile-card" 
            onclick="window.lmsOpenBadgeDetails('${b.id}')"
            style="${b.earned ? '' : 'opacity: 0.65; background: #F8FAFC;'}"
          >
            ${b.iconRenderer(62)}
            <div class="badge-tile-title">${b.title}</div>
            <span style="font-size: 11px; color: ${b.earned ? '#059669' : '#64748B'}; margin-top: 4px; font-weight: 700;">
              ${b.earned ? '✔ Earned (+50 pts)' : '🔒 Locked'}
            </span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 3. MILESTONES TAB (Screen 4)
  else if (activeTab === "milestones") {
    contentHtml = `
      <div style="margin-bottom: 16px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">
          Learning Milestones
        </h3>
        <p style="font-size: 13.5px; color: #64748B; margin-top: 2px;">
          Reach major learning targets across chapters, streaks, and quizzes to earn extra badges.
        </p>
      </div>

      <div class="milestones-flow-list">
        ${milestonesList.map(m => {
          const pct = Math.round((m.current / m.total) * 100);
          return `
            <div class="milestone-item-row">
              <!-- Icon wrap -->
              <div class="milestone-icon-wrap" style="background: ${m.iconBg}; color: ${m.iconColor};">
                ${m.iconType === 'book' ? (ICONS.book ? ICONS.book(24) : '📖') : 
                  m.iconType === 'flame' ? (ICONS.flame ? ICONS.flame(24) : '🔥') : 
                  m.iconType === 'chart' ? (ICONS.chart ? ICONS.chart(24) : '📊') : 
                  (ICONS.clipboard ? ICONS.clipboard(24) : '📋')}
              </div>

              <!-- Title -->
              <div style="flex: 1;">
                <div style="font-size: 15px; font-weight: 800; color: #1E293B;">
                  ${m.title}
                </div>
              </div>

              <!-- Progress bar & ratio -->
              <div style="display: flex; align-items: center; gap: 14px; min-width: 220px;">
                <div class="lu-bar-track" style="flex: 1; height: 8px; background: #E2E8F0; border-radius: 999px; overflow: hidden;">
                  <div class="lu-bar-fill" style="width: ${pct}%; height: 100%; background: ${m.completed ? '#10B981' : '#7C3AED'}; border-radius: 999px;"></div>
                </div>
                <span style="font-size: 13.5px; font-weight: 800; color: #1E293B; min-width: 44px; text-align: right;">
                  ${m.current} / ${m.total}
                </span>
              </div>

              <!-- Status badge -->
              <div style="min-width: 110px; text-align: right;">
                <span class="badge-status ${m.completed ? 'badge-emerald' : 'badge-purple'}" style="font-size: 12.5px; font-weight: 800; padding: 5px 14px; border-radius: 999px;">
                  ${m.statusLabel}
                </span>
              </div>

            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // 4. CERTIFICATES TAB (Screen 5)
  else if (activeTab === "certificates") {
    contentHtml = `
      <div style="margin-bottom: 16px;">
        <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">
          My Certificates (${certificatesList.length})
        </h3>
        <p style="font-size: 13.5px; color: #64748B; margin-top: 2px;">
          Official certificates of achievement awarded for completing subjects and hitting mastery milestones.
        </p>
      </div>

      <div class="certificates-flow-list">
        ${certificatesList.map(cert => `
          <div class="certificate-item-row">
            <!-- Medallion Icon -->
            <div style="flex-shrink: 0;">
              ${GRAPHICS.certificateMedal ? GRAPHICS.certificateMedal(46) : `<div style="font-size: 34px;">🏅</div>`}
            </div>

            <!-- Title & Subtitle -->
            <div style="flex: 1;">
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">
                ${cert.title}
              </div>
              <div style="font-size: 13px; color: #64748B; margin-top: 2px;">
                ${cert.subtitle}
              </div>
            </div>

            <!-- Date -->
            <div style="font-size: 13.5px; font-weight: 600; color: #64748B; min-width: 100px;">
              ${cert.date}
            </div>

            <!-- View Action Button -->
            <div>
              <button 
                class="btn-primary" 
                onclick="window.lmsViewCertificateModal('${cert.id}')"
                style="padding: 7px 20px; font-size: 13px; border-radius: 999px; background: #7C3AED;"
              >
                View
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 5. LEADERBOARD TAB (Screen 6)
  else if (activeTab === "leaderboard") {
    const classData = leaderboardData[selectedClass] || leaderboardData["Class 7"];
    const podium = classData.podium;
    const runnersUp = classData.runnersUp;

    // Podium ranks order: Rank 2 on Left, Rank 1 in Center, Rank 3 on Right
    const rank2 = podium.find(p => p.rank === 2);
    const rank1 = podium.find(p => p.rank === 1);
    const rank3 = podium.find(p => p.rank === 3);

    contentHtml = `
      <!-- Leaderboard Header with Class Dropdown -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; margin: 0;">
            Class Leaderboard – This Month
          </h3>
          <p style="font-size: 13.5px; color: #64748B; margin-top: 2px;">
            See top performing students based on total points earned this month.
          </p>
        </div>

        <!-- Class Selector Dropdown -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <select 
            id="lb-class-selector" 
            onchange="window.lmsAchievementsSetClass(this.value)"
            style="background: #FFFFFF; border: 1.5px solid #CBD5E1; border-radius: 999px; padding: 7px 16px; font-size: 13.5px; font-weight: 700; color: #1E293B; outline: none; cursor: pointer;"
          >
            <option value="Class 7" ${selectedClass === "Class 7" ? "selected" : ""}>Class 7</option>
            <option value="Class 6" ${selectedClass === "Class 6" ? "selected" : ""}>Class 6</option>
            <option value="Class 8" ${selectedClass === "Class 8" ? "selected" : ""}>Class 8</option>
          </select>
        </div>
      </div>

      <!-- 3D Podium Container -->
      <div class="leaderboard-podium-wrap">
        
        <!-- Podium Rank 2 (Left) -->
        <div class="podium-col">
          <div class="podium-avatar-wrap">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: #6366F1; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; border: 3px solid #CBD5E1; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              ${rank2.initial}
            </div>
          </div>
          <div style="font-size: 14.5px; font-weight: 800; color: #1E293B; margin-bottom: 2px;">
            ${rank2.name} ${rank2.isUser ? '<span style="color:#7C3AED;">(You)</span>' : ''}
          </div>
          <div style="font-size: 12.5px; font-weight: 700; color: #64748B; margin-bottom: 12px;">
            ${rank2.points}
          </div>
          <div class="podium-step-pillar rank-2">
            <div class="podium-rank-num" style="color: #64748B;">2</div>
          </div>
        </div>

        <!-- Podium Rank 1 (Center with Golden Crown) -->
        <div class="podium-col" style="z-index: 2;">
          <div class="podium-avatar-wrap">
            <div class="podium-crown-badge">
              ${GRAPHICS.goldenCrown ? GRAPHICS.goldenCrown(32) : '👑'}
            </div>
            <div style="width: 74px; height: 74px; border-radius: 50%; background: #F59E0B; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; border: 3.5px solid #FDE047; box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35);">
              ${rank1.initial}
            </div>
          </div>
          <div style="font-size: 16px; font-weight: 900; color: #1E293B; margin-bottom: 2px;">
            ${rank1.name}
          </div>
          <div style="font-size: 13.5px; font-weight: 800; color: #D97706; margin-bottom: 12px;">
            ${rank1.points}
          </div>
          <div class="podium-step-pillar rank-1">
            <div class="podium-rank-num" style="color: #D97706;">1</div>
          </div>
        </div>

        <!-- Podium Rank 3 (Right) -->
        <div class="podium-col">
          <div class="podium-avatar-wrap">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: #EC4899; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; border: 3px solid #FDBA74; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              ${rank3.initial}
            </div>
          </div>
          <div style="font-size: 14.5px; font-weight: 800; color: #1E293B; margin-bottom: 2px;">
            ${rank3.name}
          </div>
          <div style="font-size: 12.5px; font-weight: 700; color: #64748B; margin-bottom: 12px;">
            ${rank3.points}
          </div>
          <div class="podium-step-pillar rank-3">
            <div class="podium-rank-num" style="color: #EA580C;">3</div>
          </div>
        </div>

      </div>

      <!-- Runner-ups List (Rank 4, 5, etc.) -->
      <div class="leaderboard-runner-list">
        ${runnersUp.map(r => `
          <div class="leaderboard-row-card">
            <!-- Rank Badge -->
            <div class="leaderboard-rank-badge">
              ${r.rank}
            </div>

            <!-- Avatar -->
            <div style="width: 38px; height: 38px; border-radius: 50%; background: ${r.color}; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; flex-shrink: 0;">
              ${r.initial}
            </div>

            <!-- Name -->
            <div style="flex: 1; font-size: 14.5px; font-weight: 800; color: #1E293B;">
              ${r.name}
            </div>

            <!-- Points -->
            <div style="font-size: 14px; font-weight: 800; color: #1E293B;">
              ${r.points}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Render Full Screen
  container.innerHTML = `
    <div class="screen-container view-enter">
      
      <!-- Top Title -->
      <div style="margin-bottom: 20px;">
        <h1 style="font-size: 26px; font-weight: 800; color: #1E293B; letter-spacing: -0.5px; margin: 0 0 4px;">
          Achievements
        </h1>
        <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">
          Unlock badges, complete milestones, earn official certificates, and track your leaderboard standing.
        </p>
      </div>

      <!-- Tabs Bar -->
      ${renderTabsBar()}

      <!-- Dynamic Content Area -->
      <div id="achievements-tab-content">
        ${contentHtml}
      </div>

    </div>
  `;
}

if (typeof window !== "undefined") {
  window.renderAchievementsScreen = renderAchievementsScreen;
}


// ===== Module: js/screens/aiBuddy.js =====
// Screen 11: AI Study Buddy - Complete Flow (Classes 6 – 8) Student View
// Matching Reference Flow:
// 1. Dashboard -> Click AI Study Buddy (with Quick Actions)
// 2. AI Study Buddy Home -> Choose a Learning Option (6 Options: Ask Doubt, Explain Concept, Summarize Chapter, Generate Practice Quiz, Create Study Plan, Revise for Exam)
// 3. Ask Doubt -> Get Instant, Simple Explanation (Q: nucleus function, formatted points, thumbs up/down, Save, Share, Ask Another Doubt)
// 4. Summarize Chapter -> Select Subject & Chapter -> Generate Summary (Key points with checkmarks, Save to Notes)
// 5. Generate Practice Quiz -> Subject, Chapter, Questions, Difficulty -> Create Custom Quizzes
// 6. Study Plan -> Goal, Duration -> Personalized 7-Day Learning Schedule with interactive checklist
// 7. Revise for Exam -> Important Questions, PYQs, Quick Revision Notes, Formula Sheet
function renderAiBuddyScreen(container, state, app) {
  let view = state.aiBuddyView || "home"; // "home", "ask_doubt", "summarize", "quiz", "study_plan", "revise"

  // Pre-populate chat history if empty or not set
  if (!state.aiChatHistory || state.aiChatHistory.length === 0) {
    state.aiChatHistory = [
      {
        sender: "user",
        text: "What is the function of the nucleus in a cell?"
      },
      {
        sender: "bot",
        text: `The nucleus is the control center of the cell.\nIt:\n• Controls all the activities of the cell.\n• Contains the cell's genetic material (DNA).\n• Helps in growth, repair and reproduction.\n\nIn short, it directs and regulates the cell's functions.`,
        saved: false,
        liked: null
      }
    ];
  }

  // State for Summarize
  let selectedSubject = state.aiSelectedSubject || "Science";
  let selectedChapter = state.aiSelectedChapter || "The Cell";
  let summaryGenerated = state.aiSummaryGenerated !== undefined ? state.aiSummaryGenerated : true;

  // State for Quiz Generator
  let quizSubject = state.aiQuizSubject || "Mathematics";
  let quizChapter = state.aiQuizChapter || "Fractions";
  let quizNumQuestions = state.aiQuizNumQuestions || "10 Questions";
  let quizDifficulty = state.aiQuizDifficulty || "Medium";

  // State for Study Plan
  let planGoal = state.aiPlanGoal || "Chapter Revision";
  let planDuration = state.aiPlanDuration || "7 Days";
  if (!state.aiPlanCompletedDays) {
    state.aiPlanCompletedDays = [1];
  }
  let planCompletedDays = state.aiPlanCompletedDays;

  // Subject -> Chapters mapping
  const subjectChapters = {
    "Science": ["The Cell", "Nutrition in Plants", "Heat", "Acids, Bases and Salts", "Respiration in Organisms"],
    "Mathematics": ["Fractions", "Integers", "Algebraic Expressions", "Lines and Angles", "Data Handling"],
    "Social Science": ["Our Environment", "Inside Our Earth", "The Delhi Sultans", "The Mughal Empire"],
    "English": ["Tenses", "Nouns & Pronouns", "Active and Passive Voice", "Direct and Indirect Speech"],
    "Tamil": ["இலக்கியம் (Literature)", "எழுத்துக்கள் வகைகள் (Letter Types)", "கவிதை பேழை (Poetry)"]
  };

  // Summaries dictionary
  const chapterSummaries = {
    "The Cell": [
      "The cell is the basic structural and functional unit of life.",
      "It has three primary parts: cell membrane, cytoplasm, and nucleus.",
      "The nucleus holds genetic material (DNA) and directs all cellular activities.",
      "Plant cells contain a rigid cell wall and chloroplasts; animal cells do not.",
      "Mitochondria are the powerhouses that generate cellular energy (ATP)."
    ],
    "Nutrition in Plants": [
      "Autotrophs like green plants prepare food via photosynthesis using sunlight, chlorophyll, CO₂, and water.",
      "Chlorophyll in leaves captures solar radiant energy.",
      "Heterotrophs and parasites (like Cuscuta) absorb nutrition from host organisms.",
      "Insectivorous plants (e.g., Pitcher plant) trap insects for supplemental nitrogen."
    ],
    "Heat": [
      "Heat is a form of thermal energy transferred due to temperature difference.",
      "Conduction is the primary mode of heat transfer in solids.",
      "Convection transfers heat through bulk movement in liquids and gases.",
      "Radiation does not require any physical medium and travels through a vacuum."
    ],
    "Fractions": [
      "A fraction represents part of a whole (Numerator / Denominator).",
      "Proper fractions have numerator < denominator; improper have numerator ≥ denominator.",
      "To add or subtract unlike fractions, first find the common denominator (LCM).",
      "To divide by a fraction, multiply by its reciprocal (invert and multiply)."
    ]
  };

  // Global Navigation Handlers
  window.lmsAiSetView = function(viewName) {
    state.aiBuddyView = viewName;
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiAskDoubt = function(doubtText) {
    if (!doubtText) return;
    state.aiChatHistory.push({ sender: "user", text: doubtText });
    state.aiBuddyView = "ask_doubt";
    renderAiBuddyScreen(container, state, app);

    // Generate intelligent contextual response
    setTimeout(() => {
      let botReply = "";
      const lower = doubtText.toLowerCase();

      if (lower.includes("cell") && lower.includes("nucleus")) {
        botReply = `The nucleus is the control center of the cell.\nIt:\n• Controls all the activities of the cell.\n• Contains the cell's genetic material (DNA).\n• Helps in growth, repair and reproduction.\n\nIn short, it directs and regulates the cell's functions.`;
      } else if (lower.includes("plant") && lower.includes("animal")) {
        botReply = `Great question! Here is how Plant and Animal Cells differ:\n• Plant cells have a rigid outer Cell Wall; animal cells have only a cell membrane.\n• Plant cells have green Chloroplasts for photosynthesis; animal cells do not.\n• Plant cells typically have one large central vacuole, while animal cells have small, temporary vacuoles.`;
      } else if (lower.includes("photosynthesis")) {
        botReply = `Photosynthesis is the process by which green plants make food.\nFormula: Carbon Dioxide + Water + Sunlight → Glucose + Oxygen.\nChlorophyll in the leaves absorbs sunlight energy to convert minerals into food for the plant.`;
      } else if (lower.includes("fraction") || lower.includes("divide")) {
        botReply = `To divide fractions, follow the "Keep, Change, Flip" rule:\n1. Keep the first fraction as it is.\n2. Change the division sign (÷) to multiplication (×).\n3. Flip the second fraction upside down (its reciprocal).\nExample: 1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3!`;
      } else if (lower.includes("heat") || lower.includes("conduction")) {
        botReply = `Heat flows from a hotter body to a colder body in 3 ways:\n1. Conduction (in solids through vibrating atoms).\n2. Convection (in liquids and gases via fluid currents).\n3. Radiation (via infrared waves without any medium, like Sun rays).`;
      } else {
        botReply = `That is an excellent study question on "${doubtText}"! 🌟\nHere are the key takeaways:\n• Remember the core definition and how it connects to everyday examples.\n• Break complex problems down into step-by-step principles.\n• You can also generate an instant Practice Quiz or Chapter Summary from the menu!`;
      }

      state.aiChatHistory.push({ sender: "bot", text: botReply, saved: false, liked: null });
      renderAiBuddyScreen(container, state, app);
    }, 600);
  };

  window.lmsAiToggleLike = function(idx, isLiked) {
    if (state.aiChatHistory[idx]) {
      state.aiChatHistory[idx].liked = isLiked;
      app.showToast(isLiked ? "Thanks for your feedback! 👍" : "We'll improve our answer! 👎");
      renderAiBuddyScreen(container, state, app);
    }
  };

  window.lmsAiSaveAnswer = function(idx) {
    if (state.aiChatHistory[idx]) {
      state.aiChatHistory[idx].saved = true;
      app.showToast("Answer saved to your Study Notes! 📝");
      renderAiBuddyScreen(container, state, app);
    }
  };

  window.lmsAiShareAnswer = function(idx) {
    triggerConfetti(1200);
    app.showToast("Answer copied to share with classmates! 🔗");
  };

  window.lmsAiAskAnother = function() {
    const inputEl = container.querySelector("#ai-bottom-input");
    if (inputEl) {
      inputEl.focus();
    } else {
      window.lmsAiSetView("home");
    }
  };

  window.lmsAiChangeSubject = function(subj) {
    state.aiSelectedSubject = subj;
    const chapters = subjectChapters[subj] || ["Chapter 1"];
    state.aiSelectedChapter = chapters[0];
    state.aiSummaryGenerated = false;
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiChangeChapter = function(ch) {
    state.aiSelectedChapter = ch;
    state.aiSummaryGenerated = false;
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiGenerateSummary = function() {
    state.aiSummaryGenerated = true;
    triggerConfetti(1500);
    app.showToast(`Summary generated for ${state.aiSelectedChapter || selectedChapter}! ✨`);
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiCreateQuiz = function() {
    triggerConfetti(2000);
    app.showModal(`
      <div style="text-align: center; padding: 24px 20px;">
        <div style="margin-bottom: 14px;">
          ${GRAPHICS.quizClipboard3D ? GRAPHICS.quizClipboard3D(84, 84) : '📝'}
        </div>
        <h2 style="font-size: 22px; font-weight: 800; color: #1E1B4B; margin-bottom: 6px;">
          AI Practice Quiz Ready!
        </h2>
        <p style="font-size: 14px; color: #64748B; margin-bottom: 18px;">
          Generated <strong>${quizNumQuestions}</strong> on <strong>${quizSubject} – ${quizChapter}</strong> (${quizDifficulty} Level).
        </p>
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 16px; padding: 14px 20px; text-align: left; margin-bottom: 24px; font-size: 13.5px; color: #334155;">
          <div>✔ <strong>Subject:</strong> ${quizSubject}</div>
          <div style="margin-top: 4px;">✔ <strong>Chapter:</strong> ${quizChapter}</div>
          <div style="margin-top: 4px;">✔ <strong>Target Time:</strong> 15 Minutes</div>
          <div style="margin-top: 4px;">✔ <strong>Points to Earn:</strong> +50 Points</div>
        </div>
        <div style="display: flex; justify-content: center; gap: 12px;">
          <button class="btn-primary" onclick="window.closeLmsModal(); window.appInstance.navigateTo('06');">
            Attempt Quiz Now →
          </button>
          <button class="btn-secondary" onclick="window.closeLmsModal()">
            Later
          </button>
        </div>
      </div>
    `);
  };

  window.lmsAiTogglePlanDay = function(dayNum) {
    if (!state.aiPlanCompletedDays) state.aiPlanCompletedDays = [];
    const idx = state.aiPlanCompletedDays.indexOf(dayNum);
    if (idx > -1) {
      state.aiPlanCompletedDays.splice(idx, 1);
    } else {
      state.aiPlanCompletedDays.push(dayNum);
      triggerConfetti(1000);
      app.showToast(`Day ${dayNum} marked as completed! 🎯`);
    }
    renderAiBuddyScreen(container, state, app);
  };

  window.lmsAiOpenReviseModal = function(topicType) {
    let title = "Important Questions";
    let desc = "Top high-yield questions for upcoming exams with detailed model answers.";
    let items = [
      "Q1: Explain the structure of plant cell vs animal cell with diagram. (5 Marks)",
      "Q2: What is the function of the nucleus and cell membrane? (3 Marks)",
      "Q3: Name the powerhouse of the cell and explain its role. (2 Marks)",
      "Q4: Define autotrophic nutrition with chemical equation of photosynthesis. (3 Marks)"
    ];

    if (topicType === "pyq") {
      title = "Previous Year Questions";
      desc = "Solved past 5 years question bank for Class 7 Science and Maths.";
      items = [
        "2025 Board Prep: Describe heat transfer through conduction, convection and radiation. (5 Marks)",
        "2024 Exam: Solve and simplify (3/4 ÷ 5/8) + (1/2 × 2/3). (3 Marks)",
        "2023 Exam: What are stomata? State two functions of stomata in leaves. (3 Marks)"
      ];
    } else if (topicType === "notes") {
      title = "Quick Revision Notes";
      desc = "High-speed concept cheat sheet for last-minute recall.";
      items = [
        "Cell: Structural unit of life discovered by Robert Hooke.",
        "Nucleus: Contains chromosomes with DNA (genes).",
        "Heat: Thermal energy flows from high temp to low temp.",
        "Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂."
      ];
    } else if (topicType === "formula") {
      title = "Formula Sheet";
      desc = "All essential mathematical formulas, science laws, and units.";
      items = [
        "Fractions: a/b ÷ c/d = a/b × d/c",
        "Speed = Distance / Time (Unit: m/s or km/h)",
        "Temperature conversion: °F = (°C × 9/5) + 32",
        "Perimeter of Rectangle = 2 × (Length + Breadth); Area = L × B"
      ];
    }

    app.showModal(`
      <div style="padding: 24px 20px;">
        <h2 style="font-size: 22px; font-weight: 800; color: #1E1B4B; margin-bottom: 6px;">${title}</h2>
        <p style="font-size: 13.5px; color: #64748B; margin-bottom: 18px;">${desc}</p>
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 16px; padding: 18px; margin-bottom: 22px;">
          ${items.map(it => `
            <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; font-size: 14px; color: #1E293B;">
              <span style="color: #7C3AED; font-weight: 800;">•</span>
              <div style="line-height: 1.45;">${it}</div>
            </div>
          `).join('')}
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 12px;">
          <button class="btn-primary" onclick="appInstance.showToast('Downloaded PDF Study Notes! 📄'); window.closeLmsModal();">
            Download PDF
          </button>
          <button class="btn-secondary" onclick="window.closeLmsModal()">
            Close
          </button>
        </div>
      </div>
    `);
  };

  // Helper: Back Button & Header
  function renderHeader(titleText, showBack = true) {
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          ${showBack ? `
            <button 
              class="btn-secondary" 
              onclick="window.lmsAiSetView('home')" 
              style="border-radius: 999px; padding: 8px 18px; font-weight: 700;"
            >
              ← Back
            </button>
          ` : ''}
          <h1 style="font-size: 24px; font-weight: 800; color: #1E293B; margin: 0; letter-spacing: -0.5px;">
            ${titleText}
          </h1>
        </div>
        <div class="stat-pill stat-pill-points" style="font-size: 13px; padding: 6px 14px;">
          ${ICONS.robot(20)} 24×7 AI Tutor Active
        </div>
      </div>
    `;
  }

  // Helper: Bottom Chat Input Bar (Screen 2 & 3)
  function renderBottomInputBar(placeholder = "Type your question here...") {
    return `
      <div class="ai-bottom-chat-bar">
        <input 
          type="text" 
          id="ai-bottom-input" 
          class="ai-bottom-chat-input" 
          placeholder="${placeholder}"
          onkeydown="if(event.key === 'Enter') { window.lmsAiAskDoubt(this.value); this.value = ''; }"
        />
        <button 
          class="ai-mic-btn" 
          title="Voice Doubt Input"
          onclick="appInstance.showToast('Listening... Speak your doubt clearly 🎙️');"
        >
          ${ICONS.mic ? ICONS.mic(18) : '🎙️'}
        </button>
        <button 
          class="ai-send-round-btn" 
          title="Send Doubt"
          onclick="const el = document.getElementById('ai-bottom-input'); if(el && el.value.trim()){ window.lmsAiAskDoubt(el.value); el.value = ''; }"
        >
          ${GRAPHICS.sendButtonIcon(38)}
        </button>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 1: HOME (Panel 2 - Choose a Learning Option)
  // =========================================================================
  if (view === "home") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header -->
        ${renderHeader("AI Study Buddy", false)}

        <!-- Greeting Hero Banner (Panel 2) -->
        <div class="ai-greeting-hero-banner">
          ${GRAPHICS.aiRobotAvatarCircle ? GRAPHICS.aiRobotAvatarCircle(68) : `<div style="font-size: 42px;">🤖</div>`}
          <div class="ai-speech-bubble-hero" style="flex: 1;">
            <div style="font-size: 17px; font-weight: 800; color: #1E1B4B; margin-bottom: 4px;">
              Hi Sowmiya! 👋
            </div>
            <div style="font-size: 14.5px; color: #475569; font-weight: 600;">
              I'm your AI Study Buddy. How can I help you today?
            </div>
          </div>
        </div>

        <!-- 6 Learning Option Cards Grid (Screen 2) -->
        <div class="ai-options-grid-shelf">
          
          <!-- Option 1: Ask a Doubt -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('ask_doubt')">
            <div class="ai-option-icon-box" style="background: #F3E8FF; color: #7C3AED;">
              ${ICONS.chatBubble ? ICONS.chatBubble(40) : '💬'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Ask a Doubt</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Instant simple answers</div>
            </div>
          </div>

          <!-- Option 2: Explain Concept -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('ask_doubt')">
            <div class="ai-option-icon-box" style="background: #FEF3C7; color: #D97706;">
              ${ICONS.lightbulb ? ICONS.lightbulb(40) : '💡'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Explain Concept</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Step-by-step analogies</div>
            </div>
          </div>

          <!-- Option 3: Summarize a Chapter -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('summarize')">
            <div class="ai-option-icon-box" style="background: #DCFCE7; color: #059669;">
              ${ICONS.document ? ICONS.document(40) : '📄'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Summarize a Chapter</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Key points in bullets</div>
            </div>
          </div>

          <!-- Option 4: Generate Practice Quiz -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('quiz')">
            <div class="ai-option-icon-box lu-plain-icon-box">
              ${GRAPHICS.quizPencilIcon(40)}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Generate Practice Quiz</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Custom practice tests</div>
            </div>
          </div>

          <!-- Option 5: Create Study Plan -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('study_plan')">
            <div class="ai-option-icon-box lu-plain-icon-box">
              ${GRAPHICS.calendarIcon(40)}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Create Study Plan</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">Target-based schedules</div>
            </div>
          </div>

          <!-- Option 6: Revise for Exam -->
          <div class="ai-option-tile-card" onclick="window.lmsAiSetView('revise')">
            <div class="ai-option-icon-box" style="background: #FFEDD5; color: #EA580C;">
              ${ICONS.star ? ICONS.star(40) : '⭐'}
            </div>
            <div>
              <div style="font-size: 15.5px; font-weight: 800; color: #1E293B;">Revise for Exam</div>
              <div style="font-size: 12.5px; color: #64748B; margin-top: 2px;">PYQs, Formulas & Notes</div>
            </div>
          </div>

        </div>

        <!-- Bottom Input Bar -->
        ${renderBottomInputBar("Type your question here...")}

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 2: ASK DOUBT (Panel 3 - Instant Simple Explanation)
  // =========================================================================
  if (view === "ask_doubt") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("AI Study Buddy", true)}

        <!-- Chat Conversation Thread (Panel 3) -->
        <div class="ai-chat-thread-v2" id="ai-chat-thread-box">
          ${state.aiChatHistory.map((msg, idx) => {
            if (msg.sender === "user") {
              return `
                <div class="ai-msg-row-user">
                  <div class="ai-msg-bubble-user">
                    ${msg.text}
                  </div>
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #6366F1; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    SS
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="ai-msg-row-bot">
                  ${GRAPHICS.aiRobotAvatarCircle ? GRAPHICS.aiRobotAvatarCircle(44) : `<div style="font-size: 32px;">🤖</div>`}
                  
                  <div class="ai-msg-card-bot">
                    <div style="font-size: 15px; color: #1E293B; line-height: 1.65; white-space: pre-line;">
                      ${msg.text}
                    </div>

                    <!-- Bottom Action Toolbar -->
                    <div class="ai-bot-action-toolbar">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <button 
                          class="ai-action-btn-pill" 
                          onclick="window.lmsAiToggleLike(${idx}, true)"
                          style="${msg.liked === true ? 'background:#DCFCE7; color:#059669; border-color:#86EFAC;' : ''}"
                        >
                          ${ICONS.thumbsUp ? ICONS.thumbsUp(14) : '👍'} Helpful
                        </button>
                        <button 
                          class="ai-action-btn-pill" 
                          onclick="window.lmsAiToggleLike(${idx}, false)"
                          style="${msg.liked === false ? 'background:#FEE2E2; color:#DC2626; border-color:#FECACA;' : ''}"
                        >
                          ${ICONS.thumbsDown ? ICONS.thumbsDown(14) : '👎'}
                        </button>
                        <button 
                          class="ai-action-btn-pill" 
                          onclick="window.lmsAiSaveAnswer(${idx})"
                          style="${msg.saved ? 'background:#EDE9FE; color:#7C3AED; border-color:#DDD6FE;' : ''}"
                        >
                          ${ICONS.save ? ICONS.save(14) : '💾'} ${msg.saved ? 'Saved' : 'Save'}
                        </button>
                        <button 
                          class="ai-action-btn-pill" 
                          onclick="window.lmsAiShareAnswer(${idx})"
                        >
                          ${ICONS.share ? ICONS.share(14) : '↗'} Share
                        </button>
                      </div>

                      <div>
                        <button 
                          class="btn-primary" 
                          onclick="window.lmsAiAskAnother()"
                          style="border-radius: 999px; padding: 7px 18px; font-size: 13px;"
                        >
                          Ask Another Doubt
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              `;
            }
          }).join('')}
        </div>

        <!-- Bottom Input Bar -->
        ${renderBottomInputBar("Ask another question or follow-up doubt...")}

      </div>
    `;

    // Auto scroll chat to bottom
    const box = container.querySelector("#ai-chat-thread-box");
    if (box) box.scrollTop = box.scrollHeight;
    return;
  }

  // =========================================================================
  // VIEW 3: SUMMARIZE CHAPTER (Panel 4)
  // =========================================================================
  if (view === "summarize") {
    const chapters = subjectChapters[selectedSubject] || ["The Cell"];
    const summaryPoints = chapterSummaries[selectedChapter] || chapterSummaries["The Cell"];

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("Summarize Chapter", true)}

        <!-- Form Card (Panel 4) -->
        <div class="ai-form-card-v2">
          
          <!-- Select Subject -->
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 8px;">
              Select Subject
            </label>
            <select 
              class="ai-select-styled"
              onchange="window.lmsAiChangeSubject(this.value)"
            >
              <option value="Science" ${selectedSubject === "Science" ? "selected" : ""}>🧪 Science</option>
              <option value="Mathematics" ${selectedSubject === "Mathematics" ? "selected" : ""}>🔢 Mathematics</option>
              <option value="Social Science" ${selectedSubject === "Social Science" ? "selected" : ""}>🌍 Social Science</option>
              <option value="English" ${selectedSubject === "English" ? "selected" : ""}>📖 English</option>
              <option value="Tamil" ${selectedSubject === "Tamil" ? "selected" : ""}>தமிழ் Tamil</option>
            </select>
          </div>

          <!-- Select Chapter -->
          <div style="margin-bottom: 24px;">
            <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 8px;">
              Select Chapter
            </label>
            <select 
              class="ai-select-styled"
              onchange="window.lmsAiChangeChapter(this.value)"
            >
              ${chapters.map(ch => `
                <option value="${ch}" ${selectedChapter === ch ? "selected" : ""}>${ch}</option>
              `).join('')}
            </select>
          </div>

          <!-- Action Button -->
          <div style="display: flex; justify-content: center;">
            <button 
              class="btn-primary" 
              onclick="window.lmsAiGenerateSummary()"
              style="padding: 12px 36px; font-size: 15px; border-radius: 999px;"
            >
              Generate Summary ✨
            </button>
          </div>

        </div>

        <!-- Generated Summary Result Card (Screen 4) -->
        ${summaryGenerated ? `
          <div class="ai-summary-result-box view-enter">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; border-bottom: 1px solid #F1F5F9; padding-bottom: 14px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; border-radius: 12px; background: #F3E8FF; color: #7C3AED; display: flex; align-items: center; justify-content: center;">
                  ${ICONS.document ? ICONS.document(22) : '📄'}
                </div>
                <div>
                  <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0;">
                    Chapter Summary – ${selectedChapter}
                  </h3>
                  <span style="font-size: 12.5px; color: #64748B;">Generated by AI Study Buddy for quick recall</span>
                </div>
              </div>

              <div style="display: flex; gap: 8px;">
                <button 
                  class="btn-secondary" 
                  onclick="appInstance.showToast('Summary saved to your study notes! 📝')"
                  style="border-radius: 999px; padding: 6px 16px; font-size: 12.5px;"
                >
                  Save to Notes 📝
                </button>
                <button 
                  class="btn-primary" 
                  onclick="appInstance.showToast('Downloading Summary PDF... 📄')"
                  style="border-radius: 999px; padding: 6px 16px; font-size: 12.5px;"
                >
                  Download PDF
                </button>
              </div>
            </div>

            <!-- Bullet Points with Green Checkmarks -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${summaryPoints.map(pt => `
                <div class="ai-summary-check-row">
                  <div style="width: 22px; height: 22px; border-radius: 50%; background: #DCFCE7; color: #10B981; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 13px; font-weight: 900; margin-top: 1px;">
                    ✔
                  </div>
                  <div>${pt}</div>
                </div>
              `).join('')}
            </div>

          </div>
        ` : ''}

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 4: GENERATE PRACTICE QUIZ (Panel 5)
  // =========================================================================
  if (view === "quiz") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("Generate Practice Quiz", true)}

        <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; align-items: center;">
          
          <!-- Form Card (Panel 5) -->
          <div class="ai-form-card-v2" style="margin-bottom: 0;">
            
            <!-- Subject Field -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                Subject
              </label>
              <select 
                class="ai-select-styled" 
                id="ai-quiz-subj-sel"
                onchange="window.renderAiBuddyScreen(container, { ...state, aiQuizSubject: this.value }, app)"
              >
                <option value="Mathematics" ${quizSubject === "Mathematics" ? "selected" : ""}>🔢 Mathematics</option>
                <option value="Science" ${quizSubject === "Science" ? "selected" : ""}>🧪 Science</option>
                <option value="Social Science" ${quizSubject === "Social Science" ? "selected" : ""}>🌍 Social Science</option>
                <option value="English" ${quizSubject === "English" ? "selected" : ""}>📖 English</option>
              </select>
            </div>

            <!-- Chapter Field -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                Chapter
              </label>
              <select class="ai-select-styled" id="ai-quiz-ch-sel">
                ${(subjectChapters[quizSubject] || ["Fractions"]).map(ch => `
                  <option value="${ch}" ${quizChapter === ch ? "selected" : ""}>${ch}</option>
                `).join('')}
              </select>
            </div>

            <!-- Number of Questions -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                No. of Questions
              </label>
              <select class="ai-select-styled" id="ai-quiz-num-sel">
                <option value="5 Questions" ${quizNumQuestions === "5 Questions" ? "selected" : ""}>5 Questions</option>
                <option value="10 Questions" ${quizNumQuestions === "10 Questions" ? "selected" : ""}>10 Questions</option>
                <option value="15 Questions" ${quizNumQuestions === "15 Questions" ? "selected" : ""}>15 Questions</option>
              </select>
            </div>

            <!-- Difficulty -->
            <div style="margin-bottom: 24px;">
              <label style="display: block; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                Difficulty
              </label>
              <select class="ai-select-styled" id="ai-quiz-diff-sel">
                <option value="Easy" ${quizDifficulty === "Easy" ? "selected" : ""}>🟢 Easy</option>
                <option value="Medium" ${quizDifficulty === "Medium" ? "selected" : ""}>🟡 Medium</option>
                <option value="Hard" ${quizDifficulty === "Hard" ? "selected" : ""}>🔴 Hard</option>
              </select>
            </div>

            <!-- Action Button -->
            <button 
              class="btn-primary" 
              onclick="window.lmsAiCreateQuiz()"
              style="width: 100%; padding: 12px; font-size: 15px; border-radius: 999px;"
            >
              Create Quiz
            </button>

          </div>

          <!-- 3D Graphic Presentation on Right -->
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px;">
            <div style="filter: drop-shadow(0 12px 24px rgba(124, 58, 237, 0.18));">
              ${GRAPHICS.quizClipboard3D ? GRAPHICS.quizClipboard3D(135, 135) : '📝'}
            </div>
            <h4 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 16px 0 4px;">
              Smart AI Question Generation
            </h4>
            <p style="font-size: 13px; color: #64748B; max-width: 280px; margin: 0; line-height: 1.45;">
              Automatically curates MCQs, True/False and conceptual questions matching your syllabus.
            </p>
          </div>

        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 5: STUDY PLAN (Panel 6)
  // =========================================================================
  if (view === "study_plan") {
    const totalDays = 7;
    const completedCount = planCompletedDays.length;
    const pct = Math.round((completedCount / totalDays) * 100);

    const planTasks = [
      { day: 1, title: "Day 1", desc: "Read: The Cell (Overview)" },
      { day: 2, title: "Day 2", desc: "Notes & Key Points" },
      { day: 3, title: "Day 3", desc: "Practice Quiz (10 Questions)" },
      { day: 4, title: "Day 4", desc: "Video Lesson: Cell Organelles" },
      { day: 5, title: "Day 5", desc: "Diagram Practice: Plant vs Animal Cell" },
      { day: 6, title: "Day 6", desc: "Chapter Worksheet & Doubt Clearing" },
      { day: 7, title: "Day 7", desc: "Weekly Challenge & Revision Test" }
    ];

    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("Study Plan", true)}

        <div style="margin-bottom: 20px;">
          <p style="font-size: 14px; color: #64748B; margin: 0;">
            Get a personalized study plan based on your goals.
          </p>
        </div>

        <!-- Setup Form Card (Panel 6) -->
        <div class="ai-form-card-v2" style="padding: 22px 28px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 18px; align-items: flex-end;">
            
            <!-- Goal -->
            <div>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                ${ICONS.target ? ICONS.target(16) : '🎯'} Goal
              </label>
              <select class="ai-select-styled">
                <option value="Chapter Revision">Chapter Revision</option>
                <option value="Exam Preparation">Exam Preparation</option>
                <option value="Daily Homework">Daily Homework</option>
                <option value="Concept Mastery">Concept Mastery</option>
              </select>
            </div>

            <!-- Duration -->
            <div>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 700; color: #475569; margin-bottom: 6px;">
                ${ICONS.calendar ? ICONS.calendar(16) : '📅'} Duration
              </label>
              <select class="ai-select-styled">
                <option value="7 Days">7 Days</option>
                <option value="3 Days">3 Days</option>
                <option value="14 Days">14 Days</option>
                <option value="30 Days">30 Days</option>
              </select>
            </div>

            <!-- Button -->
            <div>
              <button 
                class="btn-primary" 
                onclick="triggerConfetti(1500); appInstance.showToast('Study Plan refreshed for the next 7 days! 🎯');"
                style="padding: 12px 28px; border-radius: 999px;"
              >
                Create Study Plan
              </button>
            </div>

          </div>
        </div>

        <!-- Your 7-Day Study Plan Card -->
        <div class="ai-form-card-v2" style="margin-bottom: 0;">
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;">
            <h3 style="font-size: 17px; font-weight: 800; color: #1E293B; margin: 0;">
              Your 7-Day Study Plan
            </h3>
            <span style="font-size: 13px; font-weight: 800; color: #7C3AED;">
              ${completedCount} of ${totalDays} Days Completed (${pct}%)
            </span>
          </div>

          <!-- Progress Bar -->
          <div class="lu-bar-track" style="height: 8px; background: #E2E8F0; border-radius: 999px; overflow: hidden; margin-bottom: 20px;">
            <div class="lu-bar-fill" style="width: ${pct}%; height: 100%; background: #10B981; border-radius: 999px; transition: width 0.3s ease;"></div>
          </div>

          <!-- Daily Checklist Rows -->
          <div>
            ${planTasks.map(t => {
              const isDone = planCompletedDays.includes(t.day);
              return `
                <div 
                  class="ai-study-plan-row" 
                  onclick="window.lmsAiTogglePlanDay(${t.day})"
                  style="cursor: pointer; ${isDone ? 'background: #F0FDF4; border-color: #86EFAC;' : ''}"
                >
                  <input 
                    type="checkbox" 
                    ${isDone ? "checked" : ""} 
                    style="width: 18px; height: 18px; accent-color: #10B981; cursor: pointer;"
                  />
                  <div style="min-width: 60px; font-size: 14px; font-weight: 800; color: #1E293B;">
                    ${t.title}
                  </div>
                  <div style="flex: 1; font-size: 14px; color: ${isDone ? '#047857' : '#475569'}; font-weight: 600; text-decoration: ${isDone ? 'line-through' : 'none'};">
                    ${t.desc}
                  </div>
                  <div style="font-size: 12px; font-weight: 700; color: ${isDone ? '#059669' : '#94A3B8'};">
                    ${isDone ? '✔ Done' : 'Pending'}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

        </div>

      </div>
    `;
    return;
  }

  // =========================================================================
  // VIEW 6: REVISE FOR EXAM (Panel 7)
  // =========================================================================
  if (view === "revise") {
    container.innerHTML = `
      <div class="screen-container view-enter">
        
        <!-- Header with Back -->
        ${renderHeader("Revise for Exam", true)}

        <div style="margin-bottom: 22px;">
          <p style="font-size: 14.5px; color: #64748B; margin: 0;">
            Choose what you want to revise.
          </p>
        </div>

        <div style="display: flex; gap: 28px; align-items: center;">
          
          <!-- 4 Cards Grid (Panel 7) -->
          <div class="ai-revise-grid-quad">
            
            <!-- Card 1: Important Questions -->
            <div class="ai-revise-card" onclick="window.lmsAiOpenReviseModal('important')">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #FEF3C7; color: #D97706; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 900; margin-bottom: 14px;">
                ?
              </div>
              <h4 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">
                Important Questions
              </h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0;">
                High-yield exam questions with answers
              </p>
            </div>

            <!-- Card 2: Previous Year Questions -->
            <div class="ai-revise-card" onclick="window.lmsAiOpenReviseModal('pyq')">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #F3E8FF; color: #7C3AED; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 14px;">
                ${ICONS.clipboard ? ICONS.clipboard(26) : '📝'}
              </div>
              <h4 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">
                Previous Year Questions
              </h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0;">
                Past 5 years question papers
              </p>
            </div>

            <!-- Card 3: Quick Revision Notes -->
            <div class="ai-revise-card" onclick="window.lmsAiOpenReviseModal('notes')">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #EDE9FE; color: #6D28D9; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 14px;">
                ${ICONS.document ? ICONS.document(26) : '📚'}
              </div>
              <h4 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">
                Quick Revision Notes
              </h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0;">
                Rapid concept summary cards
              </p>
            </div>

            <!-- Card 4: Formula Sheet -->
            <div class="ai-revise-card" onclick="window.lmsAiOpenReviseModal('formula')">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #FFEDD5; color: #EA580C; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; margin-bottom: 14px;">
                π
              </div>
              <h4 style="font-size: 16px; font-weight: 800; color: #1E293B; margin: 0 0 6px;">
                Formula Sheet
              </h4>
              <p style="font-size: 12.5px; color: #64748B; margin: 0;">
                Key formulas, laws & definitions
              </p>
            </div>

          </div>

          <!-- 3D Graphic on Right -->
          <div style="flex-shrink: 0; text-align: center; padding: 20px 10px;">
            <div style="filter: drop-shadow(0 12px 24px rgba(124, 58, 237, 0.2));">
              ${GRAPHICS.quizClipboard3D ? GRAPHICS.quizClipboard3D(140, 140) : '📝'}
            </div>
            <div style="font-size: 14.5px; font-weight: 800; color: #1E1B4B; margin-top: 14px;">
              Ready for Tests & Exams!
            </div>
            <div style="font-size: 12px; color: #64748B; max-width: 200px; margin-top: 4px;">
              Revision tools updated weekly based on class progress.
            </div>
          </div>

        </div>

      </div>
    `;
    return;
  }
}

if (typeof window !== "undefined") {
  window.renderAiBuddyScreen = renderAiBuddyScreen;
}

// ===== Module: js/screens/liveClasses.js =====
// Screen 12: Live Classes
function renderLiveClassesScreen(container, state, app) {
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
                    ${cls.status === 'live' ? ICONS.liveDot(12) + ' Live Now' : cls.statusLabel}
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
                  <span style="font-size: 12px; color: #059669; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;">${ICONS.classmates(22)} ${cls.attendees} joined</span>
                  <button class="btn-primary join-live-btn" data-class-id="${cls.id}" style="padding: 8px 16px; white-space: nowrap; display: inline-flex; align-items: center; gap: 4px;">
                    Join Class <span class="lu-btn-icon-chip">${ICONS.video(18)}</span>
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
                <h3 style="font-size: 18px; font-weight: 800; color: #1E293B; display: flex; align-items: center; gap: 8px;">${ICONS.liveDot(16)} Science - The Cell (Live Class)</h3>
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

// ===== Module: js/screens/profile.js =====
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
function renderProfileScreen(container, state, app) {
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
    if (app.applyTheme) app.applyTheme(themeName);
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
      app.navigateTo("02"); // No login screen: return to Dashboard
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
            <div class="profile-option-icon-box lu-plain-icon-box">
              ${GRAPHICS.profileIcon(48)}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">My Details</div>
            <span style="font-size: 12.5px; color: #64748B;">Personal info & contacts</span>
          </div>

          <!-- 2. Academic Info -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('academic')">
            <div class="profile-option-icon-box lu-plain-icon-box">
              ${GRAPHICS.learningBookIcon(48)}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Academic Info</div>
            <span style="font-size: 12.5px; color: #64748B;">School, section & year</span>
          </div>

          <!-- 3. Preferences -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('preferences')">
            <div class="profile-option-icon-box" style="background: #FAF5FF; color: #7C3AED;">
              ${ICONS.sliders ? ICONS.sliders(48) : '⚙️'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Preferences</div>
            <span style="font-size: 12.5px; color: #64748B;">Theme, language & sync</span>
          </div>

          <!-- 4. Security -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('security')">
            <div class="profile-option-icon-box" style="background: #EDE9FE; color: #6D28D9;">
              ${ICONS.shield ? ICONS.shield(48) : '🛡️'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Security</div>
            <span style="font-size: 12.5px; color: #64748B;">Password, OTP & devices</span>
          </div>

          <!-- 5. Notifications -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('notifications')">
            <div class="profile-option-icon-box" style="background: #FAF5FF; color: #7C3AED;">
              ${ICONS.bell ? ICONS.bell(48) : '🔔'}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: #1E293B;">Notifications</div>
            <span style="font-size: 12.5px; color: #64748B;">Alerts & reminder settings</span>
          </div>

          <!-- 6. Help & Support -->
          <div class="profile-option-tile-card" onclick="window.lmsProfileSetView('help')">
            <div class="profile-option-icon-box" style="background: #E0F2FE; color: #0284C7;">
              ${ICONS.headset ? ICONS.headset(48) : '🎧'}
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
                ${ICONS.fromEmoji(f.icon, 26)}
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
              ${ICONS.key(26)}
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
              ${ICONS.devices(26)}
              <span style="font-size: 15px; font-weight: 800; color: #1E293B;">Login Activity</span>
            </div>
            <span style="font-size: 16px; color: #94A3B8;">❯</span>
          </div>

          <!-- Two-Factor Verification (OTP) -->
          <div class="profile-setting-row-card">
            <div style="display: flex; align-items: center; gap: 14px;">
              ${ICONS.shield(26)}
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
              ${ICONS.devices(26)}
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
                ${ICONS.fromEmoji(r.icon, 26)}
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
                ${ICONS.fromEmoji(h.icon, 26)}
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
                ${ICONS.document(24)}
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
                ${ICONS.shield(26)}
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

// ===== Module: js/app.js =====
// Learning Universe LMS - Master Application Controller & State Engine


// Screens

class LMSApp {
  constructor() {
    this.state = JSON.parse(JSON.stringify(LMS_DATA));
    const hashScreen = (typeof window !== 'undefined' && window.location && window.location.hash) 
      ? window.location.hash.replace('#', '') 
      : '';
    this.currentScreen = hashScreen || "02"; // Default to 02 Dashboard (Home Page)
    this.tourRunning = false;
    this.tourTimer = null;

    this.screensConfig = [
      { id: "02", name: "Dashboard", title: "02 Dashboard (Home)", fn: renderDashboardScreen, sidebarNav: "home" },
      { id: "03", name: "My Learning", title: "03 My Learning – Subjects", fn: renderSubjectsScreen, sidebarNav: "mylearning" },
      { id: "04", name: "Chapter List", title: "04 Subject – Chapter List", fn: renderChapterListScreen, sidebarNav: "mylearning" },
      { id: "05", name: "Video Lesson", title: "05 Video Lesson", fn: renderVideoLessonScreen, sidebarNav: "mylearning" },
      { id: "06", name: "Interactive Quiz", title: "06 Interactive Quiz", fn: renderQuizScreen, sidebarNav: "quizzes" },
      { id: "07", name: "Challenges", title: "07 Learning Challenges", fn: renderChallengesScreen, sidebarNav: "challenges" },
      { id: "08", name: "Assignments", title: "08 Assignments", fn: renderAssignmentsScreen, sidebarNav: "assignments" },
      { id: "09", name: "Progress", title: "09 Subject Progress (Analytics)", fn: renderProgressScreen, sidebarNav: "progress" },
      { id: "10", name: "Achievements", title: "10 Achievement Milestones", fn: renderAchievementsScreen, sidebarNav: "achievements" },
      { id: "11", name: "AI Study Buddy", title: "11 AI Study Buddy", fn: renderAiBuddyScreen, sidebarNav: "aibuddy" },
      { id: "12", name: "Live Classes", title: "12 Live Classes", fn: renderLiveClassesScreen, sidebarNav: "liveclasses" },
      { id: "13", name: "Profile", title: "13 Profile & Settings", fn: renderProfileScreen, sidebarNav: "profile" }
    ];

    window.appInstance = this;
    window.closeLmsModal = () => this.closeModal();
  }

  init() {
    // Restore saved theme (Light / Dark / System) before first paint
    let savedTheme = "light";
    try { savedTheme = localStorage.getItem("lu-theme") || "light"; } catch (e) {}
    this.state.student.theme = savedTheme;
    this.applyTheme(savedTheme);

    this.renderFlowNavigator();
    this.renderAppShell();
    this.navigateTo(this.currentScreen);
    this.bindGlobalEvents();
  }

  // Renders the Top Flow Navigator with all 13 screens overview bar
  renderFlowNavigator() {
    const nav = document.getElementById("flow-navigator");
    if (!nav) return;

    nav.innerHTML = `
      <div class="flow-navigator-wrapper">
        <div class="flow-navigator-inner">
          
          <div class="flow-brand-badge">
            <img src="assets/logo-clean.png" alt="Logo" style="height: 22px; width: auto; object-fit: contain;" />
            <span>Classes 6–8 Desktop UI Flow</span>
          </div>

          <div class="flow-pill-list" id="flow-pill-list">
            ${this.screensConfig.map(s => `
              <button class="flow-pill-btn ${this.currentScreen === s.id ? 'active' : ''}" data-screen-id="${s.id}">
                <span class="flow-pill-num">${s.id}</span>
                <span>${s.name}</span>
              </button>
            `).join('')}
          </div>

          <div class="flow-nav-actions">
            <button class="flow-nav-arrow-btn" id="flow-prev-screen-btn" title="Previous Screen">
              ${ICONS.chevronLeft(14)} Prev
            </button>
            <button class="flow-nav-arrow-btn" id="flow-next-screen-btn" title="Next Screen">
              Next ${ICONS.chevronRight(14)}
            </button>
            <button class="tour-btn" id="flow-tour-btn">
              ▶ Auto Tour
            </button>
          </div>

        </div>
      </div>
    `;

    // Bind clicks to flow buttons
    nav.querySelectorAll(".flow-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-screen-id");
        this.navigateTo(id);
      });
    });

    nav.querySelector("#flow-prev-screen-btn")?.addEventListener("click", () => this.navigateRelative(-1));
    nav.querySelector("#flow-next-screen-btn")?.addEventListener("click", () => this.navigateRelative(1));
    nav.querySelector("#flow-tour-btn")?.addEventListener("click", () => this.toggleTour());
  }

  // Renders the Sidebar and Top Header shell
  renderAppShell() {
    const shell = document.getElementById("lms-shell-root");
    if (!shell) return;

    shell.innerHTML = `
      <div class="lms-app-shell" id="lms-shell">
        
        <!-- Sidebar Navigation -->
        <aside class="lms-sidebar" id="lms-sidebar">
          
          <!-- Brand Logo -->
          <a class="sidebar-logo" id="sidebar-brand-btn" style="padding: 10px 14px 22px 10px; display: flex; align-items: center; gap: 10px;">
            <img src="assets/dashboard/ui/logo.png" alt="Learning Universe LMS" class="sidebar-logo-img" />
          </a>

          <!-- Nav Items -->
          <ul class="sidebar-nav-list">
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="home" data-target-screen="02">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/nav_home.png" alt="" />
                <span>Home</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="mylearning" data-target-screen="03">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/nav_my_learning.png" alt="" />
                <span>My Learning</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="challenges" data-target-screen="07">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/nav_challenges.png" alt="" />
                <span>Challenges</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="quizzes" data-target-screen="06">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/nav_quizzes.png" alt="" />
                <span>Quizzes</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="assignments" data-target-screen="08">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/nav_assignments.png" alt="" />
                <span>Assignments</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="progress" data-target-screen="09">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/nav_progress.png" alt="" />
                <span>Progress</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="achievements" data-target-screen="10">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/nav_achievements.png" alt="" />
                <span>Achievements</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="aibuddy" data-target-screen="11">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/ai_study_buddy_robot.png" alt="" />
                <span>AI Study Buddy</span>
              </button>
            </li>
            <li class="sidebar-nav-item">
              <button class="sidebar-link" data-nav="profile" data-target-screen="13">
                <img class="sidebar-nav-img" src="assets/dashboard/ui/learning_profile.png" alt="" />
                <span>Profile</span>
              </button>
            </li>
          </ul>

        </aside>

        <!-- Main Viewport Area -->
        <main class="lms-main-viewport">
          
          <!-- Top Header Bar -->
          <header class="lms-top-header" id="lms-header">
            
            <!-- Search Bar -->
            <div class="header-search-box">
              <span class="search-icon-inside">${ICONS.search(18)}</span>
              <input 
                type="text" 
                class="search-input-field" 
                id="global-search-input" 
                placeholder="Search lessons, chapters, quizzes..." 
                autocomplete="off"
              />
              <div id="search-dropdown" style="display: none; position: absolute; top: 46px; left: 0; right: 0; background: #FFFFFF; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 1px solid #E2E8F0; padding: 8px; z-index: 999;"></div>
            </div>

            <!-- Stats Chips & Profile -->
            <div class="header-stats-group">
              
              <!-- 7 Day Streak Pill -->
              <div class="stat-pill stat-pill-streak" id="header-streak-pill" title="7 Day Active Streak!">
                ${ICONS.flame(20)}
                <span id="header-streak-text">7 Day Streak</span>
              </div>

              <!-- 240 Points Pill -->
              <div class="stat-pill stat-pill-points" id="header-points-pill" title="Total Reward Points">
                ${ICONS.star(20)}
                <span id="header-points-text">${this.state.student.points} Points</span>
              </div>

              <!-- Notifications Bell -->
              <div class="stat-pill" id="header-bell-btn" style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 7px 10px;" title="Notifications">
                <span style="position: relative; display: flex;">
                  ${ICONS.bell(24)}
                  <span style="position: absolute; top: -2px; right: -2px; width: 7px; height: 7px; background: #EF4444; border-radius: 50%;"></span>
                </span>
              </div>

              <!-- Profile Chip -->
              <div class="header-user-chip" id="header-user-btn" title="View Profile">
                <div class="user-avatar-mini">
                  <img src="${this.state.student.avatarUrl}" alt="${this.state.student.name}" />
                </div>
                <div class="user-meta-text">
                  <span class="user-name-title">${this.state.student.name}</span>
                  <span class="user-grade-sub">${this.state.student.grade}</span>
                </div>
                <span style="color: var(--text-muted);">${ICONS.chevronDown(14)}</span>
              </div>

            </div>

          </header>

          <!-- Breadcrumb Navigation (Clean breadcrumbs matching Reference: My Learning > Science) -->
          <div class="lms-global-breadcrumb" id="lms-global-breadcrumb" style="display: none; padding: 14px 28px 0 28px;"></div>

          <!-- Active Screen Content Stage -->
          <div id="screen-stage"></div>

        </main>

      </div>
    `;

    // Bind sidebar clicks
    shell.querySelectorAll(".sidebar-link").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetScreen = btn.getAttribute("data-target-screen");
        if (targetScreen) this.navigateTo(targetScreen);
      });
    });

    shell.querySelector("#sidebar-brand-btn")?.addEventListener("click", () => {
      this.navigateTo("02");
    });

    shell.querySelector("#header-user-btn")?.addEventListener("click", () => {
      this.navigateTo("13");
    });

    shell.querySelector("#header-streak-pill")?.addEventListener("click", () => {
      this.navigateTo("10");
    });

    shell.querySelector("#header-points-pill")?.addEventListener("click", () => {
      this.navigateTo("07");
    });

    shell.querySelector("#header-bell-btn")?.addEventListener("click", () => {
      this.showToast("🔔 1 upcoming live class in 2 hours: Science - The Cell");
    });

    this.bindSearchBox();
  }

  bindSearchBox() {
    const input = document.getElementById("global-search-input");
    const dropdown = document.getElementById("search-dropdown");
    if (!input || !dropdown) return;

    input.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        dropdown.style.display = "none";
        return;
      }

      const matches = [
        { title: "Science Chapter 2: The Cell", type: "Video Lesson", screen: "05" },
        { title: "Cell Division Quick Quiz", type: "Interactive Quiz", screen: "06" },
        { title: "Mathematics: Fractions & Decimals", type: "Subject", screen: "04" },
        { title: "Cell Diagram Homework Submission", type: "Assignment", screen: "08" },
        { title: "Live Class: Biology with Ms. Revathi", type: "Live Session", screen: "12" },
        { title: "Ask AI Buddy: Plant vs Animal Cells", type: "AI Tutor", screen: "11" }
      ].filter(item => item.title.toLowerCase().includes(q));

      if (matches.length === 0) {
        dropdown.innerHTML = `<div style="padding: 10px; font-size: 13px; color: #64748B;">No lessons matching "${q}"</div>`;
      } else {
        dropdown.innerHTML = matches.map(m => `
          <div class="search-result-row" data-screen="${m.screen}" style="padding: 8px 12px; border-radius: 8px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 13px; transition: background 0.15s;">
            <div>
              <strong style="color: #1E293B;">${m.title}</strong>
              <div style="font-size: 11px; color: var(--primary); font-weight: 700;">${m.type}</div>
            </div>
            ${ICONS.chevronRight(14)}
          </div>
        `).join('');

        dropdown.querySelectorAll(".search-result-row").forEach(row => {
          row.addEventListener("mouseenter", () => row.style.background = "#F1F5F9");
          row.addEventListener("mouseleave", () => row.style.background = "transparent");
          row.addEventListener("click", () => {
            const sc = row.getAttribute("data-screen");
            dropdown.style.display = "none";
            input.value = "";
            this.navigateTo(sc);
          });
        });
      }

      dropdown.style.display = "block";
    });

    document.addEventListener("click", (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  }

  // Navigate to any of the 13 screens
  navigateTo(screenId) {
    let config = this.screensConfig.find(s => s.id === screenId);
    if (!config) {
      // Unknown or removed screen (e.g. old #01 login link) -> fall back to Dashboard
      screenId = "02";
      config = this.screensConfig.find(s => s.id === screenId);
    }

    this.currentScreen = screenId;
    try {
      if (typeof window !== 'undefined' && window.location && window.location.hash !== '#' + screenId) {
        if (typeof history !== 'undefined' && history.replaceState) {
          history.replaceState(null, '', '#' + screenId);
        } else {
          window.location.hash = '#' + screenId;
        }
      }
    } catch (e) {
      // Ignore security restriction on file:// protocol
    }
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update Top Flow Navigator buttons
    document.querySelectorAll(".flow-pill-btn").forEach(btn => {
      const id = btn.getAttribute("data-screen-id");
      if (id === screenId) {
        btn.classList.add("active");
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        btn.classList.remove("active");
      }
    });

    // Update Sidebar & Header visibility
    const sidebar = document.getElementById("lms-sidebar");
    const header = document.getElementById("lms-header");

    if (config.isStandalone) {
      if (sidebar) sidebar.style.display = "none";
      if (header) header.style.display = "none";
    } else {
      if (sidebar) sidebar.style.display = "flex";
      if (header) header.style.display = "flex";
    }

    // Update active state in sidebar
    if (config.sidebarNav) {
      document.querySelectorAll(".sidebar-link").forEach(link => {
        const nav = link.getAttribute("data-nav");
        if (nav === config.sidebarNav) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }

    // Render the screen
    const stage = document.getElementById("screen-stage");
    if (stage) {
      stage.innerHTML = "";
      config.fn(stage, this.state, this);
    }

    // Update global breadcrumbs
    this.updateBreadcrumb(screenId);
  }

  updateBreadcrumb(screenId) {
    const bc = document.getElementById("lms-global-breadcrumb");
    if (!bc) return;

    if (screenId === "02" || screenId === "04") {
      bc.style.display = "none";
      bc.innerHTML = "";
      return;
    }

    const currentSubId = this.state.activeSubjectId || "science";
    const subObj = this.state.subjects.find(s => s.id === currentSubId) || this.state.subjects[0];
    const subTitle = subObj ? subObj.title : "Science";

    let crumbs = [];
    if (screenId === "03") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "My Learning", active: true }
      ];
    } else if (screenId === "04") {
      crumbs = [
        { label: "My Learning", screen: "03" },
        { label: subTitle, active: true }
      ];
    } else if (screenId === "05") {
      crumbs = [
        { label: "My Learning", screen: "03" },
        { label: subTitle, screen: "04" },
        { label: "Video Lesson", active: true }
      ];
    } else if (screenId === "06") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Quizzes", active: true }
      ];
    } else if (screenId === "07") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Challenges", active: true }
      ];
    } else if (screenId === "08") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Assignments", active: true }
      ];
    } else if (screenId === "09") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Progress", active: true }
      ];
    } else if (screenId === "10") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Achievements", active: true }
      ];
    } else if (screenId === "11") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "AI Study Buddy", active: true }
      ];
    } else if (screenId === "12") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Live Classes", active: true }
      ];
    } else if (screenId === "13") {
      crumbs = [
        { label: "Home", screen: "02" },
        { label: "Profile", active: true }
      ];
    }

    bc.innerHTML = `
      <div class="lms-breadcrumb-nav" style="margin-bottom: 0;">
        ${crumbs.map((c, i) => {
          if (c.active) {
            return `<span class="crumb-active">${c.label}</span>`;
          }
          return `
            <span class="crumb-link" data-screen-target="${c.screen}">${c.label}</span>
            <span style="color: #94A3B8; font-weight: 400; margin: 0 4px;">&gt;</span>
          `;
        }).join('')}
      </div>
    `;

    bc.querySelectorAll(".crumb-link").forEach(link => {
      link.addEventListener("click", () => {
        const target = link.getAttribute("data-screen-target");
        if (target) this.navigateTo(target);
      });
    });

    bc.style.display = "block";
  }

  navigateRelative(offset) {
    const currentIndex = this.screensConfig.findIndex(s => s.id === this.currentScreen);
    let nextIndex = currentIndex + offset;
    if (nextIndex < 0) nextIndex = this.screensConfig.length - 1;
    if (nextIndex >= this.screensConfig.length) nextIndex = 0;
    this.navigateTo(this.screensConfig[nextIndex].id);
  }

  toggleTour() {
    const tourBtn = document.getElementById("flow-tour-btn");
    if (this.tourRunning) {
      this.tourRunning = false;
      if (this.tourTimer) clearInterval(this.tourTimer);
      if (tourBtn) {
        tourBtn.innerHTML = "▶ Auto Tour";
        tourBtn.style.background = "#10B981";
      }
      this.showToast("Tour paused");
    } else {
      this.tourRunning = true;
      if (tourBtn) {
        tourBtn.innerHTML = "⏹ Stop Tour";
        tourBtn.style.background = "#EF4444";
      }
      this.showToast("Auto-Tour started! Switching screens every 4 seconds...");

      let index = this.screensConfig.findIndex(s => s.id === this.currentScreen);
      this.tourTimer = setInterval(() => {
        index = (index + 1) % this.screensConfig.length;
        this.navigateTo(this.screensConfig[index].id);
      }, 4000);
    }
  }

  // Apply Light / Dark / System theme to the whole app
  applyTheme(theme) {
    const root = document.documentElement;
    const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    const isDark = theme === "dark" || (theme === "system" && mq && mq.matches);
    root.classList.toggle("lu-dark", !!isDark);
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("lu-theme", theme); } catch (e) {}

    // Follow the OS setting live while "System" is selected
    if (mq && !this._themeMqBound) {
      this._themeMqBound = true;
      const onChange = () => {
        if ((this.state.student.theme || "light") === "system") this.applyTheme("system");
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  updateHeaderStats() {
    const pointsEl = document.getElementById("header-points-text");
    if (pointsEl) pointsEl.innerText = `${this.state.student.points} Points`;
    const streakEl = document.getElementById("header-streak-text");
    if (streakEl) streakEl.innerText = `${this.state.student.streakDays} Day Streak`;
  }

  showToast(message, type = "info") {
    const existing = document.querySelector(".lms-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "lms-toast";
    toast.innerHTML = `
      <span>${type === 'success' ? '🎉' : '✨'}</span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  showModal(contentHtml) {
    this.closeModal();

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "lms-active-modal";
    overlay.innerHTML = `
      <div class="modal-dialog">
        <div style="display: flex; justify-content: flex-end; margin-bottom: -10px;">
          <button style="background: none; border: none; cursor: pointer; color: #94A3B8; padding: 4px;" onclick="window.closeLmsModal()">
            ${ICONS.close(20)}
          </button>
        </div>
        ${contentHtml}
      </div>
    `;

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) this.closeModal();
    });

    document.body.appendChild(overlay);
  }

  closeModal() {
    const active = document.getElementById("lms-active-modal");
    if (active) active.remove();
  }

  bindGlobalEvents() {
    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeModal();
    });

    // Hash change routing
    window.addEventListener("hashchange", () => {
      const h = window.location.hash.replace('#', '');
      if (h && h !== this.currentScreen) {
        this.navigateTo(h);
      }
    });

    // Global Interactive 3D Fanning Book Page Turning on Click
    document.addEventListener("click", (e) => {
      const book = e.target.closest(".anim-fanning-book-wrap");
      if (book) {
        book.classList.add("page-turning-active");
        setTimeout(() => {
          book.classList.remove("page-turning-active");
        }, 1250);
      }
    });
  }
}

// Bootstrap Application
document.addEventListener("DOMContentLoaded", () => {
  const app = new LMSApp();
  app.init();
});

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(() => {
    if (!window.appInstance) {
      const app = new LMSApp();
      app.init();
    }
  }, 10);
}

})();
