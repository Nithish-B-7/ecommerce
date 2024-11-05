import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../features/cartSlice';
import './Cart.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ImBin } from "react-icons/im";

const Cart = () => {

  const navigate = useNavigate()

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const backToHome = () => {
    navigate('/')
  }

  const navToMainProducts = () => {
    navigate('/mainproducts')
  }

  return (
    <>
    <div className="cart-container">
    <div className="back-btn" onClick={backToHome}>
    <FaArrowLeftLong /> &nbsp;back
    </div>
      <h2>Your Carts</h2>
      <ul className="cart-items-list">
        {cartItems.map((item) => (
          <li className="cart-item" key={item.id}>
            <div className="cart-main">
              <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            </div>
            <div className="cart-quantity">
            <div className="cart-count-display">
            <p>Quantity: {item.quantity}</p>
            <div className="cart-buttons">
              <button className='cart-btn cart-add-btn'>+</button>
              <button className='cart-btn cart-minus-btn'>-</button>
            </div>
            </div>
            <button className='remove-btn' onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className='cart-btn-div'>
      <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
        Clear Cart &nbsp;<ImBin />
      </button>
      <button className='cart-explore' onClick={navToMainProducts}>Explore More &nbsp;<FaArrowRight />
      </button>
      </div>
    </div>
    </>
  );
};

export default Cart;
