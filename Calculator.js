// export function CalculatorScreen() {
import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, SafeAreaView, Text, Button, TouchableOpacity } from "react-native"
import {styles} from "./Stylesdef.js"

export function CalculatorScreen({ navigation }) {
  var passingV = "0"
  var [computedValue, setCount] = useState(0);

  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.calnumbutt} // Numbers 
          onPress={() => passingV += "1"}>
        <Text style={styles.calnums}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => passingV += "2"}>
        <Text style={styles.calnums}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => passingV += "3"}>
        <Text style={styles.calnums}>3</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.calnumbutt} // Operators
          onPress={() => passingV += "+"}>
        <Text style={styles.calnums}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt} 
          onPress={() => passingV += "-"}>
        <Text style={styles.calnums}>-</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.calnumbutt}  //Special Operations
                    //Function creates a function with given input, adding return returns the input //eval(passingV)
          onPress={() => setCount(computedValue = Function("return " + passingV))}>
        <Text style={styles.calnums}>Enter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.calnumbutt}
          onPress={() => setCount(computedValue = "0")}>
        <Text style={styles.calnums}>Clear</Text>
        </TouchableOpacity>

    <StatusBar style="light" // SafeAreaView seems to be non-essential
    />
      <SafeAreaView>
        <Text style={styles.calresult}>
          {computedValue.toLocaleString()} 
        </Text>
      </SafeAreaView>
    </View>
  )
}