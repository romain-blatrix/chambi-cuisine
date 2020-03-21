import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalTheme from "theme/provider.jsx";

import Header from "components/header.jsx";
import Footer from "components/footer.jsx";

import AppRouter from "components/router.jsx";

const GlobalWrapper = styled.div`
  position: relative;
  width: 100vw;
  overflow-x: hidden;
`;

const MainRouter = styled(AppRouter)`
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  height: calc(var(--vh, 1vh) * 100 - ${({ theme }) => theme.headerHeight});
  z-index: 0;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const App = () => {
  return (
    <GlobalTheme>
      <Router>
        <GlobalWrapper>
          <Header />
          <MainRouter />
          <Footer />
        </GlobalWrapper>
      </Router>
    </GlobalTheme>
  );
};

export default App;
