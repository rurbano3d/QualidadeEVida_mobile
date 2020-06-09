import React, { useState, useEffect } from 'react';

import { Text, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Finished from '~/assets/finished2.svg';

import {
  Container,
  Content,
  Title,
  YesButton,
  NoButton,
  ButtonView,
  ButtonText,
} from './styles';

const ModalComponent = ({ visible, onVisible, id }) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <Container>
        <Content>
          <Finished width="100%" height={150} />
          <Title>
            Gostaria de passar alguma informação ou contar como se sentiu após o
            treino de hoje?
          </Title>
          <ButtonView>
            <YesButton
              onPress={() => {
                navigation.navigate('OrderDetail', {
                  sector: 'trainings',
                  sector_id: id,
                });
                setModalVisible(!visible);
                onVisible(!modalVisible);
              }}
            >
              <ButtonText>Sim</ButtonText>
            </YesButton>

            <NoButton
              onPress={() => {
                navigation.navigate('Trainings', {});
                setModalVisible(!visible);
                onVisible(!modalVisible);
              }}
            >
              <ButtonText>Não</ButtonText>
            </NoButton>
          </ButtonView>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalComponent;
