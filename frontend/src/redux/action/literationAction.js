import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_LITERATION = "GET_LITERATION";
export const GET_LITERATION_BY_ID = "GET_LITERATION_BY_ID";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_FILTERED_DATA = "SET_FILTERED_DATA";

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

export function setSearchQuery(query){
  return {
    type: SET_SEARCH_QUERY,
    payload: query
  }
}

export function setFilteredData(data){
  return {
    type: SET_FILTERED_DATA,
    payload: data
  }
}

export function fetchFilteredData(query){
  return async (dispatch)=>{
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3000/literation/search/?title=${query}`);
      dispatch(setFilteredData(result.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export function getLiteration() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3000/literation`);
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
      const result = await axios.get(`http://localhost:3000/literation/${id}`);
      dispatch(successGetLiterationById(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}
