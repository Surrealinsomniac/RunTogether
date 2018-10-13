import React from "react";
import "./Navbar.css";


const Navbar = props => (
    <nav>
    <div className="nav-wrapper black-text">
      <a className="brand-logo black-text">RunTogether</a>
      <ul className="black-text right hide-on-med-and-down" id="nav-mobile" >
        <li><a className="black-text" href="/group">Groups</a></li>
        <li> | </li>
        <li><a className="black-text" href="/area">Area</a></li>
        <li> | </li>
        <li><a className="black-text" href="/dashboard">Profile</a></li>
      </ul>
    </div>
  </nav>
); 

export default Navbar;