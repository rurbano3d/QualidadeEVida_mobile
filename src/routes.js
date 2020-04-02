import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';

import logo from '~/assets/logoHorizontal.png';
import ExitButton from '~/components/Exit';
import UserButton from '~/components/User';

import SignIn from '~/pages/SignIn';
import DashboardRouter from '~/routes/Dashboard';

import User from '~/pages/User';
import Evaluation from '~/pages/Evaluation';
import Category from '~/pages/Category';
import MyCategory from '~/pages/MyCategory';
import PointDetail from '~/pages/PointDetail';
import RankingDetail from '~/pages/RankingDetail';

const Stack = createStackNavigator();

export default function Routes({ signed }) {
  function Logo() {
    return <Image source={logo} style={{ width: 150, resizeMode: 'cover' }} />;
  }

  return (
    <Stack.Navigator>
      {signed === false ? (
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
            title: 'Sign in',
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: signed ? 'pop' : 'push',
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Dashboard"
            component={DashboardRouter}
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => <Logo />,
              headerLeft: () => <UserButton />,
              headerRight: () => <ExitButton />,
            }}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => <Logo />,
              headerRight: () => <ExitButton />,
            }}
          />
          <Stack.Screen
            name="Evaluation"
            component={Evaluation}
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => <Logo />,
              headerRight: () => <ExitButton />,
            }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => <Logo />,
              headerRight: () => <ExitButton />,
            }}
          />
          <Stack.Screen
            name="MyCategory"
            component={MyCategory}
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => <Logo />,
              headerRight: () => <ExitButton />,
            }}
          />
          <Stack.Screen
            name="PointDetail"
            component={PointDetail}
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => <Logo />,
              headerRight: () => <ExitButton />,
            }}
          />
          <Stack.Screen
            name="RankingDetail"
            component={RankingDetail}
            options={{
              headerTitleAlign: 'center',
              headerTitle: () => <Logo />,
              headerRight: () => <ExitButton />,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
Routes.propTypes = {
  signed: PropTypes.bool.isRequired,
};
