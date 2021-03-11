import React from 'react';
import Task from './task'
import { deleteList } from '../../actions/list_actions';

class List extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        title: this.props.list.title
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this)
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

    handleUpdate(e) {
        e.preventDefault();
        const list = Object.assign({}, this.props.list, {title:this.state.title})
        console.log(list)
        this.props.updateList(list)
    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }

    render() {
        return(
            <div className='list'>
                <form onSubmit = {this.handleUpdate}>
                    <input className='title' type="text" value={this.state.title} onChange={this.update('title')}/>   
                    <input type="submit" style={{display:"none"}}/>
                </form>
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
