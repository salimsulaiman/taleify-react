import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const SUCCESS_SIGNUP = "SUCCESS_SIGNUP";
export const USER_DATA = "USER_DATA";
export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";
export const UPDATE_USER_DATA = "UPDATE_USER_DATA";
export const UPDATE_PASSWORD_USER = "UPDATE_PASSWORD_USER";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function getUserData(data) {
  return {
    type: USER_DATA,
    payload: data,
  };
}
export function successGetUserDataByEmail(data) {
  return {
    type: GET_USER_BY_EMAIL,
    payload: data,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}

export function successSignup(data) {
  return {
    type: SUCCESS_SIGNUP,
    payload: data,
  };
}

export function successUpdateUser(data) {
  return {
    type: UPDATE_USER_DATA,
    payload: data,
  };
}
export function successUpdatePasswordUser(data) {
  return {
    type: UPDATE_PASSWORD_USER,
    payload: data,
  };
}

export function userData() {
  return async (dispatch) => {
    dispatch(fetchData());
    const header = {
      authuser: "Bearer" + " " + localStorage.getItem("token"),
    };
    try {
      const result = await axios.get(`http://localhost:3030/user/userdetail`, {
        headers: header,
      });
      dispatch(getUserData(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserByEmail(email) {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const result = await axios.get(`http://localhost:3030/user/get_user/search?email=${email}`);
      dispatch(successGetUserDataByEmail(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginUser(email, password) {
  return async (dispatch) => {
    try {
      const result = await axios.post("http://localhost:3030/user/signin/", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      dispatch(loginError());
    }
  };
}

export function registerUser(name, email, password) {
  return async (dispatch) => {
    try {
      const result = await axios.post("http://localhost:3030/user/signup/", {
        name: name,
        email: email,
        password: password,
      });

      dispatch(successSignup(result.data));
      return result.data;
    } catch (error) {
      throw error;
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3030/user/logout/");
      dispatch({ type: LOGOUT_USER });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
}

export function updateUser(id, name, email) {
  return async (dispatch) => {
    const header = {
      authuser: "Bearer" + " " + localStorage.getItem("token"),
    };
    try {
      const result = await axios.put(
        `http://localhost:3030/user/${id}`,
        {
          name: name,
          email: email,
        },
        {
          headers: header,
        }
      );

      dispatch(successUpdateUser(result.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updatePasswordUser(id, oldPassword, newPassword) {
  return async (dispatch) => {
    const header = {
      authuser: "Bearer" + " " + localStorage.getItem("token"),
    };
    try {
      const result = await axios.put(
        `http://localhost:3030/user/changePassword/${id}`,
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: header,
        }
      );

      dispatch(successUpdatePasswordUser(result.data));
    } catch (error) {
      throw error;
    }
  };
}
