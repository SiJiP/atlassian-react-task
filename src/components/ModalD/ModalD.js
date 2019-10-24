import React from 'react';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import DefaultForm from '../DefaultForm/DefaultForm';
import ButtonCreate from '../ButtonCreate/ButtonCreate';
import './ModalD.scss'

const ModalD = (props) => {
  return (
    <ModalTransition>
      {props.isOpen && (
        <Modal
          heading="Edit issue"
          onClose={props.close}>
                <form className="modalD">
                  <DefaultForm onSubmit={props.submit} issueData={props.issueData} usersList={props.usersData}>
                    <ButtonCreate type="button" onClick={props.close} appearance="subtle">
                      Cancel
                        </ButtonCreate>
                    <ButtonCreate type="submit" appearance="primary">
                      Edit issues
                      </ButtonCreate>
                  </DefaultForm>
                </form>
        </Modal>
      )}
    </ModalTransition>
  )
}

export default ModalD;