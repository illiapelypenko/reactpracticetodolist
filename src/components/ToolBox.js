import React, { Component } from 'react';
// import AddTodoForm from './AddTodoForm';
import styled from 'styled-components';
import { Consumer } from '../App';

const ToolBoxWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  padding: 10px 20px 10px 20px;

  i {
    transition: all 0.2s;
    color: green;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .spin {
    transform: rotate(45deg);
    color: red;
  }
`;

class ToolBox extends Component {
  handleClick = (toggleForm, e) => {
    //rotating icon
    e.target.classList.contains('spin')
      ? e.target.classList.remove('spin')
      : e.target.classList.add('spin');
    toggleForm();
  };

  render() {
    return (
      <Consumer>
        {contextValue => (
          <ToolBoxWrapper>
            <i
              className='fas fa-plus'
              onClick={this.handleClick.bind(this, contextValue.toggleForm)}
            />
          </ToolBoxWrapper>
        )}
      </Consumer>
    );
  }
}

export default ToolBox;
