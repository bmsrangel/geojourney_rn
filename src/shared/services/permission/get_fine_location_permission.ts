import {PermissionsAndroidStatic} from 'react-native';

export const getFineLocationPermission = async (
  permission: PermissionsAndroidStatic,
) => {
  const response = await permission.request(
    permission.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (response !== 'granted') {
    return false;
  } else {
    return true;
  }
};
