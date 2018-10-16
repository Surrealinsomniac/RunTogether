import React, {Component} from "react";
import Stattracker from "../../components/Stattracker";
import Wrapper from "../../components/Wrapper";
import graph from "../../FitBitExample.json";

class Group extends Component {
    state = {
        graph
    };
    render() {
        return (
            <Wrapper>
                <Stattracker 
                    data = {this.state.graph}
                />
            </Wrapper>
        );
    };
}

export default Group;