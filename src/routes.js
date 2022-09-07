import React from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { useClient } from '~/contexts/client';

import euTreino from '~/styles/themes/euTreino';
import qualidadeVida from '~/styles/themes/qualidadeVida';

import logo from '~/assets/logoHorizontal.png';
import ExitButton from '~/components/Exit';
import UserButton from '~/components/User';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import SignUpComplements from '~/components/SignUp/FormComplements';
import DashboardRouter from '~/routes/Dashboard';

import User from '~/pages/User';
import Evaluation from '~/pages/Evaluation';
import Category from '~/pages/Category';
import MyCategory from '~/pages/MyCategory';
import PointDetail from '~/pages/PointDetail';
import MyTrainingDetail from '~/pages/MyTrainingDetail';
import Order from '~/pages/Order';
import OrderDetail from '~/pages/OrderDetail';
import RankingDetail from '~/pages/RankingDetail';
import Calendar from '~/pages/Calendar';
import Agreement from './pages/Agreement';

import Refresh from '~/pages/Refresh';
import SignOutScreen from '~/pages/SignOutScreen';
import SignOutToken from '~/pages/SignOutToken';

const Stack = createStackNavigator();

export default function Routes({ signed }) {
  const { client } = useClient();
  // const isAgreement = useSelector(state => state.auth.isAgreement);
  const isAgreement = useSelector(state => state.auth.isAgreement);
  function Logo() {
    return (
      <Image
        source={logo}
        style={{ width: 150, resizeMode: 'contain', marginBottom: 5 }}
      />
    );
  }

  return (
    <ThemeProvider
      theme={client === 'qualidadeVida' ? qualidadeVida : euTreino}
    >
      <Stack.Navigator
        screenOptions={{
          cardShadowEnabled: false,
          cardOverlayEnabled: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          headerRight: () => <UserButton />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#dadada',
          },
          headerBackTitleVisible: false,
          headerTintColor: client === 'qualidadeVida' ? '#009fe3' : '#fb6c02',
        }}
        headerMode="float"

        // animation="fade"
      >
        {signed === false ? (
          <>
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
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false,
                title: 'Sign up',
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                // animationTypeForReplace: signed ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="SignUpComplements"
              component={SignUpComplements}
              options={{
                headerShown: false,
                title: 'Sign up Complements',
                gestureEnabled: false,
              }}
            />
          </>
        ) : !isAgreement ? (
          <>
            <Stack.Screen name="Agreement" component={Agreement} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Evaluation" component={Evaluation} />
          </>
        ) : (
          <>
            <Stack.Screen name="Dashboard" component={DashboardRouter} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Evaluation" component={Evaluation} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="MyCategory" component={MyCategory} />
            <Stack.Screen name="PointDetail" component={PointDetail} />
            <Stack.Screen name="TrainingDetail" component={MyTrainingDetail} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} />
            <Stack.Screen name="Calendar" component={Calendar} />
            {/* <Stack.Screen name="RankingDetail" component={RankingDetail} /> */}

            <Stack.Screen name="Refresh" component={Refresh} />
            <Stack.Screen name="SignOutScreen" component={SignOutScreen} />
            <Stack.Screen name="SignOutToken" component={SignOutToken} />
          </>
        )}
      </Stack.Navigator>
    </ThemeProvider>
  );
}
Routes.propTypes = {
  signed: PropTypes.bool.isRequired,
};
