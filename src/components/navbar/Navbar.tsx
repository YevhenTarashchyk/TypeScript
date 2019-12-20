import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper pink darken-2">
      <a href="/" className="brand-logo">
        React + typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
