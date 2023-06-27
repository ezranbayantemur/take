import React from 'react';
import Router from './router/Router';
import Provider from './redux/Provider';
import AuthContainer from './container/AuthContainer';
import ErrorBoundary from './container/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider>
        <AuthContainer>
          <Router />
        </AuthContainer>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
