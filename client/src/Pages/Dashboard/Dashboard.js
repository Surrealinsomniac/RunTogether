import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Usertile from "../../components/Usertile";
import Friendlist from "../../components/Friendlist";



class Dashboard extends Component {

    render() {
        return (
            <Wrapper>
                <Usertile 
                name="John Smith"
                total="1200"
                weekly="40"
                />
                <Friendlist />
            </Wrapper>
        );
    };
};

export default Dashboard;