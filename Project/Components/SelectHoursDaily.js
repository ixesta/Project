import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Icon, ButtonGroup } from 'react-native-elements';


export default class SelectHoursDaily extends Component {
  render() {
    const buttons = ['2', '3', '4']

    return (
      <ButtonGroup onPress={() => { Alert.alert('Hours selected') }}
        buttons={buttons}
        containerStyle={{ height: 60, width: '100%', marginTop: 15 }}
      />
    )
  }
}




