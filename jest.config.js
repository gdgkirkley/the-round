const path = require('path');

module.exports = {
  setupFilesAfterEnv: [path.join(__dirname, './test/jest.setup.ts')],
  testPathIgnorePatterns: [path.join(__dirname, './.next')],
  moduleDirectories: ['node_modules', '.'],
};
