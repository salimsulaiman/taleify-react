import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_STORY = "GET_STORY";
export const GET_STORY_BY_ID = "GET_STORY_BY_ID";
export const GET_STORY_BY_ID_LITERATION = "GET_STORY_BY_ID_LITERATION";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function successGetStory(data) {
  return {
    type: GET_STORY,
    payload: data,
  };
}

export function successGetStoryById(data) {
  return {
    type: GET_STORY_BY_ID,
    payload: data,
  };
}

export function successGetStoryByIdLiteration(data) {
  return {
    type: GET_STORY_BY_ID_LITERATION,
    payload: data,
  };
}

export function getStory() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/story`);
      dispatch(successGetStory(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getStoryById(id) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/story/${id}`);
      dispatch(successGetStoryById(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getStoryByIdLiteration(id) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/story/literation/${id}`);
      dispatch(successGetStoryByIdLiteration(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}
