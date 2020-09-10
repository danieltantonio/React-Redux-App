import axios from 'axios';

export const FETCH_ANIME = 'FETCH_ANIME';
export const FETCH_ANIME_SUCCESS = 'FETCH_ANIME_SUCCESS';
export const FETCH_ANIME_ERROR = 'FETCH_ANIME_ERROR';

export const fetchAnime = (anime) => {
    return dispatch => {
        if(!anime) {
            return dispatch({ type: FETCH_ANIME_ERROR, payload: 'ERROR: Please provide an anime to look up!' });
        }
        dispatch({ type: FETCH_ANIME });
        axios
          .get(`https://api.jikan.moe/v3/search/anime?q=${anime}`)
          .then(res => {
              console.log(res.data.results);
              dispatch({ type: FETCH_ANIME_SUCCESS, payload: res.data.results });
          })
          .catch(err => {
              console.log(err);
              dispatch({ type: FETCH_ANIME_ERROR, payload: err });
          });
    }
}