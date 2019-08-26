'use strict'

import React,{Component} from 'react'
import {View,TextInput,StyleSheet,Image,TouchableOpacity,Text,StatusBar} from 'react-native';

export default class loginFormView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="ligth-content"/>
        <TextInput placeholder="username o email" placeholderTextColor="rgba(255,255,255,0.7)" 
                   style={styles.input} returnKeyType="next" 
                   keyboardType="email-address" autoCapitalize="none" autoCorrect={false}/>
        <TextInput placeholder="Contraseña" placeholderTextColor="rgba(255,255,255,0.7)" 
                   secureTextEntry style={styles.input} returnKeyType="go"/>
        <TouchableOpacity onPress={(this.onLogin.bind(this))} style={styles.buttonContainer} ref={(input)=> this.passwordInput = input}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onLogin(){
    ()=> this.props.navigation.push('Dashboard');
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20
  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:20,
    color:'#FFF',
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor: '#d63031',
    paddingVertical:15
  },
  buttonText:{
    textAlign:'center',
    color:"#FFFFFF",
    fontWeight:'700'
  }
});