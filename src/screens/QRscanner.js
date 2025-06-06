import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { Button, Dialog } from '@rneui/themed';
import styles from './../styles/Style';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';

function QRscanner() {
  const [qrValue, setQrValue] = useState('');
  const [qrDetails, setQrDetails] = useState(null);
  const [macId, setMacId] = useState('');
  const [light, setLight] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const scannerRef = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <QRCodeScanner
        ref={scannerRef}
        onRead={(e) => {
          setShowDialog(true);
          setQrValue(e.data);
          try {
            const parsed = JSON.parse(e.data);
            setQrDetails(parsed);
            if (parsed['MAC ID']) {
              setMacId(parsed['MAC ID']);
            }
          } catch (err) {
            setQrDetails(null);
            setMacId('');
          }
        }}
        flashMode={light ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.auto}
        topContent={<></>}
        bottomContent={
          <Button
            title={`Flash ${light ? 'OFF' : 'ON'}`}
            icon={{ ...styles.iconButtonHome, size: 20, name: 'qr-code-scanner' }}
            iconContainerStyle={styles.iconButtonHomeContainer}
            titleStyle={{ ...styles.titleButtonHome, fontSize: 20 }}
            buttonStyle={{ ...styles.buttonHome, height: 50 }}
            containerStyle={{ ...styles.buttonHomeContainer, marginTop: 20, marginBottom: 10 }}
            onPress={() => {
              setLight(!light);
            }}
          />
        }
      />

      <Dialog isVisible={showDialog} onBackdropPress={() => setShowDialog(!showDialog)}>
        <Dialog.Title titleStyle={{ color: '#000', fontSize: 25 }} title="Scanned QR:" />
        <Text style={{ color: '#000', fontSize: 20 }}>{qrValue}</Text>
        {macId ? (
          <>
            <Text style={{ color: '#000', fontSize: 20, marginTop: 10 }}>MAC ID: {macId}</Text>
            <Button
              title="Go to Bluetooth Connection"
              buttonStyle={{ marginTop: 15 }}
              onPress={() => {
                setShowDialog(false);
                navigation.navigate('ConnectScreen', { macId });
              }}
            />
          </>
        ) : null}
        <Dialog.Actions>
          <Dialog.Button
            title="Scan Again"
            onPress={() => {
              scannerRef.current?.reactivate();
              setShowDialog(false);
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

export default QRscanner;
