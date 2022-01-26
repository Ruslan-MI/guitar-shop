import React from "react";
import PropTypes from "prop-types";

import {
  formatPrice,
} from "../../../../../utils";

const guitarTypeCyrillicMap = {
  electric: `Электрогитара`,
  acoustic: `Акустическая гитара`,
  ukulele: `Укулеле`,
};

const BasketCard = ({
  product: {
    article,
    name,
    type,
    strings,
    price,
    quantity,
  },
}) => (
  <section className="basket__product-card basket-card">
    <div className="basket-card__content-wrapper">
      <h3 className="basket-card__heading">{guitarTypeCyrillicMap[type]} {name}</h3>
      <p className="basket-card__article">Артикул: {article}</p>
      <p className="basket-card__specifications">{guitarTypeCyrillicMap[type]}, {strings} струнная</p>
    </div>
    <div className="basket-card__content-wrapper basket-card__content-wrapper--image">
      <img className="basket-card__image" src={`img/basket/${type}.png`} alt="Изображение товара" width="48" height="124" />
    </div>
    <div className="basket-card__content-wrapper basket-card__content-wrapper--price-quantity-total">
      <p className="basket-card__price">{formatPrice(price)} ₽</p>
      <div className="basket-card__quantity-wrapper">
        <button className="basket-card__change-quantity-button basket-card__change-quantity-button--decrease" type="button">
          <span className="visually-hidden">Уменьшить количество товара</span>
        </button>
        <label className="visually-hidden" htmlFor="quantity">Введите количество товара</label>
        <input className="basket-card__quantity-input" type="number" id="quantity" name="quantity" defaultValue={quantity} />
        <button className="basket-card__change-quantity-button basket-card__change-quantity-button--increase" type="button">
          <span className="visually-hidden">Увеличить количество товара</span>
        </button>
      </div>
      <p className="basket-card__total">{formatPrice(price * quantity)} ₽</p>
    </div>
    <button className="basket-card__remove-from-basket-button" type="button">
      <span className="visually-hidden">Удалить товар из корзины</span>
    </button>
  </section>
);

BasketCard.propTypes = {
  product: PropTypes.exact({
    article: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default BasketCard;
