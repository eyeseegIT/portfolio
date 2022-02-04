import React from "react";
import { Link } from "react-router-dom";

// Components and Assets
import Logo from "../../assets/logo.png"

const Nav = () => {

  return (
    <nav className="navigation-bar">
      <Link to="/" id="logo"><img src={Logo} alt="portfolio logo" /></Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Let's Connect!</Link>
    </nav>
  )
}

export default Nav