import { ADD_USER_POINT, FETCH_DATA, GET_USER_POINT, GET_USER_POINT_BY_USER_ID } from "../action/userPointAction";

const initialState = {
  data: [],
  dataDetail: [],
  isLoading: false,
  isLoadingDetail: false,
};

function userPointReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        isLoading: true,
        isLoadingDetail: true
      };
    case GET_USER_POINT:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_USER_POINT_BY_USER_ID:
      return {
        ...state,
        dataDetail: action.payload,
        isLoadingDetail: false,
      };
    case ADD_USER_POINT:
      return {
        ...state,
        isLoadingDetail: false,
      };
    default:
      return state;
  }
}

export default userPointReducer;
