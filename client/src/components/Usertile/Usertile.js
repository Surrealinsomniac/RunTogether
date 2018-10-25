import React from "react";
import "./Usertile.css";

const Usertile = props => (
    <div className="col s3 m3">
        <div className="card horizontal user-tile">
            <ul>
                <li><h5 className="name">{props.name}</h5></li>
                <li><p className="stats">{props.total} || {props.weekly}</p></li>
            </ul>
        </div>
     </div>
);

export default Usertile;