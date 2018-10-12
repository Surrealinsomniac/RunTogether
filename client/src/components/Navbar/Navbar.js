import React from "react";
import "./Navbar.css";


const Navbar = props => (
    <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">RunTogether</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/group">Groups</a></li>
        <li><a href="/area">Area</a></li>
        <li><a href="/dashboard">Profile</a></li>
      </ul>
    </div>
  </nav>
); 

export default Navbar;