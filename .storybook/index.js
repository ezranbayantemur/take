import {getStorybookUI} from '@storybook/react-native';
import SplashScreen from 'react-native-splash-screen';

import './storybook.requires';
import React from 'react';

const StorybookUIRoot = getStorybookUI({});

export default () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <StorybookUIRoot />;
};
