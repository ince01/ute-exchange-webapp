import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import AppLocale from './config/translations';

function AppProvider({ children }) {
  const { locale } = useSelector(state => state.language);
  const currentAppLocale = AppLocale[locale];

  return (
    <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
      <ConfigProvider locale={currentAppLocale.antd}>{children}</ConfigProvider>
    </IntlProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
