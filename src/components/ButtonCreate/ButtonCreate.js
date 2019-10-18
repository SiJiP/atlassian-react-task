import React from 'react';
import Button from '@atlaskit/button'

const ButtonCreate = props => (
    <Button appearance="primary">{ props.children }</Button>
);

export default ButtonCreate;