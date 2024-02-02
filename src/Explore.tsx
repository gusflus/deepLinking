import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import TestPage1 from './TestPage1';
import TestPage2 from './TestPage2';

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="TestPage1" component={TestPage1} />
      <Stack.Screen name="TestPage2" component={TestPage2} />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
