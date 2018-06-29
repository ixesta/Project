// not used at the moment

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Icon, ButtonGroup } from 'react-native-elements';


export default class SelectActivities extends Component {
  render() {
    const buttons = ['Restaurants', 'Hotels', 'Pubs', 'Activities']

    return (
      <ButtonGroup onPress={() => { Alert.alert('Activity group selected') }}
        buttons={buttons}
        containerStyle={{ height: 60, width: '100%', marginTop: 0 }}
      />
    )
  }
}


// export default class SelectActivities extends Component {
//   render() {
//     const buttons = ['Restaurants', 'Hotels', 'Pubs', 'Activities']

//     const styles = {
//       container: {
//         flex: 1,
//       },
//     };

//     const rightButtonConfig = {
//       title: 'Next',
//       handler: () => alert('hello!'),
//     };

//     const titleConfig = {
//       title: 'Hello, world',
//     };

//     return (
//       <View style={styles.container}>
//         <NavigationBar
//           title={titleConfig}
//           rightButton={rightButtonConfig}
//         />
//       </View>
//     )
//   }
// }

