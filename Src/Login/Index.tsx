import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login'


const HomeStack = createNativeStackNavigator();

export default function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Login" component={Login} />

    </HomeStack.Navigator>
  );
}