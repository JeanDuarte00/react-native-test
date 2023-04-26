import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class AboutScreen extends Component {
  image = require('./assets/info-burger.jpg');

  render() {
    return (
      <View style={styles.wrapper}>
      
       <View style={styles.container}>        
          <Image source={this.image} style={styles.image}></Image>
        </View>  

        <View style={styles.container}>        
          <Text style={styles.description}>Mauris id augue erat. 
            Curabitur massa felis, tristique in sapien quis, ultrices condimentum purus. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Nulla facilisi. Etiam ornare ligula massa, vitae vehicula lectus accumsan at. 
            Nullam a maximus lacus, sit amet vulputate augue.</Text>
        </View>  
        
        <View style={styles.container}>        
          <Text style={{verticalAlign: 'bottom'}}>App Version: 1.0.0</Text>
        </View>
      </View>
    );
  }
}

export default AboutScreen;

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  image:{
    borderRadius: 300,
    width: 250,
    height: 250
  },
  description:{
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'justify'
  },
  wrapper: {
    flex: 1,
    fontSize: 40,
    backgroundColor: '#ff6600',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  container: {
    flex: 1,
    fontSize: 40,
    justifyContent: 'flex-end',
  },
});