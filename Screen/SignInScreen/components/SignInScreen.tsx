import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar,Image, TextInputChangeEventData, NativeSyntheticEvent} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Toast,ListItem } from 'native-base';
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
      // Toast.show({
      //   text: "Sign In Successful",
      //   buttonText: "Okay",
      //   duration: 3000
      // })
      alert("Sign In Successful")
      screen__.goTo(this.props.navigation,screen__.MainFeature);
    }else{
      // Toast.show({
      //   text: "Wrong Input",
      //   buttonText: "Okay",
      //   duration: 3000,
      //   position:"top",
      // })
      alert("Sign In Fail, Wrong Input")
    }
  }
  render(){
    return (
      <Container>
        <Content
        >
          <Form >
            <Item floatingLabel style={styles.aligntCenter}>
              <Label>Username</Label>
              <Input 
              value={this.state.id_input}
              onChangeText={this.onchangeID}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
              value={this.state.pws_input}
              onChangeText={this.onchangePws}/>
            </Item>
            <ListItem itemDivider>
              {/* <Text>My Group</Text> */}
            </ListItem>
            <Button
            style={styles.aligntCenter}
            onPress={this.signIn}
            // rounded
            large
            block
            bordered
            dark
            >
              <Text>Sign In</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  aligntCenter:{
    justifyContent:"center",
    alignItems:"center",
  }
})