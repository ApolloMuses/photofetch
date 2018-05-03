import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

/**
 * Misread the instructions,
 * thought caching of images being saving the entire array,
 * later realized it was just caching, but by that time,
 * I've already added persistence so I just left it in ¯\_(ツ)_/¯
**/
const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['photos'],
};

const reducer = persistCombineReducers(config, reducers);

export default function configurationStore(initialState = {}) {
  const store = createStore(reducer, initialState, applyMiddleware(thunk));

  const persistor = persistStore(store);
  return { persistor, store };
}
