import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const NotFound = () => (
  <div>
    <h3>page not found mate</h3>
    <Link to="/">
      {' '}
      <Button>Go back</Button>{' '}
    </Link>
  </div>
);

export default NotFound;
