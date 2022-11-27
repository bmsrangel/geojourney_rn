import {ParamListBase, useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import {getPlaces} from '../../../shared/services/local_storage/places_service';
import {Place} from '../../../shared/types/place';
import {AppContext} from '../../../AppContext';
import {PlacesListComponent} from '../components/PlacesListComponent';
import {Box, Text} from 'native-base';

export const PlacesListPage = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>) => {
  const [placesList, setPlacesList] = useState<Place[]>();
  const {appState, setAppState} = useContext(AppContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getPlaces().then(setPlacesList);
    }
  }, [isFocused]);

  return (
    <Box padding="16px" flex="1" justifyContent="center" alignItems="center">
      {placesList?.length === 0 ? (
        <Text color="#9a9a9a">Nenhum local adicionado</Text>
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
    </Box>
  );
};
