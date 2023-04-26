import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { HStack, VStack, Pressable } from "@react-native-material/core";

class ProductScreen extends Component {
  logo = {
    uri: 'https://picsum.photos/170/150',
    width: 150,
    height: 150,
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <ScrollView style={{backgroundColor:'#111', borderRadius: 2}}>
            <VStack m={2} spacing={20}>
              <Pressable pressEffect='highlight' delayLongPress={500} pressEffectColor='red' onPress={()=>{}} onLongPress={(event)=>{
                alert(event)
              }}>
                <Image source={this.logo} />
              </Pressable>
              
              <Pressable pressEffect='highlight' pressEffectColor='red' onLongPress={(event)=>{
                alert(event)
              }}>
                <HStack m={2} spacing={20}>
                  <Image source={this.logo} />
                  <Image source={this.logo} />
                </HStack>
                
              </Pressable>
              

              <HStack m={2} spacing={20}>
                 
              <Pressable pressEffect='highlight' pressEffectColor='red' onTouchStart={(event)=>{
                alert(event)
              }}>
                <Image source={this.logo} />
              </Pressable>
              <Pressable pressEffect='highlight' pressEffectColor='red' onTouchStart={(event)=>{
                alert(event)
              }}>
                <Image source={this.logo} />
              </Pressable>
                </HStack>

            </VStack>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ProductScreen;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flex: 1,
    backgroundColor: '#ff6600',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});