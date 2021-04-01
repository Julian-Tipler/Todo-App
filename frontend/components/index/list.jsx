import React, { Component } from 'react'
import Task from './task'
import { Draggable } from 'react-beautiful-dnd'

export default class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                title: "",
                description: "",
                status: false,
                list_id: -1
        }
        this.handleSubmitTask = this.handleSubmitTask.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    

    updateTask(property) {
        return e => this.setState(prevState=> ({
                ...prevState.task,
                [property]: e.target.value
        }))
    }

    handleSubmitTask(e) {
        e.preventDefault();
        const task = Object.assign({},this.state,{list_id:this.props.list.id})
        this.props.createTask(task).then(
            ()=> this.setState({
                title: "",
                description: "",
                status: false,
            })
        )
    }

    handleDelete(e){
        e.preventDefault();
        this.props.destroyList(this.props.list)
    }

    render() {
        return (
            <Draggable draggableId={`list-${this.props.index}`} index={this.props.index} className='list'>
                {provided=> (
                    <div className='list'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                        <h3>{this.props.list.title}</h3>

                        <form onSubmit={this.handleSubmitTask}>
                            <input placeholder="enter task" type="text" value={this.state.title} onChange={this.updateTask('title')}/>
                            <button style={{display: 'none'}} type="submit">add</button>
                        </form>

                        {/* {Object.values(this.props.list.tasks).reverse().map((task, i) => (
                            <Task key={i} task={task} list={this.props.list} deleteTask={this.props.deleteTask} updateTask={this.props.updateTask} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
                        ))}                 */}
                        <button className='delete-list-button' onClick={this.handleDelete}>Delete</button>
                    </div>
                )}
            </Draggable>
        )
    }
}
