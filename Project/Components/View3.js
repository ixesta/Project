import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigationBar from 'react-native-navbar';
import SelectActivities from './SelectActivities';
import BottomNavBar from './BottomNavBar'
import PopupMenu from './PopupMenu'

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
    city: 'Leeds',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    name: 'Manchester',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    city: 'Liverpool',
    avatar_url: 'http://loremflickr.com/640/480'

  },
  {
    name: 'Manchester',
    avatar_url: 'http://loremflickr.com/640/480'

  }, {
    city: 'Hull',
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

      <View style={styles.container}>
        {/* <SelectHoursDaily /> */}

        <ImageBackground style={styles.city} source={{ uri: header.avatar_url }} >
          <TouchableHighlight onPress={() => { Alert.alert('Search') }}>
            <Icon name='search' color='#00aced' type='FontAwesome' style={styles.searchIcon} />
          </TouchableHighlight>
          <Text style={styles.text}>{header.name}</Text>
        </ImageBackground>
        {/* <SelectActivities /> */}
        <PopupMenu style={styles.popup} />

        <ScrollView style={styles.container}>
          {list.map((city, i) => {
            return (
              <ImageBackground
                key={i}
                style={styles.image}
                source={{ uri: city.avatar_url }}
              >

                <TouchableHighlight onPress={() => { Alert.alert('Add') }}>
                  <Icon name='attachment' color='#00aced' style={styles.addIcon} />
                </TouchableHighlight>
                <Text style={styles.text}>British Museum</Text>

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

  container: {
    alignSelf: 'stretch'

  },
  image: {

    height: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#00BFFF',
  },

  city: {

    height: 80,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },


  text: {
    textAlign: 'center',
    marginTop: 80,
    color: 'white'
  },
  popup: {
    color: 'red'
  }


});