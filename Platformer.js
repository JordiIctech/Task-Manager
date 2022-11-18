import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Platformer({ navigation }) { 
    // M for missing, C for completed.
    var [task1M, setCount1M] = useState(5); // Initial number of tasks missing
    var [task1C, setCount1C] = useState(0); // setCount is just a variable, non specific name

    var [task2M, setCount2M] = useState(20); //flex values, one must be zero or negative have the other one full.
    var [task2C, setCount2C] = useState(0); 

    function completion(SM,M,SC,C){ //Add tasks as completed
        SM(M -= 1)
        SC(C += 1)
    }

    function uncompletion(SM,M,SC,C){
        SM(M += 1)
        SC(C -= 1)
    }

    return (
        <View
        style={{
                flexDirection: 'col',
                height: "10%",
        }} // For a parent view YOU MUST SPECIFY HEIGHT AND WIDTH
      >
{/*Task 1 */}
        <Text style = {{margin: 10}}>Finished {task1C} out of {task1C + task1M} doses</Text>
        <View  style={{ height: "100%", width: "100%", flexDirection: 'row'}}>

        <View style={{ backgroundColor: "green", flex: task1C, marginTop: 10}} />
        <View style={{ backgroundColor: "red", flex: task1M, marginTop: 10}} />

        <TouchableOpacity style = {styles.taskbuttM} 
          onPress={() => uncompletion(setCount1M, task1M, setCount1C, task1C)}>
        <Text style={styles.tasksign}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.taskbuttP} 
          onPress={() => completion(setCount1M, task1M, setCount1C, task1C)}>
        <Text style={styles.tasksign}>+</Text>
        </TouchableOpacity>
        </View>

{/*Task 2*/}
        <Text style = {{margin: 10}}>{task2C} out of {task2C + task2M} completed</Text>

        <View  style={{ height: "100%", width: "100%", flexDirection: 'row'}}>
        <View style={{ backgroundColor: "green", flex: task2C, marginTop: 10}} />
        <View style={{ backgroundColor: "red", flex: task2M, marginTop: 10}} />

        <TouchableOpacity style = {styles.taskbuttM} 
          onPress={() => uncompletion(setCount2M, task2M, setCount2C, task2C)}>
        <Text style={styles.tasksign}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.taskbuttP} 
          onPress={() => completion(setCount2M, task2M, setCount2C, task2C)}>
        <Text style={styles.tasksign}>+</Text>
        </TouchableOpacity>
        </View>


        <View  style={{ height: "100%", width: "100%", flexDirection: 'row'}}>
            
        </View>



        </View>

    );
  }