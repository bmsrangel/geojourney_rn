import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {AppContext} from '../../../AppContext';
import {FilledButtonComponent} from '../../../shared/components/FilledButtonComponent';
import {createPlace} from '../../../shared/services/local_storage/places_service';

const maxNameLength = 10;

export const RegisterPlacePage = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>) => {
  const [placeName, setPlaceName] = useState<string>('');
  const {appState} = useContext(AppContext);
  const {latitude, longitude} = appState.coordinate;

  return (
    <SafeAreaView>
      <RegisterPlaceWrapper>
        <NameTextInput
          placeholder="Nome do local"
          value={placeName}
          onChangeText={setPlaceName}
          maxLength={maxNameLength}
          numberOfLines={1}
        />
        <WordsCounter>
          {placeName.length}/{maxNameLength}
        </WordsCounter>
        <CoordinateText>
          Coordenada: {latitude}°, {longitude}°
        </CoordinateText>
        <FilledButtonComponent
          label="Registrar"
          onPressed={() => {
            createPlace({
              name: placeName,
              coordinate: {
                latitude,
                longitude,
              },
            });
            navigation.goBack();
          }}
        />
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
`;

const CoordinateText = styled.Text`
  margin-bottom: 32px;
`;

const WordsCounter = styled.Text`
  align-self: flex-end;
  margin-bottom: 16px;
`;
