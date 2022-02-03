import React, {
  useRef,
} from "react";
import {
  useDispatch,
} from "react-redux";

import {
  PROMO_CODE_MAX_LENGTH,
} from "../../../../const";
import {
  setPromoCode,
} from "../../../../store/actions/data";
import {
  checkPromoCode,
} from "../../../../utils";

const PromoCode = () => {
  const promoCodeInputRef = useRef();

  const dispatch = useDispatch();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const promoCode = promoCodeInputRef.current.value.trim();
    const parentClassList = promoCodeInputRef.current.parentElement.classList;

    if (checkPromoCode(promoCode)) {
      parentClassList.remove(`promo-code__invalid`);

      dispatch(setPromoCode(promoCode));
    } else {
      parentClassList.add(`promo-code__invalid`);
    }

    promoCodeInputRef.current.value = ``;
  };

  return (
    <form className="basket__promo-code promo-code" action="https://echo.htmlacademy.ru" method="POST" id="promo-code-form"
      onSubmit={handleFormSubmit}>
      <h2 className="promo-code__heading">Промокод на скидку</h2>
      <p className="promo-code__paragraph">
        <label className="promo-code__label" htmlFor="promo-code">Введите свой промокод, если он у вас есть.</label>
        <span className="promo-code__content-wrapper">
          <input className="promo-code__input" type="text" name="promo-code" id="promo-code" defaultValue="GITARAHIT"
            maxLength={PROMO_CODE_MAX_LENGTH} ref={promoCodeInputRef} />
          <button className="promo-code__form-submit-button grey-button" type="submit">Применить купон</button>
        </span>
      </p>
    </form>
  );
};

export default PromoCode;
