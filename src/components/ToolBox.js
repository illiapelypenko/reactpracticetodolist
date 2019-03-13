import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToolBoxWrapper = styled.section`
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 10px 20px 10px 20px;

  i {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 0px 5px;
    color: #f4f4f4;
  }
`;

class ToolBox extends Component {
  render() {
    return (
      <ToolBoxWrapper>
        <Link to={'/'}>{<i className='fas fa-home' />}</Link>
        <Link to={'/add'}>{<i className='fas fa-plus' />}</Link>
      </ToolBoxWrapper>
    );
  }
}

export default ToolBox;
