import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list';
import AddTodoItem from './components/add-todo-item';
import uuid from 'uuid';

class App extends Component {

  getTasks() {
    this.setState({
      tasks: [
        {
          id: uuid.v4(),
          name: 'Make breakfast',
          status: 1,
        },
        {
          id: uuid.v4(),
          name: 'Prepare work meeting for 9:30am',
          status: 0,
        },
      ]
    });
  }

  componentWillMount() {
    this.getTasks();
  }

  handleAddTask(task) {
    const tasks = this.state.tasks;
    tasks.push(task);
    this.setState({ tasks: tasks });
  }

  handleDeleteTask(id) {
    const tasks = this.state.tasks;
    const index = tasks.findIndex(x => x.id === id);
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  }

  handleCompletedTask(id) {
    const tasks = this.state.tasks;
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = 1;
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List</h1>
        </header>
        <div className="App-intro">
            <p>Testing out ReactJS</p>
        </div>
        <AddTodoItem addTask={this.handleAddTask.bind(this)} />
        <TodoList
          tasks={this.state.tasks}
          onDelete={this.handleDeleteTask.bind(this)}
          onDone={this.handleCompletedTask.bind(this)}
        />
      </div>
    );
  }
}

export default App;
