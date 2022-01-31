import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  StoreNameSpace,
  StringsInGuitarType,
} from "../../../../../const";
import {
  changeStringsFilter,
} from "../../../../../store/actions/catalog";
import {
  filterStrings,
} from "../../../../../utils";

const strings = [
  ...new Set(Object.values(StringsInGuitarType).reduce((a, b) => a.concat(b))),
];

const FilterStrings = () => {
  const {
    guitarTypeFilter,
    guitarStringsFilter,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CATALOG],
  }));

  const availableStrings = guitarTypeFilter.length ? filterStrings(strings, guitarTypeFilter) : strings;

  const dispatch = useDispatch();

  const handleStringsInputChange = (evt) => {
    const {
      id,
      checked,
    } = evt.target;

    dispatch(changeStringsFilter({
      strings: Number(id),
      isAdd: checked,
    }));
  };

  return (
    <fieldset className="filter__block filter-strings">
      <h3 className="filter__block-heading">Количество струн</h3>
      <ul className="filter-strings__list filter__checkbox-list">
        {strings.map((item) => ({
          item,
          checked: guitarStringsFilter.includes(item),
          disabled: !availableStrings.includes(item),
        })).map(({
          item,
          checked,
          disabled,
        }) => (
          <li key={item} className="filter-strings__item filter__checkbox-item">
            <input className="filter-strings__checkbox filter__checkbox-input visually-hidden" type="checkbox" id={item} name={item}
              checked={checked} disabled={disabled} onChange={handleStringsInputChange} />
            <label className="filter-strings__label filter__checkbox-label" htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default FilterStrings;
