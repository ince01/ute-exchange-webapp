import React from 'react';
import PropTypes from 'prop-types';
import { Input, Checkbox, Button, Form } from '@ute-exchange/components';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from 'react-hook-form-devtools';
import { FormattedMessage, useIntl } from 'react-intl';
import { signInSchema } from './validateSchema';
import messages from './messages';
import SignInStyleWrapper from './SignIn.style';

function SignIn(props) {
  const { loading, signInHandler } = props;

  const { formatMessage: f } = useIntl();

  const { control, errors, handleSubmit } = useForm({ mode: 'onBlur', validationSchema: signInSchema(f) });

  const onSubmit = data => {
    signInHandler(data);
  };

  return (
    <>
      <SignInStyleWrapper>
        <div className="loginContentWrapper">
          <div className="loginContent">
            <div className="logoWrapper">
              <Link to="/dashboard">
                <FormattedMessage {...messages.label.pageTitle} />
              </Link>
            </div>
            <div className="signInForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputWrapper">
                  <Form.Item validateStatus={errors?.email ? 'error' : 'success'} help={errors?.email?.message}>
                    <Controller
                      as={<Input size="large" placeholder={f(messages.label.email)} autoComplete="true" />}
                      name="email"
                      control={control}
                      defaultValue=""
                    />
                  </Form.Item>
                </div>
                <div className="inputWrapper">
                  <Form.Item validateStatus={errors?.password ? 'error' : 'success'} help={errors?.password?.message}>
                    <Controller
                      as={
                        <Input
                          size="large"
                          type="password"
                          placeholder={f(messages.label.password)}
                          autoComplete="false"
                        />
                      }
                      name="password"
                      control={control}
                      defaultValue=""
                    />
                  </Form.Item>
                </div>
                <div className="inputWrapper flex flex-row items-center justify-between">
                  <Form.Item>
                    <Controller
                      as={
                        <Checkbox disabled>
                          <FormattedMessage {...messages.label.rememberMe} />
                        </Checkbox>
                      }
                      name="remember"
                      control={control}
                      defaultValue
                    />
                  </Form.Item>
                  <Link to="/forgotpassword" className="forgotPass">
                    <FormattedMessage {...messages.description.forgotPass} />
                  </Link>
                </div>
                <p className="helperText">
                  <FormattedMessage {...messages.description.note} />
                </p>
                <div className="helperWrapper flex">
                  <Button type="primary" htmlType="submit" loading={loading}>
                    <FormattedMessage {...messages.label.signIn} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
      {process.env.NODE_ENV !== 'production' && <DevTool control={control} />}
    </>
  );
}

SignIn.defaultProps = {
  loading: false,
  signInHandler: () => {},
};

SignIn.propTypes = {
  loading: PropTypes.bool,
  signInHandler: PropTypes.func,
};

export default SignIn;
