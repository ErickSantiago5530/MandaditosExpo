'use strict'

// import React,{Component,View,Text} from 'react'
import React,{Component} from 'react'
import {View,Text,Button} from 'react-native';

export default class dashboardView extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, Dashboard!</Text>
        <Button
          title="Go to Login... again"
          onPress={() => this.props.navigation.push('Login')}
        />
        <Button
          title="Go to Feed"
          onPress={() => this.props.navigation.navigate('Feed')}
        />        
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

// module.exports = dashboardView;
// export default dashboardView;