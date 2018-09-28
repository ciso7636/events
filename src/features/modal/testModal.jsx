import React from 'react';
import {connect} from 'react-redux';
import { Modal}  from 'semantic-ui-react';
import {closeModal} from './modalAction';
 

const mapStateToProps = (state) => {
  return {
    modalProps: state.modals.modalProps
  }
}

const actions = {
  closeModal
}

const TestModal = ({closeModal, modalProps}) => (

    <Modal closeIcon="close" open={true} onClose={closeModal}>
      <Modal.Header>Test Modal</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>{modalProps}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
)

export default connect(mapStateToProps, actions)(TestModal);