import { defineMessages } from 'react-intl';

export const scope = 'topBar';

export default {
  label: defineMessages({
    settings: {
      id: `${scope}.label.settings`,
      defaultMessage: 'Settings',
    },
    feedback: {
      id: `${scope}.label.feedback`,
      defaultMessage: 'Feedback',
    },
    helpNSupport: {
      id: `${scope}.label.helpNSupport`,
      defaultMessage: 'Help & Support',
    },
    signOut: {
      id: `${scope}.label.signOut`,
      defaultMessage: 'Sign out',
    },
  }),
  description: defineMessages({
    seeProfile: {
      id: `${scope}.description.seeProfile`,
      defaultMessage: 'See your profile',
    },
  }),
};
