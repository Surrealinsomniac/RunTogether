import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Header extends Component {
    renderContent(){
        if (this.props.auth.isAuthenticated) {
          return <li key ="2"><a href = "/api/logout">Logout</a></li>
        } else if(this.props.auth.attemptingAuth) {
          return null;
        }

        return <li><a href = "/auth/fitbit">Login With Fitbit</a></li>
    }
    
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        //this ternary operators allows us to dynamically render where we get redirected to upon the click of the logo.
                        to = {this.props.auth ? '/dashboard' : '/'}
                        className="left brand-logo brand"
                    >
                        RunTogether
                    </Link>
                    <ul className="right rightBtn">
                        {/* referencing js in jsx, so we need curly brackets */}
                        {this.renderContent()}
                    </ul>
            </div>
          </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth}
}
// export default Header;
export default connect(mapStateToProps)(Header);

// const Navbar = props => (
//     <nav>
//     <div className="nav-wrapper black-text">
//       <a className="brand-logo black-text">RunTogether</a>
//       <ul className="black-text right hide-on-med-and-down" id="nav-mobile" >
//         <li><a className="black-text" href="/group">Groups</a></li>
//         <li> | </li>
//         <li><a className="black-text" href="/area">Area</a></li>
//         <li> | </li>
//         <li><a className="black-text" href="/dashboard">Profile</a></li>
//       </ul>
//     </div>
//   </nav>
// ); 

// export default Navbar;