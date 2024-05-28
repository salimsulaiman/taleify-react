import {
  FETCH_DATA,
  GET_RATING,
  GET_RATING_BY_LITERATION,
  GET_RATING_BY_USER_LITERATION,
} from "../action/ratingAction";

const initialState = {
  data: [],
  dataDetail: [],
  dataUserLiteration: [],
  isLoading: false,
};

function ratingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
      };
    case GET_RATING:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_RATING_BY_LITERATION:
      return {
        ...state,
        dataDetail: action.payload,
        isLoading: false,
      };
    case GET_RATING_BY_USER_LITERATION:
      return {
        ...state,
        dataUserLiteration: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default ratingReducer;
