import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from "./Stylesdef.js"

export function HomeScreen({ navigation }) { //Screen 1, need to pass the navigation variable from the top.
    return (
      <View style={styles.defaulted}>
        <Text>Home Screen!</Text>
        
        <Button
          title="Go to Calculator"
          onPress={() => navigation.navigate('Calculator')}
        />
        <Button title="Go to Tasks" onPress={() => navigation.navigate('Tasks')}/>

        <Button title="Platformer" onPress={() => navigation.navigate('Platformer')}/>

        <Button color = "red" title="Testing Environment" onPress={() => navigation.navigate('Testing')}/>
  
      </View>
    );
  }