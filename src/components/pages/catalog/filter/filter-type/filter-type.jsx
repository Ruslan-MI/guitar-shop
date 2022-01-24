import React from "react";

const checkboxes = [
  {
    name: `acoustic`,
    label: `Акустические гитары`,
    checked: false,
  },
  {
    name: `electric`,
    label: `Электрогитары`,
    checked: true,
  },
  {
    name: `ukulele`,
    label: `Укулеле`,
    checked: true,
  },
];

const FilterType = () => (
  <fieldset className="filter__block filter-type">
    <h3 className="filter__block-heading">Тип гитар</h3>
    <ul className="filter-type__list filter__checkbox-list">
      {checkboxes.map(({
        name,
        label,
        checked,
      }) => (
        <li key={name} className="filter-type__item filter__checkbox-item">
          <input className="filter-type__checkbox filter__checkbox-input visually-hidden" type="checkbox" id={name} name={name}
            defaultChecked={checked} />
          <label className="filter-type__label filter__checkbox-label" htmlFor={name}>{label}</label>
        </li>
      ))}
    </ul>
  </fieldset>
);

export default FilterType;
