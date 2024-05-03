import { FETCH_DATA, GET_GENRE, GET_GENRE_BY_ID } from "../action/genreAction";

const initialState = {
  data: [],
  dataDetail: [],
  isLoading: false,
  isLoadingDetail: false,
};

function genreReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
        isLoadingDetail: true,
      };
    case GET_GENRE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_GENRE_BY_ID:
      return {
        ...state,
        dataDetail: action.payload,
        isLoadingDetail: false,
      };
    default:
      return state;
  }
}

export default genreReducer;
