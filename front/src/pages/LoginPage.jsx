import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Button from '../components/ui/Button';

const FormWrapper = styled.div`
  margin: auto;
  height: 35vh;
  width: 30vw;
  display: grid;
  padding: 17px 10px;
`;

const LoginPage = () => {
  const [showSignup, toggleForm] = useState(true);
  return (
    <FormWrapper>
      {showSignup ? (
        <>
          <SignUp />
          <Button
            type="button"
            onClick={() => {
              toggleForm(false);
            }}
          >
            {' '}
            J&apos;ai déjà un compte !
          </Button>
        </>
      ) : (
        <>
          <SignIn />
          <Button
            type="button"
            onClick={() => {
              toggleForm(true);
            }}
          >
            Inscription
          </Button>
        </>
      )}
    </FormWrapper>
  );
};

export default LoginPage;
