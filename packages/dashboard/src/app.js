import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './router';
import AppProvider from './AppProvider';
import GlobalStyles from './assets/styles/globalStyle';

const App = () => (
  <Provider store={store}>
    <AppProvider>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </AppProvider>
  </Provider>
);

export default App;
