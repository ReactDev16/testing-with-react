import React from "react";
import Logo from "./../../assets/graphics/logo.png";
import "./styles.scss";

const Header = (props) => {
  return (
    <header data-test="header-component">
      <div className="wrap">
        <div className="logo">
          <img data-test="logo-img" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
