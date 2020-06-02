import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,ListItem,Left,List,Right,Icon,Body,Switch,Separator } from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import * as screen__ from './../../config';

interface Props {
  navigation:any
}
type State = typeof initState;
const initState = {
  switch:false,
  listCompleteRecently:["Cooking","Meeting","Do Exercise","Play Game"],
  listGroup:["Work Space","My Love","School Notification"]
}
export default class HomeContent extends Component<Props,State>{
  state = initState;
  render(){
    return (
      // <Container>
        <Content>
          {/* <Separator bordered> */}
            {/* <Text>MIDFIELD</Text> */}
          {/* </Separator> */}
          
          <ListItem icon onPress={()=>{screen__.goTo(this.props.navigation,screen__.Alarm)}}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="alarm" />
              </Button>
            </Left>
            <Body>
              <Text>Alarm</Text>
            </Body>
            <Right>
              <Text>see more</Text>
              <Icon active name="arrow-forward" />
              {/* <Switch 
              value={this.state.switch} 
              onValueChange={(value) => {this.setState({switch:Boolean(value)})}}/> */}
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="person" />
              </Button>
            </Left>
            <Body>
              <Text>My days</Text>
            </Body>
            <Right>
              <Text>see more</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="star" />
              </Button>
            </Left>
            <Body>
              <Text>Important</Text>
            </Body>
            <Right>
              <Text>see more</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="calendar" />
              </Button>
            </Left>
            <Body>
              <Text>Schedule</Text>
            </Body>
            <Right>
              <Text>see more</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <List>
            <ListItem itemDivider>
              <Text>Completed recently</Text>
            </ListItem>
            {this.state.listCompleteRecently.map((value:any) =>(
              <ListItem 
              onPress={()=>screen__.goTo(this.props.navigation,screen__.DetailNote)}
              >
                <Body>
            <Text>{value}</Text>
                </Body>
                <Right>
                  {/* <Icon active name="arrow-forward" /> */}
                </Right>
              </ListItem>
            ))}
            <ListItem itemDivider>
              <Text>My Group</Text>
            </ListItem>
            {this.state.listGroup.map((value:any)=>(
              <ListItem
              onPress={()=>screen__.goTo(this.props.navigation,screen__.CardItemBordered)} 
              >
              <Body>
            <Text>{value}</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
            </ListItem>
            ))}
          </List>
        </Content>
      // </Container>
    );
  }
}