import React from 'react';
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux'
import ModalList from './modal_list'

function Modal({modal, closeModal}) {
    if (!modal) {
        return null
    }
    var component;
    switch(modal) {
        case 'open':
            component = <ModalList/>
            break;
        case 'close':
            return null 
        default:
            return null;
    }

    const closeAction = ()=> {
        closeModal()
    }

    return (
        <div className="modal-child" onClick={closeAction}>
            {component}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);