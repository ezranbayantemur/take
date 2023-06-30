import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import {styles} from './Router.style';
import {Login, Register} from '../pages';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: styles.content,
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
