module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'lib/*.js',
    '!lib/plugin.js'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/lib/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/lib/$1'
  },
  setupFilesAfterEnv: [
    './test/jest.setup.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
