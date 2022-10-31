import React, {useContext} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {AppContext} from '../../../AppContext';

const HomePageWrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const HomePage = () => {
  const {appState} = useContext(AppContext);
  return (
    <HomePageWrapper>
      <Text>
        {appState.coordinate.latitude}, {appState.coordinate.longitude}
      </Text>
    </HomePageWrapper>
  );
};
