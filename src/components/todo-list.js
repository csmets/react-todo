import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component {

  deleteTask(id) {
    this.props.onDelete(id);
  }

  completeTask(id) {
    this.props.onDone(id);
  }

  render() {
    let todoItems;

    if (this.props.tasks) {
      todoItems = this.props.tasks.map(task =>
        <TodoItem
          key={task.name}
          task={task}
          onDelete={this.deleteTask.bind(this)}
          onDone={this.completeTask.bind(this)}
        />
      );
    }

    return (
      <div className="TodoList">
        <ul>
          { todoItems }
        </ul>
      </div>
    );
  }
}

export default TodoList;
