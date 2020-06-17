import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container,Accordion, Header, Content, Form, Item, Input, Label, Button,ListItem,Left,List,Right,Icon,Body,Switch,Separator } from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import * as screen__ from './../../config';
import { Divider } from 'react-native-paper';
const arr_smart_list = [
  {name:"Name: Nguyen Le Hai Son",icon:"star",color_icon:"white"},
  {name:"Gmail: hsonnl.ptit@gmail.com",icon:"person",color_icon:"white"},
  {name:"Password: *********",icon:"calendar",color_icon:"white"},
]
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
  active:any
}
export default class MainContent extends Component<Props,{}>{
  navigateDetailMenu = ()=>{
    // screen__.goTo(this.props.navigation,screen__.MainDetail)
  }
  renderContent = () => {
    if(!this.props.active){
      return arr_smart_list.map((value:any,index:any)=>(
            <ListItem key={index}
            icon 
            onPress={this.navigateDetailMenu}
            >
            <Body>
              <Text style={{
                color:"white"
              }}
            >{value.name}</Text>
            </Body>
          </ListItem>
          ))
    }else{
      return arr_smart_list.map((value:any,index:any)=>(
            <ListItem key={index}
            icon 
            onPress={this.navigateDetailMenu}
            >
            <Body>
              <Text style={{
                color:"white"
              }}
            >{value.name}</Text>
            </Body>
          </ListItem>
          ))
    }
  }
  render(){
    return (
      <Container style={{
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.3)"
      }}>
        <Content>
            {arr_smart_list.map((value:any,index:any)=>(
            <ListItem key={index}
            icon 
            onPress={this.navigateDetailMenu}
            >
            <Body>
              <Text style={{
                color:"white"
              }}
            >{value.name}</Text>
            </Body>
          </ListItem>
          ))}
        </Content>
      </Container>
    )
  }
}