import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_USER_POINT = "GET_USER_POINT";
export const GET_USER_POINT_BY_USER_ID = "GET_USER_POINT_BY_USER_ID";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function successGetUserPoint(data) {
  return {
    type: GET_USER_POINT,
    payload: data,
  };
}

export function successGetUserPointById(data) {
  return {
    type: GET_USER_POINT_BY_USER_ID,
    payload: data,
  };
}

export function getUserPoint() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/user_point`);
      dispatch(successGetUserPoint(result.point));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserPointByUserId(id) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/user_point/${id}`);
      dispatch(successGetUserPointById(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}
