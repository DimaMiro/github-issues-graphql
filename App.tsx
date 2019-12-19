import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import AppNavigator from './src/shared/AppNavigator';

export default function App() {
  return (
      <View style={{ flex: 1 }}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <AppNavigator/>
      </View>
  );
}
