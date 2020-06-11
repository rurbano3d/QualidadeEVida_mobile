import React from 'react';
import { Platform } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Challenges from '~/pages/Challenges';
import MyChallenges from '~/pages/MyChallenges';

const Stack = createMaterialTopTabNavigator();

export default function DashboarRouter() {
  return (
    <Stack.Navigator
      tabBarOptions={{
        activeTintColor: '#FFF',
        inactiveTintColor: '#afafaf',
        labelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          textTransform: 'capitalize',
        },
        indicatorStyle: {
          borderColor: '#53B1DA',
          borderBottomWidth: Platform.OS === 'ios' ? 49 : 53,
        },
        style: {
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          borderColor: '#dddddd',
          borderWidth: 1,
          borderRadius: 4,
        },
      }}
    >
      <Stack.Screen
        name="Challenges"
        component={Challenges}
        options={{ title: 'Desafios' }}
      />
      <Stack.Screen
        name="MyChallenges"
        component={MyChallenges}
        options={{ title: 'Meus Desafios' }}
      />
    </Stack.Navigator>
  );
}
