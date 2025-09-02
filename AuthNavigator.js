import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import HomeTabs from './HomeTabs';
import { UserContext } from '../context/UserContext';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  const { user } = useContext(UserContext);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={HomeTabs} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}
