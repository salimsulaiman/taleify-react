import { FETCH_DATA, GET_USER_LITERATION_BY_USER_LITERATION } from "../action/literationAddedAction";

const initialState = {
  data: [],
  dataDetail: [],
  isLoading: false,
  isLoadingDetail: false,
};

function literationAddedReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
        isLoadingDetail: true,
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
