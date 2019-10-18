import React, { Component } from 'react';
import './App.css';
import  IssuesComponent  from './containers/Issues/IssuesComponent'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jira issues</h1>
        <IssuesComponent />
      </div>
    );
  }
}

export default App

