import React from "react";

import BasketCard from "./basket-card/basket-card";

import {
  getMockGuitars,
} from "../../../../mocks";

const BasketProducts = () => (
  <section className="basket__products basket-products">
    <h2 className="visually-hidden">Перечень товаров</h2>
    <ul className="basket-products__list">
      {getMockGuitars().slice(0, 2).map(({
        id,
        article,
        name,
        type,
        strings,
        price,
      }) => (
        <li className="basket-products__item" key={id}>
          <BasketCard product={{
            article,
            name,
            type,
            strings,
            price,
            quantity: 1,
          }} />
        </li>
      ))}
    </ul>
  </section>
);

export default BasketProducts;
