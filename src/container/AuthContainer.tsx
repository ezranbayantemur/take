import React from 'react';
import {Splash} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {controlSessionThunk} from '@features';

type Props = {
  children: React.ReactNode;
};

const AuthContainer = ({children}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const sessionPending = useSelector<RootState, boolean>(
    state => state.auth.sessionPending,
  );

  React.useEffect(() => {
    dispatch(controlSessionThunk());
  }, [dispatch]);

  if (sessionPending) {
    return <Splash />;
  }

  return children;
};

export default AuthContainer;