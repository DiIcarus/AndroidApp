import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,Icon,Fab,ActionSheet} from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import HomeContent from './content';
import CardItemBordered from './../../Card/components/index';
import FABExample from './../../Multiple/components/index';
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
  clicked:{}
}
export default class MainFeature extends Component<Props,State>{
  state=initState
  componentDidMount(){
    // (()=>screen__.goTo(this.props.navigation,screen__.CardItemBordered))()
  }
  setActive = () =>{

    this.setState({
      active:!this.state.active
    })
    screen__.goTo(this.props.navigation,screen__.AddNote)
    
  }
  render(){
    return (
      <Container>
        {/* <View> */}
        {/* <FABExample navigation/> */}
       
        <View style={{ flex: 1 }}> 
          <HomeContent navigation={this.props.navigation}/>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF'}}
            position="bottomRight"
            onPress={this.setActive}
            // onPress={() =>
            // ActionSheet.show(
            //   {
            //     options: BUTTONS,
            //     cancelButtonIndex: CANCEL_INDEX,
            //     destructiveButtonIndex: DESTRUCTIVE_INDEX,
            //     title: "Testing ActionSheet"
            //   },
            //   (buttonIndex:any) => {
            //     this.setState({ clicked: BUTTONS[buttonIndex] });
            //   }
            // )}
          >
            <Icon name="add" />
            {/* <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="note" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button> */}
          </Fab>
        </View>
        {/* </View> */}
      </Container>
    );
  }
}        {/* <FooterBar navigation/> */}
        {/* <Header></Header> */}
        {/* <StatusBar hidden={true}/> */}
