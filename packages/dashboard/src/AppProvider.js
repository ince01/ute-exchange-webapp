import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import themes from './config/theme/theme.config';
import AppLocale from './config/translations';

function AppProvider({ children }) {
  const { locale } = useSelector(state => state.language);
  const currentAppLocale = AppLocale[locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        <ThemeProvider theme={themes.defaultTheme}>{React.Children.only(children)}</ThemeProvider>
      </IntlProvider>
    </ConfigProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
