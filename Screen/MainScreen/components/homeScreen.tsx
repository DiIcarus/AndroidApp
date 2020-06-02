import React, { Component } from 'react';
import {Container,Header,Content,Button,Text,Icon} from 'native-base';
import { ImageBackground, StatusBar,StyleSheet,View} from 'react-native';
import * as screen__ from './../../config';


interface Props {
  navigation:any
}
const image = { uri: "https://reactjs.org/logo-og.png" };

export default class HomeScreen extends Component<Props,{}>{
  componentDidMount(){
    // (()=>{this.props.navigation.navigate('SignInScreen')})()
  }
  render(){
    return (
      <Container style={styles.aligntCenter}>
        {/* <StatusBar hidden={true}/> */}
        {/* <View style={styles.container}>
          <StatusBar hidden={true}/>
          <ImageBackground source={image} style={styles.image}>
          </ImageBackground>
        </View> */}
        
        <Button
          style={styles.aligntCenter} 
          onPress={() => screen__.goTo(this.props.navigation,screen__.SignInScreen)}
          large
          dark
          // block
        ><Icon name='person' />
          <Text> Sign In</Text>
        </Button>
        <Button
          style={styles.aligntCenter} 
          // block
          transparent
          large
          light
          dark
          onPress={() => screen__.goTo(this.props.navigation,screen__.RegisterScreen)}
        ><Icon name='add' />
          <Text >Register</Text>
        </Button>
      </Container>
  );
  }
}
const styles = StyleSheet.create({
  aligntCenter:{
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },container: {
    flex: 1,
    flexDirection: "column"
  },
})
