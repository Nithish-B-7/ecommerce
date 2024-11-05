import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./Authentication.css"; 

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="auth-wrapper">
      {isLogin ? (
        <Login onSwitch={toggleAuth} />
      ) : (
        <Signup onSwitch={toggleAuth} />
      )}
    </div>
  );
};

export default Authentication;
