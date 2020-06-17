import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar, ImageBackground} from 'react-native';
import { Image } from 'react-native';
import { Container, Body,Title,Subtitle,Right, Header, Content, Form, Item, Input, Label, Button,Icon,Fab,ActionSheet} from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import MainContent from './mainContent';
import CardItemBordered from './../../Card/components/index';
import * as screen__ from './../../config';
interface Props {
  navigation:any
}
type State = typeof initState;

const BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const initState = {
  active: false,
  clicked:{},
  edit:false,
}
const image = { uri: "https://wallpaperaccess.com/full/797185.png"};
export default class MainDetail extends Component<Props,State>{
  state=initState
  componentDidMount(){
  }
  setActive = () =>{
    this.setState({
      active:!this.state.active
    })
    
  }
  render(){
    return (
      <Container style={styles.container}>
        <Header transparent searchBar rounded style={styles.header}>
          <Body>
          <Title style={{color:"white"}}>Create API</Title>
          </Body>
        </Header>
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <MainContent edit={this.state.active} navigation={this.props.navigation}/>
          </ImageBackground>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#000230",
  },
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
    backgroundColor:"rgba(0,0,0,.5)"
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
  },
  fab_button:{
    // width:150
    backgroundColor:"#F0B67B"
  }
})