import React from 'react';
import { Input, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import msg from './messages';
import SignInStyleWrapper from './SignIn.style';

function SignIn() {
  const { formatMessage: f } = useIntl();
  return (
    <SignInStyleWrapper>
      <div className="loginContentWrapper">
        <div className="loginContent">
          <div className="logoWrapper">
            <Link to="/dashboard">
              <FormattedMessage {...msg.label.pageTitle} />
            </Link>
          </div>
          <div className="signInForm">
            <form>
              <div className="inputWrapper">
                <Input size="large" placeholder={f(msg.label.userName)} autoComplete="true" />
              </div>
              <div className="inputWrapper">
                <Input size="large" type="password" placeholder={f(msg.label.password)} autoComplete="false" />
              </div>
              <div className="inputWrapper flex flex-row items-center justify-between">
                <Checkbox>
                  <FormattedMessage {...msg.label.rememberMe} />
                </Checkbox>
                <Link to="/forgotpassword" className="forgotPass">
                  <FormattedMessage {...msg.description.forgotPass} />
                </Link>
              </div>
              <p className="helperText">
                <FormattedMessage {...msg.description.note} />
              </p>
            </form>
            <div className="helperWrapper flex">
              <Button type="primary">
                <FormattedMessage {...msg.label.signIn} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}

export default SignIn;
