import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetch1dData} from '../../actions';
import axios from 'axios';
// import * as actions from './actions';
import "./Dashboard.css";
import Usertile from "../../components/Usertile";
import Friendlist from "../../components/Friendlist";
import Competitiontile from "../../components/Competitiontile";
import Stattracker from "../../components/Stattracker";
import month from "../../json/FitBitMonth.json";
import week from "../../json/FitBitWeek.json";
import day from "../../json/FitBitDaily.json";

class Dashboard extends Component {

    componentDidMount(){
        //THIS GETS THE DATA WE NEED BUT I CANT GET IT DOWN TO THE COMPONENT
    //   this.data =  this.props.fetch1dData()
    //     .then((res) => {return res.value.data.summary.distances[0]})
        // THIS IS SUPPOSED TO WORK BUT DOESNT BECAUSE WHEN WE TRY TO MAP OVER PROPS, IT DOES NOT SEE ANY DATA. DATA COMES BACK UNDEFINED
       this.props.fetch1dData();
       console.log(this.props)
    };
  

    // state = {
    //     data: month
    // }

    // getDay = () => {
    //     this.setState({ data: day })
    // }

    // getMonth = () => {
    //     this.setState({ data: month });
    // }

    // getWeek = () => {
    //     this.setState({ data: week });
    // }
    // renderData(){
    //     // console.log(data)
    //     return this.props.data.map(data => {
    //         return (
    //             <div className="card darken-1" key={data.activities}>
    //                 <div className="card-content">
    //                     {/* <span className="card-title">{survey.title}</span>
    //                     <p>
    //                         {survey.body}
    //                     </p>
    //                     <p className="right">
    //                         Sent On: {new Date(survey.dateSent).toLocaleDateString()}
    //                     </p>
    //                 </div>
    //                 <div className="card-action">
    //                     <a>Yes: {survey.yes}</a>
    //                     <a>No: {survey.no}</a> */}
    //                 </div>
    //             </div>
    //         )
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             {this.renderData()}
    //         </div>
    //     );
    // }
    render() {
       console.log(this.data)
        return (
            <div>
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
                        {/* <Stattracker 
                            data = {this.state.data}
                            getMonth = {this.getMonth}
                            getWeek = {this.getWeek}
                            getDay = {this.getDay}
                            daily = {day}
                            week = {week}
                            month = {month}
                        /> */}
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
            </div>
        );
    };
};
function mapStateToProps(state) {
    return {data: state.data}
}
export default connect(mapStateToProps, {fetch1dData})(Dashboard);