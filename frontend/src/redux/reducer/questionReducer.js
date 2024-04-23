import { FETCH_DATA, GET_QUESTION, GET_QUESTION_BY_STORY_ID } from "../action/questionAction";

const initialState = {
  data: [],
  dataDetail: [],
  isLoading: false,
  isLoadingDetail: false,
};

function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
      };
    case GET_QUESTION:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_QUESTION_BY_STORY_ID:
      return {
        ...state,
        dataDetail: action.payload,
        isLoadingDetail: false,
      };
    default:
      return state;
  }
}

export default questionReducer;
