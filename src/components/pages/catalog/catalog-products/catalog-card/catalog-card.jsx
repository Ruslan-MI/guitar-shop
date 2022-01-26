import React from "react";
import PropTypes from "prop-types";

import {
  formatPrice,
} from "../../../../../utils";

const MAX_RATING = 5;
const RATING_STEP = 0.5;
const STAR_WIDTH = 20;

const CatalogCard = ({
  product: {
    id,
    name,
    type,
    popularity,
    price,
  },
}) => (
  <article className="catalog__product-card catalog-card">
    <div className="catalog-card__content-wrapper catalog-card__content-wrapper--heading-and-price">
      <h3 className="catalog-card__heading">{name}</h3>
      <p className="catalog-card__price">{formatPrice(price)} ₽</p>
    </div>
    <div className="catalog-card__content-wrapper catalog-card__content-wrapper--rating-and-popularity">
      <div className="catalog-card__rating-stars">
        <div className="catalog-card__active-rating-stars" style={{
          width: `${Math.round(Math.random() * (MAX_RATING / RATING_STEP)) * RATING_STEP * STAR_WIDTH}%`,
        }} />
      </div>
      <p className="catalog-card__popularity">{popularity}</p>
    </div>
    <div className="catalog-card__content-wrapper catalog-card__content-wrapper--image">
      <img className="catalog-card__image" src={`img/catalog/${type}.png`} alt="Изображение товара" width="68" height="190" />
    </div>
    <ul className="catalog-card__links-list">
      <li className="catalog-card__links-item">
        <a className="catalog-card__link catalog-card__link--more grey-button" href="#">Подробнее</a>
      </li>
      <li className="catalog-card__links-item">
        <a className="catalog-card__link catalog-card__link--buy orange-button" href="#" onClick={() => id} >Купить</a>
      </li>
    </ul>
  </article>
);

CatalogCard.propTypes = {
  product: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CatalogCard;
