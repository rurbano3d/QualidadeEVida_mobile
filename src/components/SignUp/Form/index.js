import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useClient } from '~/contexts/client';

import { signUpRequest } from '~/store/modules/signUp/actions';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Select from '~/components/AsyncSelect';
import SelectSimple from '~/components/Select';

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
  city: Yup.string().required('Este campo é obrigatório'),
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
const schemaQualidadeVida = Yup.object({
  name: Yup.string().required('Este campo é obrigatório'),
  city: Yup.string().required('Este campo é obrigatório'),
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
  const { client } = useClient();
  const [gym, setGym] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();

  const [show, setShow] = useState(true);

  const gymId = __DEV__
    ? '3a3bd24e-4cfa-44f4-9c2b-538bdd5feff3'
    : 'acec07cb-418d-480a-8cce-b64a92b82274';

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
        city,
      }}
      validationSchema={
        client === 'qualidadeVida' ? schemaQualidadeVida : schema
      }
      onSubmit={values => {
        dispatch(
          signUpRequest(
            client === 'qualidadeVida' ? gymId : values.gym,
            values.name,
            values.phone,
            values.email,
            values.password,
            values.city,
          ),
        );
      }}
    >
      {props => (
        <Container>
          <FormCustom>
            <Label>Preciso de algumas informações, é rapidinho!</Label>
            <Content>
              {client !== 'qualidadeVida' && (
                <InputField>
                  <Select
                    handleChange={props.handleChange('gym')}
                    onSubmitEditing={() => nameRef.current.focus()}
                  />
                  {props.errors.gym && <Error>{props.errors.gym}</Error>}
                </InputField>
              )}

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
                    onSubmitEditing={() => cityRef.current.focus()}
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
              <InputField>
                <SelectSimple
                  label="Cidade"
                  items={[
                    { label: 'Brotas', value: 'Brotas' },
                    { label: 'Torrinha', value: 'Torrinha' },
                  ]}
                  ref={cityRef}
                  handleChange={props.handleChange('city')}
                  onSubmitEditing={props.handleSubmit}
                />
                {props.errors.city && <Error>{props.errors.city}</Error>}
              </InputField>
              <ButtonView>
                <Button onPress={props.handleSubmit}>Continuar</Button>
              </ButtonView>
            </Content>
          </FormCustom>
        </Container>
      )}
    </Formik>
  );
};

export default Form;
