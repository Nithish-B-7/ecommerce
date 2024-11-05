import axios from "axios";
import React, { useEffect, useState } from "react";
import './MainProducts.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const MainProducts = () => {
  const [products, setProducts] = useState([])
  const [searchProduct, setSearchProduct] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = (product) => dispatch(addToCart(product))

  const backToHome = () => navigate('/cart')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products")
        setProducts(result.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <>
      <div className="back-btn" onClick={backToHome}>
        <FaArrowLeftLong /> &nbsp;back
      </div>
      <div className="mainprosub-navbar">
        <div className="pro-search-filter">
        <div className="filter-container">
        <input
            type="text"
            placeholder="Search your products"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <button>Search</button>
        </div>
        </div>
      </div>
      <div className="whole-mainProduct-div">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="mainProduct-title-div">
              <div className="product-details">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-price">${product.price}</p>
              </div>
              <div className="product-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainProducts;
