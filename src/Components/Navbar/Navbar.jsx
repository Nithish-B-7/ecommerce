import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="search-bar">
        <select>
          <option>All Categories</option>
        </select>
        <input type="text" placeholder="Search for products" />
        <button>SEARCH</button>
      </div>
      <div className="right-section">
        <ul className="nav-list">
          <li>Profile &nbsp;<FaCircleUser />
          </li>
          <li className="nav-cart-icon" onClick={navigateToCart}>
            Cart &nbsp;<FaShoppingCart />
            <span className="nav-cart-count">{cartItems.length}</span>
          </li>
          <li>Returns &nbsp;<RiArrowGoBackFill /></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
