import React from "react";
import "./Navbar.css";


const Navbar = props => (
    <nav>
    <div className="nav-wrapper black-text">
      <a className="brand-logo black-text">RunTogether</a>
      <ul className="black-text right hide-on-med-and-down" id="nav-mobile" >
        <li className="black-text"><a href="/group">Groups</a></li>
        <li className="black-text"><a href="/area">Area</a></li>
        <li className="black-text"><a href="/dashboard">Profile</a></li>
      </ul>
    </div>
  </nav>
); 

export default Navbar;