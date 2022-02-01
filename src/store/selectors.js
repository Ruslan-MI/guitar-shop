import {
  createSelector,
} from "@reduxjs/toolkit";

import {
  GuitarType,
  StoreNameSpace,
  StringsInGuitarType,
} from "../const";
import {
  filterStrings,
  getSortFunction,
  getValueInRange,
} from "../utils";

const MAX_PRODUCTS_QUANTITY_IN_PAGE = 9;

const stringsArray = [
  ...new Set(Object.values(StringsInGuitarType).reduce((a, b) => a.concat(b))),
];

const getCurrentPageNumber = (state) => state[StoreNameSpace.CATALOG].currentPageNumber;
const getProducts = (state) => state[StoreNameSpace.DATA].products;
const getCurrentSortType = (state) => state[StoreNameSpace.CATALOG].currentSortType;
const getCurrentSortDirection = (state) => state[StoreNameSpace.CATALOG].currentSortDirection;
const getMinPriceFilter = (state) => state[StoreNameSpace.CATALOG].minPriceFilter;
const getMaxPriceFilter = (state) => state[StoreNameSpace.CATALOG].maxPriceFilter;
const getGuitarTypeFilter = (state) => state[StoreNameSpace.CATALOG].guitarTypeFilter;
const getGuitarStringsFilter = (state) => state[StoreNameSpace.CATALOG].guitarStringsFilter;

const getCurrentProducts = createSelector([
  getProducts,
  getCurrentSortType,
  getCurrentSortDirection,
  getMinPriceFilter,
  getMaxPriceFilter,
  getGuitarTypeFilter,
  getGuitarStringsFilter,
], (products, currentSortType, currentSortDirection, minPriceFilter, maxPriceFilter, guitarTypeFilter, guitarStringsFilter) =>
  products.filter(({
    price,
    type,
    strings,
  }) =>
    (getValueInRange(price, minPriceFilter, maxPriceFilter) === price) &&
    (guitarTypeFilter.length ? guitarTypeFilter.includes(type) : true) &&
    (guitarStringsFilter.length ? guitarStringsFilter.includes(strings) : true))
    .sort(getSortFunction(currentSortType, currentSortDirection)));

export const getProductsForPage = createSelector([
  getCurrentProducts,
  getCurrentPageNumber,
], (currentProducts, currentPageNumber) => {
  const sliceToIndex = currentPageNumber * MAX_PRODUCTS_QUANTITY_IN_PAGE;
  const sliceFromIndex = sliceToIndex - MAX_PRODUCTS_QUANTITY_IN_PAGE;
  const productsForPage = currentProducts.slice(sliceFromIndex, sliceToIndex);

  return {
    productsForPage,
  };
});

export const getMaxPageNumber = createSelector([
  getCurrentProducts,
], (products) => ({
  maxPageNumber: Math.ceil(products.length / MAX_PRODUCTS_QUANTITY_IN_PAGE),
}));

export const getPriceRange = createSelector([
  getProducts,
], (products) => {
  const prices = products.map((item) => item.price);
  const minPrice = prices.reduce((a, b) => a < b ? a : b);
  const maxPrice = prices.reduce((a, b) => a > b ? a : b);

  return {
    priceRange: {
      min: minPrice,
      max: maxPrice,
    },
  };
});

export const getGuitarTypeFilterParameters = createSelector([
  getGuitarTypeFilter,
], (guitarTypeFilter) => ({
  guitarTypeFilterParameters: Object.values(GuitarType).map((item) => ({
    guitarType: item,
    checked: guitarTypeFilter.includes(item),
  })),
}));

export const getStringsFilterParameters = createSelector([
  getGuitarTypeFilter,
  getGuitarStringsFilter,
], (guitarTypeFilter, guitarStringsFilter) => {
  const availableStrings = guitarTypeFilter.length ?
    filterStrings(stringsArray, guitarTypeFilter) :
    stringsArray;

  const stringsFilterParameters = stringsArray.map((item) => ({
    item,
    checked: guitarStringsFilter.includes(item),
    disabled: !availableStrings.includes(item),
  }));

  return {
    stringsFilterParameters,
  };
});
