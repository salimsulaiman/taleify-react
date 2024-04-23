import { FETCH_DATA, GET_LITERATION, GET_LITERATION_BY_ID } from "../action/literationAction";

const initialState = {
  data: [],
  dataDetail: [],
  isLoading: false,
  isLoadingDetail: false,
};

function literationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
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
    default:
      return state;
  }
}

export default literationReducer;
