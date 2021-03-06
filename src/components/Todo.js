import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Consumer } from '../App';

//Style
const TodoWrapper = styled.section`
  padding: 10px;
`;
const TaskWrapper = styled.section`
  font-weight: bold;
  font-size: 1.5rem;
  cursor: default;
  display: flex;
  justify-content: space-between;

  .is {
    display: flex;
  }

  i {
    color: red;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    margin: 0px 5px;
  }

  i[class='fas fa-edit'] {
    color: black;
  }
`;
const DescriptionWrapper = styled.section`
  display: ${props => (props.isOpened ? 'block' : 'none')};
  font-size: 1.3rem;
`;

class Todo extends Component {
  state = {
    isOpened: false
  };

  handleClick = e => {
    this.setState(state => ({
      isOpened: !state.isOpened
    }));
  };

  render() {
    const { id, task, description } = this.props.todo;
    const isOpened = this.state.isOpened;

    return (
      <Consumer>
        {contextValue => (
          <TodoWrapper>
            <TaskWrapper>
              <p onClick={this.handleClick}>{task}</p>
              <div className='is'>
                <i
                  className='fas fa-times'
                  onClick={contextValue.handleDeleteTodo.bind(this, id)}
                />
                <Link to={`/edit/${id}`}>{<i className='fas fa-edit' />}</Link>
              </div>
            </TaskWrapper>
            <DescriptionWrapper isOpened={isOpened}>
              {description}
            </DescriptionWrapper>
          </TodoWrapper>
        )}
      </Consumer>
    );
  }
}

export default Todo;
