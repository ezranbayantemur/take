import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import deeplinks from './deeplinks';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import type {RootState} from '../redux/store';
import type {User} from '@types';

export default function Router() {
  const userSession = useSelector<RootState, User | null>(
    state => state.auth.userSession,
  );
  return (
    <NavigationContainer linking={deeplinks}>
      {!userSession ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
}
