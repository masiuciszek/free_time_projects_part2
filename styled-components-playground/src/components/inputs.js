import styled from 'styled-components';

export const InputBasic = styled.input`
  padding: 1rem;
  font-size: 1rem;
  color: blue;
  ::placeholder {
    color: red;
    margin: 1rem;
  }
`;
export const InputEmail = styled.input.attrs({
  type: 'email',
  placeholder: 'masiu@gmail.com',
})`
  padding: 1rem;
  font-size: 1rem;
  color: blue;
  ::placeholder {
    color: red;
    margin: 1rem;
  }
`;
export const InputCool = styled.input.attrs({
  type: props => props.type || 'text',
  placeholder: props => props.placeholder || 'Enter Value',
})`
  padding: 1rem;
  font-size: 1rem;
  color: blue;
  ::placeholder {
    color: red;
    margin: 1rem;
  }
`;
