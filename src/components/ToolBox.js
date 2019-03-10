import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  state = {
    showForm: false
  };
  handleClick = e => {
    //rotating icon
    e.target.classList.contains('spin')
      ? e.target.classList.remove('spin')
      : e.target.classList.add('spin');
    this.setState(state => ({
      showForm: !state.showForm
    }));
  };

  render() {
    return (
      <Consumer>
        {contextValue => (
          <ToolBoxWrapper>
            <Link to={this.state.showForm ? '/' : '/add'}>
              {<i className='fas fa-plus' onClick={this.handleClick} />}
            </Link>
          </ToolBoxWrapper>
        )}
      </Consumer>
    );
  }
}

export default ToolBox;
