import React, { useState, useRef } from 'react';
import { Platform, TextInput } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useDispatch } from 'react-redux';
import { formatDatePure } from '~/utils';

import { signUpUpdate } from '~/store/modules/signUp/actions';

import Button from '~/components/Button';

import {
  Container,
  Label,
  Content,
  InputMaskContainer,
  InputMask,
  Error,
  ButtonView,
  FormCustom,
  InputField,
  SelectorBirth,
  SelectorText,
  Placeholder,
} from './styles';

const schema = Yup.object({
  birth: Yup.string().required('Este campo é obrigatório'),
  weight: Yup.string().required('Este campo é obrigatório'),
  height: Yup.string().required('Este campo é obrigatório'),
});

const FormComplements = ({ route }) => {
  const dispatch = useDispatch();
  const { signUp } = route.params;

  const [birth, setBirth] = useState(new Date());
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const weightRef = useRef();
  const heightRef = useRef();

  const [show, setShow] = useState(false);
  const [placeholder, setPlaceholder] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birth;
    setShow(Platform.OS === 'ios');
    setBirth(currentDate);
    setPlaceholder(false);
  };
  return (
    <Formik
      enableReinitialize
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        birth,
        weight,
        height,
      }}
      validationSchema={schema}
      onSubmit={values => {
        dispatch(
          signUpUpdate(signUp.id, values.birth, values.weight, values.height),
        );
      }}
    >
      {props => (
        <Container>
          <FormCustom>
            <Label>Só mais estas e terminamos</Label>
            <Content>
              <InputField>
                <SelectorBirth onPress={() => setShow(!show)}>
                  <SelectorText>
                    {placeholder ? (
                      <Placeholder>Data de Nascimento</Placeholder>
                    ) : (
                      formatDatePure(props.values.birth)
                    )}
                  </SelectorText>
                </SelectorBirth>
                {show && (
                  <DateTimePicker
                    value={props.values.birth}
                    placeholder="Data de nascimento"
                    locale="pt-BR"
                    display="spinner"
                    onChange={onChange}
                  />
                )}

                {props.errors.birth && <Error>{props.errors.birth}</Error>}
              </InputField>
              <InputField>
                <InputMaskContainer>
                  <InputMask
                    placeholder="Peso"
                    type="money"
                    options={{
                      precision: 1,
                      separator: '.',
                      unit: '',
                    }}
                    returnKeyType="next"
                    ref={weightRef}
                    onSubmitEditing={() =>
                      heightRef.current.getElement().focus()
                    }
                    value={props.values.weight}
                    onChangeText={props.handleChange('weight')}
                  />
                </InputMaskContainer>
                {props.errors.weight && <Error>{props.errors.weight}</Error>}
              </InputField>
              <InputField>
                <InputMaskContainer>
                  <InputMask
                    keyboardType="number-pad"
                    placeholder="Altura"
                    type="custom"
                    options={{
                      mask: '9.99',
                    }}
                    ref={heightRef}
                    returnKeyType="send"
                    onSubmitEditing={props.handleSubmit}
                    value={props.values.height}
                    onChangeText={props.handleChange('height')}
                  />
                </InputMaskContainer>
                {props.errors.height && <Error>{props.errors.height}</Error>}
              </InputField>
            </Content>
          </FormCustom>
          <ButtonView>
            <Button onPress={props.handleSubmit}>Finalizar</Button>
          </ButtonView>
        </Container>
      )}
    </Formik>
  );
};

export default FormComplements;
