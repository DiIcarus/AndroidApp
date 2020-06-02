import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import * as screen__ from './../../config';

interface Props {
  navigation:any
}
export default class CardItemBordered extends Component<Props,{}> {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text></Text>
            </CardItem>
            <CardItem 
            bordered
            onPress={()=>screen__.goTo(this.props.navigation,screen__.Alarm)}
            >
              <Body>
                <Text>
                  Note Header is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Date: 20/10/2020</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Note Header</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Note Header is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Date: 20/10/2020</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Note Header</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Note Header is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Date: 20/10/2020</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Note Header</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Note Header is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Date: 20/10/2020</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Note Header</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Note Header is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Date: 20/10/2020</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}