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
      this.openModal = this.openModal.bind(this)
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
            status: !this.state.status,
        }),
        ()=> {
            const task = Object.assign({}, this.props.task, {status:this.state.status})
            this.props.updateTask(task)
        });

    }

    openModal(){
        this.props.openModal('open',this.props.task.id,this.props.list.id)
    }

    render() {

        return(
            <div className='task' >
                <form onSubmit = {this.updateTask}>
                    <div className={`task-title ${this.props.task.status===true ? 'strikethrough' : ""}`} onClick={this.openModal}>{this.props.task.title}</div>   
                    <input type="submit" style={{display:"none"}}/>
                </form>
                <div class="task-right-buttons">
                    <button class="fas fa-check" onClick={this.toggleStatus}/>
                    <button class="fas fa-trash" onClick={this.deleteTask}/>
                </div>
            </div>
        )
    }
}

export default Task
