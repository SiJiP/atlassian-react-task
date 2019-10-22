import React, { Component } from 'react';
import './CreateIssue.scss'
import DefaultForm from '../DefaultForm/DefaultForm';
import * as actionCreators from '../../store/actions/action';
import { connect } from 'react-redux';
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import { Link, Redirect } from 'react-router-dom'

class CreateIssue extends Component {

    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to="/" />
        }
    }

    onSubmit = (data) => {
        const refactorData = {...data};
        refactorData.assigneeId = data.assigneeId.id
        refactorData.priority = data.priority.value
        refactorData.id = Math.floor(Math.random() * 10e3)
        this.props.onCreateIssues(refactorData);
        this.setState({
            redirect: true
        })
        console.log(refactorData)
    }
    render() {
        return (
            <div className="CreateIssue">
                <h3>{this.props.children}</h3>
                <DefaultForm onSubmit={this.onSubmit} usersList={this.props.users}>
                    <Link to="/">
                        <ButtonCreate type="submit" appearance="subtle">
                                Cancel
                        </ButtonCreate>
                    </Link>
                        <ButtonCreate type="submit" appearance="primary">
                            Create issues
                        </ButtonCreate>
                </DefaultForm>
                {(this.state.redirect) ? <Redirect to="/" /> : null}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
      users: state.users.users
    }
  };

const mapDispatchToProps = dispatch => {
    return {
        onCreateIssues: (issue) => dispatch(actionCreators.issuesCreate(issue))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateIssue);