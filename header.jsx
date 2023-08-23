import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [button, setButton] = useState("Login");
  const toggle = () => {
    button === "Login" ? setButton("Logout") : setButton("Login");
  };
  return (
    <div className="header">
      <img className="logo" src={require("../logo.jpg")} alt="logo" />
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="home" to="/about">
        About Us
      </Link>
      <Link className="home" to="/contact">
        Contact
      </Link>

      {/* <img
            className="userlogo"
            src={require("../user_icon.png")}
            alt="user"
          /> */}

      <button
        className="home"
        onClick={() => {
          toggle();
        }}
      >
        {button}
      </button>
    </div>
  );
};

export default Header;
