import React from 'react';
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux'
import ModalTask from './modal_task'

function Modal({modal, lists, closeModal}) {
    if (!modal) {
        return null
    }
    console.log(modal)
    var component;
    switch(modal.modal) {
        case 'open':
            console.log(lists)
            component = <ModalTask id={modal.id} list_id={modal.list_id}/>
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
        <div className='modal-background' onClick={closeAction}>
            <div className="modal-child" >
                {component}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
        lists: state.lists
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);