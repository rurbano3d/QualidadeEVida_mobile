import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useClient } from '~/contexts/client';

import api from '~/services/api';

import Dashboard from '~/pages/Dashboard';
import ChallengesRoutes from '~/routes/Challenges';
import Points from '~/pages/Points';
import TrainingsRoutes from '~/routes/Trainings';
import Ranking from '~/pages/Ranking';

const Tab = createBottomTabNavigator();

export default function DashboarRouter() {
  const isFocused = useIsFocused();
  const { student } = useSelector(state => state.auth);
  const [blocked, setBlocked] = useState('');
  const [hasRegister, setHasRegister] = useState('');
  const { client } = useClient();

  useEffect(() => {
    async function getBlocked() {
      const registration = await api.get('registrations', {
        params: { student_id: student.id },
      });
      if (registration.data) {
        const response = await api.get('monthlyOverdue', {
          params: { q: registration.data[0]?.id },
        });
        setBlocked(response.data.blockedAccess);
      }
      setHasRegister(registration.data);
    }

    if (isFocused) {
      getBlocked();
    }
  }, [isFocused]);

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
              <MaterialCommunityIcons name="trophy" size={30} color={color} />
            );
          }
          if (route.name === 'Points') {
            return (
              <MaterialCommunityIcons name="medal" size={30} color={color} />
            );
          }
          if (route.name === 'Trainings') {
            return (
              <MaterialCommunityIcons name="dumbbell" size={30} color={color} />
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
          paddingLeft: 20,
          paddingRight: 20,
          height: Platform.OS === 'ios' ? 95 : 75,
          paddingBottom: Platform.OS === 'ios' ? 25 : 10,
          paddingTop: 15,
          backgroundColor: client === 'qualidadeVida' ? '#009fe3' : '#fb6c02',
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
      {hasRegister[0]?.active && !blocked && (
        <>
          <Tab.Screen
            name="Trainings"
            component={TrainingsRoutes}
            options={{ title: `Treinos` }}
          />
          <Tab.Screen
            name="Challenges"
            component={ChallengesRoutes}
            options={{ title: 'Desafios' }}
          />

          <Tab.Screen
            name="Points"
            component={Points}
            options={{ title: 'Pontos' }}
          />
        </>
      )}

      {/* <Tab.Screen name="Ranking" component={Ranking} /> */}
    </Tab.Navigator>
  );
}
