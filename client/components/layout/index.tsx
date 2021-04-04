import styled from "@emotion/styled";
import React from "react";
import Header from "./header";

const Main = styled.main``;

const index: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
export default index;
