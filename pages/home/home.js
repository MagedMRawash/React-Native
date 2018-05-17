/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  createStackNavigator
} from 'react-navigation';

import FadeInView from './../../utils/FadeInView';




  

let source = './../../source/img/'
   
export default class HomeScreen extends Component {

  static navigationOptions = {
    header:null,
  };
   
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#555' }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.props.navigation.navigate('List') }} >
          <ImageBackground style={styles.backgroundImage} source={require(source + 'landing.jpg')}  >
            <View style={styles.container}>
              <FadeInView style={{
                flex: 1,
                alignItems: 'center',
                width: 300,
              }}  >
                <ImageBackground style={styles.logo} source={require(source + 'logo.png')}>
                  <Text style={styles.welcome} >React Native</Text>
                  <Text style={styles.subWelcome} >Vodafone</Text>
                </ImageBackground>
              </FadeInView>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 50,
    marginTop: 50, 

  },
  logo:{
    flex: 0.4 ,
    width: 180,
    alignItems: 'flex-start',    
    paddingTop: 110,
    marginLeft: 0,
        
  },
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: null,
},
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: "Cookie-Regular",
    margin: 0,
    marginLeft: -40,
    color: '#fff',
    padding: 0 

  },

  subWelcome: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: -6,
    marginLeft: -40,    
    color: 'red',
    padding: 0 
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
