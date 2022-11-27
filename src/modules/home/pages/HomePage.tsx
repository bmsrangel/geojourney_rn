import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from '../../../AppContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoaderComponent} from '../../../shared/components/LoaderComponent';
import {Place} from '../../../shared/types/place';
import {getPlaces} from '../../../shared/services/local_storage/places_service';
import {Coord} from '../../../shared/types/coord';
import {HomeStackParamsList} from '../HomeStackParamsList';
import {MapViewComponent} from '../components/MapViewComponent';
import {Box} from 'native-base';

export const HomePage = ({
  navigation,
}: NativeStackScreenProps<HomeStackParamsList>) => {
  const {appState, setAppState} = useContext(AppContext);
  const [savedPlaces, setSavedPlaces] = useState<Place[]>([]);

  useEffect(() => {
    getPlaces().then(setSavedPlaces);
  }, [savedPlaces]);

  const onMapClick = (coordinate: Coord) => {
    setAppState({
      ...appState,
      coordinate: coordinate,
    });
    navigation.navigate('register', {
      coordinates: coordinate,
    });
  };

  return appState.isLoading ? (
    <LoaderComponent />
  ) : (
    <Box width="full" height="full">
      <MapViewComponent
        region={appState.coordinate}
        places={savedPlaces}
        onMapClick={onMapClick}
      />
    </Box>
  );
};
