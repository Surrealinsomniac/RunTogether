import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetch1wData, fetch1mData} from '../../actions';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
//import React from "react";
import "./Stattracker.css";



class Stattracker extends Component {



    componentDidUpdate() {
        console.log(this.props);
    }

    componentDidMount(){
        this.props.fetch1mData(),
        this.props.fetch1wData()
    };
    
    
    // getWeek = () => {
    //     data = this.props.activity1w["activities-distance"];
    //     LineChart.forceUpdate(data);
    // }
    // getMonth = () => {
    //     data = this.props.activity1m["activities-distance"];
    //     LineChart.forceUpdate(data);
    // }
  
    

    renderData(){
    //    var week = JSON.parse(this.props.activity1w)
        var data = this.props.activity1m["activities-distance"];
        //  getWeek = () => {
        //     data = this.props.activity1w["activities-distance"];
        //     LineChart.forceUpdate(data);
        // }
        //  getMonth = () => {
        //     data = this.props.activity1m["activities-distance"];
        //     LineChart.forceUpdate(data);
        // }

       console.log("stattracker 1wDATA", this.props.activity1w["activities-distance"])
       console.log(" stattracker 1mDATA", this.props.activity1m["activities-distance"])         
            return (

                // <div className="card darken-1">
                //      <div className="card-content">
                //         {this.props.data.summary && this.props.data.summary.distances.map((e, i) => {
                //             return (
                //                 <div key={i}>
                //                    <h2>Activity: {e.activity}</h2>
                //                     <h2>Distance: {e.distance}</h2>
                //                 </div>
                //             );
                //         })}
                //     </div>
                //     </div>

         //<div className="col s10 m10"></div>
         <div>
          <div className="card stattracker-tile"> 
             <div className="chart">
                 <LineChart width={750} height={200} data={this.props.activity1m["activities-distance"]}>
                     <Line type="monotone" dataKey="value" stroke="#8884d8" />
                     <XAxis  dataKey="dateTime"/>
                     <YAxis/>
                 </LineChart>
             </div> 
             <div className="stats-display">
                 <div className="divider"></div>
                    <div className="section numbers-display">
                        <h1>Week</h1>
                    </div> 
                  <div className="divider"></div>
                    <div className="section numbers-display">
                        <h1 className="month">Month</h1> 
                        </div>
                  </div> 
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
};
function mapStateToProps(state) {
    return {
        activity1w: state.activity1w,
        activity1m: state.activity1m
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetch1wData: () => dispatch(fetch1wData()),
        fetch1mData: () => dispatch(fetch1mData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Stattracker);



// const Stattracker = props => (
//     <div className="col s10 m10">
//         <div className="card stattracker-tile">
//             <div className="chart">
//                 <LineChart width={750} height={200} data={props.data}>
//                     <Line type="monotone" dataKey="distance" stroke="#8884d8" />
//                     <XAxis/>
//                     <YAxis/>
//                 </LineChart>
//             </div>
//             <div className="stats-display">
//                 <div className="divider"></div>
//                     <div className="section numbers-display" onClick={props.getDay}>
//                         <h5>Today</h5>
//                         <p>
//                            {props.daily.map(dist => (
//                                <span>{dist.distance}  </span>
//                            ))} 
//                         </p>
//                     </div>
//                 <div className="divider"></div>
//                     <div className="section numbers-display" onClick={props.getWeek}>
//                         <h5>Week</h5>
//                         <p>
//                             {props.week.map(dist => (
//                                <span>{dist.distance}  </span> 
//                             ))}
//                         </p>
//                     </div>
//                 <div className="divider"></div>
//                     <div className="section numbers-display" onClick={props.getMonth}>
//                         <h5>Month</h5>
//                         <p>
//                             {props.month.map(dist => (
//                                 <span>{dist.distance}  </span>
//                             ))}
//                         </p>
//                     </div>
//             </div>
//        </div>
//     </div>
// );

// export default Stattracker;