import { takeLatest, put, call } from 'redux-saga/effects';
import { notification } from 'antd';
import { saveToken, removeToken } from '@ute-exchange/utils';
import authServices from 'services/auth';
import { codeErrorMap } from 'containers/SignIn/messages';
import { mappingCodeError } from 'utils/helpers';
import { actions } from './slice';

function* signInSaga({ payload }) {
  const { email, password, history, intl } = payload;
  try {
    const { data } = yield call(authServices.signIn, { email, password });

    yield call(saveToken, data?.token);

    yield put(actions.signIn.success(data));

    history.push('/');
  } catch (error) {
    yield call(removeToken);

    notification.error({
      message: intl.formatMessage(mappingCodeError(codeErrorMap, error)),
      placement: 'bottomRight',
    });

    yield put(actions.signIn.error(error.response || error.message));
  }
}

function* checkAuthSaga() {
  try {
    const { data } = yield call(authServices.getProfile);
    yield put(actions.checkAuth.success(data));
  } catch (error) {
    yield put(actions.checkAuth.error(error.response || error.message));
  }
}

function* signOutSaga() {
  yield call(removeToken);
  window.history.pushState(null, null, '/signIn');
}

export default function* authSaga() {
  const { signIn, signOut, checkAuth } = actions;
  yield takeLatest(signIn.request, signInSaga);
  yield takeLatest(checkAuth.request, checkAuthSaga);
  yield takeLatest(signOut, signOutSaga);
}
