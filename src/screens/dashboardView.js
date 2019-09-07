'use strict'

// import React,{Component,View,Text} from 'react'
import React,{Component} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native';

import MenuButton from '../components/MenuButton'

const items = [
  { name: 'Me', background: '#3498db', icon: 'user' },
  { name: 'Family', background: '#ef0202', icon: 'gratipay' },
  { name: 'Lovely', background: '#efcf02', icon: 'heart' },
  { name: 'Team', background: '#02ef1d', icon: 'users' },
  { name: 'Friends', background: '#02cbef', icon: 'group' },
  { name: 'Calendars', background: '#ef5802', icon: 'calendar' },
];

export default class dashboardView extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
        <Dashboard items={items} background={true} card={this._card} column={2} />
      </View>
    );
  }
}
