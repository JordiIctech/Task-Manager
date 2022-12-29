import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Tasks({ navigation }) { 

    function completion(SM,M,SC,C){ //Add tasks as completed
        SM(M -= 1)
        SC(C += 1)
    }

    function uncompletion(SM,M,SC,C){
        SM(M += 1)
        SC(C -= 1)
    }

    // M for missing, C for completed, S for starting number of tasks, O for opacity
    // setCount is just a variable, non specific name
    //flex values, one must be zero or negative have the other one full.
    function flexing(taskS, taskO) { //Task number and task start.
        var [taskM, setCount2M] = useState(taskS); 
        var [taskC, setCount2C] = useState(0); 

        return (   // Function inclosed within a "fragment".
            <>   
        <Text style = {{margin: 10, opacity: taskO}}>{taskC} out of {taskC + taskM} completed</Text>
        <View  style={{height: "100%", width: "100%", flexDirection: 'row', opacity: taskO}}>
        <View style={{ backgroundColor: "#009900", flex: taskC, marginTop: 10}} />
        <View style={{ backgroundColor: "#cc0000", flex: taskM, marginTop: 10}} />

        <TouchableOpacity style = {styles.taskbuttM} 
          onPress={() => uncompletion(setCount2M, taskM, setCount2C, taskC)}>
        <Text style={styles.tasksign}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.taskbuttP} 
          onPress={() => completion(setCount2M, taskM, setCount2C, taskC)}>
        <Text style={styles.tasksign}>+</Text>
        </TouchableOpacity>
        </View>
        </>  
        );
    }
    
    return (
        <View
        style={{
                flexDirection: 'col',
                height: "10%",
        }} // For a parent view YOU MUST SPECIFY HEIGHT AND WIDTH
      >

{/*Flex Task */}

{flexing(10, "100%")}
{flexing(15, "100%")}
{flexing(11, "100%")}
{flexing(67, "100%")}
{flexing(3, "100%")}
{flexing(34, "0%")}

        </View>

    );
  }