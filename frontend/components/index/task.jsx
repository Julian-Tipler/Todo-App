import React from 'react';

class Task extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
            title: this.props.task.title,
            status: this.props.task.status
        }
      this.deleteTask = this.deleteTask.bind(this)
      this.updateTask = this.updateTask.bind(this)
      this.toggleStatus = this.toggleStatus.bind(this)
    }

    deleteTask(e) {
        e.preventDefault();
        this.props.deleteTask(this.props.task)
    }

    updateTask(e) {
        e.preventDefault();
        const task = Object.assign({}, this.props.task, {title:this.state.title})
        this.props.updateTask(task)
    }
    
    update(property) {
        return e => this.setState(prevState=>({
            ...prevState,
            [property]: e.target.value,
        }));
    }
    
    toggleStatus(e) {
        e.preventDefault()

        this.setState(prevState=>({
            ...prevState,
            status: !prevState.status,
        }));
        const task = Object.assign({}, this.props.task, {status:this.state.status})
        this.props.updateTask(task)
    }

    render() {
        console.log(this.state)
        console.log(this.props.task.status)

        return(
            <div className='task'>
                {/* <div className={`task-title ${this.props.task.status ? 'strikethrough' : ""} `}>{this.props.task.title}</div> */}
                <form onSubmit = {this.updateTask}>
                    <input className={`task-title ${this.props.task.status ? 'strikethrough' : ""}`} type="text" value={this.state.title} onChange={this.update('title')}/>   
                    <input type="submit" style={{display:"none"}}/>
                </form>
                <div>
                    <button onClick={this.deleteTask}>X</button>
                    <button onClick={this.toggleStatus}>check</button>
                </div>
            </div>
        )
    }
}

export default Task
