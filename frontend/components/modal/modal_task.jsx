import React from 'react';

class ModalTask extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            description: "",
            body: "",
            task_id: -1
        }
        this.handleCreateComment = this.handleCreateComment.bind(this)
        this.handleUpdateTask = this.handleUpdateTask.bind(this)
    }

    componentDidMount(){
        this.props.fetchTask(this.props.task_id)
        .then(()=>this.setState({description:this.props.task.description}))
    }

    handleCreateComment(e) {
      e.preventDefault();
      const commentForm = Object.assign({}, {body:this.state.body}, {task_id:this.props.task.id})
      this.props.createComment(commentForm).then(()=> {
        this.setState({
        ...this.state,
        task_id: -1
        })
      })
    }

    handleUpdateTask(e) {
        e.preventDefault();
        const taskForm = Object.assign({}, {
            title: this.props.task.title,
            description: this.state.description,
            id:this.props.task.id,
            status: this.props.task.title,
        })
        this.props.updateTask(taskForm).then(()=> {
            this.setState({
                body: "",
                task_id: -1
            })
        })
    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }

    render() {
        if(!Object.keys(this.props.task).length) return <div>loading...</div>
        return(
            <div className='modal-child-main'>
                <h2>{this.props.task.title}</h2>
                <div className='modal-title '>Description:</div>

                <form onSubmit={this.handleUpdateTask}>
                    <textarea className='modal-description' type="text" value={this.state.description} onChange={this.update('description')}></textarea>
                    <button style={{display: 'none'}} type="submit" ></button>
                </form>

                <div className='modal-title comments'>Comments:</div>

                <div className='modal-body comments-body'>
                    {this.props.task.comments.map((comment,i)=> {
                    return <div className='modal-comment' key={i}>-{comment.body}</div>
                    })}
                </div>

                <form onSubmit={this.handleCreateComment}>
                    <input className='modal-comment-form'type="text" value={this.state.body} onChange={this.update('body')}/>
                    <button type="submit">Submit Comment</button>
                </form>
            </div>
        )
    }
}

export default ModalTask

// this.props.task.comments.map(comment=> {
//                     return <div>{comment}</div>
//                 }) : <div>no comments</div>}