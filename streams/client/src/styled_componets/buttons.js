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
  background: '#fe4934';

  /* color: '#fefefe';
  borderradius: '3rem';
  width: '7rem';
  padding: '.7rem';
  margintop: '10px';
  fontweight: '800';
  fontsize: '.7rem'; */
`;
