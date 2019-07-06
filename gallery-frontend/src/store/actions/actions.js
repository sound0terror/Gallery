import axios from '../../axios-api';
import {push} from "connected-react-router";
import {
  CREATE_IMAGE_SUCCESS,
  FETCH_ERROR,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGES_SUCCESS,
  FETCH_REQUEST
} from "./actionTypes";

const createImageSuccess = () => {
  return {type: CREATE_IMAGE_SUCCESS}
};
const fetchImagesSuccess = (images) => {
  return {type: FETCH_IMAGES_SUCCESS, images};
};
const fetchImageSuccess = (image) => {
  return {type: FETCH_IMAGE_SUCCESS, image};
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
    axios.get('/images/?author=' + authorId).then(response => {
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
      dispatch(fetchImageSuccess(response.data));
    }, error => {
      dispatch(fetchError(error));
    })
  }
};

export const deleteImage = (imageId) => {
  return (dispatch, getState) => {
    try{
      const token = getState().users.user.token;
      const headers = {
        Authorization: token
      };
      return axios.delete('/images/' + imageId, {headers});
    } catch (e) {
      dispatch(fetchError(e));
    }
  }
};

export const createImage = image => {
  return (dispatch, getState) => {
    try{
      const token = getState().users.user.token;
      const headers = {
        Authorization: token
      };
      return axios.post('/images', image, {headers}).then(() => {
        dispatch(createImageSuccess());
        dispatch(push("/"));
      });
    }catch (e) {
      dispatch(fetchError(e));
    }
  }
};