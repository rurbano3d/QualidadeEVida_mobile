import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';
import ChallengesRoutes from '~/routes/Challenges';
import Points from '~/pages/Points';
import Ranking from '~/pages/Ranking';

const Tab = createBottomTabNavigator();

export default function DashboarRouter() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          if (route.name === 'Dashboard') {
            return (
              <MaterialCommunityIcons
                name="view-dashboard"
                size={30}
                color={color}
              />
            );
          }
          if (route.name === 'Challenges') {
            return (
              <MaterialCommunityIcons name="dumbbell" size={30} color={color} />
            );
          }
          if (route.name === 'Points') {
            return (
              <MaterialCommunityIcons name="medal" size={30} color={color} />
            );
          }
          // if (route.name === 'Ranking') {
          //   return (
          //     <MaterialCommunityIcons name="trophy" size={30} color={color} />
          //   );
          // }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#53B1DA',
        inactiveTintColor: '#AFAFAF',
        style: {
          height: 95,
          paddingBottom: 20,
          paddingTop: 20,
        },
        labelStyle: {
          fontSize: 14,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Início' }}
      />
      <Tab.Screen
        name="Challenges"
        component={ChallengesRoutes}
        options={{ title: 'Desafios' }}
      />
      <Tab.Screen
        name="Points"
        component={Points}
        options={{ title: 'Pontuação' }}
      />
      {/* <Tab.Screen name="Ranking" component={Ranking} /> */}
    </Tab.Navigator>
  );
}
