import React from "react";
import "./Usertile.css";

const Usertile = props => (
    <div className="col s3 m3">
        <div className="card horizontal user-tile">
            <div className="card-content">
                <h5 className="name">{props.name}</h5>
                <p className="stats">{props.total} || {props.weekly}</p>
            </div>
        </div>
     </div>
);

export default Usertile;