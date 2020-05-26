import React, { useState, useRef } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import Input from '~/components/Input';
import Button from '~/components/Button';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Logo, Form, SignLink, SignLinkText } from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const loading = useSelector(state => state.auth.loading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if ((email, password)) {
      dispatch(signInRequest(email, password));
    }
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
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={{ marginTop: 10 }}
          secureTextEntry
          placeholder="Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <Button loading={loading} onPress={handleSubmit}>
          Acessar
        </Button>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
