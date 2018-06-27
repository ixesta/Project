import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import Trips from './Components/Trips';
import Logout from './Components/Logout';
import styles from './styles';
import View3 from './Components/View3'




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View3 />
      </View>
    );
  }
};
