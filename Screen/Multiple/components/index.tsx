
import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import { StyleSheet} from 'react-native';

interface Props{
  navigation:any
}
type State = typeof initState;

const initState = {
  active: false,
}

export default class FABExample extends Component<Props,State> {
  state = initState
  setActive = () =>{
    this.setState({
      active:!this.state.active
    })
  }
  render() {
    return (  
      <React.Fragment>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF'}}
            position="bottomRight"
            onPress={this.setActive}
          >
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
});