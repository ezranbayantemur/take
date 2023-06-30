import React from 'react';
import {Splash} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from '../helpers/splash-screen/splash-screen';
import {controlSessionThunk} from '@features';
import type {AppDispatch, RootState} from '../redux/store';

type Props = {
  children: React.ReactElement;
};

const AuthContainer = ({children}: Props): React.ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const sessionPending = useSelector<RootState, boolean>(
    state => state.auth.sessionPending,
  );

  React.useEffect(() => {
    dispatch(controlSessionThunk());
  }, [dispatch]);

  React.useEffect(() => {
    if (!sessionPending) {
      SplashScreen.hide();
    }
  }, [sessionPending]);

  if (sessionPending) {
    return <Splash />;
  }

  return children;
};

export default AuthContainer;
