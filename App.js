/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,Text,
  Animated,
  Easing
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
    constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }
  
  render() {
    const spin = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    easing: Easing.back(2)
  })
    return (
      <View style={styles.container}>
        <View style={{width:50,height:50,backgroundColor:'white',borderRadius:25,elevation: 10}}></View>
      <View style={{width:50,height:50,backgroundColor:'yellow',borderRadius:25,elevation: 10}} >
        <Animated.View  style={{
          width: 50,
          height: 50,
          transform: [{rotate: spin}] }}>
            <Text>Hello </Text>
        </Animated.View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
