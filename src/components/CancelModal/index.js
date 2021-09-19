import React, { useState, useEffect } from 'react';

import { Modal, Alert } from 'react-native';
import Warning from '~/assets/warning.svg';

import {
  Container,
  Content,
  Title,
  YesButton,
  NoButton,
  ButtonView,
  ButtonText,
} from './styles';

const CancelModal = ({ visible, onVisible, onCancel }) => {
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
          <Warning width="100%" height={50} />
          <Title>Tem certeza que deseja cancelar a aula?</Title>
          <ButtonView>
            <YesButton
              onPress={() => {
                onCancel();
                setModalVisible(!visible);
                onVisible(!modalVisible);
              }}
            >
              <ButtonText>Sim</ButtonText>
            </YesButton>

            <NoButton
              onPress={() => {
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

export default CancelModal;
