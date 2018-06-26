import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import styles from '../styles'
import Trip from './Trip'

export default class Trips extends React.Component {
  render() {
    return (
      <View >
        <Text>Trips</Text>
        <Trip />
      </View>
    );
  }
};