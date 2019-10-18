import React from 'react';
import Select from '@atlaskit/single-select'
import './SortSelect.scss'

const SortSelect = () => {
    return (
        <Select
            className="single-select"
            classNamePrefix="react-select"
            appearance="default"
            options={[
                { label: 'Summary', value: 'summary' },
                { label: 'Assignee', value: 'assignee' },
                { label: 'Priority', value: 'priority' },

            ]}
            placeholder="Sort by ..."
        >
            <option>some option</option>
        </Select>
    )
}

export default SortSelect;
