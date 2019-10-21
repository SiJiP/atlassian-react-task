import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action';
import * as usersActions from '../../store/actions/users'
import IssuesTable from '../../components/IssuesTable/IssuesTable'
import './IssuesComponent.scss';
import issueData from '../../common/issues';
import usersList from '../../common/users';

class IssuesComponent extends Component {

  componentDidMount(){
    if(this.props.issues.length === 0){
      this.props.onListIssues(issueData);
    }
    if(this.props.users.length === 0){
        this.props.onSetUsers(usersList)
    }
  }
  render() {
    return (
      <div className="IssuesComponent">
        <IssuesTable issuesData={this.props.issues} usersData={this.props.users} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    issues: state.issues.issues,
    users: state.users.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onListIssues: (issues) => dispatch(actionCreators.issues(issues)),
    onCreateIssues: (issue) => dispatch(actionCreators.issuesCreate(issue)),
    onEditIssues: (issue) => dispatch(actionCreators.issuesEdit(issue)),
    onSetUsers: (users) => dispatch(usersActions.usersList(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesComponent);