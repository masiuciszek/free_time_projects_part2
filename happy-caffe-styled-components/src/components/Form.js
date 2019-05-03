import styled from 'styled-components';
import React from 'react';
import { Button } from './Buttons';

const Form = ({ myRef }) => {
  const handleRef = e => {
    e.preventDefault();
    myRef.current.focus();
    document.title = 'mango';
  };
  return (
    <FormWrapper>
      <h2>Sign up Form</h2>
      <form>
        <input type="text" name="" id="" ref={myRef} placeholder="" />
        <Button
          color="#fe3323"
          background="#fe453344"
          type="submit"
          onClick={handleRef}
        >
          Submit
        </Button>
      </form>
    </FormWrapper>
  );
};

export const FormWrapper = styled.section`
  text-align: center;
  ${props => props.theme.fontFamily};
  ${props => `background:${props.theme.background}`};
  ${props => `color:${props.theme.color}`};

  padding: 3rem;
  input {
    ${props => `background:${props.theme.background}`};
    ${props => `border:2px solid ${props.theme.color}`}
    width: 100%;
    margin: 1rem 0;
    padding: 0.25rem;
    ::placeholder {
      ${props => `color:${props.theme.color}`};
      ${props => props.theme.fontFamily};
    }
  }
  button {
    ${props => props.theme.fontFamily};
    ${props => `background:${props.theme.background}`};
    ${props => `color:${props.theme.color}`};
    ${props => `border:2px solid ${props.theme.color}`}
    transition:all 2s linear;
    width: 100%;
    :hover {
      background: ${props => props.theme.color};
      color: ${props => props.theme.background};
    }
  }
`;

export default Form;
