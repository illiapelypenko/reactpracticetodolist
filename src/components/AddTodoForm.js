import React, { Component } from 'react';
import FormPart from './FormPart';
import styled from 'styled-components';
import { Consumer } from '../App';

const FormWrapper = styled.form`
  padding: 10px;
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: coral;
    font-size: 3rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  input[type='submit'] {
    background-color: coral;
    color: #f4f4f4;
    font-weight: bolder;
    font-size: 1.8rem;
    padding: 10px 20px;
    outline: none;
    align-self: center;
    margin-top: 20px;
    border: none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

class AddTodoForm extends Component {
  state = {
    values: {
      id: '',
      task: '',
      description: ''
    },
    errors: {
      id: '',
      task: '',
      description: ''
    }
  };

  handleChange = e => {
    const { id, value } = e.target;

    this.setState(state => ({
      values: {
        ...state.values,
        [id]: value
      }
    }));
  };

  handleSubmit = (handleAddTodo, e) => {
    e.preventDefault();
    const { id, task, description } = this.state.values;
    const {
      id: idError,
      task: taskError,
      description: descriptionError
    } = this.state.errors;

    if (!id || !task || !description) {
      this.setState(state => ({
        errors: {
          id: id ? '' : 'Enter id',
          task: task ? '' : 'Enter task',
          description: description ? '' : 'Enter description'
        }
      }));
      return;
    }

    handleAddTodo({ ...this.state.values });
    this.setState(state => ({
      values: {
        id: '',
        task: '',
        description: ''
      },
      errors: {
        id: '',
        task: '',
        description: ''
      }
    }));
  };

  render() {
    const { id, task, description } = this.state.values;
    const {
      id: idError,
      task: taskError,
      description: descriptionError
    } = this.state.errors;

    return (
      <Consumer>
        {contextValue => (
          <FormWrapper
            onSubmit={this.handleSubmit.bind(this, contextValue.handleAddTodo)}>
            <h1>Add ToDo</h1>
            <FormPart
              name='id'
              type='number'
              placeholder='Enter id'
              title='Id'
              value={id}
              error={idError}
              onChange={this.handleChange}
            />
            <FormPart
              name='task'
              type='text'
              placeholder='Enter task'
              title='Task'
              value={task}
              error={taskError}
              onChange={this.handleChange}
            />
            <FormPart
              name='description'
              type='text'
              placeholder='Enter description'
              title='Description'
              value={description}
              error={descriptionError}
              onChange={this.handleChange}
            />
            <input type='submit' />
          </FormWrapper>
        )}
      </Consumer>
    );
  }
}

export default AddTodoForm;
