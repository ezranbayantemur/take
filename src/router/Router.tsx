import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '@route';
import {Login, Register, Discover, Products} from '../pages';
import {styles} from './Router.style';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'take',
          headerTitleStyle: styles.headerTitle,
          headerBackVisible: false,
        }}>
        <Stack.Screen name={routes.LOGIN} component={Login} />
        <Stack.Screen name={routes.REGISTER} component={Register} />
        <Stack.Screen name={routes.DISCOVER} component={Discover} />
        <Stack.Screen name={routes.PRODUCTS} component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
