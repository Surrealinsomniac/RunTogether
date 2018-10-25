import React from "react";
import "./Footer.css";

const Footer = props => (
    <footer className="page-footer">
   
            <div className=" row">
              <div className=" description col l6 s12">
                <h5>RunTogether</h5>
                <p>An app that allows you to chat with friends,</p>
                <p>track your fitness progress and compete in groups.</p>
              </div>
              <div className=" creators col l4 offset-l2 s12">
                <h5>Creators</h5>
                <ul>
                  <li>Robby Heenan: <a href="https://www.linkedin.com/in/robby-heenan-surreal/" target="_blank" rel="noopener noreferrer">linkedin</a> || <a href="https://github.com/Surrealinsomniac" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li>Sofya Howard: <a href="https://www.linkedin.com/in/sofya-howard/" target="_blank" rel="noopener noreferrer">linkedin</a> || <a href="https://github.com/sofyahoward" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li>James Meier: <a href="https://www.linkedin.com/in/james-meier-252961b7/" target="_blank" rel="noopener noreferrer">linkedin</a> || <a href="https://github.com/jamesMeier" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li>Richard Covington: <a href="https://www.linkedin.com/in/richard-covington-666063b9/" target="_blank" rel="noopener noreferrer">linkedin</a> || <a href="https://github.com/rnc2011" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
              </div>
        
          </div>
          <div className="footer-copyright">
            © 2018 RunTogether
          <a className="footer-github grey-text text-lighten-4 right" href="https://github.com/Surrealinsomniac/RunTogether" target="_blank" rel="noopener noreferrer">RunTogether Github</a>
       
          </div>
        </footer>
);

export default Footer;