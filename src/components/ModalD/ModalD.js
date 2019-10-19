import React from 'react';
import ModalDialog, { ModalTransition, ModalFooter } from '@atlaskit/modal-dialog';
import DefaultForm from '../DefaultForm/DefaultForm';
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import './ModalD.scss'

const ModalD = (props) => {
    console.log('modal')
    return (
      <div className="ModalD">
        <ModalTransition>
          {props.isOpen && (
            <ModalDialog
              onClose={props.close}
              heading="Edit issue"
              components={{
                Container:() => {
                  return (
                    <DefaultForm onSubmit={props.onSubmit}>
                        <ButtonCreate type="button" onClick={props.close} appearance="subtle">
                                Cancel
                        </ButtonCreate>
                      <ButtonCreate type="submit" appearance="primary">
                          Edit issues
                      </ButtonCreate>
                    </DefaultForm>
                  )
                }
              }}>
            </ModalDialog>
          )}
        </ModalTransition>
        </div>
    )
}

export default ModalD;