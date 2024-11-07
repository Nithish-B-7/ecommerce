import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../../features/cartSlice";
import "./Cart.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ImBin } from "react-icons/im";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleBackToHome = () => navigate("/");
  const handleNavToMainProducts = () => navigate("/mainproducts");

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id: itemId, newQuantity }));
    }
  }

  return (
    <div className="cart-container">
      <div className="back-btn" onClick={handleBackToHome}>
        <FaArrowLeftLong /> &nbsp;back
      </div>
      <h2>Your Cart</h2>
      <ul className="cart-items-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li className="cart-item" key={item.id}>
              <div className="cart-main">
                <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
              </div>
              <div className="cart-quantity">
                <div className="display-qauntity-btns">
                <p>Quantity: {item.quantity}</p>
                <div className="quantity-buttons">
                  <button
                    className="dis-cart-btn less-cart-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    className="dis-cart-btn add-cart-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          <div>
            <p>Your cart is empty.</p>
            <div className="goToPro-page" onClick={handleNavToMainProducts}> Go to Product Page</div>
          </div>
        )}
      </ul>
      {cartItems.length > 0 && (
        <div className="cart-btn-div">
          <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart &nbsp;<ImBin />
          </button>
          <button className="cart-explore" onClick={handleNavToMainProducts}>
            Explore More &nbsp;<FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
