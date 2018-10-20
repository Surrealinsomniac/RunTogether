import React, {Component} from "react";
import Stattracker from "../../components/Stattracker";
import Wrapper from "../../components/Wrapper";
import month from "../../json/FitBitMonth.json";


class Group extends Component {
    state = {
        data: month
    };
    render() {
        return (
            <Wrapper>
                <Stattracker 
                    data = {this.state.data}
                />
            </Wrapper>
        );
    };
}

export default Group;