import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './actions';
import Dashboard from "./Pages/Dashboard";
import Group from "./Pages/Group";
import Signin from "./Pages/Signin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

// const App = () => (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//         <Switch>
//           <Route exact path="/signin" component={Signin} />
//           <Route exact path="/dashboard" component={Dashboard} />
//           <Route exact path="/group" component={Group} />
//         </Switch>
//         <Footer />
//         </Wrapper>
//       </div>
//      </Router>
// );

// export default App;


class App extends Component{
  //once the component has mounted, check if the use is signed in
  //we are using connect component of react-redux to be able to call action creators
   componentDidMount(){
       this.props.fetchUser();
  }

   render() {
       return (
           //container className makes the form the size that it currently is
           <div>
              <BrowserRouter>
                   <div>
                      <Navbar/>
                      <Route exact path = "/" component={Signin}/>
                      <Route exact path = "/dashboard" component={Dashboard}/>
                      <Route exact path = "/group" component={Group}/>
                      <Footer/>
                   </div>
              </BrowserRouter>
           </div>
       );
   } 
};
// export default App;
export default connect(null, actions)(App);