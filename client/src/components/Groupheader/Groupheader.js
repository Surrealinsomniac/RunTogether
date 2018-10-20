import React from "react";
import "./Groupheader.css";


const Groupheader = props => (
    <div className="col s6 m6">
      <div className="card groupheader">
        <div className="card-content bio-content">
          <span className="card-title group-title">{props.title}</span>
          <p className="bio">{props.bio}</p>
        </div>
      </div>
    </div>
);

export default Groupheader;