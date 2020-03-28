import { defineMessages } from 'react-intl';

export const scope = 'sideBar';

export default {
  label: defineMessages({
    dashboard: {
      id: `${scope}.label.dashboard`,
      defaultMessage: 'Dashboard',
    },
    users: {
      id: `${scope}.label.users`,
      defaultMessage: 'Users',
    },
    products: {
      id: `${scope}.label.products`,
      defaultMessage: 'Products',
    },
  }),
};
