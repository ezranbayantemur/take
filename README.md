# take!

🛒 Simple e-commerce app built with React Native.

|                             |                             |                             |                             |                              |
| :-------------------------: | :-------------------------: | :-------------------------: | :-------------------------: | :--------------------------: |
| ![img-1](doc/ss_1.png '1') | ![img-2](doc/ss_2.png '2') | ![img-3](doc/ss_3.png '3') | ![img-4](doc/ss_4.png '4') | ![img-5](doc/ss_5.png '5') |

**For running the project**
```bash
yarn run-app
```

- It will gonna install dependencies, run the fake server + bundler and run the app on both platforms automatically.

**For running the tests**
```bash
yarn run-tests
```
- It will gonna install dependencies, run the fake server + bundler and run the E2E Detox tests on both platforms automatically.

**If you wanna run manually**
  - `yarn install`, `bundle install` and under `ios` directory `pod install`
  - `yarn ios` and `yarn android` for running the app
  - `yarn e2e-ios-build` and `yarn e2e-android-build` before the running Detox tests
  - `yarn e2e-ios` and `yarn e2e-android` for the running Detox tests

> Note: Detox test are configured to run on `iPhone 13` and `Pixel_4_API_29`. If you need to change them you can check the `.detoxrc.json` file.

You can find more information [on here](https://wix.github.io/Detox/docs/introduction/project-setup#step-3-device-configs)

**For running the Storybook app**
- Comment the main app import and uncomment the Storybook import on `index.js` file
```js
import {AppRegistry} from 'react-native';
// import App from './src/App';
import App from './.storybook';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```
- Restart the Metro Bundler
```bash
yarn start
```
- Run the app on both platforms
```bash
yarn ios
yarn android
```
> Note: Main app import and storybook app import cannot be active at the same time on `index.js` file. Redux gives an error when both are active. Also metro bundler should restart again when app import changes because it caches the previous import. 

## App Deep Links
```
npx uri-scheme open "takeapp://discover" --ios
npx uri-scheme open "takeapp://discover" --android

npx uri-scheme open "takeapp://products/jewelry" --ios
npx uri-scheme open "takeapp://products/jewelry" --android

npx uri-scheme open "takeapp://product/1001" --ios
npx uri-scheme open "takeapp://product/1001" --android
```

## File structure
```
├── _json_server # Mock server for the app
├── .storybook # Storybook app
├── src
│   ├── components # Reusable UI components
│   ├── container # Wrapper container components
│   ├── enums # Enum files for prevent using magic strings
│   ├── helpers # Generic helper functions
│   ├── hooks # Custom hooks
│   ├── pages # Screen components
│   ├── redux # State manager
│   ├── router # Navigation structure
│   ├── styles # Generic style files to ensure consistency in style definitions and prevent using magic numbers
│   ├── types # Generic type definitions
│   └── utils # Utility functions
```

## [here 🎙️](https://www.youtube.com/watch?v=8hZLpHpSKwk)
