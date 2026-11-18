// Test clicking Attempt button
const fs = require('fs');

let currentView = null;
let currentHtml = '';

const container = {
  get innerHTML() { return currentHtml; },
  set innerHTML(val) { currentHtml = val; },
  querySelectorAll: (selector) => {
    if (selector === '.challenge-attempt-btn') {
      return [{
        addEventListener: (event, handler) => {
          console.log('Attached listener to .challenge-attempt-btn');
          // Simulate clicking attempt button!
          handler({ stopPropagation: () => {}, preventDefault: () => {} });
        },
        getAttribute: (attr) => attr === 'data-challenge-id' ? 'ch-sci-weekly' : null
      }];
    }
    return [];
  },
  querySelector: () => null
};

const state = {
  student: { points: 240 }
};

const app = {
  showToast: (msg) => console.log('Toast:', msg),
  showModal: () => {}
};

const code = fs.readFileSync('js/screens/challenges.js', 'utf8')
  .replace(/import .*/g, '')
  .replace(/export function renderChallengesScreen/, 'function renderChallengesScreen');

const ICONS = { document: () => '', clock: () => '', star: () => '', target: () => '' };
const GRAPHICS = {
  goldTrophy: () => '',
  goldStar: () => '',
  scienceFlaskIcon: () => '',
  mathsCalcIcon: () => '',
  socialGlobeIcon: () => '',
  englishBookIcon: () => '',
  tamilSubjectIcon: () => '',
  cell3D: () => ''
};
const triggerConfetti = () => {};

eval(code);

renderChallengesScreen(container, state, app);

console.log('After clicking attempt, is Challenge Details rendered?', currentHtml.includes('Challenge Details'));
console.log('Does it contain Weekly Science Challenge?', currentHtml.includes('Weekly Science Challenge'));
console.log('Does it contain Start Challenge?', currentHtml.includes('Start Challenge'));
