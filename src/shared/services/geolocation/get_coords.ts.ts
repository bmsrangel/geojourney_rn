import Geolocation from 'react-native-geolocation-service';
import {Coord} from '../../types/coord';

export const getCoords = (): Promise<Coord | undefined> => {
  return new Promise(resolve => {
    Geolocation.getCurrentPosition(
      position => {
        position?.coords &&
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
      },
      _ => {
        resolve(undefined);
      },
    );
  });
};
