import {
  createReducer,
} from "@reduxjs/toolkit";

import {
  addProductToBasket,
  removeProductFromBasket,
} from "../actions/data";
import {
  getMockGuitars,
} from "../../mocks";

const initialState = {
  products: [
    ...getMockGuitars(),
  ],
  productsInBasket: [
    ...getMockGuitars().slice(0, 2),
  ],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addProductToBasket, (state, action) => {
    state.productsInBasket = [
      ...state.productsInBasket,
      action.payload,
    ];
  });

  builder.addCase(removeProductFromBasket, (state, action) => {
    const index = state.productsInBasket.findIndex((item) => item.id === action.payload.id);
    state.productsInBasket = [
      ...state.productsInBasket.slice(0, index),
      ...state.productsInBasket.slice(index + 1),
    ];
  });
});
