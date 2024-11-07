import React, { useEffect, useState } from "react";
import "./ProductStore.css";
import dataProducts from "../../Data/dataProducts.js";
import { useDispatch } from "react-redux";
import { addToCart, goToProductPage } from "../../features/cartSlice.jsx";
import { useNavigate } from 'react-router-dom'

const ProductStore = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    setProducts(dataProducts);
  }, []);

 

  const goToIndividual = (item) => {
    let data = products.filter(function (data) {
      return data.id === item
    })
    navigate("/individualproduct")
    dispatch(goToProductPage(data))
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  function goes(params) {
  }
  return (
    <div className="container">
      <div className="pro-whole-div">
        <h1>Products you would like</h1>
        <div className="cards">
          {products.map((product) => (
            <div
              className="card"
              key={product.id}
             
            >
              <div className="product-img"  onClick={() => goToIndividual(product.id)}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <h3>{product.brand}</h3>
                <h2>{product.title}</h2>
                <p>Rs. {product.price}</p>
                <div className="pro-btn">
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                  <button onClick={goes}>Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductStore;
