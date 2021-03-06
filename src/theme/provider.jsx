// @flow

import React, { memo, type Node } from "react";
import { ThemeProvider } from "styled-components";

import colors from "theme/colors.js";

type Props = {|
  children?: Node
|};

const GlobalTheme = ({ children }) => {
  const theme = {
    colors,
    headerHeight: "80px",
    footerHeight: "200px"
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default memo<Props>(GlobalTheme);
