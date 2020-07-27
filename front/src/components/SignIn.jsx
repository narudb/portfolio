import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Form from './ui/Form';
import { backend } from '../conf';

const SignInWrapper = styled.div`
  height: 90%;
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState({});

  const handleChange = (e) => {
    const tmp = { ...authUser, [e.target.name]: e.target.value };
    setAuthUser(tmp);
  };

  const signIn = (e) => {
    e.preventDefault();

    axios.post(`${backend}/auth/signin`, authUser).then(({ data }) => {
      dispatch({
        type: 'LOGIN',
        payload: {
          token: data.token,
          mail: data.user.user_mail,
          id: data.user.id,
        },
      });
    });
  };

  return (
    <SignInWrapper>
      <h2>Connexion</h2>
      <Form
        onSubmit={(e) => {
          signIn(e);
        }}
      >
        <input
          type="email"
          name="mail"
          required
          placeholder="Mail"
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <input
          type="password"
          name="password"
          required
          placeholder="Mot de passe"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" value="Connexion" />
      </Form>
    </SignInWrapper>
  );
};

export default SignIn;
