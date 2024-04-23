import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_USER_LITERATION = "GET_USER_LITERATION";
export const GET_USER_LITERATION_BY_USER_LITERATION = "GET_USER_LITERATION_BY_USER_LITERATION";
export const GET_LITERATION_BY_USER_ID = "GET_LITERATION_BY_USER_ID";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function successGetLiterationAdded(data){
  return{
    type: GET_USER_LITERATION,
    payload: data,
  }
}

export function successGetDataLiterationAddedByUser(data) {
  return {
    type: GET_LITERATION_BY_USER_ID,
    payload: data,
  }
}
export function successGetDataLiterationAdded(data) {
  return {
    type: GET_USER_LITERATION_BY_USER_LITERATION,
    payload: data,
  };
}



export function getLiterationAdded() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/user_literation`);
      dispatch(successGetLiterationAdded(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getLiterationByUserId(userId) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/user_literation/literation_added/${userId}`);
      dispatch(successGetDataLiterationAddedByUser(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getLiterationAddedById(userId, literationId) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(
        `http://localhost:3030/user_literation/literation_added/${userId}/${literationId}`
      );
      dispatch(successGetDataLiterationAdded(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}
