
import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';

const QRScannerView = ({ onSuccess }) => {
  const [scanned, setScanned] = useState(false);

  const validateQR = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      const { mac, daq_id, type } = data;

      const macRegex = /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/;
      const validTypes = ['C-MET', 'K-DAQ', 'U-DAQ'];

      if (!mac || !macRegex.test(mac)) throw new Error('Invalid MAC ID');
      if (!daq_id || typeof daq_id !== 'string') throw new Error('Invalid DAQ ID');
      if (!validTypes.includes(type)) throw new Error('Invalid DAQ Type');

      onSuccess(data); // Pass validated QR data to parent
    } catch (err) {
      alert('QR Scan Error', err.message);
      setScanned(false); // Allow rescan
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {!scanned && (
        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={'#FF3D00'}
          frameColor={'#00C853'}
          onReadCode={(event) => {
            setScanned(true);
            validateQR(event.nativeEvent.codeStringValue);
          }}
        />
      )}
      {scanned && (
        <View style={styles.overlay}>
          <Text style={styles.msg}>QR Code scanned! Validating...</Text>
        </View>
      )}
    </View>
  );
};

export default QRScannerView;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  msg: {
    fontSize: 18,
    color: '#333',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
});
