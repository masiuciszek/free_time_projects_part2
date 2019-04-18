import styled from 'styled-components';

export const StreamWrap = styled.div`
  height: 100%;
  width: 97%;
  display: flex;
  justify-content: flex-start;

  box-shadow: 3px 3px 3px 7px #ccc;
`;
export const StreamItems = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  margin: 5rem 1.3rem 1rem;
`;
export const Button = styled.button`
  background: ${props => (props.edit ? 'rgba(33, 33, 160, 0.708)' : '#fe3233')};
  font-weight: 900;
  border-radius: 1rem;
  color: #fff;
  padding: 0.6rem 1rem;
  margin: 8px 6px 3px;
  &:hover {
    transition: 0.7s;
    background: ${props =>
      props.edit ? 'rgba(33, 133, 260, 0.708)' : 'rgba(313, 113, 120, 0.708)'};
  }
`;
export const ButtonLink = styled.button`
  background: ${props => (props.link ? 'rgba(73, 63, 160, 0.808)' : '#fe89')};
  font-weight: 900;
  border-radius: 1rem;
  color: #fff;
  padding: 0.6rem 1rem;
  margin: 8px 6px 3px;

  &:hover {
    transition: 0.7s;
    background: ${props =>
      props.link ? 'rgba(113, 133, 560, 0.708)' : 'rgba(313, 113, 120, 0.708)'};
  }
`;
