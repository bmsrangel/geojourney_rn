import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const LoaderWrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoaderComponent = () => {
  return (
    <LoaderWrapper>
      <ActivityIndicator size={32} />
    </LoaderWrapper>
  );
};
