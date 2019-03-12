import React, { Component } from 'react';
import { Consumer } from '../App';

class EditTodo extends Component {
  state = {
    todo: {}
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await fetch(`http://localhost:5000/todos/${id}`);
    const todo = await res.json();
    this.setState({ todo });
    console.log('edit did mount');
  }
  render() {
    return <div>{this.state.todo.task}</div>;
  }
}
//ss
export default EditTodo;
