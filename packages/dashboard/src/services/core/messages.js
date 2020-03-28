import { defineMessages } from 'react-intl';

export const scope = 'http';

export default {
  error: defineMessages({
    requestFailed: {
      id: `${scope}.error.requestFailed`,
      defaultMessage: 'Something Went Wrong',
    },
    sessionExpired: {
      id: `${scope}.error.sessionExpired`,
      defaultMessage: 'Session expired. Please sign in again !',
    },
  }),
};
