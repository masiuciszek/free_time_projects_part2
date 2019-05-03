import styled from 'styled-components';

// const border = (px, colour) => `${px} solid ${colour}`;
export const Button = styled.button`
  padding: 0.5rem;

  background: transparent;
  color: ${props => props.color};
  border: 1px solid #000;
  background: ${props => props.background}
  transition: all 0.5s ease-in-out;
  margin: 2em;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #ececec;
  }
`;

export const DangerButton = styled(Button)`
  color: red;
  border-color: red;
`;
export const SuccessButton = styled(Button)`
  color: green;
  border-color: green;
`;
export const SubmitButton = styled(Button)``;
