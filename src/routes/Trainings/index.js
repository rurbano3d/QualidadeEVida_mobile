import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useClient } from '~/contexts/client';

import MyTrainings from '~/pages/MyTrainings';
import MyVideos from '~/pages/MyVideos';

const Stack = createMaterialTopTabNavigator();

export default function DashboarRouter() {
  const { client } = useClient();
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
          borderColor: client === 'qualidadeVida' ? '#009fe3' : '#fb6c02',
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
        component={MyTrainings}
        options={{ title: 'Meus Treinos' }}
      />
      <Stack.Screen
        name="MyChallenges"
        component={MyVideos}
        options={{ title: 'Meus Videos' }}
      />
    </Stack.Navigator>
  );
}
