'use strict'

// import React,{Component,View,Text} from 'react'
import React,{Component} from 'react'
import {View,Text,Button} from 'react-native';

export default class feedView extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#ff7675',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, Feed!</Text>
        <Button title="Update the title" onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}/>
      </View>
    );
  }
}
