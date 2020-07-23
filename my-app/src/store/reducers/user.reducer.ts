import { Action } from "redux";
import { userActionTypes } from "../actions/user.actions";

interface UserAction extends Action {
  user?: object;
  error?: object;
}

const initialState = {
  user: null,
  error: null,
};

function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return { user: action.user, error: null };
    case userActionTypes.SIGN_IN_ERROR:
      return { user: null, error: action.error };
    case userActionTypes.SIGN_OUT:
      return { ...initialState };
    default:
      return state;
  }
}
export default userReducer;
