'use strict';
import React ,{ Component } from 'react';
import { FlatList,StyleSheet, Text, View} from 'react-native';
// const Login = require('./src/components/loginView');
// const Dashboard = require('./src/components/dashboardView');
import Login from './src/components/loginView';
import Dashboard from './src/components/dashboardView';


export default class App extends Component {
  
  render() {
    return (
      <View style={styles.app}>
        {/* <Text>Hello, world!</Text>   */}
        <Login /> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app:{
    flex: 1, 
    // justifyContent: "center", 
    // alignItems: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
