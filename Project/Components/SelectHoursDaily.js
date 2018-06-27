import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Icon, ButtonGroup } from 'react-native-elements';


export default class SelectHoursDaily extends Component {
  render() {
    const buttons = ['Lazy', 'Active', 'Give me more!']

    return (
      <ButtonGroup onPress={() => { Alert.alert('Hours selected') }}
        buttons={buttons}
        containerStyle={{ height: 70, width: '100%' }}
      />
    )
  }
}