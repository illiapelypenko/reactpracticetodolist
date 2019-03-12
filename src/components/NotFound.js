import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrapper = styled.section`
  display: flex;
`;

export default function NotFound() {
  return <Link to='/'>Go to the main page</Link>;
}
