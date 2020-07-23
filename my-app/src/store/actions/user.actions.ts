import Axios from "axios";

export const userActionTypes = {
  SIGN_IN: "[User] Sign In",
  SIGN_OUT: "[User] Sign Out",
  SIGN_IN_SUCCESS: "[User] Sign In Success",
  SIGN_IN_ERROR: "[User] Sign In Error",
};

const loginSuccess = (user: object) => {
  return { type: userActionTypes.SIGN_IN_SUCCESS, user };
};

const loginError = (error: object) => {
  return { type: userActionTypes.SIGN_IN_ERROR, error };
};

const logout = () => {
  return { type: userActionTypes.SIGN_OUT };
};

const login = (email: string, password: string) => {
  return { type: userActionTypes.SIGN_IN, email, password };
};

// const login = (email: string, password: string) => {
//   Axios.post("", { email, password })
//     .then((res) => {
//       dispatch(loginSuccess(res.data));
//     })
//     .catch((err) => {
//       dispatch(loginError(err));
//     });
// };

export const userActions = { login, loginSuccess, loginError, logout };
