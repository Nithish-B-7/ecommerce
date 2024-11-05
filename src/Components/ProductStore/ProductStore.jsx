import React, { useEffect, useState } from "react";
import "./ProductStore.css";
import dataProducts from '../../Data/dataProducts.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice.jsx';

const ProductStore = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(dataProducts);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container">
      <div className="pro-whole-div">
        <h1>Products you would like</h1>
        <div className="cards">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="product-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <h3>{product.brand}</h3>
                <h2>{product.name}</h2>
                <p>Rs. {product.price}</p>
                <div className="pro-btn">
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  <button>Buy Now</button>
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
