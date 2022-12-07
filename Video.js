import React, { useState, useEffect } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js" 
import { Audio } from 'expo-av';

export function Video({ navigation }) { 

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/PassingThrough.mp3')
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

    return (
        
        <View>

        <TouchableOpacity onPress={()=> playSound()}>
        <Image style={{position: "center", width: "100%", height: "50%", resizeMode: "contain"}} 
        source={require('./assets/icon.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> playSound()}>
        <Image style={{position: "center" ,width: "100%" , height: "60%", resizeMode: "contain"}} 
        source={require('./assets/skelly.gif')} />
        </TouchableOpacity>
        
        </View>

    );
}