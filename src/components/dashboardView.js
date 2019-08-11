'use strict'

// import React,{Component,View,Text} from 'react'
import React,{Component} from 'react'
import {View,Text} from 'react-native';

export default class dashboardView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, Dashboard!</Text>
      </View>
    );
  }
}

// module.exports = dashboardView;
// export default dashboardView;