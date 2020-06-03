import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
// import {StackNavigation} from 'react-navigation';
import ButtonExample from './Screen/Demo/demoButton';
import Apps from './Screen/Demo/demo';
import FooterBar from './Screen/Fixed/components/footerBar';
import HeaderBar from './Screen/Fixed/components/headerBar';
import {Container,Header,Content,Button} from 'native-base';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screen/MainScreen/components/homeScreen';
import LoadingScreen from './Screen/LoadingScreen/components/loadingScreen';
import SignInScreen from './Screen/SignInScreen/components/SignInScreen';
import RegisterScreen from './Screen/RegisterScreen/components/index';
import MainFeature from './Screen/MainFeature/components/index';
import DetailNote from './Screen/DetailNote/components/index';
import CardItemBordered from './Screen/Card/components/index';
import FABExample from './Screen/Multiple/components/index';
import Alarm from "./Screen/Alarm/components/index";
import AddNote from "./Screen/AddNote/components/index";
import * as screen__ from './Screen/config';
const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
export default class App extends Component {

  renderScreen = ()=>{
  return (
  <Stack.Navigator>
    <Stack.Screen name={screen__.HomeScreen} component={HomeScreen} />
    <Stack.Screen name={screen__.SignInScreen} component={SignInScreen}/>
    <Stack.Screen name={screen__.LoadingScreen} component={LoadingScreen}/>
    <Stack.Screen name={screen__.RegisterScreen} component={RegisterScreen}/>
    <Stack.Screen name={screen__.MainFeature} component={MainFeature}/>
    <Stack.Screen name={screen__.DetailNote} component={DetailNote}/>
    <Stack.Screen name={screen__.CardItemBordered} component={CardItemBordered}/>
    <Stack.Screen name={screen__.Alarm} component={Alarm}/>
    <Stack.Screen name={screen__.AddNote} component={AddNote}/>
  </Stack.Navigator>
  )
}
  render(){
    return (
      <NavigationContainer>
        {this.renderScreen()}
      </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
