import React from 'react';
import { Image } from 'react-native';
import * as Linking from 'expo-linking';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import logoFoods from '~/assets/logoFoods.png';
import logoAssessoria from '~/assets/logoAssessoriaHorizontal.png';

import {
  Container,
  Content,
  Info,
  TouchableOpacityCustom,
  Icon,
  Title,
  Social,
  Buttons,
  Question,
  Line,
} from './styles';

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
        <Title>Precisa de uma assessoria?</Title>
        <Line />
        <Image
          source={logoAssessoria}
          style={{
            width: '60%',
            height: 75,
            resizeMode: 'contain',
            marginTop: 10,
          }}
        />
        <Info>
          Entre em contato pelo Whatsapp {'\n'}e siga o nosso Instagram.
        </Info>
        <Line />
        <Buttons>
          <TouchableOpacityCustom onPress={handleWhatsapp}>
            <MaterialCommunityIcons name="whatsapp" size={38} color="#666" />
          </TouchableOpacityCustom>
          <TouchableOpacityCustom onPress={handleInstagram}>
            <MaterialCommunityIcons name="instagram" size={38} color="#666" />
          </TouchableOpacityCustom>
        </Buttons>
      </Content>
    </Container>
  );
};

export default Adds;
