import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action';
import IssuesTable from '../../components/IssuesTable/IssuesTable'

class IssuesComponent extends Component {
  render() {
    return (
      <div>
        <IssuesTable issuesData={this.props.issues} />
      </div>
    )
  }
}

const issues = {
  summary: "secondIssue",
  priority: 'low',
  assigneeId: 2,
  labelIds: [4, 2, 3]
}

const mapStateToProps = state => {
  return {
    issues: state.atlassian.issues,
    users: state.atlassian.users
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onListIssues: () => dispatch(actionCreators.issues()),
//     onCreateIssues: (issue) => dispatch(actionCreators.issuesCreate(issue)),
//     onEditIssues: (issues) => dispatch(actionCreators.issuesEdit(issue))
//   }
// }

export default connect(mapStateToProps)(IssuesComponent);