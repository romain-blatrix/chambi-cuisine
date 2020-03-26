import React from "react";
import styled from "styled-components";
import { HashRouter } from "react-router-dom";

import GlobalTheme from "theme/provider.jsx";

import Header from "components/header.jsx";
import Footer from "components/footer.jsx";

import AppRouter from "components/router.jsx";

const GlobalWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const App = () => {
  return (
    <GlobalTheme>
      <HashRouter>
        <GlobalWrapper>
          <Header />
          <AppRouter />
          <Footer />
        </GlobalWrapper>
      </HashRouter>
    </GlobalTheme>
  );
};

export default App;
