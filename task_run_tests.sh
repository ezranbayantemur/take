#!/bin/bash

# Installing node dependencies
yarn install

# Running unit tests
osascript -e "tell app \"terminal\" to do script \"cd $(pwd) && yarn test\""

# Installing Pod dependencies
cd ios && pod install && cd ..

# Running the fake server on new terminal
osascript -e "tell app \"terminal\" to do script \"cd $(pwd)/_json_server && node server\""

# Starting Metro Bundler for Detox
osascript -e "tell app \"terminal\" to do script \"cd $(pwd) && yarn start --sourceExts mock.ts,mock.js,js,json,ts,tsx\""

# Build Detox for iOS 
yarn e2e-ios-build

# Running Detox test iOS 
osascript -e "tell app \"terminal\" to do script \"cd $(pwd) && yarn e2e-ios\""

# Build Detox for iOS 
yarn e2e-android-build

# Running Detox test Android
osascript -e "tell app \"terminal\" to do script \"cd $(pwd) && yarn e2e-android\""
