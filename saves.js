import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Tasks({ navigation }) { 
    var task1C = 50
    var task1M = 40

    var task2C = 80
    var task2M = 120

    return (
        <View
        style={{
                flexDirection: 'col',
                height: "10%",
        }} // For a parent view YOU MUST SPECIFY HEIGHT AND WIDTH
      >
        <Text style = {{margin: 10}}>Drug A Dose</Text>
        <View  style={{ height: "100%", width: "100%", flexDirection: 'row'}}>
        <View style={{ backgroundColor: "green", flex: task1C, marginTop: 10}} />
        <View style={{ backgroundColor: "red", flex: task1M, marginTop: 10}} />
        </View>
    
        <Text style = {{margin: 10}}>Drug B Dose</Text>
        <View  style={{ height: "100%", width: "100%", flexDirection: 'row'}}>
        <View style={{ backgroundColor: "green", flex: task2C, marginTop: 10}} />
        <View style={{ backgroundColor: "red", flex: task2M, marginTop: 10}} />
        </View>

        </View>

    );
  }