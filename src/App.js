import React, { Component } from 'react';
import './App.scss';
import  IssuesComponent  from './containers/Issues/IssuesComponent';
import { Route, Switch } from 'react-router-dom';
import CreateIssue from './containers/CreateIssue/CreateIssue';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/create-issue" component={ CreateIssue }></Route>
          <Route path="/" component={ IssuesComponent }></Route>
        </Switch>
      </div>
    );
  }
}

export default App

