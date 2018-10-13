import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Group from "./Pages/Group";
import Navbar from "./components/Navbar";
import './App.css';

const App = () => (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/group" component={Group} />
        </Switch>
      </div>
     </Router>
);

export default App;
