import React, {Component} from 'react';
import './IssuesTable.scss';
import SortSelect from '../SortSelect/SortSelect'
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import { Link } from 'react-router-dom';
import ModalD from '../ModalD/ModalD';
import * as actionCreators from '../../store/actions/action';
import { connect } from 'react-redux';


class IssuesTable extends Component {

  state = {
      isOpen: false,
      currentElement: null,
      sortingOptions: null,
    };


  open = (el) => this.setState({ isOpen: true, currentElement: el});

  close = () => this.setState({ isOpen: false });

  submitEdit = (data) => {
    const refactorData = {...data};
    refactorData.assigneeId = data.assigneeId.id
    refactorData.priority = data.priority.value;
    refactorData.id = this.state.currentElement.id
    this.props.onEditIssue(refactorData)
    this.close();
  }

  componentDidMount(){
      console.log(this.props)
  }
 




    render(){
    const { isOpen } = this.state;
    return (
        <div className="IssuesTable">
            <Link to="/create-issue">
                <ButtonCreate type="button" appearance="primary">Create new issue</ButtonCreate>
            </Link>
            <SortSelect direction={this.props.sortChange}/>
            <table >
                <thead>
                    <tr>
                        <td>Issue</td>
                        <td>Assignee</td>
                        <td>Labels</td>
                        <td>Priority</td>
                    </tr>
                </thead>
                <tbody>
                    {(this.props.issuesData) ? this.props.issuesData.map((dataEl, index) => {
                        return (
                            <tr key={dataEl.id}>
                                <td onClick={() => this.open(dataEl)}>{dataEl.summary}</td>
                                <td>{(() => {
                                    let res = null
                                    this.props.usersData.forEach( el => {
                                        if(dataEl.assigneeId === el.id)
                                        res = el.displayName
                                    })
                                    return res
                                })()}</td>
                                <td>{dataEl.labelIds}</td>
                                <td>{dataEl.priority}</td>
                            </tr>
                        )
                    }): null}
                </tbody>
            </table>
            {(this.state.isOpen) ? (
                <ModalD isOpen={isOpen} close={this.close} submit={this.submitEdit} issueData={this.state.currentElement} usersData={this.props.usersData}/>
            ) : null }
        </div>
    )
 }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditIssue: (issue) => dispatch(actionCreators.issuesEdit(issue)),
        onCreateIssues: (issue) => dispatch(actionCreators.issuesCreate(issue))
    }
}

export default connect(null, mapDispatchToProps)(IssuesTable);