import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '@route';
import {Login, Register, Discover, Products, ProductDetail} from '../pages';
import {styles} from './Router.style';
import {CartHeader} from '@components';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'take',
          headerTitleStyle: styles.headerTitle,
          headerBackVisible: false,
          contentStyle: styles.content,
          headerRight: CartHeader,
        }}>
        <Stack.Screen
          name={routes.LOGIN}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name={routes.REGISTER} component={Register} />
        <Stack.Screen name={routes.DISCOVER} component={Discover} />
        <Stack.Screen name={routes.PRODUCTS} component={Products} />
        <Stack.Screen name={routes.PRODUCT_DETAIL} component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
