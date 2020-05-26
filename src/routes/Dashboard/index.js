import React from 'react';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';
import ChallengesRoutes from '~/routes/Challenges';
import Points from '~/pages/Points';
import Ranking from '~/pages/Ranking';

const Tab = createBottomTabNavigator();

export default function DashboarRouter() {
  const { registration, monthly } = useSelector(state => state.auth);
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
        activeTintColor: '#fff',
        inactiveTintColor: '#ddd',

        style: {
          height: Platform.OS === 'ios' ? 95 : 75,
          paddingBottom: Platform.OS === 'ios' ? 25 : 10,
          paddingTop: 15,
          backgroundColor: '#53B1DA',
        },
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Início' }}
      />
      {registration != '' && (
        <>
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
        </>
      )}

      {/* <Tab.Screen name="Ranking" component={Ranking} /> */}
    </Tab.Navigator>
  );
}
