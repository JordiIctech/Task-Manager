import React, { useState } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Platformer({ navigation }) { 



  function position(SL, L, ST, T, Vel){
      SL(leftP += L*Vel)
      ST(topP += T*Vel)
  }

  var [leftP, setCountL] = useState(0); 
  var [topP, setCountT] = useState(0); 

  var velocity = 10

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

         <Image style = {{position: "absolute", top: topP, left: leftP}} //Position of character based on top left start.
         source={require("./assets/Sprite-Sigma.webp")} />



{/*Straight Arrows*/}
        <TouchableOpacity onPress={()=> position(setCountL,1,setCountT,0,velocity)}>
          <Image style={{position: "absolute", transform: [{rotate: '0deg'}], //Right
          left: 380, top: 720, width: 40, height: 40}} 
          source={require('./assets/arrowstraight.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> position(setCountL,0,setCountT,1,velocity)}>
          <Image style={{position: "absolute", transform: [{rotate: '90deg'}], //Bottom
          left: 335, top: 765, width: 40, height: 40}} 
          source={require('./assets/arrowstraight.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> position(setCountL,-1,setCountT,0,velocity)}>
          <Image style={{position: "absolute", transform: [{rotate: '180deg'}], //Left
          left: 290, top: 720, width: 40, height: 40}} 
          source={require('./assets/arrowstraight.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> position(setCountL,0,setCountT,-1,velocity)}>
          <Image style={{position: "absolute", transform: [{rotate: '270deg'}], //Top
          left: 335, top: 675, width: 40, height: 40}} 
          source={require('./assets/arrowstraight.png')} />
        </TouchableOpacity>

{/*Diagonal Arrows*/}
        <TouchableOpacity onPress={()=> position(setCountL,-leftP,setCountT,-topP,1)}>
          <Image style={{position: "absolute", transform: [{rotate: '0deg'}], //Icon
          left: 335, top: 720, width: 40, height: 40}} 
          source={require('./assets/icon.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> position(setCountL,1,setCountT,1,velocity)}>
          <Image style={{position: "absolute", transform: [{rotate: '0deg'}], //Bottom Right
          left: 380, top: 765, width: 40, height: 40}} 
          source={require('./assets/arrowdiagonal.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> position(setCountL,-1,setCountT,1,velocity)}>
          <Image style={{position: "absolute", transform: [{rotate: '90deg'}], //Bottom Left
         left: 290, top: 765, width: 40, height: 40}} 
          source={require('./assets/arrowdiagonal.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> position(setCountL,-1,setCountT,-1,velocity)}>
          <Image style={{position: "absolute", transform: [{rotate: '180deg'}], //Top Left
          left: 290, top: 675, width: 40, height: 40}} 
          source={require('./assets/arrowdiagonal.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> position(setCountL,1,setCountT,-1,velocity)}>
          <Image style={{position: "absolute", transform: [{rotate: '270deg'}], //Top Right
          left: 380, top: 675, width: 40, height: 40}} 
          source={require('./assets/arrowdiagonal.png')} />
        </TouchableOpacity>

        </View>

    );
  }