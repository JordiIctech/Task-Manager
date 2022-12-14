import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Audio from 'expo-audio';

const soundFiles = [
  'sound1.mp3',
  'sound2.mp3',
  'sound3.mp3',
  'sound4.mp3',
];

export default class App extends React.Component {
  state = {
    sound: null,
  };

  async componentDidMount() {
    // Load a sound file into the audio player
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(
        require('./assets/' + soundFiles[Math.floor(Math.random() * soundFiles.length)])
      );
      this.setState({ sound });
    } catch (error) {
      // Handle loading error
      console.log(error);
    }
  }

  async playSound() {
    // Play the sound
    try {
      await this.state.sound.playAsync();
      // Your sound is playing!
    } catch (error) {
      // Handle playback error
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Play Sound"
          onPress={() => this.playSound()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});