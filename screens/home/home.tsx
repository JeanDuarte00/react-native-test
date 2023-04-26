import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';


class HomeScreen extends Component {

  logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
  //image = {uri: 'burger-home-background.png'};

  image = require('./assets/burger-home-background.png');


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={this.image} style={styles.image}>
          <Text style={styles.title}>Burger Agora</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff6600',
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      color: '#ff6600',
      fontWeight: 'bold',
      fontSize: 80,
      fontFamily: 'sans-serif',
      textAlign: 'center',
      marginTop: 250,
      verticalAlign: 'bottom'
    },
    image:{
      backgroundColor: 'green',
      resizeMode: 'cover',
      flex: 1,
      width: '100%',
      height: '100%',
    }
});