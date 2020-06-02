import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default class ButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header} />
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor:"red",

  }
})