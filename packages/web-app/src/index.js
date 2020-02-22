import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.scss';
import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
