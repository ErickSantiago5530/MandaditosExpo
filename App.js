'use strict';
import React ,{ Component } from 'react';
import { StyleSheet, View,Text,Button } from 'react-native';


import Feed from './src/components/feedView';
import Login from './src/components/loginView';
import Dashboard from './src/components/dashboardView';
// import drawerRaiz from './src/components/drawerRaiz';

import { createStackNavigator, createAppContainer,createBottomTabNavigator,DrawerNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';


const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Dashboard: Dashboard,
    Feed:Feed,
  },
  {
    initialRouteName: "Dashboard",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerLeft: (
        <Icon  name='md-menu' size={35} onPress={() => alert('This is a button!')}/>
        // <Button
        //   onPress={alertAlgo()}
        //   title="Info"
        //   color="#fff"
        //   />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Dashboard!',
    },    
  }
);

const styles = StyleSheet.create({
  icon: {
    marginHorizontal:4
  }
});

const Tabs = createBottomTabNavigator({ AppNavigator });
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Dashboard',
    
  };
  render() {
    return <AppContainer />;
  }
  alertAlgo(){
    // this.props.navigation.openDrawer();
    () => alert('This is a button!')
  }
}


