import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Webpage from "../Components/WebPage/Webpage";
import MainProducts from "../Components/MainProducts/MainProducts";
import IndividualProduct from "../Components/IndividualProduct/IndividualProduct";
const MyRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Webpage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/mainproducts" element={<MainProducts/>} />
        <Route path="/individualproduct" element={<IndividualProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouting;
