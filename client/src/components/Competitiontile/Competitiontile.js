import React from "react";
import "./Competitiontile.css";

const Competitiontile = props => (
    <div className="col s10 m10">
      <div className="card competition-tile">
        <div className="card-content">
          <span className="card-title">Competitions</span>
          <p>competition data here.</p>
          <p>{props.data}</p>
        </div>
      </div>
    </div>
);

export default Competitiontile;