import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomePage} from './pages/HomePage';
import {RegisterPlacePage} from './pages/RegisterPlacePage';
import {HomeStackParamsList} from './HomeStackParamsList';

const Stack = createNativeStackNavigator<HomeStackParamsList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={RegisterPlacePage}
        options={{
          title: 'Novo local',
        }}
      />
    </Stack.Navigator>
  );
};
