import React, { Component } from 'react';
import { StyleSheet,ImageBackground, Text, View,StatusBar,Image, TextInputChangeEventData, NativeSyntheticEvent} from 'react-native';
import { Container, Body, Header, Content, Form, Item, Input, Label, Button, Toast,ListItem } from 'native-base';
import * as screen__ from './../../config';
import { Link, } from '@react-navigation/native';
interface Props {
  navigation:any
}
type State = typeof initState;
const initState = {
  id:"Sa",
  pws:"123",
  id_input:"",
  pws_input:"",
}
const image = { uri: "https://wallpaperaccess.com/full/797185.png"};
export default class SignInScreen extends Component<Props,State>{
  state = initState
  onchangeID = (e:string) =>{
    this.setState({
      id_input: e
    })
  }
  onchangePws = (e:string) => {
    this.setState({
      pws_input: e
    })
  }
  signIn = () =>{
    console.log((this.state.id===this.state.id_input )&& (this.state.pws === this.state.pws_input))
    if(this.state.id === this.state.id_input && this.state.pws === this.state.pws_input){
      alert("Sign In Successful")
      screen__.goTo(this.props.navigation,screen__.MainFeature);
    }else{
      alert("Sign In Fail, Wrong Input")
    }
  }
  render(){
    return (
      <Container style={styles.container}>
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={{
              fontSize:30,
              color:"white",
            }}>Sign In</Text>
            <Form style={styles.form} >
              <Item floatingLabel last>
                <Label style={styles.text}>Username</Label>
                <Input
                style={styles.input}
                value={this.state.id_input}
                onChangeText={this.onchangeID}/>
              </Item>
              <Item floatingLabel last>
                <Label style={styles.text}>Password</Label>
                <Input
                secureTextEntry={true}
                style={styles.input}
                value={this.state.pws_input}
                onChangeText={this.onchangePws}/>
              </Item>
              <Button
              style={styles.button}
              onPress={this.signIn}
              large
              block
              bordered
              dark
              rounded
              >
                <Text style={styles.text_button}>Sign In</Text>
              </Button>
            </Form>
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
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems:"center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    width:"100%",
  },
  input:{
    color:"white",
    fontSize:15,
    width:300,
  },
  form:{
    width:300
  },
  button:{
    marginTop:30,
    borderWidth:10,
  },
  text:{
    color:"white",
    fontSize:15,
    alignSelf:"center",
  },
  text_button:{
    fontSize:20,
  }
})