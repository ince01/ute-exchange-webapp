import React from 'react';
import { Input, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import SignInStyleWrapper from './SignIn.style';

function SignIn() {
  return (
    <SignInStyleWrapper>
      <div className="loginContentWrapper">
        <div className="loginContent">
          <div className="logoWrapper">
            <Link to="/dashboard">
              <FormattedMessage id="page.signInTitle" />
            </Link>
          </div>
          <div className="signInForm">
            <form>
              <div className="inputWrapper">
                <Input size="large" placeholder="Username" autoComplete="true" />
              </div>
              <div className="inputWrapper">
                <Input size="large" type="password" placeholder="Password" autoComplete="false" />
              </div>
              <div className="inputWrapper leftRightComponent">
                <Checkbox>
                  <FormattedMessage id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary">
                  <FormattedMessage id="page.signInButton" />
                </Button>
              </div>
              <p className="helperText">
                <FormattedMessage id="page.signInPreview" />
              </p>
            </form>
            <div className="centerComponent helperWrapper">
              <Link to="/forgotpassword" className="forgotPass">
                <FormattedMessage id="page.signInForgotPass" />
              </Link>
              <Link to="/signup">
                <FormattedMessage id="page.signInCreateAccount" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}

export default SignIn;
