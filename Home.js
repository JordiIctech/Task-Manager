import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js"

export function HomeScreen({ navigation }) { //Screen 1, need to pass the navigation variable from the top.
    return (
      <View style={styles.defaulted}>
        <Text style={{fontSize: "25"}}>Home Screen!</Text>
        
        <TouchableOpacity style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('Testing')}>
        <Image style={styles.homebutton} 
          source={require('./assets/videoicon.png')} />
          <Text style={{color: "red"}}>Test Environment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('Calculator')}>
        <Image style={styles.homebutton} 
          source={require('./assets/videoicon.png')} />
          <Text style={styles.hometext}>Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('Tasks')}>
        <Image style={styles.homebutton} 
          source={require('./assets/videoicon.png')} />
          <Text style={styles.hometext}>Task Manager</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('Platformer')}>
        <Image style={styles.homebutton} 
          source={require('./assets/videoicon.png')} />
          <Text style={styles.hometext}>Platformer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('Video')}>
        <Image style={styles.homebutton} 
          source={require('./assets/videoicon.png')} />
          <Text style={styles.hometext}>Video</Text>
        </TouchableOpacity>


        
  
      </View>
    );
  }