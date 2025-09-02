import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';

let appState = {
    user: {
        name: '',
        email: '',
        searchRadius: 10
    },
    isLoggedIn: false,
    currentLocation: null
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
