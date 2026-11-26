// Quiz Question Bank for Learning Universe LMS (Classes 6-8)
// Each quiz has exactly as many questions as its "questionsCount".
// correct = index of the right option (0-based).

export const QUIZ_QUESTION_BANK = {
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
