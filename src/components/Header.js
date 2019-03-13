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

  .alert {
    font-size: 1rem;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <LogoWrapper>
          To Do List{' '}
          <span className='alert'>
            (Don't care about id's, they awfully bad, but I need them and don't
            need external database for making good ids)
          </span>
        </LogoWrapper>
        <ToolBox />
      </HeaderWrapper>
    );
  }
}

export default Header;
