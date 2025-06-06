// ConnectScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { connectToDeviceByMac } from '../components/Bluetoothmanager';
import { useRoute } from '@react-navigation/native';

const ConnectScreen = () => {
  const route = useRoute();
  const passedMacId = route.params?.macId || '';
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (passedMacId) handleConnect();
  }, [passedMacId]);

  const handleConnect = () => {
    setStatus('');
    setLoading(true);

    connectToDeviceByMac(
      passedMacId.trim(),
      (device) => {
        alert(`Connected to device: ${device.name || device.id}`);
        setLoading(false);
        setStatus(`✅ Connected to: ${device.name || device.id}`);

      },
      (error) => {
        setLoading(false);
        setStatus(`❌ Error: ${error}`);
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAC ID: {passedMacId}</Text>
      <Button title="Reconnect" onPress={handleConnect} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 10 },
  status: { marginTop: 20, fontSize: 16, textAlign: 'center' },
});

export default ConnectScreen;
