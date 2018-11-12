const { defaults } = require('jest-config');

module.exports = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'json', 'vue'],
    moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
    testPathIgnorePatterns: ['/node_modules/', '/tests-e2e/'],
    transform: { '^.+\\.js$': 'babel-jest', '^.+\\.vue$': 'vue-jest' }
};
