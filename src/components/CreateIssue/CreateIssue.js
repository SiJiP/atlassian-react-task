import React, { Component } from 'react';
import './CreateIssue.scss'
import DefaultForm from '../DefaultForm/DefaultForm';
import * as actionCreators from '../../store/actions/action';
import { connect } from 'react-redux';
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import { Link } from 'react-router-dom'

class CreateIssue extends Component {

    onSubmit = (data) => {
        const refactorData = {...data};
        refactorData.assigneeId = data.assigneeId.id
        refactorData.priority = data.priority.value
        this.props.onCreateIssues(refactorData)
        console.log(refactorData)
    }
    render() {
        return (
            <div className="CreateIssue">
                <h3>{this.props.children}</h3>
                <DefaultForm onSubmit={this.onSubmit}>
                    <Link to="/">
                        <ButtonCreate type="submit" appearance="subtle">
                                Cancel
                        </ButtonCreate>
                    </Link>
                    <ButtonCreate type="submit" appearance="primary">
                        Create issues
                    </ButtonCreate>
                </DefaultForm>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onListIssues: () => dispatch(actionCreators.issues()),
        onCreateIssues: (issue) => dispatch(actionCreators.issuesCreate(issue)),
        onEditIssues: (issue) => dispatch(actionCreators.issuesEdit(issue))
    }
}
export default connect(null, mapDispatchToProps)(CreateIssue);