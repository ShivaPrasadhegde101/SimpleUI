import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Inputs from './input.js'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Second from './second.js';

const Navigator = createStackNavigator({
  Home: { screen: Inputs },
  Second: { screen: Second },
});

const App = createAppContainer(Navigator);

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    backgroundColor: '#fff',
    
  },
});

