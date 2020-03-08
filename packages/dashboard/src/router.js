import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { ErrorBoundary } from '@ute-exchange/components';
// import PrivateRoute from './components/common/PrivateRoute';
// import { MODULES } from './config/constants';

const publicRoutes = [
  {
    id: 'login',
    path: '/',
    component: lazy(() => import('./containers/SignIn')),
    exact: true,
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('./containers/Dashboard')),
    exact: true,
  },
];

// const moduleAccepted = MODULES.join('|');

function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spin />}>
        <BrowserRouter>
          <Switch>
            {publicRoutes.map(route => (
              <Route key={route.id} path={route.path} exact={route.exact} component={route.component} />
            ))}
            {/* <PrivateRoute path="/" component={Dashboard} exact /> */}
            {/* <Route path="*" component={NotFoundPage} /> */}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Routes;
