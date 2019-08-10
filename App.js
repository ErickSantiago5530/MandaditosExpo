import React ,{ Component } from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';

// const Login = require('./src/components/loginView');
// const Dashboard = require('./src/components/dashboardView');


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Eres una frijolin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
