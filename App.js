import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() { //Screen 1
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen!</Text>
    </View>
  );
}

function CalculatorScreen() { //Screen 2
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calculator!</Text>
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
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
