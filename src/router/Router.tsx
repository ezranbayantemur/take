import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '@route';
import {Login, Register} from '../pages';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routes.LOGIN} component={Login} />
        <Stack.Screen name={routes.REGISTER} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
