// export function CalculatorScreen() {
import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, SafeAreaView, Text, Button, TouchableOpacity } from "react-native"
import {styles} from "./Stylesdef.js"

export function CalculatorScreen({ navigation }) {
  var [computedValue, setCount] = useState(" ");
  
  function calint(calfun) {
    return Function(`'use strict'; return (${calfun})`)()
  }
  
  return (
    <View style={styles.container}>

        <SafeAreaView style={styles.resultbutt}>
            <Text style={styles.calresult}>
            {computedValue.toLocaleString()} 
            </Text>
        </SafeAreaView>

        <TouchableOpacity style={styles.calnumbutt} // Numbers 
          onPress={() => computedValue = setCount(computedValue + "1")}>
        <Text style={styles.calnums}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "2")}>
        <Text style={styles.calnums}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "3")}>
        <Text style={styles.calnums}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "4")}>
        <Text style={styles.calnums}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "5")}>
        <Text style={styles.calnums}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "6")}>
        <Text style={styles.calnums}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "7")}>
        <Text style={styles.calnums}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "8")}>
        <Text style={styles.calnums}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "9")}>
        <Text style={styles.calnums}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => computedValue = setCount(computedValue + "0")}>
        <Text style={styles.calnums}>0</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.calnumbutt} // Operators
        //PasteInt removes zeros, which can't be used in strict mode.
          onPress={() => setCount(computedValue = parseInt(computedValue, 10) + "+")}>
        <Text style={styles.calnums}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => setCount(computedValue = parseInt(computedValue, 10) + "*")}>
        <Text style={styles.calnums}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => setCount(computedValue = parseInt(computedValue, 10) + "-")}>
        <Text style={styles.calnums}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => setCount(computedValue = parseInt(computedValue, 10) + "/")}>
        <Text style={styles.calnums}>÷</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.calnumbutt} //Special Operations
          onPress={() => setCount(computedValue = " ")}>
        <Text style={styles.calnums}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt}  
                    //Function creates a function with given input, adding return returns the input // computedValue = Function("return " + passingV)
        onPress={() => setCount(computedValue = calint(computedValue))}>
        <Text style={styles.calnums}>Enter</Text>
        </TouchableOpacity>


    <StatusBar style="light" // SafeAreaView seems to be non-essential
    />

    </View>
  )
}