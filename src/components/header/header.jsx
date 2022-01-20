import React from "react";

import MainLogo from "../main-logo/main-logo";
import DecorativeGuitar from "../decorative-guitar/decorative-guitar";

const Header = () => (
  <header className="page__header header">
    <nav className="header__nav wrapper">
      <p className="header__logo">
        <a className="header__logo-link" title="Вы находитесь на главной странице">
          <MainLogo className="header__logo-image" />
        </a>
      </p>
      <ul className="header__main-nav-list">
        <li className="header__main-nav-item">
          <a className="header__main-nav-link" href="#">Каталог</a>
        </li>
        <li className="header__main-nav-item">
          <a className="header__main-nav-link" href="#">Где купить?</a>
        </li>
        <li className="header__main-nav-item">
          <a className="header__main-nav-link" href="#">О компании</a>
        </li>
        <li className="header__main-nav-item">
          <a className="header__main-nav-link" href="#">Сервис-центры</a>
        </li>
      </ul>
      <ul className="header__user-nav-list">
        <li className="header__user-nav-item">
          <a className="header__user-nav-link header__user-nav-link--location" href="#">
            <span className="visually-hidden">Магазины рядом</span>
          </a>
        </li>
        <li className="header__user-nav-item">
          <a className="header__user-nav-link header__user-nav-link--search" href="#">
            <span className="visually-hidden">Поиск товаров</span>
          </a>
        </li>
        <li className="header__user-nav-item">
          <a className="header__user-nav-link header__user-nav-link--basket" href="#">
            <span className="visually-hidden">Корзина. Количество товаров внутри: </span>
            <span className="header__quantity-items-in-basket">2</span>
          </a>
        </li>
      </ul>
    </nav>
    <div className="header__decorative-wrapper guitar-string">
      <DecorativeGuitar className="header__decorative-guitar" />
    </div>
  </header>
);

export default Header;
