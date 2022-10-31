import AsyncStorage from '@react-native-async-storage/async-storage';
import {Place} from '../../types/place';

const placesKey = '@places_key';

export const getPlaces = async (): Promise<Place[]> => {
  const rawData = await AsyncStorage.getItem(placesKey);
  if (rawData === null) {
    return [];
  } else {
    const placesList = JSON.parse(rawData);
    return placesList;
  }
};

export const createPlace = async (newPlace: Place): Promise<void> => {
  const placesList = await getPlaces();
  placesList.push(newPlace);
  const rawData = JSON.stringify(placesList);
  await AsyncStorage.setItem(placesKey, rawData);
};
