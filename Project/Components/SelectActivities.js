import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Icon, ButtonGroup } from 'react-native-elements';


export default class SelectActivities extends Component {
  render() {
    const buttons = ['Atractions', 'Restaurants', 'Hotels', 'Pubs']

    return (
      <ButtonGroup onPress={() => { Alert.alert('Activity group selected') }}
        buttons={buttons}
        containerStyle={{ height: 60, width: '100%', marginTop: 0 }}
      />
    )
  }
}