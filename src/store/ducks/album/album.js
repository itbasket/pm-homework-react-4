import axios from 'axios';
import types from './types';

const initialState = {
  data: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD_ALBUM_SUCCESS:
      return {
        ...state, data: action.payload
      }
    case types.CLEAR_ALBUM_STATE:
      return {
        ...state, data: []
      }
    default: return state;
  }
}

export function loadAlbum(id) {
  return async dispatch => {
    let url = `https://jsonplaceholder.typicode.com/albums/${id}?_expand=user`

    const response = await axios.get(url)
    const data = response.data

    dispatch(loadAlbumSuccess(data))
  }
}

export function loadAlbumSuccess(data) {
  return {
    type: types.LOAD_ALBUM_SUCCESS,
    payload: data
  }
}

export function clearState() {
  return {
    type: types.CLEAR_ALBUM_STATE
  }
}