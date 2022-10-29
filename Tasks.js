import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import {styles} from "./Stylesdef.js" /*This variable {styles} is then used in the view to define the function
                                        that controls its template.*/

export function Tasks({ navigation }) { //Screen 3, popToTop also leads to home screen (aka initialRouteName screen)
    return (
      <View style={styles.button1}>
        <Text>Tasks!</Text>
  
        <Button style={styles.button1}
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