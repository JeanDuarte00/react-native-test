import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ListItem, Avatar } from "@react-native-material/core";

class OrderScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         <View style={{margin: 20}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>Pedidos Anteriores</Text>
        </View>
        <View>
          <ListItem title="Burger Duplo" secondaryText='Price: 10' overline='21/03/2023' leadingMode='avatar'
             leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            }
          />
          <ListItem style={{margin:5}} title="Burguer Monstro" secondaryText='Price: 17' overline='16/02/2023' leadingMode='avatar'
             leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
            }
          />
          <ListItem style={{margin:10}} title="Burguer Jr." secondaryText='Price: 7' overline='02/01/2023' leadingMode='avatar'
             leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/4.jpg" }} />
            }
          />
        </View>
      </View>
    );
  }
}

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    //fontSize: 40,
    backgroundColor: '#ff6600',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});