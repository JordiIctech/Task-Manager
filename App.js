import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) { //Screen 1, need to pass the navigation variable from the top.
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen!</Text>
      
      <Button
        title="Go to Calculator"
        onPress={() => navigation.navigate('Calculator')}
      />
      <Button title="Go to Tasks" onPress={() => navigation.navigate('Tasks')}/>

    </View>
  );
}

import {CalculatorScreen} from "./Calculator.js"

function Tasks({ navigation }) { //Screen 3, popToTop also leads to home screen (aka initialRouteName screen)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calculator!</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />

    </View>
  );
}


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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
