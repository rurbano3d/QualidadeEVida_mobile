import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Confirm from '~/assets/back.svg';
import Deny from '~/assets/denied.svg';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

import WaveLoading from '~/components/WaveLoading';
import Button from '~/components/Button';

import { Container, Content, Status, Confirmed, Denied } from './styles';

const SignOut = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { student } = useSelector(state => state.auth);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [registration, setRegistration] = useState([]);
  const [blocked, setBlocked] = useState('');

  async function getBlocked() {
    try {
      const response = await api.get('registrations', {
        params: { student_id: student.id },
      });
      setRegistration(response.data);
      const registrationActive = registration.filter(item => item.active);
      setBlocked(!!registrationActive.length);
    } catch (err) {}
  }
  useEffect(() => {
    getBlocked();

    setTimeout(function () {
      setLoading(false);
      setAlert(true);
    }, 3000);
    setTimeout(function () {
      navigation.navigate('Dashboard');
    }, 7000);
  }, [blocked]);
  return (
    <Container>
      <Content>
        {loading && (
          <>
            <WaveLoading />
            <Status>Verificando atualização no sistema</Status>
          </>
        )}
        {alert &&
          (blocked ? (
            <>
              <Confirm width="300px" height="60%" />
              <Confirmed>Matrícula atualizada no sistema!</Confirmed>
              {/* <Confirmed>Faça o login novamente</Confirmed> */}
              {/* <Button onPress={() => dispatch(signOut())}>Fazer login</Button> */}
            </>
          ) : (
            <>
              <Deny width="300px" height="60%" />
              <Denied>
                Matrícula ainda não atualizada no sistema! Tente mais tarde
              </Denied>
            </>
          ))}
      </Content>
    </Container>
  );
};

export default SignOut;
