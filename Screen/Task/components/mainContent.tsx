import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container,Accordion, Header, Content, Form, Item, Input, Label, Button,ListItem,Left,List,Right,Icon,Body,Switch,Separator } from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import * as screen__ from './../../config';
import { Divider } from 'react-native-paper';
const initState ={
  list: [
  {name:"Create API",icon:"star",color_icon:"white",check:true},
  {name:"Test on Postman",icon:"person",color_icon:"white",check:true},
  {name:"Fetch API",icon:"calendar",color_icon:"white",check:true},
  {name:"Run Demo",icon:"star",color_icon:"white",check:true}
]}
const data_array = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
]
const check = false;
interface Props {
  navigation:any,
  list:any,
  setList:(value:any)=>void,
}
type State = typeof initState
export default class MainContent extends Component<Props,State>{
  state = initState
  navigateDetailMenu = ()=>{
    screen__.goTo(this.props.navigation,screen__.MainDetail)
  }
  check = (index:any)=>{
    let a = this.props.list
    a[index].check = !this.props.list[index].check
    // this.setState({
    //   list:a
    // })
    this.props.setList(a);
  }
  render(){
    return (
      <Container style={{
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.3)"
      }}>
        <Content>
            {this.props.list.map((value:any,index:any)=>(
            <ListItem key={index}
            icon
            >
            <Left key={index}>
              {value.check?<Icon key={index} style={{color:"white"}} active name="ios-checkmark-circle" onPress={()=>this.check(index)} />
              :<Icon key={index} style={{color:"white"}} onPress={()=>this.check(index)} active name="ios-radio-button-off" />}
            </Left>
            <Body>
              <Text style={{
                color:"white"
              }}
              onPress={this.navigateDetailMenu}
            >{value.name}</Text>
            </Body>
          </ListItem>
          ))}
        </Content>
      </Container>
    )
  }
}