import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_RATING = "GET_RATING";
export const GET_RATING_BY_LITERATION = "GET_RATING_BY_LITERATION";
export const GET_RATING_BY_USER_LITERATION = "GET_RATING_BY_USER_LITERATION";
export const ADD_RATING = "ADD_RATING";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function successGetRating(data) {
  return {
    type: GET_RATING,
    payload: data,
  };
}

export function successGetRatingByLiteration(data) {
  return {
    type: GET_RATING_BY_LITERATION,
    payload: data,
  };
}

export function successGetRatingByUserLiteration(data) {
  return {
    type: GET_RATING_BY_USER_LITERATION,
    payload: data,
  };
}

export function successAddRating(data) {
  return {
    type: ADD_RATING,
    payload: data,
  };
}

export function getRating() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/rating`);
      dispatch(successGetRating(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getRatingByLiteration(literationId) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(
        `http://localhost:3030/rating/literation/${literationId}`
      );
      dispatch(successGetRatingByLiteration(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getRatingByUserLiteration(userId, literationId) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(
        `http://localhost:3030/rating/user_literation/${userId}/${literationId}`
      );
      dispatch(successGetRatingByUserLiteration(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addRating(rating, literation, user) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.post(`http://localhost:3030/rating`, {
        rating,
        literation,
        user,
      });
      dispatch(successAddRating(result.data));
      return result.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
