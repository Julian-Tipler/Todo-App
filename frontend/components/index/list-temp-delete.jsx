import React from 'react';
import Task from './task'

class List extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        title: "",
        task: {
            title: "",
            description: "",
            status: false,
            list_id: 1
        }
      }
      this.handleDelete = this.handleDelete.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this)
      this.handleSubmitTask = this.handleSubmitTask.bind(this)
      this.updateTask = this.updateTask.bind(this)
    }
    componentDidMount() {
        
        // this.setState({
        //     task: {
        //         ...this.state.task,
        //         list_id:this.props.list.id +1
        //     },
        //     title: this.props.list.title,
        // })
    }

    handleDelete(e){
        e.preventDefault();
        this.props.destroyList(this.props.list)
    }

    handleUpdate(e) {
        e.preventDefault();
        const list = Object.assign({}, this.props.list, {title:this.state.title})
        this.props.updateList(list)
    }

    handleSubmitTask(e) {
        e.preventDefault();

        const taskForm = this.state.task;
        this.props.createTask(taskForm)
        this.setState({
            title: this.props.list.title,
            task: {
                title: "",
                description: "",
                status: false,
                list_id: 1
            }
        })
    }

    updateTitle(property) {
        return e => this.setState({ [property]: e.target.value });
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
            <div className={`list ${this.props.index}`}>
                <div>{this.props.index}</div>
                {/* <form onSubmit = {this.handleUpdate}>
                    <input className='title' type="text" placeholder={this.props.list.title} onChange={this.updateTitle('title')}/>   
                    <input type="submit" style={{display:"none"}}/>
                </form> */}
                <div className='title-delete'>
                    <div className='title'>{this.props.list.title}</div>
                    <button onClick={this.handleDelete}>Delete List</button>
                </div>
                <form className='create-task task' onSubmit = {this.handleSubmitTask}>
                    <input placeholder="enter task" type="text" value={this.state.task.title} onChange={this.updateTask('title')}></input>
                    <button type="submit">add</button>
                </form>
                {Object.values(this.props.list.tasks).reverse().map((task, i) => (
                    <Task key={i} task={task} list={this.props.list} deleteTask={this.props.deleteTask} updateTask={this.props.updateTask} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
                ))}
            </div>

        )
    }
}

export default List
