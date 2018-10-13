import React, { Component } from "react";
import "./Friendlist.css";
import Usertile from "../Usertile";
import friends from "../../json/friends.json";


class Friendlist extends Component {
    state = {
        friends
    };

    render() {
        return(
            <div className="row">
                <div className="col s12 m12">
                    <div className="friend-list">
                        {this.state.friends.map(friend => (
                            <div className="friend-tile">
                                <Usertile
                                name={friend.name}
                                total={friend.total}
                                weekly={friend.weekly}
                            />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
};

export default Friendlist;
    
