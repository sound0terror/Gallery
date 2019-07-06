import {FETCH_ERROR, FETCH_IMAGE_SUCCESS, FETCH_IMAGES_SUCCESS, FETCH_REQUEST} from "../actions/actionTypes";

const initialState = {
  images: [],
  error: null,
  loading: false,
  image: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {...state, images: action.images, loading: false};
    case FETCH_IMAGE_SUCCESS:
      return {...state, image: action.image, loading: false};
    case FETCH_REQUEST:
      return {...state, loading: true};
    case FETCH_ERROR:
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
};

export default reducer