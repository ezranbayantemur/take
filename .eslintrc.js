module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import'],
  ignorePatterns: ['_json_server', 'coverage'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'internal',
          'external',
          'builtin',
          'index',
          'sibling',
          'parent',
          'object',
          'type',
        ],
      },
    ],
  },
};
