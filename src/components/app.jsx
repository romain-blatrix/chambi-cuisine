import React from "react";
import styled from "styled-components";
import { HashRouter } from "react-router-dom";
import scrollSnapPolyfill from "css-scroll-snap-polyfill";

import GlobalTheme from "theme/provider.jsx";

import Header from "components/header.jsx";
import Footer from "components/footer.jsx";

import AppRouter from "components/router.jsx";
import { useEffect } from "react";

const GlobalWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const App = () => {
  useEffect(() => scrollSnapPolyfill(), []);

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
