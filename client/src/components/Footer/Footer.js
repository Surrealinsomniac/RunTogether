import React from "react";
import "./Footer.css";

const Footer = props => (
    <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5>RunTogether</h5>
                <p>Georgia Tech Coding Bootcamp final project</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5>Creators</h5>
                <ul>
                  <li>Robby Heenan: <a href="https://www.linkedin.com/in/robby-heenan-surreal/" target="_blank" rel="noopener noreferrer">linkedin</a> || <a href="https://github.com/Surrealinsomniac" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li><a href="#!">Link 2</a></li>
                  <li><a href="#!">Link 3</a></li>
                  <li><a href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 RunTogether
            <a className="grey-text text-lighten-4 right" href="https://github.com/Surrealinsomniac/RunTogether" target="_blank" rel="noopener noreferrer">RunTogether Github</a>
            </div>
          </div>
        </footer>
);

export default Footer;