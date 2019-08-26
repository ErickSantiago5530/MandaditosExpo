'use strict'

// import React,{Component,View,Text} from 'react'
import React,{Component} from 'react'
import {View,Text,Button} from 'react-native';

import MenuButton from '../components/MenuButton'

export default class dashboardView extends Component {  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MenuButton navigation={this.props.navigation}/>
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
