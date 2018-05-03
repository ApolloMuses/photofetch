import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from "react-native-expo-image-cache";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class PhotoItem extends React.Component {
  render() {
    const { url, title } = this.props.item;
    return (
      <View style={styles.container}>

        <Image style={styles.image} {...{preview: {uri: url}, uri: url}} />

        <Text style={styles.titleText}>{title}</Text>

        <TouchableOpacity style={styles.button} onPress={this.props.onScramblePress}>
          <Text style={styles.buttonText}>Scramble</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 64,
    borderColor: '#1B1D26',
    width: WIDTH
  },
  image: {
    alignSelf: 'center',
    width: WIDTH * 0.95,
    height: HEIGHT * 0.85,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    borderColor: '#1B1D26',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  titleText: {
    position: 'absolute',
    transform: [{ rotate: '55deg'}],
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    top: 300,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#21252E',
    top: 700,
    width: WIDTH * .8,
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#7BDFF2',
    textAlign: 'center',
    fontSize: 20,
  }
});
