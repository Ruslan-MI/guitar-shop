import React from "react";

const Sorting = () => (
  <section className="catalog__sorting sorting">
    <h2 className="sorting__heading">Сортировать:</h2>
    <fieldset className="sorting__fieldset">
      <ul className="sorting__list sorting__list--type">
        <li className="sorting__item sorting__item--type">
          <input className="sorting__radio-input visually-hidden" type="radio"
            name="sort-type" id="price" value="price" />
          <label className="sorting__label sorting__label--type" htmlFor="price">по цене</label>
        </li>
        <li className="sorting__item sorting__item--type">
          <input className="sorting__radio-input visually-hidden" type="radio"
            name="sort-type" id="popularity" value="popularity" />
          <label className="sorting__label sorting__label--type" htmlFor="popularity">по популярности</label>
        </li>
      </ul>
      <ul className="sorting__list sorting__list--direction">
        <li className="sorting__item sorting__item--direction">
          <input className="sorting__radio-input visually-hidden" type="radio"
            name="sort-direction" id="ascending" value="ascending" />
          <label className="sorting__label sorting__label--direction sorting__label--ascending" htmlFor="ascending">
            <span className="visually-hidden">по возрастанию</span>
          </label>
        </li>
        <li className="sorting__item sorting__item--direction">
          <input className="sorting__radio-input visually-hidden" type="radio"
            name="sort-direction" id="descending" value="descending" />
          <label className="sorting__label sorting__label--direction sorting__label--descending" htmlFor="descending">
            <span className="visually-hidden">по убыванию</span>
          </label>
        </li>
      </ul>
    </fieldset>
  </section>
);

export default Sorting;
