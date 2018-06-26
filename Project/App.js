import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import Trips from './Components/Trips';
import Logout from './Components/Logout';
import styles from './styles'




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Trips />
        <Logout />
      </View>
    );
  }
};
