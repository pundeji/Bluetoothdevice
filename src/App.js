// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import QRScannerScreen from './screens/QRscanner';
import NfcReader from './screens/NfcReaderScreen';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="QRScanner" component={QRScannerScreen} />
      <Stack.Screen name="NfcReader" component={NfcReader} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   Modal,
// } from 'react-native';
// import NfcManager, { NfcTech } from 'react-native-nfc-manager';

// // Start NFC manager on load
// NfcManager.start();

// const App = () => {
//   const [scanning, setScanning] = useState(false);

//   const readNdef = async () => {
//        const isSupported = await NfcManager.isSupported();
//   const isEnabled = await NfcManager.isEnabled();

//   // console.log('NFC supported:', isSupported);
//   // console.log('NFC enabled:', isEnabled);

//   // if (!isSupported) {
//   //   alert('NFC not supported on this device');
//   // } else if (!isEnabled) {
//   //   alert('NFC is supported but not enabled');
//   // } else {
//   //   alert('NFC is supported and enabled');
//   // }

//     try {
//       setScanning(true);
//       await NfcManager.requestTechnology(NfcTech.Ndef);
//       const tag = await NfcManager.getTag();

//       console.log('Tag found:', tag);
//       alert('NFC Tag Detected', JSON.stringify(tag));
//     } catch (ex) {
//       console.warn('NFC Error:', ex);
//       alert('Error', 'Failed to read NFC tag');
//     } finally {
//       setScanning(false);
//       NfcManager.cancelTechnologyRequest();
//     }
//   };

//   return (
//     <View style={styles.wrapper}>
//       <TouchableOpacity style={styles.button} onPress={readNdef}>
//         <Text style={styles.buttonText}>Scan NFC Tag</Text>
//       </TouchableOpacity>

//       {scanning && (
//         <Modal transparent animationType="fade">
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <ActivityIndicator size="large" color="#fff" />
//               <Text style={{ color: '#fff', marginTop: 10 }}>
//                 Hold NFC tag near your phone...
//               </Text>
//             </View>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   button: {
//     backgroundColor: '#0080ff',
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: '#222',
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
// });

// export default App;
