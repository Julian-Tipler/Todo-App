import React from 'react';
import Task from './task'
import { deleteList } from '../../actions/list_actions';

class List extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        title: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const task = Object.assign({}, this.state);
        //
    }

    handleDelete(e){
        e.preventDefault();
        this.props.destroyList(this.props.list)
    }

    render() {
        return(
            <div className='list'>
                <div>{this.props.list.title}</div>
                <form onSubmit = {this.handleSubmit}>
                    <input placeholder="enter task"></input>
                    <button type="submit">add</button>
                </form>
                {/* {Object.values(this.props.list).map((list, i) => (
                    <Task key={i} task={list}/>
                ))} */}
                <button onClick={this.handleDelete}>Delete</button>
            </div>

        )
    }
}

export default List
