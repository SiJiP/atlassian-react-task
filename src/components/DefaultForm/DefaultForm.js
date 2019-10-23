import React from 'react';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import './DefaultForm.scss'
import Select from '@atlaskit/select/dist/cjs/Select';
import { CheckboxField, Fieldset } from '@atlaskit/form';
import { Checkbox } from '@atlaskit/checkbox';
import { Priority } from '../../common/selectData'


const DefaultForm = (props) => {

    let defaultIndexUser = null;
    let defaultIndexPriority = null

    const usersForOptions = () => {
        const result = props.usersList.reduce((accum, current, index) => {
            if (props.issueData && current.id === props.issueData.assigneeId) {
                defaultIndexUser = index
            }
            return [...accum, {
                label: current.displayName,
                id: current.id
            }]
        }, []);
        return result;
    }

    const priorityForOptions = () => {
        if (props.issueData) {
            Priority.forEach((el, index) => {
                if (el.value === props.issueData.priority.value) {
                    defaultIndexPriority = index
                }
            })
        }
    }

    return (
        <Form onSubmit={props.onSubmit}>
            {({ formProps }) => {
                return (
                    <form {...formProps}>
                        <Field name="summary" defaultValue={(props.issueData) ? props.issueData.summary : ''} label="Issue summary" isRequired>
                            {({ fieldProps }) => <TextField {...fieldProps} />}
                        </Field>
                        <Field name="assigneeId" defaultValue={usersForOptions()[defaultIndexUser]} label="Assignee" isRequired>
                            {({ fieldProps }) => <Select {...fieldProps} options={usersForOptions()} />}
                        </Field>
                        {priorityForOptions()}
                        <Field name="priority" defaultValue={Priority[defaultIndexPriority]} label="Priority">
                            {({ fieldProps }) => <Select {...fieldProps} options={Priority} />}
                        </Field>
                        <Fieldset legend="Labels">
                            <CheckboxField name="labelIds" value="1" >
                                {({ fieldProps }) => {
                                    let res = false;
                                    if (props.issueData && props.issueData.labelIds) {
                                        res = props.issueData.labelIds.some(el => {
                                            return el.toString() === fieldProps.value
                                        })

                                    }
                                    return <Checkbox {...fieldProps} label="Label 1" defaultChecked={res}/>
                                }
                                }
                            </CheckboxField>
                            <CheckboxField name="labelIds" value="2" >
                                {({ fieldProps }) => {
                                    let res = false;
                                    if (props.issueData && props.issueData.labelIds) {
                                        res = props.issueData.labelIds.some(el => {
                                            return el.toString() === fieldProps.value
                                        })
                                    }
                                    return <Checkbox {...fieldProps} label="Another Label" defaultChecked={res} />
                                }}
                            </CheckboxField>
                            <CheckboxField name="labelIds" value="3" >
                                {({ fieldProps }) => {
                                    let res = false;
                                    if (props.issueData && props.issueData.labelIds) {
                                        res = props.issueData.labelIds.some(el => {
                                            return el.toString() === fieldProps.value
                                        })
                                    }
                                    return <Checkbox {...fieldProps} label="New Label" defaultChecked={res} />
                                }}
                            </CheckboxField>
                        </Fieldset>

                        {props.children}

                    </form>
                )
            }}
        </Form>
    )
}

export default DefaultForm;