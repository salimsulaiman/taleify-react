import {
  FETCH_DATA,
  GET_LITERATION,
  GET_LITERATION_BY_ID,
  SET_FILTERED_DATA,
  SET_SEARCH_QUERY,
} from "../action/literationAction";

const initialState = {
  data: [],
  dataDetail: [],
  searchQuery: "",
  filteredData: [],
  isLoadingFiltered: false,
  isLoading: false,
  isLoadingDetail: false,
};

function literationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
        isLoadingFiltered: true,
        isLoadingDetail: true,
      };
    case GET_LITERATION:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_LITERATION_BY_ID:
      return {
        ...state,
        dataDetail: action.payload,
        isLoadingDetail: false,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_FILTERED_DATA:
      return {
        ...state,
        filteredData: action.payload,
        isLoadingFiltered: false,
      };
    default:
      return state;
  }
}

export default literationReducer;
