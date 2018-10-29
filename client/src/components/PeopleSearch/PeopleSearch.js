import React from 'react';
import { connect } from 'react-redux';
// import { filterText } from '../actions/filters';
import { fetchUsers } from '../../actions';
import { withRouter } from 'react-router-dom';

/**
 * Grab the search results from the state and put them in the component somewhere.
 * 
 * Make the actions dispatch to an API route where the user's query will be processed and the results will be returned to the front end.
 */
 
class PeopleFilters extends React.Component {
    state = {
        query: ''
    }

    handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSearch = (e) => {
        e.preventDefault();

        this.props.search(this.state.query);
        this.props.history.push('/users');
    }

    render (){
        return (
        <div style={{ marginBottom: 15 }}>
            <input type='text' placeholder='search' name='query' value={this.state.query} onChange={this.handleInputChange} />

            <button onClick={this.handleSearch}>Search</button>
            {/*// value={props.filters.text}
                // onChange={(e) => {
                //     props.dispatch(filterText(e.target.value));
                // }}
                ></input>
        */}

        
        </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        users: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (query) => dispatch(fetchUsers(query))
    };
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeopleFilters));