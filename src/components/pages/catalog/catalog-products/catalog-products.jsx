import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import CatalogCard from "./catalog-card/catalog-card";

import {
  changeCatalogPage,
} from "../../../../store/actions/catalog";
import {
  getProductsForPage,
  getMaxPageNumber,
} from "../../../../store/selectors";
import {
  StoreNameSpace,
} from "../../../../const";

const CATALOG_PAGE_CHANGE_STEP = 1;
const MIN_PAGE_NUMBER = 1;

const CatalogProducts = () => {
  const {
    currentPageNumber,
    productsForPage,
    maxPageNumber,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CATALOG],
    ...getProductsForPage(globalState),
    ...getMaxPageNumber(globalState),
  }));

  const secondPageNumber = MIN_PAGE_NUMBER + CATALOG_PAGE_CHANGE_STEP;
  const penultimatePageNumber = maxPageNumber - CATALOG_PAGE_CHANGE_STEP;
  const previousPageNumber = currentPageNumber - CATALOG_PAGE_CHANGE_STEP;
  const nextPageNumber = currentPageNumber + CATALOG_PAGE_CHANGE_STEP;

  const isShowFirstPageLink = currentPageNumber > MIN_PAGE_NUMBER;
  const isShowLeftPlug = currentPageNumber > secondPageNumber &&
    penultimatePageNumber > secondPageNumber;
  const isShowPreviousPageLink = currentPageNumber === maxPageNumber &&
    maxPageNumber > secondPageNumber;
  const isShowNextPageLink = currentPageNumber === MIN_PAGE_NUMBER &&
    maxPageNumber > secondPageNumber;
  const isShowRightPlug = currentPageNumber < penultimatePageNumber &&
    penultimatePageNumber > secondPageNumber;
  const isShowLastPageLink = currentPageNumber < maxPageNumber;

  const dispatch = useDispatch();

  const handlePaginationListClick = (evt) => {
    if (evt.target.matches(`.catalog-products__pagination-link:is([href])`)) {
      evt.preventDefault();

      dispatch(changeCatalogPage(Number(evt.target.dataset.number)));
    }
  };

  return (
    <section className="catalog__products catalog-products">
      <h2 className="visually-hidden">Перечень товаров</h2>
      <ul className="catalog-products__list">
        {productsForPage.map(({
          id,
          name,
          type,
          popularity,
          price,
          rating,
        }) => (
          <li className="catalog-products__item" key={id}>
            <CatalogCard product={{
              id,
              name,
              type,
              popularity,
              price,
              rating,
            }} />
          </li>
        ))}
      </ul>
      <ul className="catalog-products__pagination-list" onClick={handlePaginationListClick}>
        {isShowFirstPageLink && (
          <>
            <li className="catalog-products__pagination-item">
              <a className="catalog-products__pagination-link catalog-products__pagination-link--back" href="#"
                data-number={previousPageNumber}>Назад</a>
            </li>
            <li className="catalog-products__pagination-item">
              <a className="catalog-products__pagination-link" href="#"
                data-number={MIN_PAGE_NUMBER}>{MIN_PAGE_NUMBER}</a>
            </li>
          </>
        )}
        {isShowLeftPlug && (
          <li className="catalog-products__pagination-item">
            <a className="catalog-products__pagination-link">...</a>
          </li>
        )}
        {isShowPreviousPageLink && (
          <li className="catalog-products__pagination-item">
            <a className="catalog-products__pagination-link" href="#"
              data-number={previousPageNumber}>{previousPageNumber}</a>
          </li>
        )}
        <li className="catalog-products__pagination-item">
          <a className="catalog-products__pagination-link catalog-products__pagination-link--current"
            title={`Вы находитесь на ${currentPageNumber} странице каталога`}>{currentPageNumber}</a>
        </li>
        {isShowNextPageLink && (
          <li className="catalog-products__pagination-item">
            <a className="catalog-products__pagination-link" href="#"
              data-number={nextPageNumber}>{nextPageNumber}</a>
          </li>
        )}
        {isShowRightPlug && (
          <li className="catalog-products__pagination-item">
            <a className="catalog-products__pagination-link">...</a>
          </li>
        )}
        {isShowLastPageLink && (
          <>
            <li className="catalog-products__pagination-item">
              <a className="catalog-products__pagination-link" href="#"
                data-number={maxPageNumber}>{maxPageNumber}</a>
            </li>
            <li className="catalog-products__pagination-item">
              <a className="catalog-products__pagination-link catalog-products__pagination-link--further" href="#"
                data-number={nextPageNumber}>Далее</a>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};

export default CatalogProducts;
