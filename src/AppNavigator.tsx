import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeNavigator} from './modules/home/HomeNavigator';
import {PlacesListPage} from './modules/home/pages/PlacesListPage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import appPages from './appPages.json';
import {primaryColor} from './shared/constants/colors';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={appPages.map}>
      <Tab.Screen
        name={appPages.map}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: primaryColor,
          tabBarIcon: ({color, size}) => {
            return <Icon name="public" size={size} color={color} />;
          },
          tabBarLabel: 'Mapa',
        }}
      />
      <Tab.Screen
        name={appPages.places}
        component={PlacesListPage}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="favorite" size={size} color={color} />;
          },
          tabBarLabel: 'Favoritos',
          headerTitle: 'Locais Favoritos',
          tabBarActiveTintColor: primaryColor,
        }}
      />
    </Tab.Navigator>
  );
};
