import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Platformer({ navigation }) { 

    return (

      <View
      style={{
              flexDirection: 'col',
              height: "50%",
              width: "100%",   //Parent View
      }}  //Children can only incapsulate parent size
    >
          
         <Image style = {{ width: "100%", height: "50%", resizeMode: "cover"}} source={require("./assets/PrimevalMountain.png")} />
         <Text style = {{margin: 10}}>completed</Text>
        </View>

    );
  }