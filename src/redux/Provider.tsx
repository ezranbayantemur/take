import * as React from 'react';
import {store} from './store';
import {Provider as ReduxProvider} from 'react-redux';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({children}: ProviderProps) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
