import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function CalculatorScreen({ navigation }) { //Screen 2
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Calculator!
          Calculator
        </Text>
  
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
  
      </View>
    );
  }