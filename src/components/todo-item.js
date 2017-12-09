import React, { Component } from 'react';

class TodoItem extends Component {

  deleteTask(id) {
    this.props.onDelete(id)
  }

  render() {
    return (
      <li className="task">
        <strong>{this.props.task.name}</strong> <button onClick={this.deleteTask.bind(this, this.props.task.id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
