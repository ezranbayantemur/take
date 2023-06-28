# take!

🛒 Simple e-commerce app built with React Native.

|                             |                             |                             |                             |                              |
| :-------------------------: | :-------------------------: | :-------------------------: | :-------------------------: | :--------------------------: |
| ![img-1](doc/ss_1.png '1') | ![img-2](doc/ss_2.png '2') | ![img-3](doc/ss_3.png '3') | ![img-4](doc/ss_4.png '4') | ![img-5](doc/ss_5.png '5') |

**For run the project**
```bash
yarn run-app
```

- It will gonna install dependencies, run the fake server + bundler and run the app on both platforms automatically.

**For run the tests**
```bash
yarn run-tests
```
- It will gonna install dependencies, run the fake server + bundler and run the E2E Detox tests on both platforms automatically.

**If you wanna run manually**
  - `yarn install`, `bundle install` and under `ios` directory `pod install`
  - `yarn ios` and `yarn android` for running the app
  - `yarn e2e-ios-build` and `yarn e2e-android-build` before the running Detox tests
  - `yarn e2e-ios` and `yarn e2e-android` for the running Detox tests

Note: Detox test are configured to run on `iPhone 13` and `Pixel_4_API_29`. If you need to change them you can check the `.detoxrc.json` file.

You can find more information [on here](https://wix.github.io/Detox/docs/introduction/project-setup#step-3-device-configs)

## App Deep Links
```
npx uri-scheme open "takeapp://discover" --ios
npx uri-scheme open "takeapp://discover" --android

npx uri-scheme open "takeapp://products/jewelry" --ios
npx uri-scheme open "takeapp://products/jewelry" --android

npx uri-scheme open "takeapp://product/1001" --ios
npx uri-scheme open "takeapp://product/1001" --android
```

## [here 🎙️](https://www.youtube.com/watch?v=8hZLpHpSKwk)
