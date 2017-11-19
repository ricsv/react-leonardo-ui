/* eslint-env node */

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

Object.defineProperty(global.document.body, 'clientWidth', {
  value: 500
});

Object.defineProperty(global.document.body, 'clientHeight', {
  value: 500
});
