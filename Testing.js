import React, { useState, useEffect } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js" 
import { Audio } from 'expo-av';

export function Testing({ navigation }) { 

  const [sound, setSound] = React.useState();

  var [soundfile, setFile] = React.useState(0);

  function clicked(set,file){
    set(soundfile = file)
    playSound()
  }


  async function playSound() {
    console.log('Loading Sound');
    
    if(soundfile == "0"){
    const { sound } = await Audio.Sound.createAsync( require(`./assets/${"PassingThrough.mp3"}`)
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();}

    if(soundfile == "1"){
      const { sound } = await Audio.Sound.createAsync( require(`./assets/${"ping.mp3"}`)
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();}

      if(soundfile == "2"){
        const { sound } = await Audio.Sound.createAsync( require(`./assets/${"woosh.mp3"}`)
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();}

        if(soundfile == "3"){
          const { sound } = await Audio.Sound.createAsync( require(`./assets/${"elec.mp3"}`)
          );
          setSound(sound);
          console.log('Playing Sound');
          await sound.playAsync();}
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
        
        <View style= {{flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',}}>

        <TouchableOpacity onPress={()=> clicked(setFile,0)}>
        <Image style={styles.musicplay} 
        source={require('./assets/icon.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> clicked(setFile,1)}>
        <Image style={styles.musicplay}  
        source={require('./assets/skelly.gif')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> clicked(setFile,2)}>
        <Image style={styles.musicplay}  
        source={require('./assets/skelly.gif')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> clicked(setFile,3)}>
        <Image style={styles.musicplay} 
        source={require('./assets/skelly.gif')} />
        </TouchableOpacity>
        
        </View>

    );
}