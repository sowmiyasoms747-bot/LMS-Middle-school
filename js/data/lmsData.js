// LMS Data Store & Content for Learning Universe LMS (Classes 6-8)

export const LMS_DATA = {
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
