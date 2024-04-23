import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_LITERATION = "GET_LITERATION";
export const GET_LITERATION_BY_ID = "GET_LITERATION_BY_ID";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function successGetLiteration(data) {
  return {
    type: GET_LITERATION,
    payload: data,
  };
}

export function successGetLiterationById(data) {
  return {
    type: GET_LITERATION_BY_ID,
    payload: data,
  };
}

export function getLiteration() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/literation`);
      dispatch(successGetLiteration(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getLiterationById(id) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/literation/${id}`);
      dispatch(successGetLiterationById(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}
