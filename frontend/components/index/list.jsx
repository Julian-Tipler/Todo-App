import React from 'react';
import Task from './task'

class List extends React.Component {
    constructor(props) {  
      super(props)
      console.log(this.props.list)
      this.state = {
        title: this.props.list.list.title,
        task: {
            title: "",
            description: "",
            status: false,
            list_id: this.props.list.list.id
        }
      }
      this.handleDelete = this.handleDelete.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this)
      this.handleSubmitTask = this.handleSubmitTask.bind(this)
    }
    componentDidMount() {
        this.setState({
            title: this.props.list.list.title,
            task: {
                title: "",
                description: "",
                status: "",
                list_id: this.props.list.list.id
            }
        })
    }

    handleDelete(e){
        e.preventDefault();
        this.props.destroyList(this.props.list.list)
    }

    handleUpdate(e) {
        e.preventDefault();
        const list = Object.assign({}, this.props.list.list, {title:this.state.title})
        this.props.updateList(list)
    }

    handleSubmitTask(e) {
        e.preventDefault();
        const taskForm = this.state.task;
        this.props.createTask(taskForm)
        this.setState({
            title: this.props.list.list.title,
            task: {
                title: "",
                description: "",
                status: "",
                list_id: this.props.list.list.id
            }
        })
    }

    updateTitle(property) {
        return e => this.setState(prevState=> ({
            [property]: e.target.value,
            task:{
                ...prevState.task,
            }
        }));
    }

    updateTask(property) {
        return e => this.setState(prevState=> ({
            title: prevState.title,
            task:{
                ...prevState.task,
                [property]: e.target.value
            }
        }))
    }

    render() {
        return(
            <div className='list'>
                <form onSubmit = {this.handleUpdate}>
                    <input className='title' type="text" value={this.state.title} onChange={this.updateTitle('title')}/>   
                    <input type="submit" style={{display:"none"}}/>
                </form>
                <form className='create-task task' onSubmit = {this.handleSubmitTask}>
                    <input placeholder="enter task" type="text" value={this.state.task.title} onChange={this.updateTask('title')}></input>
                    <button type="submit">add</button>
                </form>
                {Object.values(this.props.list.tasks).reverse().map((task, i) => (
                    <Task key={i} task={task} deleteTask={this.props.deleteTask} updateTask={this.props.updateTask}/>
                ))}
                <button onClick={this.handleDelete}>Delete</button>
            </div>

        )
    }
}

export default List
