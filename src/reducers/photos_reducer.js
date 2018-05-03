import {
  FETCHING_PHOTOS,
  FETCHING_PHOTOS_SUCCESS,
  FETCHING_PHOTOS_FAILED,
  SCRAMBLING_PHOTOS,
} from '../actions/types';

const INITIAL_STATE = {
  photos: {},
  error: null,
  fetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_PHOTOS:
      return { fetching: true, error: null };

    case FETCHING_PHOTOS_SUCCESS:
      return { fetching: false, photos: action.payload, error: null };

    case FETCHING_PHOTOS_FAILED:
      return { fetching: false, error: action.payload };

    case SCRAMBLING_PHOTOS:
      return { photos: action.payload };

    default:
      return state;
  }
}
