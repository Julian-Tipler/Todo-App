import React from 'react';

class ModalTask extends React.Component {
    constructor(props){
        super(props)
        this.state={
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchTask(this.props.task_id)
    }

    handleSubmit(e) {
      e.preventDefault();
      let commentForm = Object.assign({}, this.state)
      this.props.createComment(commentForm)
      this.setState({
          body: ""
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
                    {this.props.task.comments.map(comment=> {
                    return <div>{comment.body}</div>
                    })}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body} onChange={this.update('body')}></input>
                    <input type="submit">Submit Comment</input>
                </form>
            </div>
        )
    }
}

export default ModalTask

// this.props.task.comments.map(comment=> {
//                     return <div>{comment}</div>
//                 }) : <div>no comments</div>}