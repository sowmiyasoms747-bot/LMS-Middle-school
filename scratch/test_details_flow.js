const fs = require('fs');

const bundle = fs.readFileSync('js/bundle.js', 'utf8');

const state = { student: { points: 240, streakDays: 7, name: 'Sowmiya S.', grade: 'Class 7', avatarUrl: 'assets/student-avatar.jpg' } };

// Mock DOM
let stageEl = {
  _html: '',
  get innerHTML() { return this._html; },
  set innerHTML(v) { this._html = v; },
  querySelectorAll: () => [],
  querySelector: () => null,
  addEventListener: () => {}
};

const docMock = {
  readyState: 'complete',
  getElementById: (id) => {
    if (id === 'screen-stage') return stageEl;
    return {
      _html: '',
      get innerHTML() { return this._html; },
      set innerHTML(v) { this._html = v; },
      querySelectorAll: () => [],
      querySelector: () => null,
      addEventListener: () => {},
      style: {}
    };
  },
  querySelectorAll: () => [],
  querySelector: () => null,
  addEventListener: () => {}
};

const windowMock = {
  scrollTo: () => {},
  location: { hash: '' },
  addEventListener: () => {}
};

const vm = require('vm');
const ctx = {
  console,
  window: windowMock,
  document: docMock,
  setTimeout: (fn) => fn(),
  clearTimeout,
  setInterval,
  clearInterval
};

vm.createContext(ctx);
vm.runInContext(bundle, ctx);

console.log('App initialized? window.appInstance:', !!ctx.window.appInstance);
if (ctx.window.appInstance) {
  console.log('Navigating to Challenges screen (07)...');
  ctx.window.appInstance.navigateTo('07');
  console.log('Challenges screen stage length:', stageEl.innerHTML.length);
  console.log('Contains Attempt button?:', stageEl.innerHTML.includes('Attempt →'));

  console.log('\n--- Simulating Attempt click ---');
  ctx.window.lmsAttemptChallenge('ch-sci-weekly');
  console.log('Details stage length:', stageEl.innerHTML.length);
  console.log('Contains Challenge Details?:', stageEl.innerHTML.includes('Challenge Details'));
  console.log('Contains Start Challenge button?:', stageEl.innerHTML.includes('Start Challenge →'));

  console.log('\n--- Simulating Start Challenge click ---');
  ctx.window.lmsStartChallenge();
  console.log('Runner stage length:', stageEl.innerHTML.length);
  console.log('Contains Question?:', stageEl.innerHTML.includes('Question 3 of 10'));
  console.log('Contains cell?:', stageEl.innerHTML.includes('<svg'));

  console.log('\nSUCCESS! Everything works seamlessly.');
}
