import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetch1dData, fetch1wmData} from '../../actions';
import axios from 'axios';
// import * as actions from './actions';
import "./Dashboard.css";
import Usertile from "../../components/Usertile";
import Friendlist from "../../components/Friendlist";
import Competitiontile from "../../components/Competitiontile";
// import Stattracker from "../../components/Stattracker";
// import month from "../../json/FitBitMonth.json";
// import week from "../../json/FitBitWeek.json";
// import day from "../../json/FitBitDaily.json";
//import { Session } from "inspector";

class Dashboard extends Component {

    componentDidUpdate() {
        console.log(this.props);
    }

    componentDidMount(){
       this.props.fetch1wmData('1w');
        this.props.fetch1dData();
       console.log(this.props)
    };
  
    renderData(){

       console.log("DATA", this.props.data)
            return (
                <div className="card darken-1">
                    <div className="card-content">
                        {this.props.data.summary && this.props.data.summary.distances.map((e, i) => {
                            return (
                                <div key={i}>
                                   <h2>Activity: {e.activity}</h2>
                                    <h2>Distance: {e.distance}</h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        
    }

    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        );
    }
    // render() {
    //    console.log(this.data)
    //     return (
    //         <div>
    //             <div className="row">
    //                 <Usertile 
    //                 name="John Smith"
    //                 total="1200"
    //                 weekly="40"
    //                 />
    //             </div>
    //             <div className="rowA">
    //                 <Friendlist />
    //                     <div className="rowB">
    //                     {/* <Stattracker 
    //                         data = {this.state.data}
    //                         getMonth = {this.getMonth}
    //                         getWeek = {this.getWeek}
    //                         daily = {day}
    //                         week = {week}
    //                         month = {month}
    //                     /> */}
    //                     </div>
    //                     <div className="rowC">
    //                         <Competitiontile 
    //                          first="200"
    //                          second="100"
    //                          third="50"
    //                          user="25"
    //                         />
    //                     </div>
    //             </div>
    //         </div>
    //     );
    // };
};
function mapStateToProps(state) {
    return {
        activity1wm: state.activity1wm,
        data: state.activity1d
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetch1dData: () => dispatch(fetch1dData()),
        fetch1wmData: num => dispatch(fetch1wmData(num))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
