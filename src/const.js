export const guitarTypeCyrillicMap = {
  electric: `Электрогитара`,
  acoustic: `Акустическая гитара`,
  ukulele: `Укулеле`,
};

export const AppRoute = {
  ROOT: `/`,
  BASKET: `/basket`,
};

export const StoreNameSpace = {
  DATA: `data`,
  BASKET: `basket`,
  CATALOG: `catalog`,
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
