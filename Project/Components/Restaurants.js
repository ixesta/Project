import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, ImageBackground, TouchableHighlight, Alert, Text, Header } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomNavBar from './BottomNavBar'


const list = [
  {
    name: 'Pollo Loco',
    avatar: 'https://images-na.ssl-images-amazon.com/images/I/A1N530gXE7L._SX355_.jpg'
  },
  {
    name: 'Napoli nel Cuore',
    avatar: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/68/5e/f4/tipico-restaurante-cantina.jpg'
  },
  {
    name: 'Indian',
    avatar: 'https://decoratrix.com/img/fotos_post//tI9WZA3qBnfjdex2PMWKeuQxfnxbF6eXJrqiu0guI5RXkUkP87rYcHygvYvm.jpg'
  },
  {
    name: 'Ho Li',
    avatar: 'http://los40mx00.epimg.net/los40/imagenes/2018/02/16/yaparate/1518796451_626608_1518796954_gigante_normal.jpg'
  },
  {
    name: 'Red Cow',
    avatar: 'http://www.projectsatoz.com/wp-content/uploads/2017/01/american_restaurant_tahiti_03.jpg'
  }
]





export default class Restaurants extends Component {
  render() {
    return (
      <View>
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

    )
  }
}

const styles = StyleSheet.create({

  container: {
    alignSelf: 'stretch',
    backgroundColor: '#00BFFF'

  }
})