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
var CIR_DIMEN = 30;
var CIR_RADIUS = 15;
var SPRING_CONFIG = {tension: 2, friction: 3}; 

export default class App extends Component<Props> {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount(){
    this.animate()
  }
  animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }
  ).start(() => this.animate())
}
  

  render() {
  const rotateX = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg']
  })
   const movingMargin = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0]
  })
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.circle]} />
        <Animated.View style={[styles.circle,{  marginLeft: movingMargin,
 }]} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection:'row'
  },
  circle: {
    width: CIR_DIMEN,
    height: CIR_DIMEN,
    borderRadius: CIR_RADIUS,
    backgroundColor: 'blue'
  } 

});
