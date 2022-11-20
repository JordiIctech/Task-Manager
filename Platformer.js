import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Platformer({ navigation }) { 

    return (

      <View
      style={{
              flexDirection: 'col',
              height: "100%",
              width: "100%",   //Parent View
      }}  //Children can only incapsulate parent size
    >
          
         <Image style = {{ width: "100%", height: "100%", position: "absolute", resizeMode: "stretch"}} 
         source={require("./assets/californiamap.jpg")} />

         <Image style = {{position: "absolute", left: 10, top: 10}} //Position of character based on top left start.
         source={require("./assets/Sprite-Sigma.webp")} />
        </View>

    );
  }