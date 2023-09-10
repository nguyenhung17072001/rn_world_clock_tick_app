import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './Drawer';
import Splash from './Splash';
import OnBoarding from './OnBoarding';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen
        name="First"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Second"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Third"
        component={Drawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
