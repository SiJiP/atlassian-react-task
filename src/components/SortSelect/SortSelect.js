import React from 'react';
import Select from '@atlaskit/select'
import './SortSelect.scss'
import { Sorting } from '../../common/selectData'

const SortSelect = () => {
    return (
        <Select
            className="SortSelect"
            classNamePrefix="react-select"
            appearance="default"
            options={Sorting}
            placeholder="Sort by ..."
        />
    )
}

export default SortSelect;
