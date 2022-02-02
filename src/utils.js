import {
  PromoCode,
  SortDirection,
  StringsInGuitarType,
} from "./const";

const ZEROES_IN_THOUSAND = 3;

export const formatPrice = (value) =>
  `${value}`.split(``).map((item, i, arr) =>
    (arr.length - i) % ZEROES_IN_THOUSAND ? item : ` ${item}`).join(``).trim();

export const getSortFunction = (sortType, sortDirection) => {
  switch (sortDirection) {
    case SortDirection.ASCENDING:
      return (a, b) => {
        if (a[sortType] > b[sortType]) {
          return 1;
        }

        if (a[sortType] < b[sortType]) {
          return -1;
        }

        return 0;
      };

    case SortDirection.DESCENDING:
      return (a, b) => {
        if (a[sortType] > b[sortType]) {
          return -1;
        }

        if (a[sortType] < b[sortType]) {
          return 1;
        }

        return 0;
      };

    default:
      return () => 0;
  }
};

export const removeNonDigits = (value) => value.replace(/\D/g, ``);

export const getValueInRange = (value, minValue, maxValue) => {
  if (value === null) {
    return null;
  }

  if (minValue && value < minValue) {
    return minValue;
  }

  if (maxValue && value > maxValue) {
    return maxValue;
  }

  return value;
};

export const filterStrings = (stringsArr, typesArr) =>
  stringsArr.filter((stringsItem) =>
    typesArr.some((typesItem) =>
      StringsInGuitarType[typesItem].includes(stringsItem)));

export const checkPromoCode = (promoCode) => Object.values(PromoCode).includes(promoCode);
