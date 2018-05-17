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

export default class DetailsScreen extends Component {

  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: 'white',
  };

  render() {
    return (
      <View style={{  flex: 1 }}>
       <View style={{ 
        flex: 0.4, backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
             <Image style={styles.backgroundImage}  source={require(source + 'details.jpg')}  ></Image>
          </View>
      <View style={{ 
        flex: .6, 
        backgroundColor: '#222',
        justifyContent: 'center', 
        alignItems: 'center',
      }}>

        <FadeInView style={{
          flex: 1, 
          alignItems: 'center',
          width: undefined,
          margin: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}  >    
        
            <Text style={styles.welcome} >
             What is  Lorem Ipsum !? 
            </Text>

          <Text style={styles.subWelcome} >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>

        </FadeInView>
      </View>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    margin: 50,
    backgroundColor: "#222",
    marginTop: 50
  },
  logo: {
    flex: 0.4,
    width: 180, 
    alignItems: 'flex-start',
    paddingTop: 110,
    marginLeft: 0,
 
  },
  backgroundImage: {
    flex:1,
    width:'100%',
    flexDirection: 'row',
    resizeMode:'cover'
  }, 
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 0,
    color: '#fff',
    padding: 0

  },

  subWelcome: {
    fontSize: 12,
    textAlign: 'center',
    color: '#aaa',
    padding: 0

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
