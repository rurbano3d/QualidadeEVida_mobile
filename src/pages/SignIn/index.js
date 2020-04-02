import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Logo, Form } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [email, setEmail] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email));
  }
  return (
    <Container>
      <Logo>
        <Image source={logo} />
      </Logo>

      <Form>
        <Input
          autoCapitalize="none"
          placeholder="Informe seu e-mail"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={email}
          onChangeText={setEmail}
        />

        <Button loading={loading} onPress={handleSubmit}>
          Acessar
        </Button>
      </Form>
    </Container>
  );
}
