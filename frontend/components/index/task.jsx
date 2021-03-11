import React from 'react';

class Task extends React.Component {
    render() {
        return(
            <div className='task'>
                <div className='task-title'>Walk the dog</div>
                <button>X</button>
                <button>check</button>
            </div>

        )
    }
}

export default Task
