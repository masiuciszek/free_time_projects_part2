import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import PostList from './PostList';
import { themeBlack, themeYellow } from './styled/themes';

export default function App() {
  const [themes, setThemes] = useState(themeBlack);

  const setBlackTheme = () => {
    setThemes(themeBlack);
    console.log('black');
  };
  const setYellowTheme = () => {
    setThemes(themeYellow);
  };

  return (
    <ThemeProvider theme={themes}>
      <>
        <MainWrapper>
          <PostList
            setBlackTheme={setBlackTheme}
            setYellowTheme={setYellowTheme}
          />
        </MainWrapper>
      </>
    </ThemeProvider>
  );
}

const MainWrapper = styled.main`
  display: flex;
  height: 100vh;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
