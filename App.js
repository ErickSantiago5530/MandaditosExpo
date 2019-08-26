'use strict';
import React from 'react';
import { StyleSheet, View,Text,Button } from 'react-native';


import Login from './src/login/loginView';
import Dashboard from './src/screens/dashboardView';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerNavigator from './src/navigation/drawerNavigator';

export default class App extends React.Component {  
  render() {
    return <DrawerNavigator />;
  }
}


