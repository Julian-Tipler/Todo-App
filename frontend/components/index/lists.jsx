import React from 'react';
import List from './list'
import { DragDropContext, Droppable} from 'react-beautiful-dnd'

class Lists extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        title: "",
        color: "yellow",
        lists: [],
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.onDragEnd = this.onDragEnd.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchLists()
        .then(()=> {
            this.setState({
                ...this.state,
                lists: Object.values(this.props.lists)
            })
        })
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

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        const reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);

            return result;
        };

        const lists = reorder(
        this.state.lists,
        result.source.index,
        result.destination.index
        );

        this.setState({
            ...this.state,
            lists
        });
    }

    render() {
        console.log('props',this.props.lists)
        console.log('state',this.state.lists)
        if (Object.values(this.state.lists).length <= 0) {                  
            return(
                <div></div>
            )
        }
        return(
            <DragDropContext onDragEnd = {this.onDragEnd} className='lists'>
                <Droppable droppableId='droppable'>
                    {provided => (
                        <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                         > 
                            {this.state.lists.map((list, i) => {
                            return <List key={i} index={i} list={list} destroyList={this.props.destroyList} updateList={this.props.updateList} createTask={this.props.createTask} deleteTask={this.props.deleteTask} updateTask={this.props.updateTask} openModal={this.props.openModal} closeModal={this.props.closeModal}/>
                            })}
                            {provided.placeholder}
                        </div>

                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}

export default Lists

