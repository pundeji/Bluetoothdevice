// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import QRscanner from '../screens/QRscanner';
import NfcReader from '../screens/NfcReaderScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="QRscanner" component={QRscanner} />
        <Stack.Screen name="Nfcreader" component={NfcReader} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
