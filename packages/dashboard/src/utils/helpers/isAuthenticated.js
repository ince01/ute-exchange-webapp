import { getToken } from '@ute-exchange/utils';

export default function isAuthenticated() {
  const token = getToken();
  return !!token;
}
