import React from 'react';
import PageHeader from '@atlaskit/page-header';



const PHeader = (props) => {
    return (
        <PageHeader breadcrumbs={props.breadcrumbs}>
            Jira Issues
        </PageHeader>
    )
}
export default PHeader