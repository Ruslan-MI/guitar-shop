import React from "react";

import Header from "../../header/header";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import BasketProducts from "./basket-products/basket-products";
import PromoCode from "./promo-code/promo-code";
import Footer from "../../footer/footer";

const breadcrumbsLinks = [
  {
    text: `Главная`,
    href: `#`,
  },
  {
    text: `Каталог`,
    href: `#`,
  },
  {
    text: `Оформляем`,
  },
];

const Basket = () => (
  <div className="page page--basket">
    <Header />
    <main className="page__main main basket wrapper">
      <h1 className="main__heading basket__heading">Корзина</h1>
      <Breadcrumbs className="catalog__breadcrumbs" links={breadcrumbsLinks} />
      <BasketProducts />
      <div className="basket__bottom-wrapper">
        <PromoCode />
        <div className="basket__totals-wrapper">
          <p className="basket__total-price">Всего: 47 000 ₽</p>
          <ul className="basket__links-list">
            <li className="basket__links-item">
              <a className="basket__link orange-button" href="#">Оформить заказ</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Basket;
