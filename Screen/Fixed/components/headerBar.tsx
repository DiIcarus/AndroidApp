import { Container, Header,Item,Input, Button, Icon, Text,Content,List,ListItem } from 'native-base';
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
export default class HeaderBar extends Component {
  render(){
    return(
      <Container>
        {/* <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search"/>
            <Button><Icon name="ios-search" /></Button>
          </Item>
        </Header> */}
        <Header 
        iosBarStyle="dark-content"
        
        />
      </Container>
        
    )
  }
}
const styles = StyleSheet.create({
})