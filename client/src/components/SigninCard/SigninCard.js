import React from "react";
import "./SigninCard.css";


const SigninCard = props => (
    <div className="row">
    <div className="col s12 m6">
      <div className="card signin-card">
        <div className="card-content">
          <span className="card-title signin-title">RunTogether</span>
          <p>RunTogether is a social fitness application that lets friends see and compare each other's progess, and uses competion to help everyone achieve their personal best.</p>
        </div>
        <div className="card-action">
          <a href="/signin">Sign In</a>
          <a href="/signin">Sign up</a>
        </div>
      </div>
    </div>
  </div>
);

export default SigninCard;