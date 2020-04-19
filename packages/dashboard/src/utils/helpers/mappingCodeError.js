import appConfig from 'config/app.config';
import messages from 'services/core/messages';
import { AUTHENTICATED_ERROR_CODES } from 'services/core/constants';

export default function mappingCodeError(codeErrorMap, error) {
  const defaultErrorMessage =
    appConfig.env !== 'production'
      ? {
          id: error.message || 'error',
          defaultMessage: error.message || 'unknow error',
        }
      : messages.error.requestFailed;

  if (AUTHENTICATED_ERROR_CODES.has(error.response.code)) {
    return messages.error.sessionExpired;
  }

  return codeErrorMap.get(error.response?.code) || defaultErrorMessage;
}
