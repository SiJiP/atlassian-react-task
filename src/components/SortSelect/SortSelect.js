import React from 'react';
import Select from '@atlaskit/select'
import './SortSelect.scss'
import { Sorting } from '../../common/selectData'

const SortSelect = (props) => {
    return (
        <Select
            className="SortSelect"
            classNamePrefix="react-select"
            appearance="default"
            options={Sorting}
            placeholder="Sort by ..."
            isClearable
            onChange={props.direction}
        />
    )
}

export default SortSelect;
