import React from "react";
import styled from "styled-components";
import { HashRouter } from "react-router-dom";

import GlobalTheme from "theme/provider.jsx";

import Header from "components/header.jsx";
import Footer from "components/footer.jsx";

import AppRouter from "components/router.jsx";

const GlobalWrapper = styled.div`
  position: relative;
  width: 100vw;
  overflow-x: hidden;
`;

const App = () => {
  return (
    <GlobalTheme>
      <HashRouter>
        <GlobalWrapper>
          <div>
            <Header />
            <AppRouter />
            <Footer />
          </div>
        </GlobalWrapper>
      </HashRouter>
    </GlobalTheme>
  );
};

export default App;
