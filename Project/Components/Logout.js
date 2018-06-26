import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Timeline from 'react-native-timeline-listview';

export default class Logout extends React.Component {
  render() {
    return (
      <View style={styles.logout}>
        <Button
          onPress={() => {
            Alert.alert('logout')
          }}
          title="Logout"
          color="#841584"
        />      </View>
    );
  }
}

const styles = StyleSheet.create({
  logout: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: 26,
    backgroundColor: 'red'
  }
})