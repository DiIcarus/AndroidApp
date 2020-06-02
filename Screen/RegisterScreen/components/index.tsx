import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,ListItem,DatePicker } from 'native-base';
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
      <Container>
        <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
              value={this.state.userName}
              onChangeText={this.onChangeUserName}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input
              value={this.state.email}
              onChangeText={this.onChangeEmail}
              />
            </Item>
            <Item floatingLabel>
              <Label>Date of birth</Label>
              <Input
              value={this.state.DoB}
              onChangeText={this.onChangeDoB}
               />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
              value={this.state.Pws}
              onChangeText={this.onChangePws}
              />
            </Item>
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input 
              value={this.state.CPws}
              onChangeText={this.onChangeCPws}
              />
            </Item>
             <ListItem itemDivider>
              {/* <Text>My Group</Text> */}
            </ListItem>
            <Button
            style={styles.aligntCenter} 
            block
            bordered
            large
            light
            onPress={this.register}
            primary
            >
              <Text>Register</Text>
            </Button>
          </Form>
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