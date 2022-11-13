import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomePage} from './pages/HomePage';
import {RegisterPlacePage} from './pages/RegisterPlacePage';
import homePages from './homePages.json';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={homePages.home}>
      <Stack.Screen
        name={homePages.home}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={homePages.register}
        component={RegisterPlacePage}
        options={{
          title: 'Novo local',
        }}
      />
    </Stack.Navigator>
  );
};
