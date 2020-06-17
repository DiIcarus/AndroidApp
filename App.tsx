import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Expo from 'expo';
// import {StackNavigation} from 'react-navigation';
// import ButtonExample from './Screen/Demo/demoButton';
// import Apps from './Screen/Demo/demo';
import FooterBar from './Screen/Fixed/components/footerBar';
import HeaderBar from './Screen/Fixed/components/headerBar';
import {Container,Header,Content,Button} from 'native-base';
// import {Stac} from '@react-navigation'
import { createStackNavigator,} from '@react-navigation/stack';
import { NavigationContainer, } from '@react-navigation/native';
import HomeScreen from './Screen/MainScreen/components/homeScreen';
// import LoadingScreen from './Screen/LoadingScreen/components/loadingScreen';
import MainList from './Screen/List/components/index';
import MainTask from './Screen/Task/components/index';
import MainDetail from './Screen/Detail/components/index';
import SignInScreen from './Screen/SignInScreen/components/SignInScreen';
import RegisterScreen from './Screen/RegisterScreen/components/index';
import MainFeature from './Screen/MainFeature/components/index';
// import DetailNote from './Screen/DetailNote/components/index';
import MainProfile from './Screen/Profile/components/index';
// import FABExample from './Screen/Multiple/components/index';
import Alarm from "./Screen/Alarm/components/index";
import AddNote from "./Screen/AddNote/components/index";
import AddGroup from "./Screen/AddGroup/components/index";
import AddList from "./Screen/AddList/components/index";
import * as screen__ from './Screen/config';
import store from './store';
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
console.disableYellowBox=true;
export default class App extends Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    // Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
  }
  renderScreen = ()=>{
  return (
  <Stack.Navigator headerMode={"none"}>
    <Stack.Screen name={screen__.HomeScreen} component={HomeScreen} />
    <Stack.Screen name={screen__.SignInScreen} component={SignInScreen}/>
    <Stack.Screen name={screen__.MainList} component={MainList}/>
    <Stack.Screen name={screen__.RegisterScreen} component={RegisterScreen}/>
    <Stack.Screen name={screen__.MainFeature} component={MainFeature}/>
    <Stack.Screen name={screen__.MainTask} component={MainTask}/>
    <Stack.Screen name={screen__.MainDetail} component={MainDetail}/>
    <Stack.Screen name={screen__.MainProfile} component={MainProfile}/>
    <Stack.Screen name={screen__.AddNote} component={AddNote}/>
    <Stack.Screen name={screen__.AddGroup} component={AddGroup}/>
    <Stack.Screen name={screen__.AddList} component={AddList}/>
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
