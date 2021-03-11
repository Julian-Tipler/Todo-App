import React from 'react';
import { fetchLists } from '../../actions/list_actions';
import List from './list'

class Lists extends React.Component {
    componentDidMount() {
        this.props.fetchLists()
    }

    render() {
        if (Object.values(this.props.lists).length <= 0) {                  
            return(
                <div>Create List</div>
            )
        }
        return(
            <div className='lists'>
                {Object.values(this.props.lists).map((list, i) => (
                    <List key={i} list={list}/>
                ))}
            </div>
        )
    }
}

export default Lists

