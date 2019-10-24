import React from 'react';
import Button from '@atlaskit/button';
import './ButtonCreate.scss'

const ButtonCreate = props => (
    <Button appearance={props.appearance} type={props.type} onClick={props.onClick} className="ButtonStyle">
        { props.children }
    </Button>
);

export default ButtonCreate;