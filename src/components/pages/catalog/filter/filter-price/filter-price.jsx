import React from "react";

const FilterPrice = () => (
  <fieldset className="filter__block filter-price">
    <h3 className="filter__block-heading filter-price__heading">Цена, <span className="filter-price__heading-ruble">₽</span></h3>
    <div className="filter-price__wrapper">
      <p className="filter-price__paragraph">
        <label className="visually-hidden" htmlFor="min-price">От</label>
        <span className="filter-price__input-wrapper">
          <span className="filter-price__input-substrate"></span>
          <input className="filter-price__input filter-price__input--min-price" type="number"
            id="min-price" name="min-price" placeholder="1 000" />
        </span>
      </p>
      <p className="filter-price__paragraph">
        <label className="visually-hidden" htmlFor="max-price">До</label>
        <span className="filter-price__input-wrapper">
          <span className="filter-price__input-substrate"></span>
          <input className="filter-price__input filter-price__input--max-price" type="number"
            id="max-price" name="max-price" placeholder="30 000" />
        </span>
      </p>
    </div>
  </fieldset>
);

export default FilterPrice;
