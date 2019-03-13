import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  font-size: 2rem;
`;

export default function NotFound() {
  return (
    <Link to='/'>
      <NotFoundWrapper>
        <h1>Go to the main page</h1>
      </NotFoundWrapper>
    </Link>
  );
}
