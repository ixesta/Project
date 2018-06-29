import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, ImageBackground, Alert } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';



export default class PopupMenu extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {

    let lazy = {
      avatar_url: 'https://www.worldofbuzz.com/wp-content/uploads/2015/10/lazy.jpg'
    }

    let active = {
      avatar_url: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/620/Workouts+Under+30+Mins/SummerRun620.jpg'
    }

    let more = {
      avatar_url: 'http://www.mckennaprecision.co.uk/wp-content/uploads/2015/05/fast-track-rapid-prototype.jpg'
    }

    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Choose your pace</Text>
              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                <ImageBackground
                  style={styles.image}
                  source={{ uri: lazy.avatar_url }}>

                  <Text>Lazy (2 per day)</Text>

                </ImageBackground>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                <ImageBackground
                  style={styles.image}
                  source={{ uri: active.avatar_url }}>

                  <Text>Active (3 per day) DEFAULT</Text>

                </ImageBackground>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                <ImageBackground
                  style={styles.image}
                  source={{ uri: more.avatar_url }}>

                  <Text>Give me more! (4 per day)</Text>

                </ImageBackground>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Choose your mode</Text>
        </TouchableHighlight>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  image: {
    alignSelf: 'stretch',
    height: 190,
    borderBottomWidth: 2,
    borderBottomColor: '#00BFFF',
  }
});