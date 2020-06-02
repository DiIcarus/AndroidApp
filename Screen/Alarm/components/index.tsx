import {  Header,Footer, FooterTab, Button, Icon, Text, Badge,Card,CardItem,Body, Content, Left, Container } from 'native-base';
import React, { Component } from 'react';
import * as screen__ from './../../config';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainFeature from './../../MainFeature/components/index';
import DetailNote from './../../DetailNote/components/index';

const Tab = createMaterialBottomTabNavigator();
interface Props {
  navigation:any
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
export default class FooterBar extends Component<Props,{}> {
  renderNavBar = () =>{
    return (
      <Tab.Navigator>
      <Tab.Screen name={screen__.MainFeature} component={MainFeature} />
      <Tab.Screen name={screen__.DetailNote} component={DetailNote} />
      <Tab.Screen name={screen__.Alarm} component={DetailNote}/>
    </Tab.Navigator>
    )
  }
  render(){
    return(
        <Container>
          <Header>
            
          </Header>
        </Container>
    )
  }
}