import React from "react";
import "./Home.css";
import iphone_14  from '../../Assets/iphone.png'

const Home = () => {
  return (
    <div>
       <div className="home-top">
        <div className="home-deal">
          <hr className="home-line" />
          <h2 className="deal-text">Today's Hot Deal</h2>
          <hr className="home-line" />
        </div>
      </div> 
      <div className="cont">
      <div className="full-div">
          <h6>FLASH SALE</h6>
          <h1>The Best Deals On Mobiles</h1>
          <p>About $25 Off</p>
          <p>From&nbsp;&nbsp;<span className="shake">$500</span>&nbsp;&nbsp;Onwards</p>
          <button className="home-btn">Shop Now</button>
        </div>
        <div className="image-div">
          <img src={iphone_14} alt="" />
        </div>
      </div>
      </div>
  );
};

export default Home;
