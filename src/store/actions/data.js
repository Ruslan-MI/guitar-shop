import {
  createAction,
} from "@reduxjs/toolkit";

import {
  StoreNameSpace,
} from "../../const";

const ActionType = {
  ADD_PRODUCT_TO_BASKET: `${StoreNameSpace.DATA}/addProductToBasket`,
  REMOVE_PRODUCT_FROM_BASKET: `${StoreNameSpace.DATA}/removeProductFromBasket`,
};

export const addProductToBasket = createAction(ActionType.ADD_PRODUCT_TO_BASKET, (product) => ({
  payload: product,
}));

export const removeProductFromBasket = createAction(ActionType.REMOVE_PRODUCT_FROM_BASKET, (product) => ({
  payload: product,
}));
