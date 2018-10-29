import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Users = props => {
  return (
    <div>
      <ul>
        {props.users.map((el, i) => (
          <li key={i}>{el.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.search
  };
}

export default connect(mapStateToProps)(Users);
