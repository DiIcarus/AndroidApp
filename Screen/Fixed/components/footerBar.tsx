import {  Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import React, { Component } from 'react';
import * as screen__ from './../../config';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainFeature from './../../MainFeature/components/index';
import DetailNote from './../../DetailNote/components/index';
const Tab = createMaterialBottomTabNavigator();
interface Props {
  navigation:any
}
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
export default class FooterBar extends Component<Props,{}> {
  // renderNavBar = () =>{
  //   return (
  //     <Tab.Navigator>
  //     <Tab.Screen name={screen__.MainFeature} component={MainFeature} />
  //     <Tab.Screen name={screen__.DetailNote} component={DetailNote} />
  //   </Tab.Navigator>
  //   )
  // }
  render(){
    return(
        <Footer>
          {/* {this.renderNavBar()} */}
          <FooterTab>
            <Button badge vertical >
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="keypad" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}
// onPress={() => screen__.goTo(this.props.navigation,screen__.MainFeature)}