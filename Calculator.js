// export function CalculatorScreen() {
import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, SafeAreaView, Text, Button } from "react-native"
import {styles} from "./Stylesdef.js"

export function CalculatorScreen({ navigation }) {
  var passingV = ""
  var [computedValue, setCount] = useState(0);

  return (
    <View style={styles.container}>

        <Button style={styles.button1} // Numbers for Calculator 
          title="1"
          onPress={() => passingV += "1"}
        />
        <Button style={styles.button1}
          title="2"
          onPress={() => passingV += "2"}
        />
        <Button style={styles.button1}
          title="3"
          onPress={() => passingV += "3"}
        />

        <Button style={styles.button1} // Calculator Operations
          title="+"
          onPress={() => passingV += "+"}
        />
        <Button style={styles.button1}
          title="-"
          onPress={() => passingV += "-"}
        />

        <Button style={styles.button1} //Special Operations
          title="Enter"
          onPress={() => setCount(computedValue = eval(passingV))}
        />
        <Button style={styles.button1} //Special Operations
          title="Clear"
          onPress={() => setCount(computedValue = " ")}
        />

      <StatusBar style="light" />
      <SafeAreaView>
        <Text style={styles.computedValue}>
          {computedValue.toLocaleString()}
        </Text>
      </SafeAreaView>
    </View>
  )
}