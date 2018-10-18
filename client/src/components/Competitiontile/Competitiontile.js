import React from "react";
import "./Competitiontile.css";

const Competitiontile = props => (
    <div className="col s10 m10">
      <div className="card competition-tile">
        <div className="card-content">
          <span className="card-title">Competitions</span>
          <p>Run Atlanta</p>
          <p>1st: <span>{props.first}</span> || 2nd: <span>{props.second}</span></p>
          <p>3rd: <span>{props.third}</span> || You: <span>{props.user}</span></p>
        </div>
      </div>
    </div>

);

export default Competitiontile;