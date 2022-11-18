import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {FilledButtonComponent} from '../../../shared/components/FilledButtonComponent';
import {createPlace} from '../../../shared/services/local_storage/places_service';
import {HomeStackParamsList} from './HomeStackParamsList';

const maxNameLength = 10;

export const RegisterPlacePage = ({
  route,
  navigation,
}: NativeStackScreenProps<HomeStackParamsList, 'register'>) => {
  const [placeName, setPlaceName] = useState<string>('');
  // const {appState} = useContext(AppContext);
  // const {latitude, longitude} = appState.coordinate;
  const {coordinates} = route.params;
  const {latitude, longitude} = coordinates;
  const date = new Date();

  return (
    <SafeAreaView>
      <RegisterPlaceWrapper>
        <DateTextInput
          value={date.toLocaleDateString('pt-BR')}
          editable={false}
        />
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
              date,
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
const DateTextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-bottom: 8px;
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
