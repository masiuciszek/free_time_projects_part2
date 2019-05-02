import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import image1 from '../img/img1.jpg';

export function Header({ img, children }) {
  return <HeaderWrapper img={img}>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  min-height: 100vh;
  background: url(${props => props.img}) center/cover no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Hero({ img, children }) {
  return <HeroWrapper img={img}>{children}</HeroWrapper>;
}

// extending the HeaderWrapper components
const HeroWrapper = styled(HeaderWrapper)`
  min-height: 60vh;
`;

Header.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};
