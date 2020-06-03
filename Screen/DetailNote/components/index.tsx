import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,Card,CardItem,Left,Right,Body,Icon,Thumbnail} from 'native-base';
import FooterBar from './../../Fixed/components/footerBar';
import HeaderBar from './../../Fixed/components/headerBar';
import LoadingScreen from './../../LoadingScreen/components/loadingScreen';
// import HomeContent from './content';

interface Props {
  navigation:any
}
export default class DetailNote extends Component<Props,{}>{
  render(){
    return (
      <Container>
        {/* <Text>This is a note</Text> */}
        {/* <LoadingScreen navigation/> */}
        {/* <FooterBar navigation/> */}
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-1/p160x160/97473034_1167699713575871_1161952128613220352_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=cStjdf6BpH0AX-R0Fll&_nc_ht=scontent.fvca1-2.fna&_nc_tp=6&oh=50568206966ceaf0f33cbf2c9dff0887&oe=5EF54155'}} />
                <Body>
                  <Text>Name:Nguyen Le Hai Son</Text>
                  <Text>Date:April 15, 2016</Text>
                  <Text>Header Note: Vung Tau that vui</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={styles.container}>
                <Image source={{uri: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-0/p180x540/87492666_1116009912078185_6418781409296515072_o.jpg?_nc_cat=101&_nc_sid=dd9801&_nc_ohc=ZHO73CyOL0oAX_bMJ6r&_nc_ht=scontent.fvca1-2.fna&_nc_tp=6&oh=4df76e83c50218aed000863bd70f1370&oe=5EF7488E'}} style={{height: 300, width:500, flex: 1}}/>
                <Text>
                  Note Header is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            {/* <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem> */}
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});