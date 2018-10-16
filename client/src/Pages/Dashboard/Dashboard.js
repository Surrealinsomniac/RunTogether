import React, { Component } from "react";
import "./Dashboard.css";
import Wrapper from "../../components/Wrapper";
import Usertile from "../../components/Usertile";
import Friendlist from "../../components/Friendlist";
import Competitiontile from "../../components/Competitiontile";



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
                <div className="rowC">
                    <Friendlist />
                    <div className="placeholder">
                    </div>
                    <Competitiontile 
                    data="100"
                    />
                </div>
            </Wrapper>
        );
    };
};

export default Dashboard;