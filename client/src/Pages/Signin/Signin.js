import React, { Component } from "react";
import "./Signin.css";
import SigninCard from "../../components/SigninCard";



class Signin extends Component {


    render() {
        return (
            <div className="signin-page">
                <SigninCard />
            </div>
        );
    };
};

export default Signin;