import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Button } from './button';
import { Header, Hero } from './Header';
import image1 from '../img/img1.jpg';
import image2 from '../img/img2.jpg';
import Banner from './Banner';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header white img={image1} title="Happy Caffe">
        <Banner title="Happy caffee">
          <Button background="#de4523" colour="#fff" radius="24px" />
        </Banner>
      </Header>
      <Hero img={image2} />
    </div>
  );
}

// "eslintConfig": {
//   "extends": "react-app"
// },
