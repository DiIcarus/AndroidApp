import React, { Component } from 'react';
import { View,Image ,ImageBackground,StyleSheet,StatusBar} from 'react-native';
import {Container,Header,Content,Button,Text,} from 'native-base';

interface Props{
  navigation:any
}
const image = { uri: "https://reactjs.org/logo-og.png" };

export default class LoadingScreen extends Component<Props,{}>{
  componentDidMount(){
    // (()=>{
    //   this.props.navigation.navigate('MainScreen')
    // })()
  }
  render(){
    return(
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <ImageBackground source={image} style={styles.image}>
          {/* <Text style={styles.text}>Inside</Text> */}
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
