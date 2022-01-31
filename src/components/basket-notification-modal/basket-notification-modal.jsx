import React from "react";

import withOverlay from "../../hocs/with-overlay/with-overlay";

const BasketNotificationModal = () => (
  <section className="basket-notification-modal">
    <h2 className="basket-notification-modal__heading">Товар успешно добавлен в корзину</h2>
    <ul className="basket-notification-modal__links-list">
      <li className="basket-notification-modal__links-item">
        <a className="basket-notification-modal__link orange-button" href="#">Перейти в корзину</a>
      </li>
      <li className="basket-notification-modal__links-item">
        <a className="basket-notification-modal__link white-button" href="#">Продолжить покупки</a>
      </li>
    </ul>
    <button className="basket-notification-modal__close-button close-button" type="button">
      <span className="visually-hidden">Закрыть</span>
    </button>
  </section>
);

export default withOverlay(BasketNotificationModal);
