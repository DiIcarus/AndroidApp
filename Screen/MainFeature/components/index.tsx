import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar, ImageBackground} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,Icon,Fab,ActionSheet} from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import MainContent from './mainContent';
import CardItemBordered from './../../Card/components/index';
import * as screen__ from './../../config';
import Expo from 'expo';
import { Ionicons } from '@expo/vector-icons';
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
  clicked:{}
}
const image = { uri: "https://wallpaperaccess.com/full/797185.png"};
export default class MainFeature extends Component<Props,State>{
  
  state=initState

  async componentWillMount() {
    await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
    });
  }
  componentDidUpdate(){
  }
  setActive = () =>{
    this.setState({
      active:!this.state.active
    })
    // screen__.goTo(this.props.navigation,screen__.AddNote)
  }
  render(){
    return (
      <Container style={styles.container}>
        <HeaderBar navigation={this.props.navigation}/>
        <View style={styles.container}> 
          <ImageBackground source={image} style={styles.image}>
            <MainContent navigation={this.props.navigation}/>
            <Fab
              active={this.state.active}
              direction="up"
              style={{ 
                backgroundColor: '#000230',
                borderColor:'white',
                borderWidth:2,
            }}
              position="bottomRight"
              onPress={this.setActive}
            >
              <Icon name="add" />
              <Button style={styles.fab_button} onPress={()=>screen__.goTo(this.props.navigation,screen__.AddGroup)}>
                {/* group */}
                <Icon name="ios-folder" />
              </Button>
              <Button style={styles.fab_button} onPress={()=>screen__.goTo(this.props.navigation,screen__.AddList)}>
                {/* list */}
                <Icon name="ios-list" />
              </Button>
              <Button style={styles.fab_button} onPress={()=>screen__.goTo(this.props.navigation,screen__.AddNote)}>
                {/* task */}
                <Icon name="ios-bookmark" />
              </Button>
            </Fab>
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