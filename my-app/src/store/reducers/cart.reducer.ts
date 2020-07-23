import { Action } from "redux";
import { cartActionTypes } from "../actions/cart.actions";
import { ProductModel } from "../../models/product.model";

interface CartActionType extends Action {
  product?: any;
  id?: number;
}
// state : initialize, immutable
function cartReduer(state: any[] = [], action: CartActionType) {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return [...state, { ...action.product, productQty: 1 }];
    case cartActionTypes.REMOVE_FROM_CART:
      return state.filter((p) => p.productId !== action.id);
    default:
      return state;
  }
}

export default cartReduer;
