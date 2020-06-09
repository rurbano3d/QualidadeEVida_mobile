import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';
import { Container, Content, Title, Subtitle, Message, Info } from './styles';

import Back from '~/assets/back.svg';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Back width="100%" height={150} />
        <Title>Bem vindo ao Aplicativo</Title>
        <Subtitle>Logo sua matrícula será ativada!</Subtitle>

        <Message>
          Se sua matrícula já foi ativada pelo seu professor, clique em
          atualizar.
        </Message>
        <Message>
          Se permanecer desativado entre em contato com o seu professor.
        </Message>
        <Button onPress={() => navigation.navigate('SignOutScreen', {})}>
          Atualizar
        </Button>
        <Info>Caso não seja aluno, não perca tempo!</Info>
        <Info>Entre em contato e assine um plano.</Info>
      </Content>
    </Container>
  );
};

export default Welcome;
