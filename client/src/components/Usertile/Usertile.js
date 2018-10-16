import React from "react";
import "./Usertile.css";

const Usertile = props => (
    <div className="col s3 m3">
        <div className="card horizontal user-tile">
            <div className="card-content">
                <h5>{props.name}</h5>
                <p>{props.total} || {props.weekly}</p>
            </div>
        </div>
     </div>
);

export default Usertile;