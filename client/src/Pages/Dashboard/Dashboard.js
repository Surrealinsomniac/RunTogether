import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetch1dData, fetch1wData, fetch1mData} from '../../actions';
import axios from 'axios';
// import * as actions from './actions';
import "./Dashboard.css";
import PeopleFilter from '../../components/PeopleSearch/PeopleSearch'
import Usertile from "../../components/Usertile";
import Friendlist from "../../components/Friendlist";
import Competitiontile from "../../components/Competitiontile";
 import Stattracker from "../../components/Stattracker";
// import month from "../../json/FitBitMonth.json";
// import week from "../../json/FitBitWeek.json";
// import day from "../../json/FitBitDaily.json";
//import { Session } from "inspector";

class Dashboard extends Component {

    componentDidUpdate() {
        console.log(this.props);
    }

    componentDidMount(){
        this.props.fetch1mData(),
        this.props.fetch1wData(),
        this.props.fetch1dData(),
        console.log(this.props)
    };
  
    renderData(){
       // console.log("daily data"  this.props.data.summary.distances)
    //    console.log("DATA", this.props.data)
    //    console.log("1wDATA", this.props.activity1w)
    //    console.log("1mDATA", this.props.activity1m)
            return (
                <div>
                <div className="rowA">
                    <div className="card darken-1 daily-card">
                        <div className="card-content">
                            {this.props.data.summary && this.props.data.summary.distances.map((e, i) => {
                                if (e.activity == "total"){e.activity = "Total"}
                                if (e.activity == "tracker"){e.activity = "Tracker"}
                                if (e.activity == "loggedActivities"){e.activity = "Logged Activities"}
                                if (e.activity == "veryActive"){e.activity = "Very Active"}
                                if (e.activity == "moderatelyActive"){e.activity = "Moderately Active"}
                                if (e.activity == "lightlyActive"){e.activity = "Lightly Active"}
                                if (e.activity == "sedentaryActive"){e.activity = "Sedentary Active"}
                                console.log
                                return (
                                    
                                    <p className="col md3 day-stats">{e.activity}: {e.distance} miles</p>
                                    // <div key={i}>
                                    //    <h2>Activity: {e.activity}</h2>
                                    
                                    //     <h2>Distance: {e.distance}</h2>
                                    // </div>
                                );
                            })}
                            </div>
                        </div>
                </div>
           
                <div className="rowB">
                <Stattracker />
                </div>
                </div>
            )
        
    }

    render() {
        return (
            <div>
                <PeopleFilter/>
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
        activity1w: state.activity1w,
        data: state.activity1d,
        activity1m: state.activity1m
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetch1dData: () => dispatch(fetch1dData()),
        fetch1wData: () => dispatch(fetch1wData()),
        fetch1mData: () => dispatch(fetch1mData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
