import styled from 'styled-components';

export const MyForm = styled.form`
  width: 60vw;
  border: 1px solid #ccc;
  height: 100%;
  box-shadow: 4px 4px 12px #ccc;
  padding: 1.5rem 1.7rem;
  border-radius: 1rem;
  margin-top: 3rem;
`;
export const MyInput = styled.input`
  width: 90%;
  border: none;
  box-shadow: 4px 4px 12px #ccc;
  padding: 0.5rem 0.7rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  &:focus {
    box-shadow: 6px 6px 5px #6664;
    /* padding: 3px 2px 4px 3px; */
    padding: 0.7rem 0.8rem;
    margin: 5px 1px 3px 0px;
    transition: 0.2s;
  }
`;
