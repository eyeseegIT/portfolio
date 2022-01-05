import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navigation-bar">
      <Link to="/projects">Projects</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Let's Connect!</Link>
    </nav>
  )
}

export default Nav