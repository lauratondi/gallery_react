import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/galleries"> Galleries</Link>
    </nav>
  );
};

export default Navbar;
