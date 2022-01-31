import React from "react";
import PropTypes from "prop-types";

import withOverlay from "../../hocs/with-overlay/with-overlay";

import {
  formatPrice,
} from "../../utils";
import {
  guitarTypeCyrillicMap,
} from "../../const";

const BasketActionModal = ({
  isRemoveProduct = false,
  product: {
    article,
    name,
    type,
    strings,
    price,
  },
}) => (
  <section className="basket-action-modal">
    <h2 className="basket-action-modal__heading">{isRemoveProduct ? `Удалить этот товар? ` : `Добавить товар в корзину?`}</h2>
    <div className="basket-action-modal__content-wrapper">
      <ul className="basket-action-modal__product-info-list">
        <li className="basket-action-modal__product-info-item basket-action-modal__product-info-item--product-name">Гитара {name}</li>
        <li className="basket-action-modal__product-info-item basket-action-modal__product-info-item--article">Артикул: {article}</li>
        <li className="basket-action-modal__product-info-item basket-action-modal__product-info-item--specifications">{guitarTypeCyrillicMap[type]}, {strings} струнная</li>
        <li className="basket-action-modal__product-info-item basket-action-modal__product-info-item--price">Цена: {formatPrice(price)} ₽</li>
      </ul>
      <div className="basket-action-modal__image-wrapper">
        <img className="basket-action-modal__image" src={`img/basket/${type}.png`} alt="Изображение товара" width="48" height="124" />
      </div>
      <ul className="basket-action-modal__links-list">
        {isRemoveProduct ? (
          <>
            <li className="basket-action-modal__links-item">
              <a className="basket-action-modal__link orange-button" href="#">Удалить товар</a>
            </li>
            <li className="basket-action-modal__links-item">
              <a className="basket-action-modal__link white-button" href="#">Продолжить покупки</a>
            </li>
          </>
        ) : (
          <li className="basket-action-modal__links-item">
            <a className="basket-action-modal__link orange-button" href="#">Добавить в корзину</a>
          </li>
        )}
      </ul>
    </div>
    <button className="basket-action-modal__close-button close-button" type="button">
      <span className="visually-hidden">Закрыть</span>
    </button>
  </section>
);

BasketActionModal.propTypes = {
  isRemoveProduct: PropTypes.bool,
  product: PropTypes.exact({
    article: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default withOverlay(BasketActionModal);
