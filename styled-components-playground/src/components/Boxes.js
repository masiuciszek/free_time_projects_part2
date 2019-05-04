import styled, { css } from 'styled-components';

const Box = css`
  width: 150px;
  height: 150px;
  border: 3px solid ${props => props.borderColour};
  margin: 1rem;
  background: ${props => props.background};
`;

export const PinkBox = styled.div`
  ${Box}
`;
export const BlueBox = styled.div`
  ${Box}
`;
