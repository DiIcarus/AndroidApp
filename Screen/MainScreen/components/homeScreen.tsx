import React, { Component } from 'react';
import {Container,Header,Content,Button,Text,Icon} from 'native-base';
import { ImageBackground, StatusBar,StyleSheet,View} from 'react-native';
import * as screen__ from './../../config';


interface Props {
  navigation:any
}
const image = { uri: "https://wallpaperaccess.com/full/797185.png"};
// const image_button = {uri: }
export default class HomeScreen extends Component<Props,{}>{
  componentDidMount(){
    console.log("muont")
    fetch('http://192.168.1.7:5001/list',{method:"GET"})
    .then((res:any)=>{console.log("AAAA",res.json())})
    .catch((err:any)=>{console.log("ERR",err)})
  }
  
  render(){
    return (
      <Container style={styles.container}>
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>TODO APP</Text>
            <Button
              style={styles.aligntCenter} 
              onPress={() => screen__.goTo(this.props.navigation,screen__.SignInScreen)}
              // large
              rounded
              dark
            >
              <Icon style={styles.button_text} name='person' />
              <Text style={styles.button_text}> Sign In</Text>
            </Button>
            <Button
              style={styles.aligntCenter}
              dark
              // large
              rounded
              bordered
              onPress={() => screen__.goTo(this.props.navigation,screen__.RegisterScreen)}
            ><Icon style={styles.button_text} name='add' />
              <Text style={styles.button_text}>Register</Text>
            </Button>
          </ImageBackground>
        </View>
      </Container>
  );
  }
}
const styles = StyleSheet.create({
  aligntCenter:{
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    height:100,
    width:300,
    marginTop: 10,
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems:"center",
  },
  text: {
    top:0,
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginTop:0,
    marginBottom:50,
    fontFamily: "Time-New_Roman"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    width:"100%",
  },
  button_text:{
    fontSize:20,
  }
})
