import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

export const connectToDeviceByMac = async (macId, onSuccess, onError) => {
  const subscription = manager.onStateChange((state) => {
    if (state === 'PoweredOn') {
      manager.startDeviceScan(null, null, async (error, device) => {
        if (error) {
          console.error(error);
          if (onError) onError(error.message || error);
          return;
        }

        if (device && device.id === macId) {
          manager.stopDeviceScan();
          try {
            const connectedDevice = await device.connect();
            await connectedDevice.discoverAllServicesAndCharacteristics();
            console.log('Connected to:', connectedDevice.name);
            if (onSuccess) onSuccess(connectedDevice);
          } catch (err) {
            console.error('Connection error:', err);
            if (onError) onError(err.message || err);
          }
        }
      });
      subscription.remove();
    }
  }, true);
};