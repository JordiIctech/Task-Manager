// export function CalculatorScreen() {
import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, SafeAreaView, Text, Button } from "react-native"
import {styles} from "./Stylesdef.js"

export function CalculatorScreen({ navigation }) {
  var passingV = 134 + 9
  var computedValue = passingV

  return (
    <View style={styles.container}>

        <Button style={styles.button1}
          title="1"
          onPress={() => computedValue = 3}
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