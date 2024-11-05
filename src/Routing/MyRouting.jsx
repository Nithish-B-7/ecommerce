import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Webpage from "../Components/WebPage/Webpage";
import MainProducts from "../Components/MainProducts/MainProducts";
const MyRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Webpage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/mainproducts" element={<MainProducts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouting;
