import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeNavigator} from './modules/home/HomeNavigator';
import {PlacesListPage} from './modules/home/pages/PlacesListPage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import screens from './appPages.json';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={screens.home}>
      <Tab.Screen
        name={screens.home}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={screens.places}
        component={PlacesListPage}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="list" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
