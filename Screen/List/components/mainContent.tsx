import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container,Accordion, Header, Content, Form, Item, Input, Label, Button,ListItem,Left,List,Right,Icon,Body,Switch,Separator } from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import * as screen__ from './../../config';
import { Divider } from 'react-native-paper';
const arr_smart_list = [
  {name:"Do home work",icon:"star",color_icon:"white"},
  {name:"Make money",icon:"person",color_icon:"white"},
  {name:"Go to school",icon:"calendar",color_icon:"white"},
  {name:"Go Home",icon:"star",color_icon:"white"}
]
const data_array = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
]
type State = typeof initState;
const initState = {
  list:[{
    id:1,
    icon:"ios-star",
    name:"Do exercise 1",
    check:false,
  },{
    id:2,
    icon:"ios-star",
    name:"Do exercise 2",
    check:true,
  },{
    id:3,
    icon:"ios-star",
    name:"Do exercise 3",
    check:false,
  },{
    id:4,
    icon:"ios-star",
    name:"Do exercise 4",
    check:true,
  },{
    id:5,
    icon:"ios-star",
    name:"Do exercise 5",
    check:false,
  },{
    id:6,
    icon:"ios-star",
    name:"Do exercise 6",
    check:false,
  },
]
}
const check = true;
interface Props {
  navigation:any
}
export default class MainContent extends Component<Props,State>{
  state = initState;
  navigateTaskMenu = ()=>{
    screen__.goTo(this.props.navigation,screen__.MainTask)
  }
  check = (id:any)=>{
    let a = this.state.list
    a[id].check = !this.state.list[id].check
    this.setState({
      list:a
    })
  }
  render(){
    return (
      <Container style={{
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.3)"
      }}>
        <Content>
          <List>
            {this.state.list.map((value:any,index:any)=>(
            <ListItem 
            icon 
            
            >
            <Left>
              <Icon active style={{color:"white"}} name={value.icon} onPress={this.navigateTaskMenu}/>
            </Left>
            <Body >
              <Text style={{
                color:"white"
              }}
              onPress={this.navigateTaskMenu}
            >{value.name}</Text>
            </Body>
            <Right>
              {value.check?<Icon active name="ios-checkmark-circle" onPress={()=>this.check(index)}/>:<Icon active name="ios-radio-button-off" onPress={()=>this.check(index)}/>}
            </Right>
          </ListItem>
          ))}
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