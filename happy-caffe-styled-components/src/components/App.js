import React from 'react';
import { Button } from './button';
import Header from './Header';
import image1 from '../img/img1.jpg';

export default function App() {
  return (
    <div>
      <Header img={image1} />
      <h2>sty</h2>
      <Button>Yoo</Button>
    </div>
  );
}

// "eslintConfig": {
//   "extends": "react-app"
// },
