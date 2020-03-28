import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { actions } from 'redux/auth/slice';
import { makeSelectloading } from 'redux/auth/selector';

function useSignInEnhance() {
  const intl = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();

  const loading = useSelector(makeSelectloading());

  const signInHandler = data => {
    dispatch(actions.signIn.request({ ...data, history, intl }));
  };

  return { loading, signInHandler };
}

export default useSignInEnhance;
