import { Action } from "redux";
import { currencyTypes } from "../actions/currency.actions";

interface CurrencyActionType extends Action {
  code: string;
}

function currencyReducer(state = "INR", action: CurrencyActionType) {
  switch (action.type) {
    case currencyTypes.CHANGE_CURRENCY:
      return action.code;
    default:
      return state; // current state in store
  }
}
export default currencyReducer;
