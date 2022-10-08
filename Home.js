import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

//Logo is variable used imported from above. Image #2 in assets, #1 in url.
export default function App() {
  return (
    <View style={styles.container}>

      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo}/>
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
      <Image source={logo} style={styles.logo} />

      <TouchableOpacity
        onPress={() => alert('Howdy!')}
        style={styles.button1}>
        <Text style={styles.buttontext1}>Pick a photo</Text>
      </TouchableOpacity>

    </View>
  );
}

/*Variable sheet to specify styles.*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
    marginTop: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button1: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 5,
  },
  buttontext1: {
    fontSize: 20,
    color: '#fff',
  }
});