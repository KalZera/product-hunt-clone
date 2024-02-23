export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)?$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '^.+\\.svg$': 'jest-transform-stub',
  },
};
