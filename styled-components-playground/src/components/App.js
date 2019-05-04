import React from 'react';
import { PinkBox, BlueBox } from './Boxes';
import { AnimatedBox } from './AnimatedBox';
import { MainBanner, SecondBanner } from './Media';

export default function App() {
  return (
    <div className="container">
      <MainBanner background="red" radius="24px">
        Main
      </MainBanner>
      <SecondBanner background="pink" color="yellow">
        Second
      </SecondBanner>
      {/* <PinkBox borderColour="pink" />
      <BlueBox borderColour="steelblue" background="rgba(30,110,310,.7)" />
      <AnimatedBox /> */}
    </div>
  );
}
