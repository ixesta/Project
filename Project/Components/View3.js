import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigationBar from 'react-native-navbar';

const list = [
  {
    city: 'London',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    name: 'Manchester',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    city: 'London',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    name: 'Manchester',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    city: 'London',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    name: 'Manchester',
    avatar_url: 'http://loremflickr.com/640/480'

  }, {
    city: 'London',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    name: 'Manchester',
    avatar_url: 'http://loremflickr.com/640/480'

  }
]

const win = Dimensions.get('window')


export default class View3 extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {list.map((city, i) => {
            return (

              <ImageBackground
                key={i}
                style={styles.image}
                source={{ uri: city.avatar_url }}
              >
                <TouchableHighlight onPress={() => { Alert.alert('Add') }}>
                  <Icon name='attachment' color='#00aced' />
                </TouchableHighlight>

              </ImageBackground>

            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: 150,
  }
});