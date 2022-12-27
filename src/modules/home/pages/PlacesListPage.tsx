import {ParamListBase, useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {getPlaces} from '../../../shared/services/local_storage/places_service';
import {Place} from '../../../shared/types/place';
import {PlacesListComponent} from '../components/PlacesListComponent';
import {Box, Text} from 'native-base';
import {appActions, useAppDispatch, useAppSelector} from '../../../appStore';
import {placesListActions} from '../slices/placesListSlice';

export const PlacesListPage = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>) => {
  const placesList = useAppSelector(state => state.placesList.places);
  const dispatch = useAppDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getPlaces().then(places =>
        dispatch(placesListActions.setPlacesList({places})),
      );
    }
  }, [isFocused, dispatch]);

  return (
    <Box padding="16px" flex="1" justifyContent="center" alignItems="center">
      {placesList?.length === 0 ? (
        <Text color="#9a9a9a">Nenhum local adicionado</Text>
      ) : (
        <PlacesListComponent
          places={placesList}
          onPress={(place: Place) => {
            dispatch(appActions.setCoordinate({coordinate: place.coordinate}));
            navigation.goBack();
          }}
        />
      )}
    </Box>
  );
};
