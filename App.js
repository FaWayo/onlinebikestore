import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/dashboard';
import Home from './components/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';

export default function App() {

  const MainNavigator = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer style= {{flex: 1}}>
        <MainNavigator.Navigator initialRouteName = "Login">
        <MainNavigator.Screen name="Home" component={Home}/>
          <MainNavigator.Screen name="Login" component={Dashboard}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
