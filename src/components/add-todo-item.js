import React, { Component } from 'react';
import uuid from 'uuid';

class AddTodoItem extends Component {

  constructor() {
    super();
    this.state = {
      newTask: {},
    };
  }

  handleSubmit(e) {
    if (this.refs.name.value === '') {
      alert('Title is required');
    } else {
      this.setState({
        newTask: {
          id: uuid.v4(),
          name: this.refs.name.value,
          status: 0,
        }
      }, function() {
        this.props.addTask(this.state.newTask);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="name" placeholder="task name"/>
        <button className="addTaskBtn" type="submit">Add</button>
      </form>
    );
  }
}

export default AddTodoItem;
