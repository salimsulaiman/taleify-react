import {
  FETCH_DATA,
  LOGIN_ERROR,
  USER_DATA,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER_DATA,
  UPDATE_PASSWORD_USER,
  SUCCESS_SIGNUP,
  GET_USER_BY_EMAIL,
} from "../action/userAction";

const initialState = {
  data: [],
  dataByEmail: [],
  dataSignup: [],
  dataPassword: [],
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
    case SUCCESS_SIGNUP:
      return {
        ...state,
        dataSignup: action.payload,
      };
    case USER_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        dataByEmail: action.payload,
        isLoading: false,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_PASSWORD_USER:
      return {
        ...state,
        dataPassword: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
