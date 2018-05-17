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
  Animated,
  overflow,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {
  createStackNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'native-base';


let source = './../../source/img/'

export default class ListScreen extends Component {

  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: 'white',

    
  };

  styleGeneral = {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height:130,
    backgroundColor: 'rgb(0,0,0)',
    
  }
  floors = [{ title: 'Spain & Coffe',color: '#2e2421', image: require(source +'one.jpg') }, 
  { title: 'Learning & Doctor' ,color: '#6d5850' , image: require(source + 'three.jpg')}, 
  { title: 'German',color: '#4a3b38' , image: require(source + 'two.jpg')},
  { title: 'Team of Teams' ,color: '#6d5850' , image: require(source + 'three.jpg')},  
  { title: 'IT & Meeting Rooms' ,color: '#957055' , image: require(source + 'one.jpg')}]


  render() {
    return (

      <ScrollView style={{ 
        // backgroundColor: '#555',
        backgroundColor: 'rgb(0,0,0)',

      }}>

 
        {this.floors.map((floor,index) => {
          
          return <TouchableOpacity  key={index}  style={{ flex: 1 }} onPress={() => { this.props.navigation.navigate('Details') }} >

          <View style={{
            ...this.styleGeneral, 
            // backgroundColor:floor.color,
          }} >
                         

           <ImageBackground style={styles.backgroundImage} blurRadius={1} resizeMode='cover' source={floor.image} >
                      <Text style={{  
                        flex:1,
                        flexDirection:'row',
                          fontSize: 26,
                          textAlign: 'center',
                          textAlignVertical:'bottom',
                          fontWeight: 'bold',
                          color:'#fff',
                          textShadowColor:'#000',
                          opacity:1,
                          marginBottom: -5,
                          padding: 0,

                          }}>{floor.title}</Text>

                        <Text style={{
                                flex:1,
                                flexDirection:'row',
                                color:'#fff',
                                margin: 0,
                                padding: 0,
                          
                        }}>
                          you can find more info 
                        </Text>
                          {/* <Icon name="ios-book" color="#c2a89a" /> */}
                          {/* <Icon name="ios-book" color="#4F8EF7" /> */}
                        {/* <Ionicons   name="chevron-thin-up"/> */}
                        
                  </ImageBackground>
                  </View>
                  </TouchableOpacity>

        })
        }


        {/* <Button title="List " onPress={() => { this.props.navigation.navigate('Home') }} /> */}
      </ScrollView>
        // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    width: undefined,
    height: '100%',
    opacity: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 200,
    
  }
});
