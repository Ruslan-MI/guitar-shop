const ZEROES_IN_THOUSAND = 3;

export const formatPrice = (value) =>
  `${value}`.split(``).map((item, i, arr) =>
    (arr.length - i) % ZEROES_IN_THOUSAND ? item : ` ${item}`).join(``).trim();
