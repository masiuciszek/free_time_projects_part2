import styled from 'styled-components';

const color = '#fe3';
const transition = time => `all ${time} linear`;

export const Button = styled.button`
  background: steelblue;
  font-size: ${props => (props.big ? '2rem' : '1rem')}
  background: ${color};
  padding: 0.8rem 1rem;
  border-radius: ${props => props.radius};
  color: #012;
  transition: ${transition('2s')};
  &:hover {
    background: black;
    color: #fff;
  }
`;
