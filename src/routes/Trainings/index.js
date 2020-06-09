import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyTrainings from '~/pages/MyTrainings';
import MyVideos from '~/pages/MyVideos';

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
          borderBottomWidth: 53,
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
