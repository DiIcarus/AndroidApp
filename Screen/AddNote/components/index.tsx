import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar,Image, TextInputChangeEventData, NativeSyntheticEvent} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Toast,ListItem,Textarea,DatePicker } from 'native-base';
import * as screen__ from '../../config';
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
  text:"",
  chosenDate: new Date(),
}
export default class AddNote extends Component<Props,State>{
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
  onchangeTextArea = (e:string)=>{
    console.log("a")
    this.setState({
      text:e
    })
  }
  setDate = (e:any) => {
    this.setState({
      chosenDate:e
    })
  }
  signIn = () =>{
    console.log((this.state.id===this.state.id_input )&& (this.state.pws === this.state.pws_input))
    // if(this.state.id === this.state.id_input && this.state.pws === this.state.pws_input){
      // Toast.show({
      //   text: "Sign In Successful",
      //   buttonText: "Okay",
      //   duration: 3000
      // })
      alert("Adding Successful")
      screen__.goTo(this.props.navigation,screen__.MainFeature);
    // }else{
      // Toast.show({
      //   text: "Wrong Input",
      //   buttonText: "Okay",
      //   duration: 3000,
      //   position:"top",
      // })
      // alert("Sign In Fail, Wrong Input")
    // }
  }
  render(){
    return (
            <Container>
        <Content
        >
          <Form >
            <Item floatingLabel style={styles.aligntCenter}>
              <Label>Header</Label>
              <Input 
              value={this.state.id_input}
              onChangeText={this.onchangeID}/>
            </Item>
              <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "inherit" }}
            onDateChange={this.setDate}
            disabled={false}
            />
              <Textarea
              rowSpan={5} 
              bordered 
              placeholder="Content"
              value={this.state.text}
              onChangeText={this.onchangeTextArea}
              />
            
            <ListItem itemDivider>
            </ListItem>
            <Button
            style={styles.aligntCenter}
            onPress={this.signIn}
            // rounded
            large
            block
            bordered
            primary
            >
              <Text>Add New</Text>
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