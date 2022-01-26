import React from "react";

import Header from "../../header/header";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import Filter from "./filter/filter";
import Sorting from "./sorting/sorting";
import CatalogProducts from "./catalog-products/catalog-products";
import Footer from "../../footer/footer";

const breadcrumbsLinks = [
  {
    text: `Главная`,
    href: `#`,
  },
  {
    text: `Каталог`,
  },
];

const Catalog = () => (
  <div className="page page--catalog">
    <Header />
    <main className="page__main main catalog wrapper">
      <h1 className="main__heading catalog__heading">Каталог гитар</h1>
      <Breadcrumbs className="catalog__breadcrumbs" links={breadcrumbsLinks} />
      <div className="catalog__wrapper">
        <Filter />
        <div className="catalog__main-column-wrapper">
          <Sorting />
          <CatalogProducts />
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Catalog;
