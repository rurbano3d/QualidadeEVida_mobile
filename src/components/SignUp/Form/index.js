import React, { useState, useRef, createRef } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Feather } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';

import { signUpRequest } from '~/store/modules/signUp/actions';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Select from '~/components/AsyncSelect';

import {
  Container,
  Label,
  Content,
  PasswordView,
  Seletor,
  InputMaskContainer,
  InputMask,
  Error,
  ButtonView,
  FormCustom,
  InputField,
} from './styles';

const schema = Yup.object({
  gym: Yup.string().required('Este campo é obrigatório'),
  name: Yup.string().required('Este campo é obrigatório'),
  email: Yup.string()
    .email('Este email não é válido')
    .required('Este campo é obrigatório'),
  phone: Yup.string()
    .min(15, 'Numero inválido')
    .required('Este campo é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve possuir no mínimo 6 caracteres')
    .required('Este campo é obrigatório'),
});

const Form = () => {
  const dispatch = useDispatch();

  const [gym, setGym] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [show, setShow] = useState(true);

  return (
    <Formik
      enableReinitialize
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        gym,
        name,
        email,
        phone,
        password,
      }}
      validationSchema={schema}
      onSubmit={values => {
        dispatch(
          signUpRequest(
            values.gym,
            values.name,
            values.phone,
            values.email,
            values.password,
          ),
        );
      }}
    >
      {props => (
        <Container>
          <FormCustom>
            <Label>Preciso de algumas informações, é rapidinho!</Label>
            <Content>
              <InputField>
                <Select
                  handleChange={props.handleChange('gym')}
                  onSubmitEditing={() => nameRef.current.focus()}
                />
                {props.errors.gym && <Error>{props.errors.gym}</Error>}
              </InputField>
              <InputField>
                <Input
                  name="name"
                  placeholder="Nome completo"
                  returnKeyType="next"
                  onSubmitEditing={() => phoneRef.current.getElement().focus()}
                  ref={nameRef}
                  value={props.values.name}
                  onChangeText={props.handleChange('name')}
                />
                {props.errors.name && <Error>{props.errors.name}</Error>}
              </InputField>
              <InputField>
                <InputMaskContainer>
                  <InputMask
                    placeholder="Numero de celular"
                    returnKeyType="next"
                    type="cel-phone"
                    ref={phoneRef}
                    onSubmitEditing={() => emailRef.current.focus()}
                    value={props.values.phone}
                    onChangeText={props.handleChange('phone')}
                  />
                </InputMaskContainer>
                {props.errors.phone && <Error>{props.errors.phone}</Error>}
              </InputField>
              <InputField>
                <Input
                  name="email"
                  autoCapitalize="none"
                  placeholder="E-mail"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                  ref={emailRef}
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                />
                {props.errors.email && <Error>{props.errors.email}</Error>}
              </InputField>
              <InputField>
                <PasswordView>
                  <Input
                    style={{ flex: 1, borderRightWidth: 0 }}
                    placeholder="Senha"
                    secureTextEntry={show}
                    returnKeyType="send"
                    onSubmitEditing={props.handleSubmit}
                    ref={passwordRef}
                    // onSubmitEditing={() => passwordAgainRef.current.focus()}
                    value={props.values.password}
                    onChangeText={props.handleChange('password')}
                  />
                  <Seletor onPress={() => setShow(!show)}>
                    {show ? (
                      <Feather name="eye-off" size={25} color="#999999" />
                    ) : (
                      <Feather name="eye" size={25} color="#999999" />
                    )}
                  </Seletor>
                </PasswordView>
                {props.errors.password && (
                  <Error>{props.errors.password}</Error>
                )}
              </InputField>
            </Content>
          </FormCustom>
          <ButtonView>
            <Button onPress={props.handleSubmit}>Continuar</Button>
          </ButtonView>
        </Container>
      )}
    </Formik>
  );
};

export default Form;
