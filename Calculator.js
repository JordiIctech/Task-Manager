import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import {styles} from "./Stylesdef.js" /*This variable {styles} is then used in the view to define the function
                                      that controls its template.*/

export function CalculatorScreen({ navigation }) { //Screen 2
    return (
        //The format for styles is "style = stylesfile.styleytype"
      <View style={styles.button1}>
        <Text>Calculator!
          Calculator
        </Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
  
      </View>
    );
  }