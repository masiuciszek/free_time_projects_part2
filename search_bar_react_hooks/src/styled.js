import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34473f;
  /* change with of the form if it is opened or not */
  width: ${props => (props.barOpened ? '30rem' : '2rem')};
  cursor: ${props => (props.barOpened ? 'auto' : 'pointer')};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: all 333ms cubic-bezier(0.645, 0.045, 0.035, 1);
`;

export const Input = styled.input`
  font-size: 0.8rem;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? '1rem' : '0rem')};
  border: none;
  color: #fff;
  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:focus,
  &:active {
    outline: none;
  }
  &::placehodler {
    color: #fff;
  }
`;

export const Button = styled.button`
  pointer-events: ${props => (props.barOpened ? 'auto' : 'none')};
  cursor: ${props => (props.barOpened ? 'pointer' : 'none')};
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
`;
