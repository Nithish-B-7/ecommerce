import React from "react";
import { useSelector } from "react-redux";
import "./IndividualProduct.css";

const IndividualProduct = () => {
  const products = useSelector((state) => state.cart.carts);

  return (
    <div>
      {products.map((product) => {
        return (
          <div className="ip-whole-container" key={product.id}>
            <div className="ip-sub-container">
              <div className="ip-left">
                <img src={product.image} alt="" />
                <h1>{product.title}</h1>
              </div>
              <div className="ip-right">
                <div className="ip-description">
                  <h3>{product.description}</h3>
                </div>
                <div className="ip-deal">
                    Limited time deal
                </div>
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
