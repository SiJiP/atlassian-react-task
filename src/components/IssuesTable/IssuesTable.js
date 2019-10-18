import React from 'react';

const IssuesTable = (props) => {
    console.log(props.issuesData)
    return (
        <table>
            <thead>
                <tr>
                    <td>Issue</td>
                    <td>Assignee</td>
                    <td>Labels</td>
                    <td>Priority</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    )
}

export default IssuesTable;