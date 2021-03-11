import React from 'react';
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux'
import SuccessfulTransaction from './successful_transaction'
import { Link } from 'react-router-dom'

function Modal({modal, coinInfo, closeModal}) {
    if (!modal) {
        return null
    }
    var component;
    switch(modal) {
        case 'successfulTransaction':
            component = <SuccessfulTransaction/>
            break;
        case 'unsuccessfulTransaction':
            return null 
        default:
            return null;
    }

    const closeAction = ()=> {
        closeModal()
    }

    return (
        <Link to='/portfolio'className="modal-background" onClick={closeAction}>
            <div className="modal-child" onClick={e=> e.stopPropagation()}>
                {component}
            </div>
        </Link>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        coinInfo: state.entities.coinInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);