import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Characters, CharacterDetail } from '../Screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Characters" headerMode="none">
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default Navigator;
