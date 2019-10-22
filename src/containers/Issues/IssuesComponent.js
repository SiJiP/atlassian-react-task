import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action';
import * as usersActions from '../../store/actions/users'
import IssuesTable from '../../components/IssuesTable/IssuesTable'
import './IssuesComponent.scss';
import issueData from '../../common/issues';
import usersList from '../../common/users';
import { getSortingIssues } from '../../store/selectors/select'

class IssuesComponent extends Component {


  changeSorting = (direction) => {
    if(direction){
      this.props.onSortOption(direction.value)
    } else {
      this.props.onSortOption('default')
    }
    console.log(this.props.issues)
  }
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
        <IssuesTable issuesData={this.props.issues} usersData={this.props.users} sortChange={this.changeSorting} />
      </div>
    )
  }
}




const mapStateToProps = (state) => {
  return {
    issues: getSortingIssues(state),
    users: state.users.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onListIssues: (issues) => dispatch(actionCreators.issues(issues)),
    onCreateIssues: (issue) => dispatch(actionCreators.issuesCreate(issue)),
    onEditIssues: (issue) => dispatch(actionCreators.issuesEdit(issue)),
    onSetUsers: (users) => dispatch(usersActions.usersList(users)),
    onSortOption: (option) => dispatch(actionCreators.sortOption(option))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssuesComponent);