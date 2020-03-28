import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import './assets/styles/globalStyles.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
