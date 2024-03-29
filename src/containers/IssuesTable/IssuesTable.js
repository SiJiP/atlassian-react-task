import React, { Component } from 'react';
import './IssuesTable.scss';
import SortSelect from '../../components/SortSelect/SortSelect'
import ButtonCreate from '../../components/ButtonCreate/ButtonCreate';
import { Link } from 'react-router-dom';
import ModalD from '../../components/ModalD/ModalD';
import * as actionCreators from '../../store/actions/action';
import { connect } from 'react-redux';
import { Label } from '../../common/selectData';
import Lozenge from '@atlaskit/lozenge';
import PriorityLowest from '@atlaskit/icon-priority/glyph/priority-lowest';
import PriorityHighest from '@atlaskit/icon-priority/glyph/priority-highest';
import PriorityMedium from '@atlaskit/icon-priority/glyph/priority-medium';
import PHeader from '../../components/PageHeader/PageHeader'
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs';


class IssuesTable extends Component {

    state = {
        isOpen: false,
        currentElement: null,
        sortingOptions: null,
        issuesData: []
    };


    open = (el) => this.setState({ isOpen: true, currentElement: el });

    close = () => this.setState({ isOpen: false });

    submitEdit = (data) => {
        const refactorData = { ...data };
        refactorData.assigneeId = data.assigneeId.id
        // refactorData.priority = data.priority.value;
        refactorData.id = this.state.currentElement.id
        this.props.onEditIssue(refactorData)
        this.close();
    }

    compareLabel = (dataEl) => {
        return Label.filter(a => {
            if (dataEl) {
                return dataEl.some(b => {
                    return +a.id === +b
                })
            }
        })
    }

    breadcrumbs = (
        <BreadcrumbsStateless onExpand={() => {}}>
          <BreadcrumbsItem text="Atlassian project" key="Atlassian project" href="/"/>
          <BreadcrumbsItem text="Jira issues" key="Jira issues" href="/"/>
        </BreadcrumbsStateless>
      );

    checkPriority = (name) => {
        switch(name){
            case 'Low':
                return (
                    <div>
                        <PriorityLowest size="small" /> 
                        <span>{name}</span>
                    </div>);
            case 'Medium':
                return (
                    <div>
                        <PriorityMedium size="small" /> 
                        <span>{name}</span>
                    </div>)
            case 'High':
                return (
                    <div>
                        <PriorityHighest size="small" /> 
                        <span>{name}</span>
                    </div>);
            default: 
                return null;
        }
    }

    static getDerivedStateFromProps(props) {
        return { issuesData: props.issuesData };
    }


    render() {
        const { isOpen } = this.state;
        return (
            <div className="IssuesTable">
                <PHeader breadcrumbs={this.breadcrumbs}/>
                <Link to="/create-issue">
                    <ButtonCreate type="button" appearance="primary">Create new issue</ButtonCreate>
                </Link>
                <SortSelect direction={this.props.sortChange} />
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
                        {(this.state.issuesData) ? this.state.issuesData.map((dataEl) => {
                            return (
                                <tr key={dataEl.id}>
                                    <td onClick={() => this.open(dataEl)}>{dataEl.summary}</td>
                                    <td>{(() => {
                                        let res = null
                                        this.props.usersData.forEach(el => {
                                            if (dataEl.assigneeId === el.id)
                                                res = el.displayName
                                        })
                                        return res
                                    })()}</td>
                                    <td>{this.compareLabel(dataEl.labelIds).map(el => {
                                        return (<div className="lozenge" key={el.id}>
                                            <Lozenge appearance="default" isBold={false}>{el.label}</Lozenge>
                                        </div>
                                        )
                                    })
                                    }</td>
                                    <td>{this.checkPriority(dataEl.priority.label)} </td>
                                </tr>
                            )
                        }) : null}
                    </tbody>
                </table>
                {(this.state.isOpen) ? (
                    <ModalD isOpen={isOpen} close={this.close} submit={this.submitEdit} issueData={this.state.currentElement} usersData={this.props.usersData} />
                ) : null}
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