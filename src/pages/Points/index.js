import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import Separator from '~/components/Separator';
import SlideTop from '~/Animation/SlideTop';
import SlideBottom from '~/Animation/SlideBottom';
import PontuationList from '~/components/PontuationList';
import Pontuation from '~/components/Dashboard/Pontuation';

import { Container, Information, DescView } from './styles';

export default function Points() {
  const isFocused = useIsFocused();

  return (
    isFocused && (
      <Container>
        <SlideTop>
          <Information>
            <DescView>
              <MaterialCommunityIcons name="medal" size={20} color="#444444" />
              <Text>Pontuação total</Text>
              <Pontuation />
            </DescView>
          </Information>
        </SlideTop>
        <Separator />
        <SlideBottom>
          <PontuationList />
        </SlideBottom>
      </Container>
    )
  );
}
