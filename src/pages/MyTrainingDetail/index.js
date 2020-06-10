import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute, useIsFocused } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '~/services/api';

import SlideRight from '~/Animation/SlideRight';
import Button from '~/components/Button';

import Modal from '~/components/Modal';
import Seletor from '~/components/Seletor';

import {
  Container,
  Content,
  List,
  Item,
  Title,
  TitleText,
  DateText,
  DateView,
  Description,
  Order,
  Header,
  Top,
  TopText,
  SeletorView,
  SeletorText,
} from './styles';

export default function TrainingDetails() {
  const isFocused = useIsFocused();
  const route = useRoute();
  const {
    id,
    title,
    dateFormattedComplete,
    description,
    finished,
  } = route.params;
  const [finishedValue, setFinishedValue] = useState(finished);
  const [modalVisible, setModalVisible] = useState(false);

  async function updateTraining() {
    await api.put(`trainingsFinished/${id}`, {
      finished: true,
    });
  }

  function handleFinished() {
    if (!finishedValue) {
      setFinishedValue(true);
      updateTraining();
    }
  }

  function onVisible(value) {
    setModalVisible(value);
  }
  return (
    isFocused && (
      <Container>
        <SlideRight>
          <Content>
            <Title>
              <TitleText>{title}</TitleText>
            </Title>
            <List>
              <Item>
                <DateView>
                  <MaterialCommunityIcons
                    name="dumbbell"
                    size={40}
                    color="#3F3D56"
                  />
                  <DateText>{dateFormattedComplete}</DateText>
                </DateView>

                <Description>
                  <Text>{description}</Text>
                </Description>
              </Item>
            </List>

            <Modal visible={modalVisible} onVisible={onVisible} id={id} />
          </Content>
          {!finishedValue && dateFormattedComplete && (
            <Button
              onPress={() => {
                handleFinished();
                setModalVisible(true);
              }}
            >
              Finalizado
            </Button>
          )}
          {(finishedValue || !dateFormattedComplete) && (
            <Order>
              <Header>
                <Top>
                  <TopText>Acesse sua conversa sobre este treino!</TopText>
                </Top>
                <MaterialCommunityIcons
                  name="message-bulleted"
                  size={60}
                  color="#3F3D56"
                />
              </Header>

              <Seletor
                link="OrderDetail"
                params={{ sector: 'trainings', sector_id: id }}
              >
                <SeletorView>
                  <SeletorText>Acessar</SeletorText>
                </SeletorView>
              </Seletor>
            </Order>
          )}
        </SlideRight>
      </Container>
    )
  );
}
