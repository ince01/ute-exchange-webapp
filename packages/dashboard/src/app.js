import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import AppRouter from './router';
import AppProvider from './AppProvider';

const App = () => (
  <Provider store={store}>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </Provider>
);

export default App;
