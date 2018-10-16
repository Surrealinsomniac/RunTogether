import { LineChart, Line } from 'recharts';
import React from "react";

const Stattracker = props => (
    <div>
        <LineChart width={400} height={400} data={props.data}>
            <Line type="monotone" dataKey="distance" stroke="#8884d8" />
        </LineChart>
    </div>
);

export default Stattracker;