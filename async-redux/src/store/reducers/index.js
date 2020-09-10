import {
  FETCH_ANIME,
  FETCH_ANIME_SUCCESS,
  FETCH_ANIME_ERROR
} from '../actions/fetchAnimeAction'

const initState = {
    anime: [],
    error: '',
    isLoading: false
}

export default (state = initState, action) => {
  switch(action.type) {

    case FETCH_ANIME:
      return {
        ...initState,
        isLoading: true
      }

    case FETCH_ANIME_ERROR:
      return {
        ...initState,
        error: action.payload
      }

    case FETCH_ANIME_SUCCESS:
      return {
        ...initState,
        anime: action.payload
      }

    default:
      return state;
  }
};