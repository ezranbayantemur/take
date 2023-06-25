module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@style': './src/style',
          '@components': './src/components',
          '@types': './src/types',
          '@mocks': './__mocks__',
          '@hooks': './src/hooks',
          '@route': './src/router/routes.ts',
        },
      },
    ],
  ],
};
