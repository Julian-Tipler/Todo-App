import React from 'react';

class ModalTask extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            description: "",
            body: "",
            task_id: -1
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchTask(this.props.task_id)
    }

    handleSubmit(e) {
      e.preventDefault();
      const commentForm = Object.assign({}, {body:this.state.body}, {task_id:this.props.task.id})
      this.props.createComment(commentForm).then(()=> {
        this.setState({
        description: "",
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
                <div className='modal-title description'>Description:</div>
                <div className='modal-body description-body'>{this.props.task.description}</div>
                <div className='modal-title comments'>Comments:</div>
                <div className='modal-body comments-body'>
                    {this.props.task.comments.map((comment,i)=> {
                    return <div key={i}>{comment.body}</div>
                    })}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body} onChange={this.update('body')}/>
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