import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container,Accordion, Header, Content, Form, Item, Input, Label, Button,ListItem,Left,List,Right,Icon,Body,Switch,Separator } from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import * as screen__ from './../../config';
import { Divider } from 'react-native-paper';
const arr_smart_list = [
  {name:"Important",icon:"ios-star",color_icon:"#F0B67B"},
  {name:"My day",icon:"ios-person",color_icon:"rgba(0,0,0,0)"},
  {name:"Planned",icon:"ios-calendar",color_icon:"rgba(0,0,0,0)"},
  // {name:"Important",icon:"star",color_icon:"rgba(0,0,0,0)"}
]
const data_array = [
  { title: "Work Space", content: ["VNG","Google","Zalo"] },
  { title: "PTIT", content: ["Data structure and algorithm","Distributed system"] },
  { title: "Home", content: ["Cooking","Morning","Dinner"]}
]

interface Props {
  navigation:any
}
export default class MainContent extends Component<Props,{}>{
  renderHeader(item:any, expanded:any) {
    return (
      <React.Fragment>
        <View 
        style={{
          flexDirection:"row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center" ,
          backgroundColor: "rgba(0,0,0,.5)",
          color:"white",
          height:50,
        }}>
        <Text style={{ fontWeight: "600",color:"white" }}>
            {" "}{item.title}
          </Text>
          {expanded
            ? <Icon style={{ fontSize: 18, color:"white" }} name="ios-folder-open" />
            : <Icon style={{ fontSize: 18, color:"white" }} name="ios-folder" />}
        </View>
      </React.Fragment>
      
    );
  }
  renderContent = (item:any):React.ReactElement => {
    return (
      <View
      style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          right:0,
        }}
      >
          {item.content.map((value:any)=>(
            <ListItem
            onPress={this.navigateListMenu}
            >
              <Text
              style={{
                padding: 10,
                color:"white"
              }}
              > 
            <Icon style={{fontSize: 18, color:"white"}} active name="ios-list"/>
          {"  "}{value}
          </Text>
          </ListItem>
          ))}
          
        
      </View>
    );
  }
  navigateListMenu = ()=>{
    screen__.goTo(this.props.navigation,screen__.MainList)
  }
  render(){
    return (
      <Container style={{
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.3)"
      }}>
        <Content>
          {arr_smart_list.map((value:any)=>(
            <ListItem 
            icon 
            onPress={this.navigateListMenu}
            >
            <Left>
              <Button style={{ backgroundColor: value.color_icon }}>
                <Icon active name={value.icon} />
              </Button>
            </Left>
            <Body>
              <Text style={{
                color:"white"
              }}
            >{value.name}</Text>
            </Body>
            <Right>
              <Text style={{
                color:"white"
              }}>see more</Text>
              <Icon active name="ios-arrow-forward" />
            </Right>
          </ListItem>
          ))}
          <ListItem itemDivider style={{backgroundColor:"transparent", borderColor:"rgba(0,0,0,0)"}}>
              <Text style={{color:"white"}} >Group</Text>
          </ListItem>
          <Accordion
            dataArray={data_array}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            />
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