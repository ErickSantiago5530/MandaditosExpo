'use strict'

// import React,{Component,View,Text} from 'react'
import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,KeyboardAvoidingView} from 'react-native';

// import img from '../../images/images.png';
// const logo = require('../../images/images.png');
import LoginForm from '../../src/components/loginFormView';

export default class loginView extends Component {
  render() {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <View style={styles.login}>
                <View style={styles.logoContainer}>
                    <Image style= {styles.logo} source = {require('../images/logo.png')}/>
                    <Text style={styles.titulo}>Mandaditos</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    login: {
      flex: 1,
      backgroundColor: '#ff7675',
    },
    titulo:{
        color:'#FFF',
        marginTop:10,
        width:160,
        textAlign:'center',
        opacity:0.9
    },
    logoContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center',

    },
    logo:{
        width:100,
        height:100
    },
    formContainer:{

    }
  });