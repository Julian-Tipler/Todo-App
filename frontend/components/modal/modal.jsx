import React from 'react';
import { closeModal } from '../../actions/modal_actions'
import { fetchTask } from '../../actions/task_actions'
import { createComment } from '../../actions/comment_actions'
import { connect } from 'react-redux'
import ModalTask from './modal_task'

function Modal({modal, closeModal, fetchTask, task, createComment}) {
    if (!modal) {
        return null
    }
    var component;
    switch(modal.modal) {
        case 'open':
            component = <ModalTask task_id={modal.task_id} list_id={modal.list_id} fetchTask={fetchTask} task={task} createComment={createComment}/>
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
        task: state.task
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchTask: (task_id)=> dispatch(fetchTask(task_id)),
        createComment: (commentForm)=> dispatch(createComment(commentForm))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);