import axios from 'axios';
import _ from 'lodash';
import {
  FETCHING_PHOTOS,
  FETCHING_PHOTOS_SUCCESS,
  FETCHING_PHOTOS_FAILED,
  SCRAMBLING_PHOTOS,
} from './types';

const URL = 'http://jsonplaceholder.typicode.com/photos';

//fetching photos
export const fetchPhotos = () => async dispatch => {
  dispatch({ type: FETCHING_PHOTOS });
  try {
    const { data } = await axios.get(URL);
    dispatch({ type: FETCHING_PHOTOS_SUCCESS, payload: data });

  } catch(err) {
    console.log('photo fetch err: ', err);
    dispatch({ type: FETCHING_PHOTOS_FAILED, payload: err });
  }
}

//scamble photos
export const scrableItems = photos => dispatch => {
  //Easy way...const scrambledResult = _.shuffle(photos);
  //using recursive function as asked...
  dispatch({ type: SCRAMBLING_PHOTOS, payload: scrambler(photos)});
}

//scramble helper fn
const scrambler = (array) => {
  let length = array.length;
  while (length) {
    const randomRemainingItemIndex = Math.floor(Math.random() * length--);

    const currentItem = array[length];
    array[length] = array[randomRemainingItemIndex];
    array[randomRemainingItemIndex] = currentItem;
  }

  return array;
}
