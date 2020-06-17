import React, { Component } from 'react';
import { StyleSheet,ImageBackground, Text, View,StatusBar,Image, TextInputChangeEventData, NativeSyntheticEvent} from 'react-native';
import { Container,Picker, Header, Content, Form, Item, Input, Label, Button, Toast,ListItem,Textarea,DatePicker } from 'native-base';
import * as screen__ from '../../config';
import { Link, } from '@react-navigation/native';
import { white } from 'react-native-paper/lib/typescript/src/styles/colors';
import fetchAPI from './../../../modules/fetchAPI';
import axios from 'axios'
interface Props {
  navigation:any
}
type State = typeof initState;
const initState = {
  name:"",
  time_start:"",
  date_start:"",
  time_end:"",
  date_end:"",
  detail:"",
  chosenDate: new Date(),
}
const image = { uri: "https://wallpaperaccess.com/full/797185.png"};

export default class AddList extends Component<Props,State>{
  state = initState;
  module = new fetchAPI("/tasks")
  componentDidMount(){
    // fetch('http://192.168.1.7:5000/static/result/c57d97b8-5731-4e6c-9b4d-bb588c380164.jpg'{
    //   method:"GET",
    //   mode:"cors",
    // })
    fetch('192.168.1.7/',{
      method:"GET",
      mode:"cors",
      credentials: "include",
      headers:{
        "Content-Type":"multipart/json"
      }
    })
    .then((res:any)=>{console.log("AAAA",res.json())})
    .catch((err:any)=>{console.log("ERR",err)})

  }
  onchangeName = (e:string) =>{
    this.setState({
      name: e
    })
  }
  onchangeTimeStart = (e:string) => {
    this.setState({
      time_start: e
    })
  }
  onchangeTimeEnd = (e:string) => {
    this.setState({
      time_end: e
    })
  }
  onchangeTextArea = (e:string)=>{
    console.log("a")
    this.setState({
      detail:e
    })
  }
  setDate = (e:any) => {
    this.setState({
      chosenDate:e
    })
  }
  setDate1 = (e:any) => {
    this.setState({
      chosenDate:e
    })
  }
  click = () =>{
    alert("Adding Successful")
    screen__.goTo(this.props.navigation,screen__.MainFeature);
  }
  render(){
    return (
            <Container style={styles.container}>
        <View
        style={styles.container}
        >
          <ImageBackground source={image} style={styles.image}>
            <Text style={{
              fontSize:30,
              color:"white",
            }}>Add new List</Text>
            <Form >
            <Item floatingLabel style={styles.item_input}>
              <Label style={styles.text}>Name List</Label>
              <Input 
              style={styles.input}
              value={this.state.name}
              onChangeText={this.onchangeName}/>
            </Item>
            <Item floatingLabel style={styles.item_input}>
              <Label style={styles.text}>Name group</Label>
              <Input 
              style={styles.input}
              value={this.state.time_end}
              onChangeText={this.onchangeTimeEnd}/>
            </Item>
            <Button
            style={styles.button}
            large
            block
            bordered
            dark
            rounded
            onPress={this.click}
            >
              <Text style={{color:"white"}}>Add New</Text>
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
    backgroundColor:"rgba(0,0,0,.3)"
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
    borderColor:"white",
    backgroundColor:"rgba(255,255,255,.5)"
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