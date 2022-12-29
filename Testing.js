import React, { useState, useEffect } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js" 

export function Testing({ navigation }) { 

  var [leftP, setCountL] = useState(0); 
  var [topP, setCountT] = useState(0); 
  var [xchange, setCountX] = useState(0); 
  var [ychange, setCountY] = useState(0); 

  var velocity = 10
  let interval
//---------------------------------------------------- Unfinished

function direction(SX, X, SY, Y){
  positions()
  SX(xchange = X)
  SY(ychange = Y)
  console.log("Outer", xchange, ychange)
}

function positions(){
  useEffect(() => {
    var interval = setInterval(() => {
    setCountL(leftP += xchange)
    setCountT(topP += ychange);
    console.log("inner", xchange, ychange);}
    , 3000);
    
    return () => clearInterval(interval);
  }, []); // Not sure what [] does.
}

//---------------------------------------------------- Unfinished

  function coordination(e){
  var coordsX = e.nativeEvent.pageX
  var coordsY = e.nativeEvent.pageY //Just e.nativeEvent to get all coords (remove .locationY)
  if (coordsX < 265 || coordsY < 750){  
    console.log("X", coordsX) 
    console.log("Y", coordsY) }
  }

    return (

      <View onTouchStart={(e) => {coordination(e)}} //Get cordinates of general view and send to outer function
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
        <TouchableOpacity onPress={()=> direction(setCountX,1,setCountY,0)}>
          <Image style={{position: "absolute", transform: [{rotate: '0deg'}], //Right
          left: 380, top: 720, width: 40, height: 40}} 
          source={require('./assets/arrowstraight.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> direction(setCountX,0,setCountY,1)}>
          <Image style={{position: "absolute", transform: [{rotate: '90deg'}], //Bottom
          left: 335, top: 765, width: 40, height: 40}} 
          source={require('./assets/arrowstraight.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> direction(setCountX,-1,setCountY,0)}>
          <Image style={{position: "absolute", transform: [{rotate: '180deg'}], //Left
          left: 290, top: 720, width: 40, height: 40}} 
          source={require('./assets/arrowstraight.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> direction(setCountX,0,setCountY,-1)}>
          <Image style={{position: "absolute", transform: [{rotate: '270deg'}], //Top
          left: 335, top: 675, width: 40, height: 40}} 
          source={require('./assets/arrowstraight.png')} />
        </TouchableOpacity>

{/*Stop Movement*/}
        <TouchableOpacity onPress={()=> direction(setCountX,0,setCountY,0)}>
          <Image style={{position: "absolute", transform: [{rotate: '0deg'}], //Icon
          left: 335, top: 720, width: 40, height: 40}} 
          source={require('./assets/icon.png')} />
        </TouchableOpacity>
{/*Diagonal Arrows*/}
        <TouchableOpacity onPress={()=> direction(setCountX,1,setCountY,1)}>
          <Image style={{position: "absolute", transform: [{rotate: '0deg'}], //Bottom Right
          left: 380, top: 765, width: 40, height: 40}} 
          source={require('./assets/arrowdiagonal.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> direction(setCountX,-1,setCountY,1)}>
          <Image style={{position: "absolute", transform: [{rotate: '90deg'}], //Bottom Left
         left: 290, top: 765, width: 40, height: 40}} 
          source={require('./assets/arrowdiagonal.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> direction(setCountX,-1,setCountY,-1)}>
          <Image style={{position: "absolute", transform: [{rotate: '180deg'}], //Top Left
          left: 290, top: 675, width: 40, height: 40}} 
          source={require('./assets/arrowdiagonal.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> direction(setCountX,1,setCountY,-1)}>
          <Image style={{position: "absolute", transform: [{rotate: '270deg'}], //Top Right
          left: 380, top: 675, width: 40, height: 40}} 
          source={require('./assets/arrowdiagonal.png')} />
        </TouchableOpacity>

        </View>

    );
  }