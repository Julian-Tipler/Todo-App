import React from 'react';

class NewListForm extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        title: "",
        color: "yellow"
      }
      this.handleSubmit = this.handleSubmit.bind(this)
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
        return(
          <div >
              <form onSubmit = {this.handleSubmit}>
                  <input type="text" value={this.state.title} onChange={this.update('title')}/>                    
                  <button type="submit">add</button>
              </form>
          </div>
        )
    }
}

export default NewListForm
