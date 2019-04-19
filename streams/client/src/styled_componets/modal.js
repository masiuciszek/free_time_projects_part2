import styled from 'styled-components';

export const Modal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background: rgba(253, 253, 253, 0.2);
  width: 60%;
  box-shadow: 4px 4px 4px 6px #ccc;
  color: #222;
  margin: 7rem 0;
  padding: 2rem;
`;
export const BtnWrapper = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  align-items: center;
  /* width: 20%; */
`;

export const Button = styled.button`
  padding: 0.6rem 8rem;
  background: ${props => (props.Delete ? '#f74831' : '#07a9f9')};
  border-radius: 1rem;
  border: none;
  transition: 0.7s;
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  margin: 0 10px;
  height: 60%;

  &:hover {
    transition: 0.7s;
    background: ${props => (props.Delete ? '#c11111' : '#2f6fce')};
  }
`;
