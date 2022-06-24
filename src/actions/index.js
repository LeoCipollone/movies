import REACT_APP_API_KEY from "../actions/index"

let apiKey = REACT_APP_API_KEY;

export function getMovies(titulo) {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=` + titulo)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "GET_MOVIES",
          payload: json
        });
      });
  };
}

export function addMovieFavorite(payload) {
  return {
    type: "ADD_MOVIE_FAVORITE",
    payload
  };
}

export function removeMovieFavorite(idMovie) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: idMovie
  }
}

export function getMovieDetail(idMovie) {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=` + idMovie)
      .then((response) => response.json())
      .then(data => {
        dispatch({
          type: "GET_MOVIE_DETAIL",
          payload: data
        })
      })
  }
}