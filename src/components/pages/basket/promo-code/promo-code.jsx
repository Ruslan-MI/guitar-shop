import React from "react";

const PromoCode = () => (
  <form className="basket__promo-code promo-code" action="https://echo.htmlacademy.ru" method="POST" id="promo-code-form">
    <h2 className="promo-code__heading">Промокод на скидку</h2>
    <p className="promo-code__paragraph">
      <label className="promo-code__label" htmlFor="promo-code">Введите свой промокод, если он у вас есть.</label>
      <span className="promo-code__content-wrapper">
        <input className="promo-code__input" type="text" name="promo-code" id="promo-code" defaultValue="gitarahit" />
        <button className="promo-code__form-submit-button grey-button" type="submit">Применить купон</button>
      </span>
    </p>
  </form>
);

export default PromoCode;
