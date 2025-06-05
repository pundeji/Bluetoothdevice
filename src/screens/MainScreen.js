import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import usePermissionStatus from '../components/PermissionStatus';
import NfcReader from './NfcReaderScreen';


const MainScreen = ({ navigation }) => {
  const { status, requestPermissions } = usePermissionStatus();

  const getEmoji = (granted) => (granted ? '✅' : '❌');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Permission Status -</Text>

      <View style={styles.row}>
        <Text style= { styles.text}>Bluetooth: {getEmoji(status.bluetooth)}</Text>
      </View>

      <View style={styles.row}>
        <Text style= { styles.text}>Location: {getEmoji(status.location)}</Text>
      </View>

      <View style={styles.row}>
        <Text style= { styles.text}>Camera: {getEmoji(status.camera)}</Text>
      </View>

      <Button title="Request Permissions" onPress={requestPermissions} />

      {status.bluetooth && status.location && status.camera && (
        <>
          <View style={styles.spacer} />
          <Button
            title="Scan QR Code"
            onPress={() => navigation.navigate('QRScanner')}
          />
          <View style={styles.spacer} />
          <Button
            title="Scan NFC Tag"
            onPress={() => navigation.navigate('NfcReader')} // 👈 make sure to register this screen in your navigator
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    color: 'red',
  },
  text: {

    fontSize: 18,
    color: '#333',
  },
  spacer: {
    height: 10,
  },
});

export default MainScreen;
