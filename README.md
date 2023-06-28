# take!

🛒 Simple e-commerce app built with React Native.

**For run the project**
```bash
yarn run-app
```

- It will gonna install dependencies, run the fake server + bundler and run the app on both platforms.

**For run the tests**
```bash
yarn run-tests
```
- It will gonna install dependencies, run the fake server + bundler and run the E2E Detox tests on both platforms.

Note: Detox test are configured to run on "iPhone 13" and "Pixel_4_API_29". If you need to change them you can check the `.detoxrc.json` file.

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