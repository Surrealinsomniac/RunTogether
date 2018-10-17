import React, { Component } from "react";
import "./Dashboard.css";
import Wrapper from "../../components/Wrapper";
import Usertile from "../../components/Usertile";
import Friendlist from "../../components/Friendlist";
import Competitiontile from "../../components/Competitiontile";
import Stattracker from "../../components/Stattracker";
import graph from "../../FitBitExample.json";

class Dashboard extends Component {


    render() {
        return (
            <Wrapper>
                <div className="row">
                    <Usertile 
                    name="John Smith"
                    total="1200"
                    weekly="40"
                    />
                </div>
                <div className="rowA">
                    <Friendlist />
                        <div className="rowB">
                            <Stattracker 
                             data = {graph}
                            />
                        </div>
                        <div className="rowC">
                            <Competitiontile 
                             first="200"
                             second="100"
                             third="50"
                             user="25"
                            />
                        </div>
                </div>
            </Wrapper>
        );
    };
};

export default Dashboard;