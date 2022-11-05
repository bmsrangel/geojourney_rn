import React, {useContext} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {AppContext} from '../../../AppContext';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const HomePageWrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>) => {
  const {appState} = useContext(AppContext);
  return (
    <HomePageWrapper>
      <Text
        onPress={() => {
          navigation.navigate('Register');
        }}>
        {appState.coordinate.latitude}, {appState.coordinate.longitude}
      </Text>
    </HomePageWrapper>
  );
};
