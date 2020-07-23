import { combineReducers } from "redux";
import currencyReducer from "./currency.reducer";
import cartReduer from "./cart.reducer";
import { ProductModel } from "../../models/product.model";
import userReducer from "./user.reducer";
import commonReducer from "./common.reducer";

export interface StoreModel {
  currency: string;
  cart: ProductModel[];
  userSession: { user: object; error: object };
  loading: boolean;
}

const rootReducer = combineReducers({
  currency: currencyReducer,
  cart: cartReduer,
  userSession: userReducer,
  loading: commonReducer,
});

export default rootReducer;
