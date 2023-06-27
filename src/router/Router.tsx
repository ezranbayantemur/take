import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '@route';
import {
  Login,
  Register,
  Discover,
  Products,
  ProductDetail,
  Cart,
} from '../pages';
import {styles} from './Router.style';
import {CartHeader} from '@components';
import {color} from '@style';
import deeplinks from './deeplinks';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer linking={deeplinks}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'take',
          headerTitleStyle: styles.headerTitle,
          contentStyle: styles.content,
          headerRight: CartHeader,
          headerTintColor: color.MONZA,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name={routes.LOGIN}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.REGISTER}
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen name={routes.DISCOVER} component={Discover} />
        <Stack.Screen name={routes.PRODUCTS} component={Products} />
        <Stack.Screen name={routes.PRODUCT_DETAIL} component={ProductDetail} />
        <Stack.Screen name={routes.CART} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
