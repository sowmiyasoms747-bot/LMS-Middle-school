// Challenge Question Bank for Learning Challenges (Classes 6-8)
// Each challenge has exactly as many questions as its "questionsCount".
// correct = index of the right option (0-based).

export const CHALLENGE_QUESTION_BANK = {
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
