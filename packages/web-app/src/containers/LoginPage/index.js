/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import config from '../../config/app.config';
import { changeLanguage } from '../../redux/languageReducer';
import reducer, { signInActions } from './reducer';
import { useInjectReducer } from '../../utils/reduxInjectors';

function Login() {
  useInjectReducer({ key: 'auth', reducer });
  const dispatch = useDispatch();

  const intl = useIntl();

  const onClick = () => {
    dispatch(changeLanguage({ locale: 'en' }));
    dispatch(signInActions.request('huhuuu'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" src={config.appLogo} />
        <button type="button" onClick={onClick}>
          Change language
        </button>
        <p>{intl.formatMessage({ id: 'label.active' })}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Login;
