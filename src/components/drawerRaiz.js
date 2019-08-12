'use strict';
import React ,{ Component } from 'react';
import { Platform,StyleSheet, View,Text} from 'react-native';
import { DrawerNavigator,createDrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './src/components/loginView';
import Dashboard from './src/components/dashboardView';



class LoginScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Login/>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Login</Text>
        </View>
      );
    }
  }
  
  class DashboardScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Dashboard/>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Dashboard</Text>
        </View>
      );
    }
  }
  
  const DrawerNavigator = createDrawerNavigator(
    {
      Login: Login,
      Dashboard: DashboardScreen,
    },
    {
      hideStatusBar: true,
      drawerBackgroundColor: 'rgba(255,255,255,.9)',
      overlayColor: '#6b52ae',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
      },
    }
  );
  
  export default createAppContainer(DrawerNavigator);
