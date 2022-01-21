import React from "react";

import Header from "../../header/header";
import Footer from "../../footer/footer";

const Catalog = () => (
  <div className="page page--catalog">
    <Header />
    <main className="page__main main main--catalog" style={{
      height: `1169px`,
    }} />
    <Footer />
  </div>
);

export default Catalog;
