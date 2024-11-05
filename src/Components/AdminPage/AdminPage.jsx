import React, { useState } from "react";
import "./AdminPage.css";
import { FaRegUserCircle } from "react-icons/fa";

const AdminPage = () => {

  const [productItems, setProductItems] = useState([])

  const handleChange = (e) => {
    const {name, value} = e.target
    setProductItems({...productItems, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
  }

  return (
    <>
      <div className="admin-panel">
        <aside className="sidebar">
          <div className="user-div">
            <h2>Admin Panel</h2>
            <FaRegUserCircle />
          </div>
          <nav>
            <ul>
              <li>Add Items</li>
            </ul>
          </nav>
        </aside>

        <main className="content">
          <div className="add-items">
          <h1>Add items</h1>
          <div className="section-content">Welcome Admin</div>
          </div>
          <div className="main-content">
            <h1>Add items to the user panel</h1>
            <div className="input-fields">
              <form onClick={handleSubmit}>
                <label htmlFor="productName">Product Name</label>
                <input type="text" name="productName" onChange={handleChange}/>
                <label htmlFor="specs">Product Description</label>
                <input type="text" name="specs" onChange={handleChange}/>
                <label htmlFor="price">Product Price</label>
                <input type="text" name="price" onChange={handleChange}/>
                <label htmlFor="productImage">Product Image</label>
                <div className="custom-file-upload">
                  <label htmlFor="file-upload" className="file-label">
                    Choose File
                  </label>
                  <input id="file-upload" name="productImage" type="image" alt="image" onChange={handleChange}/>
                  <span id="file-chosen">No file chosen</span>
                </div>
                <div className="btn">
                  <button type="submit">Add Item</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminPage;
