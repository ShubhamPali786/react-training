import { all } from "redux-saga/effects";
import { watchAuth } from "./auth-saga";

// monitor all sagas of the application
export default function* rootSaga() {
  yield all([watchAuth()]);
}
