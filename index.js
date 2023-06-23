/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import StorybookApp from './.storybook';
import {name as appName} from './app.json';

const isStorybook = false;

AppRegistry.registerComponent(appName, () =>
  isStorybook ? StorybookApp : App,
);
