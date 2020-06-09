import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Button from '~/components/Button';

import { Container, Content, Title, Subtitle, Message } from './styles';
import Back from '~/assets/deniedRed.svg';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <Back width="100%" height={150} />
        <Title>Acesso bloqueado</Title>
        <Subtitle>
          Sua mensalidade esta atrasada, por isso seu acesso foi bloqueado
          temporariamente.
        </Subtitle>
        <Message>
          Caso tenha realizado o pagamento, clique em Atualizar.
        </Message>
        <Message>
          Se permanecer bloqueado entre em contato com o seu professor.
        </Message>
        <Button onPress={() => navigation.navigate('Refresh', {})}>
          Atualizar
        </Button>
      </Content>
    </Container>
  );
};

export default Welcome;
