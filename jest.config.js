/* eslint-env node */

const config = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
  ],
  setupFiles: [
    '<rootDir>/jest-setup.js',
  ],
};

module.exports = config;
