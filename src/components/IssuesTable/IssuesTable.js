import React from 'react';
import './IssuesTable.scss';
import SortSelect from '../SortSelect/SortSelect'
import ButtonCreate from '../ButtonCreate/ButtonCreate';

const IssuesTable = (props) => {
    return (
        <div>
            <ButtonCreate>Create new issue</ButtonCreate>
            <SortSelect value="some value" inputValue="another value"/>
            <table className="IssuesTable">
                <thead>
                    <tr>
                        <td>Issue</td>
                        <td>Assignee</td>
                        <td>Labels</td>
                        <td>Priority</td>
                    </tr>
                </thead>
                <tbody>
                    {props.issuesData.map(dataEl => {
                        return (
                            <tr key={dataEl.assigneeId}>
                                <td>{dataEl.summary}</td>
                                <td>{dataEl.priority}</td>
                                <td>{dataEl.assigneeId}</td>
                                <td>{dataEl.labelIds}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default IssuesTable;