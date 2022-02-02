export const CATALOG_PAGE_MIN_NUMBER = 1;
export const CATALOG_PAGE_CHANGE_STEP = 1;

export const PRODUCT_QUANTITY_MIN_VALUE = 1;
export const PRODUCT_QUANTITY_MAX_VALUE = 99;
export const PRODUCT_QUANTITY_CHANGE_STEP = 1;

export const PRODUCTS_ON_PAGE_MAX_QUANTITY = 9;

export const RATING_STAR_WIDTH = 20;

export const AppRoute = {
  ROOT: `/`,
  BASKET: `/basket`,
};

export const StoreNameSpace = {
  DATA: `data`,
  BASKET: `basket`,
  PAGE: `page`,
};

export const SortType = {
  PRICE: `price`,
  POPULARITY: `popularity`,
  NONE: `none`,
};

export const SortDirection = {
  ASCENDING: `ascending`,
  DESCENDING: `descending`,
  NONE: `none`,
};

export const GuitarType = {
  ACOUSTIC: `acoustic`,
  ELECTRIC: `electric`,
  UKULELE: `ukulele`,
};

export const BasketActionType = {
  ADD: `add`,
  REMOVE: `remove`,
};

export const guitarTypeCyrillicMap = {
  electric: `Электрогитара`,
  acoustic: `Акустическая гитара`,
  ukulele: `Укулеле`,
};

export const StringsInGuitarType = {
  [GuitarType.ACOUSTIC]: [
    6,
    7,
    12,
  ],
  [GuitarType.ELECTRIC]: [
    4,
    6,
    7,
  ],
  [GuitarType.UKULELE]: [
    4,
  ],
};

export const PromoCode = {
  GITARAHIT: `GITARAHIT`,
  SUPERGITARA: `SUPERGITARA`,
  GITARA2020: `GITARA2020`,
};

export const PromoCodeAction = {
  [PromoCode.GITARAHIT]: (value) => value * 0.9,
  [PromoCode.SUPERGITARA]: (value) => value < 700 ? 0 : value - 700,
  [PromoCode.GITARA2020]: (value) => value * 0.3 > 3000 ? value - 3000 : value * 0.7,
};
