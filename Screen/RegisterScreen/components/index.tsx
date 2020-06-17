import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image,ImageBackground } from 'react-native';
import { Container, Left, Header, Content, Form, Item, Input, Label, Button,ListItem,DatePicker, Right, Body } from 'native-base';
import { Divider } from 'react-native-paper';
import * as screen__ from './../../config';

interface Props {
  navigation:any
}
type State = typeof initState;
const initState = {
  chosenDate:"",
  userName:"",
  email:"",
  DoB:"",
  Pws:"",
  CPws:""
}
const image = { uri: "https://wallpaperaccess.com/full/797185.png"};
export default class RegisterScreen extends Component<Props,State>{
  state = initState
  setDate(newDate:any) {
    this.setState({ chosenDate: newDate });
  }
  register(){
    screen__.goTo(this.props.navigation,screen__.HomeScreen)
  }
  onChangeUserName = (e:string)=>{
    this.setState({
      userName: e
    })
  }
  onChangeEmail = (e:string)=> {
    this.setState({
      email:e
    })
  }
  onChangeDoB = (e:string) => {
    this.setState({
      DoB:e
    })
  }
  onChangePws = (e:string) =>{
    this.setState({
      Pws: e
    })
  }
  onChangeCPws = (e:string) =>{
    this.setState({
      CPws: e
    })
  }
  render(){
    return (
      <Container style={styles.container}>
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={{
              fontSize:30,
              color:"white",
            }}>Register</Text>
            <Form style={styles.form} >
            <Item floatingLabel last style={styles.item_input}>
              <Label style={styles.text}>Username</Label>
              <Input
              style={styles.input}
              value={this.state.userName}
              onChangeText={this.onChangeUserName}
              />
            </Item>
            <Item floatingLabel last  style={styles.item_input}>
              <Label style={styles.text}>Email</Label>
              <Input
              style={styles.input}
              value={this.state.email}
              onChangeText={this.onChangeEmail}
              />
            </Item>
            <Item floatingLabel last  style={styles.item_input}>
              <Label style={styles.text}>Password</Label>
              <Input
              style={styles.input}
              value={this.state.Pws}
              onChangeText={this.onChangePws}
              />
            </Item>
            <Item floatingLabel style={styles.item_input}>
              <Label style={styles.text}>Confirm Password</Label>
              <Input
              style={styles.input} 
              value={this.state.CPws}
              onChangeText={this.onChangeCPws}
              />
            </Item>
            <Button
            style={styles.button}
            large
            block
            bordered
            dark
            rounded
            onPress={this.register}
            >
              <Text style={styles.text_button}>Register</Text>
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
    width:300,
    justifyContent:"center",
    alignItems:"center",
  },
  button:{
    marginTop:30,
    // borderWidth:10,
  },
  text:{
    color:"white",
    fontSize:15,
    alignSelf:"center",
  },
  text_button:{
    fontSize:20,
  },
  item_input:{
    width:300,
    justifyContent:"center",
    alignItems:"center",
  }
})