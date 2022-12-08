import React, { useState, useEffect } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js" 
import { Audio } from 'expo-av';

export function Video({ navigation }) { 

  const [sound, setSound] = React.useState();

    var soundfile = "PassingThrough.mp3"

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require(`./assets/${soundfile}`)
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

    return ( // Use calculator styling
        
        <View>

        <TouchableOpacity onPress={()=> playSound()}>
        <Image style={{position: "center", width: "100%", height: "50%", resizeMode: "contain", marginTop: 25,}} 
        source={require('./assets/icon.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> playSound()}>
        <Image style={{position: "center" ,width: "100%" , height: "60%", resizeMode: "contain", marginTop: -20}} 
        source={require('./assets/skelly.gif')} />
        </TouchableOpacity>
        
        </View>

    );
}