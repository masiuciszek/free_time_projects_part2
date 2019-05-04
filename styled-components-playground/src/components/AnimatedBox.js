import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0%{
  transform : rotate(0deg)
}
50%{
  transform : rotate(360deg)
}
0%{
  transform : rotate(-360deg)
}

`;

export const AnimatedBox = styled.div`
  padding: 2rem;
  width: 200px;
  height: 200px;
  border: 2px solid red;
  animation: ${rotate} 3s ease-in-out;
`;
