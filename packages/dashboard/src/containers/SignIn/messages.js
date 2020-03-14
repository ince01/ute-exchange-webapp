import { defineMessages } from 'react-intl';

export const scope = 'signIn';

export default {
  label: defineMessages({
    pageTitle: {
      id: `${scope}.label.title`,
      defaultMessage: 'UTE Exchange',
    },
    userName: {
      id: `${scope}.label.userName`,
      defaultMessage: 'User name',
    },
    password: {
      id: `${scope}.label.password`,
      defaultMessage: 'Password',
    },
    rememberMe: {
      id: `${scope}.label.rememberMe`,
      defaultMessage: 'Remember me',
    },
    signIn: {
      id: `${scope}.label.signIn`,
      defaultMessage: 'Sign in',
    },
    signUp: {
      id: `${scope}.label.signUp`,
      defaultMessage: 'Sign up',
    },
  }),
  description: defineMessages({
    note: {
      id: `${scope}.description.note`,
      defaultMessage: 'username: demo, password: demo',
    },
    forgotPass: {
      id: `${scope}.description.forgotPass`,
      defaultMessage: 'Forgot password ?',
    },
  }),
};
