import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import ProductStore from "../ProductStore/ProductStore";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";

const Webpage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ProductStore />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
};

export default Webpage;
