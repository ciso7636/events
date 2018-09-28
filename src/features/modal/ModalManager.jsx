import React from 'react';
import { connect } from 'react-redux';
import TestModal from './testModal';
import TestModal2 from './testModal2';


const modalLookup = {
    TestModal: TestModal,
    TestModal2: TestModal2
}

const mapStateToProps = (state) =>({
    currentModal: state.modals
});


const ModalManager = ({currentModal}) => {
    let renderedModal;

    if(currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType]

        renderedModal = <ModalComponent {...modalProps}/>;
    }


    return (
        <span>{renderedModal}</span>
    )
}

export default connect(mapStateToProps)(ModalManager)