import React, { Component } from 'react';
import './App.scss';
import  IssuesComponent  from './containers/Issues/IssuesComponent';
import { Route, Switch } from 'react-router-dom';
import CreateIssue from './components/CreateIssue/CreateIssue';
import ModalD from './components/ModalD/ModalD'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jira issues</h1>
        <Switch>
          <Route path="/create-issue" component={ CreateIssue }></Route>
          <Route path="/" component={ IssuesComponent }></Route>
          <Route path="/edit-issue" component={ ModalD }></Route>
        </Switch>
      </div>
    );
  }
}

export default App

