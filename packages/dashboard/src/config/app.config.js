import logo from '@ute-exchange/assets/images/logo.svg';

export default {
  appName: 'UTE EXCHANGE',
  appIcon: 'ion-flash',
  appLogo: logo,
  footerText: `UTE Exchange Dashboard @ ${new Date().getFullYear()} Developed by UTE Team`,
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3015/api/v1/',
};
