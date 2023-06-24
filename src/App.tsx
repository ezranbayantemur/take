import React from 'react';
import Router from './router/Router';
import Provider from './redux/Provider';

const App = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default App;
