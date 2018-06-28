import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text } from 'react-native';

const styles = {
  container: {
    position: 'absolute',
    marginBottom: 0
  },
};

const rightButtonConfig = {
  title: 'View Trip',
  handler: () => alert('Your trip!'),
};
const leftButtonConfig = {
  title: 'View List',
  handler: () => alert('Activities list!'),
};


function NavBar() {
  return (
    <View >
      <NavigationBar
        rightButton={rightButtonConfig}
        leftButton={leftButtonConfig}
      />
    </View>
  );
}

export default BottomNavBar;