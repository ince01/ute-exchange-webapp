/* eslint-disable no-console */
import { getToken } from '@ute-exchange/utils';
import store from './store';
import { actions } from './auth/slice';

const checkAuthenticated = () =>
  new Promise((resolve, reject) => {
    console.log('%c Checking authenticated...', 'color: blue; font-weight: bold;');
    try {
      const token = getToken();
      if (token) {
        store.dispatch(actions.checkAuth.request());
        store.subscribe(() => {
          const authenticated = store.getState(state => state.auth.authenticated);
          if (authenticated) {
            resolve(true);
          }
        });
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });

export default function intialBoot() {
  console.log('%c Initial boot app...', 'color: blue; font-weight: bold;');
  let status = 'pending';
  const suspender = checkAuthenticated().then(
    () => {
      status = 'success';
      console.log('%c Boot app success!', 'color: green; font-weight: bold;');
    },
    () => {
      status = 'error';
      console.log('%c Boot app error!', 'color: red; font-weight: bold;');
    },
  );
  // eslint-disable-next-line consistent-return
  return () => {
    console.log('intialBoot -> status', status);
    if (status === 'pending') {
      throw suspender;
    }
  };
}
