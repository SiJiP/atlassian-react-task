import React from 'react';
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';
import DefaultForm from '../DefaultForm/DefaultForm';
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import './ModalD.scss'

const ModalD = (props) => {
    return (
        <ModalTransition>
          {props.isOpen && (
            <ModalDialog
              heading="Edit issue"
              onClose={props.close}
              width="large"
              height={500}
              components={{
                Container:() => {
                  return (
                    <div className="modalDialog">
                    <h1>Edit Issue</h1>
                    <DefaultForm onSubmit={props.submit} issueData={props.issueData} usersList={props.usersData}>
                        <ButtonCreate type="button" onClick={props.close} appearance="subtle">
                                Cancel
                        </ButtonCreate>
                      <ButtonCreate type="submit" appearance="primary">
                          Edit issues
                      </ButtonCreate>
                    </DefaultForm>
                    </div>
                  )
                }
              }}>
            </ModalDialog>
          )}
        </ModalTransition>
    )
}

export default ModalD;