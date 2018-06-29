import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text, Header } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigationBar from 'react-native-navbar';
import SelectActivities from './SelectActivities';
import BottomNavBar from './BottomNavBar'
import PopupMenu from './PopupMenu';
import CityHeader from './CityHeader';

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




export default class View3 extends Component {
  render() {
    return (

      <View style={styles.container}>
        {/* <SelectHoursDaily /> */}

        <CityHeader />
        {/* <SelectActivities /> */}

        {/* <PopupMenu style={styles.popup} /> */}

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
    alignSelf: 'stretch',
    backgroundColor: '#00BFFF'

  },
  image: {
    flex: 2,
    height: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#00BFFF',
  },
  text: {
    textAlign: 'center',
    marginTop: 80,
    color: '#00BFFF'
  },
  popup: {
    justifyContent: 'center'

  }


});