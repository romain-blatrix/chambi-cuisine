import React, { useEffect } from "react";
import styled from "styled-components";
import { HashRouter } from "react-router-dom";

import GlobalTheme from "theme/provider.jsx";

import Header from "components/header.jsx";
import AppRouter from "components/router.jsx";
import Footer from "components/footer.jsx";

const GlobalWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const App = () => (
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

export default App;
