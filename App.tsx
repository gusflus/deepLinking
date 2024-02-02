import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Explore from './src/Explore';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['projname://', 'https://projname'], // can also wildcard with *.projname://
  config: {
    screens: {
      initialRouteName: 'Explore',
      Home: 'home/:id',
      Explore: {
        path: 'explore',
        initialRouteName: 'TestPage2',
        screens: {
          TestPage1: 'testpage1/:id',
          TestPage2: 'testpage2/:id',
        },
      },
    },
  },
};

/* deep linking: https://reactnavigation.org/docs/configuring-links

  access link usingg: npx uri-scheme open projname://home/123 --ios
*/

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Explore" component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
