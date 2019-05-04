import styled, { keyframes, css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(sizes).reduce((key, value) => {
  key[value] = (...args) => css`
    @media (min-width: ${sizes[value]}px) {
      ${css(...args)};
    }
  `;
  return key;
}, {});
console.log(media);

export const MainBanner = styled.div`
  width: 70%;
  height: 200px;
  font-size: 2rem;
  background: pink;
  color: #232323;
  ${media.phone`background:${props => props.background};color: green`}
  ${media.tablet`border-radius:${props => props.radius};`}
`;
export const SecondBanner = styled.div`
  width: 60%;
  height: 100px;
  font-size: 2rem;
  background: blue;
  color: black;
  ${media.phone`background:${props => props.background};color: red`}
  ${media.phone`color:${props => props.color};color: yellow`}
`;
