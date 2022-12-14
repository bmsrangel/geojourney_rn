import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeNavigator} from './modules/home/HomeNavigator';
import {PlacesListPage} from './modules/home/pages/PlacesListPage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import appPages from './appPages.json';
import {ProfilePage} from './modules/home/pages/ProfilePage';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={appPages.map}>
      <Tab.Screen
        name={appPages.map}
        component={HomeNavigator}
        options={{
          headerShown: false,
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
        }}
      />
      <Tab.Screen
        name={appPages.profile}
        component={ProfilePage}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="person" size={size} color={color} />;
          },
          tabBarLabel: 'Perfil',
          headerTitle: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
};
