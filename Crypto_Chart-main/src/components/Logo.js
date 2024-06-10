import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-white flex items-center
     "
    >
      <img src={logoSvg} alt="none" />
      <span>Trending Cryptocurrencies</span>
    </Link>
  );
};

export default Logo;
