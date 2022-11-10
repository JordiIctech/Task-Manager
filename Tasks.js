import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Tasks({ navigation }) { 
    var [task2M, setCount2M] = useState(10); // setCount is just a variable, non specific name
    var [task2C, setCount2C] = useState(0);


    var task1C = 50 //flex values, one must be zero or negative have the other one full.
    var task1M = 40

    function completion(M, C){
        M -= 1
        C += 1
    }

    function uncompletion(M, C){
        M += 1
        C -= 1
    }

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

        <Text style = {{position: "absolute", marginTop: 10}}>-</Text>
        </View>
    
        <Text style = {{margin: 10}}>Drug B Dose</Text>
        <View  style={{ height: "100%", width: "100%", flexDirection: 'row'}}>
        <View style={{ backgroundColor: "green", flex: task2C, marginTop: 10}} />
        <View style={{ backgroundColor: "red", flex: task2M, marginTop: 10}} />

        <TouchableOpacity style = {styles.taskbuttM} 
          onPress={() => setCount2M(task2M += 1)}>
        <Text style={styles.tasksign}>-{task2M}</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.taskbuttP} 
          onPress={() => setCount2C(task2C += 1)}>
        <Text style={styles.tasksign}>+{task2C}</Text>
        </TouchableOpacity>
        </View>

        </View>

    );
  }