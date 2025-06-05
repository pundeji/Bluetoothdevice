import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, Alert, Linking } from 'react-native';

const usePermissionStatus = () => {
  const [status, setStatus] = useState({
    bluetooth: false,
    location: false,
    camera: false,
  });

  const checkPermissions = async () => {
    let bluetooth = true;
    let location = true;
    let camera = true;

    if (Platform.OS === 'android') {
      location = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      camera = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );

      if (Platform.Version >= 31) {
        const scan = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN
        );
        const connect = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
        );
        bluetooth = scan && connect;
      }
    }

    setStatus({ bluetooth, location, camera });
  };

  const requestPermissions = async () => {
    let bluetooth = true;
    let location = true;
    let camera = true;

    if (Platform.OS === 'android') {
      const loc = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      location = loc === PermissionsAndroid.RESULTS.GRANTED;

      const cam = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      camera = cam === PermissionsAndroid.RESULTS.GRANTED;

      if (Platform.Version >= 31) {
        const scan = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN
        );
        const connect = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
        );
        bluetooth =
          scan === PermissionsAndroid.RESULTS.GRANTED &&
          connect === PermissionsAndroid.RESULTS.GRANTED;
      }
    }

    setStatus({ bluetooth, location, camera });

    if (!location || !bluetooth || !camera) {
      Alert.alert(
        'Permission Required',
        'Please enable Camera, Bluetooth and Location permissions in settings.',
        [{ text: 'Open Settings', onPress: () => Linking.openSettings() }]
      );
    }
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  return { status, requestPermissions };
};

export default usePermissionStatus;
