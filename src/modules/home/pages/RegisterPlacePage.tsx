import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {FilledButtonComponent} from '../../../shared/components/FilledButtonComponent';

export type RegisterPlacePageProps = {
  latitude: number;
  longitude: number;
};

export const RegisterPlacePage = ({
  latitude,
  longitude,
}: RegisterPlacePageProps) => {
  return (
    <SafeAreaView>
      <RegisterPlaceWrapper>
        <NameTextInput placeholder="Nome do local" />
        <CoordinateText>
          Coordenada: {latitude}°, {longitude}°
        </CoordinateText>
        <FilledButtonComponent label="Registrar" />
      </RegisterPlaceWrapper>
    </SafeAreaView>
  );
};

const RegisterPlaceWrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const NameTextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-bottom: 16px;
`;

const CoordinateText = styled.Text`
  margin-bottom: 32px;
`;
