import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Testing({ navigation }) { 
    // M for missing, C for completed.
    var [task1M, setCount1M] = useState(5); // Initial number of tasks missing
    var [task1C, setCount1C] = useState(0); // setCount is just a variable, non specific name
//flex values, one must be zero or negative have the other one full.


    function completion(SM,M,SC,C){ //Add tasks as completed
        SM(M -= 1)
        SC(C += 1)
    }

    function uncompletion(SM,M,SC,C){
        SM(M += 1)
        SC(C -= 1)
    }

    function flexing(taskN, taskS) { //Task number and task start.
        var [taskM, setCount2M] = useState(taskS); 
        var [taskC, setCount2C] = useState(0); 

        return (   // Function inclosed within a "fragment".
            <>   
        <Text style = {{margin: 10}}>{taskC} out of {taskC + taskM} completed</Text>
        <View  style={{ height: "100%", width: "100%", flexDirection: 'row'}}>
        <View style={{ backgroundColor: "green", flex: taskC, marginTop: 10}} />
        <View style={{ backgroundColor: "darkblue", flex: taskM, marginTop: 10}} />

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

    var totaltasks = 1;
    
    var text1 = `Finished ${task1C} out of ${task1C + task1M} doses` // Backticks needed (`)
    
    return (
        <View
        style={{
                flexDirection: 'col',
                height: "10%",
        }} // For a parent view YOU MUST SPECIFY HEIGHT AND WIDTH
      >
{/*Task 1 */}
        <Text style = {{margin: 10}}>{text1}</Text>
        <View  style={{ height: "100%", width: "100%", flexDirection: 'row'}}>
        <View style={{ backgroundColor: "green", flex: task1C, marginTop: 10}} />
        <View style={{ backgroundColor: "darkblue", flex: task1M, marginTop: 10}} />

        <TouchableOpacity style = {styles.taskbuttM} 
          onPress={() => uncompletion(setCount1M, task1M, setCount1C, task1C)}>
        <Text style={styles.tasksign}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.taskbuttP} 
          onPress={() => completion(setCount1M, task1M, setCount1C, task1C)}>
        <Text style={styles.tasksign}>+</Text>
        </TouchableOpacity>
        </View>

{/*Task 2 */}


{/*Flex Task */}
<Text style={styles.tasksign}>+</Text>

{eval("for(let i = 0; i < totaltasks; i++) { \
            flexing(i,10); \
        }")}

        </View>

    );
  }