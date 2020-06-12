import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import logoFoods from '~/assets/logoFoods.png';
import logoAssessoria from '~/assets/logoAssessoria.png';

import { Container, Content, Info, Icon, Title } from './styles';

const Adds = () => {
  const text =
    'Olá Frederico, vim direto do seu aplicativo e tenho interesse em Assessoria ou Personal Training';
  const phone = '+5514981125411';
  function handleInstagram() {
    Linking.openURL('https://www.instagram.com/frederico_souza_qv/');
  }
  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
  }
  return (
    <Container>
      <Content>
        <TouchableOpacity onPress={handleInstagram}>
          <Image
            source={logoFoods}
            style={{
              width: 150,
              height: 153,
              resizeMode: 'cover',
              marginLeft: 5,
            }}
          />
          <Title>Alimentação saudável</Title>
          <Info>Clique e siga a gente no Instagram.</Info>
          <Icon>
            <MaterialCommunityIcons name="instagram" size={25} color="#666" />
          </Icon>
        </TouchableOpacity>
      </Content>

      <Content>
        <TouchableOpacity onPress={handleWhatsapp}>
          <Image
            source={logoAssessoria}
            style={{
              width: 150,
              height: 145,
              resizeMode: 'cover',
            }}
          />
          <Title>{`Assessoria e Personal \rtraining`}</Title>
          <Info>Clique e tire suas dúvidas pelo whatsapp.</Info>
          <Icon>
            <MaterialCommunityIcons name="whatsapp" size={25} color="#666" />
          </Icon>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default Adds;
