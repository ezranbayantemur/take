import React from 'react';
import Router from './router/Router';
import Provider from './redux/Provider';
import AuthContainer from './container/AuthContainer';

const App = () => {
  return (
    <Provider>
      <AuthContainer>
        <Router />
      </AuthContainer>
    </Provider>
  );
};

export default App;
