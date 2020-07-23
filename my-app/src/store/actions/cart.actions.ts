import { ProductModel } from "../../models/product.model";

export const cartActionTypes = {
  ADD_TO_CART: "[Cart] Add to Cart",
  REMOVE_FROM_CART: "[Cart] Remove Item",
};

const addToCart = (product: ProductModel) => {
  return { type: cartActionTypes.ADD_TO_CART, product };
};

const removeItem = (id: number) => {
  return { type: cartActionTypes.REMOVE_FROM_CART, id };
};

export const cartActions = { addToCart, removeItem };
