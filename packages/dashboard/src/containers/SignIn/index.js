import React from 'react';
import SignIn from './SignIn';
import useSignInEnhance from './Enhance';

export default function() {
  return <SignIn {...useSignInEnhance()} />;
}
