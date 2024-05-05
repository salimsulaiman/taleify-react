import { FETCH_DATA, LOGIN_ERROR, USER_DATA, LOGIN_USER, LOGOUT_USER, UPDATE_USER_DATA } from "../action/userAction";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_USER:
      return {
        ...state,
        error: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
      };
    case USER_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
