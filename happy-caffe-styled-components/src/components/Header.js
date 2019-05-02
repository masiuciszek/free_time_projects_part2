import React from 'react';
import styled from 'styled-components';

export default function Header({ img }) {
  return (
    <HeaderWrapper img={img}>
      <h1>hrllo from header</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  min-height: 100vh;
  background: url(${props => props.img}) center/cover no-repeat fixed;
`;
