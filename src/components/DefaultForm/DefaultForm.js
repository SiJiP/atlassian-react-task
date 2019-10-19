import React from 'react';
import Form, { Field } from '@atlaskit/form';
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import TextField from '@atlaskit/textfield';
import { Link } from 'react-router-dom'
import './DefaultForm.scss'
import Select from '@atlaskit/select/dist/cjs/Select';
import { CheckboxField, Fieldset } from '@atlaskit/form';
import { Checkbox } from '@atlaskit/checkbox';
import { Priority, Assignee } from '../../common/selectData'


const DefaultForm = (props) => {

    return (
    <Form onSubmit={props.onSubmit}>
    {({ formProps }) => {
        return(
        <form {...formProps}>
            <Field name="summary" defaultValue="" label="Issue summary" isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field name="assigneeId" defaultValue="" label="Assignee">
                {({ fieldProps }) => <Select {...fieldProps}  options={Assignee}/>}
            </Field>
            <Field name="priority" defaultValue={Priority[1]} label="Priority">
                {({ fieldProps }) => <Select {...fieldProps} options={Priority}/>}
            </Field>
            <Fieldset legend="Labels">
                <CheckboxField name="labelId" value="1">
                    {({ fieldProps }) => <Checkbox {...fieldProps} label="Label 1" />}
                </CheckboxField>
                <CheckboxField name="labelId" value="2">
                    {({ fieldProps }) => (
                        <Checkbox {...fieldProps} label="Another Label" />
                    )}
                </CheckboxField>
                <CheckboxField name="labelId" value="3">
                    {({ fieldProps }) => (
                        <Checkbox {...fieldProps} label="New Label" />
                    )}
                </CheckboxField>
            </Fieldset>

           {props.children}

        </form>
)}}
</Form>
)
}

export default DefaultForm;