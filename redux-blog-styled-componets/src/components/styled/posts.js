import styled from 'styled-components';

const transition = time => `all ${time}s linear;`;

export const PostsWrapper = styled.div`
  transition: ${transition(3)};
  padding: 2rem;
  box-shadow: 3px 4px 3px 4px #ccc;
  margin-top: 2rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  ${props => `background:${props.theme.background}`};
  .post {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    h3 {
      text-align: center;
      font-size: 2rem;
      ${props => `color:${props.theme.color}`};
    }
    p {
      font-size: 1.2rem;
      ${props => `color:${props.theme.color}`};
    }
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  background: transparent;
  color: '#fefefe';
  border: 1px solid #000;
  transition: all 0.5s ease-in-out;
  margin: 2em;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #ececec;
  }
`;

export const BlackButton = styled(Button)`
  color: black;
  border-color: grey;
`;
export const YellowButton = styled(Button)`
  color: yellow;
  border-color: yellow;
`;
