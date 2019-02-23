import React, { Component } from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import Admin from "./components/AdminComponent";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import OperatorComponent from './components/OperatorComponent';
import NewRequestComponent from './components/NewRequestComponent';
import UserHomeComponent from './components/UserHomeComponent';
import NewInfoComponent from './components/NewInfoComponent';
import UserHome from './components/UserHome';
import UserMainComponent from "./components/UserMainComponent";
const history = createBrowserHistory();
class App extends Component {
  constructor() {
    super();
  }
  state = {};
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={UserComponent} />
          <Route exact path="/adminhome" component={Admin} />
          <Route exact path="/operatorhome" component={OperatorComponent}/>
          <Route exact path="/newRequest" component={NewRequestComponent}/>
          <Route exact path="/addPersonInfo" component={UserHomeComponent}/>
          <Route exact path="/newInfo" component={NewInfoComponent}/>
          <Route exact path="/UHome" component={UserHome}/>
          <Route exact path="/UpdateInfo" component={UserMainComponent}/>
        </Switch>
      </Router>
    );
}
}

export default App;
