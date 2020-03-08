import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './router';
import AppProvider from './AppProvider';

const App = () => (
  <Provider store={store}>
    <AppProvider>
      <Routes />
    </AppProvider>
  </Provider>
);

export default App;
