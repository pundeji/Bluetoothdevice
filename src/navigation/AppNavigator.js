// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import QRscanner from '../screens/QRscanner';
import NfcReader from '../screens/NfcReaderScreen';
import ConnectScreen from '../screens/ConnectScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="QRscanner" component={QRscanner} />
        <Stack.Screen name="Nfcreader" component={NfcReader} />
        <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
