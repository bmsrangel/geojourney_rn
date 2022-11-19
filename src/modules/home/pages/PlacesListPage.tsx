import {ParamListBase, useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {getPlaces} from '../../../shared/services/local_storage/places_service';
import {Place} from '../../../shared/types/place';
import {AppContext} from '../../../AppContext';
import {PlacesListComponent} from '../components/PlacesListComponent';

export const PlacesListPage = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>) => {
  const [placesList, setPlacesList] = useState<Place[]>();
  const {appState, setAppState} = useContext(AppContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log('Effect');
      getPlaces().then(setPlacesList);
    }
  }, [isFocused]);

  return (
    <ListWrapper>
      {placesList?.length === 0 ? (
        <Text>Nenhum local adicionado</Text>
      ) : (
        <PlacesListComponent
          places={placesList}
          onPress={(place: Place) => {
            setAppState({
              ...appState,
              coordinate: place.coordinate,
            });
            navigation.goBack();
          }}
        />
      )}
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
