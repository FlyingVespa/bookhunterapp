import React from "react";

import './assets/index.css';
import './assets/header.css';
import Logo from './assets/img/openbook.png';

const Header =() => {
     return (
     <header>
      <div className="header">
        <img className="logo-img" src={Logo} alt="a"/>
        <h1>BOOKHUNTER</h1>
      </div>
      <div className="slogan"><p>Bound to find something</p></div>
      </header>
      );
};

export default Header;