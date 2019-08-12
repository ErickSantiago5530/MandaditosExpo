'use strict'

import React,{Component} from 'react'
import {View,TextInput,StyleSheet,Image,TouchableOpacity,Text,StatusBar} from 'react-native';

export default class signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <View style={styles.login}>
                
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
                
            </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20
  }
});