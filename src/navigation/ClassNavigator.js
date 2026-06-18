import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClassesScreen from '../screens/ClassesScreen';
import DetailClassScreen from '../screens/DetailClassScreen';

const Stack = createNativeStackNavigator();

export default function ClassNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' }
      }}
    >
      <Stack.Screen name="ClassList" component={ClassesScreen} />
      <Stack.Screen name="DetailClass" component={DetailClassScreen} />

    </Stack.Navigator>
  )}