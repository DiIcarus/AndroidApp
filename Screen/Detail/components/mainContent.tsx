import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container,Accordion, Header, Content, Form, Item, Input, Label, Button,ListItem,Left,List,Right,Icon,Body,Switch,Separator } from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import * as screen__ from './../../config';
import { Divider } from 'react-native-paper';
const arr_smart_list = [
  {name:"Using Flask Framework",icon:"ios-information-circle",color_icon:"white"},
  {name:"6/5/2020",icon:"ios-time",color_icon:"white"},
  {name:"10/5/2020",icon:"ios-time",color_icon:"white"},
  {name:"done",icon:"ios-radio",color_icon:"white"}
]
const data_array = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
]
const check = true;
interface Props {
  navigation:any,
  edit:boolean,
}
export default class MainContent extends Component<Props,{}>{
  navigateListMenu = ()=>{
    // screen__.goTo(this.props.navigation,screen__.MainFeature)
  }
  render(){
    return (
      <Container style={{
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.3)"
      }}>
        <Content>
          <List>
            {arr_smart_list.map((value:any)=>
            <ListItem 
              icon 
              onPress={this.navigateListMenu}
              >
              <Left>
                <Icon style={{color:"white"}} active name={value.icon} />
              </Left>
              <Body>
                <Text style={{
                  color:"white"
                }}
              >{value.name}</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
            )}
          </List>
        </Content>
      </Container>
    )
  }
}

// const styles = StyleSheet.create({
//   content:{
//     width:"100%",
//     backgroundColor:"rgba(0,0,0,0)"
//   },
//   text_smart_list:{
//     color:"white"
//   },
//   group:{
//     flexDirection:"row",
//     padding: 10,
//     justifyContent: "space-between",
//     alignItems: "center" ,
//     backgroundColor: "rgba(0,0,0,.5)",
//     color:"white",
//   },
//   accordion:{
//     borderColor:"grba(0,0,0,0)"
//   }
// })