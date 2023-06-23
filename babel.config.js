module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@style': './src/style',
          '@components': './src/components',
          '@route': './src/router/routes.ts',
        },
      },
    ],
  ],
};
