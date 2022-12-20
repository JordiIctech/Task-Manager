import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {styles} from "./Stylesdef.js"

export function HomeScreen({ navigation }) { //Screen 1, need to pass the navigation variable from the top.
    return (
      <View style={{flex: 1, width:"100%", height: "100%"}}>
      <Text style={{fontSize: "25", alignSelf:"center", marginTop: 10}}>Home Screen!</Text>


    {/*First view contains page, second contains buttons*/}
      <View style={styles.defaulted}>                        
      
        <TouchableOpacity style={styles.homeparentbutton}
        onPress={() => navigation.navigate('Calculator')}>
        <Image style={styles.homebutton} 
          source={require('./assets/calculatoricon.png')} />
          <Text style={styles.hometext}>Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeparentbutton}
        onPress={() => navigation.navigate('Tasks')}>
        <Image style={styles.homebutton} 
          source={require('./assets/taskicon.png')} />
          <Text style={styles.hometext}>Task Manager</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeparentbutton}
        onPress={() => navigation.navigate('Platformer')}>
        <Image style={styles.homebutton} 
          source={require('./assets/gameicon.png')} />
          <Text style={styles.hometext}>Platformer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeparentbutton}
        onPress={() => navigation.navigate('Music')}>
        <Image style={styles.homebutton} 
          source={require('./assets/videoicon.png')} />
          <Text style={styles.hometext}>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeparentbutton}
        onPress={() => navigation.navigate('Testing')}>
        <Image style={styles.homebutton} 
          source={require('./assets/testingicon.png')} />
          <Text style={{color: "red", fontSize:"20"}}>Test Environment</Text>
        </TouchableOpacity>
      
      </View>
      </View>
    );
  }