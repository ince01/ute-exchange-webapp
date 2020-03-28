import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from '@ute-exchange/components';
import Spin from '@ute-exchange/components/Spin';
import { makeSelectLocale } from './redux/language/selector';
import themes from './config/theme/theme.config';
import AppLocale from './config/translations';

function AppProvider({ children }) {
  const locale = useSelector(makeSelectLocale());
  const currentAppLocale = AppLocale[locale];
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spin />}>
        <ConfigProvider locale={currentAppLocale.antd}>
          <IntlProvider locale={locale} messages={currentAppLocale.messages}>
            <ThemeProvider theme={themes.defaultTheme}>{React.Children.only(children)}</ThemeProvider>
          </IntlProvider>
        </ConfigProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
