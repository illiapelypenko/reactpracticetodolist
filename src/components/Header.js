import React, { Component } from 'react';
import styled from 'styled-components';
import ToolBox from './ToolBox';

const HeaderWrapper = styled.section`
  background-color: coral;
  color: #f4f4f4;
  display: flex;
  justify-content: space-between;
`;
const LogoWrapper = styled.section`
  font-size: 4rem;
  font-weight: bolder;
  padding: 10px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <LogoWrapper>To Do List</LogoWrapper>
        <ToolBox />
      </HeaderWrapper>
    );
  }
}

export default Header;
