import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {AppContext} from '../../AppContext';
import {HomePage} from './pages/HomePage';
import {RegisterPlacePage} from './pages/RegisterPlacePage';
import homePages from './homePages.json';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  const {appState} = useContext(AppContext);

  return (
    <Stack.Navigator initialRouteName={homePages.home}>
      <Stack.Screen
        name={homePages.home}
        component={HomePage}
        options={{
          headerTitle: 'Início',
        }}
      />
      <Stack.Screen name={homePages.register}>
        {_ => (
          <RegisterPlacePage
            latitude={appState.coordinate.latitude}
            longitude={appState.coordinate.longitude}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
