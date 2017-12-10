import React, { Component } from 'react';

class TodoItem extends Component {

  deleteTask(id) {
    this.props.onDelete(id);
  }

  completeTask(id) {
    this.props.onDone(id);
  }

  render() {

    let taskClass = 'task';

    if (this.props.task.status === 1) {
      taskClass += ' completed';
    }

    return (
      <li className={ taskClass }>
        <strong>{this.props.task.name}</strong>
        {this.props.task.status === 1 ? (
          <span> Completed</span>
        ) : (
          <button onClick={this.completeTask.bind(this, this.props.task.id)}>
            Done
          </button>
        )}
        <button onClick={this.deleteTask.bind(this, this.props.task.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
