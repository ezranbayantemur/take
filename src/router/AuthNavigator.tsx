import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '@route';
import {Login, Register} from '../pages';
import {CartHeader} from '@components';
import {color} from '@style';
import {styles} from './Router.style';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
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
    </Stack.Navigator>
  );
}
