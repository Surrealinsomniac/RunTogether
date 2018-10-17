import { LineChart, Line } from 'recharts';
import React from "react";
import "./Stattracker.css";

const Stattracker = props => (
    <div class="col s10 m10">
      <div class="card stattracker-tile">
        <div className="chart">
        <LineChart width={700} height={200} data={props.data}>
            <Line type="monotone" dataKey="distance" stroke="#8884d8" />
        </LineChart>
    </div>
         

      </div>
    </div>
);

export default Stattracker;