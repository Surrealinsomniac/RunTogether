import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Usertile from "../../components/Usertile";



class Dashboard extends Component {

    render() {
        return (
            <Wrapper>
                <Usertile 
                name="John Smith"
                total="1200"
                weekly="40"
                />
            </Wrapper>
        );
    };
};

export default Dashboard;