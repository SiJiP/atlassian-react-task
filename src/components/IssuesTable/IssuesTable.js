import React, {Component, setState} from 'react';
import './IssuesTable.scss';
import SortSelect from '../SortSelect/SortSelect'
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import { Link } from 'react-router-dom';
import ModalD from '../ModalD/ModalD'

class IssuesTable extends Component {

  state= { isOpen: false };

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  onSubmit = (data) => console.log(data);
    
    render(){
    const { isOpen } = this.state;
    return (
        <div className="IssuesTable">
            <Link to="/create-issue">
                <ButtonCreate type="button" appearance="primary">Create new issue</ButtonCreate>
            </Link>
            <SortSelect/>
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
                    {this.props.issuesData.map(dataEl => {
                        return (
                            <tr key={dataEl.assigneeId}>
                                <td onClick={this.open}>{dataEl.summary}</td>
                                <td>{dataEl.assigneeId}</td>
                                <td>{dataEl.labelIds}</td>
                                <td>{dataEl.priority}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
           <ModalD isOpen={isOpen} close={this.close} submit={this.onSubmit}/>
        </div>
    )
 }
}

export default IssuesTable;