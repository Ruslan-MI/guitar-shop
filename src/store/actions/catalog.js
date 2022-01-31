import {
  createAction,
} from "@reduxjs/toolkit";

import {
  StoreNameSpace,
} from "../../const";

const ActionType = {
  CHANGE_CATALOG_PAGE: `${StoreNameSpace.CATALOG}/changeCatalogPage`,
  CHANGE_SORT_TYPE: `${StoreNameSpace.CATALOG}/changeSortType`,
  CHANGE_SORT_DIRECTION: `${StoreNameSpace.CATALOG}/changeSortDirection`,
  CHANGE_MIN_PRICE_FILTER: `${StoreNameSpace.CATALOG}/changeMinPriceFilter`,
  CHANGE_MAX_PRICE_FILTER: `${StoreNameSpace.CATALOG}/changeMaxPriceFilter`,
  CHANGE_GUITAR_TYPE_FILTER: `${StoreNameSpace.CATALOG}/changeGuitarTypeFilter`,
  CHANGE_STRINGS_FILTER: `${StoreNameSpace.CATALOG}/changeStringsFilter`,
};

export const changeCatalogPage = createAction(ActionType.CHANGE_CATALOG_PAGE, (pageNumber) => ({
  payload: pageNumber,
}));

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

export const changeSortDirection = createAction(ActionType.CHANGE_SORT_DIRECTION, (sortDirection) => ({
  payload: sortDirection,
}));

export const changeMinPriceFilter = createAction(ActionType.CHANGE_MIN_PRICE_FILTER, (minPrice) => ({
  payload: minPrice,
}));

export const changeMaxPriceFilter = createAction(ActionType.CHANGE_MAX_PRICE_FILTER, (maxPrice) => ({
  payload: maxPrice,
}));

export const changeGuitarTypeFilter = createAction(ActionType.CHANGE_GUITAR_TYPE_FILTER, (data) => ({
  payload: data,
}));

export const changeStringsFilter = createAction(ActionType.CHANGE_STRINGS_FILTER, (data) => ({
  payload: data,
}));
