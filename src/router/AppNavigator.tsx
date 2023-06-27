import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '@route';
import {Discover, Products, ProductDetail, Cart} from '../pages';
import {CartHeader} from '@components';
import {color} from '@style';
import {styles} from './Router.style';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'take',
        headerTitleStyle: styles.headerTitle,
        contentStyle: styles.content,
        headerRight: CartHeader,
        headerTintColor: color.MONZA,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name={routes.DISCOVER} component={Discover} />
      <Stack.Screen name={routes.PRODUCTS} component={Products} />
      <Stack.Screen name={routes.PRODUCT_DETAIL} component={ProductDetail} />
      <Stack.Screen name={routes.CART} component={Cart} />
    </Stack.Navigator>
  );
}
