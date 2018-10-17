import { LineChart, Line, XAxis, YAxis } from 'recharts';
import React from "react";
import "./Stattracker.css";

const Stattracker = props => (
    <div className="col s10 m10">
      <div className="card stattracker-tile">
        <div className="chart">
        <LineChart width={750} height={200} data={props.data}>
            <Line type="monotone" dataKey="distance" stroke="#8884d8" />
            <XAxis/>
            <YAxis/>
        </LineChart>
    </div>
    <div className="divider"></div>
  <div className="section">
    <h5>Today</h5>
    <p>numbers</p>
  </div>
  <div className="divider"></div>
  <div className="section">
    <h5>Week</h5>
    <p>numbers</p>
  </div>
  <div className="divider"></div>
  <div className="section">
    <h5>Month</h5>
    <p>numbers</p>
  </div>
         

    </div>
    </div>
);

export default Stattracker;