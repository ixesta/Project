
import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text, Header, Icon } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';




export default class View3 extends Component {

  // Inside of a component's render() method:
  render() {
    let header = {
      name: 'Manchester',
      avatar_url: 'https://www.visitmanchester.com/imageresizer/?image=%2Fdbimgs%2FCityscape%20Sunset%20website.jpg&action=Background_Overlay'
    }
    return (


      <ImageBackground style={styles.city} source={{ uri: header.avatar_url }} >

        <Text style={styles.text}>{header.name}</Text>

      </ImageBackground>

    );
  }
}


const styles = StyleSheet.create({

  city: {
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  }

})