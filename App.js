//Did not install a linter as this is not an big project. 

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './src/store';
import PhotoList from './src/screens/PhotoList';

export default class App extends React.Component {
  render() {
    const { persistor, store } = configureStore();

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>

          <View style={styles.container}>
            <PhotoList />
          </View>

        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
