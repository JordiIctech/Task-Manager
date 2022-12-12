import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Asset } from 'expo-asset';

export function Testing({ navigation }) { 

    const [images, setImages] = useState([]);

  const handlePress = () => {
    const source = Asset.fromModule(require('./assets/icon.png')).uri;
    setImages([...images, source]);
  };

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} title="Add Image" />
      {images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

