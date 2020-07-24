import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { backend } from '../conf';

const SignUpWrapper = styled.div`
  height: 90%;
`;

const StyledSpan = styled.span`
  color: red;
`;

const SignUp = () => {
  const [newUser, setNewUser] = useState({});
  const [formErrors, setFormErrors] = useState({
    name: '',
    mail: '',
    password: '',
  });
  const [valide, setValide] = useState(true);

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const formValid = (form) => {
    Object.values(form).forEach((val) => {
      if (val.length === 0) {
        setValide(false);
      }
    });
    return valide;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const tmpErrors = { ...formErrors };

    switch (name) {
      case 'name':
        tmpErrors.name = value.length < 3 ? 'minimum 3 caractères' : '';
        break;
      case 'mail':
        tmpErrors.mail = emailRegex.test(value)
          ? ''
          : 'addresse mail non valide';
        break;
      case 'password':
        tmpErrors.password = value.length < 8 ? 'minimum 8 caractères' : '';
        break;
      default:
        break;
    }

    setFormErrors(tmpErrors);
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(formErrors)) {
      axios.post(`${backend}/auth/signup`, newUser).then('Ok').catch('Erreur');
    }
  };

  return (
    <SignUpWrapper>
      <Title>Inscris-toi</Title>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          type="text"
          name="name"
          required
          onBlur={(e) => {
            handleChange(e);
          }}
          placeholder="Ton Nom"
        />
        {formErrors.name.length > 0 && (
          <StyledSpan>{formErrors.name}</StyledSpan>
        )}
        <Input
          type="email"
          name="mail"
          required
          onBlur={(e) => {
            handleChange(e);
          }}
          placeholder="Email"
        />
        {formErrors.mail.length > 0 && (
          <StyledSpan>{formErrors.mail}</StyledSpan>
        )}
        <Input
          type="password"
          name="password"
          required
          onBlur={(e) => {
            handleChange(e);
          }}
          placeholder="Mot de passe"
        />
        {formErrors.password.length > 0 && (
          <StyledSpan>{formErrors.password}</StyledSpan>
        )}
        <InputBtn type="submit" value="Je m'inscris" />
      </Form>
    </SignUpWrapper>
  );
};
export default SignUp;
