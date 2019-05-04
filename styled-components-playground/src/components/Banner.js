import React from 'react';
import styled from 'styled-components';

export default function Banner({ title, children }) {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  );
}
const transition = time => `all ${time}s linear`;
const BannerWrapper = styled.div`
  text-align: center;
  h1 {
    text-transform: uppercase;
    color: ${props => (props.white ? '#ffeefe' : '#fff')};
    box-shadow: 3px 3px 3px 3px #2222;
    padding: 2rem;
    transition: ${transition(2)};
    &:hover {
      color: ${props => props.hover};
    }
  }
`;
