import axios from "axios";

export const AUTH_START = " AUTH_START";
export const AUTH_SUCCESS = " AUTH_SUCCESS";
export const AUTH_FAIL = " AUTH_FAIL";

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAHyyAO8yz_op-wB9Nc1Iipow90F_REAYg",
        authData,
        "Content-Type: application/json"
      )
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
