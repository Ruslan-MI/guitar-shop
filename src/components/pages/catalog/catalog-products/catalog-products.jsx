import React from "react";

import CatalogCard from "./catalog-card/catalog-card";

import {
  getMockGuitars,
} from "../../../../mocks";

const MAX_PRODUCTS_QUANTITY_IN_PAGE = 9;

const CatalogProducts = () => (
  <section className="catalog__products catalog-products">
    <h2 className="visually-hidden">Перечень товаров</h2>
    <ul className="catalog-products__list">
      {getMockGuitars().slice(0, MAX_PRODUCTS_QUANTITY_IN_PAGE).map(({
        id,
        name,
        type,
        popularity,
        price,
      }) => (
        <li className="catalog-products__item" key={id}>
          <CatalogCard product={{
            id,
            name,
            type,
            popularity,
            price,
          }} />
        </li>
      ))}
    </ul>
    <ul className="catalog-products__pagination-list">
      <li className="catalog-products__pagination-item">
        <a className="catalog-products__pagination-link catalog-products__pagination-link--current">1</a>
      </li>
      <li className="catalog-products__pagination-item">
        <a className="catalog-products__pagination-link" href="#">2</a>
      </li>
      <li className="catalog-products__pagination-item">
        <a className="catalog-products__pagination-link">...</a>
      </li>
      <li className="catalog-products__pagination-item">
        <a className="catalog-products__pagination-link" href="#">7</a>
      </li>
      <li className="catalog-products__pagination-item">
        <a className="catalog-products__pagination-link catalog-products__pagination-link--further" href="#">Далее</a>
      </li>
    </ul>
  </section>
);

export default CatalogProducts;
