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

// const NfcReader = () => {
//   const [scanning, setScanning] = useState(false);

//   const readNdef = async () => {
    
//     try {

//       console.log('NFC Reader', 'Please hold your NFC tag near the phone.');
//       setScanning(true);

//       await NfcManager.requestTechnology(NfcTech.Ndef);

//       console.log('NFC Reader', 'NFC technology requested. Please hold your tag near the phone.');
//       const tag = await NfcManager.getTag();

//       console.log('NFC Reader', 'NFC tag detected. Reading data...');

//       console.log('Tag found:', tag);
//       console.log('NFC Tag Detected', JSON.stringify(tag));
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
//     marginTop: 20,
//     alignItems: 'center',
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

// export default NfcReader;


import { View, Text } from 'react-native'
import React from 'react'

const NfcReaderScreen = () => {
  return (
    <View>
      <Text>NfcReaderScreen</Text>
    </View>
  )
}

export default NfcReaderScreen