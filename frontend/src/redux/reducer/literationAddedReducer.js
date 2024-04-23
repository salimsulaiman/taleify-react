import { FETCH_DATA, GET_LITERATION_BY_USER_ID, GET_USER_LITERATION, GET_USER_LITERATION_BY_USER_LITERATION } from "../action/literationAddedAction";

const initialState = {
  data: [],
  dataDetail: [],
  dataUser: [],
  isLoading: false,
  isLoadingDetail: false,
  isLoadingUser: false
};

function literationAddedReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
        isLoadingDetail: true,
      };
    case GET_USER_LITERATION:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_LITERATION_BY_USER_ID:
      return {
        ...state,
        dataUser: action.payload,
        isLoadingUser: false,
      };
    case GET_USER_LITERATION_BY_USER_LITERATION:
      return {
        ...state,
        dataDetail: action.payload,
        isLoadingDetail: false,
      };
    default:
      return state;
  }
}

export default literationAddedReducer;
