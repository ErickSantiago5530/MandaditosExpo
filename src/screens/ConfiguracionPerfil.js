'use strict'

// import React,{Component,View,Text} from 'react'
import React,{Component} from 'react'
import {View,Text} from 'react-native';

import MenuButton from '../components/MenuButton'

export default class dashboardView extends Component {  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MenuButton navigation={this.props.navigation}/>        
        <Text>Hello, Editar Perfil!</Text>        
      </View>
    );
  }
}
