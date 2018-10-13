import React from "react";
import "./Usertile.css";

const Usertile = props => (
    <div className="row">
        <div className="col s4 m4">
            <div className="card horizontal">
                <div className="card-content">
                    <div className="row">
                        <div className="col s12 m12">
                            <h5>{props.name}</h5>
                        </div>
                    </div>
                        <p>{props.total} || {props.weekly}</p>
                 </div>
            </div>
        </div>
    </div>
);

export default Usertile;