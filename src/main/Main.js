import React from 'react';
import './Main.css';

class Main extends React.Component {
  state = {
    item: '',
    todos: []
  }

  onChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({todos: this.state.todos.concat(this.state.item)});
    this.setState({item: ' '});
  }

  handleRemove = (item) => {
    let updatedTodos = this.state.todos.filter((val, i) => {
      return (item !== val)
    });
    this.setState({
      todos: updatedTodos
    });
  }

  componentDidUpdate = () => {
    localStorage.setItem('todos', this.state.todos);
  }

  // componentDidMount = () => {
  //     this.setState({todos: localStorage.getItem('todos')})
  // }

  render() {
    return (
      <div id='todo'>
        <div id='add-todo'>
          <form onSubmit={this.onSubmit}>
            <input type='text' value={this.state.item} onChange={this.onChange} />
            <input type='submit' value='Add Todo' />
          </form>
        </div>
        <div id='todo-list'>
        <ul>
          {this.state.todos.map((item, index) => <li key={index}>{item}<span class='close' onClick={() => this.handleRemove(item)}>x</span></li>)}
        </ul>
        </div>
      </div>
    )
  }

}

export default Main;
