import { put, takeEvery } from "redux-saga/effects";
import Axios from "axios";
import { userActions, userActionTypes } from "../actions/user.actions";
import { commonActions } from "../actions/common.actions";
// ES6 generator functions
export function* authSaga(action: any) {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtmiEc1CaYH9NziL7NwGgLT_jp92VdvjU";
  const data = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  try {
    yield put(commonActions.setLoading(true));
    const response = yield Axios.post(url, data);
    yield put(userActions.loginSuccess(response.data)); // dispatching an action
    yield put(commonActions.setLoading(false));
  } catch (e) {
    yield put(userActions.loginError(e.response.data.error.message));
    yield put(commonActions.setLoading(false));
  }
}

export function* watchAuth() {
  yield takeEvery(userActionTypes.SIGN_IN, authSaga);
}
