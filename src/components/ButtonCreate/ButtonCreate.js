import React from 'react';
import Button from '@atlaskit/button'

const ButtonCreate = props => (
    <Button appearance={props.appearance} type={props.type} onClick={props.onClick}>
        { props.children }
    </Button>
);

export default ButtonCreate;