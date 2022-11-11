import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen} from "./Home.js"

import {CalculatorScreen} from "./Calculator.js"

import {Tasks} from "./Tasks.js"

import {Testing} from "./Testing.js"

const Stack = createNativeStackNavigator();
/*
initialRouteName: Specifies starting screen
Following name assign a name to the functions above, the functions act as screens.
Component specifies the function linked to name.
Options defines additional options such as page title.
*/
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: '' }}/>
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Testing" component={Testing} options={{ title: '!!!Testing!!!' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
