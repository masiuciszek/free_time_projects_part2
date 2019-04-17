import styled from 'styled-components';

export const SubmitBtn = styled.button`
  padding: 0.7rem 0.9rem;
  background: steelblue;
  font-size: 1.3rem;
  color: #fff;
  :hover {
    box-shadow: 0 0 10px #fff;
  }
  :disabled {
    opacity: 0.4;
  }
  border-radius: 1rem;
`;

export const CtaBtn = styled.button`
  background: ${props => (props.google ? '#fe4934' : '#fe2899')};
  padding: 0.6rem 8rem;
  color: #fefefe;
  border-radius: ${props => (props.google ? '1rem' : '2rem')};
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;
`;
