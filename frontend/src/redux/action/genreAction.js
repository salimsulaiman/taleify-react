import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_GENRE = "GET_GENRE";
export const GET_GENRE_BY_ID = "GET_GENRE_BY_ID";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function successGetGenre(data) {
  return {
    type: GET_GENRE,
    payload: data,
  };
}

export function successGetGenreById(data) {
  return {
    type: GET_GENRE_BY_ID,
    payload: data,
  };
}

export function getGenre() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3000/genre`);
      dispatch(successGetGenre(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getGenreById(id) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3000/genre/${id}`);
      dispatch(successGetGenreById(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}
