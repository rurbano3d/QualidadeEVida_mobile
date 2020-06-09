import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '~/components/Button';
import { Container, Content, Title, Subtitle, Message } from './styles';
import Back from '~/assets/back.svg';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Back width="100%" height={150} />
        <Title>Sua matrícula venceu.</Title>
        <Subtitle>Que pena! Entre em contato e ative-a novamente</Subtitle>
        <Message>Caso tenha renovado a matricula, clique em Atualizar.</Message>
        <Message>
          Se permanecer bloqueado entre em contato com o seu professor.
        </Message>
        <Button onPress={() => navigation.navigate('SignOutScreen', {})}>
          Atualizar
        </Button>
      </Content>
    </Container>
  );
};

export default Welcome;
