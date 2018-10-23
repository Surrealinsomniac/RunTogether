import React, {Component} from "react";
import Stattracker from "../../components/Stattracker";
import Wrapper from "../../components/Wrapper";
import Groupheader from "../../components/Groupheader";
import Competitiontile from "../../components/Competitiontile";
import Friendlist from "../../components/Friendlist";
import month from "../../json/FitBitMonth.json";
import week from "../../json/FitBitWeek.json";
import day from "../../json/FitBitDaily.json";
import "./Group.css";


class Group extends Component {
    state = {
        data: month
    };
    getDay = () => {
        this.setState({ data: day })
    };

    getMonth = () => {
        this.setState({ data: month });
    };

    getWeek = () => {
        this.setState({ data: week });
    };
    render() {
        return (
            <Wrapper>
                <div className="row1">
                <Groupheader 
                    title="Run Atlanta"
                    bio="words words words words words words words words words words words words words words words words words words words words"
                />
                </div>
                <div className="row2">
                <Friendlist />
                </div>
                <div className="row3">
                <Stattracker 
                    data = {this.state.data}
                    getMonth = {this.getMonth}
                    getWeek = {this.getWeek}
                    getDay = {this.getDay}
                    daily = {day}
                    week = {week}
                    month = {month}
                />
                </div>
                <div className="row4">
                <Competitiontile 
                    first="200"
                    second="100"
                    third="50"
                    user="25"
                />
                </div>
            </Wrapper>
        );
    };
}

export default Group;