import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import PhotoItem from '../components/photoItem';

class PhotoList extends React.Component {
  componentWillMount = () => {
    //only fetch photos once on start
    //(see /store/index.js about why persistence was added)
    _.isEmpty(this.props.photos.photos) ? this.props.fetchPhotos() : null;
  }

  onScramblePressed = () => {
    this.props.scrableItems(this.props.photos.photos);
  }

  renderFetching = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          color='#2895F9'
          size='large'
        />
        <Text style={styles.indicatorText}> Fetching Photo Data... Hold On...</Text>
      </View>
    )
  }

  renderError = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.indicatorText}> Network error, please connect to the internet and try again ...</Text>
      </View>
    )
  }

  renderItem = ({ item }) => {
    return <PhotoItem item={item} onScramblePress={this.onScramblePressed}/>;
  }

  keyExtractor = (item, index) => index.toString();

  render() {
    if (this.props.photos.fetching) return this.renderFetching();
    if (this.props.photos.error) return this.renderError();
    return (
      <FlatList
        //pagingEnabled
        horizontal
        data={_.map(this.props.photos.photos, (val, id) => {
          return { ...val, id };
        })}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 8,
    backgroundColor: '#2C3039',
    justifyContent: 'center',
  },
  indicatorText: {
    fontSize: 32,
    color: '#2895F9',
    textAlign: 'center',
    paddingTop: 30,
  }
});


const mapStateToProps = ({ photos }) => {
  return { photos }
};

export default connect(mapStateToProps, actions)(PhotoList);
