#!/bin/bash

# Installing node dependencies
yarn install

# Running the fake server on new terminal
osascript -e "tell app \"terminal\" to do script \"cd $(pwd)/_json_server && node server\""

# Installing Pod dependencies
cd ios && pod install && cd ..

# Starting Metro Bundler
osascript -e "tell app \"terminal\" to do script \"cd $(pwd) && yarn start --reset-cache\""


# Running on iOS
yarn run ios

# Running on Android
yarn run android
