import React, { Component } from 'react';
import Todo from './Todo';
// import { Consumer } from '../App';

class Todos extends Component {
  render() {
    const { todos } = this.props;
    return (
      <>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </>
    );
  }
}

export default Todos;
