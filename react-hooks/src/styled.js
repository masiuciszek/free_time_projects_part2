import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #373737;
  /* Change the props on the form depending if it is opened or not */
  width: ${props => (props.barOpened ? '30rem' : '2rem')};
  /* if bar opened, normal cursor on the whole form if closed , then show pointer on the whole form so user knows */
  cursor: ${props => (props.barOpened ? 'auto' : 'pointer')};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Input = styled.input`
  font-size: 0.8rem;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? '1rem' : '0rem')};
  border: none;
  color: #fff;
  transition: all 300ms cubic-bezier(0.655, 0.03, 0.515, 0.955);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? 'auto' : 'none')};
  cursor: ${props => (props.barOpened ? 'pointer' : 'none')};
  background-color: transparent;
  border: none;
  ouline: none;
  color: #fff;
`;
