import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';

//Logo is variable used imported from above. Image #1 in assets, #2 in url.
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 159 }} />  
      <Text style={{color: '#888', fontSize: 18}}> 
        To share a photo from your phone with a friend, just press the button below! 
      </Text>
      <Image source={{ url: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />
    </View>
  );
}
/*General page style*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
