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
                <div className='lists'>
                    <form onSubmit = {this.handleSubmit}>
                        <input type="text" value={this.state.title} onChange={this.update('title')}/>                    
                        <button type="submit">add</button>
                    </form>
                </div>
            )
        }
        return(
            <div className='lists'>
                <div className='list'>
                    <form onSubmit = {this.handleSubmit}>
                        <input type="text" value={this.state.title} onChange={this.update('title')}/>                    
                        <button type="submit">add</button>
                    </form>
                </div>
                {Object.values(this.props.lists).map((list, i) => (
                    <List key={i} list={list} destroyList={this.props.destroyList}/>
                ))}
            </div>
        )
    }
}

export default Lists

