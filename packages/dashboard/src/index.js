import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line import/no-unresolved
import './assets/styles/globalStyles.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
