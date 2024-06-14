import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_QUESTION = "GET_QUESTION";
export const GET_QUESTION_BY_STORY_ID = "GET_QUESTION_BY_STORY_ID";
export const GET_STORY_BY_ID_LITERATION = "GET_STORY_BY_ID_LITERATION";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function successGetQuestion(data) {
  return {
    type: GET_QUESTION,
    payload: data,
  };
}

export function successGetQuestionByStoryId(data) {
  return {
    type: GET_QUESTION_BY_STORY_ID,
    payload: data,
  };
}

export function getQuestion() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3000/question`);
      dispatch(successGetQuestion(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getQuestionyByStoryId(id) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3000/question/story/${id}`);
      dispatch(successGetQuestionByStoryId(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}
