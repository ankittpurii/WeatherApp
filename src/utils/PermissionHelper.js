import { check, RESULTS, request, PERMISSIONS } from 'react-native-permissions';
import { Linking, Platform, PermissionsAndroid } from 'react-native';       

export const PERMISSION_DENIED = -1;
export const PERMISSION_SUCCESS = 1;
export const PERMISSION_BLOCKED = 0;

export const requestPermission = async (permission) => {
  let result = await request(permission);
  if (result) {
    Log(result);
  } else Log('error');
};

export const LOCATION_PERMISSION = {
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
};

export const hasLocationPermission = async () => {
  let result = await check(Platform.select(LOCATION_PERMISSION));
  if (Platform.OS === 'android' && result === RESULTS.DENIED) {
    await requestPermission(Platform.select(LOCATION_PERMISSION))
    result = await check(Platform.select(LOCATION_PERMISSION));
  }
  if (result === RESULTS.GRANTED) {
    return true;
  } else {
    return false;
  }
};