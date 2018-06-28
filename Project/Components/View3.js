import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigationBar from 'react-native-navbar';
import SelectHoursDaily from './SelectHoursDaily';
import SelectActivities from './SelectActivities';
import BottomNavBar from './BottomNavBar'

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

let header = {
  name: 'Manchester',
  avatar_url: 'https://live-webadmin-media.s3.amazonaws.com/media/2282/mumbai-625x352.jpg'

}


export default class View3 extends Component {
  render() {
    return (

      <View>
        <SelectHoursDaily />
        <ImageBackground style={styles.city} source={{ uri: header.avatar_url }} >
          <TouchableHighlight onPress={() => { Alert.alert('Search') }}>
            <Icon name='search' color='#00aced' type='FontAwesome' style={styles.searchIcon} />
          </TouchableHighlight>
          <Text style={styles.text}>{header.name}</Text>
        </ImageBackground>
        <SelectActivities />
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
        <BottomNavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    height: 150,
    borderBottomWidth: 3,
    borderBottomColor: 'white'
  },

  city: {
    alignSelf: 'stretch',
    height: 80,

  },
  text: {
    textAlign: 'center',
    marginTop: 80
  },
  searchIcon: {

  }


});