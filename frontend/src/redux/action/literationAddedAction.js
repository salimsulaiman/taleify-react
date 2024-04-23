import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_USER_LITERATION = "GET_USER_LITERATION";
export const GET_USER_LITERATION_BY_USER_LITERATION = "GET_USER_LITERATION_BY_USER_LITERATION";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
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
      const result = await axios.get(`http://localhost:3030/user_literation'/literation_added`);
      dispatch(successGetLiteration(result.data));
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
