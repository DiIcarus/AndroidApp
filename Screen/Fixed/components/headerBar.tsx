import { Container,Title,Subtitle, Right, Header,Item,Input, Button, Icon, Text,Content,List,ListItem, Left, Body, Thumbnail } from 'native-base';
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as screen__ from './../../config';
// import MainContent from './../..//mainContent';
// const Drawer = createDrawerNavigator();
interface Props{
  navigation:any
}
export default class HeaderBar extends Component<Props,{}> {
  renderMainProfile = () =>{
    screen__.goTo(this.props.navigation,screen__.MainProfile)
  }
  render(){
    return(
        <Header searchBar rounded style={styles.header}>
          <Body>
            <Title style={{color:"white"}}>Nguyen Le Hai Son</Title>
            <Subtitle style={{color:"gray"}}>diicarus.8398@gmail.com</Subtitle>
          </Body>
          <Right>
            <Button transparent onPress={this.renderMainProfile}>
              <Icon style={{color:"white"}} name="ios-more" />
            </Button>
          </Right>
        </Header>
    )
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor:"#000230",
  }
})