import React from 'react';
import Task from './task'

class List extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        form: {
            title: ""
        }
      }
    }

    handleSubmit(e) {
        e.preventDefault();
        const task = Object.assign({}, this.state.form);
        //require thunk action here
    }

    render() {
        return(
            <div className='list'>
                <form onSubmit = {this.handleSubmit}>
                    <input placeholder="enter task"></input>
                    <button type="submit">add</button>
                </form>
                <Task/>
            </div>

        )
    }
}

export default List
