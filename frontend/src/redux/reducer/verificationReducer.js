import {
  RESEND_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
} from "../action/verificationAction";

const initialState = {
  loading: false,
  message: "",
  messageResend: "",
  error: null,
};

function verifyCodeReducer(state = initialState, action) {
  switch (action.type) {
    case VERIFY_OTP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: null,
      };
    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        messageResend: action.payload,
        error: null,
      };
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        message: "",
        error: action.payload,
      };
    default:
      return state;
  }
}

export default verifyCodeReducer;
