import axios from '../../axios-api';
import {FETCH_ERROR, FETCH_IMAGES_SUCCESS, FETCH_REQUEST} from "./actionTypes";

const fetchImagesSuccess = (images) => {
  return {type: FETCH_IMAGES_SUCCESS, images};
};

const fetchError = (error) => {
  return {type: FETCH_ERROR, error};
};

const fetchRequest = () => {
  return {type: FETCH_REQUEST};
};

export const getImages = () => {
  return dispatch => {
    dispatch(fetchRequest());
    axios.get('/images').then(response => {
      dispatch(fetchImagesSuccess(response.data));
    }, error => {
      dispatch(fetchError(error));
    })
  }
};

export const getImagesByAuthorId = (authorId) => {
  return dispatch => {
    dispatch(fetchRequest());
    axios.get('/images/?author' + authorId).then(response => {
      dispatch(fetchImagesSuccess(response.data));
    }, error => {
      dispatch(fetchError(error));
    })
  }
};

export const getCurrentImage = (imageId) => {
  return dispatch => {
    dispatch(fetchRequest());
    axios.get('/images/' + imageId).then(response => {
      dispatch(fetchImagesSuccess(response.data));
    }, error => {
      dispatch(fetchError(error));
    })
  }
};