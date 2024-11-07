import React from "react";
import { useSelector } from "react-redux";
import "./IndividualProduct.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const IndividualProduct = () => {
  const products = useSelector((state) => state.cart.carts);
  const navigate = useNavigate();
  const handleBackToHome = () => navigate("/");

  return (
    <div>
      {products.map((product) => {
        return (
          <div className="ip-whole-container" key={product.id}>
            <div className="ip-sub-container">
            <div className="with-back-arrow">
            <div className="ip-back-btn" onClick={handleBackToHome}>
              <FaArrowLeftLong /> &nbsp;back
            </div>
              <div className="ip-left">
                <img src={product.image} alt="" />
                <h1>{product.title}</h1>
              </div>
            </div>
              <div className="ip-right">
                <div className="ip-description">
                  <h3>{product.description}</h3>
                </div>
                <div className="ip-deal">Limited time deal</div>
                <p>$ {product.price}</p>
                <div className="ip-buttons">
                  <button>Add to cart</button>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndividualProduct;
