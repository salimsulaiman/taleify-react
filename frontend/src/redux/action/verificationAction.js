import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const SUCCESS_VERIFICATION = "SUCCESS_VERIFICATION";
export const VERIFY_OTP_REQUEST = "VERIFY_OTP_REQUEST";
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS";
export const RESEND_OTP_SUCCESS = "RESEND_OTP_SUCCESS";
export const VERIFY_OTP_FAILURE = "VERIFY_OTP_FAILURE";

// export function fetchData() {
//   return {
//     type: FETCH_DATA,
//   };
// }

// export function successVerifyCode(data) {
//   return {
//     type: SUCCESS_VERIFICATION,
//     payload: data,
//   };
// }

export const verifyOTPRequest = () => ({
  type: VERIFY_OTP_REQUEST,
});

export const verifyOTPSuccess = (message) => ({
  type: VERIFY_OTP_SUCCESS,
  payload: message,
});

export const verifyOTPFailure = (error) => ({
  type: VERIFY_OTP_FAILURE,
  payload: error,
});

export const resendOTPSuccess = (message) => ({
  type: RESEND_OTP_SUCCESS,
  payload: message,
});
export function compareVerificationCode(userId, otp) {
  return async (dispatch) => {
    try {
      const result = await axios.post(`http://localhost:3030/user/verifyOTP`, {
        userId,
        otp,
      });

      dispatch(verifyOTPSuccess(result.data.message));

      return result.data;
    } catch (error) {
      dispatch(verifyOTPFailure(error.message));

      throw error;
    }
  };
}

export function resendVerifyCode(userId, email) {
  return async (dispatch) => {
    try {
      const result = await axios.post(`http://localhost:3030/user/resendOTPVerificationCode`, {
        userId,
        email,
      });

      dispatch(resendOTPSuccess(result.data));

      return result.data;
    } catch (error) {
      dispatch(verifyOTPFailure(error.message));
      throw error;
    }
  };
}
