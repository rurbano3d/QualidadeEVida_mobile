import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Confirm from '~/assets/back.svg';
import Deny from '~/assets/denied.svg';

import api from '~/services/api';

import WaveLoading from '~/components/WaveLoading';

import { Container, Content, Status, Confirmed, Denied } from './styles';

const Refresh = () => {
  const navigation = useNavigation();
  const { student } = useSelector(state => state.auth);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  const [blocked, setBlocked] = useState('');

  async function getBlocked() {
    try {
      const registration = await api.get('registrations', {
        params: { student_id: student.id },
      });
      const response = await api.get('monthlyOverdue', {
        params: { q: registration.data[0]?.id },
      });

      setBlocked(response.data.blockedAccess);
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
          (!blocked ? (
            <>
              <Confirm width="300px" height="60%" />
              <Confirmed>Pagamento atualizado no sistema!</Confirmed>
            </>
          ) : (
            <>
              <Deny width="300px" height="60%" />
              <Denied>
                Pagamento ainda não atualizado no sistema! Tente mais tarde
              </Denied>
            </>
          ))}
        {/* <Button onPress={() => navigation.navigate('Dashboard')}>
        Clique aqui
      </Button> */}
      </Content>
    </Container>
  );
};

export default Refresh;
