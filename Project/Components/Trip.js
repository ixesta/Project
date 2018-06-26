import React from 'react';
import { Alert, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Tile } from 'react-native-elements'

import Timeline from 'react-native-timeline-listview';


export default class Trip extends React.Component {

  state = { count: 0 }

  onPress = () => {
    Alert.alert('Delete Trip')
  }


  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
        >
          <Text> 🗑️ </Text>
        </TouchableHighlight>
        <Tile
          imageSrc={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="Some Caption Text"
          onPress={() => {
            Alert.alert('Go to trip')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})