import React from 'react';
import List from './list'

class Lists extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        title: "",
        color: "yellow"
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchLists()
    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let listForm = Object.assign({}, this.state)
        this.props.createList(listForm)
        this.setState({
            title: "",
            color: "yellow"
        })
    }

    render() {
        if (Object.values(this.props.lists).length <= 0) {                  
            return(
                // <div className='lists'>
                //     <form onSubmit = {this.handleSubmit}>
                //         <input type="text" value={this.state.title} onChange={this.update('title')}/>                    
                //         <button type="submit">add</button>
                //     </form>
                // </div>
                <div></div>
            )
        }
        console.log('pre-map',this.props.lists)
        return(
            <div className='lists'>
                {Object.values(this.props.lists).map((list, i) => {
                // console.log('list from map',list)
                   return <List key={i} index={i} list={list} destroyList={this.props.destroyList} updateList={this.props.updateList} createTask={this.props.createTask} deleteTask={this.props.deleteTask} updateTask={this.props.updateTask} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
                 })}
            </div>
        )
    }
}

export default Lists

