/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { InteractiveRoute, Spin } from '@ute-exchange/components';
import intialBoot from 'redux/boot';
import { isAuthenticated } from 'utils/helpers';

const interactiveRoutes = [
  {
    id: 'login',
    path: '/signIn',
    redirectPath: '/',
    component: lazy(() => import('./containers/SignIn')),
    exact: true,
    isAccepted: () => !isAuthenticated(),
  },
  {
    id: 'dashboard',
    path: '/',
    redirectPath: '/signIn',
    component: lazy(() => import('./containers/Dashboard')),
    isAccepted: isAuthenticated,
  },
];

const bootApp = intialBoot();

export default function AppRouter() {
  bootApp();
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <Switch>
          {interactiveRoutes.map(route => (
            <InteractiveRoute
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
              redirectPath={route.redirectPath}
              isAccepted={route.isAccepted}
            />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
