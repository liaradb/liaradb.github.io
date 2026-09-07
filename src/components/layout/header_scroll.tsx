"use client";

import { GlobalStyles } from "@mui/material";

export const HeaderScroll = () => <GlobalStyles styles={styles} />;

const styles = `
@property --scroll-percentage {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

:root {
  animation: scroll-percentage-animation linear;
  animation-timeline: scroll(root);
}

@keyframes scroll-percentage-animation {
  from {
    --scroll-percentage: 0;
  }

  to {
    --scroll-percentage: 1000;
  }
}
`;
