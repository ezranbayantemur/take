module.exports = {
  rootDir: '.',
  testMatch: [
    '<rootDir>/src/**/!(*.e2e).test.tsx',
    '<rootDir>/src/**/!(*.e2e).test.ts',
  ],
  verbose: true,
  preset: 'react-native',
};
