import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Platformer({ navigation }) { 

  var [leftP, setCountL] = useState(0); 
  var [topP, setCountT] = useState(0); 

  function position(L,T){
    setCountL(leftP = L)
    setCountT(topP = P)
  }


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

         <Image style = {{position: "absolute", left: leftP, top: topP}} //Position of character based on top left start.
         source={require("./assets/Sprite-Sigma.webp")} />




        <TouchableOpacity onPress={()=> setCountL(1,1)}>
          <Image style={{position: "absolute", transform: [{rotate: '90deg'}], left: 10, top: 10}} 
          source={require('./assets/pizzabase.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> setCountL(1,1)}>
          <Image style={{position: "absolute", transform: [{rotate: '0deg'}], left: 10, top: 10, width: 100}} 
          source={require('./assets/arrowbox.png')} />
        </TouchableOpacity>

        </View>

    );
  }