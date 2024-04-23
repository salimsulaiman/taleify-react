import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const GET_USER_ANSWER = "GET_USER_ANSWER";
export const GET_USER_ANSWER_BY_USER = "GET_USER_ANSWER_BY_USER";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function successGetUserAnswer(data) {
  return {
    type: GET_USER_ANSWER,
    payload: data,
  };
}

export function successGetUserAnswerByUser(data) {
  return {
    type: GET_USER_ANSWER_BY_USER,
    payload: data,
  };
}

export function successAddUserAnswer(data) {
  return {
    type: ADD_USER_ANSWER,
    payload: data,
  };
}

export function getUserAnswer() {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/user_answer`);
      dispatch(successGetUserAnswer(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserAnswerByUser(userId, storyId) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const questionResult = await axios.get(`http://localhost:3030/question/story/${storyId}`);
      const result = await axios.get(`http://localhost:3030/user_answer/${userId}/${questionResult?.data?._id}`);
      dispatch(successGetUserAnswerByUser(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addUserAnswer(userId, questionId, userAnswer) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.post(
        `http://localhost:3030/user_answer`,
        {
          user: userId,
          question: questionId,
          userAnswer: userAnswer,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authuser: "Bearer" + " " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(successAddUserAnswer(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}
