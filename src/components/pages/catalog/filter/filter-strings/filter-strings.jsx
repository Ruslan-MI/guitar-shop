import React from "react";

const checkboxes = [
  {
    name: `four-strings`,
    label: `4`,
    checked: true,
    disabled: false,
  },
  {
    name: `six-strings`,
    label: `6`,
    checked: true,
    disabled: false,
  },
  {
    name: `seven-strings`,
    label: `7`,
    checked: false,
    disabled: false,
  },
  {
    name: `twelve-strings`,
    label: `12`,
    checked: false,
    disabled: true,
  },
];

const FilterStrings = () => (
  <fieldset className="filter__block filter-strings">
    <h3 className="filter__block-heading">Количество струн</h3>
    <ul className="filter-strings__list filter__checkbox-list">
      {checkboxes.map(({
        name,
        label,
        checked,
        disabled,
      }) => (
        <li key={name} className="filter-strings__item filter__checkbox-item">
          <input className="filter-strings__checkbox filter__checkbox-input visually-hidden" type="checkbox" id={name} name={name}
            defaultChecked={checked} disabled={disabled} />
          <label className="filter-strings__label filter__checkbox-label" htmlFor={name}>{label}</label>
        </li>
      ))}
    </ul>
  </fieldset>
);

export default FilterStrings;
