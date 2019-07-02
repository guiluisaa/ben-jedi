module.exports = {
  displayName: 'ben-jedi',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      diagnostics: false
    }
  },
  coverageReporters: ['json', 'html', 'text'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts|tsx)',
    '!<rootDir>/src/@types/**/*',
    '!<rootDir>/node_modules/**'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.ts',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['<rootDir>/tests/**/*.test.+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.tsx'],
  verbose: true,
  testURL: 'http://localhost/',
  snapshotSerializers: ['enzyme-to-json/serializer']
};
